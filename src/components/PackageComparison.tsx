import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Self-Funded Path',
    price: 'Partial',
    note: 'You pay training & visa costs',
    color: 'border-slate-200',
    headerColor: 'bg-slate-100 text-slate-700',
    features: [
      { text: 'Application processing', included: true },
      { text: 'Hospital placement', included: true },
      { text: 'Dutch B1 training', included: false },
      { text: 'Visa processing fees', included: false },
      { text: 'Air ticket', included: false },
      { text: 'Post-arrival support', included: false },
    ],
  },
  {
    name: 'Knooviq Package',
    price: 'Full',
    note: 'Most costs covered by us',
    color: 'ring-2 ring-blue-500',
    headerColor: 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white',
    popular: true,
    features: [
      { text: 'Application processing', included: true },
      { text: 'Hospital placement', included: true },
      { text: 'Dutch B1 training (FREE)', included: true },
      { text: 'Visa processing assistance', included: true },
      { text: 'Air ticket provided', included: true },
      { text: 'Post-arrival support', included: true },
    ],
  },
  {
    name: 'Employer-Sponsored',
    price: 'Premium',
    note: 'Hospital covers everything',
    color: 'border-emerald-200',
    headerColor: 'bg-emerald-50 text-emerald-700',
    features: [
      { text: 'Application processing', included: true },
      { text: 'Hospital placement', included: true },
      { text: 'Dutch B1 training (FREE)', included: true },
      { text: 'Visa fees paid by employer', included: true },
      { text: 'Air ticket + relocation', included: true },
      { text: 'First-month accommodation', included: true },
    ],
  },
];

export default function PackageComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Cost Comparison</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We offer flexible pathways. Most of our candidates qualify for the full Knooviq Package or employer-sponsored options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, price, note, color, headerColor, features, popular }) => (
            <div key={name} className={`bg-white rounded-3xl border-2 ${color} overflow-hidden shadow-lg relative`}>
              {popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1 rounded-b-xl">
                  MOST POPULAR
                </div>
              )}
              <div className={`${headerColor} p-6 text-center mt-0`}>
                <h3 className="text-lg font-black">{name}</h3>
                <p className="text-3xl font-black mt-2">{price}</p>
                <p className="text-sm opacity-80">{note}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {features.map(({ text, included }) => (
                    <li key={text} className="flex items-center gap-3">
                      {included ? (
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-slate-400" />
                        </div>
                      )}
                      <span className={`text-sm ${included ? 'text-slate-700' : 'text-slate-400'}`}>{text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block mt-6 text-center font-bold py-3 rounded-2xl transition-all ${
                    popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
