import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countries } from '@/data/countries';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Flag from '@/components/Flag';

export default function CountriesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="countries" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2.5">Destinations</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-5">
            Where You'll <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            We connect skilled professionals with global career opportunities. Explore jobs, salaries, and benefits across each destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {countries.map((c, i) => (
            <Link
              key={c.slug}
              to={`/country/${c.slug}`}
              className={`group relative rounded-3xl overflow-hidden card-hover ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`bg-gradient-to-br ${c.color} p-5 sm:p-6 text-white h-full relative overflow-hidden flex flex-col justify-between`}>
                {/* Decorative blob */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  <Flag code={c.flagCode} className="w-10 h-7 sm:w-12 sm:h-8 mb-3 group-hover:scale-110 transition-transform duration-300 rounded shadow-sm" />
                  <h3 className="text-lg sm:text-xl font-black mb-3">{c.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span>{c.jobs} open positions</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{c.capital}</span>
                    </div>
                    <div className="bg-white/15 rounded-xl p-2.5 mt-3">
                      <div className="text-[10px] text-white/70 uppercase tracking-widest font-semibold">Salary Range</div>
                      <div className="font-bold text-xs sm:text-sm">{c.salary}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-white/90 text-xs font-bold group-hover:gap-2 transition-all">
                  Explore Destination <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
