import { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  Loader2,
  CheckCircle2,
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
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Trash2,
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
  otherQualification: string;
  currentCountry: string;
  otherCurrentCountry: string;
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
  'Registered Nurse (Staff Nurse / ICU / OT)',
  'Operation Room Nurse',
  'Healthcare Assistant / Caregiver',
  'Doctor / Specialist Physician',
  'Ayurvedic Doctor (BAMS / MD)',
  'Certified Yoga Instructor / Therapist',
  'Clinical Dietitian / Nutritionist',
  'Phlebotomist (Blood Collection Specialist)',
  'Medical Laboratory Technologist (MLT)',
  'Radiology & MRI Technician',
  'Executive Chef / Culinary Specialist',
  'Hotel / Hospitality Operations Staff',
  'Civil / Site Engineer',
  'Heavy Equipment Operator',
  'Certified Welder / Pipe Fitter',
  'Spa Therapist / Aesthetician',
  'Other Professional',
];

const QUALIFICATIONS = [
  'B.Sc Nursing / Post Basic B.Sc',
  'GNM (General Nursing & Midwifery)',
  'M.Sc Nursing',
  'MBBS / MD / MS / Medical Degree',
  'BAMS / MD (Ayurveda)',
  'BPT / MPT (Physiotherapy)',
  'BMLT / DMLT (Medical Lab Technology)',
  'Diploma / Certificate in Healthcare',
  'Bachelor of Engineering / B.Tech / Diploma',
  'Hotel Management / Culinary Degree',
  'Higher Secondary (12th Pass)',
  'Other',
];

const COUNTRIES_LIST = [
  'India',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Oman',
  'Bahrain',
  'Germany',
  'Netherlands',
  'United Kingdom',
  'Ireland',
  'Australia',
  'Canada',
  'United States',
  'New Zealand',
  'Austria',
  'Belgium',
  'Denmark',
  'Finland',
  'France',
  'Italy',
  'Malaysia',
  'Nepal',
  'Norway',
  'Philippines',
  'Poland',
  'Portugal',
  'Singapore',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sweden',
  'Switzerland',
  'Other',
];

const EMAIL_PROVIDERS = [
  { label: '@gmail.com', value: '@gmail.com' },
  { label: '@outlook.com', value: '@outlook.com' },
  { label: '@yahoo.com', value: '@yahoo.com' },
  { label: '@hotmail.com', value: '@hotmail.com' },
  { label: 'Custom Domain', value: 'other' },
];

const PHONE_COUNTRIES = [
  { country: 'India', code: '+91', flag: '🇮🇳', min: 10, max: 10 },
  { country: 'United Arab Emirates', code: '+971', flag: '🇦🇪', min: 9, max: 9 },
  { country: 'Saudi Arabia', code: '+966', flag: '🇸🇦', min: 9, max: 9 },
  { country: 'Qatar', code: '+974', flag: '🇶🇦', min: 8, max: 8 },
  { country: 'Kuwait', code: '+965', flag: '🇰🇼', min: 8, max: 8 },
  { country: 'Oman', code: '+968', flag: '🇴🇲', min: 8, max: 8 },
  { country: 'Bahrain', code: '+973', flag: '🇧🇭', min: 8, max: 8 },
  { country: 'United Kingdom', code: '+44', flag: '🇬🇧', min: 10, max: 10 },
  { country: 'Germany', code: '+49', flag: '🇩🇪', min: 10, max: 11 },
  { country: 'Netherlands', code: '+31', flag: '🇳🇱', min: 9, max: 9 },
  { country: 'Ireland', code: '+353', flag: '🇮🇪', min: 9, max: 9 },
  { country: 'Australia', code: '+61', flag: '🇦🇺', min: 9, max: 9 },
  { country: 'Canada', code: '+1', flag: '🇨🇦', min: 10, max: 10 },
  { country: 'United States', code: '+1', flag: '🇺🇸', min: 10, max: 10 },
  { country: 'New Zealand', code: '+64', flag: '🇳🇿', min: 8, max: 10 },
  { country: 'France', code: '+33', flag: '🇫🇷', min: 9, max: 9 },
  { country: 'Italy', code: '+39', flag: '🇮🇹', min: 9, max: 10 },
  { country: 'Spain', code: '+34', flag: '🇪🇸', min: 9, max: 9 },
  { country: 'Portugal', code: '+351', flag: '🇵🇹', min: 9, max: 9 },
  { country: 'Switzerland', code: '+41', flag: '🇨🇭', min: 9, max: 9 },
  { country: 'Sweden', code: '+46', flag: '🇸🇪', min: 9, max: 9 },
  { country: 'Norway', code: '+47', flag: '🇳🇴', min: 8, max: 8 },
  { country: 'Denmark', code: '+45', flag: '🇩🇰', min: 8, max: 8 },
  { country: 'Finland', code: '+358', flag: '🇫🇮', min: 9, max: 10 },
  { country: 'Singapore', code: '+65', flag: '🇸🇬', min: 8, max: 8 },
  { country: 'Malaysia', code: '+60', flag: '🇲🇾', min: 9, max: 10 },
  { country: 'South Africa', code: '+27', flag: '🇿🇦', min: 9, max: 9 },
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
  otherQualification: '',
  currentCountry: 'India',
  otherCurrentCountry: '',
  nationality: 'Indian',
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

// 24 hours lock
const APPLY_LOCK_KEY = 'daisworld_apply_now_submitted_at';
const APPLY_LOCK_MS = 24 * 60 * 60 * 1000;

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

export default function ApplyNowModal({ open, onClose }: ApplyNowModalProps) {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const update = (field: keyof FormData, value: string | boolean | null | File) => {
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

  const validateEmailFormat = (emailVal: string, provider: string): string | null => {
    const trimmed = emailVal.trim().toLowerCase();
    if (!trimmed) {
      return 'Please enter your email address.';
    }

    let username = '';
    let domain = '';

    if (provider === 'other') {
      if (!trimmed.includes('@')) {
        return "Email must contain '@' (e.g. name@domain.com).";
      }
      const parts = trimmed.split('@');
      if (parts.length !== 2) {
        return 'Please enter a valid email address.';
      }
      username = parts[0];
      domain = parts[1];

      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(trimmed)) {
        return 'Please enter a valid email address (e.g. name@domain.com).';
      }

      if (BLOCKED_EMAIL_DOMAINS.has(domain)) {
        return 'Disposable, temporary or test email domains are not allowed.';
      }

      const domainParts = domain.split('.');
      const tld = domainParts[domainParts.length - 1];
      if (!tld || tld.length < 2 || /^\d+$/.test(tld)) {
        return 'Email must have a valid domain extension (e.g. .com, .in).';
      }
    } else {
      username = trimmed;
      domain = provider.replace('@', '');

      if (username.includes(' ')) {
        return 'Email username cannot contain spaces.';
      }
      if (username.length < 3) {
        return 'Email username must be at least 3 characters.';
      }
      if (!/^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*$/.test(username)) {
        return 'Email can only contain letters, numbers, and symbols (._%+-).';
      }
      if (username.startsWith('.') || username.endsWith('.')) {
        return 'Email username cannot start or end with a dot.';
      }
    }

    if (username.includes('..')) {
      return 'Email username cannot contain consecutive dots (..).';
    }

    // Anti-fake checks
    const cleanUsername = username.replace(/[._%+-]/g, '');

    // 1. Blocked dummy names
    if (BLOCKED_EMAIL_USERNAMES.has(cleanUsername) || BLOCKED_EMAIL_USERNAMES.has(username)) {
      return 'Dummy or test email addresses (e.g. test@, asdf@, fake@) are not allowed.';
    }

    // 2. Repetitive single character (e.g. aaaaaa@, zzzzzz@, 111111@)
    if (/^([a-z0-9])\1{3,}$/i.test(cleanUsername)) {
      return 'Please enter a genuine, active email address.';
    }

    // 3. Keyboard mash strings
    const isKeyboardMash =
      cleanUsername.length <= 6 &&
      ('abcdefghijklmnopqrstuvwxyz'.includes(cleanUsername) ||
        '0123456789'.includes(cleanUsername) ||
        'qwertyuiop'.includes(cleanUsername) ||
        'asdfghjkl'.includes(cleanUsername) ||
        'zxcvbnm'.includes(cleanUsername));
    if (isKeyboardMash) {
      return 'Test or keyboard-mashing email addresses are not allowed.';
    }

    return null;
  };

  const validatePhoneFormat = (phoneVal: string, countryName: string): string | null => {
    const digits = phoneVal.replace(/\D/g, '');
    if (!digits) {
      return 'Please enter your mobile number.';
    }

    const selectedCountry = PHONE_COUNTRIES.find((item) => item.country === countryName);
    if (!selectedCountry) return null;

    // 1. Blocked dummy test numbers
    if (BLOCKED_DUMMY_PHONES.has(digits)) {
      return 'Please enter a valid, active phone number (test numbers not allowed).';
    }

    // 2. All digits identical (e.g. 9999999999, 8888888888)
    if (/^(\d)\1+$/.test(digits)) {
      return 'Invalid phone number: all digits cannot be identical.';
    }

    // 3. Repeating 2-digit patterns (e.g. 9898989898, 9090909090)
    if (/^(\d{2})\1{4,}$/.test(digits)) {
      return 'Invalid phone number: repeating pattern detected.';
    }

    // 4. Repeating 3-digit patterns (e.g. 9879879879)
    if (/^(\d{3})\1{2,}\d*$/.test(digits)) {
      return 'Invalid phone number: repeating pattern detected.';
    }

    // 5. Sequence ascending/descending
    const isAscending = '0123456789012345'.includes(digits) || '1234567890'.includes(digits);
    const isDescending = '9876543210987654'.includes(digits) || '0987654321'.includes(digits);
    if (isAscending || isDescending) {
      return 'Sequential test numbers (e.g. 12345... or 98765...) are not allowed.';
    }

    // 6. Minimum distinct unique digits (at least 4 unique digits for numbers >= 10 digits)
    const uniqueDigits = new Set(digits.split('')).size;
    if (digits.length >= 10 && uniqueDigits < 4) {
      return 'Please enter a genuine phone number with valid digit variation.';
    }

    // 7. Country specific rules
    if (selectedCountry.country === 'India') {
      if (digits.length !== 10) {
        return 'Indian mobile number must be exactly 10 digits.';
      }
      if (!/^[6-9]\d{9}$/.test(digits)) {
        return 'Indian mobile number must start with 6, 7, 8, or 9.';
      }
    } else {
      if (digits.length < selectedCountry.min || digits.length > selectedCountry.max) {
        return `Phone number for ${selectedCountry.country} must be ${selectedCountry.min}–${selectedCountry.max} digits.`;
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

  const handleCountryChange = (countryName: string) => {
    const country = PHONE_COUNTRIES.find((item) => item.country === countryName);
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
    const selectedCountry = PHONE_COUNTRIES.find((item) => item.country === data.phoneCountry);
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

  const validate = (): boolean => {
    const e: FormErrors = {};

    // Full name
    if (!data.fullName.trim()) {
      e.fullName = 'Full name is required.';
    } else if (data.fullName.trim().length < 2) {
      e.fullName = 'Name must be at least 2 characters.';
    }

    // Email
    const emailErr = validateEmailFormat(data.email, data.emailProvider);
    if (emailErr) e.email = emailErr;

    // Phone
    const phoneErr = validatePhoneFormat(data.phone, data.phoneCountry);
    if (phoneErr) e.phone = phoneErr;

    // Position
    if (!data.position) {
      e.position = 'Please select a position.';
    }

    // Experience (Max 25)
    if (!data.experience && data.experience !== '0') {
      e.experience = 'Please enter your years of experience.';
    } else {
      const exp = Number(data.experience);
      if (isNaN(exp) || exp < 0 || exp > 25) {
        e.experience = 'Experience must be between 0 and 25 years.';
      }
    }

    // Qualification
    if (!data.qualification) {
      e.qualification = 'Please select your highest qualification.';
    } else if (data.qualification === 'Other' && !data.otherQualification.trim()) {
      e.otherQualification = 'Please specify your qualification.';
    }

    // Current Country
    if (!data.currentCountry.trim()) {
      e.currentCountry = 'Please select your current country.';
    } else if (data.currentCountry === 'Other' && !data.otherCurrentCountry.trim()) {
      e.otherCurrentCountry = 'Please specify your country name.';
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
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18 || age > 35) {
        e.dateOfBirth = 'Age must be between 18 and 35 years.';
      }
    }

    // Passport
    if (data.hasPassport === null) {
      e.hasPassport = 'Please select Yes or No.';
    } else if (data.hasPassport) {
      const cleanPassport = data.passportNumber.trim().toUpperCase();
      if (!cleanPassport) {
        e.passportNumber = 'Passport number is required.';
      } else if (!/^[A-Z0-9]{6,12}$/.test(cleanPassport)) {
        e.passportNumber = 'Must be 6–12 alphanumeric characters.';
      } else if (data.phoneCountry === 'India' && !/^[A-Z][0-9]{7,8}$/.test(cleanPassport)) {
        e.passportNumber = 'Indian passport format: Letter followed by 7-8 digits (e.g. A1234567).';
      }
    }

    // Resume
    if (!data.resume) {
      e.resume = 'Please upload your Resume / CV.';
    } else {
      if (data.resume.size > MAX_RESUME_SIZE) {
        e.resume = 'File size must be under 5MB.';
      } else {
        const ext = '.' + (data.resume.name.split('.').pop() || '').toLowerCase();
        const typeOk = VALID_RESUME_TYPES.includes(data.resume.type);
        const extOk = VALID_RESUME_EXTS.includes(ext);
        if (!typeOk && !extOk) {
          e.resume = 'Allowed formats: PDF, DOC, DOCX, PNG, JPG.';
        }
      }
    }

    if (Object.keys(e).length > 0) {
      (e as FormErrors)._scrollTo = 'true';
    }

    setErrors(e);
    return Object.keys(e).filter((k) => k !== '_scrollTo').length === 0;
  };

  const handleResumeChange = (file: File | null) => {
    if (file) {
      const ext = '.' + (file.name.split('.').pop() || '').toLowerCase();
      const typeOk = VALID_RESUME_TYPES.includes(file.type);
      const extOk = VALID_RESUME_EXTS.includes(ext);

      if (!typeOk && !extOk) {
        setErrors((p) => ({
          ...p,
          resume: 'Allowed formats: PDF, DOC, DOCX, PNG, JPG.',
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

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    // 24-HOUR LOCK
    const lastSubmittedAt = Number(localStorage.getItem(APPLY_LOCK_KEY) || 0);
    if (lastSubmittedAt && Date.now() - lastSubmittedAt < APPLY_LOCK_MS) {
      const remainingMs = APPLY_LOCK_MS - (Date.now() - lastSubmittedAt);
      const remainingHours = Math.ceil(remainingMs / (60 * 60 * 1000));
      setStatus('error');
      setSubmitError(
        `You have already submitted an application. Please try again after ${remainingHours} hour(s).`
      );
      return;
    }

    if (!validate()) return;

    setStatus('loading');
    setSubmitError('');

    let resumeUrl: string | null = null;

    // Final Email
    let finalEmail = data.email.trim();
    if (data.emailProvider !== 'other') {
      finalEmail = `${data.email.trim()}${data.emailProvider}`;
    }

    // Final Phone
    const phoneDigits = data.phone.replace(/\D/g, '');
    const finalPhone = `${data.phoneCountryCode} ${phoneDigits}`;

    // Upload Resume
    if (data.resume) {
      const safeName = data.fullName.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
      const ts = Date.now();
      const safeFileName = data.resume.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filePath = `${safeName}-${ts}/${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, data.resume);

      if (uploadError) {
        console.warn('Resume storage note:', uploadError.message);
        // Continue with file reference
        resumeUrl = filePath;
      } else {
        resumeUrl = filePath;
      }
    }

    const finalQualification =
      data.qualification === 'Other' ? data.otherQualification.trim() : data.qualification;

    const finalCurrentCountry =
      data.currentCountry === 'Other' ? data.otherCurrentCountry.trim() : data.currentCountry.trim();

    // Insert into Supabase
    const { error } = await supabase.from('applications').insert({
      full_name: data.fullName.trim(),
      email: finalEmail,
      phone: finalPhone,
      position: data.position,
      experience_years: Number(data.experience),
      qualification: finalQualification,
      current_country: finalCurrentCountry,
      nationality: data.nationality.trim(),
      date_of_birth: data.dateOfBirth,
      has_passport: data.hasPassport,
      passport_number: data.hasPassport ? data.passportNumber.trim().toUpperCase() : null,
      resume_url: resumeUrl,
      message: data.message.trim() || null,
      status: 'new',
    });

    if (error) {
      console.error('Supabase application submission error:', error);
      setStatus('error');
      setSubmitError('Something went wrong. Please check your connection and try again.');
      return;
    }

    localStorage.setItem(APPLY_LOCK_KEY, String(Date.now()));
    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050e1f]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto z-10 animate-fadeInUp">
        {/* Executive Header */}
        <div className="relative bg-gradient-to-r from-[#0b192e] via-[#102a54] to-[#0c2242] p-5 sm:p-6 text-white overflow-hidden border-b border-blue-950/40">
          {/* Subtle Glow Background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-white/20 active:scale-95 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-all border border-white/10"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="pr-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Official Candidate Application</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Apply for International Placement
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed max-w-lg">
              Fast-track your overseas career with verified employer sponsorships. Complete your profile for a free eligibility evaluation within 24 to 48 hours.
            </p>
          </div>
        </div>

        {/* Success View */}
        {status === 'success' ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="inline-flex w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full items-center justify-center mb-4 ring-8 ring-emerald-50/60 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
              Application Submitted Successfully!
            </h3>

            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <span className="font-bold text-slate-800">{data.fullName}</span>. Your details and resume have been securely recorded. Our international recruitment officer will review your profile and reach out within 24 to 48 hours.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-md mx-auto mb-6 text-xs text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                Next Steps:
              </p>
              <p>✓ Free European eligibility & qualification check</p>
              <p>✓ Direct call / WhatsApp briefing from Dais World Endeavor team</p>
              <p>✓ Fast-track employer sponsorship & language onboarding</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm px-7 py-3 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form Body */
          <div
            ref={scrollRef}
            className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
          >
            {submitError && (
              <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3.5 text-xs font-semibold flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <Field label="Full Name (as per ID)" icon={User} error={errors.fullName} required>
                  <input
                    type="text"
                    value={data.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={inputCls(!!errors.fullName)}
                  />
                </Field>

                {/* Email with Unified Domain Selector */}
                <Field label="Email Address" icon={Mail} error={errors.email} required>
                  <div
                    className={`flex items-center rounded-xl border bg-slate-50/50 focus-within:bg-white transition-all overflow-hidden ${
                      errors.email
                        ? 'border-rose-300 ring-2 ring-rose-100 bg-rose-50/20'
                        : 'border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <input
                      type={data.emailProvider === 'other' ? 'email' : 'text'}
                      value={data.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      placeholder={
                        data.emailProvider === 'other' ? 'name@domain.com' : 'username'
                      }
                      className="flex-1 min-w-0 px-3.5 py-2.5 text-sm text-slate-900 bg-transparent outline-none"
                    />

                    <div className="h-6 w-[1px] bg-slate-200" />

                    <select
                      value={data.emailProvider}
                      onChange={(e) => handleEmailProviderChange(e.target.value)}
                      className="px-2.5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/70 outline-none cursor-pointer border-none transition-colors"
                    >
                      {EMAIL_PROVIDERS.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </Field>
              </div>

              {/* Row 2: Phone & Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone with Unified Country Flag Selector */}
                <Field label="WhatsApp / Mobile Number" icon={Phone} error={errors.phone} required>
                  <div
                    className={`flex items-center rounded-xl border bg-slate-50/50 focus-within:bg-white transition-all overflow-hidden ${
                      errors.phone
                        ? 'border-rose-300 ring-2 ring-rose-100 bg-rose-50/20'
                        : 'border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100'
                    }`}
                  >
                    <select
                      value={data.phoneCountry}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="max-w-[130px] sm:max-w-[140px] px-2.5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/70 outline-none cursor-pointer truncate border-none transition-colors"
                    >
                      {PHONE_COUNTRIES.map((c) => (
                        <option key={c.country} value={c.country}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>

                    <div className="h-6 w-[1px] bg-slate-200" />

                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      inputMode="numeric"
                      maxLength={
                        PHONE_COUNTRIES.find((item) => item.country === data.phoneCountry)?.max || 15
                      }
                      placeholder={
                        data.phoneCountry === 'India' ? '10-digit number' : 'Phone number'
                      }
                      className="flex-1 min-w-0 px-3.5 py-2.5 text-sm text-slate-900 bg-transparent outline-none"
                    />
                  </div>
                </Field>

                {/* Position */}
                <Field label="Position Applying For" icon={Briefcase} error={errors.position} required>
                  <select
                    value={data.position}
                    onChange={(e) => update('position', e.target.value)}
                    className={inputCls(!!errors.position)}
                  >
                    <option value="">Select a profession</option>
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row 3: Experience & Qualification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Experience */}
                <Field
                  label="Years of Experience (Max 25)"
                  icon={Briefcase}
                  error={errors.experience}
                  required
                >
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      max={25}
                      value={data.experience}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '') {
                          update('experience', '');
                          return;
                        }
                        const num = Number(val);
                        if (!isNaN(num)) {
                          if (num > 25) {
                            update('experience', '25');
                          } else if (num < 0) {
                            update('experience', '0');
                          } else {
                            update('experience', val);
                          }
                        }
                      }}
                      placeholder="e.g. 3"
                      className={inputCls(!!errors.experience) + ' pr-14'}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">
                      Years
                    </span>
                  </div>
                </Field>

                {/* Qualification */}
                <Field
                  label="Highest Qualification"
                  icon={GraduationCap}
                  error={errors.qualification}
                  required
                >
                  <select
                    value={data.qualification}
                    onChange={(e) => {
                      update('qualification', e.target.value);
                      if (e.target.value !== 'Other') {
                        update('otherQualification', '');
                      }
                    }}
                    className={inputCls(!!errors.qualification)}
                  >
                    <option value="">Select qualification</option>
                    {QUALIFICATIONS.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Other Qualification Expansion - Full Width Balanced Card */}
              {data.qualification === 'Other' && (
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/80 to-cyan-50/30 border border-blue-200/80 shadow-2xs animate-fadeIn">
                  <Field
                    label="Please Specify Your Highest Qualification"
                    icon={GraduationCap}
                    error={errors.otherQualification}
                    required
                  >
                    <input
                      type="text"
                      value={data.otherQualification}
                      onChange={(e) => update('otherQualification', e.target.value)}
                      placeholder="Enter your exact qualification (e.g. MBBS, ANM, B.Tech, Master's, etc.)"
                      className={inputCls(!!errors.otherQualification) + ' bg-white'}
                    />
                  </Field>
                </div>
              )}

              {/* Row 4: Current Country & Nationality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Current Country */}
                <Field
                  label="Current Living Country"
                  icon={MapPin}
                  error={errors.currentCountry}
                  required
                >
                  <select
                    value={data.currentCountry}
                    onChange={(e) => {
                      update('currentCountry', e.target.value);
                      if (e.target.value !== 'Other') {
                        update('otherCurrentCountry', '');
                      }
                    }}
                    className={inputCls(!!errors.currentCountry)}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES_LIST.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Nationality */}
                <Field label="Nationality" icon={Flag} error={errors.nationality} required>
                  <input
                    type="text"
                    value={data.nationality}
                    onChange={(e) => update('nationality', e.target.value)}
                    placeholder="e.g. Indian"
                    className={inputCls(!!errors.nationality)}
                  />
                </Field>
              </div>

              {/* Other Country Expansion - Full Width Balanced Card */}
              {data.currentCountry === 'Other' && (
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50/80 to-cyan-50/30 border border-blue-200/80 shadow-2xs animate-fadeIn">
                  <Field
                    label="Please Specify Your Current Living Country"
                    icon={MapPin}
                    error={errors.otherCurrentCountry}
                    required
                  >
                    <input
                      type="text"
                      value={data.otherCurrentCountry}
                      onChange={(e) => update('otherCurrentCountry', e.target.value)}
                      placeholder="Enter your country name (e.g. Maldives, Mauritius, Poland, etc.)"
                      className={inputCls(!!errors.otherCurrentCountry) + ' bg-white'}
                    />
                  </Field>
                </div>
              )}

              {/* Row 5: Date of Birth & Passport */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date of Birth */}
                <Field label="Date of Birth (Age 18–35)" icon={Calendar} error={errors.dateOfBirth} required>
                  <input
                    type="date"
                    value={data.dateOfBirth}
                    onChange={(e) => update('dateOfBirth', e.target.value)}
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
                    className={inputCls(!!errors.dateOfBirth)}
                  />
                </Field>

                {/* Passport Status */}
                <Field label="Do you possess a Valid Passport?" icon={FileCheck} error={errors.hasPassport} required>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => update('hasPassport', true)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        data.hasPassport === true
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                          : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Yes, Valid
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        update('hasPassport', false);
                        update('passportNumber', '');
                      }}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        data.hasPassport === false
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                          : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      No / Applied
                    </button>
                  </div>
                </Field>
              </div>

              {/* Conditional Passport Number */}
              {data.hasPassport && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 animate-fadeIn">
                  <Field label="Passport Number" icon={FileCheck} error={errors.passportNumber} required>
                    <input
                      type="text"
                      value={data.passportNumber}
                      maxLength={12}
                      onChange={(e) =>
                        update(
                          'passportNumber',
                          e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
                        )
                      }
                      placeholder={
                        data.phoneCountry === 'India' ? 'e.g. A1234567' : 'e.g. 123456789'
                      }
                      className={inputCls(!!errors.passportNumber) + ' uppercase font-mono tracking-wider'}
                    />
                  </Field>
                </div>
              )}

              {/* Row 6: Resume Upload */}
              <Field
                label="Upload Resume / CV (PDF, DOCX, PNG — Max 5MB)"
                icon={Upload}
                error={errors.resume}
                required
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleResumeChange(e.target.files?.[0] ?? null)}
                  accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx"
                  className="hidden"
                />

                {data.resume ? (
                  <div className="flex items-center justify-between p-3.5 bg-blue-50/80 border border-blue-300 rounded-xl">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs uppercase flex-shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {data.resume.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {(data.resume.size / 1024).toFixed(0)} KB · Ready for evaluation
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        update('resume', null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="p-1.5 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors flex-shrink-0"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all ${
                      errors.resume
                        ? 'border-rose-400 bg-rose-50/30'
                        : 'border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/20'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      Click to attach your Resume / CV
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      PDF, DOCX, PNG, JPG up to 5MB
                    </p>
                  </div>
                )}
              </Field>

              {/* Row 7: Message (Optional) */}
              <Field label="Additional Message or Notes (Optional)" icon={MessageSquare}>
                <textarea
                  value={data.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={2}
                  placeholder="Any country preference, language proficiency (IELTS/Dutch), or remarks..."
                  className={inputCls(false) + ' resize-none'}
                />
              </Field>

              {/* Submit Section */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Free Credential Assessment · Confidential & GDPR Compliant</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 hover:bg-slate-50/80 focus:bg-white transition-all outline-none ${
    hasError
      ? 'border-rose-300 ring-2 ring-rose-100 bg-rose-50/20'
      : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
  }`;
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
      <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>{label}</span>
        {required && <span className="text-rose-500 font-bold">*</span>}
      </label>

      {children}

      {error && (
        <p className="text-rose-600 text-[11px] font-semibold mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}