import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Briefcase, Languages, Building } from 'lucide-react';
import { countries } from '@/data/countries';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Flag from '@/components/Flag';

export default function CountryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const country = countries.find((c) => c.slug === slug);

  if (!country) return <Navigate to="/home" replace />;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className={`relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br ${country.color} overflow-hidden`}>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 animate-float flex justify-center"><Flag code={country.flagCode} className="w-16 h-11 sm:w-20 sm:h-14 shadow-lg rounded" /></div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">{country.name}</h1>
          <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto">{country.description}</p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Briefcase, label: 'Open Positions', value: country.jobs },
              { icon: Building, label: 'Capital', value: country.capital },
              { icon: Languages, label: 'Language', value: country.language },
              { icon: MapPin, label: 'Salary Range', value: country.salary },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="inline-flex w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 items-center justify-center mb-2 sm:mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-semibold">{label}</div>
                <div className="text-slate-900 font-black text-sm sm:text-lg mt-0.5">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' + ' transition-all duration-700'}>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 text-center sm:text-left">Why {country.name}?</h2>
            <div className="space-y-3.5 sm:space-y-4">
              {country.highlights.map((h, i) => (
                <div
                  key={h}
                  className={`flex items-start gap-3.5 sm:gap-4 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-4 sm:p-5 hover:shadow-md transition-all duration-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${country.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other countries */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 sm:mb-8 text-center">Other Destinations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {countries.filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.slug}
                to={`/country/${c.slug}`}
                className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-center flex flex-col items-center justify-between border border-slate-100"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform"><Flag code={c.flagCode} className="w-10 h-7 rounded shadow-xs" /></div>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">{c.name}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{c.jobs} positions</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#050e1f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">Want to Work in {country.name}?</h2>
          <p className="text-white/70 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">Apply now and our team will guide you through the entire process.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all text-sm sm:text-base"
          >
            Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
