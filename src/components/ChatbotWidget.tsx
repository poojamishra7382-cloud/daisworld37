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
  'Pricing',
  'Contact',
  'Countries',
  'Services',
  'Apply',
];

interface Rule {
  match: string[];
  reply: string;
}

const RULES: Rule[] = [
  {
    match: [
      'price',
      'pricing',
      'cost',
      'fees',
      'fee',
      'charge',
      'charges',
      'salary',
      'pay',
    ],
    reply:
      "You can check our pricing and salary details on the Services page. Tap 'Services' in the menu to see package options and salary comparisons for each country.",
  },
  {
    match: ['contact', 'email', 'phone', 'call', 'reach', 'support'],
    reply:
      "You can contact us at aditya.s@daisworld.com or call 8976697001. We're available Mon–Sat, 9am–7pm IST. You can also use the Contact page to send us a message directly.",
  },
  {
    match: ['hello', 'hi', 'hey', 'namaste', 'namaskar'],
    reply:
      "Hello! 😊 How can I assist you? I can tell you about our services, pricing, countries we offer, or help you apply.",
  },
  {
    match: ['country', 'countries', 'where', 'location', 'europe'],
    reply:
      'We help nurses relocate to 8 European countries: Netherlands, Germany, Belgium, Norway, Denmark, Sweden, Finland, and Switzerland. Check the Countries page for details on each.',
  },
  {
    match: ['service', 'services', 'what do you do', 'help', 'offer'],
    reply:
      "We offer 5 core services: Language training (Dutch/German), Visa processing, IT skills training, Nursing licensing & job placement, and full relocation support. Visit the Services page to learn more.",
  },
  {
    match: ['apply', 'application', 'apply now', 'job', 'register', 'sign up'],
    reply:
      "You can apply by clicking the 'Apply Now' button anywhere on the site. Fill in your details and upload your resume — our team will contact you within 48 hours.",
  },
  {
    match: ['resume', 'cv', 'upload'],
    reply:
      "You can upload your resume (PDF, DOC, or DOCX) directly in the Apply Now form. Just click any 'Apply Now' button on the site.",
  },
  {
    match: ['passport', 'documents', 'document'],
    reply:
      "You'll need a valid passport, nursing qualification certificates, and a resume. Our team will guide you through any additional documents needed for your specific country.",
  },
  {
    match: ['language', 'dutch', 'german', 'training'],
    reply:
      "We provide free Dutch and German language training from A1 to B2 level, including medical vocabulary and exam preparation. It's part of our service package.",
  },
  {
    match: ['visa', 'work permit', 'mvv'],
    reply:
      'We handle the complete visa process — documentation, embassy interview prep, attestation, MVV and work permit processing. Check the Services page for details.',
  },
  {
    match: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'perfect'],
    reply:
      "You're welcome! 😊 If you have any more questions, feel free to ask. You can also apply directly by clicking 'Apply Now'.",
  },
  {
    match: ['bye', 'goodbye', 'see you', 'later'],
    reply:
      "Goodbye! 👋 We're always here if you need help. Click 'Apply Now' anytime to start your journey.",
  },
];

const FALLBACK =
  "Sorry, I didn't understand that. 😕 You can try asking about: pricing, contact, services, countries, or how to apply. Or click 'Apply Now' to get started!";

function getBotReply(input: string): string {
  const text = input.toLowerCase().trim();

  for (const rule of RULES) {
    if (rule.match.some((kw) => text.includes(kw))) {
      return rule.reply;
    }
  }

  return FALLBACK;
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
          ${
            open
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
          ===================================== */}
      {open && (
        <div
          className="
            fixed
            z-[90]
            left-4
            right-4
            bottom-20

            sm:left-auto
            sm:right-5
            sm:bottom-24
            sm:w-[384px]

            animate-fadeInUp
          "
          style={{
            width: 'auto',
            maxWidth: '384px',

            /*
             * FIXED HEIGHT
             * Chatbot will NOT grow/shrink
             * when question/answer changes.
             */
            height: 'min(520px, calc(100dvh - 110px))',
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
      className={`flex items-end gap-2 ${
        isBot ? 'justify-start' : 'justify-end'
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
        className={`max-w-[78%] ${
          isBot ? '' : 'items-end'
        }`}
      >
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isBot
              ? 'bg-white text-slate-800 rounded-bl-md border border-slate-100'
              : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-br-md'
          }`}
        >
          {msg.text}
        </div>

        <p
          className={`text-[10px] text-slate-400 mt-1 ${
            isBot ? 'text-left' : 'text-right'
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