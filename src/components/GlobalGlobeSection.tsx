import React, { useState } from 'react';
import { ArrowRight, Plane, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeGlobe from '@/components/ThreeGlobe';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface GlobalGlobeSectionProps {
  onApplyClick?: () => void;
}

export default function GlobalGlobeSection({ onApplyClick }: GlobalGlobeSectionProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [selectedCountry, setSelectedCountry] = useState<string>('Netherlands');

  return (
    <section className="relative py-16 sm:py-20 bg-[#050e1f] overflow-hidden">
      {/* Glow & Pattern Accents */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Global Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Connecting <span className="text-gradient">Indian Talent</span> to the World
          </h2>

          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our real-time 3D flight pathways connecting qualified Indian professionals from Mumbai to leading healthcare networks and top employers across Europe, Australia, and the Middle East.
          </p>
        </div>

        {/* 2-Column 3D Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Quick Features & Stats */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="glassmorphism bg-[#071938]/80 border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl">
              <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Direct European Placement</h3>
                  <p className="text-cyan-400 text-xs font-semibold">100% Ethical & Legal Pathway</p>
                </div>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                We handle the entire journey — from language preparation and certified credential evaluation to visa issuance, flight tickets, and airport reception in destination countries.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-3.5 border-t border-white/10">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">500+</div>
                  <div className="text-white/60 text-[11px] sm:text-xs mt-0.5">Nurses & Staff Placed</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">98%</div>
                  <div className="text-white/60 text-[11px] sm:text-xs mt-0.5">Visa Approval Rate</div>
                </div>
              </div>
            </div>

            {/* Quick Country Pathways list */}
            <div className="glassmorphism bg-[#071938]/60 border border-white/10 rounded-3xl p-4 sm:p-5 space-y-2">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                Click a destination to rotate 3D Globe:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Netherlands', flag: '🇳🇱', jobs: 'Healthcare' },
                  { name: 'Germany', flag: '🇩🇪', jobs: 'Ausbildung / Nursing' },
                  { name: 'France', flag: '🇫🇷', jobs: 'Hospitality' },
                  { name: 'Australia', flag: '🇦🇺', jobs: 'Skilled Migration' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedCountry(item.name)}
                    className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-2xl text-left transition-all duration-300 ${
                      selectedCountry.includes(item.name)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102'
                        : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                    }`}
                  >
                    <span className="text-base sm:text-lg">{item.flag}</span>
                    <div className="truncate min-w-0">
                      <div className="text-xs font-bold leading-tight truncate">{item.name}</div>
                      <div className="text-[10px] text-cyan-300/80 truncate">{item.jobs}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onApplyClick || (() => window.dispatchEvent(new CustomEvent('open-apply-modal')))}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Apply for Placement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/country"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-2xl glassmorphism bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all duration-300"
              >
                <span>View All Countries</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Globe */}
          <div className="lg:col-span-7 h-[380px] sm:h-[480px] lg:h-[540px] relative rounded-3xl overflow-hidden glassmorphism bg-gradient-to-b from-[#071938]/60 to-[#020b20]/90 border border-cyan-500/20 shadow-2xl">
            <ThreeGlobe selectedCountry={selectedCountry} />
          </div>
        </div>
      </div>
    </section>
  );
}
