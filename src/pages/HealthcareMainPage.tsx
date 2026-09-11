import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Pill,
  Microscope,
  Activity,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { healthcareDepartments } from '@/data/healthcareDepartments';
import { services } from '@/data/services';

export default function HealthcareMainPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Healthcare Services & Clinical Placements | Dais World Endeavor';
  }, []);

  const openApplyModal = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal'));
  };

  const otherServices = services.filter((s) => s.slug !== 'healthcare');

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================
          1. TOP BREADCRUMBS STRIP
      ========================================================= */}
      <div className="bg-[#071328] border-b border-white/10 pt-28 pb-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/60">
            <Link to="/home" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link to="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-cyan-400 font-semibold">Healthcare Services</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. MAIN HEALTHCARE HERO
      ========================================================= */}
      <section
        className="relative pt-14 pb-20 sm:pb-28 flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/service-healthcare-hero.jpg')`,
        }}
      >
        {/* Blue/Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051126]/95 via-[#081a38]/85 to-[#051126]/90" />
        <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-[1px]" />

        {/* Ambient Glows */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
              <Stethoscope className="w-4 h-4 text-cyan-300" />
              Global Medical & Healthcare Recruitment
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Healthcare Services &{' '}
              <span className="text-gradient">Clinical Placements</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-xl leading-relaxed mb-8 max-w-3xl">
              Connecting certified Doctors, Registered Nurses, Pharmacists, Medical Laboratory Technologists, and Allied Health practitioners with accredited hospital groups across Europe, the UK, and the Middle East.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-12">
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all cursor-pointer"
              >
                Apply for Healthcare Jobs
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all hover:-translate-y-0.5"
              >
                Explore 5 Clinical Departments
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              {[
                { label: 'Clinical Divisions', val: '5 Dedicated Depts' },
                { label: 'Hospital Placements', value: '500+ Overseas' },
                { label: 'Monthly Salary Scale', value: '€3,000 – €14,000+' },
                { label: 'Visa & Licensing', value: '100% Facilitated' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4"
                >
                  <p className="text-lg sm:text-xl font-black text-white">
                    {item.value || item.val}
                  </p>
                  <p className="text-xs text-cyan-200/80 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. THE 5 HEALTHCARE DEPARTMENT CARDS (MAIN SECTION)
      ========================================================= */}
      <section id="departments" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
              Select Your Specialization
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our 5 Specialized{' '}
              <span className="text-gradient">Healthcare Departments</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Click any department below to explore detailed job positions, clinical responsibilities, required qualifications, and dedicated application guidelines.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {healthcareDepartments.map((dept, index) => {
              const Icon = dept.icon;

              return (
                <div
                  key={dept.id}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={dept.cardImage}
                      alt={dept.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                    {/* Department Number Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-wider">
                        Department 0{index + 1}
                      </span>
                    </div>

                    {/* Icon floating */}
                    <div
                      className={`absolute -bottom-5 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {dept.title}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-3">
                        {dept.tagline.split('—')[0]}
                      </p>

                      {/* Short Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {dept.shortDescription}
                      </p>

                      {/* Included Roles Pills */}
                      <div className="mb-6">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Key Roles Included:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {dept.roles.map((r) => (
                            <span
                              key={r.title}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 text-xs font-medium transition-colors"
                            >
                              {r.title.split('(')[0].trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Link / Button */}
                    <Link
                      to={dept.route}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group-hover:shadow-blue-500/25"
                    >
                      <span>Explore {dept.shortTitle} Department</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Direct Apply Card */}
            <div className="bg-gradient-to-br from-[#061530] to-[#0c2a5c] rounded-3xl p-7 sm:p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-cyan-300" />
                </div>

                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                  Fast-Track Eligibility
                </span>

                <h3 className="text-2xl font-black text-white mb-3">
                  Not Sure Which Role Suits You?
                </h3>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                  Submit your resume for a complimentary international credential evaluation. Our healthcare recruitment specialists will match your clinical experience with active openings across the Netherlands, Germany, and the UK.
                </p>
              </div>

              <button
                type="button"
                onClick={openApplyModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white hover:bg-cyan-50 text-blue-900 font-bold text-sm shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Submit CV for Free Assessment</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. LICENSING & REGULATORY PATHWAY
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
              Accredited International Recognition
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Comprehensive Licensing & Verification Support
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We eliminate administrative friction by guiding healthcare practitioners step-by-step through international medical council registrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'BIG-Register (Netherlands)',
                desc: 'Full assistance for Indian doctors and nurses to register with CIBG Netherlands and undergo language adaptation.',
                badge: 'Europe Hub',
              },
              {
                title: 'German Approbation & Anerkennung',
                desc: 'Specialized guidance for German B2 medical language, Fachsprachprüfung (FSP), and full clinical Approbation.',
                badge: 'Germany Hub',
              },
              {
                title: 'NMC & GMC Registration (UK)',
                desc: 'Preparation for CBT, OSCE, PLAB, and OET / IELTS documentation for the UK National Health Service (NHS).',
                badge: 'UK / Ireland',
              },
              {
                title: 'DHA / HAAD / MOH (Gulf)',
                desc: 'Fast-track Dataflow primary source verification (PSV) and Prometric licensing for leading Middle East hospitals.',
                badge: 'Middle East',
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {box.badge}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{box.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. 4-STEP HEALTHCARE PLACEMENT WORKFLOW
      ========================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
              Structured Roadmap
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Your 4-Step Journey to an Overseas Hospital Career
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Profile Assessment',
                desc: 'Submit CV, educational degrees, and council registration for eligibility review against overseas employer criteria.',
              },
              {
                step: '02',
                title: 'Licensing & Language',
                desc: 'Receive structured coaching for OET/IELTS or European language modules, and prepare the official qualification dossier.',
              },
              {
                step: '03',
                title: 'Employer Interviews',
                desc: 'Participate in structured interviews directly with hospital medical boards and clinical department heads.',
              },
              {
                step: '04',
                title: 'Visa & Relocation',
                desc: 'Receive your formal employment contract, work permit, visa grant, flight booking, and housing assistance.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 relative hover:bg-blue-50/50 hover:border-blue-200 transition-all"
              >
                <div className="text-4xl font-black text-blue-200 mb-4">{step.step}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. EXPLORE OTHER INDUSTRY SERVICES
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
              Cross-Industry Solutions
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Other Overseas Recruitment Services
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((serv) => {
              const ServIcon = serv.icon;
              return (
                <Link
                  key={serv.slug}
                  to={`/services/${serv.slug}`}
                  className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${serv.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}
                    >
                      <ServIcon className="w-6 h-6" />
                    </div>

                    <h4 className="font-black text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {serv.title}
                    </h4>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                      {serv.short}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs group-hover:gap-3 transition-all pt-2 border-t border-slate-100">
                    Explore Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. BOTTOM CTA
      ========================================================= */}
      <section className="py-20 bg-[#050e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-blue-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-400/30">
            <Sparkles className="w-4 h-4" />
            Verified Hospital Sponsorships
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Start Your International Healthcare Career Today
          </h2>

          <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Apply online in 2 minutes. Our team will review your qualifications and connect you with leading medical employers across the Netherlands, Germany, the UK, and beyond.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openApplyModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all cursor-pointer"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-sm border border-white/20 transition-all hover:-translate-y-0.5"
            >
              Contact Healthcare Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
