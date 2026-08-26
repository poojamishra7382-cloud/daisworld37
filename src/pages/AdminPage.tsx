import { useState, useEffect, useCallback } from 'react';
import {
  Lock, LogOut, Loader2, Download, Search, Eye, EyeOff, Trash2, X,
  User, Mail, Phone, MapPin, Flag, Briefcase, GraduationCap,
  Calendar, FileCheck, FileText, MessageSquare, ShieldCheck, AlertCircle,
  ChevronLeft, ChevronRight, Inbox, Filter, CheckCircle, Building2, RotateCcw,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type AdminView = 'login' | 'dashboard';

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string | null;
  experience_years: number | null;
  qualification: string | null;
  current_country: string | null;
  nationality: string | null;
  date_of_birth: string | null;
  has_passport: boolean | null;
  passport_number: string | null;
  resume_url: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { value: 'reviewed', label: 'Reviewed', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { value: 'contacted', label: 'Contacted', color: 'bg-violet-100 text-violet-700 border-violet-200' },
  { value: 'hired', label: 'Hired', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { value: 'rejected', label: 'Rejected', color: 'bg-rose-100 text-rose-700 border-rose-200' },
];

const PAGE_SIZE = 10;
const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 300; // 5 minutes

export default function AdminPage() {
  const [view, setView] = useState<AdminView>('login');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setView('dashboard');
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050e1f] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (view === 'dashboard') {
    return <Dashboard onLogout={() => setView('login')} />;
  }

  return <LoginScreen onSuccess={() => setView('dashboard')} />;
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);

  // Check lockout on mount
  useEffect(() => {
    try {
      const storedLockout = sessionStorage.getItem('dais_admin_lockout');
      if (storedLockout) {
        const remaining = Math.ceil((parseInt(storedLockout, 10) - Date.now()) / 1000);
        if (remaining > 0) {
          setLockoutRemaining(remaining);
        } else {
          sessionStorage.removeItem('dais_admin_lockout');
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutRemaining <= 0) return;
    const timer = setInterval(() => {
      setLockoutRemaining((prev) => {
        if (prev <= 1) {
          try {
            sessionStorage.removeItem('dais_admin_lockout');
          } catch {
            // ignore
          }
          setAttempts(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [lockoutRemaining]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutRemaining > 0) return;

    setError('');
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (authError) {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);

      if (nextAttempts >= MAX_ATTEMPTS) {
        const unlockTime = Date.now() + LOCKOUT_SECONDS * 1000;
        try {
          sessionStorage.setItem('dais_admin_lockout', unlockTime.toString());
        } catch {
          // ignore
        }
        setLockoutRemaining(LOCKOUT_SECONDS);
        setError(`Security Lockout: Too many failed login attempts (${nextAttempts}/${MAX_ATTEMPTS}). Login is locked for 5 minutes.`);
      } else {
        const remainingAttempts = MAX_ATTEMPTS - nextAttempts;
        setError(
          `Invalid email or password. (${remainingAttempts} attempt${
            remainingAttempts === 1 ? '' : 's'
          } remaining before temporary security lock)`
        );
      }
      setLoading(false);
      return;
    }

    // Reset attempts on successful login
    setAttempts(0);
    try {
      sessionStorage.removeItem('dais_admin_lockout');
    } catch {
      // ignore
    }
    onSuccess();
  };

  const isLocked = lockoutRemaining > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050e1f] via-blue-950 to-cyan-950 flex items-center justify-center p-4">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-8 text-center text-white">
            <div className="inline-flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight">
              DAIS WORLD Admin Portal
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-1">
              Authorized Administrative Access Only
            </p>
          </div>

          <div className="p-7 sm:p-8">
            {/* Security Alert if locked */}
            {isLocked ? (
              <div className="mb-5 bg-rose-50 border-2 border-rose-300 text-rose-800 rounded-2xl p-4 text-xs font-semibold text-center">
                <AlertCircle className="w-6 h-6 text-rose-600 mx-auto mb-1.5" />
                <p className="font-bold text-sm text-rose-900">Portal Temporarily Locked</p>
                <p className="mt-1">
                  Too many consecutive failed attempts. For your security, please wait:
                </p>
                <p className="text-lg font-black text-rose-700 mt-2 font-mono">
                  {Math.floor(lockoutRemaining / 60)}:
                  {(lockoutRemaining % 60).toString().padStart(2, '0')}
                </p>
              </div>
            ) : error ? (
              <div className="mb-5 flex items-start gap-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3.5 text-xs font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    disabled={isLocked || loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@daisworld.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    disabled={isLocked || loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || isLocked}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Verifying Credentials...
                  </>
                ) : isLocked ? (
                  <>
                    <Lock className="w-4 h-4" /> Locked ({lockoutRemaining}s)
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Secure Admin Login
                  </>
                )}
              </button>
            </form>

            {/* Official Security Disclaimer - No signup link */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Restricted Portal · Public Registration Disabled</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2">
                All login attempts are securely recorded. Unauthorized access attempts are prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'candidates' | 'partnerships'>('all');
  const [selected, setSelected] = useState<Application | null>(null);
  const [page, setPage] = useState(0);
  const [downloading, setDownloading] = useState<string | null>(null);

  const loadApps = useCallback(async () => {
    setLoading(true);
    setError('');
    let allApps: Application[] = [];

    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        allApps = data as Application[];
      }
    } catch (e) {
      console.warn('Supabase fetch note:', e);
    }

    // Merge local storage partnership inquiries
    try {
      const localLeads = JSON.parse(localStorage.getItem('daisworld_partnership_leads') || '[]');
      localLeads.forEach((lead: any) => {
        if (!allApps.some((a) => a.email === lead.email && a.position?.includes('Partnership'))) {
          allApps.unshift({
            id: lead.id || 'lead-' + Date.now(),
            full_name: `${lead.companyName} (Contact: ${lead.contactPerson})`,
            email: lead.email,
            phone: lead.phone,
            position: `🏢 B2B Partnership: ${lead.partnershipType}`,
            current_country: lead.country || 'International',
            qualification: `Industry: ${lead.industry}`,
            experience_years: null,
            nationality: null,
            date_of_birth: null,
            has_passport: null,
            passport_number: null,
            resume_url: null,
            message: `Positions Count: ${lead.positionsCount}\nIndustry: ${lead.industry}\nPartnership Type: ${lead.partnershipType}\nCountry: ${lead.country}\nNotes: ${lead.message}`,
            status: lead.status || 'new',
            created_at: lead.submittedAt || new Date().toISOString(),
          });
        }
      });
    } catch (e) {
      console.warn('Local lead note:', e);
    }

    setApps(allApps);
    setLoading(false);
  }, []);

  useEffect(() => { loadApps(); }, [loadApps]);

  // Extract unique countries from submissions
  const availableCountries = Array.from(
    new Set(
      apps
        .map((a) => a.current_country?.trim())
        .filter((c): c is string => Boolean(c))
    )
  ).sort((a, b) => a.localeCompare(b));

  // Extract unique positions from submissions
  const availablePositions = Array.from(
    new Set(
      apps
        .map((a) => a.position?.trim())
        .filter((p): p is string => Boolean(p))
    )
  ).sort((a, b) => a.localeCompare(b));

  const filtered = apps.filter((a) => {
    const isPartnership = a.position?.includes('Partnership');
    const matchesType =
      typeFilter === 'all' ||
      (typeFilter === 'partnerships' && isPartnership) ||
      (typeFilter === 'candidates' && !isPartnership);

    const matchesSearch = !search ||
      a.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase()) ||
      a.phone?.includes(search) ||
      a.position?.toLowerCase().includes(search.toLowerCase()) ||
      a.current_country?.toLowerCase().includes(search.toLowerCase()) ||
      a.qualification?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === 'all' || a.status === statusFilter;

    const matchesCountry =
      countryFilter === 'all' ||
      (a.current_country && a.current_country.trim().toLowerCase() === countryFilter.toLowerCase());

    const matchesPosition =
      positionFilter === 'all' ||
      (a.position && a.position.trim().toLowerCase() === positionFilter.toLowerCase());

    return matchesType && matchesSearch && matchesStatus && matchesCountry && matchesPosition;
  });

  const hasActiveFilters =
    search !== '' ||
    statusFilter !== 'all' ||
    countryFilter !== 'all' ||
    positionFilter !== 'all';

  const resetFilters = () => {
    setSearch('');
    setStatusFilter('all');
    setCountryFilter('all');
    setPositionFilter('all');
    setPage(0);
  };

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await supabase.from('applications').update({ status }).eq('id', id);
    } catch (e) {
      console.warn('Status update note:', e);
    }
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this application? This cannot be undone.')) return;
    const { error } = await supabase.from('applications').delete().eq('id', id);
    if (error) return;
    setApps((prev) => prev.filter((a) => a.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const handleDownload = async (app: Application) => {
    if (!app.resume_url) return;
    setDownloading(app.id);
    const { data, error } = await supabase.storage
      .from('resumes')
      .download(app.resume_url);
    if (error || !data) {
      setDownloading(null);
      alert('Could not download resume. Please try again.');
      return;
    }
    const url = URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    const fileName = app.resume_url.split('/').pop() || 'resume';
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloading(null);
  };

  const stats = {
    total: apps.length,
    new: apps.filter((a) => a.status === 'new').length,
    reviewed: apps.filter((a) => a.status === 'reviewed').length,
    contacted: apps.filter((a) => a.status === 'contacted').length,
    hired: apps.filter((a) => a.status === 'hired').length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#050e1f] via-[#071938] to-blue-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-lg">Admin Dashboard</h1>
              <p className="text-white/60 text-xs">Dais World Endeavor — Candidate & B2B Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Shareable Form Link Quick Action */}
            <a
              href="/form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600/60 hover:bg-blue-600 border border-blue-400/30 text-white font-bold px-3.5 py-2 rounded-xl transition-all text-xs"
              title="Open standalone candidate form"
            >
              <span>View Form (/form)</span>
            </a>

            <button
              type="button"
              onClick={() => {
                const link = window.location.origin + '/form';
                navigator.clipboard.writeText(link);
                alert('Candidate Form Link copied to clipboard!\n\n' + link);
              }}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3.5 py-2 rounded-xl transition-all text-xs"
            >
              <span>📋 Copy Link</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const link = window.location.origin + '/form';
                const text = `Hi, please fill out the official Dais World Overseas Candidate Registration Form here: ${link}`;
                window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-2 rounded-xl transition-all text-xs shadow-xs"
            >
              <span>WhatsApp Link</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-rose-600/80 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-xl transition-colors text-xs"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {[
            { label: 'Total Inquiries', value: stats.total, color: 'from-blue-600 to-blue-500' },
            { label: 'New / Unread', value: stats.new, color: 'from-sky-600 to-sky-500' },
            { label: 'Reviewed', value: stats.reviewed, color: 'from-amber-500 to-orange-500' },
            { label: 'Contacted', value: stats.contacted, color: 'from-violet-600 to-purple-500' },
            { label: 'Hired / Partnered', value: stats.hired, color: 'from-emerald-600 to-emerald-500' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <div className={`inline-flex w-10 h-10 rounded-xl bg-gradient-to-br ${color} items-center justify-center text-white mb-3 shadow-md`}>
                <Inbox className="w-5 h-5" />
              </div>
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Category Tabs: All vs Candidates vs Corporate Partnerships */}
        <div className="flex flex-wrap items-center gap-2 mb-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
          <button
            type="button"
            onClick={() => { setTypeFilter('all'); setPage(0); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              typeFilter === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Submissions ({apps.length})
          </button>

          <button
            type="button"
            onClick={() => { setTypeFilter('candidates'); setPage(0); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              typeFilter === 'candidates'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>👨‍⚕️ Candidates / Job Seekers</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-800">
              {apps.filter((a) => !a.position?.includes('Partnership')).length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setTypeFilter('partnerships'); setPage(0); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              typeFilter === 'partnerships'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🏢 B2B & Housing Partnerships</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-black">
              {apps.filter((a) => a.position?.includes('Partnership')).length}
            </span>
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="relative lg:col-span-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(0); }}
                placeholder="Search name, email, phone, details..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-xs sm:text-sm text-slate-900 placeholder:text-slate-400"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => { setSearch(''); setPage(0); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Country Filter Dropdown */}
            <div className="relative lg:col-span-3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" />
              <select
                value={countryFilter}
                onChange={(e) => { setCountryFilter(e.target.value); setPage(0); }}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-xs sm:text-sm text-slate-900 bg-white appearance-none cursor-pointer truncate"
              >
                <option value="all">🌍 All Countries ({apps.length})</option>
                {availableCountries.map((c) => {
                  const count = apps.filter((a) => a.current_country?.trim().toLowerCase() === c.toLowerCase()).length;
                  return (
                    <option key={c} value={c}>
                      {c} ({count})
                    </option>
                  );
                })}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>

            {/* Position Filter Dropdown */}
            <div className="relative lg:col-span-3">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500 pointer-events-none" />
              <select
                value={positionFilter}
                onChange={(e) => { setPositionFilter(e.target.value); setPage(0); }}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-xs sm:text-sm text-slate-900 bg-white appearance-none cursor-pointer truncate"
              >
                <option value="all">💼 All Positions ({apps.length})</option>
                {availablePositions.map((p) => {
                  const count = apps.filter((a) => a.position?.trim().toLowerCase() === p.toLowerCase()).length;
                  return (
                    <option key={p} value={p}>
                      {p} ({count})
                    </option>
                  );
                })}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>

            {/* Status Filter Dropdown */}
            <div className="relative lg:col-span-2">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(0); }}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-xs sm:text-sm text-slate-900 bg-white appearance-none cursor-pointer truncate"
              >
                <option value="all">All Status</option>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Active Filter Chips & Clear All */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-semibold">
                Showing <strong className="text-slate-900 font-bold">{filtered.length}</strong> of {apps.length} submissions
              </span>

              {countryFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  <span>Country: <strong>{countryFilter}</strong></span>
                  <button
                    type="button"
                    onClick={() => { setCountryFilter('all'); setPage(0); }}
                    className="ml-1 hover:text-blue-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}

              {positionFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                  <Briefcase className="w-3 h-3 text-indigo-500" />
                  <span>Position: <strong className="truncate max-w-[200px]">{positionFilter}</strong></span>
                  <button
                    type="button"
                    onClick={() => { setPositionFilter('all'); setPage(0); }}
                    className="ml-1 hover:text-indigo-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}

              {statusFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                  <Filter className="w-3 h-3 text-amber-500" />
                  <span>Status: <strong>{STATUS_OPTIONS.find((s) => s.value === statusFilter)?.label}</strong></span>
                  <button
                    type="button"
                    onClick={() => { setStatusFilter('all'); setPage(0); }}
                    className="ml-1 hover:text-amber-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}

              {search && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                  <Search className="w-3 h-3 text-slate-500" />
                  <span>Search: "<strong>{search}</strong>"</span>
                  <button
                    type="button"
                    onClick={() => { setSearch(''); setPage(0); }}
                    className="ml-1 hover:text-slate-900 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-bold hover:underline py-1 px-2 rounded-lg hover:bg-rose-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 flex items-start gap-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-4 text-sm font-medium">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : paged.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-400 font-semibold">No submissions found in this category.</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Company / Applicant</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Type / Position</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Country</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
                      <th className="text-right px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {paged.map((app) => {
                      const isPartnership = app.position?.includes('Partnership');
                      return (
                        <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm ${
                                  isPartnership
                                    ? 'bg-gradient-to-br from-indigo-600 to-cyan-500'
                                    : 'bg-gradient-to-br from-blue-500 to-cyan-400'
                                }`}
                              >
                                {isPartnership ? (
                                  <Building2 className="w-5 h-5" />
                                ) : (
                                  app.full_name?.charAt(0).toUpperCase() || '?'
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-slate-900 text-sm truncate">{app.full_name}</p>
                                  {isPartnership && (
                                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-bold">
                                      Corporate Lead
                                    </span>
                                  )}
                                </div>
                                <p className="text-slate-400 text-xs truncate">{app.email} • {app.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 hidden md:table-cell">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                              isPartnership ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'text-slate-700'
                            }`}>
                              {app.position || '—'}
                            </span>
                          </td>
                          <td className="px-5 py-4 hidden lg:table-cell">
                            <span className="text-sm text-slate-700">{app.current_country || '—'}</span>
                          </td>
                          <td className="px-5 py-4">
                            <select
                              value={app.status}
                              onChange={(e) => handleStatusChange(app.id, e.target.value)}
                              className={`text-xs font-bold px-3 py-1.5 rounded-lg border outline-none cursor-pointer appearance-none ${STATUS_OPTIONS.find((s) => s.value === app.status)?.color || STATUS_OPTIONS[0].color}`}
                            >
                              {STATUS_OPTIONS.map((s) => (
                                <option key={s.value} value={s.value}>{s.label}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-5 py-4 hidden sm:table-cell">
                            <span className="text-sm text-slate-500">
                              {new Date(app.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center justify-end gap-2">
                              {app.resume_url && (
                                <button
                                  onClick={() => handleDownload(app)}
                                  disabled={downloading === app.id}
                                  title="Download Resume"
                                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors disabled:opacity-50"
                                >
                                  {downloading === app.id ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <Download className="w-4 h-4" />
                                  )}
                                </button>
                              )}
                              <button
                                onClick={() => setSelected(app)}
                                title="View Details"
                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(app.id)}
                                title="Delete"
                                className="w-9 h-9 flex items-center justify-center rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-slate-500">
                  Showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, filtered.length)} of {filtered.length}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                    disabled={page >= pageCount - 1}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Detail modal */}
      {selected && (
        <DetailModal
          app={selected}
          onClose={() => setSelected(null)}
          onDownload={handleDownload}
          downloading={downloading === selected.id}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}

function DetailModal({
  app, onClose, onDownload, downloading, onStatusChange,
}: {
  app: Application;
  onClose: () => void;
  onDownload: (app: Application) => void;
  downloading: boolean;
  onStatusChange: (id: string, status: string) => void;
}) {
  const isPartnership = app.position?.includes('Partnership');

  const infoItems = isPartnership
    ? [
        { icon: Building2, label: 'Company & Contact', value: app.full_name },
        { icon: Mail, label: 'Official Email', value: app.email },
        { icon: Phone, label: 'Direct Phone / WhatsApp', value: app.phone },
        { icon: Briefcase, label: 'Partnership Scope', value: app.position },
        { icon: GraduationCap, label: 'Industry Sector', value: app.qualification },
        { icon: MapPin, label: 'Operating Country / City', value: app.current_country },
      ].filter((i) => i.value)
    : [
        { icon: User, label: 'Full Name', value: app.full_name },
        { icon: Mail, label: 'Email', value: app.email },
        { icon: Phone, label: 'Phone', value: app.phone },
        { icon: Briefcase, label: 'Position', value: app.position },
        { icon: Briefcase, label: 'Experience', value: app.experience_years != null ? `${app.experience_years} years` : null },
        { icon: GraduationCap, label: 'Qualification', value: app.qualification },
        { icon: MapPin, label: 'Current Country', value: app.current_country },
        { icon: Flag, label: 'Nationality', value: app.nationality },
        { icon: Calendar, label: 'Date of Birth', value: app.date_of_birth },
        { icon: FileCheck, label: 'Has Passport', value: app.has_passport === true ? 'Yes' : app.has_passport === false ? 'No' : null },
        { icon: FileCheck, label: 'Passport Number', value: app.passport_number },
      ].filter((i) => i.value);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-[#050e1f]/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl animate-fadeInUp max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto scrollbar-hide my-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className={`relative p-5 sm:p-6 ${
            isPartnership
              ? 'bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600'
              : 'bg-gradient-to-br from-blue-600 to-cyan-500'
          }`}>
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-inner flex-shrink-0">
                {isPartnership ? (
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                ) : (
                  app.full_name?.charAt(0).toUpperCase() || '?'
                )}
              </div>
              <div className="min-w-0 pr-6">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <h2 className="text-lg sm:text-xl font-black text-white truncate">{app.full_name}</h2>
                  {isPartnership && (
                    <span className="px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                      B2B Lead
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-xs sm:text-sm font-medium mt-0.5 truncate">{app.position || 'Applicant'}</p>
                <p className="text-white/65 text-[10px] sm:text-xs mt-0.5">
                  Received on {new Date(app.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
                    <p className="text-slate-900 font-bold text-sm break-words">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {app.message && (
              <div className="mb-6 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  {isPartnership ? 'Partnership & Housing Requirements' : 'Candidate Message'}
                </p>
                <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-line">{app.message}</p>
              </div>
            )}

            {app.resume_url && (
              <div className="mb-6 flex items-center gap-3 bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-emerald-700 font-bold text-sm">Resume Available</p>
                  <p className="text-emerald-600/70 text-xs truncate">{app.resume_url.split('/').pop()}</p>
                </div>
                <button
                  onClick={() => onDownload(app)}
                  disabled={downloading}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl transition-colors text-sm disabled:opacity-50"
                >
                  {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  Download
                </button>
              </div>
            )}

            <div className="mb-6">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Update Lead / Application Status
              </p>
              <div className="flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => onStatusChange(app.id, s.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                      app.status === s.value
                        ? s.color + ' ring-2 ring-offset-1 ring-current'
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`mailto:${app.email}`}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-2xl transition-colors text-sm shadow-md"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a
                href={`tel:${app.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-2xl transition-colors text-sm shadow-md"
              >
                <Phone className="w-4 h-4" /> Call / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
