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

const POSITIONS = [
  'OR Nurse', 'Registered Nurse (RN)', 'Healthcare Assistant', 'ICU Nurse',
  'Pediatric Nurse', 'Mental Health Nurse', 'Elderly Care Nurse', 'Other',
];

const QUALIFICATIONS = [
  'BSc Nursing', 'GNM', 'BPT', 'MSc Nursing', 'Diploma in Nursing', 'Other',
];

const EMPTY: FormData = {
  fullName: '', email: '', phone: '', position: '', experience: '',
  qualification: '', currentCountry: '', nationality: '', dateOfBirth: '',
  hasPassport: null, passportNumber: '',
  resume: null, message: '',
};

const MAX_RESUME_SIZE = 2 * 1024 * 1024;
const VALID_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const VALID_RESUME_EXTS = ['.pdf', '.doc', '.docx'];

export default function ApplyNowModal({ open, onClose }: ApplyNowModalProps) {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [errors]);

  if (!open) return null;

  const update = (field: keyof FormData, value: string | boolean | null | File) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      delete next._scrollTo;
      return next;
    });
  };

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!data.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!data.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    if (!data.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else {
      const digits = data.phone.replace(/[^\d]/g, '');
      const raw = data.phone.trim();
      if (raw.startsWith('+')) {
        if (digits.length < 8 || digits.length > 15) e.phone = 'Phone must be 8–15 digits.';
      } else {
        if (digits.length < 8 || digits.length > 15) e.phone = 'Phone must be 8–15 digits.';
      }
    }
    if (!data.position) e.position = 'Please select a position.';
    if (!data.experience && data.experience !== '0') {
      e.experience = 'Please enter your years of experience.';
    } else {
      const exp = Number(data.experience);
      if (isNaN(exp) || exp < 0 || exp > 50) e.experience = 'Experience must be between 0 and 50.';
    }
    if (!data.qualification) e.qualification = 'Please select your highest qualification.';
    if (!data.currentCountry.trim()) e.currentCountry = 'Please enter your current country.';
    if (!data.nationality.trim()) e.nationality = 'Please enter your nationality.';
    if (!data.dateOfBirth) {
      e.dateOfBirth = 'Please enter your date of birth.';
    } else {
      const dob = new Date(data.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
      if (age < 18 || age > 60) e.dateOfBirth = 'Age must be between 18 and 60 years.';
    }
    if (data.hasPassport === null) {
      e.hasPassport = 'Please select Yes or No.';
    } else if (data.hasPassport && !data.passportNumber.trim()) {
      e.passportNumber = 'Please enter your passport number.';
    }
    if (!data.resume) {
      e.resume = 'Please upload your resume.';
    } else {
      if (data.resume.size > MAX_RESUME_SIZE) {
        e.resume = 'Resume must be under 2MB.';
      } else {
        const ext = '.' + (data.resume.name.split('.').pop() || '').toLowerCase();
        const typeOk = VALID_RESUME_TYPES.includes(data.resume.type);
        const extOk = VALID_RESUME_EXTS.includes(ext);
        if (!typeOk && !extOk) e.resume = 'Only PDF, DOC, or DOCX files are allowed.';
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
        setErrors((p) => ({ ...p, resume: 'Only PDF, DOC, or DOCX files are allowed.' }));
        return;
      }
      if (file.size > MAX_RESUME_SIZE) {
        setErrors((p) => ({ ...p, resume: 'Resume must be under 2MB.' }));
        return;
      }
    }
    update('resume', file);
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setSubmitError('');

    let resumeUrl: string | null = null;

    if (data.resume) {
      const safeName = data.fullName.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
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

    const { error } = await supabase.from('applications').insert({
      full_name: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
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
      setStatus('error');
      setSubmitError('Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
  };


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050e1f]/80 backdrop-blur-md" onClick={onClose} />

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
            <h2 className="text-2xl font-black text-white">Apply Now</h2>
            <p className="text-white/90 text-sm mt-1">Fill in your details and we'll get back to you within 48 hours.</p>
          </div>

          {status === 'success' ? (
            <div className="p-10 text-center">
              <div className="inline-flex w-16 h-16 bg-emerald-100 rounded-full items-center justify-center mb-4 animate-pulse-ring">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Application Submitted!</h3>
              <p className="text-slate-500 text-sm mb-6">Thank you for applying. Our team will review your application and contact you within 48 hours.</p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div ref={scrollRef} className="p-6 max-h-[70vh] overflow-y-auto scrollbar-hide">
              {submitError && (
                <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3 text-sm font-medium">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" icon={User} error={errors.fullName} required>
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      placeholder="Your full name"
                      className={inputCls(!!errors.fullName)}
                    />
                  </Field>
                  <Field label="Email" icon={Mail} error={errors.email} required>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={inputCls(!!errors.email)}
                    />
                  </Field>
                </div>

                {/* Phone + Position */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone Number" icon={Phone} error={errors.phone} required>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputCls(!!errors.phone)}
                    />
                  </Field>
                  <Field label="Position Applying For" icon={Briefcase} error={errors.position} required>
                    <select
                      value={data.position}
                      onChange={(e) => update('position', e.target.value)}
                      className={inputCls(!!errors.position)}
                    >
                      <option value="">Select a position</option>
                      {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Experience + Qualification */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Years of Experience" icon={Briefcase} error={errors.experience} required>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={data.experience}
                      onChange={(e) => update('experience', e.target.value)}
                      placeholder="0 – 50"
                      className={inputCls(!!errors.experience)}
                    />
                  </Field>
                  <Field label="Highest Qualification" icon={GraduationCap} error={errors.qualification} required>
                    <select
                      value={data.qualification}
                      onChange={(e) => update('qualification', e.target.value)}
                      className={inputCls(!!errors.qualification)}
                    >
                      <option value="">Select qualification</option>
                      {QUALIFICATIONS.map((q) => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Country + Nationality */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Current Country" icon={MapPin} error={errors.currentCountry} required>
                    <input
                      type="text"
                      value={data.currentCountry}
                      onChange={(e) => update('currentCountry', e.target.value)}
                      placeholder="India"
                      className={inputCls(!!errors.currentCountry)}
                    />
                  </Field>
                  <Field label="Nationality" icon={Flag} error={errors.nationality} required>
                    <input
                      type="text"
                      value={data.nationality}
                      onChange={(e) => update('nationality', e.target.value)}
                      placeholder="Indian"
                      className={inputCls(!!errors.nationality)}
                    />
                  </Field>
                </div>

                {/* DOB */}
                <Field label="Date of Birth" icon={Calendar} error={errors.dateOfBirth} required>
                  <input
                    type="date"
                    value={data.dateOfBirth}
                    onChange={(e) => update('dateOfBirth', e.target.value)}
                    max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                    className={inputCls(!!errors.dateOfBirth)}
                  />
                  <p className="text-xs text-slate-400 mt-1">You must be between 18 and 60 years old.</p>
                </Field>

                {/* Passport */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Valid Passport?" icon={FileCheck} error={errors.hasPassport} required>
                    <YesNo
                      value={data.hasPassport}
                      onChange={(v) => { update('hasPassport', v); if (!v) update('passportNumber', ''); }}
                    />
                  </Field>
                  {data.hasPassport && (
                    <Field label="Passport Number" icon={FileCheck} error={errors.passportNumber} required>
                      <input
                        type="text"
                        value={data.passportNumber}
                        onChange={(e) => update('passportNumber', e.target.value)}
                        placeholder="Passport number"
                        className={inputCls(!!errors.passportNumber)}
                      />
                    </Field>
                  )}
                </div>

                {/* Resume */}
                <Field label="Resume Upload (PDF/DOC/DOCX, max 2MB)" icon={Upload} error={errors.resume} required>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Upload className="w-5 h-5" />
                    </div>
                    {data.resume ? (
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium truncate">{data.resume.name}</span>
                        <span className="text-xs text-slate-400">({(data.resume.size / 1024).toFixed(0)} KB)</span>
                      </div>
                    ) : (
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-500">Click to upload your resume</p>
                        <p className="text-xs text-slate-400">PDF, DOC, or DOCX — max 2MB</p>
                      </div>
                    )}
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => handleResumeChange(e.target.files?.[0] ?? null)} />
                  </label>
                </Field>

                {/* Message */}
                <Field label="Additional Message (optional)" icon={MessageSquare}>
                  <textarea
                    value={data.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={3}
                    placeholder="Anything else you'd like us to know?"
                    className={inputCls(false) + ' resize-none'}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-4 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Application <ArrowRight className="w-5 h-5" /></>
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

function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 rounded-2xl border ${hasError ? 'border-rose-300 bg-rose-50/50' : 'border-slate-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm`;
}

function Field({
  label, icon: Icon, error, required, children,
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
        {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
      {error && <p className="text-rose-600 text-xs font-medium mt-1.5">{error}</p>}
    </div>
  );
}

function YesNo({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
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
        className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
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
