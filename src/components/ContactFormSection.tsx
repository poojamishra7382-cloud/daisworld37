import { useState } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const qualifications = ['BSc Nursing', 'GNM', 'BPT', 'Other'];
const roles = ['Operation Room Nurse', 'Healthcare Assistant', 'Registered Nurse', 'Not sure yet'];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    qualification: '',
    experience_years: '',
    preferred_role: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const payload = {
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      qualification: form.qualification,
      experience_years: form.experience_years ? parseInt(form.experience_years, 10) : null,
      preferred_role: form.preferred_role || null,
      message: form.message.trim() || null,
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.qualification) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const { error } = await supabase.from('applications').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({ full_name: '', email: '', phone: '', qualification: '', experience_years: '', preferred_role: '', message: '' });
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-[#f0f6ff]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-emerald-100">
            <div className="inline-flex w-20 h-20 bg-emerald-100 rounded-full items-center justify-center mb-6 animate-pulse-ring">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-3">Application Received!</h3>
            <p className="text-slate-600 text-lg mb-6">
              Thank you for applying. Our team will review your profile and contact you within 48 hours.
            </p>
            <p className="text-slate-400 text-sm mb-8">For urgent queries, call us at <strong className="text-blue-600">8788631659</strong>.</p>
            <button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#f0f6ff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Apply Now</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Start Your <span className="text-gradient">Application</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Fill out the form below. Our team will contact you within 48 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile number"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Qualification */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Qualification *</label>
              <select
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 bg-white"
              >
                <option value="">Select qualification</option>
                {qualifications.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Years of Experience</label>
              <input
                type="number"
                name="experience_years"
                value={form.experience_years}
                onChange={handleChange}
                min="0"
                max="40"
                placeholder="e.g. 3"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900"
              />
            </div>

            {/* Preferred Role */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Role</label>
              <select
                name="preferred_role"
                value={form.preferred_role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 bg-white"
              >
                <option value="">Select a role</option>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about yourself, your questions, or anything else..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 resize-none"
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="mb-5 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl p-4 text-sm font-medium">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-4 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>

          <p className="text-center text-slate-400 text-xs mt-4">
            By submitting, you agree to be contacted by Knooviq Overseas regarding your application.
          </p>
        </form>
      </div>
    </section>
  );
}
