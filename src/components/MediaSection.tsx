import { Newspaper, Tv, Radio, Award } from 'lucide-react';

const media = [
  {
    type: 'Newspaper',
    icon: Newspaper,
    title: 'Mumbai Agency Bridges Nursing Gap Between India and Europe',
    source: 'The Hindu',
    date: 'March 2024',
    excerpt: 'Knooviq Overseas has placed over 500 Indian nurses in West European hospitals, addressing critical healthcare shortages...',
  },
  {
    type: 'TV Interview',
    icon: Tv,
    title: 'Founder Speaks on Opportunities for Indian Nurses Abroad',
    source: 'NDTV',
    date: 'January 2024',
    excerpt: 'In an exclusive interview, our founder discussed how Indian nursing professionals are finding rewarding careers in the Netherlands...',
  },
  {
    type: 'Radio',
    icon: Radio,
    title: 'The European Dream: Indian Healthcare Workers Share Stories',
    source: 'All India Radio',
    date: 'November 2023',
    excerpt: 'Real stories from nurses who relocated to Europe through Knooviq — their challenges, triumphs, and advice for others...',
  },
  {
    type: 'Award',
    icon: Award,
    title: 'Knooviq Wins Excellence in International Recruitment Award',
    source: 'Healthcare India Summit',
    date: 'October 2023',
    excerpt: 'Recognized for ethical recruitment practices and outstanding contribution to international healthcare placement...',
  },
];

export default function MediaSection() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">In The News</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Media & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our work has been featured in leading publications and recognized by industry bodies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {media.map(({ type, icon: Icon, title, source, date, excerpt }) => (
            <div key={title} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{type}</span>
                  <span className="text-xs text-slate-400">{date}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 leading-snug">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">{excerpt}</p>
                <p className="text-slate-400 text-xs font-medium">— {source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
