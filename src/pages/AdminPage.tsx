import { useState, useEffect, useCallback } from 'react';
import {
  Lock, LogOut, Loader2, Download, Search, Eye, Trash2, X,
  User, Mail, Phone, MapPin, Flag, Briefcase, GraduationCap,
  Calendar, FileCheck, FileText, MessageSquare, ShieldCheck, AlertCircle,
  ChevronLeft, ChevronRight, Inbox, Filter, CheckCircle,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type AdminView = 'login' | 'signup' | 'dashboard';

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

  return <AuthScreen view={view} onView={setView} onSuccess={() => setView('dashboard')} />;
}

function AuthScreen({
  view, onView, onSuccess,
}: {
  view: AdminView;
  onView: (v: AdminView) => void;
  onSuccess: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (view === 'signup') {
      if (password !== confirm) {
        setError('Passwords do not match.');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        setLoading(false);
        return;
      }
      const { error } = await supabase.auth.signUp({ email: email.trim(), password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      onSuccess();
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050e1f] via-blue-950 to-cyan-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="relative w-full max-w-md animate-fadeInUp">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-center">
            <div className="inline-flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center mb-4 backdrop-blur-sm">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white">
              {view === 'signup' ? 'Create Admin Account' : 'Admin Login'}
            </h1>
            <p className="text-white/80 text-sm mt-1">
              {view === 'signup'
                ? 'Set up your email & password to access applications'
                : 'Sign in to manage job applications'}
            </p>
          </div>

          <div className="p-8">
            {error && (
              <div className="mb-5 flex items-start gap-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@knooviq.com"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm"
                  />
                </div>
              </div>

              {view === 'signup' && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-3.5 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Please wait...</>
                ) : view === 'signup' ? (
                  <>Create Account</>
                ) : (
                  <>Sign In</>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              {view === 'signup' ? (
                <>Already have an account?{' '}
                  <button onClick={() => onView('login')} className="text-blue-600 font-bold hover:underline">
                    Sign in
                  </button>
                </>
              ) : (
                <>First time?{' '}
                  <button onClick={() => onView('signup')} className="text-blue-600 font-bold hover:underline">
                    Create admin account
                  </button>
                </>
              )}
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
  const [selected, setSelected] = useState<Application | null>(null);
  const [page, setPage] = useState(0);
  const [downloading, setDownloading] = useState<string | null>(null);

  const loadApps = useCallback(async () => {
    setLoading(true);
    setError('');
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      setError('Failed to load applications.');
      setLoading(false);
      return;
    }
    setApps((data as Application[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => { loadApps(); }, [loadApps]);

  const filtered = apps.filter((a) => {
    const matchesSearch = !search ||
      a.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase()) ||
      a.phone?.includes(search) ||
      a.position?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const handleStatusChange = async (id: string, status: string) => {
    const { error } = await supabase.from('applications').update({ status }).eq('id', id);
    if (error) return;
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
      <header className="sticky top-0 z-30 bg-gradient-to-r from-[#050e1f] to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-lg">Admin Dashboard</h1>
              <p className="text-white/60 text-xs">Knooviq Overseas — Applications</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, color: 'from-blue-600 to-blue-500' },
            { label: 'New', value: stats.new, color: 'from-sky-600 to-sky-500' },
            { label: 'Reviewed', value: stats.reviewed, color: 'from-amber-500 to-orange-500' },
            { label: 'Contacted', value: stats.contacted, color: 'from-violet-600 to-purple-500' },
            { label: 'Hired', value: stats.hired, color: 'from-emerald-600 to-emerald-500' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <div className={`inline-flex w-10 h-10 rounded-xl bg-gradient-to-br ${color} items-center justify-center text-white mb-3`}>
                <Inbox className="w-5 h-5" />
              </div>
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              placeholder="Search by name, email, phone, or position..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(0); }}
              className="pl-11 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 bg-white appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
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
            <p className="text-slate-400 font-semibold">No applications found.</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Applicant</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Position</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Country</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
                      <th className="text-right px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {paged.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {app.full_name?.charAt(0).toUpperCase() || '?'}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 text-sm truncate">{app.full_name}</p>
                              <p className="text-slate-400 text-xs truncate">{app.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 hidden md:table-cell">
                          <span className="text-sm text-slate-700">{app.position || '—'}</span>
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
                    ))}
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
  const infoItems = [
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050e1f]/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl animate-fadeInUp max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-2xl">
                {app.full_name?.charAt(0).toUpperCase() || '?'}
              </div>
              <div>
                <h2 className="text-xl font-black text-white">{app.full_name}</h2>
                <p className="text-white/80 text-sm">{app.position || 'Applicant'}</p>
                <p className="text-white/60 text-xs mt-1">
                  Applied on {new Date(app.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
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
              <div className="mb-6 bg-slate-50 rounded-2xl p-4">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">{app.message}</p>
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
                <CheckCircle className="w-4 h-4" /> Status
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
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-2xl transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href={`tel:${app.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-2xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
