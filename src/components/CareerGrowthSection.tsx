import { TrendingUp, Award, Briefcase, Users } from 'lucide-react';

const career = [
  { icon: Briefcase, title: 'Year 1-2', role: 'Staff Nurse', salary: '€2,450 – €3,775', desc: 'Start as a registered nurse. Learn the system, build fluency, gain European experience.' },
  { icon: Users, title: 'Year 3-4', role: 'Senior Nurse', salary: '€3,500 – €4,500', desc: 'Take on leadership responsibilities. Mentor new arrivals. Specialize in your area.' },
  { icon: Award, title: 'Year 5-6', role: 'Nurse Specialist', salary: '€4,200 – €5,500', desc: 'Become a specialist in OR, ICU, pediatrics, or your chosen field.' },
  { icon: TrendingUp, title: 'Year 7+', role: 'Nurse Manager', salary: '€5,000 – €7,000+', desc: 'Move into management, education, or advanced practice roles.' },
];

export default function CareerGrowthSection() {
  return (
    <section className="py-24 bg-[#050e1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Long-Term Vision</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Your Career <span className="text-gradient">Growth Path</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            This isn't just a job — it's a career. See where you can be in 5, 7, 10 years with European experience.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {career.map(({ icon: Icon, title, role, salary, desc }, i) => (
              <div key={role} className="relative">
                {/* Node */}
                <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full ring-4 ring-[#050e1f] z-10" />

                <div className="glassmorphism rounded-3xl p-6 mt-20 lg:mt-20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{title}</span>
                  </div>
                  <h4 className="text-white font-black text-lg mb-1">{role}</h4>
                  <p className="text-emerald-400 font-bold text-sm mb-3">{salary}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            * Growth trajectory is illustrative. Actual progression depends on performance, additional certifications, and hospital opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
