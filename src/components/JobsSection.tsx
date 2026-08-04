import { Stethoscope, Heart, UserCheck, ArrowRight } from 'lucide-react';

const jobs = [
  {
    icon: Stethoscope,
    count: 20,
    title: 'Operation Room Nurses',
    salary: '€3,900 – €5,500',
    min: 3900,
    max: 5500,
    badge: 'Highest Pay',
    badgeColor: 'bg-emerald-500',
    gradient: 'from-blue-600 to-blue-800',
    requirements: ['BSc Nursing / GNM', 'OR experience preferred', 'B1 Dutch (trained by us)', 'Valid passport'],
  },
  {
    icon: Heart,
    count: 30,
    title: 'Healthcare Assistants',
    salary: '€2,450 – €3,200',
    min: 2450,
    max: 3200,
    badge: 'Most Openings',
    badgeColor: 'bg-teal-500',
    gradient: 'from-teal-600 to-emerald-800',
    requirements: ['Healthcare background', 'Caring attitude', 'Basic Dutch training', 'Physically fit'],
  },
  {
    icon: UserCheck,
    count: 20,
    title: 'Registered Nurses',
    salary: '€3,200 – €3,775',
    min: 3200,
    max: 3775,
    badge: 'Great Package',
    badgeColor: 'bg-blue-500',
    gradient: 'from-indigo-600 to-blue-800',
    requirements: ['BSc Nursing / GNM / BPT', 'ICU/Ward experience', 'B1 Dutch (trained by us)', 'Adaptable'],
  },
];

export default function JobsSection() {
  return (
    <section id="jobs" className="py-24 bg-[#050e1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Open Positions</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Current <span className="text-gradient">Job Openings</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We have 70 positions available right now. Each comes with a full support package — language training, visa, air ticket, and accommodation assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map(({ icon: Icon, count, title, salary, min, max, badge, badgeColor, gradient, requirements }) => (
            <div key={title} className="relative group card-hover">
              <div className={`bg-gradient-to-br ${gradient} rounded-3xl p-8 shadow-2xl border border-white/10 h-full flex flex-col`}>
                {/* Badge */}
                <span className={`absolute top-5 right-5 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {badge}
                </span>

                {/* Icon + Count */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm font-medium">Positions</div>
                    <div className="text-white text-4xl font-black">{count}</div>
                  </div>
                </div>

                <h3 className="text-white text-xl font-black mb-2">{title}</h3>

                {/* Salary */}
                <div className="bg-white/10 rounded-2xl p-4 mb-6">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Monthly Salary</p>
                  <p className="text-white text-2xl font-black">{salary}</p>
                  {/* Visual bar */}
                  <div className="mt-3 bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-white/60 to-white"
                      style={{ width: `${((max - 2000) / (5500 - 2000)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Requirements */}
                <ul className="space-y-2 flex-1">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold py-3 rounded-2xl transition-all duration-200 group-hover:bg-white/20"
                >
                  Apply for This Role <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          * Salary range is based on experience, qualifications, and hospital assignment. All figures are gross monthly.
        </p>
      </div>
    </section>
  );
}
