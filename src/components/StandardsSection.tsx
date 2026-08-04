import { Shield, FileCheck, BadgeCheck, Scale, Lock, Globe } from 'lucide-react';

const standards = [
  { icon: BadgeCheck, title: 'Government Registered', desc: 'Officially licensed overseas recruitment agency in India.' },
  { icon: Scale, title: 'Ethical Recruitment', desc: 'We follow the WHO Global Code of Practice on International Health Personnel Recruitment.' },
  { icon: FileCheck, title: 'Transparent Contracts', desc: 'Every contract is reviewed by legal experts. No hidden clauses.' },
  { icon: Shield, title: 'Data Protection', desc: 'Your personal information is handled with strict confidentiality and GDPR compliance.' },
  { icon: Lock, title: 'Secure Payments', desc: 'All financial transactions are documented and legally accounted for.' },
  { icon: Globe, title: 'EU Labor Law Compliance', desc: 'Every placement adheres to European Union labor regulations and standards.' },
];

export default function StandardsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Trust & Compliance</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Our <span className="text-gradient">Standards</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We operate with the highest ethical and legal standards. Your trust is our most valuable asset.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors duration-300">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
