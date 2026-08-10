import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            End-to-end support from language training ,documentation and relocation. Everything you need to build your career across globally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient blob */}
              <div className={`absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br ${s.color} opacity-10 rounded-3xl rotate-12 group-hover:rotate-45 group-hover:scale-125 transition-all duration-500`} />

              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.short}</p>

              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div
            className={`relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${services.length * 100}ms` }}
          >
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-3xl rotate-12" />
            <div className="relative">
              <h3 className="text-xl font-black mb-3">Ready to Begin?</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">Start your application today and take the first step toward your global nursing career.</p>
              {/* {<Link
                to="/home"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all group/btn"
                
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>  */}
              <button
  onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all group/btn"
>
  Apply Now
  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
