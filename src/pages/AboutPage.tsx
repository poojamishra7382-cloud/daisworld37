import { Target, Heart, Lightbulb, Award, Users, Globe, TrendingUp, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutPage() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-20 bg-[#050e1f] overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            India's Most Trusted{' '}
            <span className="text-gradient">Overseas</span>{' '}
            Recruitment Partner
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Dais World Endeavor Private Limited is a premier international manpower recruitment consultancy based in Mumbai, India. We connect skilled Indian professionals with leading employers across Healthcare, Hospitality, Construction, and Oil & Gas etc.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pt-16 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative max-w-lg mx-auto lg:max-w-none w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Global workforce team"
                    className="w-full h-[360px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glassmorphism rounded-2xl p-4">
                      <p className="text-white font-bold text-lg italic">"We Care. We Train. We Place. You Grow."</p>
                      <p className="text-white/70 text-xs mt-1">— DAIS WORLD MISSION</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600/20 rounded-3xl -z-10 rotate-12" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-3xl -z-10 -rotate-6" />
              </div>

              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">About Dais World</p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                  <p>
                    Dais World is a premier international manpower recruitment consultancy based in Mumbai, India. We specialize in connecting skilled Indian professionals with trusted employers and leading organizations across Healthcare, Hospitality, Construction, and Oil & Gas etc.
                  </p>
                  <p>
                    With over a decade of experience, we have helped hundreds of skilled professionals build international careers across Healthcare, Hospitality, Construction, and Oil & Gas etc. We provide end-to-end support, from recruitment and documentation to visa assistance, relocation guidance, and career support.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission, Values, Vision row below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-12">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  desc: 'Connecting skilled talent with global opportunities and trusted employers.',
                  iconBg: 'bg-blue-50 text-blue-600',
                  borderHover: 'hover:border-blue-200'
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  desc: 'Integrity, transparency, care, and commitment in everything we do.',
                  iconBg: 'bg-rose-50 text-rose-600',
                  borderHover: 'hover:border-rose-200'
                },
                {
                  icon: Lightbulb,
                  title: 'Our Vision',
                  desc: 'To become a trusted global bridge between talent and leading industries.',
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
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-12 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {[
              { icon: Users, value: '500+', label: 'Nurses Placed', color: 'from-blue-600 to-cyan-500' },
              { icon: Award, value: '10+', label: 'Years Experience', color: 'from-emerald-600 to-teal-500' },
              { icon: Globe, value: '10+', label: 'Countries', color: 'from-indigo-600 to-blue-500' },
              { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'from-amber-500 to-orange-500' },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100/80">
                <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${color} mb-3 sm:mb-4`}>
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-2xl sm:text-4xl font-black text-slate-900 mb-1">{value}</div>
                <div className="text-slate-500 text-xs sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2.5">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-5">
              The <span className="text-gradient">Dais World</span> Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: Shield, title: 'Trusted & Reliable', desc: 'Transparent processes, honest communication, and reliable solutions you can count on.' },
              { icon: Award, title: 'Industry Expertise', desc: 'Experienced professionals with strong knowledge across healthcare, hospitality, construction, and oil & gas.' },
              { icon: Users, title: 'Personalized Support', desc: 'Dedicated support at every stage, from initial consultation to successful placement and beyond.' },
              { icon: Globe, title: 'Global Opportunities', desc: 'Connecting skilled professionals with trusted employers and opportunities across international markets.' },
              { icon: TrendingUp, title: 'Career & Business Growth', desc: 'Helping professionals build successful careers and organizations find the right talent for long-term growth.' },
              { icon: Heart, title: 'End-to-End Service', desc: 'From recruitment and documentation to onboarding and ongoing support, we make the entire journey simple.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
