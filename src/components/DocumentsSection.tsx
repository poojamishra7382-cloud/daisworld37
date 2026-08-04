import { FileText, Download, AlertCircle } from 'lucide-react';

const docs = [
  { name: 'Nursing Degree Certificate', note: 'BSc/GNM/BPT — attested copies' },
  { name: 'Nursing Council Registration', note: 'Active Indian Nursing Council registration' },
  { name: 'Passport Copy', note: 'Valid for at least 18 months' },
  { name: 'Experience Certificate', note: 'From current/previous employers' },
  { name: 'Passport-size Photos', note: '6 recent photos, white background' },
  { name: 'Marksheets & Transcripts', note: 'All academic records' },
  { name: 'Resume / CV', note: 'Updated with clinical experience' },
  { name: 'Police Clearance Certificate', note: 'Issued within last 6 months' },
  { name: 'Medical Fitness Certificate', note: 'From a registered physician' },
  { name: 'Salary Slips (last 3 months)', note: 'If currently employed' },
];

export default function DocumentsSection() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Get Ready</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Documents <span className="text-gradient">Checklist</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Start gathering these documents. Having them ready speeds up your application significantly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {docs.map(({ name, note }, i) => (
            <div
              key={name}
              className="group flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 hover:border-blue-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <p className="text-slate-400 text-xs">{note}</p>
              </div>
              <Download className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> All documents must be attested by the relevant authorities (Notary, Home Ministry, External Affairs, and the Dutch Embassy). We assist with the entire attestation process.
          </p>
        </div>
      </div>
    </section>
  );
}
