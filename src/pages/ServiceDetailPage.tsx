import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/home" replace />;

  const Icon = service.icon;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className={`relative py-20 bg-gradient-to-br ${service.color} overflow-hidden`}>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl items-center justify-center mb-6">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">{service.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">{service.short}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">{service.description}</p>

            <h3 className="text-2xl font-black text-slate-900 mb-6">What's Included</h3>
            <div className="space-y-4">
              {service.features.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-start gap-4 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-5 hover:shadow-md transition-all duration-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium pt-1">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Other Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                <p className="text-slate-500 text-xs">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050e1f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Ready to Begin?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Start Your Application Today</h2>
          <p className="text-white/70 text-lg mb-8">Take the first step toward your European nursing career.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
