import { Building2, Heart, Stethoscope, Award } from 'lucide-react';

const partners = [
  { name: 'Amsterdam UMC', type: 'University Hospital', icon: Building2 },
  { name: 'Erasmus MC', type: 'Rotterdam Medical Center', icon: Stethoscope },
  { name: 'UMC Utrecht', type: 'Teaching Hospital', icon: Heart },
  { name: 'Haga Hospital', type: 'The Hague Hospital', icon: Building2 },
  { name: 'Leiden UMC', type: 'University Medical Center', icon: Stethoscope },
  { name: 'VU Medical Center', type: 'Amsterdam Hospital', icon: Heart },
  { name: 'Radboud UMC', type: 'Nijmegen Hospital', icon: Building2 },
  { name: 'Maastricht UMC', type: 'Medical Center', icon: Award },
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-[#050e1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Network</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Partner <span className="text-gradient">Hospitals</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We place nurses directly with top-tier European healthcare institutions — no middlemen, no agencies in between.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map(({ name, type, icon: Icon }) => (
            <div key={name} className="glassmorphism rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-1">{name}</h4>
              <p className="text-white/50 text-xs">{type}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Plus 15+ partner clinics and care homes across the Netherlands, Germany, and Belgium.
          </p>
        </div>
      </div>
    </section>
  );
}
