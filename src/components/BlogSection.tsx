import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    category: 'Career Guide',
    title: '5 Things Every Indian Nurse Should Know Before Moving to Europe',
    excerpt: 'From language requirements to cultural adjustments, here\'s our essential preparation checklist...',
    date: 'June 15, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    category: 'Success Story',
    title: 'From Mumbai to Amsterdam: Priya\'s Journey to €5,500/month',
    excerpt: 'Read how a young nurse from Mumbai transformed her career and life in just 6 months...',
    date: 'May 28, 2024',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    category: 'Living Abroad',
    title: 'Understanding Dutch Healthcare: A Guide for New Arrivals',
    excerpt: 'The Dutch healthcare system is unique. Here\'s what Indian nurses need to know about their new workplace...',
    date: 'May 10, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/262663/pexels-photo-262663.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Resources</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Latest <span className="text-gradient">Articles</span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(({ category, title, excerpt, date, readTime, image }) => (
            <article key={title} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-5">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {readTime}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-snug">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">{excerpt}</p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
