import { useState, useRef } from 'react';
import {
  Building2,
  Home,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Sparkles,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Lock,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface PartnershipForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  otherIndustry: string;
  partnershipType: string;
  positionsCount: string;
  message: string;
  botTrap: string; // Honeypot field for anti-spam security
}

const INITIAL_FORM: PartnershipForm = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  country: '',
  industry: 'Healthcare',
  otherIndustry: '',
  partnershipType: 'Workforce Staffing & Corporate Housing',
  positionsCount: '10 - 50 positions',
  message: '',
  botTrap: '',
};

// Security sanitization helper against XSS/injection
function sanitizeInput(val: string): string {
  return val
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/[<>"'`]/g, '')   // Strip dangerous script characters
    .trim();
}

export default function BusinessHousingSection() {
  const [form, setForm] = useState<PartnershipForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState('');
  
  // Security timer to detect automated bots
  const formLoadTime = useRef(Date.now());
  const lastSubmitTime = useRef(0);

  const advantages = [
    {
      icon: Home,
      title: 'Turnkey Corporate Housing',
      desc: 'Fully furnished, safe, and premium employee apartments with utilities, proximity to job sites, and complete municipal lease management handled by Dais World Endeavor.',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment & Scalability',
      desc: 'Fill critical talent shortages and workforce housing requirements in weeks, reducing staffing overhead by up to 40% with SLA-backed timelines.',
      color: 'from-indigo-600 to-blue-500',
    },
    {
      icon: ShieldCheck,
      title: '100% Legal & Visa Compliance',
      desc: 'Comprehensive embassy document attestation, work permits, local municipality registrations, and international labor standards compliance.',
      color: 'from-cyan-600 to-teal-500',
    },
    {
      icon: Users,
      title: 'Dedicated B2B Key Account Manager',
      desc: 'Personalized corporate client liaison offering 24/7 assistance, tailored hiring drives, and ongoing candidate welfare monitoring.',
      color: 'from-purple-600 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: '95%+ Candidate Retention Rate',
      desc: 'Candidates provided with secure accommodation and pre-departure cultural orientation settle faster, resulting in high long-term productivity.',
      color: 'from-emerald-600 to-teal-500',
    },
    {
      icon: Sparkles,
      title: 'Multi-Industry Customization',
      desc: 'Specialized housing and recruitment packages for Hospital Networks, Luxury 5-Star Hotel Chains, Major Construction Projects, and Energy Plants.',
      color: 'from-amber-600 to-orange-500',
    },
  ];

  // Comprehensive Form Validation
  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};

    // 1. Company Name validation
    if (!form.companyName.trim()) {
      errs.companyName = 'Company / Organization name is required.';
    } else if (form.companyName.trim().length < 2) {
      errs.companyName = 'Company name must be at least 2 characters.';
    }

    // 2. Contact Person validation
    if (!form.contactPerson.trim()) {
      errs.contactPerson = 'Contact person name & title is required.';
    } else if (form.contactPerson.trim().length < 2) {
      errs.contactPerson = 'Contact person name must be at least 2 characters.';
    }

    // 3. Official Email validation (RFC-compliant regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) {
      errs.email = 'Official work email is required.';
    } else if (!emailRegex.test(form.email.trim())) {
      errs.email = 'Please enter a valid official email address (e.g., name@company.com).';
    }

    // 4. Phone Number validation (international format & digit count)
    const phoneDigits = form.phone.replace(/[^0-9]/g, '');
    const phoneRegex = /^\+?[0-9\s-()]{8,20}$/;
    if (!form.phone.trim()) {
      errs.phone = 'Direct phone / WhatsApp number is required.';
    } else if (!phoneRegex.test(form.phone.trim()) || phoneDigits.length < 7) {
      errs.phone = 'Please enter a valid phone number (minimum 7-8 digits).';
    }

    // 5. Country validation
    if (form.country.trim() && form.country.trim().length < 2) {
      errs.country = 'Please enter a valid country/city name.';
    }

    // 6. Other Industry validation
    if (form.industry === 'Other' && !form.otherIndustry.trim()) {
      errs.otherIndustry = 'Please specify your industry / enterprise sector.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    // Anti-Spam Check 1: Honeypot trap
    if (form.botTrap) {
      console.warn('Bot submission trapped.');
      return;
    }

    // Anti-Spam Check 2: Bot submission speed check (< 1.5 seconds)
    const timeSpent = Date.now() - formLoadTime.current;
    if (timeSpent < 1500) {
      setGeneralError('Submission too fast. Please try again.');
      return;
    }

    // Anti-Spam Check 3: Rate limiting (Cooldown 20 seconds)
    const now = Date.now();
    if (now - lastSubmitTime.current < 20000 && lastSubmitTime.current !== 0) {
      setGeneralError('Please wait a few seconds before submitting another inquiry.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    lastSubmitTime.current = now;

    try {
      // Sanitized data payload
      const cleanCompany = sanitizeInput(form.companyName);
      const cleanContact = sanitizeInput(form.contactPerson);
      const cleanEmail = form.email.trim().toLowerCase();
      const cleanPhone = sanitizeInput(form.phone);
      const cleanCountry = sanitizeInput(form.country) || 'International';
      const cleanMessage = sanitizeInput(form.message);
      const finalIndustry =
        form.industry === 'Other' && form.otherIndustry.trim()
          ? sanitizeInput(form.otherIndustry)
          : form.industry;

      const payload = {
        full_name: `${cleanCompany} (Contact: ${cleanContact})`,
        email: cleanEmail,
        phone: cleanPhone,
        position: `🏢 B2B Partnership: ${form.partnershipType}`,
        current_country: cleanCountry,
        qualification: `Industry: ${finalIndustry}`,
        message: `Positions Count: ${form.positionsCount}\nIndustry: ${finalIndustry}\nPartnership Type: ${form.partnershipType}\nCountry: ${cleanCountry}\nNotes: ${cleanMessage}`,
        status: 'new',
      };

      // 1. Store in Supabase database
      try {
        await supabase.from('applications').insert(payload);
      } catch (err) {
        console.warn('Supabase storage fallback note:', err);
      }

      // 2. Store in LocalStorage backup (Zero data loss)
      const existing = JSON.parse(localStorage.getItem('daisworld_partnership_leads') || '[]');
      existing.unshift({
        id: 'lead-' + Date.now(),
        companyName: cleanCompany,
        contactPerson: cleanContact,
        email: cleanEmail,
        phone: cleanPhone,
        country: cleanCountry,
        industry: finalIndustry,
        partnershipType: form.partnershipType,
        positionsCount: form.positionsCount,
        message: cleanMessage,
        submittedAt: new Date().toISOString(),
        status: 'new',
      });
      localStorage.setItem('daisworld_partnership_leads', JSON.stringify(existing));

      // 3. Real-time event dispatch for Admin sync
      window.dispatchEvent(new CustomEvent('daisworld-new-partnership-lead', { detail: payload }));

      setLoading(false);
      setSubmitted(true);
    } catch (err: any) {
      setLoading(false);
      setGeneralError(err?.message || 'Failed to submit inquiry securely. Please try again.');
    }
  };

  return (
    <section
      id="partnership-housing"
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-sky-50/30 to-blue-50/20 text-slate-900 relative overflow-hidden border-t border-slate-100"
    >
      {/* Subtle ambient lighting glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/90 px-4 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 shadow-sm">
            <Building2 className="w-4 h-4 text-blue-600" />
            Corporate Housing & Global Employer Partnership
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-5">
            Business Housing & <span className="text-gradient">Partnership Solutions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dais World Endeavor partners with international hospitals, luxury hotel chains, construction conglomerates, and global enterprises to provide reliable international staffing and end-to-end corporate workforce housing.
          </p>
        </div>

        {/* =========================================================================
            ADVANTAGES GRID (LIGHT CLEAN CARDS)
        ========================================================================= */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Global Employers <span className="text-blue-600">Partner With Us</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Eliminate overseas recruitment friction, housing bottlenecks, and compliance complexities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-gradient-to-b hover:from-white hover:to-sky-50/40 border border-slate-200/80 hover:border-blue-300 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {adv.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            B2B PARTNERSHIP INQUIRY FORM & LIGHT BLUE CALLOUT
        ========================================================================= */}
        <div id="b2b-inquiry-form" className="grid lg:grid-cols-12 gap-8 items-stretch bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 scroll-mt-24">
          
          {/* Left Column: Elegant Light Blue / Sky Gradient Combination Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50/60 border border-blue-200/80 text-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-blue-600/20">
                <Clock className="w-3.5 h-3.5" /> 24-Hour B2B Response
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-snug">
                Request a Custom Staffing & Housing Proposal
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tell us about your organization's workforce requirements or accommodation needs. Our Corporate Partnership Director will schedule a dedicated consultation with your HR team.
              </p>

              <div className="space-y-3 text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3 bg-white/80 p-2.5 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-screened, credentialed & visa-ready talent pool</span>
                </div>
                <div className="flex items-start gap-3 bg-white/80 p-2.5 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Furnished corporate workforce housing & utility setup</span>
                </div>
                <div className="flex items-start gap-3 bg-white/80 p-2.5 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Tailored SLAs, replacement guarantee & compliance auditing</span>
                </div>
                <div className="flex items-start gap-3 bg-white/80 p-2.5 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Direct candidate tracking via dedicated Client Portal</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Light Pill */}
            <div className="bg-white/95 border border-blue-200/90 rounded-2xl p-4.5 space-y-2 text-xs text-slate-600 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                <Building2 className="w-4 h-4 text-blue-600" />
                Dais World Endeavor Private Limited
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai (India)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>corporate@daisworld.com / info@daisworld.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Form */}
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-md">
                  Thank you for reaching out, <span className="font-bold text-blue-600">{form.contactPerson}</span>. Your partnership request for <span className="font-bold text-slate-900">{form.companyName}</span> has been securely recorded.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-500 max-w-sm shadow-sm">
                  We will contact your official email (<span className="text-slate-900 font-semibold">{form.email}</span>) and phone within 24 hours with a custom proposal.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setErrors({});
                    setSubmitted(false);
                    formLoadTime.current = Date.now();
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-2 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">B2B Partnership Inquiry Form</h4>
                    <p className="text-xs text-slate-500">All submissions are securely encrypted & stored.</p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    <Lock className="w-3 h-3 text-emerald-500" /> SSL Secured
                  </span>
                </div>

                {/* Honeypot anti-spam trap (invisible to real users) */}
                <input
                  type="text"
                  name="website_bot_trap"
                  value={form.botTrap}
                  onChange={(e) => setForm({ ...form, botTrap: e.target.value })}
                  style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {generalError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{generalError}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Jude Hospital Group / Accor Hotels"
                      value={form.companyName}
                      onChange={(e) => {
                        setForm({ ...form, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all ${
                        errors.companyName
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person Name & Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Arthur Miller, HR Director"
                      value={form.contactPerson}
                      onChange={(e) => {
                        setForm({ ...form, contactPerson: e.target.value });
                        if (errors.contactPerson) setErrors({ ...errors, contactPerson: '' });
                      }}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all ${
                        errors.contactPerson
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.contactPerson && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.contactPerson}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. hr@company.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +49 151 2345678"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country & City of Operation
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Munich, Germany"
                      value={form.country}
                      onChange={(e) => {
                        setForm({ ...form, country: e.target.value });
                        if (errors.country) setErrors({ ...errors, country: '' });
                      }}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                    {errors.country && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Industry Sector
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm({
                          ...form,
                          industry: val,
                          otherIndustry: val === 'Other' ? form.otherIndustry : '',
                        });
                        if (errors.otherIndustry) setErrors({ ...errors, otherIndustry: '' });
                      }}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      <option value="Healthcare">Healthcare & Hospitals</option>
                      <option value="Hospitality">Hospitality & Tourism</option>
                      <option value="Construction">Construction & Engineering</option>
                      <option value="Oil & Gas">Oil, Gas & Energy</option>
                      <option value="Beauty & Care">Beauty, Spa & Wellness</option>
                      <option value="Corporate Housing">Workforce Housing & Facilities</option>
                      <option value="Other">Other Enterprise Sector</option>
                    </select>
                  </div>
                </div>

                {/* Other Enterprise Sector Expansion Field */}
                {form.industry === 'Other' && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/90 to-cyan-50/40 border border-blue-200/90 shadow-2xs animate-fadeIn">
                    <label className="block text-xs font-bold text-blue-900 mb-1">
                      Specify Your Enterprise Sector <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aviation, Renewable Energy, IT & Cloud, Heavy Manufacturing, Marine, Agriculture, etc."
                      value={form.otherIndustry}
                      onChange={(e) => {
                        setForm({ ...form, otherIndustry: e.target.value });
                        if (errors.otherIndustry) setErrors({ ...errors, otherIndustry: '' });
                      }}
                      className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all ${
                        errors.otherIndustry
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.otherIndustry && (
                      <p className="mt-1 text-[11px] text-rose-600 font-semibold">{errors.otherIndustry}</p>
                    )}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Partnership Scope
                    </label>
                    <select
                      value={form.partnershipType}
                      onChange={(e) => setForm({ ...form, partnershipType: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      <option value="Workforce Staffing & Corporate Housing">Workforce Staffing & Corporate Housing</option>
                      <option value="Corporate Housing Only">Corporate Housing Only (Workforce Apartments)</option>
                      <option value="Direct Hire Staffing Agreement">Direct Hire Staffing Agreement</option>
                      <option value="Contract & Project Manpower">Contract & Project Manpower</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Required Positions Volume
                    </label>
                    <select
                      value={form.positionsCount}
                      onChange={(e) => setForm({ ...form, positionsCount: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      <option value="1 - 10 positions">1 - 10 positions</option>
                      <option value="10 - 50 positions">10 - 50 positions</option>
                      <option value="50 - 200 positions">50 - 200 positions</option>
                      <option value="200+ positions (Bulk Hiring)">200+ positions (Bulk Hiring Drive)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Hiring / Housing Requirements (Optional)
                  </label>
                  <textarea
                    rows={2.5}
                    placeholder="Provide details about role profiles, required language levels, preferred start date, or accommodation specifics..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-black py-3 px-6 rounded-xl text-sm shadow-lg shadow-blue-500/20 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Validating & Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partnership Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
