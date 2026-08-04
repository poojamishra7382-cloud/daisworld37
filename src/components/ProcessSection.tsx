import { ClipboardList, UserPlus, Languages, FileCheck, Plane, Briefcase } from 'lucide-react';

const steps = [
  { num: '01', icon: ClipboardList, title: 'Apply Online', desc: 'Submit your application and CV through our website or call us directly.', duration: 'Day 1' },
  { num: '02', icon: UserPlus, title: 'Screening Interview', desc: 'Our team reviews your profile and conducts an initial screening call.', duration: 'Week 1' },
  { num: '03', icon: Languages, title: 'Language Training', desc: 'Selected candidates start free Dutch B1 language training.', duration: 'Month 1-4' },
  { num: '04', icon: FileCheck, title: 'Hospital Interview', desc: 'Online interview with the European partner hospital.', duration: 'Month 4' },
  { num: '05', icon: FileCheck, title: 'Visa & Documentation', desc: 'We process your work permit, visa, and all paperwork.', duration: 'Month 4-5' },
  { num: '06', icon: Plane, title: 'Fly to Europe', desc: 'Board your free flight to start your new life and career.', duration: 'Month 5-6' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#050e1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Your 6-Step <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From application to arrival — a clear, guided path to your European nursing career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ num, icon: Icon, title, desc, duration }, i) => (
            <div
              key={num}
              className="relative group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="glassmorphism rounded-3xl p-7 h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl font-black text-white/10 group-hover:text-blue-400/30 transition-colors">{num}</span>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-white text-lg">{title}</h4>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full font-semibold">{duration}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
