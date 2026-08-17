import { Target, Heart, Lightbulb, Award, Users, Globe, TrendingUp, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-[#050e1f] overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            India's Most Trusted{' '}
            <span className="text-gradient">Overseas</span>{' '}
            Recruitment Partner
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Dais World is a premier international manpower recruitment consultancy based in Mumbai, India. We connect skilled Indian professionals with leading employers across Healthcare, Hospitality, Construction, and Oil & Gas worldwide. </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Nurses working in Europe"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glassmorphism rounded-2xl p-5">
                    <p className="text-white font-bold text-xl italic">"We Care. We Train. We Place. You Grow."</p>
                    <p className="text-white/70 text-sm mt-1">— DIAS WORLD Mission</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/20 rounded-3xl -z-10 rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-3xl -z-10 -rotate-6" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                With over a decade of experience, we have helped hundreds of skilled professionals build successful international careers across Healthcare, Hospitality, Construction, and Oil & Gas. We provide end-to-end support, from recruitment and documentation to visa assistance, relocation guidance, and career support.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We specialize in connecting skilled Indian professionals with leading international employers across Healthcare, Hospitality, Construction, and Oil & Gas. Our mission is to empower professionals with global opportunities, reliable career support, and pathways to build successful careers abroad.    </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { 
  icon: Target, 
  title: 'Mission', 
  desc: 'Connecting skilled talent with global opportunities and trusted employers.', 
  color: 'bg-blue-50 text-blue-600' 
},

{ 
  icon: Heart, 
  title: 'Values', 
  desc: 'Integrity, transparency, care, and commitment in everything we do.', 
  color: 'bg-rose-50 text-rose-600' 
},

{ 
  icon: Lightbulb, 
  title: 'Vision', 
  desc: 'To become a trusted global bridge between talent and leading industries.', 
  color: 'bg-amber-50 text-amber-600' 
},].map(({ icon: Icon, title, desc, color }) => (
                  <div key={title} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${color} mb-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '500+', label: 'Nurses Placed', color: 'from-blue-600 to-cyan-500' },
              { icon: Award, value: '10+', label: 'Years Experience', color: 'from-emerald-600 to-teal-500' },
              { icon: Globe, value: '10+', label: 'Countries', color: 'from-indigo-600 to-blue-500' },
              { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'from-amber-500 to-orange-500' },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-1">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
              The <span className="text-gradient">Dais World</span> Advantage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Trusted & Reliable', desc: 'Transparent processes, honest communication, and reliable solutions you can count on.' },

{ icon: Award, title: 'Industry Expertise', desc: 'Experienced professionals with strong knowledge across healthcare, hospitality, construction, and oil & gas.' },

{ icon: Users, title: 'Personalized Support', desc: 'Dedicated support at every stage, from initial consultation to successful placement and beyond.' },

{ icon: Globe, title: 'Global Opportunities', desc: 'Connecting skilled professionals with trusted employers and opportunities across international markets.' },

{ icon: TrendingUp, title: 'Career & Business Growth', desc: 'Helping professionals build successful careers and organizations find the right talent for long-term growth.' },

{ icon: Heart, title: 'End-to-End Service', desc: 'From recruitment and documentation to onboarding and ongoing support, we make the entire journey simple.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 text-lg mb-8">Join 500+ professionals who started their global careers with Dais World.</p>
          <Link to="/home" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors">
            Back to Home <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
