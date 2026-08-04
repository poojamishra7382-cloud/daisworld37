import { Home, Euro, Users, Wifi, Utensils, Bus } from 'lucide-react';

export default function AccommodationSection() {
  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="European accommodation"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glassmorphism rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6 text-cyan-300" />
                  <div>
                    <p className="text-white font-bold">Shared Accommodation</p>
                    <p className="text-white/70 text-sm">Typical first-home setup for new arrivals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Housing Support</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Your First <span className="text-gradient">Home</span> Abroad
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Finding housing in a new country can be stressful. That's why we assist every placed nurse with securing their first accommodation — usually a shared apartment near the hospital.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Euro, title: '€400-700/mo', desc: 'Typical rent for shared housing' },
                { icon: Users, title: 'Shared or Solo', desc: 'Your choice of arrangement' },
                { icon: Wifi, title: 'Fully Furnished', desc: 'Internet, utilities included' },
                { icon: Bus, title: 'Near Hospital', desc: 'Easy commute by bike or bus' },
                { icon: Utensils, title: 'Shared Kitchen', desc: 'Cook your own Indian meals' },
                { icon: Home, title: 'First Month Help', desc: 'We arrange your initial stay' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 items-start bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-blue-700">Good to know:</strong> Rent is typically deducted from your monthly salary. After 6-12 months, most nurses move into individual apartments as they settle in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
