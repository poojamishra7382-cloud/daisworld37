import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Our Services', to: '/services/language' },
    { label: 'Countries', to: '/country/netherlands' },
  ],

  // Services: [
  //   { label: 'Healthcare', to: '/services/healthcare' },
  //   { label: 'Hospitality', to: '/services/visa' },
  //   { label: 'Construction', to: '/services/nurse' },
  //   { label: 'Oil & Gas', to: '/services/support' },
  // ],

  Services: [
  { label: 'Healthcare', to: '/services/healthcare' },
  { label: 'Hospitality', to: '/services/hospitality' },
  { label: 'Construction', to: '/services/construction' },
  { label: 'Oil & Gas', to: '/services/oil-and-gas' },
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
    <footer className="w-full max-w-full overflow-x-hidden bg-[#050e1f] text-white">

      {/* =====================================================
          CTA BANNER
      ====================================================== */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-500">
        <div
          className="
            w-full max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-8 sm:py-10 lg:py-12
            flex flex-col lg:flex-row
            items-center justify-between
            gap-6
            text-center lg:text-left
          "
        >
          <div className="w-full min-w-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
              Ready to Start Your Career?
            </h3>

            <p className="text-white/90 mt-2 text-sm sm:text-base leading-relaxed">
              Join 500+ nurses who transformed their lives with Dias World.
            </p>
          </div>

          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent('open-apply-modal'))
            }
            className="
              shrink-0
              inline-flex
              items-center
              justify-center
              bg-white
              text-blue-700
              font-bold
              px-7 sm:px-8
              py-3.5 sm:py-4
              rounded-2xl
              hover:bg-blue-50
              transition-colors
              shadow-lg
              text-sm sm:text-base
              w-full sm:w-auto
              max-w-[220px]
            "
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div
        className="
          w-full max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-12 lg:py-16
        "
      >

        {/* ===================================================
            FOOTER COLUMNS
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-8
            lg:gap-10
            mb-10 sm:mb-12
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}
          <div className="sm:col-span-2 lg:col-span-2 min-w-0">

            <Link
              to="/home"
              className="inline-block mb-4 max-w-full"
            >
              <img
                src="/logo3.png"
                alt="Dias World"
                className="
                  h-10
                  sm:h-12
                  w-auto
                  max-w-[190px]
                  object-contain
                "
              />
            </Link>

            <p
              className="
                text-white/60
                text-sm
                leading-relaxed
                mb-6
                max-w-sm
                break-words
              "
            >
              India's most trusted nursing recruitment consultancy.
              We connect Indian healthcare professionals with
              world-class European hospitals.
            </p>

            <p
              className="
                text-white
                font-bold
                italic
                text-base sm:text-lg
                mb-6
                leading-relaxed
                break-words
              "
            >
              "We Care. We Train. We Place. You Grow."
            </p>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dais_world_?igsh=a3ljcDFhamh3cjRr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  shrink-0
                  bg-white/10
                  hover:bg-pink-600
                  rounded-xl
                  flex items-center justify-center
                  transition-colors
                "
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DYs7V9D6o/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  w-10 h-10
                  shrink-0
                  bg-white/10
                  hover:bg-blue-600
                  rounded-xl
                  flex items-center justify-center
                  transition-colors
                "
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@DaisWorld-d2y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  w-10 h-10
                  shrink-0
                  bg-white/10
                  hover:bg-red-600
                  rounded-xl
                  flex items-center justify-center
                  transition-colors
                "
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>

            </div>
          </div>

          {/* =================================================
              LINK COLUMNS
          ================================================== */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div
              key={title}
              className="min-w-0"
            >
              <h4 className="font-bold text-white mb-4 text-base">
                {title}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li
                    key={link.label}
                    className="min-w-0"
                  >
                    <Link
                      to={link.to}
                      className="
                        inline-block
                        max-w-full
                        text-white/60
                        hover:text-cyan-400
                        text-sm
                        transition-colors
                        break-words
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===================================================
            CONTACT INFORMATION
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            py-8
            border-t
            border-white/10
          "
        >

          {/* PHONE */}
          <a
            href="tel:8976697001"
            className="
              flex
              items-start
              gap-3
              min-w-0
              w-full
              text-white/70
              hover:text-white
              transition-colors
            "
          >
            <Phone
              className="
                w-5 h-5
                shrink-0
                text-cyan-400
                mt-0.5
              "
            />

            <span
              className="
                min-w-0
                flex-1
                break-words
                whitespace-normal
                text-sm sm:text-base
                leading-relaxed
              "
            >
              8976697001
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:aditya.s@daisworld.com"
            className="
              flex
              items-start
              gap-3
              min-w-0
              w-full
              text-white/70
              hover:text-white
              transition-colors
            "
          >
            <Mail
              className="
                w-5 h-5
                shrink-0
                text-cyan-400
                mt-0.5
              "
            />

            <span
              className="
                min-w-0
                flex-1
                break-words
                whitespace-normal
                overflow-wrap-anywhere
                text-sm sm:text-base
                leading-relaxed
              "
            >
              aditya.s@daisworld.com / sanchit.r@daisworld.com
            </span>
          </a>

          {/* ADDRESS */}
          <div
            className="
              flex
              items-start
              gap-3
              min-w-0
              w-full
              text-white/70
            "
          >
            <MapPin
              className="
                w-5 h-5
                shrink-0
                text-cyan-400
                mt-0.5
              "
            />

            <span
              className="
                min-w-0
                flex-1
                break-words
                whitespace-normal
                overflow-wrap-anywhere
                text-sm sm:text-base
                leading-relaxed
              "
            >
              Malad West, Mumbai, Maharashtra, India
            </span>
          </div>

        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}
        <div
          className="
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            min-w-0
          "
        >

          {/* Copyright */}
          <p
            className="
              text-white/40
              text-xs sm:text-sm
              text-center
              sm:text-left
              break-words
            "
          >
            © {new Date().getFullYear()} Dais World.
            All rights reserved.
          </p>

          {/* Made With */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-1
              text-white/40
              text-xs sm:text-sm
              text-center
              flex-wrap
            "
          >
            <span>Made with</span>

            <Heart
              className="
                w-4 h-4
                shrink-0
                text-rose-500
                fill-rose-500
              "
            />

            <span>for Indian Nurses</span>
          </div>

        </div>
      </div>
    </footer>
  );
}