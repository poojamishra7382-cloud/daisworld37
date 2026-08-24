import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="pt-12 pb-12 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
            What We Offer
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            End-to-end international recruitment solutions across healthcare, hospitality,
            construction, oil & gas, and beauty & care industries.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`group relative h-72 sm:h-80 overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >

              {/* Background Image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-blue-800/20" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/30 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">

                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {s.short}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <div
            className={`relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 ${visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: `${services.length * 100}ms` }}
          >

            <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-3xl rotate-12" />

            <div className="relative">
              <h3 className="text-xl font-black mb-3">
                Ready to Begin?
              </h3>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Start your application today and take the first step toward
                your global career.
              </p>

              <button
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('open-apply-modal')
                  )
                }
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all group/btn text-sm sm:text-base"
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