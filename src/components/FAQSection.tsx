import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need to know Dutch before applying?',
    a: 'No. We provide free Dutch B1 language training to all selected candidates. You just need willingness to learn.',
  },
  {
    q: 'How much does the program cost?',
    a: 'Most candidates qualify for our full Knooviq Package where training, visa assistance, and air ticket are covered. Some employer-sponsored roles cover everything. We discuss costs transparently during your screening call.',
  },
  {
    q: 'How long does the entire process take?',
    a: 'Typically 4-6 months from application to arrival. This includes language training, hospital interview, visa processing, and travel arrangements.',
  },
  {
    q: 'Can my family come with me?',
    a: 'Yes, after you settle in (usually 6-12 months), you can apply for family reunification. We provide guidance on the family visa process.',
  },
  {
    q: 'What if I don\'t have nursing experience?',
    a: 'Healthcare Assistant roles are available for candidates with healthcare backgrounds but limited clinical experience. BSc/GNM/BPT graduates are eligible for nursing positions.',
  },
  {
    q: 'Is the salary enough to live comfortably in Europe?',
    a: 'Yes. Even the lowest salary (€2,450/month) provides a comfortable life after rent (€400-700) and expenses. You can save €1,000+ monthly and send money home.',
  },
  {
    q: 'What happens after the 2-year contract ends?',
    a: 'Most contracts are renewed. You can also move to another hospital or country. Many of our nurses stay long-term and eventually obtain permanent residency.',
  },
  {
    q: 'Are there any age restrictions?',
    a: 'Most European countries accept nurses up to age 45-50 for initial work permits. We assess each profile individually.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Questions</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you want to know about working as a nurse in West Europe.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-blue-300 shadow-lg' : 'border-slate-100'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-4">{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-5 pt-0 text-slate-600 leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
