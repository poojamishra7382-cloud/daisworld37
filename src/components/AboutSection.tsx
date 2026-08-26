import { Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 sm:pt-20 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left visual */}
          <div className="relative max-w-lg mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Global workforce team"
                className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="glassmorphism rounded-2xl p-3.5 sm:p-5">
                  <p className="text-white font-bold text-sm sm:text-lg italic">"We Care. We Train. We Place. You Grow."</p>
                  <p className="text-white/70 text-xs mt-1">— DAIS WORLD MISSION</p>
                </div>
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600/20 rounded-3xl -z-10 rotate-12 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-3xl -z-10 -rotate-6 hidden sm:block" />
          </div>

          {/* Right content */}
          <div>
            <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2.5">About Dais World</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
              India's Most Trusted{' '}
              <span className="text-gradient">Overseas</span>{' '}
              Recruitment Partner
            </h2>
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
              <p>
                Dais World Endeavor Private Limited is a premier international manpower recruitment consultancy based in Mumbai, India. We specialize in connecting skilled Indian professionals with trusted employers and leading organizations across Healthcare, Hospitality, Construction, and Oil & Gas etc.
              </p>
              <p>
                With over a decade of experience, we have helped hundreds of skilled professionals build international careers across Healthcare, Hospitality, Construction, and Oil & Gas etc. We provide end-to-end support, from recruitment and documentation to visa assistance, relocation guidance, and career support.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mission, Values, Vision row below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mt-12">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To connect skilled professionals with global opportunities while delivering trusted and reliable workforce solutions.',
              iconBg: 'bg-blue-50 text-blue-600',
              borderHover: 'hover:border-blue-200'
            },
            {
              icon: Heart,
              title: 'Our Values',
              desc: 'Integrity, transparency, professionalism, and commitment guide everything we do for our clients and candidates.',
              iconBg: 'bg-rose-50 text-rose-600',
              borderHover: 'hover:border-rose-200'
            },
            {
              icon: Lightbulb,
              title: 'Our Vision',
              desc: 'To become a trusted global partner for talent and workforce solutions across diverse industries.',
              iconBg: 'bg-amber-50 text-amber-600',
              borderHover: 'hover:border-amber-200'
            },
          ].map(({ icon: Icon, title, desc, iconBg, borderHover }) => (
            <div
              key={title}
              className={`group text-center p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-100 ${borderHover} hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${iconBg} mb-4 sm:mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">{title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
