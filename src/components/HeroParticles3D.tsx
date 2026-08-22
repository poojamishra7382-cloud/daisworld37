import React, { useEffect, useRef } from 'react';

interface HeroParticles3DProps {
  mouseX: number;
  mouseY: number;
}

export default function HeroParticles3D({ mouseX, mouseY }: HeroParticles3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Particle nodes representing global talent connections
    interface Node3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const colors = ['#38bdf8', '#818cf8', '#34d399', '#60a5fa', '#a78bfa'];
    const COUNT = 50;
    const nodes: Node3D[] = [];

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 400 + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const fov = 350;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse influence in 3D
      const targetCamX = mouseX * 45;
      const targetCamY = mouseY * 35;

      const projectedNodes: { px: number; py: number; scale: number; node: Node3D }[] = [];

      nodes.forEach((node) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Wrap around boundaries
        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;
        if (node.z < 30) node.z = 450;
        if (node.z > 450) node.z = 30;

        // 3D Perspective Projection
        const effectiveZ = node.z;
        const scale = fov / (fov + effectiveZ);
        const px = width / 2 + (node.x - targetCamX) * scale;
        const py = height / 2 + (node.y - targetCamY) * scale;

        projectedNodes.push({ px, py, scale, node });
      });

      // Draw connecting 3D constellation lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.25 * p1.scale;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D particle nodes
      projectedNodes.forEach(({ px, py, scale, node }) => {
        const r = node.radius * scale * 1.5;
        if (r <= 0) return;

        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.alpha * scale;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow ring
        ctx.strokeStyle = node.color;
        ctx.globalAlpha = node.alpha * scale * 0.3;
        ctx.beginPath();
        ctx.arc(px, py, r * 2.2, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-[3]"
    />
  );
}
