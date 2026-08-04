import { CheckCircle, FileCheck, Plane, MapPin } from 'lucide-react';

const steps = [
  { icon: FileCheck, title: 'Document Verification', desc: 'We verify your nursing credentials and passport eligibility.', time: 'Week 1-2' },
  { icon: CheckCircle, title: 'Application Submitted', desc: 'Your application goes to the partner hospital in Europe.', time: 'Week 3' },
  { icon: FileCheck, title: 'Work Permit Processing', desc: 'Employer initiates work permit with Dutch immigration (IND).', time: 'Month 2-3' },
  { icon: FileCheck, title: 'Visa Application', desc: 'Long-stay MVV visa application at the Dutch embassy.', time: 'Month 4' },
  { icon: Plane, title: 'Fly to Europe', desc: 'Air ticket provided. You arrive and start your new job.', time: 'Month 5-6' },
  { icon: MapPin, title: 'Begin Work', desc: 'Hospital onboarding and orientation. Your career begins!', time: 'Month 6' },
];

export default function VisaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Visa & Relocation</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Your <span className="text-gradient">Visa Journey</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We handle the complex paperwork so you can focus on your new career. Here's the transparent visa process.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, title, desc, time }, i) => (
              <div key={title} className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 card-hover">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black shadow-lg">
                    {i + 1}
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{time}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
