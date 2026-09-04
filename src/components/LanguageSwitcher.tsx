import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/translations/translations';
import Flag from '@/components/Flag';

export interface TranslateLang {
  code: string;
  label: string;
  nativeName: string;
  flag: string;
  flagCode?: string;
}

export const SUPPORTED_LANGUAGES: TranslateLang[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🌐' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', flagCode: 'in' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', flagCode: 'in' },
  { code: 'ml', label: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', flagCode: 'in' },
  { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', flagCode: 'in' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', flagCode: 'in' },
  { code: 'bn', label: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', flagCode: 'in' },
  { code: 'mr', label: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', flagCode: 'in' },
  { code: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', flagCode: 'in' },
  { code: 'ur', label: 'Urdu', nativeName: 'اردو', flag: '🇮🇳', flagCode: 'in' },
  { code: 'ja', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵', flagCode: 'jp' },
  { code: 'zh-CN', label: 'Chinese', nativeName: '中文 (简体)', flag: '🇨🇳', flagCode: 'cn' },
  { code: 'ko', label: 'Korean', nativeName: '한국어', flag: '🇰🇷', flagCode: 'kr' },
  { code: 'nl', label: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagCode: 'nl' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagCode: 'de' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', flagCode: 'sa' },
  { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷', flagCode: 'fr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸', flagCode: 'es' },
  { code: 'it', label: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagCode: 'it' },
  { code: 'pt', label: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', flagCode: 'pt' },
  { code: 'ru', label: 'Russian', nativeName: 'Русский', flag: '🇷🇺', flagCode: 'ru' },
  { code: 'tl', label: 'Filipino', nativeName: 'Tagalog', flag: '🇵🇭', flagCode: 'ph' },
  { code: 'tr', label: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', flagCode: 'tr' },
];

function renderFlagIcon(lang: TranslateLang, size = 'w-4 h-2.5') {
  if (lang.flagCode) {
    return (
      <Flag
        code={lang.flagCode}
        className={`${size} rounded-[2px] object-cover flex-shrink-0 inline-block shadow-xs`}
      />
    );
  }
  return <span>{lang.flag}</span>;
}

function setGoogleTranslateCookie(langCode: string) {
  const hostname = window.location.hostname;
  const domain = hostname === 'localhost' ? '' : `;domain=.${hostname}`;

  if (langCode === 'en') {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domain}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/`;
  }

  // Trigger Google Translate Select element if rendered
  try {
    const selectElem = document.querySelector('#google_translate_element select') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  } catch {
    window.location.reload();
  }
}

export default function LanguageSwitcher({
  variant = 'dropdown',
}: {
  variant?: 'dropdown' | 'mobile-grid' | 'footer-pills';
}) {
  const { language, setLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync with cookie or localStorage
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      setSelectedLang(match[1]);
    } else if (language) {
      setSelectedLang(language);
    }
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (code: string) => {
    setSelectedLang(code);
    if (code === 'en' || code === 'ar' || code === 'nl') {
      setLanguage(code as Language);
    }
    setGoogleTranslateCookie(code);
    setOpen(false);
  };

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === selectedLang) || SUPPORTED_LANGUAGES[0];

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(
    (l) =>
      l.label.toLowerCase().includes(search.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(search.toLowerCase())
  );

  if (variant === 'mobile-grid') {
    return (
      <div className="notranslate space-y-2 p-3 bg-slate-900/80 rounded-2xl border border-white/10" translate="no">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
          <span className="flex items-center gap-1.5 text-white">
            <Globe className="w-3.5 h-3.5 text-cyan-400" /> Language / Translator
          </span>
          <span className="text-[10px] text-cyan-400">English Mode</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const active = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                className={`notranslate flex items-center justify-start gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-all ${active
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'bg-white/5 text-white/80 hover:bg-white/15'
                  }`}
                translate="no"
              >
                {renderFlagIcon(lang, 'w-4 h-3')}
                <span className="truncate text-xs font-semibold">{lang.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'footer-pills') {
    return (
      <div className="notranslate flex flex-wrap items-center gap-1.5" translate="no">
        {SUPPORTED_LANGUAGES.slice(0, 10).map((lang) => {
          const active = lang.code === selectedLang;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelectLanguage(lang.code)}
              className={`notranslate inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${active
                ? 'bg-blue-600 text-white shadow-xs font-bold'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              translate="no"
            >
              {renderFlagIcon(lang, 'w-4 h-2.5')}
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Default Dropdown for Navbar
  return (
    <div className="notranslate relative inline-block text-left" ref={dropdownRef} translate="no">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="notranslate inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all shadow-sm backdrop-blur-md hover:border-cyan-400/50"
        aria-expanded={open}
        translate="no"
        title="Translate Website"
      >
        <span className="flex items-center">
          {current.code === 'en' ? (
            <span className="text-sm leading-none">🌐</span>
          ) : (
            renderFlagIcon(current, 'w-4 h-3')
          )}
        </span>
        <span className="font-semibold text-xs">{current.code === 'en' ? 'English' : current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
            open ? 'rotate-180 text-cyan-300' : ''
          }`}
        />
      </button>

      {open && (
        <div className="notranslate absolute right-0 mt-2 w-60 rounded-2xl bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-700/80 p-2 z-50 animate-fadeInUp" translate="no">

          {/* Header (Always in English) */}
          <div className="flex items-center justify-between px-2 py-1 mb-1.5 border-b border-slate-800">
            <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-cyan-400" /> Select Language
            </span>
            <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800/60">
              Live
            </span>
          </div>

          {/* Search bar inside dropdown */}
          <div className="relative mb-2">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search language..."
              className="notranslate w-full pl-8 pr-2.5 py-1.5 bg-slate-800/80 text-white placeholder-slate-400 text-xs rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-400"
              translate="no"
            />
          </div>

          {/* List of languages (Titles kept strictly in English) */}
          <div className="max-h-60 overflow-y-auto space-y-1 pr-1 scrollbar-hide">
            {filteredLanguages.map((lang) => {
              const active = lang.code === selectedLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`notranslate w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-all ${active
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-sm'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`}
                  translate="no"
                >
                  <div className="flex items-center gap-2 text-left">
                    {renderFlagIcon(lang, 'w-4 h-3')}
                    <span className="font-semibold text-white">{lang.label}</span>
                    <span className="text-[11px] text-slate-400">({lang.nativeName})</span>
                  </div>
                  {active && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                </button>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
}
