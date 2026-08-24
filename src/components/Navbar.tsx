import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Phone,
} from 'lucide-react';

import { services } from '@/data/services';
import { countries, europeCountries, middleEastCountries } from '@/data/countries';
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
  const [desktopActiveRegion, setDesktopActiveRegion] = useState<'europe' | 'middle-east' | null>(null);

  // =========================
  // MOBILE DROPDOWNS
  // =========================
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const [mobileEuropeOpen, setMobileEuropeOpen] = useState(false);
  const [mobileMiddleEastOpen, setMobileMiddleEastOpen] = useState(false);

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
    setDesktopActiveRegion(null);

    setMobileServicesOpen(false);
    setMobileCountriesOpen(false);
    setMobileEuropeOpen(false);
    setMobileMiddleEastOpen(false);
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
        setDesktopActiveRegion(null);
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
              text-[11px]
              font-semibold
              tracking-widest
              text-white/80
              hover:text-white
              transition-colors
            "
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


          {/* VACANCIES */}
          <Link
            to="/vacancies"
            className="
              px-4 py-2
              text-sm font-medium
              text-white/80
              hover:text-white
              hover:bg-white/10
              rounded-lg
              transition-all duration-200
              relative
            "
          >
            <span>Vacancies</span>
            <span className="absolute -top-1 right-1 px-1.5 py-0.2 text-[9px] font-bold bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full uppercase tracking-tight animate-pulse shadow-sm">
              Hiring
            </span>
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
                  ${desktopServicesOpen
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
                ${desktopServicesOpen
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
                setDesktopCountriesOpen((previous) => {
                  if (previous) {
                    setDesktopActiveRegion(null);
                  }
                  return !previous;
                });
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
                  ${desktopCountriesOpen
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
                mt-1.5
                w-64
                origin-top-right
                transition-all duration-300
                ${desktopCountriesOpen
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
                  rounded-xl
                  shadow-xl
                  shadow-blue-900/40
                  overflow-hidden
                  p-1.5
                "
              >

                {/* VIEW 1: STARTING SCREEN - ONLY 2 OPTIONS (EUROPE & MIDDLE EAST) */}
                {!desktopActiveRegion ? (
                  <div className="flex flex-col gap-1">
                    {/* Option 1: Europe */}
                    <button
                      type="button"
                      onClick={() => setDesktopActiveRegion('europe')}
                      className="
                        w-full flex items-center justify-between
                        px-3.5 py-2.5 rounded-lg
                        bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600
                        border border-white/5 hover:border-transparent
                        text-left font-bold text-sm text-white
                        transition-all duration-200
                        group
                      "
                    >
                      <div>
                        <p className="leading-tight text-white font-bold text-sm">Europe</p>
                        <p className="text-xs text-white/50 group-hover:text-white/80 font-normal mt-0.5">
                          {europeCountries.length} Countries
                        </p>
                      </div>

                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </button>

                    {/* Option 2: Middle East */}
                    <button
                      type="button"
                      onClick={() => setDesktopActiveRegion('middle-east')}
                      className="
                        w-full flex items-center justify-between
                        px-3.5 py-2.5 rounded-lg
                        bg-white/5 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600
                        border border-white/5 hover:border-transparent
                        text-left font-bold text-sm text-white
                        transition-all duration-200
                        group
                      "
                    >
                      <div>
                        <p className="leading-tight text-white font-bold text-sm">Middle East</p>
                        <p className="text-xs text-white/50 group-hover:text-white/80 font-normal mt-0.5">
                          {middleEastCountries.length} Countries
                        </p>
                      </div>

                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                ) : (
                  /* VIEW 2: DRILL-DOWN SCREEN - ONLY THE SELECTED REGION'S COUNTRIES */
                  <div className="flex flex-col animate-fadeIn">
                    {/* Back Button & Header */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 px-1">
                      <button
                        type="button"
                        onClick={() => setDesktopActiveRegion(null)}
                        className="
                          flex items-center gap-1
                          text-xs font-semibold
                          text-cyan-400 hover:text-cyan-300
                          hover:bg-white/10
                          px-2 py-1 rounded-lg
                          transition-all
                        "
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <span className="text-xs font-bold text-white pr-1">
                        {desktopActiveRegion === 'europe'
                          ? 'Europe'
                          : 'Middle East'
                        }
                      </span>
                    </div>

                    {/* Country list */}
                    <div className="space-y-0.5 max-h-[55vh] overflow-y-auto scrollbar-hide">
                      {(desktopActiveRegion === 'europe'
                        ? europeCountries
                        : middleEastCountries
                      ).map((country) => (
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
                            flex items-center gap-2.5
                            px-2.5 py-2
                            rounded-lg
                            hover:bg-white/10
                            transition-all duration-200
                            group
                            text-left
                          "
                        >
                          <Flag
                            code={country.flagCode}
                            className="w-5 h-3.5 rounded-sm shadow-sm flex-shrink-0"
                          />

                          <div className="text-left flex-1 min-w-0">
                            <div
                              className="
                                text-white
                                text-xs
                                font-semibold
                                group-hover:text-cyan-400
                                transition-colors
                                truncate
                              "
                            >
                              {country.name}
                            </div>

                            <div
                              className="
                                text-white/40
                                text-[10px]
                                truncate
                              "
                            >
                              {country.jobs} · {country.salary.split('–')[0].trim()}
                            </div>
                          </div>

                          <ArrowRight
                            className="
                              w-3.5 h-3.5
                              text-white/30
                              group-hover:text-cyan-400
                              group-hover:translate-x-0.5
                              transition-all
                              flex-shrink-0
                            "
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
          top-[60px] sm:top-[64px]
          bottom-0
          z-40
          transition-all duration-300
          ${open
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
            bg-black/60
            backdrop-blur-sm
            transition-opacity duration-300
            ${open
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
            max-h-[calc(100dvh-60px)] sm:max-h-[calc(100dvh-64px)]
            scrollbar-hide
            transition-transform duration-300
            shadow-2xl
            ${open
              ? 'translate-y-0'
              : '-translate-y-full'
            }
          `}
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >

          <div
            className="
              px-4
              py-5
              pb-12
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
                  8976697001
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


            {/* VACANCIES */}
            <Link
              to="/vacancies"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-between
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
              <span>Vacancies</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full uppercase tracking-tight">
                Urgent Hiring
              </span>
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
                    ${mobileServicesOpen
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
                  ${mobileServicesOpen
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
                    ${mobileCountriesOpen
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
                  ${mobileCountriesOpen
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0'
                  }
                `}
              >

                <div className="pl-3 pr-1 py-1 space-y-2">

                  {/* 1. Europe Region Option */}
                  <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileEuropeOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between px-3.5 py-3 text-left text-white font-bold text-sm hover:bg-white/10 transition-colors"
                    >
                      <span>Europe ({europeCountries.length} Countries)</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${mobileEuropeOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {mobileEuropeOpen && (
                      <div className="p-2 pt-0 space-y-1 divide-y divide-white/5 bg-black/20">
                        {europeCountries.map((country) => (
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
                              flex items-center gap-2.5
                              px-3 py-2.5
                              text-white/80
                              hover:text-white
                              hover:bg-white/10
                              rounded-lg
                              text-xs
                              font-medium
                              transition-all
                              active:scale-[0.98]
                              cursor-pointer
                            "
                          >
                            <Flag
                              code={country.flagCode}
                              className="w-5 h-3.5 rounded flex-shrink-0"
                            />
                            <span className="flex-1 text-left">{country.name}</span>
                            <span className="text-[10px] text-cyan-300/80">{country.jobs}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. Middle East Region Option */}
                  <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMiddleEastOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between px-3.5 py-3 text-left text-white font-bold text-sm hover:bg-white/10 transition-colors"
                    >
                      <span>Middle East ({middleEastCountries.length} Countries)</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${mobileMiddleEastOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {mobileMiddleEastOpen && (
                      <div className="p-2 pt-0 space-y-1 divide-y divide-white/5 bg-black/20">
                        {middleEastCountries.map((country) => (
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
                              flex items-center gap-2.5
                              px-3 py-2.5
                              text-white/80
                              hover:text-white
                              hover:bg-white/10
                              rounded-lg
                              text-xs
                              font-medium
                              transition-all
                              active:scale-[0.98]
                              cursor-pointer
                            "
                          >
                            <Flag
                              code={country.flagCode}
                              className="w-5 h-3.5 rounded flex-shrink-0"
                            />
                            <span className="flex-1 text-left">{country.name}</span>
                            <span className="text-[10px] text-cyan-300/80">{country.jobs}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

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





