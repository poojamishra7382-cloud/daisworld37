import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Trash2,
  Bot,
  User as UserIcon,
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: number;
}

const STORAGE_KEY = 'knooviq_chat_history';

const WELCOME: Message = {
  id: 0,
  sender: 'bot',
  text: 'Hi 👋 How can I help you today?',
  time: Date.now(),
};

const QUICK_REPLIES = [
  '💼 Salary & Pricing',
  '🌍 Countries',
  '🏥 Jobs & Roles',
  '🎓 Free Training',
  '📄 Documents Needed',
  '📞 Contact Us',
  '✨ How to Apply',
];

interface Rule {
  match: string[];
  reply: string;
}

const RULES: Rule[] = [
  // 1. GREETINGS & CASUAL
  {
    match: [
      'hello', 'hi', 'hey', 'namaste', 'namaskar', 'halo', 'hola', 'hie',
      'good morning', 'good afternoon', 'good evening', 'kaise ho', 'kaisa hai',
      'whats up', 'whatsup', 'sup', 'yo'
    ],
    reply:
      "Hello! 😊 Welcome to Dais World. I am your AI career assistant. How can I help you today? You can ask me about international job vacancies, salary packages, European/Middle Eastern countries, free language training, or how to apply!",
  },

  // 2. COMPANY OVERVIEW & LOCATION
  {
    match: [
      'about dais world', 'who are you', 'what is dais world', 'company',
      'knooviq', 'dais world', 'founder', 'office', 'where are you located',
      'address', 'mumbai office', 'malad', 'location', 'genuine', 'trust',
      'fraud', 'real', 'reviews'
    ],
    reply:
      "🏢 Dais World Endeavor Private Limited is a premier international recruitment, corporate housing, and overseas career consultancy headquartered in Mumbai, India.\n\n📍 Office: 1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai, Maharashtra.\n\n✅ 500+ successful overseas placements across Europe & Middle East with 100% legal visa compliance and structured candidate support.",
  },

  // 3. SALARY, EARNINGS & COMPENSATION
  {
    match: [
      'salary', 'salaries', 'pay', 'income', 'earning', 'earnings', 'package',
      'kitna milega', 'salary kitni', 'paisa', 'wage', 'wages', 'per month',
      'euro', 'aed', 'sar', 'dinar', 'stipend'
    ],
    reply:
      "💰 International Salary Ranges:\n\n• 🇳🇱 Netherlands: €3,200 – €5,200 / month (₹2.8L – ₹4.6L)\n• 🇩🇪 Germany: €3,000 – €4,800 / month (₹2.6L – ₹4.2L)\n• 🇧🇪 Belgium & Nordics: €3,100 – €5,500 / month\n• 🇦🇪 UAE / Middle East: 8,000 – 18,000 AED / month (Tax-Free)\n\n🎁 Plus benefits: Overtime pay, healthcare insurance, paid annual leave, and pension contributions.",
  },

  // 4. PRICING, FEES & CHARGES
  {
    match: [
      'price', 'pricing', 'cost', 'fees', 'fee', 'charge', 'charges',
      'expenses', 'kharcha', 'kitna paisa', 'free hai kya', 'is it free',
      'payment', 'registration fee'
    ],
    reply:
      "✨ Transparent & Candidate-Friendly Policy:\n\n• 🎓 Language training (Dutch / German B1-B2) is provided 100% FREE for selected candidates.\n• ✈️ Full visa filing, embassy attestation, and employer sponsorship support are included.\n• 💼 No hidden costs. Check our Services page or contact our counselors for complete transparent breakdown for your specific destination.",
  },

  // 5. COUNTRIES & DESTINATIONS
  {
    match: [
      'country', 'countries', 'where', 'destinations', 'abroad', 'overseas',
      'konse country', 'kon si country', 'europe', 'middle east', 'gulf'
    ],
    reply:
      "🌍 We actively place professionals across 10+ global destinations:\n\n🇪🇺 Europe: Netherlands, Germany, Belgium, Norway, Denmark, Sweden, Finland, Switzerland, Poland, Ireland\n🇦🇪 Middle East: UAE (Dubai/Abu Dhabi), Saudi Arabia, Qatar, Kuwait, Oman, Bahrain\n\nTap on the 'Countries' tab in the menu to explore job roles and salaries for each country!",
  },

  // 6. SPECIFIC COUNTRIES: NETHERLANDS, GERMANY, UAE, SAUDI
  {
    match: ['netherlands', 'holland', 'dutch', 'amsterdam', 'rotterdam'],
    reply:
      "🇳🇱 Netherlands Opportunities:\n• Positions: Registered Nurses, ICU/OT Specialists, Healthcare Assistants, Hospitality Staff\n• Salary: €3,200 – €5,200/month\n• Language: Dutch (Free 4-6 months B1 training provided by Dais World!)\n• High quality of life, 36-hour work week & PR pathway.",
  },
  {
    match: ['germany', 'german', 'berlin', 'munich', 'frankfurt', 'deutschland'],
    reply:
      "🇩🇪 Germany Opportunities:\n• Positions: Nurses (Pflegefachkraft), Doctors, Engineers, Technicians\n• Salary: €3,000 – €4,800/month\n• Language: German B1/B2 level (Training support provided)\n• Permanent Residency (PR) eligibility after 3 years.",
  },
  {
    match: ['uae', 'dubai', 'abu dhabi', 'saudi', 'arabia', 'qatar', 'kuwait', 'oman', 'bahrain', 'gulf'],
    reply:
      "🇦🇪 Middle East / Gulf Opportunities:\n• Positions: Healthcare, 5-Star Hospitality, Construction, Oil & Gas Engineers, Beauty & Wellness\n• Salary: 8,000 – 18,000 AED/SAR (100% Tax-Free)\n• Fast visa turnaround (3-6 weeks) with furnished accommodation & air tickets.",
  },

  // 7. HEALTHCARE & NURSING ROLES
  {
    match: [
      'nurse', 'nursing', 'nurses', 'registered nurse', 'ot nurse', 'icu nurse',
      'staff nurse', 'doctor', 'doctors', 'physician', 'dietitian', 'dietician',
      'phlebotomist', 'phlebotomy', 'yoga', 'ayurveda', 'hospital', 'healthcare',
      'medical', 'paramedical', 'care assistant'
    ],
    reply:
      "🏥 Healthcare Opportunities We Offer:\n\n• Registered Nurses (BSc / GNM / Post-BSc)\n• ICU & OT Specialist Nurses\n• Doctors & Medical Specialists\n• Certified Dietitians & Clinical Nutritionists\n• Phlebotomists & Lab Technicians\n• Yoga & Ayurveda Wellness Practitioners\n• Healthcare Assistants (HCAs)\n\nWe provide complete registration, license verification (BIG / Approbation / DHA), and hospital placements.",
  },

  // 8. HOSPITALITY, CONSTRUCTION, OIL & GAS, BEAUTY
  {
    match: [
      'hotel', 'hospitality', 'chef', 'chefs', 'cook', 'waiter', 'front desk',
      'housekeeping', 'restaurant', 'food and beverage', 'f&b'
    ],
    reply:
      "🏨 Hospitality Careers:\nWe recruit for luxury 5-star hotel chains, international resorts, and fine dining groups across Europe & Middle East for Executive Chefs, F&B Managers, Front Office, Housekeeping, and Culinary Specialists with accommodation included.",
  },
  {
    match: [
      'construction', 'engineer', 'engineering', 'civil', 'electrician',
      'plumber', 'welder', 'welding', 'pipefitter', 'carpenter', 'mason',
      'infrastructure', 'site engineer'
    ],
    reply:
      "🏗️ Construction & Engineering Careers:\nWe place Civil Engineers, MEP Technicians, Certified Welders, Master Electricians, and Heavy Machinery Operators in major infrastructure projects with high safety standards and visa sponsorship.",
  },
  {
    match: [
      'oil', 'gas', 'petroleum', 'rig', 'refinery', 'drilling', 'offshore',
      'safety officer', 'hse', 'pipeline'
    ],
    reply:
      "⛽ Oil & Gas Industry Careers:\nWe place Petroleum Engineers, Offshore Technicians, Pipeline Welders, HSE Safety Officers, and Maintenance Specialists in premier energy corporations across Middle East and Europe.",
  },
  {
    match: [
      'beauty', 'care', 'salon', 'spa', 'hair stylist', 'cosmetologist',
      'beautician', 'nail artist', 'massage therapist', 'wellness'
    ],
    reply:
      "💅 Beauty & Wellness Careers:\nOpportunities for Licensed Cosmetologists, Hair Stylists, Spa Therapists, Aesthetic Specialists, and Nail Technicians in luxury wellness centers and high-end salon brands.",
  },

  // 9. CORPORATE HOUSING & B2B
  {
    match: [
      'housing', 'corporate housing', 'accommodation', 'b2b', 'partnership',
      'employer', 'client', 'hire workforce', 'staffing solution', 'business housing'
    ],
    reply:
      "🏢 Corporate Housing & B2B Employer Partnerships:\nWe offer turnkey employee housing, municipal lease management, and high-volume workforce staffing for international hospital networks, hotel conglomerates, and infrastructure builders. Visit the 'Partners / B2B' page to submit a corporate proposal.",
  },

  // 10. LANGUAGE TRAINING (DUTCH / GERMAN)
  {
    match: [
      'language', 'dutch training', 'german training', 'learn dutch', 'course',
      'training', 'b1', 'b2', 'classes', 'online class', 'batch', 'duration'
    ],
    reply:
      "🎓 Language Training Program:\n\n• Dutch (B1 level) & German (B1/B2 level)\n• Duration: 4–6 months (Structured daily classes + medical vocabulary)\n• Certified Native & Expert Trainers\n• Small batch sizes with 100% exam preparation\n• FREE of cost for selected candidates!",
  },

  // 11. ELIGIBILITY & REQUIREMENTS
  {
    match: [
      'eligible', 'eligibility', 'qualification', 'qualifications', 'degree',
      'diploma', 'bsc', 'gnm', 'experience', 'fresher', 'freshers', 'age limit',
      'age', 'criteria', 'kya chahiye', 'document', 'documents', 'passport'
    ],
    reply:
      "📋 General Eligibility Requirements:\n\n1. Qualification: Relevant Degree or Diploma (e.g. BSc Nursing, GNM, Engineering, Hospitality)\n2. Experience: 0 to 2+ years (Freshers are also eligible for select training & placement tracks!)\n3. Passport: Valid international passport\n4. Language: Willingness to complete language training (Dutch/German if applying for Europe)\n5. Age: Generally 20 – 45 years.",
  },

  // 12. VISA & IMMIGRATION PROCESS
  {
    match: [
      'visa', 'work permit', 'mvv', 'immigration', 'embassy', 'attestation',
      'apostille', 'permit', 'sponsorship', 'residence permit'
    ],
    reply:
      "🛂 100% Legal Visa & Work Permit Support:\n\n• Dais World handles the complete end-to-end visa paperwork:\n• Employer sponsorship verification\n• Document attestation & Apostille\n• Embassy appointment & interview guidance\n• MVV / Single Permit processing\n• Relocation & airport reception support.",
  },

  // 13. TIMELINE / DURATION
  {
    match: [
      'timeline', 'how long', 'how much time', 'kitna time', 'kitne din',
      'process time', 'duration', 'when will i go', 'joining'
    ],
    reply:
      "⏱️ Placement Timeline:\n\n• Screening & Selection: 1 – 2 Weeks\n• Language Training (Europe): 4 – 6 Months\n• Licensing & Document Verification: Parallel with training\n• Visa Processing & Work Permit: 4 – 8 Weeks\n• Departure & Joining: Total 5 – 7 months from application to landing abroad!",
  },

  // 14. HOW TO APPLY & RESUME
  {
    match: [
      'apply', 'application', 'apply now', 'register', 'sign up', 'form',
      'resume', 'cv', 'kaise apply', 'where to apply', 'upload'
    ],
    reply:
      "📝 How to Apply:\n\n1. Click the 'Apply Now' button on our website.\n2. Fill in your basic details (Name, Contact, Profession & Desired Country).\n3. Upload your Resume / CV (PDF, DOC, DOCX).\n4. Our senior recruitment counselor will contact you within 24–48 hours for a free profile assessment!",
  },

  // 15. CONTACT, PHONE, EMAIL, WHATSAPP
  {
    match: [
      'contact', 'email', 'phone', 'call', 'number', 'mobile', 'reach',
      'support', 'whatsapp', 'helpline', ' baat karni hai', 'contact number'
    ],
    reply:
      "📞 Connect With Us Directly:\n\n• Phone: 8976697001\n• WhatsApp: +91 8976697001\n• Email: info@daisworld.com / aditya.s@daisworld.com\n• Hours: Monday – Saturday (11:00 AM – 8:00 PM IST)\n• Address: 1210, One World by Sanjar, Malad West, Mumbai, India.\n\nFeel free to call or WhatsApp us anytime!",
  },

  // 16. GRATITUDE & THANKS
  {
    match: [
      'thank', 'thanks', 'thank you', 'dhanyawad', 'shukriya', 'great',
      'awesome', 'perfect', 'helpful', 'good', 'nice', 'ok', 'okay', 'theek hai'
    ],
    reply:
      "You're most welcome! 😊 It is our pleasure to guide you. If you have any more questions, feel free to ask anytime. Whenever you're ready, click 'Apply Now' to begin your overseas journey!",
  },

  // 17. GOODBYE & FAREWELL
  {
    match: ['bye', 'goodbye', 'see you', 'later', 'alvida', 'tata', 'good night'],
    reply:
      "Goodbye! 👋 Have a wonderful day ahead. Whenever you are ready to take your career global, Dais World is here to support you every step of the way. Click 'Apply Now' anytime!",
  },
];

// Fallback response for out-of-box / unknown queries
const FALLBACK_REPLY =
  "I apologize, I might not have the exact information for that specific query right now! 🙏\n\nI am specially trained to assist you with:\n• 🏥 International Job Vacancies (Healthcare, Hospitality, Construction, Oil & Gas)\n• ✈️ Free Language Training, Visa & Relocation Support\n• 💰 Salary Packages & Country Requirements\n• 🏢 Corporate Housing & Employer Partnerships\n\n📞 For personalized guidance, you can speak directly with our expert team at 8976697001 or email info@daisworld.com.\n\nOr click 'Apply Now' to submit your profile for a free consultation!";

function getBotReply(input: string): string {
  const clean = input
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .trim();

  if (!clean) {
    return "Hi there! How can I help you today? Feel free to ask about our global jobs, countries, salaries, or application process.";
  }

  // Find matching rule with highest keyword specificity
  for (const rule of RULES) {
    if (rule.match.some((kw) => clean.includes(kw))) {
      return rule.reply;
    }
  }

  return FALLBACK_REPLY;
}

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      const parsed = JSON.parse(raw) as Message[];

      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // ignore
  }

  return [WELCOME];
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);

  // Fixed chatbot position
  const MARGIN = 20;

  useEffect(() => {
    const history = loadHistory();

    setMessages(history);

    idRef.current =
      history.length > 0
        ? Math.max(...history.map((m) => m.id)) + 1
        : 1;
  }, []);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setUnread(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    } else if (messages.length > 1) {
      setUnread(true);
    }
  }, [open, messages.length, scrollToBottom]);

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open, scrollToBottom]);

  const persist = (msgs: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    } catch {
      // ignore
    }
  };

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const userMsg: Message = {
      id: idRef.current++,
      sender: 'user',
      text: trimmed,
      time: Date.now(),
    };

    const next = [...messages, userMsg];

    setMessages(next);
    persist(next);
    setInput('');

    setTyping(true);

    const reply = getBotReply(trimmed);
    const delay = 600 + Math.min(reply.length * 12, 1200);

    setTimeout(() => {
      const botMsg: Message = {
        id: idRef.current++,
        sender: 'bot',
        text: reply,
        time: Date.now(),
      };

      const updated = [...next, botMsg];

      setMessages(updated);
      persist(updated);
      setTyping(false);
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendUserMessage(input);
  };

  const handleQuickReply = (text: string) => {
    sendUserMessage(text);
  };

  const clearChat = () => {
    const fresh = [
      {
        ...WELCOME,
        time: Date.now(),
      },
    ];

    setMessages(fresh);
    persist(fresh);
    idRef.current = 1;
  };

  // Fixed button position
  const btnStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: `${MARGIN}px`,
    right: `${MARGIN}px`,
  };

  return (
    <>
      {/* =====================================
          FIXED CHATBOT BUTTON
          ===================================== */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        title={open ? 'Close chat' : 'Open chat'}
        style={btnStyle}
        className={`fixed z-[90]
          w-14 h-14
          rounded-full
          shadow-2xl
          transition-[background,transform]
          duration-300
          flex items-center justify-center
          ${open
            ? 'bg-slate-700 scale-90'
            : 'bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-110 animate-pulse-ring'
          }`}
      >
        {open ? (
          <X size={24} color="white" />
        ) : (
          <MessageCircle size={24} color="white" />
        )}

        {unread && !open && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            !
          </span>
        )}
      </button>

      {/* =====================================
          FIXED SIZE CHAT WINDOW
      {/* =====================================
          FIXED SIZE CHAT WINDOW
          ===================================== */}
      {open && (
        <div
          className="
            fixed
            z-[90]
            left-3
            right-3
            bottom-[72px]

            sm:left-auto
            sm:right-5
            sm:bottom-24
            sm:w-[384px]

            animate-fadeInUp
          "
          style={{
            maxWidth: '100%',
            height: 'min(520px, calc(100dvh - 90px))',
          }}
        >
          <div
            className="
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              flex
              flex-col
              w-full
              h-full
            "
          >
            {/* =====================================
                HEADER
                ===================================== */}
            <div
              className="
                relative
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                px-4
                sm:px-5
                py-3
                sm:py-4
                flex
                items-center
                justify-between
                flex-shrink-0
              "
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative">
                  <div
                    className="
                      w-9 h-9
                      sm:w-11 sm:h-11
                      bg-white/20
                      rounded-full
                      flex
                      items-center
                      justify-center
                      backdrop-blur-sm
                    "
                  >
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <span
                    className="
                      absolute
                      bottom-0.5
                      right-0.5
                      w-2.5 h-2.5
                      sm:w-3 sm:h-3
                      bg-emerald-400
                      rounded-full
                      border-2
                      border-blue-600
                    "
                  />
                </div>

                <div>
                  <p className="text-white font-black text-xs sm:text-sm">
                    DAIS WORLD Assistant
                  </p>

                  <p className="text-white/70 text-[10px] sm:text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
                className="
                  w-8 h-8
                  sm:w-9 sm:h-9
                  bg-white/10
                  hover:bg-white/20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-colors
                  flex-shrink-0
                "
              >
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>

            {/* =====================================
                MESSAGES
                ===================================== */}
            <div
              ref={scrollRef}
              className="
                flex-1
                min-h-0
                overflow-y-auto
                px-3
                sm:px-4
                py-3
                sm:py-4
                space-y-3
                bg-slate-50
              "
            >
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  msg={msg}
                />
              ))}

              {/* Typing Indicator */}
              {typing && (
                <div className="flex items-end gap-2">
                  <div
                    className="
                      w-7 h-7
                      rounded-full
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-500
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    <Bot className="w-4 h-4 text-white" />
                  </div>

                  <div
                    className="
                      bg-white
                      rounded-2xl
                      rounded-bl-md
                      px-4
                      py-3
                      shadow-sm
                      border
                      border-slate-100
                    "
                  >
                    <div className="flex gap-1 items-center">
                      <span
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0ms' }}
                      />

                      <span
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />

                      <span
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* =====================================
                QUICK REPLIES
                ===================================== */}
            {messages.length <= 1 && !typing && (
              <div
                className="
                  px-3
                  sm:px-4
                  pb-2
                  flex
                  flex-wrap
                  gap-1.5
                  sm:gap-2
                  bg-slate-50
                  flex-shrink-0
                "
              >
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickReply(q)}
                    className="
                      px-2.5
                      sm:px-3
                      py-1.5
                      bg-white
                      border
                      border-blue-200
                      text-blue-600
                      hover:bg-blue-50
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      font-bold
                      transition-colors
                    "
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* =====================================
                INPUT
                ===================================== */}
            <form
              onSubmit={handleSubmit}
              className="
                p-2.5
                sm:p-3
                bg-white
                border-t
                border-slate-100
                flex
                items-center
                gap-2
                flex-shrink-0
              "
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="
                  flex-1
                  min-w-0
                  px-3
                  sm:px-4
                  py-2.5
                  rounded-2xl
                  bg-slate-100
                  focus:bg-white
                  focus:ring-2
                  focus:ring-blue-100
                  outline-none
                  transition-all
                  text-sm
                  text-slate-900
                  placeholder:text-slate-400
                "
              />

              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send"
                className="
                  w-10
                  h-10
                  flex-shrink-0
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  hover:shadow-lg
                  hover:shadow-blue-500/30
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================
   MESSAGE BUBBLE
   ========================================= */

function MessageBubble({
  msg,
}: {
  msg: Message;
}) {
  const isBot = msg.sender === 'bot';

  const time = new Date(msg.time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'
        }`}
    >
      {isBot && (
        <div
          className="
            w-7 h-7
            rounded-full
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            flex
            items-center
            justify-center
            flex-shrink-0
          "
        >
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}

      <div
        className={`max-w-[78%] ${isBot ? '' : 'items-end'
          }`}
      >
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${isBot
              ? 'bg-white text-slate-800 rounded-bl-md border border-slate-100'
              : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-br-md'
            }`}
        >
          {msg.text}
        </div>

        <p
          className={`text-[10px] text-slate-400 mt-1 ${isBot ? 'text-left' : 'text-right'
            }`}
        >
          {time}
        </p>
      </div>

      {!isBot && (
        <div
          className="
            w-7 h-7
            rounded-full
            bg-slate-200
            flex
            items-center
            justify-center
            flex-shrink-0
          "
        >
          <UserIcon className="w-4 h-4 text-slate-500" />
        </div>
      )}
    </div>
  );
}