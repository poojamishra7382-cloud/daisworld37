import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
} from 'lucide-react';

import { services } from '@/data/services';
import { countries } from '@/data/countries';
import Flag from '@/components/Flag';

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  // =========================
  // MAIN MOBILE MENU
  // =========================
  const [open, setOpen] = useState(false);

  // =========================
  // DESKTOP DROPDOWNS
  // =========================
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopCountriesOpen, setDesktopCountriesOpen] = useState(false);

  // =========================
  // MOBILE DROPDOWNS
  // =========================
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);

  // =========================
  // REFS
  // =========================
  const servicesRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);

  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const mobileCountriesRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // =========================
  // CLOSE EVERYTHING WHEN URL CHANGES
  // =========================
  useEffect(() => {
    setOpen(false);

    setDesktopServicesOpen(false);
    setDesktopCountriesOpen(false);

    setMobileServicesOpen(false);
    setMobileCountriesOpen(false);
  }, [location.pathname]);

  // =========================
  // DESKTOP OUTSIDE CLICK
  // =========================
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        servicesRef.current &&
        !servicesRef.current.contains(target)
      ) {
        setDesktopServicesOpen(false);
      }

      if (
        countriesRef.current &&
        !countriesRef.current.contains(target)
      ) {
        setDesktopCountriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );
    };
  }, []);

  // =========================
  // MOBILE BODY SCROLL LOCK
  // =========================
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // =========================
  // NAVIGATION FUNCTION
  // =========================
  const go = (path: string) => {
    // Close all menus
    setOpen(false);

    setDesktopServicesOpen(false);
    setDesktopCountriesOpen(false);

    setMobileServicesOpen(false);
    setMobileCountriesOpen(false);

    // Navigate
    navigate(path);
  };

  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  const toggleMobileMenu = () => {
    setOpen((previous) => !previous);

    // Reset dropdowns when opening/closing main menu
    setMobileServicesOpen(false);
    setMobileCountriesOpen(false);
  };

  // =========================
  // MOBILE SERVICES TOGGLE
  // =========================
  const toggleMobileServices = () => {
    setMobileServicesOpen((previous) => !previous);

    // Close countries when services opens
    setMobileCountriesOpen(false);
  };

  // =========================
  // MOBILE COUNTRIES TOGGLE
  // =========================
  const toggleMobileCountries = () => {
    setMobileCountriesOpen((previous) => !previous);

    // Close services when countries opens
    setMobileServicesOpen(false);
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        bg-[#0a1628]
        shadow-2xl shadow-blue-900/30
        py-2
      "
    >
      {/* =========================================================
          MAIN NAVBAR
      ========================================================== */}

      <div
        className="
          max-w-7xl mx-auto
          px-3 sm:px-4 lg:px-8
          flex items-center justify-between
          gap-2
        "
      >

        {/* =====================================================
            LOGO
        ====================================================== */}

<div className="flex flex-col items-start flex-shrink-0">

  <Link
    to="/home"
    className="flex items-center group flex-shrink-0"
  >
    <img
      src="/logo3.png"
      alt="DAIS World"
      className="
        w-auto
        object-contain
        group-hover:opacity-90
        transition-opacity duration-300
      "
      style={{
        width: '170px',
        margin: '-15px',
      }}
    />
  </Link>

  {/* Slogan */}
  <Link
    to="/home"
    className="
      block
      -mt-1
      ml-1
      text-[10px]
      sm:text-[11px]
      font-semibold
      tracking-wide
      text-white/80
      whitespace-nowrap
      hover:text-white
      transition-colors
    "
  //    style={{
  //   fontFamily: 'Via, sans-serif',
  // }}
    style={{
    fontFamily: 'VIA, sans-serif',
    fontWeight: 400,
    letterSpacing: '0.08em',
  }}
  >
    We Care • We Train • We Place • You Grow
  </Link>

</div>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden lg:flex items-center gap-1">

          {/* HOME */}
          <Link
            to="/home"
            className="
              px-4 py-2
              text-sm font-medium
              text-white/80
              hover:text-white
              hover:bg-white/10
              rounded-lg
              transition-all duration-200
            "
          >
            Home
          </Link>


          {/* ABOUT */}
          <Link
            to="/about"
            className="
              px-4 py-2
              text-sm font-medium
              text-white/80
              hover:text-white
              hover:bg-white/10
              rounded-lg
              transition-all duration-200
            "
          >
            About
          </Link>


          {/* =================================================
              DESKTOP SERVICES
          ================================================== */}

          <div
            ref={servicesRef}
            className="relative"
          >

            <button
              type="button"
              onClick={() => {
                setDesktopServicesOpen(
                  (previous) => !previous
                );

                setDesktopCountriesOpen(false);
              }}
              className="
                flex items-center gap-1
                px-4 py-2
                text-sm font-medium
                text-white/80
                hover:text-white
                hover:bg-white/10
                rounded-lg
                transition-all duration-200
              "
            >
              Services

              <ChevronDown
                className={`
                  w-4 h-4
                  transition-transform duration-300
                  ${
                    desktopServicesOpen
                      ? 'rotate-180'
                      : ''
                  }
                `}
              />
            </button>


            <div
              className={`
                absolute
                top-full
                left-0
                mt-2
                w-64
                origin-top-left
                transition-all duration-300
                ${
                  desktopServicesOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }
              `}
            >

              <div
                className="
                  bg-[#0a1628]/95
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  shadow-2xl
                  shadow-blue-900/50
                  overflow-hidden
                  p-2
                "
              >

                {services.map((service) => {
                  const ServiceIcon = service.icon;

                  return (
                    <button
                      type="button"
                      key={service.slug}
                      onClick={() =>
                        go(
                          `/services/${service.slug}`
                        )
                      }
                      className="
                        w-full
                        flex items-center gap-3
                        px-4 py-3
                        rounded-xl
                        hover:bg-white/10
                        transition-all duration-200
                        group
                        text-left
                      "
                    >

                      <div
                        className={`
                          w-9 h-9
                          rounded-lg
                          bg-gradient-to-br
                          ${service.color}
                          flex items-center
                          justify-center
                          flex-shrink-0
                        `}
                      >
                        <ServiceIcon
                          className="w-4 h-4 text-white"
                        />
                      </div>

                      <div className="text-left flex-1">

                        <div
                          className="
                            text-white
                            text-sm
                            font-semibold
                            group-hover:text-cyan-400
                            transition-colors
                          "
                        >
                          {service.title}
                        </div>

                        <div
                          className="
                            text-white/40
                            text-xs
                          "
                        >
                          {service.short}
                        </div>

                      </div>

                      <ArrowRight
                        className="
                          w-4 h-4
                          text-white/30
                          group-hover:text-cyan-400
                          group-hover:translate-x-1
                          transition-all
                        "
                      />

                    </button>
                  );
                })}

              </div>

            </div>

          </div>


          {/* CLIENTS */}
          <Link
            to="/clients"
            className="
              px-4 py-2
              text-sm font-medium
              text-white/80
              hover:text-white
              hover:bg-white/10
              rounded-lg
              transition-all duration-200
            "
          >
            Clients
          </Link>


          {/* =================================================
              DESKTOP COUNTRIES
          ================================================== */}

          <div
            ref={countriesRef}
            className="relative"
          >

            <button
              type="button"
              onClick={() => {
                setDesktopCountriesOpen(
                  (previous) => !previous
                );

                setDesktopServicesOpen(false);
              }}
              className="
                flex items-center gap-1
                px-4 py-2
                text-sm font-medium
                text-white/80
                hover:text-white
                hover:bg-white/10
                rounded-lg
                transition-all duration-200
              "
            >
              Country

              <ChevronDown
                className={`
                  w-4 h-4
                  transition-transform duration-300
                  ${
                    desktopCountriesOpen
                      ? 'rotate-180'
                      : ''
                  }
                `}
              />
            </button>


            <div
              className={`
                absolute
                top-full
                right-0
                mt-2
                w-72
                origin-top-right
                transition-all duration-300
                ${
                  desktopCountriesOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }
              `}
            >

              <div
                className="
                  bg-[#0a1628]/95
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  shadow-2xl
                  shadow-blue-900/50
                  overflow-hidden
                  p-2
                  max-h-[70vh]
                  overflow-y-auto
                  scrollbar-hide
                "
              >

                {countries.map((country) => (
                  <button
                    type="button"
                    key={country.slug}
                    onClick={() =>
                      go(
                        `/country/${country.slug}`
                      )
                    }
                    className="
                      w-full
                      flex items-center gap-3
                      px-4 py-3
                      rounded-xl
                      hover:bg-white/10
                      transition-all duration-200
                      group
                      text-left
                    "
                  >

                    <Flag
                      code={country.flagCode}
                      className="w-7 h-5"
                    />

                    <div className="text-left flex-1">

                      <div
                        className="
                          text-white
                          text-sm
                          font-semibold
                          group-hover:text-cyan-400
                          transition-colors
                        "
                      >
                        {country.name}
                      </div>

                      <div
                        className="
                          text-white/40
                          text-xs
                        "
                      >
                        {country.jobs} positions ·{' '}
                        {country.salary}
                      </div>

                    </div>

                    <ArrowRight
                      className="
                        w-4 h-4
                        text-white/30
                        group-hover:text-cyan-400
                        group-hover:translate-x-1
                        transition-all
                      "
                    />

                  </button>
                ))}

              </div>

            </div>

          </div>


          {/* CONTACT */}
          <Link
            to="/contact"
            className="
              px-4 py-2
              text-sm font-medium
              text-white/80
              hover:text-white
              hover:bg-white/10
              rounded-lg
              transition-all duration-200
            "
          >
            Contact Us
          </Link>

        </nav>


        {/* =====================================================
            DESKTOP APPLY BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={onApplyClick}
          className="
            hidden lg:flex
            items-center gap-2
            text-sm font-bold
            text-white
            bg-gradient-to-r
            from-blue-600
            to-blue-500
            hover:from-blue-500
            hover:to-cyan-500
            px-5 py-2.5
            rounded-xl
            transition-all duration-300
            hover:shadow-xl
            hover:shadow-blue-500/40
            hover:-translate-y-0.5
          "
        >
          Apply Now

          <ArrowRight className="w-4 h-4" />
        </button>


        {/* =====================================================
            MOBILE APPLY + HAMBURGER
        ====================================================== */}

        <div
          className="
            flex lg:hidden
            items-center gap-2
            flex-shrink-0
          "
        >

          {/* <button
            type="button"
            onClick={() => {
              onApplyClick();
              setOpen(false);
            }}
            className="
              flex items-center gap-1.5
              text-xs font-bold
              text-white
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-3 py-2
              rounded-lg
              shadow-lg
              shadow-blue-500/20
              active:scale-95
              transition-all
            "
          >
            Apply

            <ArrowRight className="w-3.5 h-3.5" />
          </button> */}


          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="
              text-white
              p-2
              rounded-lg
              hover:bg-white/10
              transition-colors
              active:scale-90
            "
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      <div
        className={`
          lg:hidden
          fixed
          inset-x-0
          top-[64px]
          bottom-0
          z-40
          transition-all duration-300
          ${
            open
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >

        {/* BACKDROP */}
        <div
          className={`
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
            transition-opacity duration-300
            ${
              open
                ? 'opacity-100'
                : 'opacity-0'
            }
          `}
          onClick={() => setOpen(false)}
        />


        {/* PANEL */}
        <div
          className={`
            absolute
            top-0
            left-0
            right-0
            bg-[#0a1628]
            border-t border-white/10
            overflow-y-auto
            max-h-[100vh]
            scrollbar-hide
            transition-transform duration-300
            ${
              open
                ? 'translate-y-0'
                : '-translate-y-full'
            }
          `}
        >

          <div
            className="
              px-4
              py-5
              flex flex-col
              gap-1
            "
          >

            {/* =================================================
                QUICK CALL
            ================================================== */}

            <a
              href="tel:8976697001"
              className="
                flex items-center gap-3
                px-4 py-3
                mb-2
                bg-white/5
                rounded-2xl
                border border-white/10
                active:scale-[0.98]
                transition-transform
              "
            >

              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  flex items-center
                  justify-center
                "
              >
                <Phone className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-white/50 text-xs">
                  Call us now
                </p>

                <p className="text-white font-bold text-sm">
                  87886 31659
                </p>
              </div>

            </a>


            {/* HOME */}
            <Link
              to="/home"
              onClick={() => setOpen(false)}
              className="
                flex items-center
                px-4 py-3.5
                text-white/90
                hover:text-white
                hover:bg-white/10
                rounded-2xl
                font-medium
                transition-all
                active:scale-[0.98]
              "
            >
              Home
            </Link>


            {/* ABOUT */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="
                flex items-center
                px-4 py-3.5
                text-white/90
                hover:text-white
                hover:bg-white/10
                rounded-2xl
                font-medium
                transition-all
                active:scale-[0.98]
              "
            >
              About
            </Link>


            {/* =================================================
                MOBILE SERVICES
            ================================================== */}

            <div
              ref={mobileServicesRef}
              className="relative z-50"
            >

              <button
                type="button"
                onClick={toggleMobileServices}
                className="
                  w-full
                  flex items-center
                  justify-between
                  px-4 py-3.5
                  text-white/90
                  hover:text-white
                  hover:bg-white/10
                  rounded-2xl
                  font-medium
                  transition-all
                  active:scale-[0.98]
                "
              >
                <span>Services</span>

                <ChevronDown
                  className={`
                    w-5 h-5
                    transition-transform duration-300
                    ${
                      mobileServicesOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>


              <div
                className={`
                  overflow-hidden
                  transition-all duration-300
                  ${
                    mobileServicesOpen
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >

                <div className="pl-3 flex flex-col gap-1 py-1">

                  {services.map((service) => {
                    const ServiceIcon = service.icon;

                    return (
                      <button
                        type="button"
                        key={service.slug}
                        onClick={() =>
                          go(
                            `/services/${service.slug}`
                          )
                        }
                        className="
                          relative
                          z-50
                          w-full
                          flex items-center gap-3
                          px-4 py-3
                          text-left
                          text-white/80
                          hover:text-white
                          hover:bg-white/10
                          rounded-xl
                          transition-all
                          active:scale-[0.98]
                          cursor-pointer
                        "
                      >

                        <div
                          className={`
                            w-8 h-8
                            rounded-lg
                            bg-gradient-to-br
                            ${service.color}
                            flex items-center
                            justify-center
                            flex-shrink-0
                          `}
                        >
                          <ServiceIcon
                            className="w-4 h-4 text-white"
                          />
                        </div>

                        <span className="text-sm font-medium">
                          {service.title}
                        </span>

                        <ArrowRight
                          className="
                            ml-auto
                            w-4 h-4
                            text-white/30
                          "
                        />

                      </button>
                    );
                  })}

                </div>

              </div>

            </div>


            {/* CLIENTS */}
            <Link
              to="/clients"
              onClick={() => setOpen(false)}
              className="
                flex items-center
                px-4 py-3.5
                text-white/90
                hover:text-white
                hover:bg-white/10
                rounded-2xl
                font-medium
                transition-all
                active:scale-[0.98]
              "
            >
              Clients
            </Link>


            {/* =================================================
                MOBILE COUNTRIES
            ================================================== */}

            <div
              ref={mobileCountriesRef}
              className="relative z-50"
            >

              <button
                type="button"
                onClick={toggleMobileCountries}
                className="
                  w-full
                  flex items-center
                  justify-between
                  px-4 py-3.5
                  text-white/90
                  hover:text-white
                  hover:bg-white/10
                  rounded-2xl
                  font-medium
                  transition-all
                  active:scale-[0.98]
                "
              >
                <span>Countries</span>

                <ChevronDown
                  className={`
                    w-5 h-5
                    transition-transform duration-300
                    ${
                      mobileCountriesOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>


              <div
                className={`
                  overflow-hidden
                  transition-all duration-300
                  ${
                    mobileCountriesOpen
                      ? 'max-h-[600px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >

                <div className="pl-3 grid grid-cols-2 gap-1">

                  {countries.map((country) => (
                    <button
                      type="button"
                      key={country.slug}
                      onClick={() =>
                        go(
                          `/country/${country.slug}`
                        )
                      }
                      className="
                        flex items-center gap-2
                        px-3 py-3
                        text-white/80
                        hover:text-white
                        hover:bg-white/10
                        rounded-xl
                        transition-all
                        active:scale-[0.98]
                        cursor-pointer
                      "
                    >

                      <Flag
                        code={country.flagCode}
                        className="
                          w-6 h-4
                          flex-shrink-0
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          truncate
                        "
                      >
                        {country.name}
                      </span>

                    </button>
                  ))}

                </div>

              </div>

            </div>


            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                flex items-center
                px-4 py-3.5
                text-white/90
                hover:text-white
                hover:bg-white/10
                rounded-2xl
                font-medium
                transition-all
                active:scale-[0.98]
              "
            >
              Contact
            </Link>


            {/* APPLY */}
            <button
              type="button"
              onClick={() => {
                onApplyClick();
                setOpen(false);
              }}
              className="
                mt-4
                flex items-center
                justify-center gap-2
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-bold
                py-4
                rounded-2xl
                text-base
                shadow-xl
                shadow-blue-500/30
                active:scale-[0.98]
                transition-transform
              "
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





            