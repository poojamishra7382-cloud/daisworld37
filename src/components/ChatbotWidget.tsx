import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageCircle, X, Send, Trash2, Bot, User as UserIcon,
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: number;
}

const STORAGE_KEY = 'knooviq_chat_history';
const POS_KEY = 'knooviq_chat_btn_pos';

const WELCOME: Message = {
  id: 0,
  sender: 'bot',
  text: "Hi \uD83D\uDC4B How can I help you today?",
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
    match: ['price', 'pricing', 'cost', 'fees', 'fee', 'charge', 'charges', 'salary', 'pay'],
    reply: "You can check our pricing and salary details on the Services page. Tap 'Services' in the menu to see package options and salary comparisons for each country.",
  },
  {
    match: ['contact', 'email', 'phone', 'call', 'reach', 'support'],
    reply: "You can contact us at aditya.s@knooviq.com or call 8788631659. We're available Mon–Sat, 9am–7pm IST. You can also use the Contact page to send us a message directly.",
  },
  {
    match: ['hello', 'hi', 'hey', 'namaste', 'namaskar'],
    reply: "Hello! \uD83D\uDE0A How can I assist you? I can tell you about our services, pricing, countries we offer, or help you apply.",
  },
  {
    match: ['country', 'countries', 'where', 'location', 'europe'],
    reply: "We help nurses relocate to 8 European countries: Netherlands, Germany, Belgium, Norway, Denmark, Sweden, Finland, and Switzerland. Check the Countries page for details on each.",
  },
  {
    match: ['service', 'services', 'what do you do', 'help', 'offer'],
    reply: "We offer 5 core services: Language training (Dutch/German), Visa processing, IT skills training, Nursing licensing & job placement, and full relocation support. Visit the Services page to learn more.",
  },
  {
    match: ['apply', 'application', 'apply now', 'job', 'register', 'sign up'],
    reply: "You can apply by clicking the 'Apply Now' button anywhere on the site. Fill in your details and upload your resume — our team will contact you within 48 hours.",
  },
  {
    match: ['resume', 'cv', 'upload'],
    reply: "You can upload your resume (PDF, DOC, or DOCX) directly in the Apply Now form. Just click any 'Apply Now' button on the site.",
  },
  {
    match: ['passport', 'documents', 'document'],
    reply: "You'll need a valid passport, nursing qualification certificates, and a resume. Our team will guide you through any additional documents needed for your specific country.",
  },
  {
    match: ['language', 'dutch', 'german', 'training'],
    reply: "We provide free Dutch and German language training from A1 to B2 level, including medical vocabulary and exam preparation. It's part of our service package.",
  },
  {
    match: ['visa', 'work permit', 'mvv'],
    reply: "We handle the complete visa process — documentation, embassy interview prep, attestation, MVV and work permit processing. Check the Services page for details.",
  },
  {
    match: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'perfect'],
    reply: "You're welcome! \uD83D\uDE0A If you have any more questions, feel free to ask. You can also apply directly by clicking 'Apply Now'.",
  },
  {
    match: ['bye', 'goodbye', 'see you', 'later'],
    reply: "Goodbye! \uD83D\uDC4B We're always here if you need help. Click 'Apply Now' anytime to start your journey.",
  },
];

const FALLBACK = "Sorry, I didn't understand that. \uD83D\uDE15 You can try asking about: pricing, contact, services, countries, or how to apply. Or click 'Apply Now' to get started!";

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
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch { /* ignore */ }
  return [WELCOME];
}

interface Pos { x: number; y: number; }

const BTN_SIZE = 56;
const MARGIN = 20;

function clampPos(p: Pos): Pos {
  const maxX = window.innerWidth - BTN_SIZE - MARGIN;
  const maxY = window.innerHeight - BTN_SIZE - MARGIN;
  return {
    x: Math.min(Math.max(p.x, MARGIN), Math.max(MARGIN, maxX)),
    y: Math.min(Math.max(p.y, MARGIN), Math.max(MARGIN, maxY)),
  };
}

function loadPos(): Pos | null {
  try {
    const raw = localStorage.getItem(POS_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Pos;
      if (typeof p.x === 'number' && typeof p.y === 'number') return p;
    }
  } catch { /* ignore */ }
  return null;
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

  // Draggable button state
  const [pos, setPos] = useState<Pos>({ x: -1, y: -1 }); // -1 = default bottom-right
  const dragRef = useRef<{ dragging: boolean; moved: boolean; startX: number; startY: number; offsetX: number; offsetY: number }>({
    dragging: false, moved: false, startX: 0, startY: 0, offsetX: 0, offsetY: 0,
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = loadPos();
    if (stored) {
      setPos(clampPos(stored));
    }
  }, []);

  // Handle viewport resize - keep button on screen
  useEffect(() => {
    const onResize = () => {
      setPos((prev) => {
        if (prev.x < 0) return prev;
        return clampPos(prev);
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const persistPos = (p: Pos) => {
    try { localStorage.setItem(POS_KEY, JSON.stringify(p)); } catch { /* ignore */ }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (open) return; // when chat is open, button acts as close
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    dragRef.current = {
      dragging: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    btn.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    const dx = Math.abs(e.clientX - d.startX);
    const dy = Math.abs(e.clientY - d.startY);
    if (!d.moved && (dx > 6 || dy > 6)) {
      d.moved = true;
    }
    if (d.moved) {
      const newX = e.clientX - d.offsetX;
      const newY = e.clientY - d.offsetY;
      setPos(clampPos({ x: newX, y: newY }));
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    d.dragging = false;
    try { btnRef.current?.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
    if (!d.moved) {
      // it was a click, not a drag → toggle
      setOpen((v) => !v);
    } else {
      // save final position
      setPos((prev) => {
        const clamped = clampPos(prev);
        persistPos(clamped);
        return clamped;
      });
    }
  };

  // Double-click resets position to default
  const onDoubleClick = () => {
    setPos({ x: -1, y: -1 });
    persistPos({ x: -1, y: -1 });
  };

  const isDefaultPos = pos.x < 0;

  useEffect(() => {
    const history = loadHistory();
    setMessages(history);
    idRef.current = history.length > 0
      ? Math.max(...history.map((m) => m.id)) + 1
      : 1;
  }, []);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    } else if (messages.length > 1) {
      setUnread(true);
    }
  }, [open, messages.length, scrollToBottom]);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open, scrollToBottom]);

  const persist = (msgs: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    } catch { /* ignore */ }
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
    const fresh = [{ ...WELCOME, time: Date.now() }];
    setMessages(fresh);
    persist(fresh);
    idRef.current = 1;
  };

  // Compute button position style
  const btnStyle: React.CSSProperties = isDefaultPos
    ? { bottom: `${MARGIN}px`, right: `${MARGIN}px` }
    : { left: `${pos.x}px`, top: `${pos.y}px` };

  // Compute chat window position relative to button
  let chatStyle: React.CSSProperties = {};
  if (!isDefaultPos) {
    const chatWidth = Math.min(384, window.innerWidth - 2 * MARGIN);
    const placeLeft = pos.x + BTN_SIZE + chatWidth + MARGIN > window.innerWidth;
    // const placeUp = pos.y + 360 + MARGIN > window.innerHeight;
    const chatHeight = Math.min(window.innerHeight * 0.8, 500); // dynamic height
const placeUp = pos.y + chatHeight + MARGIN > window.innerHeight;
    chatStyle = {
      left: placeLeft ? `${pos.x - chatWidth - MARGIN}px` : `${pos.x}px`,
      top: placeUp ? `${Math.max(MARGIN, pos.y - 340)}px` : `${pos.y + BTN_SIZE + MARGIN}px`,
      width: `${chatWidth}px`,
       maxHeight: `${chatHeight}px`, 
      right: 'auto',
      bottom: 'auto',
    };
  }

  return (
    <>
      {/* Floating Button (draggable) */}
      {/* <button
        ref={btnRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onDoubleClick={onDoubleClick}
        aria-label={open ? 'Close chat' : 'Open chat — drag to move, double-click to reset'}
        title="Drag to move · Double-click to reset"
        style={btnStyle}
        className={`fixed z-[90] w-14 h-14 rounded-full shadow-2xl transition-[background,transform] duration-300 flex items-center justify-center touch-none select-none ${
          open
            ? 'bg-slate-700 scale-90'
            : 'bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-110 animate-pulse-ring'
        } ${dragRef.current.dragging && dragRef.current.moved ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {open ? (
          <X className="w-6 h-6 text-white pointer-events-none" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white pointer-events-none" />
        )}
        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white pointer-events-none">
            !
          </span>
        )}
      </button> */}
    <button
  ref={btnRef}
  onPointerDown={onPointerDown}
  onPointerMove={onPointerMove}
  onPointerUp={(e) => {
    onPointerUp(e);

    // 👉 CLICK pe hi open/close hoga (drag pe nahi)
    if (!dragRef.current.moved) {
      setOpen(!open);
    }
  }}
  onDoubleClick={onDoubleClick}
  aria-label={open ? 'Close chat' : 'Open chat — drag to move, double-click to reset'}
  title="Drag to move · Double-click to reset"
  style={btnStyle}
  className={`fixed z-[90] w-14 h-14 rounded-full shadow-2xl transition-[background,transform] duration-300 flex items-center justify-center touch-none select-none ${
    open
      ? 'bg-slate-700 scale-90'
      : 'bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-110 animate-pulse-ring'
  } ${dragRef.current.dragging && dragRef.current.moved ? 'cursor-grabbing' : 'cursor-grab'}`}
>
  {/* 👉 ICON (emoji / cancel button) */}
  {open ? (
    <X size={24} color="white" />
  ) : (
    <MessageCircle size={24} color="white" />
  )}

  {/* 👉 unread badge */}
  {unread && !open && (
    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
      !
    </span>
  )}
</button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed z-[90] w-[calc(100vw-2.5rem)] sm:w-96 animate-fadeInUp"
          style={isDefaultPos
            ? { bottom: '6rem', right: `${MARGIN}px` }
            : chatStyle}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: '70vh' }}>
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Knooviq Assistant</p>
                  <p className="text-white/70 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50"
              style={{ minHeight: '280px' }}
            >
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}

              {typing && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-slate-100">
                    <div className="flex gap-1 items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && !typing && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 bg-slate-50">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickReply(q)}
                    className="px-3 py-1.5 bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full text-xs font-bold transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send"
                className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30 text-white rounded-full flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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

function MessageBubble({ msg }: { msg: Message }) {
  const isBot = msg.sender === 'bot';
  const time = new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div className={`max-w-[78%] ${isBot ? '' : 'items-end'}`}>
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isBot
              ? 'bg-white text-slate-800 rounded-bl-md border border-slate-100'
              : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-br-md'
          }`}
        >
          {msg.text}
        </div>
        <p className={`text-[10px] text-slate-400 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>{time}</p>
      </div>
      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
          <UserIcon className="w-4 h-4 text-slate-500" />
        </div>
      )}
    </div>
  );
}
