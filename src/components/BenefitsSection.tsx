import { Plane, Home, Stethoscope, GraduationCap, FileCheck, Users, Calendar, Utensils } from 'lucide-react';

const benefits = [
  { icon: Plane, title: 'Free Air Ticket', desc: 'Your flight to Europe is fully covered.', color: 'bg-blue-500' },
  { icon: FileCheck, title: 'Visa Processing', desc: 'Complete visa assistance at no cost.', color: 'bg-cyan-500' },
  { icon: Home, title: 'Accommodation Help', desc: 'We help arrange your first home abroad.', color: 'bg-emerald-500' },
  { icon: GraduationCap, title: 'Free Language Training', desc: 'B1 Dutch language course included.', color: 'bg-amber-500' },
  { icon: Stethoscope, title: 'Health Insurance', desc: 'Full medical coverage included.', color: 'bg-rose-500' },
  { icon: Calendar, title: 'Paid Leave', desc: '25+ paid holidays per year.', color: 'bg-violet-500' },
  { icon: Utensils, title: 'Meal Allowance', desc: 'Daily meal stipend at the hospital.', color: 'bg-teal-500' },
  { icon: Users, title: 'Family Support', desc: 'Guidance on family visa sponsorship.', color: 'bg-indigo-500' },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Total Package</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            What You <span className="text-gradient">Get</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to start your new life in Europe — fully covered in your placement package.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
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
