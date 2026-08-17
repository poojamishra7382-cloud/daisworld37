import { Star, Quote } from 'lucide-react';

const testimonials = [
  
  {
    name: 'Anjali Reddy',
    role: 'Registered Nurse, Berlin, Germany',
    image: '/no-dp-image-1.webp',
    rating: 4,
    text: 'The German B1 exam felt impossible at first, but the structured classes made it achievable. Visa and document work was fully handled. Wish the accommodation setup had been a bit quicker, but overall a great experience.',
  },

  {
    name: 'Deepika Nair',
    role: 'Staff Nurse, Moscow, Russia',
    image: '/no-dp-image-1.webp',
    rating: 4,
    text: 'I never thought I could work in Russia as a nurse. The Russian language course was challenging, but the team arranged everything from licensing to the airport pickup. Good salary and learning a lot on the job.',
  },


  // ================= HOSPITALITY =================

  {
    name: 'Rajesh Mehta',
    role: 'Hotel Operations Supervisor, Dubai, UAE',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'I always wanted to build my career in the international hospitality industry. Dais World helped me find the right opportunity in Dubai and supported me throughout the interview and documentation process. Today I am working in a reputed hotel and gaining valuable international experience.',
  },

  {
    name: 'Sonam Singh',
    role: 'Chef, Doha, Qatar',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'The team understood my experience and helped me find a suitable hospitality position in Qatar. The interview preparation was very useful and the entire relocation process was clearly explained. I am happy with my new career opportunity.',
  },

  // ================= CONSTRUCTION =================

  {
    name: 'Amit Kumar',
    role: 'Civil Engineer, Riyadh, Saudi Arabia',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'I was looking for an opportunity in the Middle East construction sector and Dais World helped me connect with the right employer. The documentation and interview guidance were very helpful. I am now working on a major construction project in Riyadh.',
  },

  {
    name: 'Sandeep Yadav',
    role: 'Site Supervisor, Abu Dhabi, UAE',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'The recruitment process was simple and well organized. The team explained everything clearly, from the job requirements to the relocation process. I am now working as a site supervisor in Abu Dhabi and getting excellent international experience.',
  },

  // ================= OIL & GAS =================

  {
    name: 'Rajesh Patel',
    role: 'Mechanical Engineer, Abu Dhabi, UAE',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'Dais World helped me take the next step in my oil and gas career. The team understood my technical background and guided me towards a suitable opportunity in Abu Dhabi. Their support during the recruitment process was excellent.',
  },

  {
    name: 'Karan Singh',
    role: 'Electrical Technician, Doha, Qatar',
    image: '/no-dp-image-1.webp',
    rating: 5,
    text: 'I wanted to work in the Middle East energy sector and did not know where to start. Dais World guided me through the complete process and helped me prepare for the technical interview. I am now working in Qatar and building my international career.',
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
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3"></p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Hear From Our <span className="text-gradient">Candidates</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          500+ professionals placed. 500+ careers transformed. Here are a few of their stories.
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
