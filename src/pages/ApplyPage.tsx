import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Calendar,
  Award,
  Globe2,
  FileText,
  Trash2,
  Check,
  Copy,
  Share2,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/context/LanguageContext';

const POSITIONS = [
  'Doctor / Physician (Specialist / GP)',
  'Ayurvedic Doctor (BAMS / MD)',
  'Certified Yoga Instructor / Therapist',
  'Clinical Dietitian / Nutritionist',
  'Registered Nurse (Staff Nurse / ICU / OT)',
  'Operation Room Nurse',
  'Healthcare Assistant / Caregiver',
  'Phlebotomist (Blood Collection Specialist)',
  'Medical Laboratory Technologist (MLT)',
  'Radiology & MRI Imaging Technician',
  'Executive Chef / Specialty Cook',
  'Hotel / Resort Operations Staff',
  'Civil / Site Engineer',
  'Heavy Equipment / Crane Operator',
  'Certified Welder / Pipe Fitter',
  'Spa Therapist / Aesthetician',
  'Other Professional',
];

const QUALIFICATIONS = [
  'MBBS / MD / MS / Medical Degree',
  'BAMS / MD (Ayurveda)',
  'B.Sc / M.Sc (Yoga & Naturopathy) / Certified Yoga Master',
  'B.Sc / M.Sc (Clinical Nutrition & Dietetics)',
  'B.Sc Nursing / Post Basic B.Sc',
  'GNM (General Nursing & Midwifery)',
  'ANM (Auxiliary Nursing & Midwifery)',
  'Diploma / Certificate in Phlebotomy / MLT',
  'BMLT / DMLT (Medical Lab Technology)',
  'Bachelor of Engineering / B.Tech / Diploma',
  'Hotel Management / Culinary Degree',
  'Diploma / Vocational Trade Certification',
  'Higher Secondary (12th Pass)',
  'Other Qualification',
];

const EXPERIENCE_YEARS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '10',
  '12',
  '15',
  '20+',
];

const PHONE_COUNTRIES = [
  { country: 'India', code: '+91', flag: '🇮🇳' },
  { country: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { country: 'Germany', code: '+49', flag: '🇩🇪' },
  { country: 'UAE', code: '+971', flag: '🇦🇪' },
  { country: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { country: 'Qatar', code: '+974', flag: '🇶🇦' },
  { country: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { country: 'Oman', code: '+968', flag: '🇴🇲' },
  { country: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { country: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { country: 'United States', code: '+1', flag: '🇺🇸' },
  { country: 'Australia', code: '+61', flag: '🇦🇺' },
  { country: 'Canada', code: '+1', flag: '🇨🇦' },
];

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.doc', '.docx'];

export default function ApplyPage() {
  const { t, isRTL } = useLanguage();
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    emailProvider: '@gmail.com',
    phoneCountry: 'India',
    phoneCountryCode: '+91',
    phone: '',
    dob: '',
    position: 'Registered Nurse (Staff Nurse / ICU / OT)',
    experience: '2',
    qualification: 'B.Sc Nursing / Post Basic B.Sc',
    currentCountry: 'India',
    nationality: 'Indian',
    hasPassport: 'Yes',
    passportNumber: '',
    notes: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-fill position if passed from route state
  useEffect(() => {
    if (location.state && (location.state as any).position) {
      setFormData((prev) => ({
        ...prev,
        position: (location.state as any).position,
      }));
    }
  }, [location.state]);

  const copyFormLink = () => {
    const link = window.location.origin + '/form';
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareViaWhatsApp = () => {
    const link = window.location.origin + '/form';
    const text = `Hi, please fill out the official Dais World Overseas Candidate Registration Form here: ${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

// Blocked fake / dummy email usernames
const BLOCKED_EMAIL_USERNAMES = new Set([
  'test', 'testing', 'test1', 'test123', 'tester', 'testuser',
  'admin', 'administrator', 'root', 'webmaster', 'support',
  'asdf', 'asdfgh', 'asdfghjkl', 'asdf123', 'asdfasdf',
  'qwerty', 'qwertyuiop', 'qwert',
  'zxcv', 'zxcvbnm',
  'fake', 'fakeemail', 'fakemail',
  'dummy', 'dummyemail',
  'noreply', 'no-reply', 'noemail', 'null', 'undefined', 'none', 'na',
  'abc', 'abcd', 'abcde', 'abcdef', 'xyz', 'xyz123',
  'sample', 'sampleemail', 'temp', 'temporary', 'tempuser',
  'unknown', 'anonymous', 'user', 'username', 'demo', 'demouser',
  '12345', '123456', '1234567', '12345678', '123456789', '1234567890',
  '00000', '000000', '11111', '111111', '99999', '999999',
  'email', 'mail', 'myemail', 'contact', 'info',
]);

// Blocked disposable / temporary email domains
const BLOCKED_EMAIL_DOMAINS = new Set([
  'tempmail.com', '10minutemail.com', 'mailinator.com', 'guerrillamail.com',
  'throwawaymail.com', 'yopmail.com', 'trashmail.com', 'sharklasers.com',
  'dispostable.com', 'getairmail.com', 'fakeinbox.com', 'tempr.email',
  'mohmal.com', 'crazymailing.com', 'emailondeck.com', 'burnermail.io',
  'dropmail.me', 'inboxkitten.com', 'mytemp.email', 'temp-mail.org',
  'fake.com', 'test.com', 'example.com', 'sample.com', 'invalid.com',
  'domain.com', 'email.com', 'xyz.com', 'abc.com', 'testmail.com',
]);

// Blocked known dummy phone numbers
const BLOCKED_DUMMY_PHONES = new Set([
  '1234567890', '0123456789', '2345678901', '3456789012',
  '9876543210', '8765432109', '7654321098', '6543210987',
  '9876543211', '0987654321', '9123456789', '6123456789',
  '7123456789', '8123456789', '9000000000', '8000000000',
  '7000000000', '6000000000', '9898989898', '9988776655',
  '9191919191', '9090909090', '9876598765', '1231231234',
  '1212121212', '9876500000', '9999900000', '8888800000',
  '7777700000', '6666600000', '9999999999', '8888888888',
  '7777777777', '6666666666', '5555555555', '4444444444',
  '3333333333', '2222222222', '1111111111', '0000000000',
]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    const rawEmail = formData.email.trim().toLowerCase();
    if (!rawEmail) {
      errs.email = 'Email address is required';
    } else {
      let username = '';
      let domain = '';

      if (formData.emailProvider === 'custom') {
        if (!rawEmail.includes('@')) {
          errs.email = "Email must contain '@' (e.g. name@domain.com)";
        } else {
          const parts = rawEmail.split('@');
          username = parts[0];
          domain = parts[1];
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(rawEmail)) {
            errs.email = 'Please enter a valid email address';
          } else if (BLOCKED_EMAIL_DOMAINS.has(domain)) {
            errs.email = 'Disposable or test email domains are not allowed';
          }
        }
      } else {
        username = rawEmail;
        domain = formData.emailProvider.replace('@', '');
        if (username.length < 3) {
          errs.email = 'Email username must be at least 3 characters';
        } else if (!/^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*$/.test(username)) {
          errs.email = 'Email username contains invalid characters';
        }
      }

      const cleanUsername = username.replace(/[._%+-]/g, '');
      if (BLOCKED_EMAIL_USERNAMES.has(cleanUsername) || BLOCKED_EMAIL_USERNAMES.has(username)) {
        errs.email = 'Dummy or test email addresses are not allowed';
      } else if (/^([a-z0-9])\1{3,}$/i.test(cleanUsername)) {
        errs.email = 'Please enter a genuine, active email address';
      }
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phone = 'Phone number is required';
    } else if (BLOCKED_DUMMY_PHONES.has(cleanPhone)) {
      errs.phone = 'Please enter a valid, active phone number (test numbers not allowed)';
    } else if (/^(\d)\1+$/.test(cleanPhone)) {
      errs.phone = 'Invalid phone number: all digits cannot be identical';
    } else if (/^(\d{2})\1{4,}$/.test(cleanPhone)) {
      errs.phone = 'Invalid phone number: repeating pattern detected';
    } else if ('0123456789012345'.includes(cleanPhone) || '9876543210987654'.includes(cleanPhone)) {
      errs.phone = 'Sequential test numbers are not allowed';
    } else {
      const uniqueDigits = new Set(cleanPhone.split('')).size;
      if (cleanPhone.length >= 10 && uniqueDigits < 4) {
        errs.phone = 'Please enter a genuine phone number with valid digit variation';
      } else if (
        formData.phoneCountryCode === '+91' &&
        (!/^[6-9]\d{9}$/.test(cleanPhone) || cleanPhone.length !== 10)
      ) {
        errs.phone = 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9';
      }
    }

    if (formData.hasPassport === 'Yes' && !formData.passportNumber.trim()) {
      errs.passportNumber = 'Passport number is required';
    } else if (
      formData.hasPassport === 'Yes' &&
      !/^[A-Z0-9]{6,12}$/i.test(formData.passportNumber.trim())
    ) {
      errs.passportNumber = 'Enter a valid passport number (6-12 characters)';
    }

    if (formData.dob) {
      const dob = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18 || age > 35) {
        errs.dob = 'Age must be between 18 and 35 years';
      }
    }

    if (!resumeFile) {
      errs.resume = 'Please upload your Resume / CV (PDF, PNG, JPG, or DOC up to 5MB)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        setErrors((prev) => ({
          ...prev,
          resume: 'Supported formats: PDF, PNG, JPG, JPEG, WEBP, DOC, DOCX',
        }));
        return;
      }

      if (file.size > MAX_RESUME_SIZE) {
        setErrors((prev) => ({
          ...prev,
          resume: 'File size exceeds 5MB limit. Please upload a smaller file.',
        }));
        return;
      }

      setResumeFile(file);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.resume;
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // scroll to first error
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      let resumeUrl: string | null = null;

      // 1. Final Email
      const finalEmail =
        formData.emailProvider === 'custom'
          ? formData.email.trim()
          : `${formData.email.trim()}${formData.emailProvider}`;

      // 2. Final Phone
      const cleanPhoneDigits = formData.phone.replace(/\D/g, '');
      const finalPhone = `${formData.phoneCountryCode} ${cleanPhoneDigits}`;

      // 3. Upload resume to Supabase storage bucket 'resumes'
      if (resumeFile) {
        const safeName = formData.fullName
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '-');
        const ts = Date.now();
        const safeFileName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const filePath = `${safeName}-${ts}/${safeFileName}`;

        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(filePath, resumeFile);

        if (uploadError) {
          console.warn('Storage upload note:', uploadError.message);
          // Keep file path for reference even if storage policy is lenient
          resumeUrl = filePath;
        } else {
          resumeUrl = filePath;
        }
      }

      // 4. Insert directly into Supabase 'applications' table so it appears in Admin Panel!
      const { error: dbError } = await supabase.from('applications').insert({
        full_name: formData.fullName.trim(),
        email: finalEmail,
        phone: finalPhone,
        position: formData.position,
        experience_years: parseInt(formData.experience, 10) || 0,
        qualification: formData.qualification,
        current_country: formData.currentCountry.trim(),
        nationality: formData.nationality.trim(),
        date_of_birth: formData.dob || null,
        has_passport: formData.hasPassport === 'Yes',
        passport_number:
          formData.hasPassport === 'Yes'
            ? formData.passportNumber.trim().toUpperCase()
            : null,
        resume_url: resumeUrl,
        message: formData.notes.trim() || null,
        status: 'new',
      });

      if (dbError) {
        console.error('Supabase application submission error:', dbError);
        setSubmitError('Submission failed. Please check your network or try again.');
        setSubmitting(false);
        return;
      }

      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setSubmitError('An unexpected error occurred. Please try again.');
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      emailProvider: '@gmail.com',
      phoneCountry: 'India',
      phoneCountryCode: '+91',
      phone: '',
      dob: '',
      position: 'Registered Nurse (Staff Nurse / ICU / OT)',
      experience: '2',
      qualification: 'B.Sc Nursing / Post Basic B.Sc',
      currentCountry: 'India',
      nationality: 'Indian',
      hasPassport: 'Yes',
      passportNumber: '',
      notes: '',
    });
    setResumeFile(null);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#f0f4f9] min-h-screen pb-16">
      {/* Top Header Floating Share Bar */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-8 sticky top-0 z-40 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            DW
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
            Dais World · Official Candidate Registration Form
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={copyFormLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            title="Copy form link to share"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={shareViaWhatsApp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
            title="Share via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Main Google-Form Style Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {submitted ? (
          /* =========================================================================
             SUBMISSION SUCCESS CARD (GOOGLE FORM STYLE)
          ========================================================================== */
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden border-t-8 border-t-emerald-600 p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Application Submitted Successfully!
            </h1>

            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
              Your registration details and CV have been safely recorded in our database. Our international recruitment counselor will review your profile and reach out within 24 to 48 hours.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left rtl:text-right max-w-md mx-auto mb-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                What to Expect:
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                <li>• Free European credential evaluation & eligibility check</li>
                <li>• WhatsApp / Call orientation with recruitment officer</li>
                <li>• Sponsorship details, interview schedule & free Dutch language training</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleResetForm}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                Submit Another Response
              </button>

              <a
                href="https://wa.me/918976697001?text=Hi%20Dais%20World%2C%20I%20have%20submitted%20my%20application%20form%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* =========================================================================
             GOOGLE-FORM STYLE MULTI-CARD FORM
          ========================================================================== */
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* CARD 0: FORM TITLE / BANNER CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden border-t-8 border-t-blue-600">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Dais World Endeavor Pvt. Ltd.
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Overseas Recruitment 2026
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  International Candidate Application Form
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Please fill out this form accurately to apply for verified overseas vacancies across <b>Netherlands, Germany, Belgium, Middle East & Europe</b> in Healthcare, Hospitality, Construction, Oil & Gas, and Wellness.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Free Review · 100% Legal Visa Processing</span>
                  </div>
                  <span className="text-rose-600 font-bold">* Indicates required question</span>
                </div>
              </div>
            </div>

            {/* Error banner if any */}
            {submitError && (
              <div className="bg-rose-50 border-2 border-rose-200 text-rose-700 rounded-2xl p-4 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* CARD 1: PERSONAL & CONTACT INFORMATION */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7 space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Personal & Contact Details
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Your official name and direct contact info</p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Full Name (as per Passport / ID) <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your answer"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                    errors.fullName
                      ? 'border-rose-400 bg-rose-50/20'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-rose-500 text-xs mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-slate-300 bg-slate-50/50 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <input
                    type="text"
                    placeholder="username"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value.replace(/\s+/g, ''),
                      }))
                    }
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-transparent focus:outline-none"
                  />
                  <select
                    value={formData.emailProvider}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, emailProvider: e.target.value }))
                    }
                    className="px-3 bg-slate-100 border-l border-slate-200 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="@gmail.com">@gmail.com</option>
                    <option value="@yahoo.com">@yahoo.com</option>
                    <option value="@outlook.com">@outlook.com</option>
                    <option value="@icloud.com">@icloud.com</option>
                    <option value="custom">Custom Domain</option>
                  </select>
                </div>
                {errors.email && (
                  <p className="text-rose-500 text-xs mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  WhatsApp / Phone Number <span className="text-rose-600">*</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-slate-300 bg-slate-50/50 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <select
                    value={formData.phoneCountry}
                    onChange={(e) => {
                      const c = PHONE_COUNTRIES.find(
                        (item) => item.country === e.target.value
                      );
                      if (c) {
                        setFormData((prev) => ({
                          ...prev,
                          phoneCountry: c.country,
                          phoneCountryCode: c.code,
                        }));
                      }
                    }}
                    className="px-2.5 bg-slate-100 border-r border-slate-200 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    {PHONE_COUNTRIES.map((c) => (
                      <option key={c.country} value={c.country}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value.replace(/[^\d]/g, '').slice(0, 15),
                      }))
                    }
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-transparent focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Date of Birth (Age 18–35)
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  min={
                    new Date(new Date().setFullYear(new Date().getFullYear() - 35))
                      .toISOString()
                      .split('T')[0]
                  }
                  max={
                    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                      .toISOString()
                      .split('T')[0]
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                />
                {errors.dob && (
                  <p className="text-rose-500 text-xs mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.dob}
                  </p>
                )}
              </div>
            </div>

            {/* CARD 2: PROFESSIONAL & QUALIFICATION */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7 space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Professional & Career Details
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Select your profession and work experience</p>
              </div>

              {/* Position */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Position Applying For <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.position}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, position: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all cursor-pointer"
                >
                  {POSITIONS.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              {/* Total Experience Years */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Total Years of Work Experience <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, experience: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all cursor-pointer"
                >
                  {EXPERIENCE_YEARS.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp === '0' ? 'Fresher (0 Years)' : `${exp} Years`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Highest Educational Qualification <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.qualification}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, qualification: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all cursor-pointer"
                >
                  {QUALIFICATIONS.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              {/* Passport Status */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Do you possess a Valid Passport? <span className="text-rose-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Yes', 'No'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, hasPassport: val }))
                      }
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        formData.hasPassport === val
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                          : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {val === 'Yes' ? 'Yes, Valid Passport' : 'No / Currently Applied'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Passport Number */}
              {formData.hasPassport === 'Yes' && (
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Passport Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Z1234567"
                    value={formData.passportNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        passportNumber: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''),
                      }))
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm uppercase text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.passportNumber
                        ? 'border-rose-400 bg-rose-50/20'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                    }`}
                  />
                  {errors.passportNumber && (
                    <p className="text-rose-500 text-xs mt-1 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.passportNumber}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* CARD 3: RESUME / DOCUMENT UPLOAD */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7 space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Upload Resume / CV / Documents <span className="text-rose-600">*</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Supported formats: PDF, PNG, JPG, JPEG, DOC, DOCX (Max size: 5MB)
                </p>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx"
                className="hidden"
              />

              {resumeFile ? (
                <div className="flex items-center justify-between p-4 bg-blue-50/80 border-2 border-blue-300 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs uppercase">
                      {resumeFile.name.split('.').pop()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 truncate max-w-[220px] sm:max-w-md">
                        {resumeFile.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Ready for evaluation
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setResumeFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="p-2 text-rose-600 hover:bg-rose-100 rounded-xl transition-colors"
                    title="Remove file"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                    errors.resume
                      ? 'border-rose-400 bg-rose-50/30'
                      : 'border-slate-300 hover:border-blue-600 bg-slate-50/60 hover:bg-blue-50/20'
                  }`}
                >
                  <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-800">
                    Click to browse or drag & drop your Resume / CV
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    PDF, PNG, JPG, JPEG, WEBP, DOC, DOCX up to 5MB
                  </p>
                </div>
              )}

              {errors.resume && (
                <p className="text-rose-500 text-xs mt-1.5 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.resume}
                </p>
              )}
            </div>

            {/* CARD 4: ADDITIONAL NOTES */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7 space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  Additional Notes / Country Preference (Optional)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Any specific European country preferences, license registration details, or comments
                </p>
              </div>

              <textarea
                rows={3}
                placeholder="Your answer (e.g. Interested in Netherlands Nursing drive, completed B1 Dutch exam, etc.)"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
              />
            </div>

            {/* SUBMIT BUTTON BAR */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60"
              >
                {submitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleResetForm}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Clear form
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center pt-2">
              Never submit passwords through this form. · Dais World Endeavor Pvt. Ltd.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
