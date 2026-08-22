import { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, Calendar, Send, CheckCircle, Loader2,
  User, Clock, Facebook, Instagram, Youtube, ArrowRight, Navigation,
  Globe, Sparkles, Heart, Users, Zap,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { countries } from '@/data/countries';

const professions = ['Registered Nurse', 'OT Nurse', 'Healthcare Assistant'];

const quickCards = [
  {
    icon: Phone, label: 'Call', value: '8976697001', sub: 'Mon–Sat, 11am–8pm IST',
    href: 'tel:8976697001', color: 'from-blue-600 to-blue-500',
  },
  {
    icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', sub: 'Quick replies',
    href: 'https://wa.me/918976697001', color: 'from-emerald-600 to-emerald-500',
  },
  {
    icon: Mail, label: 'Email', value: 'aditya.s@daisworld.com', sub: 'Reply within 24h',
    href: 'mailto:aditya.s@daisworld.com', color: 'from-cyan-600 to-cyan-500',
  },
  {
    icon: Calendar, label: 'Book Consultation', value: 'Schedule a call', sub: 'Free 30-min session',
    href: 'https://wa.me/918976697001?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation.', color: 'from-amber-500 to-orange-500',
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1DYs7V9D6o/', hover: 'hover:bg-blue-600' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dais_world_?igsh=a3ljcDFhamh3cjRr', hover: 'hover:bg-pink-600' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@DaisWorld-d2y', hover: 'hover:bg-red-600' },
];

const trustStats = [
  { icon: Users, value: '500+', label: 'Nurses Placed' },
  { icon: Globe, value: '10+', label: 'Countries' },
  { icon: Heart, value: '100%', label: 'Support' },
  { icon: Zap, value: '48h', label: 'Response' },
];

export default function ContactPage() {
  const { ref: heroRef, visible: heroVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: formRef, visible: formVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: statsRef, visible: statsVisible } = useScrollReveal<HTMLDivElement>();

  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', profession: '', country: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const payload = {
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      profession: form.profession,
      country: form.country,
    };

    if (!payload.full_name || !payload.email || !payload.phone || !payload.profession || !payload.country) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({ full_name: '', email: '', phone: '', profession: '', country: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-blue-900 to-cyan-800">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-3xl animate-float-delay" />
        <div
          ref={heroRef}
          className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <p className="text-cyan-300 font-semibold text-sm uppercase tracking-widest">
              Let's Talk
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            We're Here to <span className="text-gradient-gold">Help You</span> Succeed
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We're here to help you start your overseas healthcare career. Get in touch with our
            team for guidance and support.
          </p>

          {/* Trust stats */}
          <div
            ref={statsRef}
            className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <Icon className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCards.map(({ icon: Icon, label, value, sub, href, color }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-3xl p-7 shadow-lg shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-2 border border-blue-50"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${color} items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
                <p className="text-slate-900 font-black text-lg mb-1 break-words">{value}</p>
                <p className="text-slate-400 text-xs">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info column */}
            <div className="lg:col-span-2">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Contact Information
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                Reach Out to <span className="text-gradient">Our Team</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Whether you have a question about the process, salaries, or want to start your
                application — we're just a message away.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:8976697001"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Phone</p>
                    <p className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">8976697001</p>
                  </div>
                </a>

                <a
                  href="mailto:aditya.s@diasworld.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-50 group-hover:bg-cyan-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Email</p>
                    <p className="text-slate-900 font-bold group-hover:text-cyan-600 transition-colors break-all">
                      aditya.s@daisworld.com/sanchit.r@daisworld.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Address</p>
                    <p className="text-slate-900 font-bold">1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Hours</p>
                    <p className="text-slate-900 font-bold">Mon – Sat · 11:00 AM – 8:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, label, href, hover }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-11 h-11 bg-slate-100 ${hover} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 text-slate-700 hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form column */}
            <div ref={formRef} className={`lg:col-span-3 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {status === 'success' ? (
                <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-12 text-center shadow-xl border border-emerald-100">
                  <div className="inline-flex w-20 h-20 bg-emerald-100 rounded-full items-center justify-center mb-6 animate-pulse-ring">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                    Your message has been submitted successfully!
                  </h3>
                  <p className="text-slate-600 text-lg mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-colors"
                  >
                    Send Another Message <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Send us a message</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Fill in the details below and we'll be in touch shortly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <div className="relative group">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
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

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
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

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                      <div className="relative group">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
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

                    {/* Profession */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Profession *</label>
                      <select
                        name="profession"
                        value={form.profession}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 bg-white"
                      >
                        <option value="">Select profession</option>
                        {professions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Country Interested In *
                      </label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 bg-white"
                      >
                        <option value="">Select country</option>
                        {countries.map((c) => (
                          <option key={c.slug} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-5 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl p-4 text-sm font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-4 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Find Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Our <span className="text-gradient">Location</span>
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-200 border border-white">
            <iframe
              title="DIAS WORLD — Malad West, Mumbai"
              src="https://www.google.com/maps?q=Malad+West,+Mumbai,+Maharashtra&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Malad+West+Mumbai+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Navigation className="w-5 h-5" /> Get Directions
            </a>
            <a
              href="tel:8976697001"
              className="flex items-center justify-center gap-2 bg-white text-slate-700 font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-blue-600" /> Call the Office
            </a>
            <a
              href="https://wa.me/918976697001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-slate-700 font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
