import { useState, useEffect, useRef } from 'react';
import {
  X, ArrowRight, Loader2, CheckCircle, Upload, FileText, Calendar,
  Phone, Mail, User, MapPin, Flag, Briefcase, GraduationCap, FileCheck, MessageSquare,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ApplyNowModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  emailProvider: string;
  phone: string;
  phoneCountryCode: string;
  phoneCountry: string;
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

const POSITIONS = [
  'OR Nurse',
  'Registered Nurse (RN)',
  'Healthcare Assistant',
  'ICU Nurse',
  'Pediatric Nurse',
  'Mental Health Nurse',
  'Elderly Care Nurse',
  'Other',
];

const QUALIFICATIONS = [
  'BSc Nursing',
  'GNM',
  'BPT',
  'MSc Nursing',
  'Diploma in Nursing',
  'Other',
];

const EMAIL_PROVIDERS = [
  { label: 'Gmail', value: '@gmail.com' },
  { label: 'Outlook', value: '@outlook.com' },
  { label: 'Yahoo', value: '@yahoo.com' },
  { label: 'Hotmail', value: '@hotmail.com' },
  { label: 'Other', value: 'other' },
];

const PHONE_COUNTRIES = [
  { country: 'India', code: '+91', min: 10, max: 10 },
  { country: 'United States', code: '+1', min: 10, max: 10 },
  { country: 'Canada', code: '+1', min: 10, max: 10 },
  { country: 'United Kingdom', code: '+44', min: 10, max: 10 },
  { country: 'United Arab Emirates', code: '+971', min: 9, max: 9 },
  { country: 'Australia', code: '+61', min: 9, max: 9 },
  { country: 'New Zealand', code: '+64', min: 8, max: 10 },
  { country: 'Germany', code: '+49', min: 10, max: 11 },
  { country: 'France', code: '+33', min: 9, max: 9 },
  { country: 'Italy', code: '+39', min: 9, max: 10 },
  { country: 'Spain', code: '+34', min: 9, max: 9 },
  { country: 'Portugal', code: '+351', min: 9, max: 9 },
  { country: 'Ireland', code: '+353', min: 9, max: 9 },
  { country: 'Netherlands', code: '+31', min: 9, max: 9 },
  { country: 'Switzerland', code: '+41', min: 9, max: 9 },
  { country: 'Sweden', code: '+46', min: 9, max: 9 },
  { country: 'Norway', code: '+47', min: 8, max: 8 },
  { country: 'Denmark', code: '+45', min: 8, max: 8 },
  { country: 'Finland', code: '+358', min: 9, max: 10 },
  { country: 'Saudi Arabia', code: '+966', min: 9, max: 9 },
  { country: 'Qatar', code: '+974', min: 8, max: 8 },
  { country: 'Kuwait', code: '+965', min: 8, max: 8 },
  { country: 'Oman', code: '+968', min: 8, max: 8 },
  { country: 'Bahrain', code: '+973', min: 8, max: 8 },
  { country: 'Singapore', code: '+65', min: 8, max: 8 },
  { country: 'Malaysia', code: '+60', min: 9, max: 10 },
  { country: 'South Africa', code: '+27', min: 9, max: 9 },
];

const EMPTY: FormData = {
  fullName: '',
  email: '',
  emailProvider: '@gmail.com',
  phone: '',
  phoneCountryCode: '+91',
  phoneCountry: 'India',
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

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

const VALID_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const VALID_RESUME_EXTS = ['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.doc', '.docx'];

// 24 hours
const APPLY_LOCK_KEY = 'daisworld_apply_now_submitted_at';
const APPLY_LOCK_MS = 24 * 60 * 60 * 1000;

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setData(EMPTY);
      setErrors({});
      setStatus('idle');
      setSubmitError('');
    }
  }, [open]);

  useEffect(() => {
    if (errors._scrollTo && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [errors]);

  if (!open) return null;

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
  };

  const validateEmailFormat = (
    emailVal: string,
    provider: string
  ): string | null => {
    const trimmed = emailVal.trim().toLowerCase();
    if (!trimmed) {
      return 'Please enter your email address.';
    }

    if (provider === 'other') {
      if (!trimmed.includes('@')) {
        return "Email must contain '@' (e.g. name@domain.com).";
      }
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          trimmed
        )
      ) {
        return 'Please enter a valid email address (e.g. name@domain.com).';
      }
      if (trimmed.includes('..')) {
        return 'Email cannot contain consecutive dots (..).';
      }
    } else {
      if (trimmed.includes(' ')) {
        return 'Email username cannot contain spaces.';
      }
      if (trimmed.length < 2) {
        return 'Email username must be at least 2 characters.';
      }
      if (
        !/^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*$/.test(
          trimmed
        )
      ) {
        return 'Email username can only contain letters, numbers, and allowed symbols (._%+-).';
      }
      if (
        trimmed.startsWith('.') ||
        trimmed.endsWith('.')
      ) {
        return 'Email username cannot start or end with a dot.';
      }
      if (trimmed.includes('..')) {
        return 'Email username cannot contain consecutive dots (..).';
      }
    }

    return null;
  };

  const validatePhoneFormat = (
    phoneVal: string,
    countryName: string
  ): string | null => {
    const digits = phoneVal.replace(/\D/g, '');
    if (!digits) {
      return 'Please enter your phone number.';
    }

    const selectedCountry = PHONE_COUNTRIES.find(
      (item) => item.country === countryName
    );

    if (!selectedCountry) return null;

    if (selectedCountry.country === 'India') {
      if (digits.length !== 10) {
        return 'Indian mobile number must be exactly 10 digits.';
      }
      if (!/^[6-9]\d{9}$/.test(digits)) {
        return 'Indian mobile number must start with 6, 7, 8, or 9.';
      }
      if (/^(\d)\1{9}$/.test(digits)) {
        return 'Please enter a valid, non-repeating phone number.';
      }
    } else {
      if (
        digits.length < selectedCountry.min ||
        digits.length > selectedCountry.max
      ) {
        return `Phone number for ${selectedCountry.country} must be between ${selectedCountry.min} and ${selectedCountry.max} digits.`;
      }
      if (/^(\d)\1+$/.test(digits)) {
        return 'Please enter a valid phone number.';
      }
    }

    return null;
  };

  const handleEmailProviderChange = (provider: string) => {
    update('emailProvider', provider);

    setErrors((prev) => {
      const next = { ...prev };
      delete next.email;
      return next;
    });
  };

  const handleEmailChange = (rawVal: string) => {
    let val = rawVal.toLowerCase().replace(/\s/g, '');
    // If user pasted/typed a full email like name@gmail.com while a provider dropdown is selected
    if (data.emailProvider !== 'other' && val.includes('@')) {
      const parts = val.split('@');
      val = parts[0];
      const domain = '@' + parts[1].toLowerCase();
      const matched = EMAIL_PROVIDERS.find((p) => p.value === domain);
      if (matched) {
        update('emailProvider', matched.value);
      }
    }
    update('email', val);

    if (errors.email) {
      const err = validateEmailFormat(val, data.emailProvider);
      if (!err) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.email;
          return next;
        });
      }
    }
  };

  const handleEmailBlur = () => {
    if (data.email.trim()) {
      const err = validateEmailFormat(data.email, data.emailProvider);
      if (err) {
        setErrors((prev) => ({ ...prev, email: err }));
      }
    }
  };

  const handleCountryChange = (countryName: string) => {
    const country = PHONE_COUNTRIES.find(
      (item) => item.country === countryName
    );

    if (!country) return;

    setData((prev) => ({
      ...prev,
      phoneCountry: country.country,
      phoneCountryCode: country.code,
      phone: '',
    }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next.phone;
      return next;
    });
  };

  const handlePhoneChange = (rawVal: string) => {
    const digits = rawVal.replace(/\D/g, '');
    const selectedCountry = PHONE_COUNTRIES.find(
      (item) => item.country === data.phoneCountry
    );
    const maxDigits = selectedCountry?.max || 15;
    update('phone', digits.slice(0, maxDigits));

    if (errors.phone) {
      const err = validatePhoneFormat(digits.slice(0, maxDigits), data.phoneCountry);
      if (!err) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.phone;
          return next;
        });
      }
    }
  };

  const handlePhoneBlur = () => {
    if (data.phone.trim()) {
      const err = validatePhoneFormat(data.phone, data.phoneCountry);
      if (err) {
        setErrors((prev) => ({ ...prev, phone: err }));
      }
    }
  };

  const validate = (): boolean => {
    const e: FormErrors = {};

    // Full name
    if (!data.fullName.trim()) {
      e.fullName = 'Please enter your full name.';
    } else if (data.fullName.trim().length < 2) {
      e.fullName = 'Name must be at least 2 characters.';
    }

    // Email Validation
    const emailErr = validateEmailFormat(data.email, data.emailProvider);
    if (emailErr) {
      e.email = emailErr;
    }

    // Phone Validation
    const phoneErr = validatePhoneFormat(data.phone, data.phoneCountry);
    if (phoneErr) {
      e.phone = phoneErr;
    }

    // Position
    if (!data.position) {
      e.position = 'Please select a position.';
    }

    // Experience
    if (!data.experience && data.experience !== '0') {
      e.experience = 'Please enter your years of experience.';
    } else {
      const exp = Number(data.experience);

      if (isNaN(exp) || exp < 0 || exp > 50) {
        e.experience = 'Experience must be between 0 and 50.';
      }
    }

    // Qualification
    if (!data.qualification) {
      e.qualification =
        'Please select your highest qualification.';
    }

    // Current Country
    if (!data.currentCountry.trim()) {
      e.currentCountry = 'Please enter your current country.';
    }

    // Nationality
    if (!data.nationality.trim()) {
      e.nationality = 'Please enter your nationality.';
    }

    // Date of Birth
    if (!data.dateOfBirth) {
      e.dateOfBirth = 'Please enter your date of birth.';
    } else {
      const dob = new Date(data.dateOfBirth);
      const today = new Date();

      let age =
        today.getFullYear() - dob.getFullYear();

      const m =
        today.getMonth() - dob.getMonth();

      if (
        m < 0 ||
        (m === 0 &&
          today.getDate() < dob.getDate())
      ) {
        age--;
      }

      if (age < 18 || age > 60) {
        e.dateOfBirth =
          'Age must be between 18 and 60 years.';
      }
    }

    // Passport
    if (data.hasPassport === null) {
      e.hasPassport = 'Please select Yes or No.';
    } else if (data.hasPassport) {
      const cleanPassport = data.passportNumber.trim().toUpperCase();
      if (!cleanPassport) {
        e.passportNumber = 'Please enter your passport number.';
      } else if (!/^[A-Z0-9]{6,12}$/.test(cleanPassport)) {
        e.passportNumber = 'Please enter a valid passport number (6 to 12 alphanumeric characters).';
      } else if (data.phoneCountry === 'India' && !/^[A-Z][0-9]{7,8}$/.test(cleanPassport)) {
        e.passportNumber = 'Indian passport must start with a letter followed by 7-8 digits (e.g. A1234567).';
      }
    }

    // Resume / Documents
    if (!data.resume) {
      e.resume = 'Please upload your resume or document.';
    } else {
      if (data.resume.size > MAX_RESUME_SIZE) {
        e.resume = 'File size must be under 5MB.';
      } else {
        const ext =
          '.' +
          (data.resume.name.split('.').pop() || '')
            .toLowerCase();

        const typeOk =
          VALID_RESUME_TYPES.includes(
            data.resume.type
          );

        const extOk =
          VALID_RESUME_EXTS.includes(ext);

        if (!typeOk && !extOk) {
          e.resume =
            'Only PDF, PNG, JPG, JPEG, DOC, or DOCX files are allowed.';
        }
      }
    }

    if (Object.keys(e).length > 0) {
      (e as FormErrors)._scrollTo = 'true';
    }

    setErrors(e);

    return (
      Object.keys(e).filter(
        (k) => k !== '_scrollTo'
      ).length === 0
    );
  };

  const handleResumeChange = (
    file: File | null
  ) => {
    if (file) {
      const ext =
        '.' +
        (file.name.split('.').pop() || '')
          .toLowerCase();

      const typeOk =
        VALID_RESUME_TYPES.includes(file.type);

      const extOk =
        VALID_RESUME_EXTS.includes(ext);

      if (!typeOk && !extOk) {
        setErrors((p) => ({
          ...p,
          resume:
            'Only PDF, PNG, JPG, JPEG, DOC, or DOCX files are allowed.',
        }));
        return;
      }

      if (file.size > MAX_RESUME_SIZE) {
        setErrors((p) => ({
          ...p,
          resume: 'File size must be under 5MB.',
        }));
        return;
      }
    }

    update('resume', file);
  };

  const handleSubmit = async (
    ev: React.FormEvent
  ) => {
    ev.preventDefault();

    /*
     * 24-HOUR APPLICATION LOCK
     */
    const lastSubmittedAt = Number(
      localStorage.getItem(APPLY_LOCK_KEY) || 0
    );

    if (
      lastSubmittedAt &&
      Date.now() - lastSubmittedAt <
      APPLY_LOCK_MS
    ) {
      const remainingMs =
        APPLY_LOCK_MS -
        (Date.now() - lastSubmittedAt);

      const remainingHours = Math.ceil(
        remainingMs / (60 * 60 * 1000)
      );

      setStatus('error');

      setSubmitError(
        `You have already submitted an application. Please try again after ${remainingHours} hour(s).`
      );

      return;
    }

    // Validate all fields
    if (!validate()) return;

    setStatus('loading');
    setSubmitError('');

    let resumeUrl: string | null = null;

    /*
     * Create final email
     */
    let finalEmail = data.email.trim();

    if (data.emailProvider !== 'other') {
      finalEmail =
        `${data.email.trim()}${data.emailProvider}`;
    }

    /*
     * Create final phone number
     */
    const phoneDigits =
      data.phone.replace(/\D/g, '');

    const finalPhone =
      `${data.phoneCountryCode} ${phoneDigits}`;

    // Upload resume
    if (data.resume) {
      const safeName = data.fullName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-');

      const ts = Date.now();

      const safeFileName =
        data.resume.name.replace(
          /[^a-zA-Z0-9._-]/g,
          '_'
        );

      const filePath =
        `${safeName}-${ts}/${safeFileName}`;

      const { error: uploadError } =
        await supabase.storage
          .from('resumes')
          .upload(
            filePath,
            data.resume
          );

      if (uploadError) {
        setStatus('error');
        setSubmitError(
          'Could not upload your resume. Please try again.'
        );
        return;
      }

      resumeUrl = filePath;
    }

    // Save application to Supabase
    const { error } = await supabase
      .from('applications')
      .insert({
        full_name: data.fullName.trim(),

        // Complete email
        email: finalEmail,

        // Country code + phone
        phone: finalPhone,

        position: data.position,

        experience_years:
          Number(data.experience),

        qualification:
          data.qualification,

        current_country:
          data.currentCountry.trim(),

        nationality:
          data.nationality.trim(),

        date_of_birth:
          data.dateOfBirth,

        has_passport:
          data.hasPassport,

        passport_number:
          data.hasPassport
            ? data.passportNumber.trim()
            : null,

        resume_url:
          resumeUrl,

        message:
          data.message.trim() || null,
      });

    if (error) {
      console.error(
        'Supabase application error:',
        error
      );

      setStatus('error');
      setSubmitError(
        'Something went wrong. Please try again.'
      );
      return;
    }

    /*
     * Save submission time ONLY after Supabase successfully
     * saves the application.
     */
    localStorage.setItem(
      APPLY_LOCK_KEY,
      String(Date.now())
    );

    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#050e1f]/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-black text-white">
              Apply Now
            </h2>

            <p className="text-white/90 text-sm mt-1">
              Fill in your details and we'll get back to you within 48 hours.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-10 text-center">
              <div className="inline-flex w-16 h-16 bg-emerald-100 rounded-full items-center justify-center mb-4 animate-pulse-ring">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">
                Application Submitted!
              </h3>

              <p className="text-slate-500 text-sm mb-6">
                Thank you for applying. Our team will review your application and contact you within 48 hours.
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="p-6 max-h-[70vh] overflow-y-auto scrollbar-hide"
            >
              {submitError && (
                <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3 text-sm font-medium">
                  {submitError}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <Field
                    label="Full Name"
                    icon={User}
                    error={errors.fullName}
                    required
                  >
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) =>
                        update(
                          'fullName',
                          e.target.value
                        )
                      }
                      placeholder="Your full name"
                      className={inputCls(
                        !!errors.fullName
                      )}
                    />
                  </Field>

                  <Field
                    label="Email"
                    icon={Mail}
                    error={errors.email}
                    required
                  >
                    <div className="flex gap-2">

                      <input
                        type={
                          data.emailProvider ===
                            'other'
                            ? 'email'
                            : 'text'
                        }
                        value={data.email}
                        onChange={(e) =>
                          handleEmailChange(
                            e.target.value
                          )
                        }
                        onBlur={handleEmailBlur}
                        placeholder={
                          data.emailProvider ===
                            'other'
                            ? 'you@example.com'
                            : 'yourname'
                        }
                        className={
                          inputCls(!!errors.email) +
                          ' flex-1 min-w-0'
                        }
                      />

                      <select
                        value={data.emailProvider}
                        onChange={(e) =>
                          handleEmailProviderChange(
                            e.target.value
                          )
                        }
                        className="w-[125px] px-2 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm bg-white"
                      >
                        {EMAIL_PROVIDERS.map(
                          (provider) => (
                            <option
                              key={provider.value}
                              value={provider.value}
                            >
                              {provider.label}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    {data.emailProvider !==
                      'other' && (
                        <p className="text-xs text-slate-400 mt-1">
                          Your email will be:
                          {' '}
                          {data.email ||
                            'yourname'}
                          {data.emailProvider}
                        </p>
                      )}
                  </Field>
                </div>

                {/* Phone + Position */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <Field
                    label="Phone Number"
                    icon={Phone}
                    error={errors.phone}
                    required
                  >
                    <div className="flex gap-2">

                      <select
                        value={data.phoneCountry}
                        onChange={(e) =>
                          handleCountryChange(
                            e.target.value
                          )
                        }
                        className="w-[145px] px-2 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm bg-white"
                      >
                        {PHONE_COUNTRIES.map(
                          (country) => (
                            <option
                              key={
                                country.country
                              }
                              value={
                                country.country
                              }
                            >
                              {country.country}{' '}
                              {country.code}
                            </option>
                          )
                        )}
                      </select>

                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) =>
                          handlePhoneChange(
                            e.target.value
                          )
                        }
                        onBlur={handlePhoneBlur}
                        inputMode="numeric"
                        maxLength={
                          PHONE_COUNTRIES.find(
                            (item) =>
                              item.country ===
                              data.phoneCountry
                          )?.max || 15
                        }
                        placeholder={
                          data.phoneCountry ===
                            'India'
                            ? '9876543210'
                            : 'Phone number'
                        }
                        className={
                          inputCls(
                            !!errors.phone
                          ) +
                          ' flex-1 min-w-0'
                        }
                      />
                    </div>

                    {data.phoneCountry ===
                      'India' && (
                        <p className="text-xs text-slate-400 mt-1">
                          India (+91) requires exactly 10 digits.
                        </p>
                      )}
                  </Field>

                  <Field
                    label="Position Applying For"
                    icon={Briefcase}
                    error={errors.position}
                    required
                  >
                    <select
                      value={data.position}
                      onChange={(e) =>
                        update(
                          'position',
                          e.target.value
                        )
                      }
                      className={inputCls(
                        !!errors.position
                      )}
                    >
                      <option value="">
                        Select a position
                      </option>

                      {POSITIONS.map((p) => (
                        <option
                          key={p}
                          value={p}
                        >
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Experience + Qualification */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <Field
                    label="Years of Experience"
                    icon={Briefcase}
                    error={errors.experience}
                    required
                  >
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={data.experience}
                      onChange={(e) =>
                        update(
                          'experience',
                          e.target.value
                        )
                      }
                      placeholder="0 – 50"
                      className={inputCls(
                        !!errors.experience
                      )}
                    />
                  </Field>

                  <Field
                    label="Highest Qualification"
                    icon={GraduationCap}
                    error={errors.qualification}
                    required
                  >
                    <select
                      value={data.qualification}
                      onChange={(e) =>
                        update(
                          'qualification',
                          e.target.value
                        )
                      }
                      className={inputCls(
                        !!errors.qualification
                      )}
                    >
                      <option value="">
                        Select qualification
                      </option>

                      {QUALIFICATIONS.map(
                        (q) => (
                          <option
                            key={q}
                            value={q}
                          >
                            {q}
                          </option>
                        )
                      )}
                    </select>
                  </Field>
                </div>

                {/* Country + Nationality */}
                <div className="grid sm:grid-cols-2 gap-4">

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
                        update(
                          'currentCountry',
                          e.target.value
                        )
                      }
                      placeholder="India"
                      className={inputCls(
                        !!errors.currentCountry
                      )}
                    />
                  </Field>

                  <Field
                    label="Nationality"
                    icon={Flag}
                    error={errors.nationality}
                    required
                  >
                    <input
                      type="text"
                      value={data.nationality}
                      onChange={(e) =>
                        update(
                          'nationality',
                          e.target.value
                        )
                      }
                      placeholder="Indian"
                      className={inputCls(
                        !!errors.nationality
                      )}
                    />
                  </Field>
                </div>

                {/* DOB */}
                <Field
                  label="Date of Birth"
                  icon={Calendar}
                  error={errors.dateOfBirth}
                  required
                >
                  <input
                    type="date"
                    value={data.dateOfBirth}
                    onChange={(e) =>
                      update(
                        'dateOfBirth',
                        e.target.value
                      )
                    }
                    max={
                      new Date(
                        new Date().setFullYear(
                          new Date().getFullYear() -
                          18
                        )
                      )
                        .toISOString()
                        .split('T')[0]
                    }
                    className={inputCls(
                      !!errors.dateOfBirth
                    )}
                  />

                  <p className="text-xs text-slate-400 mt-1">
                    You must be between 18 and 60 years old.
                  </p>
                </Field>

                {/* Passport */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <Field
                    label="Valid Passport?"
                    icon={FileCheck}
                    error={errors.hasPassport}
                    required
                  >
                    <YesNo
                      value={data.hasPassport}
                      onChange={(v) => {
                        update(
                          'hasPassport',
                          v
                        );

                        if (!v) {
                          update(
                            'passportNumber',
                            ''
                          );
                        }
                      }}
                    />
                  </Field>

                  {data.hasPassport && (
                    <Field
                      label="Passport Number"
                      icon={FileCheck}
                      error={
                        errors.passportNumber
                      }
                      required
                    >
                      <input
                        type="text"
                        value={
                          data.passportNumber
                        }
                        maxLength={12}
                        onChange={(e) =>
                          update(
                            'passportNumber',
                            e.target.value
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, '')
                          )
                        }
                        placeholder={
                          data.phoneCountry === 'India'
                            ? 'e.g. A1234567'
                            : 'e.g. 123456789'
                        }
                        className={inputCls(
                          !!errors.passportNumber
                        )}
                      />
                    </Field>
                  )}
                </div>

                {/* Resume */}
                <Field
                  label="Resume / Document Upload (PDF, PNG, JPG, DOCX — max 5MB)"
                  icon={Upload}
                  error={errors.resume}
                  required
                >
                  <label className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">

                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Upload className="w-5 h-5" />
                    </div>

                    {data.resume ? (
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />

                        <span className="text-sm text-slate-700 font-medium truncate">
                          {data.resume.name}
                        </span>

                        <span className="text-xs text-slate-400">
                          (
                          {(
                            data.resume.size /
                            1024
                          ).toFixed(0)}{' '}
                          KB)
                        </span>
                      </div>
                    ) : (
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-500">
                          Click to upload your resume or document
                        </p>

                        <p className="text-xs text-slate-400">
                          PDF, PNG, JPG, JPEG, DOC, or DOCX — max 5MB
                        </p>
                      </div>
                    )}

                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,image/*,application/pdf"
                      className="hidden"
                      onChange={(e) =>
                        handleResumeChange(
                          e.target.files?.[0] ??
                          null
                        )
                      }
                    />
                  </label>
                </Field>

                {/* Message */}
                <Field
                  label="Additional Message (optional)"
                  icon={MessageSquare}
                >
                  <textarea
                    value={data.message}
                    onChange={(e) =>
                      update(
                        'message',
                        e.target.value
                      )
                    }
                    rows={3}
                    placeholder="Anything else you'd like us to know?"
                    className={
                      inputCls(false) +
                      ' resize-none'
                    }
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={
                    status === 'loading'
                  }
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-4 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
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

function inputCls(
  hasError: boolean
) {
  return `w-full px-4 py-3 rounded-2xl border ${hasError
    ? 'border-rose-300 bg-rose-50/50'
    : 'border-slate-200'
    } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm`;
}

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
      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
        <Icon className="w-4 h-4 text-blue-500" />

        {label}

        {required && (
          <span className="text-rose-500">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="text-rose-600 text-xs font-medium mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

function YesNo({
  value,
  onChange,
}: {
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex gap-2">

      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${value === true
          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
      >
        Yes
      </button>

      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${value === false
          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
      >
        No
      </button>

    </div>
  );
}