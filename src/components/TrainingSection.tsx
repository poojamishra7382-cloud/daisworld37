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
    <section id="training" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2.5">Training Program</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-5">
            Dutch Language <span className="text-gradient">Curriculum</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            A structured 4-6 month program designed to get you from zero to job-ready Dutch.
          </p>
        </div>

        {/* Features bar */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-12">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <Icon className="w-4 h-4 text-blue-600" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {modules.map(({ icon: Icon, title, desc, weeks }, i) => (
            <div key={title} className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md">
                {i + 1}
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">{title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">{desc}</p>
              </div>
              <div>
                <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{weeks}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 sm:p-8 text-center text-white shadow-lg shadow-blue-500/20">
          <h3 className="text-xl sm:text-2xl font-black mb-2.5">Ready to Start Learning?</h3>
          <p className="text-white/90 text-xs sm:text-base mb-6 max-w-xl mx-auto">Apply today and begin your free Dutch training within weeks of selection.</p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-apply-modal'))}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 sm:px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm sm:text-base shadow-md"
          >
            Apply for Training
          </button>
        </div>
      </div>
    </section>
  );
}
