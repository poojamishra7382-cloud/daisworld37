import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CountryHub {
  name: string;
  code: string;
  flag: string;
  lat: number;
  lng: number;
  roles: string;
  vacancies: string;
  color: string;
}

const HUBS: CountryHub[] = [
  { name: 'India (Headquarters)', code: 'IN', flag: '🇮🇳', lat: 19.0760, lng: 72.8777, roles: 'Talent Sourcing & Training Hub', vacancies: 'Head Office: Mumbai', color: '#38bdf8' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱', lat: 52.3676, lng: 4.9041, roles: 'Healthcare & Hospital Placements', vacancies: '350+ Openings', color: '#60a5fa' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', lat: 52.5200, lng: 13.4050, roles: 'Ausbildung & Nursing Trainees', vacancies: '500+ Openings', color: '#34d399' },
  { name: 'France', code: 'FR', flag: '🇫🇷', lat: 48.8566, lng: 2.3522, roles: 'Hospitality & Culinary Professionals', vacancies: '200+ Openings', color: '#818cf8' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭', lat: 46.8182, lng: 8.2275, roles: 'Specialized Medical Staff', vacancies: '120+ Openings', color: '#f43f5e' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', lat: -33.8688, lng: 151.2093, roles: 'Skilled Healthcare & Engineering', vacancies: '280+ Openings', color: '#fbbf24' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', lat: 25.2048, lng: 55.2708, roles: 'Hospitality, Oil & Gas, Luxury Spa', vacancies: '450+ Openings', color: '#a78bfa' },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

interface ThreeGlobeProps {
  selectedCountry?: string;
  onSelectCountry?: (country: CountryHub) => void;
}

export default function ThreeGlobe({ selectedCountry, onSelectCountry }: ThreeGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHub, setActiveHub] = useState<CountryHub | null>(HUBS[1]); // Default to Netherlands
  const [isInteracting, setIsInteracting] = useState(false);
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!selectedCountry) return;
    const hub = HUBS.find((h) => h.name.toLowerCase().includes(selectedCountry.toLowerCase()) || h.code === selectedCountry);
    if (hub) {
      setActiveHub(hub);
      // Calculate target rotation to center this country
      const phi = (90 - hub.lat) * (Math.PI / 180);
      const theta = (hub.lng + 180) * (Math.PI / 180);
      targetRotationRef.current = {
        x: phi - Math.PI / 2,
        y: -theta + Math.PI / 2,
      };
    }
  }, [selectedCountry]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 290;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GLOBE_RADIUS = 95;

    // 1. Inner Sphere with Dark Deep Navy Glow
    const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS - 0.5, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x051329,
      emissive: 0x030d1e,
      shininess: 25,
      transparent: true,
      opacity: 0.95,
    });
    const baseSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(baseSphere);

    // 2. Outer Glow Atmosphere
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 3, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity * 1.5;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // 3. Grid Latitude / Longitude lines for high-tech look
    const gridGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 32, 16);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 4. Dot Grid (Continent Particle Sphere)
    const DOTS_COUNT = 3600;
    const dotPositions: number[] = [];
    const dotColors: number[] = [];
    const tempColor = new THREE.Color();

    for (let i = 0; i < DOTS_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / DOTS_COUNT);
      const theta = Math.sqrt(DOTS_COUNT * Math.PI) * phi;
      const v = new THREE.Vector3(
        GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi),
        GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi),
        GLOBE_RADIUS * Math.cos(phi)
      );
      dotPositions.push(v.x, v.y, v.z);

      // Gradient color for dots
      const c = (v.y / GLOBE_RADIUS + 1) / 2;
      tempColor.setHSL(0.58 + c * 0.1, 0.8, 0.45);
      dotColors.push(tempColor.r, tempColor.g, tempColor.b);
    }

    const dotsGeometry = new THREE.BufferGeometry();
    dotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    dotsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dotColors, 3));

    const dotsMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const dotsMesh = new THREE.Points(dotsGeometry, dotsMaterial);
    globeGroup.add(dotsMesh);

    // 5. Hub Pins and Flight Arcs
    const indiaHub = HUBS[0];
    const indiaPos = latLngToVector3(indiaHub.lat, indiaHub.lng, GLOBE_RADIUS);

    // India Beacon Pulse
    const indiaBeaconGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const indiaBeaconMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const indiaBeacon = new THREE.Mesh(indiaBeaconGeo, indiaBeaconMat);
    indiaBeacon.position.copy(indiaPos);
    globeGroup.add(indiaBeacon);

    // Hubs markers & Arcs
    const arcCurves: THREE.QuadraticBezierCurve3[] = [];
    const arcComets: { mesh: THREE.Mesh; curveIndex: number; t: number; speed: number }[] = [];

    HUBS.forEach((hub, idx) => {
      const hubPos = latLngToVector3(hub.lat, hub.lng, GLOBE_RADIUS);

      // Hub Marker
      const markerGeo = new THREE.SphereGeometry(idx === 0 ? 3 : 2.4, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: hub.color });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      markerMesh.position.copy(hubPos);
      globeGroup.add(markerMesh);

      // Hub Outer Pulsing Ring
      const ringGeo = new THREE.RingGeometry(2.8, 4.2, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(hubPos.clone().multiplyScalar(1.01));
      ringMesh.lookAt(hubPos.clone().multiplyScalar(2));
      globeGroup.add(ringMesh);

      // Create Flight Arc from India to Destinations
      if (idx !== 0) {
        const distance = indiaPos.distanceTo(hubPos);
        const midPoint = new THREE.Vector3()
          .addVectors(indiaPos, hubPos)
          .multiplyScalar(0.5);

        // Raise midpoint to form a graceful 3D arc over globe surface
        const arcHeight = Math.min(Math.max(distance * 0.45, 25), 65);
        midPoint.normalize().multiplyScalar(GLOBE_RADIUS + arcHeight);

        const curve = new THREE.QuadraticBezierCurve3(indiaPos, midPoint, hubPos);
        arcCurves.push(curve);

        // Draw glowing curved arc line
        const points = curve.getPoints(50);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        const arcMat = new THREE.LineBasicMaterial({
          color: hub.color,
          transparent: true,
          opacity: 0.65,
        });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        globeGroup.add(arcLine);

        // Animated Comet Particle traveling on the arc
        const cometGeo = new THREE.SphereGeometry(1.4, 8, 8);
        const cometMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const cometMesh = new THREE.Mesh(cometGeo, cometMat);
        globeGroup.add(cometMesh);

        arcComets.push({
          mesh: cometMesh,
          curveIndex: arcCurves.length - 1,
          t: Math.random(),
          speed: 0.006 + Math.random() * 0.004,
        });
      }
    });

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2);
    dirLight1.position.set(150, 100, 150);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x818cf8, 1.5);
    dirLight2.position.set(-150, -50, -150);
    scene.add(dirLight2);

    // Initial globe orientation to highlight Europe-India corridor
    globeGroup.rotation.y = -Math.PI / 3;
    globeGroup.rotation.x = Math.PI / 12;

    // Mouse Interaction / Drag to rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
      targetRotationRef.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      dragVelocity = { x: deltaX * 0.005, y: deltaY * 0.005 };
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        targetRotationRef.current = null;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.007;
      globeGroup.rotation.x += deltaY * 0.007;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Animate Arcs Comets
      arcComets.forEach((comet) => {
        comet.t += comet.speed;
        if (comet.t > 1) comet.t = 0;
        const curve = arcCurves[comet.curveIndex];
        if (curve) {
          const pt = curve.getPoint(comet.t);
          comet.mesh.position.copy(pt);
        }
      });

      // Smooth target rotation if a country tab was clicked
      if (targetRotationRef.current) {
        globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.05;
        globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.05;
        if (
          Math.abs(targetRotationRef.current.y - globeGroup.rotation.y) < 0.01 &&
          Math.abs(targetRotationRef.current.x - globeGroup.rotation.x) < 0.01
        ) {
          targetRotationRef.current = null;
        }
      } else if (!isDragging) {
        // Natural gentle idle auto-rotation
        globeGroup.rotation.y += 0.0025;
        // Inerita damping
        globeGroup.rotation.y += dragVelocity.x;
        globeGroup.rotation.x += dragVelocity.y;
        dragVelocity.x *= 0.95;
        dragVelocity.y *= 0.95;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleCountryClick = (hub: CountryHub) => {
    setActiveHub(hub);
    onSelectCountry?.(hub);
    const phi = (90 - hub.lat) * (Math.PI / 180);
    const theta = (hub.lng + 180) * (Math.PI / 180);
    targetRotationRef.current = {
      x: phi - Math.PI / 2,
      y: -theta + Math.PI / 2,
    };
  };

  return (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px] flex items-center justify-center select-none">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Info Overlay on Globe */}
      {activeHub && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-auto">
          <div className="glassmorphism bg-[#071938]/85 border border-cyan-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl max-w-xs transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-2xl">{activeHub.flag}</span>
              <div>
                <h4 className="text-white font-black text-base">{activeHub.name}</h4>
                <p className="text-cyan-400 text-xs font-semibold">{activeHub.vacancies}</p>
              </div>
            </div>
            <p className="text-white/80 text-xs leading-relaxed mb-3">
              {activeHub.roles}
            </p>
            <div className="flex items-center justify-between text-[11px] font-bold text-white/60 border-t border-white/10 pt-2">
              <span>Origin: Mumbai, India 🇮🇳</span>
              <span className="text-emerald-400 font-semibold">● Active Flight Arc</span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Country Pills at Bottom */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-auto flex flex-wrap items-center justify-center gap-2">
        {HUBS.map((hub) => (
          <button
            key={hub.code}
            onClick={() => handleCountryClick(hub)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              activeHub?.code === hub.code
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                : 'glassmorphism bg-white/10 text-white/90 hover:bg-white/20 border border-white/15'
            }`}
          >
            <span>{hub.flag}</span>
            <span>{hub.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/20 text-[11px] text-cyan-300 font-medium">
        <span>🖱️ Drag to rotate 3D Globe</span>
      </div>
    </div>
  );
}
