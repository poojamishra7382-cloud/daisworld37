import { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Languages,
  Plane,
  FileText,
  Car,
  Wrench,
  Stethoscope,
  Sparkles,
  Activity,
  Flame,
  Zap,
  Layers,
  Anchor,
} from 'lucide-react';
import Flag from '@/components/Flag';

const STORAGE_SESSION_KEY = 'dais_recruitment_popup_shown_session';
const STORAGE_DISMISSED_KEY = 'dais_recruitment_popup_dismissed_until';

interface SlideData {
  id: number;
  openings: string;
  country: string;
  countryCode: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  salaryEuro: string;
  salaryInr: string;
  btnText: string;
  theme: {
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
    salaryText: string;
    btnBg: string;
  };
  positionQuery: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    openings: 'URGENT HIRING',
    country: 'Netherlands',
    countryCode: 'nl',
    icon: Car,
    title: 'Luxury Car Mechanical Engineer',
    description:
      'Overseas employment in Netherlands. Diagnosing, repairing & servicing luxury cars (BMW, Mercedes-Benz, Audi, Porsche, Land Rover).',
    salaryEuro: '€2,200 – €4,500',
    salaryInr: '₹2,00,000 – ₹4,00,000 / month',
    btnText: 'Apply for Luxury Car Engineer (Netherlands)',
    theme: {
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-800',
      iconBg: 'bg-red-100/90',
      iconText: 'text-red-700',
      salaryText: 'text-red-700',
      btnBg: 'bg-red-600 hover:bg-red-700',
    },
    positionQuery: 'Luxury Car Mechanical Engineer - Netherlands',
  },
  {
    id: 2,
    openings: '20 OPENINGS',
    country: 'Netherlands',
    countryCode: 'nl',
    icon: GraduationCap,
    title: '20 Operation Room (OT) Nurses',
    description:
      'Surgical and OT procedures in premier hospital chains in Netherlands. Experience: 1+ yrs in OT.',
    salaryEuro: '€3,900 – €5,500',
    salaryInr: 'approx ₹3.5 Lakh – ₹5.0 Lakh / month',
    btnText: 'Apply for OT Nurse (Netherlands)',
    theme: {
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      iconBg: 'bg-blue-100/90',
      iconText: 'text-blue-700',
      salaryText: 'text-blue-700',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
    },
    positionQuery: 'Operation Room (OT) Nurse - Netherlands',
  },
  {
    id: 3,
    openings: '30 OPENINGS',
    country: 'Netherlands',
    countryCode: 'nl',
    icon: Users,
    title: '30 Healthcare Assistants',
    description:
      'Eldercare & rehabilitative support across Dutch care centers. Freshers & experienced welcome.',
    salaryEuro: '€2,450 – €3,200',
    salaryInr: 'approx ₹2.2 Lakh – ₹2.9 Lakh / month',
    btnText: 'Apply for Healthcare Assistant',
    theme: {
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      iconBg: 'bg-emerald-100/90',
      iconText: 'text-emerald-700',
      salaryText: 'text-emerald-700',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700',
    },
    positionQuery: 'Healthcare Assistant - Netherlands',
  },
  {
    id: 4,
    openings: '20 OPENINGS',
    country: 'Netherlands',
    countryCode: 'nl',
    icon: ShieldCheck,
    title: '20 Registered Staff Nurses',
    description:
      'Inpatient wards, emergency & general nursing across healthcare networks in Netherlands.',
    salaryEuro: '€3,200 – €3,775',
    salaryInr: 'approx ₹2.85 Lakh – ₹3.4 Lakh / month',
    btnText: 'Apply for Staff Nurse (Netherlands)',
    theme: {
      badgeBg: 'bg-sky-100',
      badgeText: 'text-sky-800',
      iconBg: 'bg-sky-100/90',
      iconText: 'text-sky-700',
      salaryText: 'text-sky-700',
      btnBg: 'bg-sky-600 hover:bg-sky-700',
    },
    positionQuery: 'Registered Staff Nurse - Netherlands',
  },

  // =========================================================================
  // NEW EUROPEAN JOB VACANCIES (HEALTHCARE & SKILLED JOBS)
  // =========================================================================
  {
    id: 5,
    openings: 'EUROPE DRIVE',
    country: 'Europe',
    countryCode: 'eu',
    icon: Stethoscope,
    title: 'Dentist',
    description:
      'Examine patients, perform dental procedures, diagnosis & treatment plans across European clinical practices.',
    salaryEuro: '€4,000 – €6,500',
    salaryInr: 'approx ₹3.6 Lakh – ₹5.85 Lakh / month',
    btnText: 'Apply for Dentist (Europe)',
    theme: {
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      iconBg: 'bg-teal-100/90',
      iconText: 'text-teal-700',
      salaryText: 'text-teal-700',
      btnBg: 'bg-teal-600 hover:bg-teal-700',
    },
    positionQuery: 'Dentist - Europe',
  },
  {
    id: 6,
    openings: 'EUROPE DRIVE',
    country: 'Europe',
    countryCode: 'eu',
    icon: Sparkles,
    title: 'Dental Hygienist',
    description:
      'Preventive oral care, teeth cleaning, periodontal hygiene education & patient support in modern dental clinics.',
    salaryEuro: '€3,000 – €4,500',
    salaryInr: 'approx ₹2.7 Lakh – ₹4.05 Lakh / month',
    btnText: 'Apply for Dental Hygienist (Europe)',
    theme: {
      badgeBg: 'bg-cyan-100',
      badgeText: 'text-cyan-800',
      iconBg: 'bg-cyan-100/90',
      iconText: 'text-cyan-700',
      salaryText: 'text-cyan-700',
      btnBg: 'bg-cyan-600 hover:bg-cyan-700',
    },
    positionQuery: 'Dental Hygienist - Europe',
  },
  {
    id: 7,
    openings: 'EUROPE DRIVE',
    country: 'Europe',
    countryCode: 'eu',
    icon: ShieldCheck,
    title: 'Nurse (Dutch B1)',
    description:
      'Patient care, administering prescribed treatments, monitoring conditions, and collaborating with medical teams.',
    salaryEuro: '€2,800 – €4,300',
    salaryInr: 'approx ₹2.5 Lakh – ₹3.85 Lakh / month',
    btnText: 'Apply for Nurse (Europe)',
    theme: {
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      iconBg: 'bg-blue-100/90',
      iconText: 'text-blue-700',
      salaryText: 'text-blue-700',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
    },
    positionQuery: 'Nurse - Europe',
  },
  {
    id: 8,
    openings: 'EUROPE DRIVE',
    country: 'Europe',
    countryCode: 'eu',
    icon: GraduationCap,
    title: 'Operating Room Assistant',
    description:
      'Support surgical teams, prepare operating rooms, arrange sterile instruments, and assist with theatre safety.',
    salaryEuro: '€3,800 – €5,600',
    salaryInr: 'approx ₹3.4 Lakh – ₹5.0 Lakh / month',
    btnText: 'Apply for OR Assistant (Europe)',
    theme: {
      badgeBg: 'bg-indigo-100',
      badgeText: 'text-indigo-800',
      iconBg: 'bg-indigo-100/90',
      iconText: 'text-indigo-700',
      salaryText: 'text-indigo-700',
      btnBg: 'bg-indigo-600 hover:bg-indigo-700',
    },
    positionQuery: 'Operating Room Assistant - Europe',
  },
  {
    id: 9,
    openings: 'EUROPE DRIVE',
    country: 'Europe',
    countryCode: 'eu',
    icon: Activity,
    title: 'Anesthesia Assistant',
    description:
      'Prepare equipment, assist with anesthesia procedures, monitor patient status before, during & after surgery.',
    salaryEuro: '€2,700 – €4,000',
    salaryInr: 'approx ₹2.4 Lakh – ₹3.6 Lakh / month',
    btnText: 'Apply for Anesthesia Assistant (Europe)',
    theme: {
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-800',
      iconBg: 'bg-purple-100/90',
      iconText: 'text-purple-700',
      salaryText: 'text-purple-700',
      btnBg: 'bg-purple-600 hover:bg-purple-700',
    },
    positionQuery: 'Anesthesia Assistant - Europe',
  },
  {
    id: 10,
    openings: 'SKILLED JOBS',
    country: 'Europe',
    countryCode: 'eu',
    icon: Flame,
    title: 'Welder',
    description:
      'Metal fabrication, joining components, structural welding projects, interpreting technical drawings & safety.',
    salaryEuro: '€2,500 – €3,600',
    salaryInr: 'approx ₹2.25 Lakh – ₹3.25 Lakh / month',
    btnText: 'Apply for Welder (Europe)',
    theme: {
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      iconBg: 'bg-amber-100/90',
      iconText: 'text-amber-700',
      salaryText: 'text-amber-700',
      btnBg: 'bg-amber-600 hover:bg-amber-700',
    },
    positionQuery: 'Welder - Europe',
  },
  {
    id: 11,
    openings: 'SKILLED JOBS',
    country: 'Europe',
    countryCode: 'eu',
    icon: Zap,
    title: 'Electrician',
    description:
      'Electrical installation, maintenance, troubleshooting with practical solar panel & EV charging experience.',
    salaryEuro: '€3,000 – €4,500',
    salaryInr: 'approx ₹2.7 Lakh – ₹4.05 Lakh / month',
    btnText: 'Apply for Electrician (Europe)',
    theme: {
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      iconBg: 'bg-emerald-100/90',
      iconText: 'text-emerald-700',
      salaryText: 'text-emerald-700',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700',
    },
    positionQuery: 'Electrician - Europe',
  },
  {
    id: 12,
    openings: 'SKILLED JOBS',
    country: 'Europe',
    countryCode: 'eu',
    icon: Layers,
    title: 'Scaffolder',
    description:
      'Assemble, inspect, modify, and dismantle modular scaffolding structures for industrial & construction sites.',
    salaryEuro: '€2,500 – €4,000',
    salaryInr: 'approx ₹2.25 Lakh – ₹3.6 Lakh / month',
    btnText: 'Apply for Scaffolder (Europe)',
    theme: {
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-800',
      iconBg: 'bg-blue-100/90',
      iconText: 'text-blue-700',
      salaryText: 'text-blue-700',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
    },
    positionQuery: 'Scaffolder - Europe',
  },
  {
    id: 13,
    openings: 'SKILLED JOBS',
    country: 'Europe',
    countryCode: 'eu',
    icon: Anchor,
    title: 'Crane Operator – Terminals',
    description:
      'Operating container-handling cranes at European port terminals, loading/unloading shipping containers & cargo.',
    salaryEuro: '€2,500 – €3,500',
    salaryInr: 'approx ₹2.25 Lakh – ₹3.15 Lakh / month',
    btnText: 'Apply for Crane Operator (Europe)',
    theme: {
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-800',
      iconBg: 'bg-rose-100/90',
      iconText: 'text-rose-700',
      salaryText: 'text-rose-700',
      btnBg: 'bg-rose-600 hover:bg-rose-700',
    },
    positionQuery: 'Crane Operator – Container Terminals at the Port - Europe',
  },
];

interface AnnouncementPopupProps {
  onApplyClick?: (position?: string) => void;
}

export default function AnnouncementPopup({ onApplyClick }: AnnouncementPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Show once per session
  useEffect(() => {
    try {
      const dismissedUntil = localStorage.getItem(STORAGE_DISMISSED_KEY);
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return;
      }

      const hasSeenInSession = sessionStorage.getItem(STORAGE_SESSION_KEY);
      if (hasSeenInSession) {
        return;
      }

      const timer = setTimeout(() => {
        setIsOpen(true);
        try {
          sessionStorage.setItem(STORAGE_SESSION_KEY, 'true');
        } catch {
          // ignore Safari private mode
        }
      }, 800);

      return () => clearTimeout(timer);
    } catch {
      // ignore Safari storage restriction
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-announcement-popup', handleOpen);
    return () => window.removeEventListener('open-announcement-popup', handleOpen);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isOpen || isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isOpen, isPaused, nextSlide]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApply = (positionQuery: string) => {
    handleClose();
    if (onApplyClick) {
      onApplyClick(positionQuery);
    } else {
      window.dispatchEvent(
        new CustomEvent('open-apply-modal', {
          detail: { position: positionQuery },
        })
      );
    }
  };

  if (!isOpen) return null;

  const current = slides[activeIndex];
  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Background Dim */}
      <div
        className="fixed inset-0 bg-black/45 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container with Fixed Consistent Width (365px) */}
      <div
        className="relative w-full max-w-[365px] my-auto z-10 animate-fadeInUp"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute -top-3 -right-2.5 z-30 w-8 h-8 bg-slate-900 hover:bg-rose-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all transform hover:scale-105 active:scale-95"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>

        {/* Vertical Card Flyer */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
          
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-4 py-2.5 text-center flex items-center justify-between h-[38px] flex-shrink-0">
            <span className="font-black text-xs uppercase tracking-wide text-amber-300">
              URGENT RECRUITMENT
            </span>
            <div className="flex items-center gap-1 font-extrabold text-[11px] bg-white/20 px-2 py-0.5 rounded-full">
              <span>{activeIndex + 1}</span>
              <span>/</span>
              <span>{slides.length}</span>
            </div>
          </div>

          {/* Golden Subheader */}
          <div className="bg-amber-400 py-1 px-3 text-center border-b border-amber-500 text-[10px] font-black text-blue-950 uppercase tracking-wide h-[24px] flex items-center justify-center flex-shrink-0">
            {current.country === 'Netherlands'
              ? '★ NETHERLANDS DIRECT CLIENT HIRING ★'
              : '★ EUROPE DIRECT CLIENT HIRING ★'}
          </div>

          {/* Main Slide Card Area with Fixed Height */}
          <div className="p-4 relative bg-slate-50/50 flex flex-col justify-between">
            
            {/* Prev & Next Arrow Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white text-slate-700 hover:text-blue-700 shadow-md border border-slate-200 flex items-center justify-center transition-transform hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white text-slate-700 hover:text-blue-700 shadow-md border border-slate-200 flex items-center justify-center transition-transform hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Inner Fixed Height Content Card (Same height on every slide) */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs mx-3 text-left min-h-[310px] flex flex-col justify-between">
              
              {/* Top Openings Badge & Country Flag (Fixed height row) */}
              <div className="flex items-center justify-between gap-2 mb-2.5 h-[24px] flex-shrink-0">
                <span
                  className={`px-2.5 py-0.5 rounded-full ${current.theme.badgeBg} ${current.theme.badgeText} font-black text-[11px]`}
                >
                  {current.openings}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-800 font-bold">
                  <Flag code={current.countryCode} className="w-4 h-3 rounded-2xs shadow-2xs" />
                  <span>{current.country}</span>
                </span>
              </div>

              {/* Icon & Title (Fixed height container) */}
              <div className="flex items-center gap-3 mb-2 h-[48px] flex-shrink-0">
                <div
                  className={`w-11 h-11 rounded-xl ${current.theme.iconBg} flex items-center justify-center ${current.theme.iconText} flex-shrink-0 shadow-2xs`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 leading-tight line-clamp-2">
                  {current.title}
                </h3>
              </div>

              {/* Description (Fixed uniform 2-line height) */}
              <div className="h-[36px] flex items-center mb-2 flex-shrink-0">
                <p className="text-xs text-slate-600 leading-snug font-medium line-clamp-2">
                  {current.description}
                </p>
              </div>

              {/* Vertical Stacked Monthly Salary Box (Fixed uniform height) */}
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center h-[76px] flex flex-col justify-center flex-shrink-0">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                  Monthly Salary
                </div>
                <div className={`text-xl font-black ${current.theme.salaryText} mt-1 leading-tight`}>
                  {current.salaryEuro}
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5 leading-none">
                  {current.salaryInr}
                </div>
              </div>

              {/* Full Width Apply Button (Fixed uniform height) */}
              <button
                onClick={() => handleApply(current.positionQuery)}
                className={`w-full mt-3 h-[38px] flex items-center justify-center px-3 rounded-xl ${current.theme.btnBg} text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-98 flex-shrink-0`}
              >
                {current.btnText}
              </button>

            </div>

            {/* Slide Dots Indicator */}
            <div className="flex items-center justify-center gap-1 mt-3 h-[8px] flex-shrink-0">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === idx ? 'w-4 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Bottom Perks Strip (Fixed height footer) */}
          <div className="bg-slate-100 border-t border-slate-200 px-4 py-2 text-[11px] text-slate-700 h-[36px] flex items-center justify-between flex-shrink-0">
            <div className="w-full flex items-center justify-between text-center divide-x divide-slate-300">
              <span className="flex-1 px-1 font-semibold flex items-center justify-center gap-1 truncate">
                <Languages className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />{' '}
                {current.countryCode === 'nl' ? 'B1 Dutch' : 'English / EU'}
              </span>
              <span className="flex-1 px-1 font-semibold flex items-center justify-center gap-1 truncate">
                <Plane className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> 100% Visa
              </span>
              <span className="flex-1 px-1 font-semibold flex items-center justify-center gap-1 truncate">
                <FileText className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />{' '}
                {current.countryCode === 'nl' ? '5-Yr Contract' : 'Legal Contract'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
