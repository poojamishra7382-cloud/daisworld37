import { useParams, Link, Navigate } from 'react-router-dom';

import {
  ArrowRight,
  Check,
  Sparkles,
  Briefcase,
  Building2,
  Users,
  CheckCircle,
} from 'lucide-react';

import { services } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/home" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="w-full">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="relative pt-28 sm:pt-32 pb-16 min-h-[560px] sm:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >

  

{/* Blue Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-blue-950/75 via-blue-900/45 to-blue-950/35" />

{/* Transparent Dark Blue Overlay */}
<div className="absolute inset-0 bg-[#061a3a]/45" />

{/* Decorative Glow */}
<div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

<div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

            {/* Icon */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl flex items-center justify-center mb-5 sm:mb-7 shadow-2xl">
              <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>

            {/* Small Heading */}
            <p className="text-cyan-300 font-bold text-xs sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4">
              Global Recruitment Solutions
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              {service.short}
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="py-20 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >

            {/* Left Content */}
            <div>

              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
                About Our Service
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                Professional{' '}
                <span className="text-gradient">
                  {service.title}
                </span>{' '}
                Recruitment Solutions
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                {service.overview}
              </p>

            </div>


            {/* Right Content */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4">
                What We Provide
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We connect qualified professionals with
                suitable international employers and provide
                structured recruitment and placement support.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          RECRUITMENT SOLUTIONS
      ========================================================= */}

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
              Our Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
              Our Recruitment{' '}
              <span className="text-gradient">
                Solutions
              </span>
            </h2>

            <p className="text-slate-500 text-lg">
              Comprehensive recruitment services designed
              specifically for the{' '}
              {service.title.toLowerCase()} industry.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {service.features.map((feature, index) => (

              <div
                key={feature}
                className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Check className="w-6 h-6 text-white" />
                </div>

                <p className="text-xs text-blue-500 font-bold mb-2">
                  SERVICE {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature}
                </h3>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          JOB ROLES
      ========================================================= */}

      <section className="py-20 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-32">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>

              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
                Career Opportunities
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
                Key Roles We{' '}
                <span className="text-gradient">
                  Recruit
                </span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Explore professional opportunities across
                different roles within the{' '}
                {service.title.toLowerCase()} industry.
              </p>

            </div>


            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-4">

              {service.roles.map((role) => (

                <div
                  key={role}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-all"
                >

                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />

                  <span className="text-slate-700 font-medium">
                    {role}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="py-20 bg-[#f5f9ff]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
              <Building2 className="w-7 h-7 text-blue-600" />
            </div>

            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
              Industry Coverage
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
              Industries We{' '}
              <span className="text-gradient">
                Serve
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

            {service.industries.map((industry) => (

              <div
                key={industry}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >

                <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-3" />

                <p className="font-semibold text-slate-800 text-sm">
                  {industry}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="py-20 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
                Candidate Benefits
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                Why Professionals{' '}
                <span className="text-gradient">
                  Choose Us
                </span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our recruitment support is designed to
                make the international career journey
                structured, transparent, and professional.
              </p>

            </div>


            {/* Right */}
            <div className="space-y-4">

              {service.benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100"
                >

                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">

                    <Check className="w-5 h-5 text-white" />

                  </div>

                  <p className="font-semibold text-slate-700">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          OTHER SERVICES
      ========================================================= */}

      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
              Explore More
            </p>

            <h3 className="text-3xl font-black text-slate-900">
              Other Services
            </h3>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services
              .filter((item) => item.slug !== slug)
              .map((item) => {

                const OtherIcon = item.icon;

                return (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="group bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >

                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    >

                      <OtherIcon className="w-6 h-6 text-white" />

                    </div>

                    <h4 className="font-black text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {item.short}
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">

                      Explore Service

                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

                    </div>

                  </Link>
                );

              })}

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="py-20 bg-[#050e1f]">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-4">

            <Sparkles className="w-4 h-4" />

            Ready to Begin?

          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Start Your International Career Today
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Explore international opportunities in{' '}
            {service.title} and take the next step toward
            your professional future.
          </p>

          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('open-apply-modal')
              )
            }
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
          >
            Apply Now

            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </section>

    </div>
  );
}