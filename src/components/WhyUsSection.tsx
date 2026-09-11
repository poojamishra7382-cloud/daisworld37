import { Award, Users, Target, ThumbsUp, HeartHandshake, Sparkles } from 'lucide-react';

const reasons = [
  { icon: Award, title: '10+ Years Experience', desc: 'A decade of successful international nursing placements.', stat: '500+', statLabel: 'Nurses Placed' },
  { icon: Users, title: 'End-to-End Support', desc: 'From application to arrival — we walk every step with you.', stat: '100%', statLabel: 'Support Coverage' },
  { icon: Target, title: 'Direct Hospital Tie-ups', desc: 'No middlemen. We place directly with European hospitals.', stat: '8+', statLabel: 'Partner Countries' },
  { icon: ThumbsUp, title: 'Transparent Process', desc: 'No hidden fees, no false promises. Clear at every stage.', stat: '0', statLabel: 'Hidden Charges' },
  { icon: HeartHandshake, title: 'Post-Arrival Care', desc: 'We stay connected after you reach Europe.', stat: '24/7', statLabel: 'Support Line' },
  { icon: Sparkles, title: 'Free Language Training', desc: 'Complete Dutch B1 course included at no cost.', stat: 'B1', statLabel: 'Level Included' },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            The DAIS WORLD ENDEAVOR <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We're not just a recruiter — we're your career partner. Here's what makes us different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, stat, statLabel }) => (
            <div key={title} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-600">{stat}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">{statLabel}</div>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
