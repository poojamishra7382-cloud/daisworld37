import { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  Loader2,
  CheckCircle,
  Upload,
  FileText,
  Calendar,
  Phone,
  Mail,
  User,
  MapPin,
  Flag,
  Briefcase,
  GraduationCap,
  FileCheck,
  MessageSquare,
  Share2,
  Check,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ApplyNowModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  position: string;
  experience: string;
  qualification: string;
  currentCountry: string;
  nationality: string;
  dateOfBirth: string;
  hasPassport: boolean | null;
  passportNumber: string;
  resume: File | null;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface CountryDialCode {
  name: string;
  code: string;
  flag: string;
}

const COUNTRY_DIAL_CODES: CountryDialCode[] = [
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Other', code: '+', flag: '🌐' },
];

const POSITIONS = [
  'Specialist Doctor / General Physician',
  'Ayurvedic Doctor (BAMS / MD Ayurveda)',
  'Certified Yoga Instructor / Yoga Therapist',
  'Panchakarma Therapist',
  'Registered Nurse (RN)',
  'ICU / Critical Care Nurse',
  'Operation Theatre (OT) Nurse',
  'Dietitian & Clinical Nutritionist',
  'Phlebotomist (Blood Collection Specialist)',
  'Medical Laboratory Technician (MLT)',
  'Radiology & Imaging Technologist',
  'Physiotherapist (BPT / MPT)',
  'Pharmacist / Pharmacy Assistant',
  'Healthcare Assistant / Caregiver',
  'Hospitality Staff / Chef / F&B',
  'Construction Worker / Technician',
  'Oil & Gas Professional',
  'Beauty & Care / Spa Specialist',
  'Other',
];

const QUALIFICATIONS = [
  'MBBS / MD / MS / Medical Degree',
  'BAMS / MD Ayurveda',
  'Degree / Diploma / Certified Yoga Instructor (YCB / QCI / AYUSH)',
  'Diploma / Certificate in Panchakarma / Ayurveda Therapy',
  'BSc Nursing / MSc Nursing',
  'GNM (General Nursing & Midwifery)',
  'BSc / MSc Nutrition & Dietetics',
  'Diploma / Certificate in Phlebotomy',
  'DMLT / BMLT (Medical Laboratory)',
  'BPT / MPT (Physiotherapy)',
  'B.Pharm / M.Pharm / D.Pharm',
  'Diploma in Radiology / Medical Tech',
  'Hotel Management / Hospitality Degree',
  'Engineering / Technical Diploma',
  'Beauty Therapy / Cosmetology Diploma',
  'Other',
];

const EMAIL_DOMAINS = [
  '@gmail.com',
  '@outlook.com',
  '@yahoo.com',
  '@hotmail.com',
  '@icloud.com',
];

const EMPTY: FormData = {
  fullName: '',
  email: '',
  countryCode: '+91',
  phone: '',
  position: '',
  experience: '',
  qualification: '',
  currentCountry: '',
  nationality: '',
  dateOfBirth: '',
  hasPassport: null,
  passportNumber: '',
  resume: null,
  message: '',
};

const MAX_RESUME_SIZE = 2 * 1024 * 1024;

const VALID_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const VALID_RESUME_EXTS = ['.pdf', '.doc', '.docx'];

/*
 * Browser-based 24-hour lock
 */
const APPLICATION_LOCK_KEY = 'daisworld_apply_lock';
const APPLICATION_LOCK_DURATION = 24 * 60 * 60 * 1000;

export default function ApplyNowModal({
  open,
  onClose,
}: ApplyNowModalProps) {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [submitError, setSubmitError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      let initialPos = '';
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const posParam =
          searchParams.get('position') ||
          searchParams.get('role') ||
          searchParams.get('pos');
        if (posParam) {
          const lower = posParam.toLowerCase().trim();
          const match = POSITIONS.find(
            (p) =>
              p.toLowerCase() === lower || p.toLowerCase().includes(lower)
          );
          initialPos = match || posParam;
        }
      } catch {
        // ignore
      }

      setData({
        ...EMPTY,
        position: initialPos,
      });
      setErrors({});
      setStatus('idle');
      setSubmitError('');
      setCopiedLink(false);
    }
  }, [open]);

  const handleCopyDirectLink = () => {
    const origin = window.location.origin;
    let url = `${origin}/apply`;
    if (data.position) {
      url += `?position=${encodeURIComponent(data.position)}`;
    }
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      })
      .catch(() => {
        try {
          const input = document.createElement('input');
          input.value = url;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        } catch {
          // ignore
        }
      });
  };

  const handleApplyDomain = (domain: string) => {
    const current = data.email.trim();
    if (!current) {
      update('email', domain);
      return;
    }
    const username = current.includes('@')
      ? current.split('@')[0]
      : current;
    update('email', username + domain);
  };

  const getEmailSuggestions = () => {
    const current = data.email.trim();
    if (!current) return [];
    const username = current.includes('@')
      ? current.split('@')[0]
      : current;
    if (!username) return [];
    return EMAIL_DOMAINS.map((domain) => username + domain);
  };

  useEffect(() => {
    if (errors._scrollTo && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [errors]);

  if (!open) return null;

  /*
   * Update form field
   */
  const update = (
    field: keyof FormData,
    value: string | boolean | null | File
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      delete next._scrollTo;
      return next;
    });

    if (submitError) {
      setSubmitError('');
    }
  };

  /*
   * Check browser-based 24-hour lock
   */
  const getApplicationLockRemaining = (): number => {
    try {
      const lockedAt = localStorage.getItem(APPLICATION_LOCK_KEY);
      if (!lockedAt) return 0;

      const timestamp = Number(lockedAt);
      if (!Number.isFinite(timestamp)) {
        localStorage.removeItem(APPLICATION_LOCK_KEY);
        return 0;
      }

      const elapsed = Date.now() - timestamp;
      if (elapsed >= APPLICATION_LOCK_DURATION) {
        localStorage.removeItem(APPLICATION_LOCK_KEY);
        return 0;
      }

      return APPLICATION_LOCK_DURATION - elapsed;
    } catch {
      return 0;
    }
  };

  const formatLockTime = (milliseconds: number): string => {
    const totalMinutes = Math.ceil(milliseconds / (60 * 1000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''}${
        minutes > 0 ? ` ${minutes} minute${minutes !== 1 ? 's' : ''}` : ''
      }`;
    }
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  };

  const setApplicationLock = () => {
    try {
      localStorage.setItem(APPLICATION_LOCK_KEY, Date.now().toString());
    } catch {
      // Ignore localStorage errors
    }
  };

  /*
   * FORM VALIDATION
   */
  const validate = (): boolean => {
    const e: FormErrors = {};

    /* Full Name */
    if (!data.fullName.trim()) {
      e.fullName = 'Please enter your full name.';
    }

    /* Email */
    if (!data.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())
    ) {
      e.email = 'Please enter a valid email address.';
    }

    /* Phone: Exactly 10 digits */
    if (!data.phone.trim()) {
      e.phone = 'Please enter your 10-digit phone number.';
    } else {
      const digits = data.phone.replace(/\D/g, '');
      if (digits.length !== 10) {
        e.phone = 'Phone number must be exactly 10 digits.';
      }
    }

    /* Position */
    if (!data.position) {
      e.position = 'Please select a position.';
    }

    /* Experience: 0 to 30 years */
    if (!data.experience && data.experience !== '0') {
      e.experience = 'Please enter your years of experience.';
    } else {
      const exp = Number(data.experience);
      if (isNaN(exp) || exp < 0 || exp > 30) {
        e.experience = 'Experience must be between 0 and 30 years.';
      }
    }

    /* Qualification */
    if (!data.qualification) {
      e.qualification = 'Please select your highest qualification.';
    }

    /* Current Country */
    if (!data.currentCountry.trim()) {
      e.currentCountry = 'Please enter your current country.';
    }

    /* Nationality */
    if (!data.nationality.trim()) {
      e.nationality = 'Please enter your nationality.';
    }

    /* Date of Birth: 10 - 50 years */
    if (!data.dateOfBirth) {
      e.dateOfBirth = 'Please select your date of birth.';
    } else {
      const dob = new Date(data.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 10 || age > 50) {
        e.dateOfBirth = 'Age must be between 10 and 50 years.';
      }
    }

    /* Passport */
    if (data.hasPassport === null) {
      e.hasPassport = 'Please select Yes or No.';
    } else if (data.hasPassport && !data.passportNumber.trim()) {
      e.passportNumber = 'Please enter your passport number.';
    }

    /* Resume */
    if (!data.resume) {
      e.resume = 'Please upload your resume.';
    } else {
      if (data.resume.size > MAX_RESUME_SIZE) {
        e.resume = 'Resume must be under 2MB.';
      } else {
        const ext =
          '.' +
          (data.resume.name.split('.').pop() || '').toLowerCase();
        const typeOk = VALID_RESUME_TYPES.includes(data.resume.type);
        const extOk = VALID_RESUME_EXTS.includes(ext);
        if (!typeOk && !extOk) {
          e.resume = 'Only PDF, DOC, or DOCX files are allowed.';
        }
      }
    }

    if (Object.keys(e).length > 0) {
      (e as FormErrors)._scrollTo = 'true';
    }

    setErrors(e);
    return Object.keys(e).filter((key) => key !== '_scrollTo').length === 0;
  };

  /*
   * Resume validation
   */
  const handleResumeChange = (file: File | null) => {
    if (file) {
      const ext =
        '.' + (file.name.split('.').pop() || '').toLowerCase();
      const typeOk = VALID_RESUME_TYPES.includes(file.type);
      const extOk = VALID_RESUME_EXTS.includes(ext);

      if (!typeOk && !extOk) {
        setErrors((prev) => ({
          ...prev,
          resume: 'Only PDF, DOC, or DOCX files are allowed.',
        }));
        return;
      }

      if (file.size > MAX_RESUME_SIZE) {
        setErrors((prev) => ({
          ...prev,
          resume: 'Resume must be under 2MB.',
        }));
        return;
      }
    }

    update('resume', file);
  };

  /*
   * SUBMIT APPLICATION
   */
  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    /* Step 1: Check 24h Lock */
    const remainingLock = getApplicationLockRemaining();
    if (remainingLock > 0) {
      setStatus('error');
      setSubmitError(
        `You have already submitted an application. Please try again after ${formatLockTime(
          remainingLock
        )}.`
      );
      return;
    }

    /* Step 2: Validate */
    if (!validate()) {
      return;
    }

    setStatus('loading');
    setSubmitError('');

    let resumeUrl: string | null = null;

    /* Step 3: Upload Resume */
    if (data.resume) {
      const safeName = data.fullName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-');
      const ts = Date.now();
      const safeFileName = data.resume.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filePath = `${safeName}-${ts}/${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, data.resume);

      if (uploadError) {
        setStatus('error');
        setSubmitError('Could not upload your resume. Please try again.');
        return;
      }

      resumeUrl = filePath;
    }

    /* Step 4: Insert record */
    const formattedPhone = `${data.countryCode} ${data.phone.trim()}`;

    const { error } = await supabase.from('applications').insert({
      full_name: data.fullName.trim(),
      email: data.email.trim(),
      phone: formattedPhone,
      position: data.position,
      experience_years: Number(data.experience),
      qualification: data.qualification,
      current_country: data.currentCountry.trim(),
      nationality: data.nationality.trim(),
      date_of_birth: data.dateOfBirth,
      has_passport: data.hasPassport,
      passport_number: data.hasPassport ? data.passportNumber.trim() : null,
      resume_url: resumeUrl,
      message: data.message.trim() || null,
    });

    if (error) {
      console.error('Application submission error:', error);
      setStatus('error');
      setSubmitError('Something went wrong. Please try again.');
      return;
    }

    /* Step 5: Success */
    setApplicationLock();
    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-[#050e1f]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl my-auto animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          {/* HEADER */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-5 sm:p-6 text-center text-white">
            {/* DIRECT SHARE/COPY LINK BUTTON */}
            <button
              type="button"
              onClick={handleCopyDirectLink}
              title="Copy direct Apply Now link to share"
              className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-emerald-100 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Link</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Apply Now
            </h2>
            <p className="text-white/90 text-xs sm:text-sm mt-1 max-w-md mx-auto">
              Fill in your details and our recruitment team will get back to you within 48 hours.
            </p>
          </div>

          {/* SUCCESS VIEW */}
          {status === 'success' ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="inline-flex w-16 h-16 bg-emerald-100 rounded-full items-center justify-center mb-4 text-emerald-600">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-slate-600 text-sm mb-4 max-w-md mx-auto">
                Thank you for applying with Daisworld. Our team will review your profile and contact you within 48 hours.
              </p>
              <p className="text-xs text-slate-400 mb-6">
                You can submit another application after 24 hours.
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-2xl transition-colors shadow-lg shadow-blue-500/25"
              >
                Close
              </button>
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto scrollbar-thin"
            >
              {/* ERROR MESSAGE */}
              {submitError && (
                <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl p-3.5 text-sm font-medium">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* SECTION 1: PERSONAL DETAILS */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      1. Personal Information
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {/* FULL NAME */}
                    <Field
                      label="Full Name"
                      icon={User}
                      error={errors.fullName}
                      required
                    >
                      <input
                        type="text"
                        value={data.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={inputCls(!!errors.fullName)}
                      />
                    </Field>

                    {/* EMAIL ADDRESS WITH DOMAIN AUTOCOMPLETE & CHIPS */}
                    <Field
                      label="Email Address"
                      icon={Mail}
                      error={errors.email}
                      required
                    >
                      <input
                        type="email"
                        list="email-domain-suggestions"
                        value={data.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="username@gmail.com"
                        className={inputCls(!!errors.email)}
                      />

                      {/* Browser suggestion dropdown list */}
                      <datalist id="email-domain-suggestions">
                        {getEmailSuggestions().map((suggestion) => (
                          <option key={suggestion} value={suggestion} />
                        ))}
                      </datalist>

                      {/* Quick Domain Clickable Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-[11px] font-semibold text-slate-400">
                          Select domain:
                        </span>
                        {EMAIL_DOMAINS.map((domain) => (
                          <button
                            key={domain}
                            type="button"
                            onClick={() => handleApplyDomain(domain)}
                            className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-slate-600 text-[11px] font-medium transition-colors cursor-pointer active:scale-95"
                          >
                            {domain}
                          </button>
                        ))}
                      </div>
                    </Field>

                    {/* SINGLE UNIFIED PHONE INPUT BOX + COMPACT DOB */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {/* SINGLE BOX PHONE WITH INTEGRATED COUNTRY SELECTOR */}
                      <Field
                        label="Phone Number"
                        icon={Phone}
                        error={errors.phone}
                        required
                      >
                        <div
                          className={`flex items-center w-full rounded-2xl border ${
                            errors.phone
                              ? 'border-rose-300 bg-rose-50/40 ring-1 ring-rose-200'
                              : 'border-slate-200 bg-white hover:border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100'
                          } transition-all overflow-hidden`}
                        >
                          {/* Country Code Picker integrated seamlessly */}
                          <div className="relative flex items-center bg-slate-50 border-r border-slate-200 hover:bg-slate-100 transition-colors">
                            <select
                              value={data.countryCode}
                              onChange={(e) =>
                                update('countryCode', e.target.value)
                              }
                              aria-label="Country Code"
                              className="appearance-none bg-transparent py-2.5 sm:py-3 pl-3 pr-6 text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer"
                            >
                              {COUNTRY_DIAL_CODES.map((c, i) => (
                                <option
                                  key={`${c.code}-${i}`}
                                  value={c.code}
                                >
                                  {c.flag} {c.code} ({c.name})
                                </option>
                              ))}
                            </select>
                            <span className="pointer-events-none absolute right-1.5 text-slate-400 text-[10px]">
                              ▼
                            </span>
                          </div>

                          {/* 10-digit number field in the same single box */}
                          <input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={data.phone}
                            onChange={(e) => {
                              const digits = e.target.value
                                .replace(/\D/g, '')
                                .slice(0, 10);
                              update('phone', digits);
                            }}
                            placeholder="10-digit mobile number"
                            className="flex-1 bg-transparent px-3 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Enter 10-digit number.
                        </p>
                      </Field>

                      {/* COMPACT DATE OF BIRTH (AGE 10 TO 50) */}
                      <Field
                        label="Date of Birth"
                        icon={Calendar}
                        error={errors.dateOfBirth}
                        required
                      >
                        <input
                          type="date"
                          value={data.dateOfBirth}
                          onChange={(e) => update('dateOfBirth', e.target.value)}
                          max={
                            new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 10
                              )
                            )
                              .toISOString()
                              .split('T')[0]
                          }
                          min={
                            new Date(
                              new Date().setFullYear(
                                new Date().getFullYear() - 50
                              )
                            )
                              .toISOString()
                              .split('T')[0]
                          }
                          className={inputCls(!!errors.dateOfBirth)}
                        />
                        <p className="text-[11px] text-slate-400 mt-1">
                          Age limit: 10 to 50 years.
                        </p>
                      </Field>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: PROFESSIONAL DETAILS */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      2. Professional Details
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {/* POSITION + YEARS OF EXPERIENCE (UP TO 30 YEARS) */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <Field
                        label="Position Applying For"
                        icon={Briefcase}
                        error={errors.position}
                        required
                      >
                        <select
                          value={data.position}
                          onChange={(e) => update('position', e.target.value)}
                          className={inputCls(!!errors.position)}
                        >
                          <option value="">Select a position</option>
                          {POSITIONS.map((position) => (
                            <option key={position} value={position}>
                              {position}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Years of Experience"
                        icon={Briefcase}
                        error={errors.experience}
                        required
                      >
                        <input
                          type="number"
                          min={0}
                          max={30}
                          value={data.experience}
                          onChange={(e) => update('experience', e.target.value)}
                          placeholder="e.g. 5"
                          className={inputCls(!!errors.experience)}
                        />
                      </Field>
                    </div>

                    {/* QUALIFICATION + CURRENT COUNTRY */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <Field
                        label="Highest Qualification"
                        icon={GraduationCap}
                        error={errors.qualification}
                        required
                      >
                        <select
                          value={data.qualification}
                          onChange={(e) => update('qualification', e.target.value)}
                          className={inputCls(!!errors.qualification)}
                        >
                          <option value="">Select qualification</option>
                          {QUALIFICATIONS.map((qualification) => (
                            <option key={qualification} value={qualification}>
                              {qualification}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Current Country"
                        icon={MapPin}
                        error={errors.currentCountry}
                        required
                      >
                        <input
                          type="text"
                          value={data.currentCountry}
                          onChange={(e) =>
                            update('currentCountry', e.target.value)
                          }
                          placeholder="e.g. India"
                          className={inputCls(!!errors.currentCountry)}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: NATIONALITY & PASSPORT */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      3. Nationality & Travel
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <Field
                      label="Nationality"
                      icon={Flag}
                      error={errors.nationality}
                      required
                    >
                      <input
                        type="text"
                        value={data.nationality}
                        onChange={(e) => update('nationality', e.target.value)}
                        placeholder="e.g. Indian"
                        className={inputCls(!!errors.nationality)}
                      />
                    </Field>

                    <Field
                      label="Valid Passport?"
                      icon={FileCheck}
                      error={errors.hasPassport}
                      required
                    >
                      <YesNo
                        value={data.hasPassport}
                        onChange={(value) => {
                          update('hasPassport', value);
                          if (!value) {
                            update('passportNumber', '');
                          }
                        }}
                      />
                    </Field>
                  </div>

                  {data.hasPassport && (
                    <div className="mt-3.5 animate-fadeInUp">
                      <Field
                        label="Passport Number"
                        icon={FileCheck}
                        error={errors.passportNumber}
                        required
                      >
                        <input
                          type="text"
                          value={data.passportNumber}
                          onChange={(e) =>
                            update('passportNumber', e.target.value)
                          }
                          placeholder="e.g. Z1234567"
                          className={inputCls(!!errors.passportNumber)}
                        />
                      </Field>
                    </div>
                  )}
                </div>

                {/* SECTION 4: RESUME & MESSAGE */}
                <div className="pt-2 border-t border-slate-100 space-y-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      4. Resume & Message
                    </h3>
                  </div>

                  <Field
                    label="Resume / CV Upload (PDF, DOC, DOCX - max 2MB)"
                    icon={Upload}
                    error={errors.resume}
                    required
                  >
                    <label className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/30 cursor-pointer transition-all">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Upload className="w-5 h-5" />
                      </div>

                      {data.resume ? (
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-slate-800 font-semibold truncate">
                            {data.resume.name}
                          </span>
                          <span className="text-xs text-slate-400">
                            ({(data.resume.size / 1024).toFixed(0)} KB)
                          </span>
                        </div>
                      ) : (
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-slate-700">
                            Click to upload your resume
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Accepted: PDF, DOC, DOCX (Max 2MB)
                          </p>
                        </div>
                      )}

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) =>
                          handleResumeChange(e.target.files?.[0] ?? null)
                        }
                      />
                    </label>
                  </Field>

                  <Field
                    label="Additional Message (optional)"
                    icon={MessageSquare}
                  >
                    <textarea
                      value={data.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={2}
                      placeholder="Any specific preferences or questions?"
                      className={inputCls(false) + ' resize-none'}
                    />
                  </Field>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base mt-2 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*
 * INPUT CLASS
 */
function inputCls(hasError: boolean) {
  return `w-full px-3.5 py-2.5 sm:py-3 rounded-2xl border ${
    hasError ? 'border-rose-300 bg-rose-50/50' : 'border-slate-200 bg-white'
  } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-xs sm:text-sm font-medium`;
}

/*
 * FIELD COMPONENT
 */
function Field({
  label,
  icon: Icon,
  error,
  required,
  children,
}: {
  label: string;
  icon: typeof Mail;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>{label}</span>
        {required && <span className="text-rose-500">*</span>}
      </label>

      {children}

      {error && (
        <p className="text-rose-600 text-xs font-medium mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

/*
 * YES / NO COMPONENT
 */
function YesNo({
  value,
  onChange,
}: {
  value: boolean | null;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
          value === true
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        Yes
      </button>

      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex-1 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
          value === false
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        No
      </button>
    </div>
  );
}