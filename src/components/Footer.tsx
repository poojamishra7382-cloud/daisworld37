import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Our Services', to: '/services/language' },
    { label: 'Countries', to: '/country/netherlands' },
    { label: 'Apply Now', to: '/home' },
  ],
  Services: [
    { label: 'Language Training', to: '/services/language' },
    { label: 'Visa Processing', to: '/services/visa' },
    { label: 'Nurse Placement', to: '/services/nurse' },
    { label: 'Relocation Support', to: '/services/support' },
  ],
  Countries: [
    { label: 'Netherlands', to: '/country/netherlands' },
    { label: 'Germany', to: '/country/germany' },
    { label: 'France', to: '/country/france' },
    { label: 'Switzerland', to: '/country/switzerland' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050e1f] text-white">
      {/* CTA banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to Start Your Career?</h3>
            <p className="text-white/90 mt-2">Join 500+ nurses who transformed their lives with Knooviq Overseas.</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors whitespace-nowrap shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/home" className="inline-block mb-4">
              <img
                src="/WhatsApp_Image_2026-07-22_at_6.22.41_PM.jpeg"
                alt="Knooviq Overseas"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              India's most trusted nursing recruitment consultancy. We connect Indian healthcare professionals with world-class European hospitals.
            </p>
            <p className="text-white font-bold italic text-lg mb-6">"We Care. We Train. We Place. You Grow."</p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="grid sm:grid-cols-3 gap-4 py-8 border-t border-white/10">
          <a href="tel:8788631659" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Phone className="w-5 h-5 text-cyan-400" />
            8788631659
          </a>
          <a href="mailto:aditya.s@knooviq.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5 text-cyan-400" />
            aditya.s@knooviq.com
          </a>
          <div className="flex items-center gap-3 text-white/70">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Malad West, Mumbai, Maharashtra, India
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Knooviq Overseas. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-sm">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for Indian Nurses
          </div>
          <Link
            to="/home"
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
