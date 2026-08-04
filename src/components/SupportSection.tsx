import { Headphones, Phone, MessageCircle, Mail, Heart, Users } from 'lucide-react';

const support = [
  { icon: Phone, title: 'Pre-Departure Helpline', desc: 'Call us anytime during your preparation. We answer your questions and ease your concerns.', color: 'bg-blue-500' },
  { icon: Users, title: 'Mentor Assignment', desc: 'Every nurse gets a dedicated mentor who has already made the journey to Europe.', color: 'bg-cyan-500' },
  { icon: MessageCircle, title: 'WhatsApp Community', desc: 'Join our group of 500+ placed nurses. Ask questions, share experiences, stay connected.', color: 'bg-emerald-500' },
  { icon: Mail, title: 'Document Assistance', desc: 'We help with every form, every attestation, every embassy requirement.', color: 'bg-amber-500' },
  { icon: Heart, title: 'Post-Arrival Check-ins', desc: 'We call you after you arrive. Are you settling in? Do you need anything?', color: 'bg-rose-500' },
  { icon: Headphones, title: '24/7 Emergency Line', desc: 'If something goes wrong — anytime, day or night — we are one call away.', color: 'bg-violet-500' },
];

export default function SupportSection() {
  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">We Don't Disappear</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Complete <span className="text-gradient">Support System</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Most recruiters vanish after placement. We don't. From the day you apply to years after you arrive, we're with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {support.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-black text-blue-600">24/7</div>
            <div className="text-slate-400 text-sm">Support Availability</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-black text-emerald-600">1-on-1</div>
            <div className="text-slate-400 text-sm">Dedicated Mentor</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-black text-amber-600">500+</div>
            <div className="text-slate-400 text-sm">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
