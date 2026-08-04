import { FileText, Clock, Calendar, Euro, Shield, RefreshCw } from 'lucide-react';

const terms = [
  { icon: Calendar, title: 'Contract Duration', value: '2 Years', desc: 'Renewable long-term contract with the hospital.' },
  { icon: Clock, title: 'Working Hours', value: '36-40 hrs/week', desc: 'Standard European full-time schedule.' },
  { icon: Euro, title: 'Salary Payment', value: 'Monthly (€)', desc: 'Direct deposit in euros to your bank account.' },
  { icon: Shield, title: 'Job Security', value: 'High', desc: 'Protected by strong European labor laws.' },
  { icon: RefreshCw, title: 'Contract Renewal', value: 'Easy', desc: 'Most nurses renew and stay long-term.' },
  { icon: FileText, title: 'Notice Period', value: '1-3 months', desc: 'Standard notice per EU regulations.' },
];

export default function ContractSection() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Employment Terms</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Your <span className="text-gradient">Contract</span> Details
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Clear, transparent contract terms. No hidden clauses, no surprises — just a fair, secure European employment agreement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map(({ icon: Icon, title, value, desc }) => (
            <div key={title} className="glassmorphism rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white/70 text-sm font-medium mb-1">{title}</h4>
                  <p className="text-white text-xl font-black mb-2">{value}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glassmorphism rounded-2xl px-6 py-4">
            <Shield className="w-6 h-6 text-emerald-400" />
            <p className="text-white font-medium">All contracts are reviewed and comply with EU labor regulations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
