import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countries } from '@/data/countries';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Flag from '@/components/Flag';

export default function CountriesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="countries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Destinations</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Where You'll <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We place nurses across globally. Explore opportunities, salaries, and benefits for each destination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <Link
              key={c.slug}
              to={`/country/${c.slug}`}
              className={`group relative rounded-3xl overflow-hidden card-hover ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`bg-gradient-to-br ${c.color} p-6 text-white h-full relative overflow-hidden`}>
                {/* Decorative blob */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                <Flag code={c.flagCode} className="w-12 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-black mb-3">{c.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Briefcase className="w-4 h-4" />
                    {c.jobs} open positions
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" />
                    {c.capital}
                  </div>
                  <div className="bg-white/15 rounded-xl p-2 mt-3">
                    <div className="text-xs text-white/70 uppercase tracking-widest">Salary Range</div>
                    <div className="font-bold">{c.salary}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-white/80 text-xs font-bold group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
