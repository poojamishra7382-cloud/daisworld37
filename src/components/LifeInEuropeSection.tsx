import { Clock, Calendar, Sun, Utensils, Bike, Heart } from 'lucide-react';

const lifestyle = [
  { icon: Clock, title: 'Work-Life Balance', desc: '36-40 hour weeks with strictly regulated overtime. Europeans value personal time deeply.' },
  { icon: Sun, title: 'Paid Holidays', desc: '25+ paid vacation days per year, plus public holidays. Travel Europe on your time off!' },
  { icon: Utensils, title: 'Food & Culture', desc: 'Diverse cuisine, world-class museums, vibrant festivals, and a rich multicultural society.' },
  { icon: Bike, title: 'Eco-Friendly Cities', desc: 'Excellent public transport and cycling infrastructure. Clean, safe, green cities.' },
  { icon: Heart, title: 'Healthcare Access', desc: 'Universal healthcare system. You and your family get full medical coverage.' },
  { icon: Calendar, title: 'Weekend Freedom', desc: 'Saturdays and Sundays off. Spend time exploring, relaxing, or with family.' },
];

export default function LifeInEuropeSection() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Beyond Work</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Life in <span className="text-gradient">West Europe</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Europe isn't just about the salary. It's a complete lifestyle upgrade — safety, balance, culture, and freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifestyle.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glassmorphism rounded-3xl p-7 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-2 text-lg">{title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 relative rounded-3xl overflow-hidden h-80">
          <img
            src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="European canal city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-[#050e1f]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="text-white text-2xl font-black italic">"Work to live — don't live to work."</p>
            <p className="text-white/70 mt-2">The European way of life</p>
          </div>
        </div>
      </div>
    </section>
  );
}
