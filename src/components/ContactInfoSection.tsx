import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const contactCards = [
  { icon: Phone, label: 'Call Us', value: '8788631659', sub: 'Mon-Sat, 9am-7pm IST', color: 'bg-blue-500' },
  { icon: Mail, label: 'Email Us', value: 'info@knooviqoverseas.com', sub: 'We reply within 24 hours', color: 'bg-cyan-500' },
  { icon: MessageCircle, label: 'WhatsApp', value: '8788631659', sub: 'Quick chat support', color: 'bg-emerald-500' },
];

export default function ContactInfoSection() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have questions? Ready to apply? Reach out through any of these channels. We're here to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactCards.map(({ icon: Icon, label, value, sub, color }) => (
            <a
              key={label}
              href="#contact"
              className="glassmorphism rounded-3xl p-7 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`inline-flex w-14 h-14 ${color} rounded-2xl items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <p className="text-white/50 text-sm uppercase tracking-widest mb-1">{label}</p>
              <p className="text-white font-black text-lg mb-1">{value}</p>
              <p className="text-white/40 text-xs">{sub}</p>
            </a>
          ))}
        </div>

        {/* Office */}
        <div className="glassmorphism rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white font-black text-xl">Our Office</h3>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              DIAS WORLD<br />
              Mumbai, Maharashtra<br />
              India
            </p>
            <div className="flex items-center gap-3 text-white/60">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>Monday - Saturday: 9:00 AM - 7:00 PM IST</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-48">
            <iframe
              title="Office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.7,19.0,72.9,19.2&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
