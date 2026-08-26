import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Heart,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Vacancies', to: '/vacancies' },
    { label: 'Our Services', to: '/services' },
    { label: 'Clients & Partners', to: '/clients' },
    { label: 'Contact', to: '/contact' },
  ],

  Services: [
    { label: 'Healthcare', to: '/services/healthcare/doctors-physicians' },
    { label: 'Hospitality', to: '/services/hospitality/front-office' },
    { label: 'Construction', to: '/services/construction/civil-structural' },
    { label: 'Oil & Gas', to: '/services/oil-and-gas/exploration-geology' },
    { label: 'Beauty & Care', to: '/services/beauty-and-care/hair-styling' },
  ],

  Countries: [
    { label: 'Netherlands', to: '/country/netherlands' },
    { label: 'Germany', to: '/country/germany' },
    { label: 'France', to: '/country/france' },
    { label: 'Switzerland', to: '/country/switzerland' },
    { label: 'Australia', to: '/country/australia' },
    { label: 'Canada', to: '/country/canada' },
    { label: 'UK', to: '/country/uk' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-[#050e1f] text-white relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* =====================================================
          CTA BANNER
      ====================================================== */}
      <div className="relative w-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-cyan-200" />
              <span>Take Your Career Global</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Ready to Start Your International Journey?
            </h3>
            <p className="text-white/90 mt-1 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Join 500+ skilled Indian professionals placed across Healthcare, Hospitality, Construction, and Energy worldwide.
            </p>
          </div>

          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent('open-apply-modal'))
            }
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-700 font-bold px-7 py-3 rounded-xl hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-8">
          {/* BRAND COLUMN */}
          <div className="sm:col-span-2 lg:col-span-2 min-w-0">
            <Link to="/home" className="inline-block mb-3">
              <img
                src="/logo3.png"
                alt="Dais World"
                className="h-14 sm:h-16 w-auto max-w-[260px] object-contain"
              />
            </Link>

            <div className="mb-3">
              <h4 className="text-white font-bold text-lg tracking-wide">
                Dais World Endeavor Private Limited
              </h4>
              <p className="text-cyan-400 font-medium text-xs tracking-wider uppercase mt-0.5">
                Overseas Manpower & Recruitment Consultancy
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              India’s trusted recruitment partner connecting skilled professionals with world-class opportunities across Healthcare, Hospitality, Construction, and Oil & Gas globally.
            </p>

            {/* Mission Quote Pill */}
            <div className="inline-block bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 mb-4 max-w-sm">
              <p className="text-slate-200 font-medium italic text-xs sm:text-sm">
                "We Care. We Train. We Place. You Grow."
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/dais_world_?igsh=a3ljcDFhamh3cjRr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.facebook.com/share/1DYs7V9D6o/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.youtube.com/@DaisWorld-d2y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/company/dais-world"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-[#0077b5] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="min-w-0">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <h4 className="font-bold text-white text-xs tracking-wider uppercase">
                  {title}
                </h4>
              </div>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label} className="min-w-0">
                    <Link
                      to={link.to}
                      className="group flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-sm transition-all duration-200"
                    >
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===================================================
            CONTACT CARDS
        ==================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6 pb-6 border-t border-white/10">
          {/* PHONE */}
          <a
            href="tel:8976697001"
            className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-colors" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Call Us</p>
              <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                +91 89766 97001
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:info@daisworld.com"
            className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Email Us</p>
              <p className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                info@daisworld.com
              </p>
            </div>
          </a>

          {/* ADDRESS */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <MapPin className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Head Office</p>
              <p className="text-xs sm:text-sm font-medium text-white leading-snug">
                1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          {/* Copyright */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">Dais World Endeavor Private Limited</span>. All rights reserved.
          </p>

          {/* Made With */}
          <div className="flex items-center justify-center gap-1.5">
            <span>Empowering careers worldwide</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}