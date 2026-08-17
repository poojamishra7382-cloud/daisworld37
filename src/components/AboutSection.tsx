import { Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
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
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
Dais World is a premier international manpower recruitment consultancy based in Mumbai, India. We specialize in connecting skilled Indian professionals with trusted employers and leading organizations across Healthcare, Hospitality, Construction, and Oil & Gas worldwide.            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              With over a decade of experience, we have helped hundreds of skilled professionals build international careers across Healthcare, Hospitality, Construction, and Oil & Gas. We provide end-to-end support, from recruitment and documentation to visa assistance, relocation guidance, and career support.    </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { 
  icon: Target, 
  title: 'Our Mission', 
  desc: 'To connect skilled professionals with global opportunities while delivering trusted and reliable workforce solutions.', 
  color: 'bg-blue-50 text-blue-600' 
},

{ 
  icon: Heart, 
  title: 'Our Values', 
  desc: 'Integrity, transparency, professionalism, and commitment guide everything we do for our clients and candidates.', 
  color: 'bg-rose-50 text-rose-600' 
},

{ 
  icon: Lightbulb, 
  title: 'Our Vision', 
  desc: 'To become a trusted global partner for talent and workforce solutions across diverse industries.', 
  color: 'bg-amber-50 text-amber-600' 
},   ].map(({ icon: Icon, title, desc, color }) => (
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
  );
}
