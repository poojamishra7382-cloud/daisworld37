import { useEffect, useRef, useState } from 'react';

const salaryData = [
  { role: 'OR Nurse', inIndia: 30000, inEurope: 470000, europeLabel: '€5,500' },
  { role: 'HC Assistant', inIndia: 18000, inEurope: 275000, europeLabel: '€3,200' },
  { role: 'RN Nurse', inIndia: 25000, inEurope: 323000, europeLabel: '€3,775' },
];

export default function SalaryComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const maxVal = 500000;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Salary Reality</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            India vs <span className="text-gradient">West Europe</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            See the difference in monthly earnings. The numbers speak for themselves — a European nursing career pays up to 15x more than the equivalent role in India.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {salaryData.map(({ role, inIndia, inEurope, europeLabel }, i) => {
            const indiaPct = (inIndia / maxVal) * 100;
            const europePct = (inEurope / maxVal) * 100;
            return (
              <div
                key={role}
                className={`bg-slate-50 rounded-3xl p-6 border border-slate-100 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h3 className="font-bold text-slate-900 text-lg mb-6">{role}</h3>

                {/* India */}
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-slate-500 text-sm font-medium">India</span>
                    <span className="text-slate-700 font-bold">₹{inIndia.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-slate-400 h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ width: visible ? `${indiaPct}%` : '0%', transition: 'width 1.2s ease' }}
                    />
                  </div>
                </div>

                {/* Europe */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-emerald-600 text-sm font-medium">West Europe ({europeLabel})</span>
                    <span className="text-emerald-600 font-black text-lg">₹{inEurope.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-emerald-100 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ width: visible ? `${europePct}%` : '0%', transition: 'width 1.2s ease' }}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-center text-sm text-slate-500">
                    You earn <span className="text-emerald-600 font-bold">{Math.round(inEurope / inIndia)}x more</span> in Europe
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
