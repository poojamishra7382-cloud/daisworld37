import { Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Global workforce team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glassmorphism rounded-2xl p-5">
                  <p className="text-white font-bold text-xl italic">"We Care. We Train. We Place. You Grow."</p>
                  <p className="text-white/70 text-sm mt-1">— DAIS WORLD MISSION</p>
                </div>
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/20 rounded-3xl -z-10 rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-3xl -z-10 -rotate-6" />
          </div>

          {/* Right content */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">About Dais World</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
              India's Most Trusted{' '}
              <span className="text-gradient">Overseas</span>{' '}
              Recruitment Partner
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                Dais World Endeavor Private Limited is a premier international manpower recruitment consultancy based in Mumbai, India. We specialize in connecting skilled Indian professionals with trusted employers and leading organizations across Healthcare, Hospitality, Construction, and Oil & Gas worldwide.
              </p>
              <p>
                With over a decade of experience, we have helped hundreds of skilled professionals build international careers across Healthcare, Hospitality, Construction, and Oil & Gas. We provide end-to-end support, from recruitment and documentation to visa assistance, relocation guidance, and career support.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mission, Values, Vision row below */}
        <div className="grid sm:grid-cols-3 gap-8 mt-12">
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
              className={`group text-center p-8 rounded-3xl bg-slate-50/80 border border-slate-100 ${borderHover} hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${iconBg} mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
