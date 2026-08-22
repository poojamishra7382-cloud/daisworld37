import { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Users,
  TrendingUp,
  MapPin,
} from 'lucide-react';

interface Slide {
  image: string;
  badge: string;
  heading: string;
  highlight: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    image: 'health3.png',
    badge: 'Now Hiring — across globe 2026',
    heading: 'We Are Hiring',
    highlight: 'Medical Staff',
    subtext: 'Connecting Doctors, Nurses, Ayurvedic Experts, Yoga Therapists, Dietitians, Phlebotomists & Medical Staff globally.',
  },
  {
    image: 'hotel7.png',
    badge: 'Join Our Medical Team',
    heading: 'Work With Top',
    highlight: 'Hospitals',
    subtext:
      'Partnered with leading healthcare facilities across Europe, Australia, Canada, USA, Middle East & more.',
  },
  {
    image: 'construct1.jpg',
    badge: 'Visa + Air Ticket Included',
    heading: 'Your Career',
    highlight: 'Beyond Borders',
    subtext:
      'Complete visa support, air ticket, and language training — fully handled by company.',
  },
  {
    image: 'construct.png',
    badge: '2500+ Open Positions',
    heading: 'A Better Future',
    highlight: 'Awaits You',
    subtext:
      'Take the next step in your global healthcare and professional career with salaries up to €5,500/month.',
  },
];

const trustItems = [
  {
    icon: Users,
    label: '2500 Open Positions',
  },
  {
    icon: TrendingUp,
    label: 'Up to €5,500/mo',
  },
  {
    icon: MapPin,
    label: 'Europe & More',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const AUTOPLAY_MS = 4000;

  const go = useCallback((dir: number) => {
    setCurrent(
      (c) => (c + dir + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      {/* =====================================================
          MOBILE / DESKTOP OVERFLOW FIX
          CSS IS INSIDE THIS FILE
      ====================================================== */}

      <style>{`
        html,
        body,
        #root {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        #hero {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        #hero img {
          max-width: none;
        }
      `}</style>

      <section
        id="hero"
        className="
          relative
          w-full
          max-w-full
          min-h-[680px]
          sm:min-h-[700px]
          md:min-h-[650px]
          lg:h-screen
          lg:min-h-[650px]
          overflow-hidden
          bg-[#06122a]
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* =====================================================
            BACKGROUND SLIDES
        ====================================================== */}

        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              absolute
              inset-0
              w-full
              h-full
              transition-opacity
              duration-[1200ms]
              ease-in-out
            "
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >

            <img
              src={slide.image}
              alt={slide.heading}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
                select-none
              "
              draggable="false"
            />

            {/* <img
  src={slide.image}
  alt={slide.heading}
  className={`
    absolute
    inset-0
    w-full
    h-full
    object-cover
    select-none
    ${
      slide.image === 'tm.jpg'
        ? 'object-[center_30%]'
        : 'object-center'
    }
  `}
  draggable="false"
/> */}

            {/* Dark left overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#06122a]/95
                via-[#06122a]/60
                to-transparent
              "
            />

            {/* Bottom overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#06122a]/95
                via-[#06122a]/20
                to-[#06122a]/30
              "
            />

          </div>
        ))}


        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            min-h-[680px]
            sm:min-h-[700px]
            md:min-h-[650px]
            lg:h-full
            flex
            items-center
          "
        >

          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-12
              pt-24
              pb-32
              sm:pt-24
              sm:pb-36
              md:pt-16
              md:pb-32
              lg:pt-10
              lg:pb-28
            "
          >

            <div
              className="
                relative
                w-full
                max-w-2xl
                min-h-[350px]
                sm:min-h-[330px]
              "
            >

              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="
                    absolute
                    inset-0
                    w-full
                    transition-all
                    duration-700
                    ease-out
                  "
                  style={{
                    opacity: i === current ? 1 : 0,
                    transform:
                      i === current
                        ? 'translateY(0)'
                        : 'translateY(25px)',
                    pointerEvents:
                      i === current ? 'auto' : 'none',
                  }}
                >

                  {/* =================================================
                      BADGE
                  ================================================== */}

                  <div
                    className="
                      inline-flex
                      max-w-full
                      items-center
                      gap-2
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-white/20
                      text-white
                      px-3
                      sm:px-4
                      py-2
                      rounded-full
                      text-[10px]
                      sm:text-sm
                      font-semibold
                      tracking-wide
                      uppercase
                      mb-5
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        flex-shrink-0
                        bg-emerald-400
                        rounded-full
                        animate-pulse
                      "
                    />

                    <span className="whitespace-nowrap">
                      {slide.badge}
                    </span>

                  </div>


                  {/* =================================================
                      HEADING
                  ================================================== */}

                  <h1
                    className="
                      text-[42px]
                      leading-[0.98]
                      sm:text-6xl
                      sm:leading-[1.02]
                      lg:text-7xl
                      font-black
                      text-white
                      mb-5
                      tracking-tight
                    "
                  >

                    {slide.heading}

                    <br />

                    <span
                      className="
                        bg-gradient-to-r
                        from-sky-400
                        via-cyan-300
                        to-teal-200
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {slide.highlight}
                    </span>

                  </h1>


                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      text-white/85
                      text-[15px]
                      sm:text-lg
                      leading-relaxed
                      mb-7
                      max-w-[350px]
                      sm:max-w-lg
                    "
                  >
                    {slide.subtext}
                  </p>


                  {/* =================================================
                      APPLY BUTTON ONLY
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent('open-apply-modal')
                      )
                    }
                    className="
                      group
                      inline-flex
                      w-full
                      sm:w-auto
                      items-center
                      justify-center
                      gap-2
                      bg-white
                      text-[#06122a]
                      font-bold
                      px-7
                      sm:px-8
                      py-3.5
                      rounded-xl
                      transition-all
                      duration-300
                      hover:bg-sky-100
                      hover:-translate-y-0.5
                      hover:shadow-2xl
                      hover:shadow-white/20
                      active:scale-[0.98]
                      text-sm
                      sm:text-base
                    "
                  >

                    Apply Now

                    <ArrowRight
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </button>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            DESKTOP PREVIOUS BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="
            hidden
            sm:flex
            absolute
            left-4
            lg:left-5
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            lg:w-11
            lg:h-11
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-white
            hover:bg-white/25
            transition-all
          "
        >
          <ArrowLeft className="w-5 h-5" />
        </button>


        {/* =====================================================
            DESKTOP NEXT BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="
            hidden
            sm:flex
            absolute
            right-4
            lg:right-5
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            lg:w-11
            lg:h-11
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-white
            hover:bg-white/25
            transition-all
          "
        >
          <ArrowRight className="w-5 h-5" />
        </button>


        {/* =====================================================
            MOBILE SLIDE DOTS
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            right-0
            bottom-[88px]
            z-20
            flex
            justify-center
            gap-2
            sm:hidden
          "
        >

          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${i === current
                  ? 'w-7 bg-cyan-300'
                  : 'w-2 bg-white/40'
                }
              `}
            />
          ))}

        </div>


        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            w-full
            border-t
            border-white/15
            bg-[#06122a]/90
            backdrop-blur-md
          "
        >

          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              px-3
              sm:px-8
              lg:px-12
              py-3
              sm:py-4
            "
          >

            <div
              className="
                grid
                grid-cols-3
                items-center
                justify-center
                gap-1
                sm:flex
                sm:flex-wrap
                sm:gap-x-6
                sm:gap-y-2
                text-white/90
                text-[10px]
                sm:text-sm
                md:text-base
              "
            >

              {trustItems.map(
                ({ icon: Icon, label }, idx) => (
                  <div
                    key={label}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      items-center
                      justify-center
                      gap-1
                      sm:gap-2
                      text-center
                      min-w-0
                    "
                  >

                    <Icon
                      className="
                        w-4
                        h-4
                        sm:w-5
                        sm:h-5
                        text-cyan-300
                        flex-shrink-0
                      "
                    />

                    <span
                      className="
                        font-medium
                        leading-tight
                        whitespace-nowrap
                      "
                    >
                      {label}
                    </span>

                    {idx < trustItems.length - 1 && (
                      <span
                        className="
                          hidden
                          sm:inline
                          text-white/30
                          ml-3
                        "
                      >
                        •
                      </span>
                    )}

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}