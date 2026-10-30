import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Briefcase,
  Euro,
  Layers,
  Wrench,
  Check,
  Info,
  ShieldCheck,
  Award,
  Zap,
  Flame,
  Anchor,
  Globe2,
} from 'lucide-react';
import { SkilledJobDetail, skilledJobsDetailData } from '@/data/skilledJobsDetailData';

interface Props {
  job: SkilledJobDetail;
}

export default function SkilledJobDetailView({ job }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${job.title} Careers & Global Deployments | Dais World Endeavor`;
  }, [job]);

  const openApplyModal = () => {
    window.dispatchEvent(
      new CustomEvent('open-apply-modal', {
        detail: {
          profession: `${job.title} - Skilled Jobs`,
        },
      })
    );
  };

  const otherJobs = skilledJobsDetailData.filter((j) => j.id !== job.id);

  // Icon mapping
  const getJobIcon = (id: string) => {
    switch (id) {
      case 'electricians':
        return Zap;
      case 'welders':
        return Flame;
      case 'scaffolders':
        return Layers;
      case 'crane-operators':
        return Anchor;
      default:
        return Wrench;
    }
  };

  const MainIcon = getJobIcon(job.id);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section
        className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('${job.heroImage}')`,
          backgroundPosition: 'center center',
        }}
      >
        {/* Crisp & Clear Overlay (Zero Blur for Maximum Sharpness & Clarity) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/75" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/40 text-teal-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <MainIcon className="w-4 h-4 text-teal-300" />
            <span>{job.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
            {job.title}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-white/95 font-medium mb-4 max-w-3xl leading-relaxed drop-shadow-md">
            {job.tagline}
          </p>

          {/* Short Description */}
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl drop-shadow">
            {job.roleOverview}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 mb-10">
            <button
              type="button"
              onClick={openApplyModal}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm shadow-xl shadow-teal-600/30 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Apply for this Role</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#specializations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all hover:-translate-y-0.5"
            >
              <span>View Specializations ({job.types.length})</span>
            </a>
          </div>

          {/* Quick Specifications Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
            <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-left">
              <div className="flex items-center gap-2 text-xs text-teal-300 font-bold uppercase tracking-wider mb-1">
                <Euro className="w-3.5 h-3.5 text-teal-400" />
                <span>Indicative Earnings</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-white">{job.salary.split('(')[0].trim()}</div>
              <div className="text-[11px] text-white/60">Indicative gross monthly salary</div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-left">
              <div className="flex items-center gap-2 text-xs text-teal-300 font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Deployment Scope</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-white">{job.location}</div>
              <div className="text-[11px] text-white/60">Verified Megaproject Contracts</div>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-left">
              <div className="flex items-center gap-2 text-xs text-teal-300 font-bold uppercase tracking-wider mb-1">
                <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                <span>Required Experience</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-white">2–5 Years</div>
              <div className="text-[11px] text-white/60">Relevant professional trade experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. ROLE OVERVIEW & SCOPE
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Detailed Overview */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                <span>Role Scope & Global Mandate</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                International Deployment for Certified{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">
                  {job.title}
                </span>
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                {job.roleOverview}
              </p>

              {job.roleScopeParagraphs.map((para, idx) => (
                <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block w-full mb-1">
                  Active Deployment Destinations:
                </span>
                {job.targetCountries.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Quick Overview Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-teal-500/20">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-400/40 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-black mb-3">Direct Employer Contracts</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                All {job.title} deployed through Dais World Endeavor receive 100% legal work permits, verified safety PPE, employer-provided furnished housing, and flight ticketing.
              </p>

              <div className="space-y-3.5 border-t border-white/10 pt-5">
                {[
                  '100% Legal Work Permit & Visa Attestation',
                  'Free Employer-Provided Furnished Housing',
                  'Medical Insurance & Site Transportation',
                  'High Overtime Earning Potential (1.5x–2.0x)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={openApplyModal}
                className="w-full mt-7 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm text-center shadow-lg transition-all cursor-pointer"
              >
                Apply for {job.title}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. TYPES & SPECIALIZATIONS SECTION ("type")
      ========================================================= */}
      <section id="specializations" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Specializations & Categories</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Key Types of {job.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the core technical domains and specialized project roles available across global industrial facilities, energy infrastructure, and construction sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {job.types.map((spec, index) => (
              <div
                key={spec.title}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 border border-teal-200 uppercase tracking-wider">
                      Type 0{index + 1}
                    </span>
                    <MainIcon className="w-5 h-5 text-teal-600" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1 leading-snug">
                    {spec.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 mb-4">
                    {spec.tagline}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {spec.description}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Typical Project Sites
                    </span>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                      {spec.typicalSites}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Tools & Equipment
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {spec.keyTools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. KEY RESPONSIBILITIES SECTION ("responsiblitity")
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Job Responsibilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Core Responsibilities & Technical Duties
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every deployed professional executes structured on-site responsibilities designed to maintain international quality tolerances, site safety, and timely megaproject handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {job.responsibilities.map((grp) => (
              <div
                key={grp.category}
                className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">
                    {grp.category}
                  </h3>

                  <ul className="space-y-3">
                    {grp.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <Check className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. KEY ADVANTAGES & CAREER BENEFITS ("adv")
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Career Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Why Work as an International {job.title}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the unmatched earning potential, career prestige, and comprehensive relocation benefits guaranteed for certified craftsmen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {job.advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-slate-800/80 rounded-3xl border border-slate-700/80 p-6 flex flex-col justify-between hover:border-teal-400/50 transition-all hover:-translate-y-1"
              >
                <div>
                  {adv.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/40 uppercase tracking-wider inline-block mb-3">
                      {adv.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-black text-white mb-1.5 leading-snug">
                    {adv.title}
                  </h3>
                  <div className="text-xs font-semibold text-teal-300 mb-3">
                    {adv.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Apply Banner inside Advantages */}
          <div className="mt-12 bg-gradient-to-r from-teal-900/60 to-emerald-950/60 border border-teal-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Ready to Advance Your International Trade Career?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Submit your CV and trade credentials today. Our recruitment specialists will verify your documents and connect you with leading global employers.
              </p>
            </div>
            <button
              type="button"
              onClick={openApplyModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-sm shadow-xl shadow-teal-500/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Apply for {job.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. REQUIREMENTS & CERTIFICATIONS
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Candidate Requirements & Qualifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Review the essential criteria required by global EPC employers for overseas deployment.
            </p>

            <ul className="space-y-3 mb-8">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
              Recognized Safety & Trade Certifications
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {job.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                >
                  <Award className="w-3.5 h-3.5 text-teal-600" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>

            {/* Salary & Licence Transparency Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Salary & Certification Transparency Notice:</span>
                All salaries are quoted in EUR (€) as indicative gross monthly estimates and do not represent a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Diploma, licence, and certification requirements may differ by country.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. OTHER SKILLED JOBS NAVIGATION
      ========================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Explore More Disciplines</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Other High-Demand Skilled Jobs
              </h2>
            </div>
            <Link
              to="/services/specialized-services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-600 hover:text-teal-700 hover:underline"
            >
              <span>View All Skilled Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherJobs.map((oj) => {
              const OtherIcon = getJobIcon(oj.id);
              return (
                <Link
                  key={oj.id}
                  to={`/services/specialized-services/${oj.slug}`}
                  className="group bg-slate-50 hover:bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-100/70 text-teal-800 border border-teal-200 uppercase tracking-wider">
                        {oj.roleNumber}
                      </span>
                      <OtherIcon className="w-4 h-4 text-teal-600" />
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {oj.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {oj.tagline}
                    </p>

                    <div className="text-xs font-bold text-slate-900 mb-4">
                      {oj.salary.split('(')[0].trim()}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 group-hover:text-teal-700">
                    <span>Learn More & View Types</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

