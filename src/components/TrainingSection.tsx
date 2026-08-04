import { GraduationCap, BookOpen, Mic, Award, Users, Clock } from 'lucide-react';

const modules = [
  { icon: BookOpen, title: 'Module 1: Dutch Basics', desc: 'Alphabet, pronunciation, common phrases, greetings, numbers.', weeks: 'Weeks 1-4' },
  { icon: Mic, title: 'Module 2: Conversation', desc: 'Daily conversations, asking questions, healthcare vocabulary.', weeks: 'Weeks 5-12' },
  { icon: Users, title: 'Module 3: Medical Dutch', desc: 'Patient interactions, medical terms, hospital procedures.', weeks: 'Weeks 13-18' },
  { icon: Award, title: 'Module 4: B1 Exam Prep', desc: 'Mock exams, interview prep, fluency practice, certification.', weeks: 'Weeks 19-24' },
];

const features = [
  { icon: Clock, label: '4-6 Months Duration' },
  { icon: Users, label: 'Small Batch Sizes' },
  { icon: GraduationCap, label: 'Certified Trainers' },
  { icon: Award, label: 'B1 Certificate' },
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Training Program</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Dutch Language <span className="text-gradient">Curriculum</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A structured 4-6 month program designed to get you from zero to job-ready Dutch.
          </p>
        </div>

        {/* Features bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Icon className="w-4 h-4" />
              {label}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map(({ icon: Icon, title, desc, weeks }, i) => (
            <div key={title} className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-6 border border-slate-100 card-hover">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
                {i + 1}
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{weeks}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-black mb-3">Ready to Start Learning?</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">Apply today and begin your free Dutch training within weeks of selection.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            Apply for Training
          </a>
        </div>
      </div>
    </section>
  );
}
