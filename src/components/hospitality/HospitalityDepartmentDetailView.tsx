import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Check,
} from 'lucide-react';
import { HospitalityDepartment, hospitalityDepartments } from '@/data/hospitalityDepartments';

interface Props {
  department: HospitalityDepartment;
}

export default function HospitalityDepartmentDetailView({ department }: Props) {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const activeRole = department.roles[selectedRoleIndex] || department.roles[0];
  const otherDepartments = hospitalityDepartments.filter((d) => d.id !== department.id);

  const openApplyModal = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal'));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================
          1. HERO SECTION (SIMPLE & CLEAN - DIRECTLY UNDER NAVBAR)
      ========================================================= */}
      <section
        className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${department.heroImage})` }}
      >
        {/* Simple Clean Dark Overlay - No Heavy Color Shades */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Simple Department Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Hospitality Department
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
            {department.title}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-white/90 font-medium mb-3 max-w-2xl mx-auto leading-relaxed">
            {department.tagline}
          </p>

          {/* Short Description */}
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            {department.shortDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={openApplyModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#job-roles"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all hover:-translate-y-0.5"
            >
              View Roles ({department.roles.length})
            </a>
          </div>

          {/* Simple Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto">
            {department.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black/30 backdrop-blur-md border border-white/15 rounded-xl p-3 text-center"
              >
                <p className="text-base sm:text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DEPARTMENT OVERVIEW & INTERNATIONAL STANDARDS
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Detailed Overview */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                Department Overview
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                International Hospitality Excellence in{' '}
                <span className="text-gradient">{department.title}</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                {department.overview}
              </p>

              {/* Perks Highlight Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 to-orange-50/40 border border-amber-200/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      International Relocation & Expat Hospitality Package
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {department.perksHighlights}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Features Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  Why Hospitality Talents Choose Dais World Endeavor
                </h3>

                <ul className="space-y-3">
                  {[
                    'Direct contracts with accredited 4-star & 5-star hotel groups',
                    'Complimentary duty meals & shared/private accommodation',
                    'Transparent recruitment with zero hidden processing charges',
                    'Full flight booking, work permit & relocation visa support',
                    'European permanent residency (PR) & worldwide brand transfers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={openApplyModal}
                  className="w-full mt-6 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-md shadow-blue-600/20"
                >
                  Apply for Hospitality Evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. AVAILABLE JOB ROLES (INTERACTIVE CARDS)
      ========================================================= */}
      <section id="job-roles" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
              Available Positions
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Featured Job Roles in{' '}
              <span className="text-gradient">{department.title}</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore open hospitality job profiles with verified international hotel sponsorships.
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {department.roles.map((role, idx) => (
              <button
                key={role.title}
                type="button"
                onClick={() => setSelectedRoleIndex(idx)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedRoleIndex === idx
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {role.title.split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Active Detailed Role Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-slate-900 p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    {activeRole.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeRole.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base mt-2 max-w-3xl">
                    {activeRole.description}
                  </p>
                </div>

                {/* Salary Box */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3 text-right">
                  <p className="text-xs text-white/70 font-medium">Estimated Monthly Remuneration</p>
                  <p className="text-xl sm:text-2xl font-black text-white">{activeRole.salaryRange}</p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Responsibilities */}
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Key Department Responsibilities
                </h4>
                <ul className="space-y-3">
                  {activeRole.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Qualifications & Experience */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-600" />
                    Required Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {activeRole.qualifications.map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Required Experience
                  </p>
                  <p className="text-sm font-semibold text-slate-800">{activeRole.experience}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Essential Key Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeRole.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openApplyModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Apply for {activeRole.title.split('(')[0]}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. RESPONSIBILITIES & QUALIFICATIONS MATRIX
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Responsibilities */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                <FileCheck className="w-3.5 h-3.5" />
                Department Core Scope
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Operational Duties & Key Areas
              </h3>

              <div className="space-y-4">
                {department.keyResponsibilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-amber-50/50 hover:border-amber-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Skills */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                Candidate Eligibility
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Required Qualifications & Skills
              </h3>

              <div className="space-y-4 mb-8">
                {department.qualifications.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Competency & Service Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {department.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CAREER ADVANCEMENT & BENEFITS
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-2.5">
              Candidate Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Career Growth & Expat Hospitality Perks
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Working overseas in world-renowned hotels offers exceptional savings, career prestige, and global mobility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {department.careerOpportunities.map((opp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-5 shadow-md">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    Perk Advantage {String(idx + 1).padStart(2, '0')}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {opp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. OTHER HOSPITALITY DEPARTMENTS (NAVIGATOR)
      ========================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-1">
              Explore More Hospitality
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Other Hospitality Departments
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherDepartments.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.id}
                  to={d.route}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${d.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="font-black text-lg text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {d.title}
                    </h4>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                      {d.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs group-hover:gap-3 transition-all pt-2 border-t border-slate-100">
                    Explore Department
                    <ArrowRight className="w-3.5 h-3.5" />
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
