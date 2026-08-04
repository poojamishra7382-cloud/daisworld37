import { CheckCircle, XCircle, GraduationCap, Briefcase, Languages, Heart } from 'lucide-react';

const eligible = [
  { icon: GraduationCap, text: 'BSc Nursing / GNM / BPT degree' },
  { icon: Briefcase, text: 'Minimum 1-2 years clinical experience' },
  { icon: Heart, text: 'Genuine passion for patient care' },
  { icon: Languages, text: 'Willingness to learn Dutch (free training)' },
  { icon: CheckCircle, text: 'Valid Indian passport (or eligible to apply)' },
  { icon: CheckCircle, text: 'Good physical and mental health' },
  { icon: CheckCircle, text: 'Clean professional record' },
  { icon: CheckCircle, text: 'Adaptable to European culture & lifestyle' },
];

const notEligible = [
  'No nursing or healthcare background',
  'Unwilling to learn a new language',
  'Looking for short-term work only',
  'Unable to commit to a 2-year contract',
];

export default function EligibilitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Who Qualifies</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Eligibility <span className="text-gradient">Criteria</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Check if you meet the requirements. Don't worry if you're unsure — we evaluate each profile individually.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Eligible */}
          <div className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">You Qualify If You Have</h3>
                <p className="text-emerald-600 text-sm font-medium">These requirements make you a strong candidate</p>
              </div>
            </div>
            <ul className="space-y-3">
              {eligible.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Eligible */}
          <div className="bg-rose-50 rounded-3xl p-8 border-2 border-rose-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">This May Not Be For You If</h3>
                <p className="text-rose-600 text-sm font-medium">Be aware of these potential blockers</p>
              </div>
            </div>
            <ul className="space-y-3">
              {notEligible.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-white rounded-2xl p-4 border border-rose-100">
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-900">Still unsure?</strong> Send us your profile and we'll give you an honest assessment within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
