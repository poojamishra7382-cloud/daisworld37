import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, Users, TrendingUp, MapPin } from 'lucide-react';

interface Slide {
  image: string;
  badge: string;
  heading: string;
  highlight: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.pexels.com/photos/4930705/pexels-photo-4930705.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Now Hiring — across globe 2026',
    heading: 'We Are Hiring',
    highlight: 'Nurses',
    subtext: 'Build your career across global.'
  },
  {
    image: 'https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Join Our Medical Team',
    heading: 'Work With Top',
    highlight: 'Hospitals',
    subtext: 'Partnered with leading healthcare facilities across Europe, Australia, Canada, USA, Middle East & more.',
  },
  {
    image: 'https://images.pexels.com/photos/36078152/pexels-photo-36078152.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: 'Visa + Air Ticket Included',
    heading: 'Your Career',
    highlight: 'Beyond Borders',
    subtext: 'Complete visa support, air ticket, and language training — fully handled by company.',
  },
  {
    image: 'https://images.pexels.com/photos/29941468/pexels-photo-29941468.jpeg?auto=compress&cs=tinysrgb&w=1920',
    badge: '2500+ Open Positions',
    heading: 'A Better Future',
    highlight: 'Awaits You',
    subtext: 'Take the next step in your nursing career with salaries up to €5,500/month.',
  },
];

const trustItems = [
  { icon: Users, label: '2500 Open Positions' },
  { icon: TrendingUp, label: 'Up to €5,500/mo' },
  { icon: MapPin, label: 'Europe & More' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTOPLAY_MS = 7000;

  const go = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-[#06122a]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: i === current ? 'scale(1.12) translateX(-3%)' : 'scale(1.12) translateX(3%)',
              transition: 'transform 8s ease-out',
            }}
          />
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06122a]/95 via-[#06122a]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06122a]/85 via-transparent to-[#06122a]/35" />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl relative h-[280px] sm:h-[300px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateY(0)' : 'translateY(28px)',
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  {slide.badge}
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] mb-5 tracking-tight">
                  {slide.heading}
                  <br />
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-lg">
                  {slide.subtext}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/services/nurse"
                    className="group inline-flex items-center gap-2 bg-white text-[#06122a] font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-sky-100 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 text-sm sm:text-base"
                  >
                    View Open Positions
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Trust strip */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/15 bg-[#06122a]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm sm:text-base">
            {trustItems.map(({ icon: Icon, label }, idx) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-cyan-300" />
                <span className="font-medium">{label}</span>
                {idx < trustItems.length - 1 && (
                  <span className="hidden sm:inline text-white/30 ml-3">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
