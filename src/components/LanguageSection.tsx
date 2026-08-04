import { Volume2, BookOpen, MessageCircle, Languages } from 'lucide-react';

export default function LanguageSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Free Training Included</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Learn <span className="text-gradient">Dutch</span> With Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Don't speak Dutch? No problem. We provide comprehensive B1-level Dutch language training to every selected candidate — at no cost. Our certified trainers use a proven methodology that gets you job-ready in 4-6 months.
            </p>

            <div className="grid gap-4">
              {[
                { icon: Languages, title: 'B1 Level Certification', desc: 'CEFR-certified curriculum aligned with European standards.' },
                { icon: BookOpen, title: 'Reading & Writing', desc: 'Master Dutch grammar, vocabulary, and professional healthcare terminology.' },
                { icon: Volume2, title: 'Listening Practice', desc: 'Audio-based training with real hospital scenarios and patient interactions.' },
                { icon: MessageCircle, title: 'Speaking Fluency', desc: 'Live conversation sessions with native speakers and mock interviews.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-[#0d2856] rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <p className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">Language Program</p>
                <h3 className="text-white text-2xl font-black mt-1">Dutch B1 Course</h3>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { num: '4-6', label: 'Months' },
                  { num: '100+', label: 'Hours' },
                  { num: 'B1', label: 'Level' },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-white text-3xl font-black">{num}</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Progress demo */}
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-white/70 text-sm mb-3">Sample Module Progress</p>
                {['Basic Conversation', 'Medical Vocabulary', 'Patient Care Dutch'].map((m, i) => (
                  <div key={m} className="mb-3 last:mb-0">
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                      <span>{m}</span>
                      <span>{[100, 80, 40][i]}%</span>
                    </div>
                    <div className="bg-white/10 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-1.5 rounded-full" style={{ width: `${[100, 80, 40][i]}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold">
                  100% Free for Selected Candidates
                </span>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-amber-400 text-amber-900 font-black px-4 py-2 rounded-2xl shadow-lg rotate-3">
              FREE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
