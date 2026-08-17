import { useEffect, useRef, useState } from 'react';
import { Users, Globe, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Nurses Placed', color: 'text-blue-400' },
  { icon: Globe, value: '10+', label: 'European Countries', color: 'text-cyan-400' },
  { icon: Award, value: '10+', label: 'Years Experience', color: 'text-amber-400' },
  { icon: Clock, value: '4-6', label: 'Month Process', color: 'text-emerald-400' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0a1628] border-y border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 mb-3 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`text-4xl font-black text-white mb-1 ${color}`}>{value}</div>
              <div className="text-white/50 text-sm font-medium uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
