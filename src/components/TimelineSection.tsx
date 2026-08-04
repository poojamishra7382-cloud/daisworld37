import { Calendar } from 'lucide-react';

const timeline = [
  { month: 'Month 1', title: 'Application & Screening', desc: 'Submit documents. Screening interview with our team.', status: 'start' },
  { month: 'Month 1-4', title: 'Dutch Language Training', desc: 'Free B1 Dutch course. Live classes, practice sessions.', status: 'training' },
  { month: 'Month 4', title: 'Hospital Interview', desc: 'Online interview with the European partner hospital.', status: 'interview' },
  { month: 'Month 4-5', title: 'Visa Processing', desc: 'Work permit, MVV visa, embassy appointment.', status: 'visa' },
  { month: 'Month 5', title: 'Pre-Departure Briefing', desc: 'Final documents, cultural orientation, packing guide.', status: 'briefing' },
  { month: 'Month 5-6', title: 'Arrival in Europe', desc: 'Land in Europe. Airport pickup. Start your new job!', status: 'arrival' },
];

const colors: Record<string, string> = {
  start: 'bg-blue-500',
  training: 'bg-cyan-500',
  interview: 'bg-amber-500',
  visa: 'bg-violet-500',
  briefing: 'bg-rose-500',
  arrival: 'bg-emerald-500',
};

export default function TimelineSection() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Month by Month</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            6-Month <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From the day you apply to the day you land in Europe — here's exactly what to expect.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {timeline.map(({ month, title, desc, status }, i) => (
              <div
                key={title}
                className={`relative flex items-center gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className={`absolute left-4 sm:left-1/2 w-4 h-4 ${colors[status]} rounded-full ring-4 ring-[#0a1628] sm:-translate-x-1/2 z-10`} />

                {/* Card */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="glassmorphism rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 ${colors[status].replace('bg-', 'text-')}`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {month}
                    </div>
                    <h4 className="text-white font-black text-lg mb-1">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
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
