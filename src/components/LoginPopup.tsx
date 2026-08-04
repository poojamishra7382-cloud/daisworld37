import { useState, useEffect, useRef } from 'react';
import { X, Mail, Lock, User, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const SHOW_INTERVAL = 30000;
const MAX_TIMES = 5;
const STORAGE_KEY = 'knooviq_login_popup_count';

export default function LoginPopup() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string; name?: string }>({});
  const loggedInRef = useRef(false);
  const shownCountRef = useRef(0);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      if (data.session) {
        loggedInRef.current = true;
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      loggedInRef.current = !!session;
      if (session) setOpen(false);
    });

    const stored = parseInt(sessionStorage.getItem(STORAGE_KEY) || '0', 10);
    shownCountRef.current = stored;

    if (loggedInRef.current || shownCountRef.current >= MAX_TIMES) return;

    const interval = setInterval(() => {
      if (loggedInRef.current) return;
      if (shownCountRef.current >= MAX_TIMES) {
        setOpen(false);
        clearInterval(interval);
        return;
      }
      shownCountRef.current += 1;
      sessionStorage.setItem(STORAGE_KEY, String(shownCountRef.current));
      setOpen(true);
    }, SHOW_INTERVAL);

    return () => {
      active = false;
      clearInterval(interval);
      authListener.subscription.unsubscribe();
    };
  }, []);

  const close = () => setOpen(false);

  const validate = (): boolean => {
    const e: { email?: string; password?: string; name?: string } = {};
    if (mode === 'signup' && !name.trim()) e.name = 'Please enter your name.';
    if (!email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    if (!password.trim()) {
      e.password = 'Please enter your password.';
    } else if (password.length < 6) {
      e.password = 'Password must be at least 6 characters.';
    }
    setFieldErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMsg('');
    setFieldErrors({});

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { data: { full_name: name.trim() } },
      });
      if (error) {
        setStatus('error');
        setErrorMsg(error.message.includes('already') ? 'An account with this email already exists.' : error.message);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        setStatus('error');
        setErrorMsg('Invalid email or password. Please try again.');
        return;
      }
    }

    setStatus('success');
    setTimeout(() => setOpen(false), 2000);
  };

  if (!open) return null;

  const remaining = Math.max(0, MAX_TIMES - shownCountRef.current);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050e1f]/80 backdrop-blur-md" onClick={close} />

      <div className="relative w-full max-w-md animate-fadeInUp">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <button
            onClick={close}
            className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-center overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-white/10 rounded-full" />
            <div className="relative">
              <h2 className="text-2xl font-black text-white mb-1">
                {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-white/90 text-sm">
                {mode === 'login' ? 'Sign in to access your dashboard.' : 'Sign up to start your European career journey.'}
              </p>
            </div>
          </div>

          <div className="p-8">
            {status === 'success' ? (
              <div className="text-center py-4">
                <div className="inline-flex w-16 h-16 bg-emerald-100 rounded-full items-center justify-center mb-4 animate-pulse-ring">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {mode === 'login' ? 'Signed In!' : 'Account Created!'}
                </h3>
                <p className="text-slate-500 text-sm">
                  {mode === 'login' ? 'Redirecting you to your dashboard...' : 'Please check your inbox to confirm your email.'}
                </p>
              </div>
            ) : (
              <>
                {errorMsg && (
                  <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3 text-sm font-medium flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <User className="w-4 h-4 text-blue-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className={inputCls(!!fieldErrors.name)}
                      />
                      {fieldErrors.name && <p className="text-rose-600 text-xs font-medium mt-1.5">{fieldErrors.name}</p>}
                    </div>
                  )}

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <Mail className="w-4 h-4 text-blue-500" /> Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={inputCls(!!fieldErrors.email)}
                    />
                    {fieldErrors.email && <p className="text-rose-600 text-xs font-medium mt-1.5">{fieldErrors.email}</p>}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <Lock className="w-4 h-4 text-blue-500" /> Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={mode === 'signup' ? 'Min 6 characters' : 'Your password'}
                      className={inputCls(!!fieldErrors.password)}
                    />
                    {fieldErrors.password && <p className="text-rose-600 text-xs font-medium mt-1.5">{fieldErrors.password}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 text-white font-bold py-3.5 rounded-2xl transition-all duration-300 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Please wait...</>
                    ) : (
                      <>{mode === 'login' ? 'Sign In' : 'Sign Up'} <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-slate-500 text-sm">
                    {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                    <button
                      onClick={() => {
                        setMode(mode === 'login' ? 'signup' : 'login');
                        setStatus('idle');
                        setErrorMsg('');
                        setFieldErrors({});
                      }}
                      className="text-blue-600 font-bold hover:text-blue-500 transition-colors"
                    >
                      {mode === 'login' ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                  {remaining > 0 && (
                    <p className="text-slate-400 text-xs mt-3">This reminder will show {remaining} more time{remaining > 1 ? 's' : ''}.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 rounded-2xl border ${hasError ? 'border-rose-300 bg-rose-50/50' : 'border-slate-200'} focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 text-sm`;
}
