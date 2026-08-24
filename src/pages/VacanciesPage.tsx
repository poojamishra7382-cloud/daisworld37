import { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Clock,
  Sparkles,
  Plane,
  FileText,
  Languages,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Users,
  Search,
  Filter,
  Check,
  Building,
  HeartHandshake,
  MessageCircle,
} from 'lucide-react';
import { vacancies, Vacancy } from '@/data/vacancies';
import Flag from '@/components/Flag';

const categories = [
  'All Vacancies',
  'Healthcare',
  'Hospitality',
  'Construction',
  'Oil & Gas',
  'Beauty & Care',
];

const regions = ['All Regions', 'West Europe', 'Middle East'];

export default function VacanciesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Vacancies');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  // Filtered vacancies
  const filteredVacancies = vacancies.filter((v) => {
    const matchCategory =
      selectedCategory === 'All Vacancies' || v.category === selectedCategory;
    const matchRegion =
      selectedRegion === 'All Regions' ||
      v.region === selectedRegion ||
      (selectedRegion === 'West Europe' && v.region === 'West Europe');
    const matchQuery =
      searchQuery.trim() === '' ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.qualification.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchRegion && matchQuery;
  });

  const openApplyModal = (vacancyTitle?: string) => {
    window.dispatchEvent(
      new CustomEvent('open-apply-modal', {
        detail: {
          profession: vacancyTitle || 'Registered Nurse',
        },
      })
    );
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (ATTRACTIVE CONTENT-ONLY)
      ========================================================================== */}
      <section className="relative overflow-hidden bg-[#050e1f] text-white pt-28 sm:pt-32 pb-16 md:pb-20">
        {/* Ambient Glows & Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Live Hiring Pulse Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-md text-cyan-300 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Live International Recruitment Drive · 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Explore Global Career <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Vacancies & Openings
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-5 leading-relaxed max-w-2xl mx-auto font-normal">
            Connecting qualified healthcare, hospitality, and engineering professionals with verified employers across the Netherlands, West Europe, and the Middle East with 100% visa sponsorship and direct placements.
          </p>

          {/* 3 Quick Value Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white font-semibold shadow-sm">
              <Flag code="nl" className="w-4 h-3 rounded shadow-xs" />
              <span>Netherlands Healthcare Drive</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-cyan-300 font-semibold shadow-sm">
              <Plane className="w-4 h-4" />
              <span>100% Visa & Air Ticket Provided</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-emerald-300 font-semibold shadow-sm">
              <Languages className="w-4 h-4" />
              <span>B1 Dutch Language Training</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#featured-west-europe"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-900/40 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>View Netherlands Drive ↓</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => openApplyModal('Overseas Vacancies Drive')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
            >
              <span>Apply for Vacancies</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED DRIVE BANNER (OFFICIAL POSTER SPOTLIGHT: NURSES IN NETHERLANDS)
          LIGHT BLUE THEME
      ========================================================================== */}
      <section id="featured-west-europe" className="py-12 md:py-16 bg-gradient-to-b from-blue-100/70 via-sky-100/50 to-blue-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Spotlight Card Container - Visible Light Blue Theme */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100/95 via-sky-100/80 to-indigo-100/90 border-2 border-blue-300 shadow-xl shadow-blue-200/60 text-slate-900">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="p-6 sm:p-8 lg:p-12 relative z-10">
              {/* Header Badge & Title */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-blue-200/90 pb-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                    <span>CURRENTLY HIRING · NETHERLANDS (WEST EUROPE)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Flag code="nl" className="w-9 h-6.5 rounded shadow-md flex-shrink-0" />
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      WE ARE HIRING NURSES IN NETHERLANDS
                    </h2>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed font-medium">
                    Build Your Career, Change Lives. Work in the Netherlands (West Europe) with Excellent Salaries, Complete Dutch Language Training & Great Career Opportunities!
                  </p>
                </div>

                <div className="flex-shrink-0 bg-white/95 shadow-md rounded-2xl p-4 border border-blue-200 text-center lg:text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Contract Duration</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">2 Years | 2 Years | 1 Year</p>
                  <p className="text-[11px] text-slate-600 font-medium">Renewable with Netherlands PR Pathway</p>
                </div>
              </div>

              {/* Requirement & Salary Cards (3 Columns matching poster) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {/* 1. Operation Room Nurses */}
                <div className="bg-white/95 hover:bg-white rounded-2xl p-5 border-2 border-blue-200/90 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                        20 OPENINGS
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-blue-700 font-bold">
                        <Flag code="nl" className="w-4 h-3 rounded shadow-xs" /> Netherlands
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      20 Operation Room (OT) Nurses
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      Surgical and OT procedures in premier hospital chains in Netherlands. Experience: 1+ yrs in OT.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Monthly Salary</p>
                    <p className="text-2xl font-black text-blue-700 mt-0.5">€3,900 – €5,500</p>
                    <p className="text-[11px] text-slate-500 font-medium">approx ₹3.5 Lakh – ₹5.0 Lakh / month</p>

                    <button
                      onClick={() => openApplyModal('Operation Room (OT) Nurse - Netherlands')}
                      className="w-full mt-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      Apply for OT Nurse (Netherlands)
                    </button>
                  </div>
                </div>

                {/* 2. Healthcare Assistants */}
                <div className="bg-white/95 hover:bg-white rounded-2xl p-5 border-2 border-emerald-200/90 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                        30 OPENINGS
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-bold">
                        <Flag code="nl" className="w-4 h-3 rounded shadow-xs" /> Netherlands
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      30 Healthcare Assistants
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      Eldercare & rehabilitative support across Dutch care centers. Freshers & experienced welcome.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Monthly Salary</p>
                    <p className="text-2xl font-black text-emerald-700 mt-0.5">€2,450 – €3,200</p>
                    <p className="text-[11px] text-slate-500 font-medium">approx ₹2.2 Lakh – ₹2.9 Lakh / month</p>

                    <button
                      onClick={() => openApplyModal('Healthcare Assistant - Netherlands')}
                      className="w-full mt-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      Apply for Healthcare Assistant
                    </button>
                  </div>
                </div>

                {/* 3. Registered Nurses */}
                <div className="bg-white/95 hover:bg-white rounded-2xl p-5 border-2 border-sky-200/90 hover:border-sky-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold text-xs">
                        20 OPENINGS
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-sky-700 font-bold">
                        <Flag code="nl" className="w-4 h-3 rounded shadow-xs" /> Netherlands
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-sky-100/80 flex items-center justify-center text-sky-700 mb-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      20 Registered Staff Nurses
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      Inpatient wards, emergency & general nursing across healthcare networks in Netherlands.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Monthly Salary</p>
                    <p className="text-2xl font-black text-sky-700 mt-0.5">€3,200 – €3,775</p>
                    <p className="text-[11px] text-slate-500 font-medium">approx ₹2.85 Lakh – ₹3.4 Lakh / month</p>

                    <button
                      onClick={() => openApplyModal('Registered Staff Nurse - Netherlands')}
                      className="w-full mt-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      Apply for Staff Nurse (Netherlands)
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Key Pillar Offerings Grid (From Official Poster) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/90 border-2 border-blue-200/80 shadow-sm">
                {/* 1. Dutch Language Training */}
                <div className="p-3">
                  <div className="flex items-center gap-2.5 text-blue-700 mb-2">
                    <Languages className="w-5 h-5 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-slate-900">Dutch Language Training</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Complete Dutch Language Training provided up to B1 Level.
                  </p>
                  <span className="inline-block mt-2 text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold border border-blue-200">
                    Duration: 4 to 6 Months
                  </span>
                </div>

                {/* 2. Employment Contract */}
                <div className="p-3">
                  <div className="flex items-center gap-2.5 text-indigo-700 mb-2">
                    <FileText className="w-5 h-5 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-slate-900">Employment Contract</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Long-term contract divided into three parts:
                  </p>
                  <span className="inline-block mt-2 text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold border border-indigo-200">
                    2 Years | 2 Years | 1 Year
                  </span>
                </div>

                {/* 3. Visa & Air Ticket */}
                <div className="p-3">
                  <div className="flex items-center gap-2.5 text-emerald-700 mb-2">
                    <Plane className="w-5 h-5 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-slate-900">Visa & Air Ticket</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    100% Work Visa processing & Air Ticket provided by the company.
                  </p>
                  <span className="inline-block mt-2 text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                    100% Company Sponsored
                  </span>
                </div>

                {/* 4. Why Choose Us? */}
                <div className="p-3">
                  <div className="flex items-center gap-2.5 text-amber-700 mb-2">
                    <Award className="w-5 h-5 flex-shrink-0" />
                    <h4 className="font-bold text-sm text-slate-900">Why Choose Us?</h4>
                  </div>
                  <ul className="text-xs text-slate-700 font-medium space-y-1">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 font-bold" />
                      <span>Attractive Salary Packages</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 font-bold" />
                      <span>Safe & Supportive Environment</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 font-bold" />
                      <span>Work-Life Balance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="mt-8 pt-6 border-t border-blue-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Direct Recruiter Helpline</p>
                    <p className="text-base font-black text-slate-900">+91 89766 97001 / +91 87886 31659</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/918976697001?text=Hi%2C%20I%20want%20to%20apply%20for%20the%20Netherlands%20Nursing%20Drive."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us Directly</span>
                  </a>

                  <button
                    onClick={() => openApplyModal('Netherlands Nursing Drive')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Instant Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTERABLE ALL ACTIVE VACANCIES SECTION
      ========================================================================== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Explore All Opportunities
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Active International Job Openings
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Showing {filteredVacancies.length} positions currently accepting candidate profiles
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search job title, skill, country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100 mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Industry:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
              >
                {category}
              </button>
            ))}

            <div className="hidden sm:block h-4 w-px bg-slate-200 mx-2" />

            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              Region:
            </span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedRegion === region
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Vacancies Grid */}
          {filteredVacancies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Category + Country Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                        {vacancy.category}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Flag code={vacancy.countryCode} className="w-4 h-3 rounded shadow-xs" />
                        <span className="truncate max-w-[120px]">{vacancy.country}</span>
                      </div>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {vacancy.title}
                    </h3>

                    {/* Openings Pill & Urgency */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {vacancy.positions}
                      </span>
                      {vacancy.isUrgent && (
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">
                          Urgent Hiring
                        </span>
                      )}
                    </div>

                    {/* Quick Specs */}
                    <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="truncate">{vacancy.qualification}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="truncate">{vacancy.experience}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Languages className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="truncate">{vacancy.languageReq}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Salary & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase">Package</p>
                      <p className="text-sm sm:text-base font-bold text-blue-700">{vacancy.salary}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{vacancy.salaryInr}</p>
                    </div>

                    <button
                      onClick={() => openApplyModal(vacancy.title)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-700">No active vacancies found</p>
              <p className="text-xs text-slate-400 mt-1">Try resetting the category filter or searching a different term.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Vacancies');
                  setSelectedRegion('All Regions');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          HIRING WORKFLOW / HOW IT WORKS - DISTINCT LIGHT BLUE THEME
      ========================================================================== */}
      <section className="py-14 bg-gradient-to-b from-blue-100/60 via-sky-50 to-blue-100/50 text-slate-900 relative border-t-2 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-700 font-extrabold text-xs uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-xs border border-blue-200">
              Step-by-Step Pathway
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3">
              How Our Placement Process Works
            </h2>
            <p className="text-slate-600 font-medium text-xs sm:text-sm mt-2">
              From application to flight boarding — we guide you through every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white border-2 border-blue-200/80 shadow-md hover:shadow-lg hover:border-blue-500 transition-all relative">
              <span className="text-3xl font-black text-blue-600">01</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Profile & Eligibility Check</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                Submit your CV & certificates. Our recruitment counselors verify your overseas eligibility within 24 hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-cyan-200/80 shadow-md hover:shadow-lg hover:border-cyan-500 transition-all relative">
              <span className="text-3xl font-black text-cyan-600">02</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Language & Skill Training</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                Structured Dutch/German language training (A1 to B1) conducted by native certified trainers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200/80 shadow-md hover:shadow-lg hover:border-emerald-500 transition-all relative">
              <span className="text-3xl font-black text-emerald-600">03</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Employer Interview & Offer</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                Direct interviews with hospital/employer delegates and release of official European employment contract.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-amber-200/80 shadow-md hover:shadow-lg hover:border-amber-500 transition-all relative">
              <span className="text-3xl font-black text-amber-500">04</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Visa, Flight & Settlement</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                100% visa stamping, free air ticket, airport pickup, and dedicated accommodation on arrival.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
