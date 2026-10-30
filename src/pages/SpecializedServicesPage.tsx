import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ArrowRight,
  Sparkles,
  Check,
  MapPin,
  Briefcase,
  Euro,
  CheckCircle2,
  Zap,
  Flame,
  Layers,
  Anchor,
  X,
  ArrowLeft,
  Info,
} from 'lucide-react';

interface SpecializedJob {
  id: string;
  title: string;
  jobNumber: string;
  categoryTag: string;
  location: string;
  experience: string;
  salary: string;
  salaryNote: string;
  description: string;
  requirements: string[];
  diplomaNote: string;
  languageRequirement: string;
  qualificationRequirement: string;
}

const jobsData: SpecializedJob[] = [
  {
    id: 'electricians',
    title: 'Electricians',
    jobNumber: 'Job 01',
    categoryTag: 'Electrical & Power Systems • Solar & EV',
    location: 'Europe',
    experience: '2–5 years of relevant professional experience in Europe',
    salary: '€3,000–€4,500 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    description:
      'We are seeking experienced electricians for electrical installation, maintenance, troubleshooting, and repair work. Candidates must have practical experience with solar panel systems and EV charging station installations.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant diploma or technical qualification.',
      '2–5 years of relevant work experience in Europe.',
      'Hands-on experience with solar panels and EV charging stations.',
      'Knowledge of electrical installation, troubleshooting, and safety procedures.',
    ],
    diplomaNote:
      'Diploma, licence, and certification requirements may differ by country.',
    languageRequirement: 'Minimum English-speaking ability',
    qualificationRequirement:
      'Relevant diploma or technical qualification (diploma, licence, and certification requirements may differ by country)',
  },
  {
    id: 'welders',
    title: 'Welders',
    jobNumber: 'Job 02',
    categoryTag: 'Metal Fabrication & Industrial Welding',
    location: 'Europe',
    experience: '2–5 years of relevant professional experience in Europe',
    salary: '€2,500–€3,600 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    description:
      'We are hiring experienced welders for metal fabrication, joining metal components, and industrial or structural welding projects. Candidates should be able to interpret technical drawings and follow workplace safety standards.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant welding diploma or professional qualification.',
      '2–5 years of relevant welding experience in Europe.',
      'Practical knowledge of welding techniques and equipment.',
      'Ability to follow technical drawings and safety procedures.',
    ],
    diplomaNote:
      'Diploma, licence, and certification requirements may differ by country.',
    languageRequirement: 'Minimum English-speaking ability',
    qualificationRequirement:
      'Relevant welding diploma or professional qualification (diploma, licence, and certification requirements may differ by country)',
  },
  {
    id: 'scaffolders',
    title: 'Scaffolders',
    jobNumber: 'Job 03',
    categoryTag: 'Industrial Access & Scaffolding Structures',
    location: 'Europe',
    experience: '2–5 years of relevant professional experience in Europe',
    salary: '€2,500–€4,000 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    description:
      'We are looking for experienced scaffolders to assemble, inspect, modify, and dismantle scaffolding structures for construction and industrial projects. Candidates should understand scaffold stability, safe assembly procedures, and working-at-height safety.',
    requirements: [
      'Minimum English-speaking ability.',
      '2–5 years of relevant scaffolding experience in Europe.',
      'Practical knowledge of scaffolding equipment and assembly.',
      'Understanding of working-at-height safety procedures.',
      'Relevant safety certifications where required by the employer.',
    ],
    diplomaNote:
      'Diploma, licence, and certification requirements may differ by country.',
    languageRequirement: 'Minimum English-speaking ability',
    qualificationRequirement:
      'Relevant safety certifications where required by the employer (diploma, licence, and certification requirements may differ by country)',
  },
  {
    id: 'crane-operators',
    title: 'Crane Operators – Container Terminals at the Port',
    jobNumber: 'Job 04',
    categoryTag: 'Maritime Port Logistics & Heavy Container Handling',
    location: 'Europe',
    experience: '2–5 years of relevant professional experience in Europe',
    salary: '€2,500–€3,500 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    description:
      'We are hiring experienced crane operators to operate container-handling cranes at port and container-terminal facilities. Responsibilities include loading and unloading shipping containers, positioning cargo safely, and coordinating with terminal personnel.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant crane-operation diploma, licence, or qualification as required locally.',
      '2–5 years of relevant crane-operation experience in Europe.',
      'Experience in container terminals or port operations preferred.',
      'Knowledge of lifting procedures and workplace safety standards.',
    ],
    diplomaNote:
      'Diploma, licence, and certification requirements may differ by country.',
    languageRequirement: 'Minimum English-speaking ability',
    qualificationRequirement:
      'Relevant crane-operation diploma, licence, or qualification as required locally (diploma, licence, and certification requirements may differ by country)',
  },
];

export default function SpecializedServicesPage() {
  const [selectedJobDetail, setSelectedJobDetail] = useState<SpecializedJob | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Skilled Jobs Across the Globe | Dais World Endeavor';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedJobDetail(null);
      }
    };
    if (selectedJobDetail) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedJobDetail]);

  const openApplyModal = (professionTitle?: string) => {
    window.dispatchEvent(
      new CustomEvent('open-apply-modal', {
        detail: {
          profession: professionTitle || 'Skilled Jobs Across the Globe',
        },
      })
    );
  };

  const electricianJob = jobsData.find((j) => j.id === 'electricians')!;
  const welderJob = jobsData.find((j) => j.id === 'welders')!;
  const scaffolderJob = jobsData.find((j) => j.id === 'scaffolders')!;
  const craneOperatorJob = jobsData.find((j) => j.id === 'crane-operators')!;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section
        className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/skilled-jobs-hero.jpg')`,
          backgroundPosition: 'center center',
        }}
      >
        {/* Crisp & Clear Overlay (Zero Blur for Maximum Sharpness & Detail) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/35 to-slate-950/75" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/40 text-teal-200 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5 shadow-lg">
            <Wrench className="w-4 h-4 text-teal-300" />
            <span>Skilled Job Opportunities Across the Globe</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
            Skilled Jobs
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-white/95 font-medium mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Certified Electricians, Welders, Scaffolders & Crane Operators for Global Megaprojects
          </p>

          {/* Short Description */}
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Direct international deployment with accredited global and Middle Eastern EPC contractors,
            offshore fabrication yards, energy power plants, and industrial gigafactories.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-2">
            <button
              type="button"
              onClick={() => openApplyModal('Skilled Jobs Across the Globe')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm shadow-xl shadow-teal-600/30 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Apply for a Skilled Job</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#relocation-support"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all hover:-translate-y-0.5"
            >
              <span>Relocation & Visa Support</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          ATTRACTIVE SECTION HEADING: SKILLED JOBS ACROSS THE GLOBE
      ========================================================= */}
      <section className="pt-16 sm:pt-20 pb-8 bg-gradient-to-b from-slate-100/80 via-white to-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/15 border border-teal-500/30 text-teal-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-teal-600 animate-pulse" />
            <span>High-Demand Global Deployments</span>
          </div>

          {/* Main Attractive Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            High-Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">Skilled Job</span> Openings Across the Globe
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Explore verified international vacancies for certified craftsmen across global industrial infrastructure, renewable energy projects, and seaport facilities.
          </p>

          {/* Quick Navigator Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { name: 'Electricians', href: '#electricians', icon: Zap },
              { name: 'Welders', href: '#welders', icon: Flame },
              { name: 'Scaffolders', href: '#scaffolders', icon: Layers },
              { name: 'Crane Operators', href: '#crane-operators', icon: Anchor },
            ].map((trade) => {
              const Icon = trade.icon;
              return (
                <a
                  key={trade.name}
                  href={trade.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-teal-600" />
                  <span>{trade.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ELECTRICIANS SECTION
      ========================================================= */}
      <section id="electricians" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <span>Job 01 • Electrical Systems & Solar/EV</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Electricians
                  </h2>
                </div>
              </div>

              {/* Location & Experience Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>Europe</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-xs">
                  <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                  <span>2–5 years of relevant professional experience in Europe</span>
                </div>
              </div>
            </div>

            {/* Salary Callout */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white border border-teal-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Euro className="w-4 h-4 text-teal-400" />
                  <span>Salary</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  €3,000–€4,500 <span className="text-xs sm:text-sm font-medium text-teal-200/90">per month (indicative gross salary)</span>
                </div>
              </div>
              <div className="text-xs text-slate-300 max-w-xs leading-relaxed bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                * Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>Job Description</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200/80">
                We are seeking experienced electricians for electrical installation, maintenance, troubleshooting, and repair work. Candidates must have practical experience with solar panel systems and EV charging station installations.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Requirements
              </h3>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum English-speaking ability.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Relevant diploma or technical qualification.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>2–5 years of relevant work experience in Europe.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Hands-on experience with solar panels and EV charging stations.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Knowledge of electrical installation, troubleshooting, and safety procedures.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic bg-white border border-slate-200/90 rounded-xl px-4 py-2.5">
                Note: Diploma, licence, and certification requirements may differ by country.
              </p>
            </div>

            {/* 3. Electricians Learn More button (placed immediately below requirements) */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200">
              <Link
                to="/services/specialized-services/electricians"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => openApplyModal('Electricians - Europe')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Apply for this Role</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WELDERS SECTION
      ========================================================= */}
      <section id="welders" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20 flex-shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <span>Job 02 • Metal Fabrication & Industrial Welding</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Welders
                  </h2>
                </div>
              </div>

              {/* Location & Experience Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>Europe</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold shadow-xs">
                  <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                  <span>2–5 years of relevant professional experience in Europe</span>
                </div>
              </div>
            </div>

            {/* Salary Callout */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white border border-teal-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Euro className="w-4 h-4 text-teal-400" />
                  <span>Salary</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  €2,500–€3,600 <span className="text-xs sm:text-sm font-medium text-teal-200/90">per month (indicative gross salary)</span>
                </div>
              </div>
              <div className="text-xs text-slate-300 max-w-xs leading-relaxed bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                * Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Job Description
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                We are hiring experienced welders for metal fabrication, joining metal components, and industrial or structural welding projects. Candidates should be able to interpret technical drawings and follow workplace safety standards.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Requirements
              </h3>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum English-speaking ability.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Relevant welding diploma or professional qualification.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>2–5 years of relevant welding experience in Europe.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Practical knowledge of welding techniques and equipment.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Ability to follow technical drawings and safety procedures.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5">
                Note: Diploma, licence, and certification requirements may differ by country.
              </p>
            </div>

            {/* 5. Welders Learn More button (placed immediately below requirements) */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200">
              <Link
                to="/services/specialized-services/welders"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => openApplyModal('Welders - Europe')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Apply for this Role</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. SCAFFOLDERS SECTION
      ========================================================= */}
      <section id="scaffolders" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <span>Job 03 • Industrial Access & Scaffolding Structures</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Scaffolders
                  </h2>
                </div>
              </div>

              {/* Location & Experience Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>Europe</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-xs">
                  <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                  <span>2–5 years of relevant professional experience in Europe</span>
                </div>
              </div>
            </div>

            {/* Salary Callout */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white border border-teal-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Euro className="w-4 h-4 text-teal-400" />
                  <span>Salary</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  €2,500–€4,000 <span className="text-xs sm:text-sm font-medium text-teal-200/90">per month (indicative gross salary)</span>
                </div>
              </div>
              <div className="text-xs text-slate-300 max-w-xs leading-relaxed bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                * Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Job Description
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200/80">
                We are looking for experienced scaffolders to assemble, inspect, modify, and dismantle scaffolding structures for construction and industrial projects. Candidates should understand scaffold stability, safe assembly procedures, and working-at-height safety.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Requirements
              </h3>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum English-speaking ability.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>2–5 years of relevant scaffolding experience in Europe.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Practical knowledge of scaffolding equipment and assembly.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Understanding of working-at-height safety procedures.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Relevant safety certifications where required by the employer.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic bg-white border border-slate-200/90 rounded-xl px-4 py-2.5">
                Note: Diploma, licence, and certification requirements may differ by country.
              </p>
            </div>

            {/* 7. Scaffolders Learn More button (placed immediately below requirements) */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200">
              <Link
                to="/services/specialized-services/scaffolders"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => openApplyModal('Scaffolders - Europe')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Apply for this Role</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. CRANE OPERATORS – CONTAINER TERMINALS AT THE PORT SECTION
      ========================================================= */}
      <section id="crane-operators" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-cyan-600/20 flex-shrink-0">
                  <Anchor className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <span>Job 04 • Maritime Port Logistics & Container Terminals</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Crane Operators – Container Terminals at the Port
                  </h2>
                </div>
              </div>

              {/* Location & Experience Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>Europe</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-semibold shadow-xs">
                  <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                  <span>2–5 years of relevant professional experience in Europe</span>
                </div>
              </div>
            </div>

            {/* Salary Callout */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white border border-teal-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Euro className="w-4 h-4 text-teal-400" />
                  <span>Salary</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  €2,500–€3,500 <span className="text-xs sm:text-sm font-medium text-teal-200/90">per month (indicative gross salary)</span>
                </div>
              </div>
              <div className="text-xs text-slate-300 max-w-xs leading-relaxed bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                * Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Job Description
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                We are hiring experienced crane operators to operate container-handling cranes at port and container-terminal facilities. Responsibilities include loading and unloading shipping containers, positioning cargo safely, and coordinating with terminal personnel.
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Requirements
              </h3>
              <ul className="space-y-2.5 mb-4">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum English-speaking ability.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Relevant crane-operation diploma, licence, or qualification as required locally.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>2–5 years of relevant crane-operation experience in Europe.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Experience in container terminals or port operations preferred.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Knowledge of lifting procedures and workplace safety standards.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5">
                Note: Diploma, licence, and certification requirements may differ by country.
              </p>
            </div>

            {/* 9. Crane Operators Learn More button (placed immediately below requirements) */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200">
              <Link
                to="/services/specialized-services/crane-operators"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-teal-600/25 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => openApplyModal('Crane Operators – Container Terminals at the Port')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>Apply for this Role</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. CANDIDATE BENEFITS & RELOCATION (Original content maintained)
      ========================================================= */}
      <section id="relocation-support" className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2.5">
                Full Overseas Support
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Complete Visa, Relocation & Housing Assistance for Skilled Craftsmen
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Dais World Endeavor ensures complete legal compliance, embassy attestation, air travel, and on-site settlement so craftsmen can focus entirely on high-earning project execution.
              </p>

              <div className="space-y-4">
                {[
                  '100% Legal EU / Gulf Work Permits & Direct Employer Contracts',
                  'Free Employer-Provided Furnished Accommodation & Daily Site Commute',
                  'High Overtime Earning Potential (1.5x to 2x Shift Rates)',
                  'Safety PPE, Tool Allowance & Full Health Insurance Coverage',
                  'Free Flight Tickets & Airport Reception on Arrival',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Fast-Track Hiring Timeline</h3>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'CV Submission & Verification', time: '1-3 Days' },
                  { step: '02', title: 'Practical Skills Assessment & Client Interview', time: '5-7 Days' },
                  { step: '03', title: 'Medical Exam & Police Clearance (PCC)', time: '7-10 Days' },
                  { step: '04', title: 'Work Permit & Visa Stamping', time: '3-6 Weeks' },
                  { step: '05', title: 'Flight Deployment & Site Induction', time: 'Day 1 on Site' },
                ].map((st) => (
                  <div key={st.step} className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-md border border-teal-400/20">
                        {st.step}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100">{st.title}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{st.time}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openApplyModal('Skilled Jobs Across the Globe')}
                className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-sm text-center shadow-lg transition-all cursor-pointer"
              >
                Apply for Job Deployment
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================
          PROFESSION DETAIL MODAL (Learn More Button functionality)
      ========================================================= */}
      {selectedJobDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
        >
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden relative">
            {/* Top Navigation Bar with Easy Return */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/90">
              <button
                type="button"
                onClick={() => setSelectedJobDetail(null)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3.5 py-1.5 rounded-xl border border-teal-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Skilled Jobs</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedJobDetail(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                  {selectedJobDetail.categoryTag}
                </span>
                <h2 id="detail-modal-title" className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-1">
                  {selectedJobDetail.title}
                </h2>
                <p className="text-xs text-slate-500">
                  Daisworld International Deployment • Skilled Job Opportunities Across the Globe
                </p>
              </div>

              {/* Indicative Gross Salary Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200">
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Euro className="w-4 h-4 text-teal-600" />
                  <span>Indicative Gross Monthly Salary</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
                  {selectedJobDetail.salary}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedJobDetail.salaryNote}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Location</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    {selectedJobDetail.location}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Experience Requirements</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                    {selectedJobDetail.experience}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Language Requirements</span>
                  <span className="font-bold text-slate-800">
                    {selectedJobDetail.languageRequirement}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Qualifications</span>
                  <span className="font-bold text-slate-800">
                    {selectedJobDetail.qualificationRequirement}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Job Description
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {selectedJobDetail.description}
                </p>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Key Requirements
                </h4>
                <ul className="space-y-2">
                  {selectedJobDetail.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diploma, Licence & Salary Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Licence & Salary Transparency Notice:</span>
                  {selectedJobDetail.diplomaNote} All stated salaries in EUR (€) are indicative gross monthly estimates and do not represent a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer with Easy Return */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedJobDetail(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                ← Return to Skilled Jobs
              </button>

              <button
                type="button"
                onClick={() => {
                  const title = selectedJobDetail.title;
                  setSelectedJobDetail(null);
                  openApplyModal(`${title} - Europe`);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Apply for this Role</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
