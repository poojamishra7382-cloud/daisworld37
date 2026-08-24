export type Language = 'en' | 'ar' | 'nl';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.vacancies': 'Vacancies',
    'nav.services': 'Services',
    'nav.clients': 'For Employers',
    'nav.contact': 'Contact Us',
    'nav.applyNow': 'Apply Now',

    // Hero
    'hero.badge': '100% Government Verified Overseas Recruitment',
    'hero.title': 'Building Global Careers in Healthcare & Beyond',
    'hero.subtitle': 'Direct placements for Registered Nurses, Doctors, Engineers, Chefs & Specialists across the Netherlands, Germany, Belgium & Middle East with visa sponsorship.',
    'hero.exploreJobs': 'Explore Vacancies',
    'hero.freeConsultation': 'Free Consultation',

    // Services
    'services.badge': 'Industry Expertise',
    'services.title': 'Global Recruitment Solutions',
    'services.healthcare': 'Healthcare & Medical',
    'services.hospitality': 'Hospitality & Culinary',
    'services.construction': 'Construction & Infrastructure',
    'services.oilgas': 'Oil & Gas Energy',
    'services.beauty': 'Beauty & Wellness Care',

    // Vacancies
    'vacancies.title': 'Explore Global Career Vacancies',
    'vacancies.subtitle': 'Connecting qualified professionals with top European & Middle Eastern employers with 100% visa sponsorship.',
    'vacancies.searchPlaceholder': 'Search job title, skills, country...',
    'vacancies.allCategories': 'All Vacancies',

    // Form / Apply
    'apply.heroTag': 'Direct Candidate Registration',
    'apply.heroTitle': 'International Candidate Application Form',
    'apply.heroSubtitle': 'Submit your CV and details for verified job vacancies in Netherlands, Germany, Belgium & Middle East.',
    'apply.formHeader': 'Candidate Details',
    'apply.formSub': 'Fill in your details accurately. Our recruiter will contact you within 24-48 hours.',
    'apply.sec1': 'Personal & Contact Information',
    'apply.sec2': 'Professional & Qualification Details',
    'apply.sec3': 'Resume & Additional Notes',
    'apply.fullName': 'Full Name',
    'apply.email': 'Email Address',
    'apply.phone': 'WhatsApp / Phone Number',
    'apply.dob': 'Date of Birth',
    'apply.position': 'Position Applying For',
    'apply.experience': 'Total Experience',
    'apply.qualification': 'Highest Qualification',
    'apply.hasPassport': 'Do you possess a Valid Passport?',
    'apply.passportNumber': 'Passport Number',
    'apply.resume': 'Upload Resume / CV (PDF, PNG, JPG up to 5MB)',
    'apply.resumeClick': 'Click to browse or drag & drop your Resume',
    'apply.notes': 'Additional Notes / Preferences',
    'apply.confidential': 'Your details are strictly confidential and encrypted under European data compliance standards.',
    'apply.successTitle': 'Application Submitted Successfully!',
    'apply.successDesc': 'Your profile and documents have been sent to our international recruitment team. An assigned recruiter will contact you via WhatsApp/Phone.',
    'apply.whatNext': 'What Happens Next?',
    'apply.step1': 'Quick Apply',
    'apply.step1Sub': 'Upload CV & Info',
    'apply.step2': 'Eligibility Check',
    'apply.step2Sub': 'Free Credential Review',
    'apply.step3': 'Interview Call',
    'apply.step3Sub': 'Direct Employer Meeting',
    'apply.step4': 'Visa & Flight',
    'apply.step4Sub': '100% Sponsored Relocation',

    // Contact
    'contact.tag': "Let's Talk",
    'contact.title': "We're Here to Help You Succeed",
    'contact.subtitle': "Get in touch with our international placement counselors for complete guidance and support.",

    // Actions
    'action.applyNow': 'Apply Now',
    'action.submitApplication': 'Submit Application',
    'action.submitting': 'Submitting Application...',
    'action.browseMore': 'Browse More Vacancies',
    'action.backHome': 'Return to Home',
  },

  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.vacancies': 'الوظائف الشاغرة',
    'nav.services': 'خدماتنا',
    'nav.clients': 'لأصحاب العمل',
    'nav.contact': 'اتصل بنا',
    'nav.applyNow': 'قدم الآن',

    // Hero
    'hero.badge': 'توظيف دولي معتمد وموثق حكومياً بنسبة 100٪',
    'hero.title': 'بناء مسارات مهنية عالمية في الرعاية الصحية والمجالات التخصصية',
    'hero.subtitle': 'توظيف مباشر للممرضين والأطباء والمهندسين والطهاة في هولندا وألمانيا وبلجيكا والشرق الأوسط مع رعاية التأشيرة.',
    'hero.exploreJobs': 'استكشف الوظائف',
    'hero.freeConsultation': 'استشارة مجانية',

    // Services
    'services.badge': 'خبرتنا القطاعية',
    'services.title': 'حلول التوظيف الدولية المتكاملة',
    'services.healthcare': 'الرعاية الصحية والطبية',
    'services.hospitality': 'الضيافة وفنون الطهي',
    'services.construction': 'البناء والبنية التحتية',
    'services.oilgas': 'النفط والغاز والطاقة',
    'services.beauty': 'العناية بالجمال والاستجمام',

    // Vacancies
    'vacancies.title': 'استكشف فرص العمل الدولية',
    'vacancies.subtitle': 'ربط الكفاءات المؤهلة مع كبار أصحاب العمل في أوروبا والشرق الأوسط مع كفالة التأشيرة بنسبة 100٪.',
    'vacancies.searchPlaceholder': 'ابحث عن المسمى الوظيفي، المهارة، الدولة...',
    'vacancies.allCategories': 'جميع الوظائف',

    // Form / Apply
    'apply.heroTag': 'تسجيل مباشر للمرشحين',
    'apply.heroTitle': 'نموذج طلب التوظيف الدولي',
    'apply.heroSubtitle': 'أرسل سيرتك الذاتية وبياناتك للتقديم على الوظائف الشاغرة في هولندا وألمانيا وبلجيكا والشرق الأوسط.',
    'apply.formHeader': 'بيانات المرشح',
    'apply.formSub': 'يرجى تعبئة بياناتك بدقة. سيتواصل معك مستشار التوظيف خلال 24-48 ساعة.',
    'apply.sec1': 'المعلومات الشخصية وبيانات الاتصال',
    'apply.sec2': 'البيانات المهنية والمؤهلات العلمية',
    'apply.sec3': 'السيرة الذاتية والملاحظات الإضافية',
    'apply.fullName': 'الاسم الكامل',
    'apply.email': 'البريد الإلكتروني',
    'apply.phone': 'رقم الواتساب / الهاتف',
    'apply.dob': 'تاريخ الميلاد',
    'apply.position': 'الوظيفة المتقدم إليها',
    'apply.experience': 'سنوات الخبرة',
    'apply.qualification': 'أعلى مؤهل علمي',
    'apply.hasPassport': 'هل تمتلك جواز سفر ساري المفعول؟',
    'apply.passportNumber': 'رقم جواز السفر',
    'apply.resume': 'تحميل السيرة الذاتية (PDF, PNG, JPG حتى 5 ميغابايت)',
    'apply.resumeClick': 'اضغط لاختيار ملف السيرة الذاتية أو اسحبه إلى هنا',
    'apply.notes': 'ملاحظات إضافية / الدولة المفضلة',
    'apply.confidential': 'بياناتك سرية تماماً ومحمية وفق معايير حماية البيانات الأوروبية.',
    'apply.successTitle': 'تم إرسال طلبك بنجاح!',
    'apply.successDesc': 'تم حفظ بياناتك وسيرتك الذاتية بأمان. سيقوم مستشار التوظيف بمراجعتها والتواصل معك عبر الواتساب أو الهاتف.',
    'apply.whatNext': 'ما هي الخطوات التالية؟',
    'apply.step1': 'تقديم سريع',
    'apply.step1Sub': 'رفع السيرة الذاتية',
    'apply.step2': 'تقييم المؤهل',
    'apply.step2Sub': 'فحص مجاني للاعتماد',
    'apply.step3': 'مقابلة العمل',
    'apply.step3Sub': 'مقابلة مع صاحب العمل',
    'apply.step4': 'التأشيرة والسفر',
    'apply.step4Sub': 'إجراءات انتقال كاملة الرعاية',

    // Contact
    'contact.tag': 'تواصل معنا',
    'contact.title': 'نحن هنا لمساعدتك على النجاح',
    'contact.subtitle': 'تواصل مع مستشاري التوظيف الدولي لدينا للحصول على الإرشاد والدعم الكامل.',

    // Actions
    'action.applyNow': 'قدم الآن',
    'action.submitApplication': 'إرسال طلب التقديم',
    'action.submitting': 'جاري إرسال الطلب...',
    'action.browseMore': 'تصفح المزيد من الوظائف',
    'action.backHome': 'العودة للرئيسية',
  },

  nl: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.vacancies': 'Vacatures',
    'nav.services': 'Diensten',
    'nav.clients': 'Voor Werkgevers',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Solliciteer Nu',

    // Hero
    'hero.badge': '100% Geverifieerde Internationale Werving',
    'hero.title': 'Bouw aan een Wereldwijde Carrière in Zorg en Meer',
    'hero.subtitle': 'Directe plaatsingen voor verpleegkundigen, artsen, ingenieurs en koks in Nederland, Duitsland, België en het Midden-Oosten.',
    'hero.exploreJobs': 'Bekijk Vacatures',
    'hero.freeConsultation': 'Gratis Adviesgesprek',

    // Services
    'services.badge': 'Onze Expertise',
    'services.title': 'Wereldwijde Recruitment Oplossingen',
    'services.healthcare': 'Zorg & Medisch',
    'services.hospitality': 'Horeca & Gastvrijheid',
    'services.construction': 'Bouw & Infrastructuur',
    'services.oilgas': 'Olie, Gas & Energie',
    'services.beauty': 'Beauty & Wellness',

    // Vacancies
    'vacancies.title': 'Ontdek Internationale Vacatures',
    'vacancies.subtitle': 'Koppel gekwalificeerde professionals aan topwerkgevers in Europa en het Midden-Oosten met 100% visumsponsoring.',
    'vacancies.searchPlaceholder': 'Zoek op functietitel, vaardigheid, land...',
    'vacancies.allCategories': 'Alle Vacatures',

    // Form / Apply
    'apply.heroTag': 'Directe Kandidaat Registratie',
    'apply.heroTitle': 'Internationaal Sollicitatieformulier',
    'apply.heroSubtitle': 'Upload uw CV en gegevens voor geverifieerde vacatures in Nederland, Duitsland, België en het Midden-Oosten.',
    'apply.formHeader': 'Kandidaat Gegevens',
    'apply.formSub': 'Vul uw gegevens nauwkeurig in. Onze recruiter neemt binnen 24-48 uur contact met u op.',
    'apply.sec1': 'Persoonlijke Gegevens & Contact',
    'apply.sec2': 'Beroepservaring & Opleiding',
    'apply.sec3': 'CV & Aanvullende Notities',
    'apply.fullName': 'Volledige Naam',
    'apply.email': 'E-mailadres',
    'apply.phone': 'WhatsApp / Telefoonnummer',
    'apply.dob': 'Geboortedatum',
    'apply.position': 'Functie Waarop U Solliciteert',
    'apply.experience': 'Jaren Werkervaring',
    'apply.qualification': 'Hoogst Genoten Opleiding',
    'apply.hasPassport': 'Beschikt u over een geldig paspoort?',
    'apply.passportNumber': 'Paspoortnummer',
    'apply.resume': 'Upload CV / Documenten (PDF, PNG, JPG max. 5MB)',
    'apply.resumeClick': 'Klik om uw CV te kiezen of sleep het hierheen',
    'apply.notes': 'Aanvullende Opmerkingen / Landvoorkeur',
    'apply.confidential': 'Uw gegevens worden strikt vertrouwelijk en veilig verwerkt volgens Europese privacynormen.',
    'apply.successTitle': 'Sollicitatie Succesvol Verzonden!',
    'apply.successDesc': 'Uw profiel en documenten zijn veilig opgeslagen. Onze recruiter neemt spoedig contact met u op via WhatsApp of telefoon.',
    'apply.whatNext': 'Wat Kunt U Verwachten?',
    'apply.step1': 'Snelle Aanmelding',
    'apply.step1Sub': 'Upload CV & Info',
    'apply.step2': 'Diploma Evaluatie',
    'apply.step2Sub': 'Gratis BIG/Erkenning Check',
    'apply.step3': 'Sollicitatiegesprek',
    'apply.step3Sub': 'Direct met Werkgever',
    'apply.step4': 'Visum & Verhuizing',
    'apply.step4Sub': 'Volledig Gesponsord Traject',

    // Contact
    'contact.tag': 'Neem Contact Op',
    'contact.title': 'Wij Staan Klaar Om U Te Helpen',
    'contact.subtitle': 'Neem contact op met onze internationale adviseurs voor volledige begeleiding en ondersteuning.',

    // Actions
    'action.applyNow': 'Solliciteer Nu',
    'action.submitApplication': 'Sollicitatie Versturen',
    'action.submitting': 'Bezig met versturen...',
    'action.browseMore': 'Bekijk Meer Vacatures',
    'action.backHome': 'Terug naar Home',
  },
};
