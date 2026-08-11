import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { services } from '@/data/services';
import { countries } from '@/data/countries';
import Flag from '@/components/Flag';

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setCountriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (countriesRef.current && !countriesRef.current.contains(e.target as Node)) setCountriesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a1628] shadow-2xl shadow-blue-900/30 py-2"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/home" className="flex items-center group flex-shrink-0">
          {/* <img
            src="/logo3.png"
            alt="Knooviq Overseas"
            className="h-11 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300 sm:h-12" style="width:200px;margin:-15px;"
          /> */}
          <img
  src="/logo3.png"
  alt="Knooviq Overseas"
  className="w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
  style={{
    width: "170px",
    margin: "-15px",
  }}
/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/home"
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setCountriesOpen(false); }}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-64 origin-top-left transition-all duration-300 ${
                servicesOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-[#0a1628]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/50 overflow-hidden p-2">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => go(`/services/${s.slug}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                      <s.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">{s.title}</div>
                      <div className="text-white/40 text-xs">{s.short}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
                {/* Clienter */}
    <Link
  to="/clients"
  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
>
  Clients
</Link>

          {/* Countries Dropdown */}
          <div ref={countriesRef} className="relative">
            <button
              onClick={() => { setCountriesOpen(!countriesOpen); setServicesOpen(false); }}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              Country
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${countriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full right-0 mt-2 w-72 origin-top-right transition-all duration-300 ${
                countriesOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-[#0a1628]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/50 overflow-hidden p-2 max-h-[70vh] overflow-y-auto scrollbar-hide">
                {countries.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => go(`/country/${c.slug}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                  >
                    <Flag code={c.flagCode} className="w-7 h-5" />
                    <div className="text-left flex-1">
                      <div className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">{c.name}</div>
                      <div className="text-white/40 text-xs">{c.jobs} positions · {c.salary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            Contact Us
          </Link>
        </nav>

        {/* Apply Now Button — Desktop */}
        <button
          onClick={onApplyClick}
          className="hidden lg:flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Mobile: compact Apply button + hamburger */}
        <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
          <button
            onClick={() => { onApplyClick(); setOpen(false); }}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 rounded-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
          >
            Apply
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors active:scale-90"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen slide-down */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[#0a1628] border-t border-white/10 overflow-y-auto max-h-[100vh] scrollbar-hide transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-5 flex flex-col gap-1">
            {/* Quick call strip */}
            <a
              href="tel:8788631659"
              className="flex items-center gap-3 px-4 py-3 mb-2 bg-white/5 rounded-2xl border border-white/10 active:scale-[0.98] transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs">Call us now</p>
                <p className="text-white font-bold text-sm">87886 31659</p>
              </div>
            </a>

            <Link to="/home" onClick={() => setOpen(false)} className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]">
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]">
              About
            </Link>

            {/* Mobile Services — collapsible */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-3 flex flex-col gap-1">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => go(`/services/${s.slug}`)}
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-[0.98]"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                      <s.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>
{/* clients */}
            <Link
  to="/clients"
  onClick={() => setOpen(false)}
  className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]"
>
  Clients
</Link>


            {/* Mobile Countries — collapsible */}
            <button
              onClick={() => setCountriesOpen(!countriesOpen)}
              className="flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]"
            >
              Countries
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${countriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${countriesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-3 grid grid-cols-2 gap-1">
                {countries.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => go(`/country/${c.slug}`)}
                    className="flex items-center gap-2 px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-[0.98]"
                  >
                    <Flag code={c.flagCode} className="w-6 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium truncate">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl font-medium transition-all active:scale-[0.98]">
              Contact
            </Link>

            <button
              onClick={() => { onApplyClick(); setOpen(false); }}
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl text-base shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-transform"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
