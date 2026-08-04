import { Euro, Building2, Shield, Plane, Sun } from 'lucide-react';

const reasons = [
  { icon: Euro, title: 'Exceptional Salaries', desc: 'Earn €2,450 – €5,500 per month — 10x more than Indian nursing salaries.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: Building2, title: 'World-Class Hospitals', desc: 'Work in state-of-the-art facilities with cutting-edge medical technology.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Shield, title: 'Safe & Stable Life', desc: 'Europe offers strong labor laws, social security, and worker protections.', color: 'text-violet-500', bg: 'bg-violet-50' },
  { icon: Plane, title: 'Free Relocation', desc: 'We provide visa processing and air tickets at no cost to you.', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Sun, title: 'Quality of Life', desc: 'Enjoy excellent work-life balance, cultural richness, and European lifestyle.', color: 'text-amber-500', bg: 'bg-amber-50' },
];

export default function WhyEuropeSection() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">The Opportunity</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Why <span className="text-gradient">West Europe</span>?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            West European countries — especially the Netherlands — face critical nursing shortages, creating a golden window of opportunity for Indian healthcare professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid gap-4">
            {reasons.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <div
                key={title}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`flex-shrink-0 w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[520px]">
            <img
              src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="West Europe cityscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-transparent" />
            <div className="absolute top-6 left-6">
              <div className="glassmorphism rounded-2xl p-4 text-white">
                <div className="text-3xl font-black text-emerald-400">€5,500</div>
                <div className="text-sm text-white/80">Max Monthly Salary</div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="glassmorphism rounded-2xl p-4 text-white text-right">
                <div className="text-3xl font-black text-amber-400">70</div>
                <div className="text-sm text-white/80">Current Openings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
