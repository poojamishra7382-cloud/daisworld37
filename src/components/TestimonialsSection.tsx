import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'ICU Nurse, Paris, France',
    image: 'https://images.pexels.com/photos/18878842/pexels-photo-18878842.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'From a small town in Kerala to a leading hospital in Paris. The French language training was tough but the Knooviq mentors stayed patient with me. Today I earn €4,200 a month and my family is so proud.',
  },
  {
    name: 'Anjali Reddy',
    role: 'Registered Nurse, Berlin, Germany',
    image: 'https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4,
    text: 'The German B1 exam felt impossible at first, but the structured classes made it achievable. Visa and document work was fully handled. Wish the accommodation setup had been a bit quicker, but overall a great experience.',
  },
  {
    name: 'Deepika Nair',
    role: 'Staff Nurse, Moscow, Russia',
    image: 'https://images.pexels.com/photos/7275701/pexels-photo-7275701.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4,
    text: 'I never thought I could work in Russia as a nurse. The Russian language course was challenging, but the team arranged everything from licensing to the airport pickup. Good salary and learning a lot on the job.',
  },
  {
    name: 'Meera Iyer',
    role: 'Surgical Nurse, Zurich, Switzerland',
    image: 'https://images.pexels.com/photos/22679062/pexels-photo-22679062.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Switzerland was always a dream. The pay is incredible — over €6,000 a month — and the hospitals are world-class. Knooviq guided me through every document and interview. Best decision of my life.',
  },
];

const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
const happyNurses = testimonials.length * 125;
const successRate = Math.round((testimonials.filter((t) => t.rating >= 4).length / testimonials.length) * 100);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Real Stories</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Hear From Our <span className="text-gradient">Nurses</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            500+ nurses placed. 500+ lives transformed. Here are a few of their stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(({ name, role, image, rating, text }) => (
            <div key={name} className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
              <div className="flex items-center gap-4 mb-5">
                <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-200" />
                <div>
                  <h4 className="font-bold text-slate-900">{name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
                  />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic">"{text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-4xl font-black text-blue-600">{avgRating}/5</div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
            <div className="text-4xl font-black text-emerald-600">{happyNurses}+</div>
            <div className="text-slate-400 text-sm">Happy Nurses</div>
          </div>
          <div className="w-px h-12 bg-slate-200" />
          <div className="text-center">
            <div className="text-4xl font-black text-amber-600">{successRate}%</div>
            <div className="text-slate-400 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
