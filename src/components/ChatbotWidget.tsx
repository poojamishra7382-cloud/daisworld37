import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  X,
  Send,
  Trash2,
  Bot,
  User as UserIcon,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ChatAction {
  label: string;
  url?: string;
  query?: string;
  isExternal?: boolean;
}

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: number;
  actions?: ChatAction[];
}

const STORAGE_KEY = 'daisworld_ai_chat_history_v5';

const WELCOME: Message = {
  id: 0,
  sender: 'bot',
  text: "Hello & Welcome to Dais World! 👋",
  time: Date.now(),
};

const QUICK_REPLIES = [
  '💼 All Vacancies',
  '🤝 Partner With Us',
  '🏥 Healthcare Jobs',
  '🏨 Hospitality Roles',
  '🏗️ Construction & Oil',
  '💅 Beauty & Spa',
  '💰 Salaries & Packages',
  '🎓 Free Training',
  '✨ How to Apply',
  '📞 Contact Details',
];

interface KnowledgeRule {
  id: string;
  category: 'vacancies' | 'partnership' | 'training' | 'salary' | 'countries' | 'sectors' | 'process' | 'about' | 'contact' | 'greetings' | 'gratitude';
  keywords: string[];
  priority: number;
  reply: string;
  actions?: ChatAction[];
}

const KNOWLEDGE_RULES: KnowledgeRule[] = [
  // =========================================================================
  // 1. PARTNERSHIP / B2B COLLABORATION ("Partner banna hai", "B2B", "Tie-up")
  // =========================================================================
  {
    id: 'partnership-b2b',
    category: 'partnership',
    priority: 100,
    keywords: [
      'partner', 'partnership', 'partner ban na hai', 'partner banna hai',
      'partner kaise bane', 'partner kaise ban sakte hai', 'b2b', 'collaborate',
      'collaboration', 'tie up', 'tie-up', 'tieup', 'corporate partner',
      'business partner', 'hiring partner', 'employer partnership', 'manpower supply',
      'staffing solution', 'staffing partner', 'corporate housing partner',
      'college tie up', 'institutional partner', 'recruitment partner', 'client partnership',
      'agency partner', 'franchise', 'vendor', 'become a partner', 'join as partner'
    ],
    reply:
      "🤝 **Partner With Dais World (B2B & Employer Solutions)**\n\nWe warmly welcome international hospitals, hotel chains, construction conglomerates, recruitment agencies, and educational institutions to collaborate with us!\n\n**Our Core Partnership Avenues:**\n\n1️⃣ **Employer Staffing Partnerships:**\n• Direct access to pre-screened, certified, and language-trained (Dutch/German B1-B2) healthcare, hospitality, and engineering talent.\n• 100% legal visa compliance, credential attestation, and fast-track deployment.\n\n2️⃣ **Turnkey Corporate Housing Solutions:**\n• Complete furnished accommodation, municipal leasing, and facility management for overseas workforces.\n\n3️⃣ **Academic & Institutional Tie-ups:**\n• Collaborations with Nursing Colleges, Culinary Institutes, and Engineering Academies for direct international campus placements.\n\n4️⃣ **Global Associate Recruitment Partners:**\n• Join our verified worldwide network of overseas recruitment consultants.\n\n⭐ **Trusted Global Partners Include:**\nSiemens Healthineers, Royal Philips Healthcare, Bupa, Ramsay Health Care, Roche, Accor Hotels, Marriott Europe, and premier Dutch health networks.\n\n📍 **Submit Your Proposal or Connect Directly:**\n• Direct Partnership Helpline: **+91 8976697001**\n• Corporate Email: **info@daisworld.com** / **aditya.s@daisworld.com**\n• Head Office: 1210, One World by Sanjar, Malad West, Mumbai, India.",
    actions: [
      { label: '🏢 Explore B2B / Partners Page', url: '/clients' },
      { label: '📞 Contact Partnerships Desk', url: '/contact' },
      { label: '💬 WhatsApp Corporate Desk', url: 'https://wa.me/918976697001?text=Hello%2C%20I%20am%20interested%20in%20a%20B2B%20Partnership%20with%20Dais%20World', isExternal: true },
    ],
  },

  // =========================================================================
  // 2. VACANCIES & ACTIVE DRIVES (GENERAL & SPECIFIC)
  // =========================================================================
  {
    id: 'vacancies-general',
    category: 'vacancies',
    priority: 95,
    keywords: [
      'vacancy', 'vacancies', 'job', 'jobs', 'opening', 'openings', 'naukri',
      'naukriya', 'current vacancy', 'latest vacancy', 'active hiring',
      'kya vacancy hai', 'kon si vacancy hai', 'job list', 'positions',
      'hiring drive', 'available jobs', 'opportunities', 'abroad job'
    ],
    reply:
      "💼 **Current Active Vacancies at Dais World (August 2026 Drive)**\n\nWe are actively hiring for 150+ positions across Europe and the Middle East:\n\n🇳🇱 **Netherlands Healthcare Urgent Drive:**\n• **20 Operation Room (OT) Nurses:** €3,900 – €5,500/mo (₹3.5L – ₹5.0L)\n• **30 Healthcare Assistants & Caregivers:** €2,450 – €3,200/mo (₹2.2L – ₹2.9L)\n• **20 Registered Staff Nurses (Ward/ICU):** €3,200 – €3,775/mo (₹2.85L – ₹3.4L)\n*(Includes 100% Free Dutch B1 Training, Visa, Flight & Accommodation support)*\n\n🏨 **Hospitality Careers (Europe & UAE):**\n• 15 Executive Chefs & Sous Chefs (8,500 – 14,000 AED / €2,800 – €4,200)\n• 25 Housekeeping & Front Office Supervisors\n• Food & Beverage Stewards & Restaurant Captains\n\n🏗️ **Construction & Oil/Gas (Gulf & Europe):**\n• 20 Civil & Structural Site Engineers\n• 35 Certified Welders, Electricians & MEP Technicians\n• 15 Offshore Drilling & HSE Safety Officers\n\n💅 **Beauty & Wellness (Europe & Dubai):**\n• 15 Hair Stylists, Cosmetologists & Spa Therapists\n\n✨ All vacancies include legal employer visa sponsorship, healthcare coverage, and PR pathways!",
    actions: [
      { label: '📋 View All Vacancies', url: '/vacancies' },
      { label: '📝 Apply Now', url: '/apply' },
      { label: '🇳🇱 Netherlands Nursing Drive', query: 'Tell me about Netherlands Nursing vacancies' },
    ],
  },

  {
    id: 'vacancies-netherlands-nursing',
    category: 'vacancies',
    priority: 98,
    keywords: [
      'netherlands nurse', 'netherlands nursing', 'ot nurse', 'operation room nurse',
      'caregiver netherlands', 'healthcare assistant netherlands', 'dutch nursing',
      'nursing in netherlands', 'holland nurse', 'nurse vacancy netherlands'
    ],
    reply:
      "🇳🇱 **Urgent Hiring: Netherlands Nursing & Healthcare Drive**\n\n🔥 **Active Openings:**\n1. **20 Operation Room (OT) Nurses:**\n   • Salary: €3,900 – €5,500 / month (₹3,50,000 – ₹5,00,000/mo)\n   • Eligibility: B.Sc Nursing / GNM / Post Basic with 1+ yr OT experience\n\n2. **30 Healthcare Assistants & Caregivers:**\n   • Salary: €2,450 – €3,200 / month (₹2,20,000 – ₹2,90,000/mo)\n   • Eligibility: ANM / GNM / B.Sc / Caregiving Diploma (Freshers Welcome!)\n\n3. **20 Registered Staff Nurses:**\n   • Salary: €3,200 – €3,775 / month (₹2,85,000 – ₹3,40,000/mo)\n   • Eligibility: B.Sc Nursing / GNM with Nursing Council Registration\n\n🎁 **Full Package Benefits:**\n• 100% Free Dutch Language Training up to B1 level (4–6 months)\n• 100% Work Visa, Flight Tickets & Subsidized Accommodation\n• Permanent Residency (PR) pathway in Netherlands\n• 36-hour weekly work schedule with paid overtime",
    actions: [
      { label: '📝 Apply for Netherlands Drive', url: '/apply' },
      { label: '📋 View Netherlands Vacancy Details', url: '/vacancies' },
      { label: '🎓 Free Dutch Language Details', query: 'How does the free Dutch/German training work?' },
    ],
  },

  {
    id: 'healthcare-general',
    category: 'sectors',
    priority: 90,
    keywords: [
      'healthcare', 'nurse', 'nursing', 'nurses', 'staff nurse', 'icu nurse',
      'doctor', 'doctors', 'physician', 'hospital job', 'medical', 'paramedical',
      'pharmacist', 'pharmacy', 'lab technician', 'phlebotomist', 'dietitian',
      'dietician', 'yoga', 'ayurveda', 'physiotherapist'
    ],
    reply:
      "🏥 **Healthcare & Medical Opportunities:**\n\nWe place qualified medical professionals in top hospital networks across the Netherlands, Germany, UK, Belgium, and the UAE:\n\n• **Registered & Specialist Nurses:** OT, ICU, Emergency, Pediatrics, Eldercare\n• **Doctors & Specialists:** General Practitioners, Internal Medicine, Anesthesiology\n• **Pharmacy & Laboratory:** Clinical Pharmacists, Lab Technologists, Phlebotomists\n• **Allied Health & Wellness:** Clinical Dietitians, Physiotherapists, Ayurveda & Yoga Specialists\n\n✅ Complete support with Dutch BIG / German Approbation / DHA licensing and 100% legal visa processing!",
    actions: [
      { label: '🏥 Healthcare Services', url: '/services/healthcare/doctors-physicians' },
      { label: '📋 View Healthcare Vacancies', url: '/vacancies' },
      { label: '📝 Apply Online', url: '/apply' },
    ],
  },

  {
    id: 'hospitality-general',
    category: 'sectors',
    priority: 90,
    keywords: [
      'hospitality', 'hotel', 'resort', 'chef', 'chefs', 'cook', 'sous chef',
      'executive chef', 'front office', 'housekeeping', 'food and beverage',
      'f&b', 'waiter', 'restaurant manager', 'culinary', 'catering', 'event management'
    ],
    reply:
      "🏨 **Hospitality & Culinary Careers:**\n\nPartnering with 5-star hotel chains and luxury resort groups (Accor, Marriott, Hilton) across France, Netherlands, UAE, and Qatar:\n\n• **Kitchen & Culinary:** Executive Chefs, Sous Chefs, Pastry Specialists, Line Cooks (8,500 – 14,000 AED / €2,800 – €4,200)\n• **Front Office & Guest Services:** Reception Supervisors, Concierge, Night Auditors\n• **Housekeeping & Operations:** Floor Supervisors, Housekeeping Attendants\n• **F&B Service:** Banquet Captains, Bartenders, Restaurant Supervisors\n\n✨ Free duty meals, furnished staff housing, and flight tickets included!",
    actions: [
      { label: '🏨 Hospitality Services', url: '/services/hospitality/front-office' },
      { label: '📋 Hospitality Vacancies', url: '/vacancies' },
      { label: '📝 Apply for Hospitality', url: '/apply' },
    ],
  },

  {
    id: 'construction-general',
    category: 'sectors',
    priority: 90,
    keywords: [
      'construction', 'civil', 'structural', 'engineer', 'engineering',
      'electrician', 'plumber', 'plumbing', 'hvac', 'welder', 'welding',
      'pipefitter', 'carpenter', 'mason', 'site manager', 'site safety',
      'infrastructure', 'mep'
    ],
    reply:
      "🏗️ **Construction & Engineering Opportunities:**\n\nRecruiting for mega infrastructure, smart city, and commercial building projects across Europe, UAE, Saudi Arabia, and Qatar:\n\n• **Civil & Structural:** Site Engineers, Project Coordinators, CAD Draftsmen\n• **Electrical & MEP:** Master Electricians, MEP Coordinators, High-Voltage Techs\n• **Plumbing & HVAC:** Chiller Technicians, Industrial Pipefitters, HVAC Installers\n• **Skilled Finishing:** Certified 6G Welders, Formwork Carpenters, Finishing Masons\n• **HSE & Site Safety:** Certified Safety Officers and Quality Inspectors\n\nAll positions offer sponsored work visas, safety equipment, overtime pay, and lodging.",
    actions: [
      { label: '🏗️ Construction Services', url: '/services/construction/civil-structural' },
      { label: '📋 Construction Vacancies', url: '/vacancies' },
      { label: '📝 Submit Application', url: '/apply' },
    ],
  },

  {
    id: 'oil-and-gas-general',
    category: 'sectors',
    priority: 90,
    keywords: [
      'oil', 'gas', 'oil and gas', 'petroleum', 'rig', 'offshore', 'onshore',
      'refinery', 'drilling', 'well operations', 'pipeline', 'hse officer',
      'maintenance engineer', 'geology', 'exploration'
    ],
    reply:
      "⛽ **Oil & Gas Industry Careers:**\n\nWe connect energy specialists with leading offshore rigs, refineries, and petrochemical corporations across the Middle East (UAE, Saudi Arabia, Qatar) and North Sea Europe:\n\n• **Exploration & Geology:** Petroleum Geologists, Reservoir Engineers\n• **Drilling & Well Operations:** Toolpushers, Derrickmen, Mud Engineers\n• **Production & Refining:** Process Operators, Plant Maintenance Engineers\n• **HSE & Safety:** Offshore Safety Officers, Environmental Compliance Leads\n\n💰 High tax-free compensation packages, 28/28 or 60/30 rotational shifts, and full offshore insurance.",
    actions: [
      { label: '⛽ Oil & Gas Services', url: '/services/oil-and-gas/exploration-geology' },
      { label: '📋 Energy Vacancies', url: '/vacancies' },
      { label: '📝 Apply Now', url: '/apply' },
    ],
  },

  {
    id: 'beauty-and-care-general',
    category: 'sectors',
    priority: 90,
    keywords: [
      'beauty', 'salon', 'spa', 'hair stylist', 'hairdresser', 'cosmetologist',
      'skin aesthetician', 'aesthetics', 'nail artist', 'nail technician',
      'massage therapist', 'wellness', 'makeup artist', 'bridal'
    ],
    reply:
      "💅 **Beauty, Aesthetics & Wellness Careers:**\n\nPlacements in high-end luxury salons, aesthetic clinics, and 5-star spa resorts in Dubai, Amsterdam, Berlin, and London:\n\n• **Hair Styling & Color:** Senior Stylists, Color Masters, Hair Extension Specialists\n• **Skin Aesthetics & Laser:** Certified Aestheticians, Hydrafacial & Laser Techs\n• **Nail Art & Extensions:** Master Nail Techs, Russian Manicure Specialists\n• **Spa & Body Wellness:** Swedish/Thai Massage Therapists, Hydrotherapists\n• **Bridal & High Fashion Makeup:** Professional Makeup Artists\n\n✨ Generous service commissions, product incentives, and furnished accommodation!",
    actions: [
      { label: '💅 Beauty & Care Services', url: '/services/beauty-and-care/hair-styling' },
      { label: '📋 Beauty Vacancies', url: '/vacancies' },
      { label: '📝 Apply Online', url: '/apply' },
    ],
  },

  // =========================================================================
  // 3. FREE LANGUAGE TRAINING (DUTCH & GERMAN)
  // =========================================================================
  {
    id: 'language-training',
    category: 'training',
    priority: 88,
    keywords: [
      'training', 'language', 'dutch language', 'german language', 'learn dutch',
      'learn german', 'b1', 'b2', 'a1', 'a2', 'dutch course', 'german course',
      'classes', 'free training', 'is training free', 'training cost',
      'language institute', 'training duration', 'online training'
    ],
    reply:
      "🎓 **100% Free Language Training Program (Dutch & German)**\n\nTo ensure our candidates succeed abroad, Dais World provides complete, structured language training **100% FREE OF COST** for selected candidates!\n\n**Program Highlights:**\n• **Languages:** Dutch (B1 level) & German (B1 / B2 level)\n• **Duration:** 4 to 6 Months (Fast-track intensive batches)\n• **Trainers:** Certified Native & Expert Linguistic Instructors\n• **Curriculum:** Conversational Fluency + Medical / Professional Terminology\n• **Format:** Interactive Live Online Classes + Daily Speaking Practice & Mock Tests\n• **Exam Fee Support:** Complete guidance for official Dutch CNaVT / German Goethe & TELC examinations.\n\n*Note: Training is sponsored by our healthcare & employer partners for all enrolled candidates!*",
    actions: [
      { label: '📝 Apply for Free Training Batch', url: '/apply' },
      { label: '🇳🇱 View Netherlands Vacancies', url: '/vacancies' },
      { label: '📞 Speak With Trainer / Counselor', url: '/contact' },
    ],
  },

  // =========================================================================
  // 4. SALARY & COMPENSATION
  // =========================================================================
  {
    id: 'salary-earnings',
    category: 'salary',
    priority: 85,
    keywords: [
      'salary', 'salaries', 'pay', 'income', 'earning', 'earnings', 'package',
      'kitna milega', 'salary kitni', 'paisa', 'wage', 'wages', 'per month',
      'euro', 'aed', 'sar', 'inr', 'rupees', 'compensation', 'benefits'
    ],
    reply:
      "💰 **International Salary Packages by Country:**\n\n• 🇳🇱 **Netherlands:** €3,200 – €5,500 / month (₹2,85,000 – ₹5,00,000/mo)\n• 🇩🇪 **Germany:** €3,000 – €4,800 / month (₹2,65,000 – ₹4,25,000/mo)\n• 🇧🇪 **Belgium & Nordics:** €3,100 – €5,200 / month (₹2,75,000 – ₹4,60,000/mo)\n• 🇦🇪 **UAE (Dubai / Abu Dhabi):** 8,000 – 18,000 AED / month (100% Tax-Free)\n• 🇸🇦 **Saudi Arabia & Gulf:** 7,500 – 16,000 SAR / month (100% Tax-Free)\n\n🎁 **Standard Benefits Included:**\n• Overtime pay (125% - 150% rate)\n• Complete Medical & Healthcare Insurance\n• 25–30 Days Paid Annual Vacation + Return Flight Allowance\n• Government Pension & Social Security Contributions",
    actions: [
      { label: '📋 Check Vacancy Salaries', url: '/vacancies' },
      { label: '📝 Apply for High-Pay Roles', url: '/apply' },
      { label: '🌍 Explore Country Details', url: '/country' },
    ],
  },

  // =========================================================================
  // 5. COUNTRIES & DESTINATIONS
  // =========================================================================
  {
    id: 'countries-destinations',
    category: 'countries',
    priority: 82,
    keywords: [
      'country', 'countries', 'where', 'destinations', 'abroad', 'overseas',
      'konse country', 'kon si country', 'europe', 'middle east', 'gulf',
      'netherlands', 'germany', 'belgium', 'dubai', 'uae', 'saudi', 'qatar',
      'kuwait', 'oman', 'uk', 'ireland', 'australia', 'switzerland', 'norway'
    ],
    reply:
      "🌍 **Global Destinations Where We Place Candidates:**\n\n🇪🇺 **Western & Northern Europe:**\n• **Netherlands:** Top destination for Nurses, Caregivers, Healthcare & Tech (High quality of life, PR pathway)\n• **Germany:** Great for Registered Nurses, Doctors, Engineers, and Technicians\n• **Belgium, Switzerland, UK, Ireland, Norway, Sweden & Finland**\n\n🇦🇪 **Middle East & Gulf (100% Tax-Free Income):**\n• **UAE (Dubai / Abu Dhabi), Saudi Arabia, Qatar, Kuwait, Oman, Bahrain**\n*(Fast 3-6 week visa processing, furnished housing & air tickets)*\n\n🇦🇺 **Australia & New Zealand:** Skilled migration & healthcare positions.",
    actions: [
      { label: '🌍 View All Countries', url: '/country' },
      { label: '🇳🇱 Netherlands Profile', url: '/country/netherlands' },
      { label: '🇩🇪 Germany Profile', url: '/country/germany' },
      { label: '📋 View All Vacancies', url: '/vacancies' },
    ],
  },

  // =========================================================================
  // 6. ELIGIBILITY, DOCUMENTS & HOW TO APPLY
  // =========================================================================
  {
    id: 'eligibility-documents',
    category: 'process',
    priority: 80,
    keywords: [
      'eligible', 'eligibility', 'qualification', 'qualifications', 'degree',
      'diploma', 'bsc', 'gnm', 'anm', 'experience', 'fresher', 'freshers',
      'age limit', 'age', 'criteria', 'kya chahiye', 'document', 'documents',
      'passport', 'requirements'
    ],
    reply:
      "📋 **Eligibility & Required Documents:**\n\n1️⃣ **Qualifications:**\n• Healthcare: B.Sc Nursing, GNM, ANM, MBBS, MD, B.Pharm, DMLT, or Caregiving Certificate\n• Hospitality: Degree/Diploma in Hotel Management or culinary experience\n• Engineering & Trades: B.Tech, Diploma, ITI, or certified trade experience\n\n2️⃣ **Experience:**\n• 0 to 5+ years (Freshers eligible for select training-and-placement drives!)\n\n3️⃣ **Essential Documents Needed:**\n• Valid International Passport (min 1-year validity)\n• Updated Resume / CV\n• Educational Degree / Marksheets\n• Nursing / Professional Registration Certificate (if applicable)\n• Experience Letters / Work Certificates\n• Passport-size Photographs",
    actions: [
      { label: '📝 Submit Your Application', url: '/apply' },
      { label: '📋 Browse Job Openings', url: '/vacancies' },
      { label: '📞 Free Profile Assessment', url: '/contact' },
    ],
  },

  {
    id: 'how-to-apply',
    category: 'process',
    priority: 85,
    keywords: [
      'apply', 'application', 'apply now', 'register', 'registration', 'sign up',
      'form', 'resume', 'cv', 'kaise apply', 'where to apply', 'upload resume',
      'job apply', 'apply kaise kare', 'process kya hai', 'steps'
    ],
    reply:
      "📝 **How to Apply in 4 Simple Steps:**\n\n1️⃣ **Step 1 - Online Application:** Click the 'Apply Now' button and fill in your basic details.\n2️⃣ **Step 2 - Upload Resume:** Attach your updated CV / Resume and select your preferred role & country.\n3️⃣ **Step 3 - Free Profile Assessment:** Our senior recruitment counselor will contact you within 24–48 hours to assess eligibility.\n4️⃣ **Step 4 - Training & Visa:** Start free language training (if Europe) or proceed directly to employer interview and visa filing!",
    actions: [
      { label: '📝 Fill Online Application', url: '/apply' },
      { label: '📋 View All Vacancies', url: '/vacancies' },
      { label: '📞 Request Counselor Callback', url: '/contact' },
    ],
  },

  {
    id: 'visa-process',
    category: 'process',
    priority: 80,
    keywords: [
      'visa', 'work permit', 'mvv', 'immigration', 'embassy', 'attestation',
      'apostille', 'permit', 'sponsorship', 'residence permit', 'pr',
      'permanent residency', 'timeline', 'kitna time lagta hai'
    ],
    reply:
      "🛂 **100% Legal Visa & Immigration Process:**\n\n• Dais World handles the complete end-to-end legal visa processing:\n1. **Employer Sponsorship Verification** (Guaranteed legitimate contract)\n2. **Apostille & Document Attestation** (HRD, MEA & Embassy)\n3. **Licensing Equivalency** (BIG / DHA / Approbation)\n4. **Work Permit & MVV Filing**\n5. **Flight Booking & Airport Reception**\n\n⏱️ **Timeline:** Europe takes ~5–7 months (including language training), and Gulf takes ~3–6 weeks!",
    actions: [
      { label: '📝 Start Visa Assessment', url: '/apply' },
      { label: '🏢 About Our Company', url: '/about' },
      { label: '📞 Contact Support', url: '/contact' },
    ],
  },

  // =========================================================================
  // 7. ABOUT DAIS WORLD & CREDIBILITY
  // =========================================================================
  {
    id: 'about-daisworld',
    category: 'about',
    priority: 80,
    keywords: [
      'about dais world', 'who are you', 'what is dais world', 'company',
      'knooviq', 'dais world', 'founder', 'office', 'where are you located',
      'address', 'mumbai office', 'malad', 'location', 'genuine', 'trust',
      'fraud', 'real', 'reviews', 'experience', 'track record'
    ],
    reply:
      "🏢 **About Dais World Endeavor Private Limited**\n\nWe are a premier international recruitment, corporate housing, and overseas career consultancy headquartered in Mumbai, India.\n\n✅ **Key Facts:**\n• **500+ Successful Placements** across Europe and the Middle East\n• **100% Legal & Government-Compliant** visa sponsorships\n• **Free Language Training Infrastructure** for healthcare and technical personnel\n• **Turnkey Corporate Housing** for international employers\n\n📍 **Headquarters:**\n1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai, Maharashtra, India.\n\n📞 Phone / WhatsApp: **+91 8976697001** | Email: **info@daisworld.com**",
    actions: [
      { label: '🏢 About Us Page', url: '/about' },
      { label: '🤝 Client & Partner Network', url: '/clients' },
      { label: '📞 Visit / Contact Us', url: '/contact' },
    ],
  },

  // =========================================================================
  // 8. CONTACT, HELPLINE & WHATSAPP
  // =========================================================================
  {
    id: 'contact-details',
    category: 'contact',
    priority: 85,
    keywords: [
      'contact', 'email', 'phone', 'call', 'number', 'mobile', 'reach',
      'support', 'whatsapp', 'helpline', 'baat karni hai', 'contact number',
      'phone number', 'address', 'office location', 'counselor number'
    ],
    reply:
      "📞 **Connect With Dais World Team:**\n\n• **Phone Helpline:** +91 8976697001\n• **WhatsApp Support:** +91 8976697001\n• **Email:** info@daisworld.com / aditya.s@daisworld.com\n• **Working Hours:** Monday – Saturday (11:00 AM – 8:00 PM IST)\n• **Headquarters Address:** 1210, One World by Sanjar, Bhadran Nagar, Malad West, Mumbai, Maharashtra, India.\n\nFeel free to call or WhatsApp us anytime for immediate counselor guidance!",
    actions: [
      { label: '💬 Chat on WhatsApp', url: 'https://wa.me/918976697001?text=Hello%20Dais%20World%2C%20I%20have%20an%20inquiry%20regarding%20overseas%20careers', isExternal: true },
      { label: '📞 Go to Contact Page', url: '/contact' },
      { label: '📝 Apply Now', url: '/apply' },
    ],
  },

  // =========================================================================
  // 9. GREETINGS & CASUAL
  // =========================================================================
  {
    id: 'greetings',
    category: 'greetings',
    priority: 50,
    keywords: [
      'hello', 'hi', 'hey', 'namaste', 'namaskar', 'halo', 'hola', 'hie',
      'good morning', 'good afternoon', 'good evening', 'kaise ho', 'kaisa hai',
      'whats up', 'whatsup', 'sup', 'yo', 'greeting'
    ],
    reply:
      "Hello! 😊 Welcome to Dais World.\n\nHow can I help you today? You can ask me about our **Job Vacancies**, **Partnership Opportunities**, **Language Training**, or **How to Apply**!",
    actions: [
      { label: '💼 Active Vacancies', query: 'What vacancies are available right now?' },
      { label: '🤝 Become a Partner', query: 'I want to become a partner with Dais World' },
      { label: '🎓 Free Training', query: 'How does the free Dutch/German training work?' },
      { label: '📝 How to Apply', query: 'How do I apply for jobs?' },
    ],
  },

  // =========================================================================
  // 10. GRATITUDE & THANKS
  // =========================================================================
  {
    id: 'gratitude',
    category: 'gratitude',
    priority: 50,
    keywords: [
      'thank', 'thanks', 'thank you', 'dhanyawad', 'shukriya', 'great',
      'awesome', 'perfect', 'helpful', 'good', 'nice', 'ok', 'okay', 'theek hai'
    ],
    reply:
      "You are most welcome! 😊 It is our pleasure to guide you. If you have any more questions about jobs, partnerships, or visas, feel free to ask anytime. Whenever you're ready, take the first step towards your international career!",
    actions: [
      { label: '📝 Apply Now', url: '/apply' },
      { label: '📋 View Vacancies', url: '/vacancies' },
      { label: '🤝 Partner With Us', url: '/clients' },
    ],
  },
];

// Fallback message for out-of-box / irrelevant questions
const OUT_OF_BOX_REPLY =
  "I apologize! 🙏 I am an AI assistant specifically dedicated to **Dais World** and our overseas career, recruitment, and corporate partnership services.\n\nI cannot answer general or unrelated questions. Please feel free to ask me anything regarding our website offerings:\n\n• 💼 **Active Job Vacancies** (Healthcare, Hospitality, Construction, Oil & Gas, Beauty)\n• 🤝 **Becoming a Partner / B2B Solutions** (Staffing, Corporate Housing, Academic Tie-ups)\n• 🌍 **Global Destinations** (Netherlands, Germany, UAE, Saudi, Europe) & Salaries\n• 🎓 **100% Free Dutch & German Language Training**\n• ✈️ **Visa, Process & How to Apply**\n• 🏢 **About Dais World & Contact Helpline**\n\nHow may I help you with our website or overseas services today?";

const OUT_OF_BOX_ACTIONS: ChatAction[] = [
  { label: '💼 View Vacancies', url: '/vacancies' },
  { label: '🤝 Partner With Us', url: '/clients' },
  { label: '🎓 Free Language Training', query: 'How does the free Dutch/German training work?' },
  { label: '📝 Apply Now', url: '/apply' },
  { label: '📞 Contact Counselors', url: '/contact' },
];

// Match engine with intelligent score calculation & out-of-box filter
function getBotResponse(input: string): { reply: string; actions?: ChatAction[] } {
  const clean = input
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!clean) {
    return {
      reply: "Hi there! 👋 How can I assist you with Dais World today? Feel free to ask about our active vacancies, partnership opportunities, free training, or application process.",
    };
  }

  // Tokenize user input
  const words = clean.split(' ').filter(Boolean);

  let bestRule: KnowledgeRule | null = null;
  let highestScore = 0;

  for (const rule of KNOWLEDGE_RULES) {
    let score = 0;

    for (const kw of rule.keywords) {
      const kwClean = kw.toLowerCase().trim();

      // Multi-word phrase exact match (highest weight)
      if (kwClean.includes(' ') && clean.includes(kwClean)) {
        score += 30;
      }
      // Single word exact match
      else if (words.includes(kwClean)) {
        score += 10;
      }
      // Substring match for longer words
      else if (kwClean.length > 3 && clean.includes(kwClean)) {
        score += 5;
      }
    }

    // Multiply by priority factor
    const totalScore = score * (rule.priority / 50);

    if (totalScore > highestScore && score >= 5) {
      highestScore = totalScore;
      bestRule = rule;
    }
  }

  if (bestRule) {
    return {
      reply: bestRule.reply,
      actions: bestRule.actions,
    };
  }

  // If score is 0 or query is unrelated -> Out of box polite apology
  return {
    reply: OUT_OF_BOX_REPLY,
    actions: OUT_OF_BOX_ACTIONS,
  };
}

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // ignore
  }

  return [WELCOME];
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
  const navigate = useNavigate();

  const MARGIN = 20;

  useEffect(() => {
    const history = loadHistory();
    setMessages(history);
    idRef.current =
      history.length > 0
        ? Math.max(...history.map((m) => m.id)) + 1
        : 1;
  }, []);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      setUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    } else if (messages.length > 1) {
      setUnread(true);
    }
  }, [open, messages.length, scrollToBottom]);

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, typing, open, scrollToBottom]);

  const persist = (msgs: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
    } catch {
      // ignore
    }
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

    const botResponse = getBotResponse(trimmed);
    const delay = 450 + Math.min(botResponse.reply.length * 5, 850);

    setTimeout(() => {
      const botMsg: Message = {
        id: idRef.current++,
        sender: 'bot',
        text: botResponse.reply,
        time: Date.now(),
        actions: botResponse.actions,
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

  const handleActionClick = (action: ChatAction) => {
    if (action.isExternal && action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    } else if (action.url) {
      navigate(action.url);
      setOpen(false);
    } else if (action.query) {
      sendUserMessage(action.query);
    }
  };

  const handleQuickReply = (text: string) => {
    sendUserMessage(text);
  };

  const clearChat = () => {
    const fresh = [
      {
        ...WELCOME,
        time: Date.now(),
      },
    ];
    setMessages(fresh);
    persist(fresh);
    idRef.current = 1;
  };

  const btnStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: `${MARGIN}px`,
    right: `${MARGIN}px`,
  };

  return (
    <>
      {/* =====================================
          FIXED CHATBOT FLOATING BUTTON
          ===================================== */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open Dais World AI Assistant'}
        title={open ? 'Close chat' : 'Dais World AI Assistant'}
        style={btnStyle}
        className={`fixed z-[90] w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          open
            ? 'bg-slate-800 text-white scale-95 hover:bg-slate-700'
            : 'bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 text-white hover:scale-110 shadow-blue-500/30 animate-pulse-ring'
        }`}
      >
        {open ? (
          <X size={24} color="white" />
        ) : (
          <MessageCircle size={26} color="white" />
        )}

        {unread && !open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-[10px] font-bold items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>

      {/* =====================================
          CHATBOT DIALOG WINDOW
          ===================================== */}
      {open && (
        <div
          className="fixed z-[90] left-3 right-3 bottom-[80px] sm:left-auto sm:right-5 sm:bottom-24 sm:w-[410px] animate-fadeInUp"
          style={{
            maxWidth: '100%',
            height: 'min(580px, calc(100dvh - 100px))',
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col w-full h-full backdrop-blur-md">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between flex-shrink-0 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-700" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-extrabold text-sm sm:text-base tracking-wide">
                      DAIS WORLD AI
                    </p>
                    <span className="text-[10px] bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 px-1.5 py-0.5 rounded-full font-semibold">
                      Assistant
                    </span>
                  </div>
                  <p className="text-white/80 text-[11px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Online · Vacancies & Partnership Expert
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  aria-label="Clear chat"
                  title="Clear conversation"
                  className="w-8 h-8 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="w-8 h-8 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 min-h-0 overflow-y-auto px-3.5 sm:px-4 py-3.5 space-y-3.5 bg-gradient-to-b from-slate-50 to-slate-100/70"
            >
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  msg={msg}
                  onActionClick={handleActionClick}
                />
              ))}

              {/* Typing Indicator */}
              {typing && (
                <div className="flex items-end gap-2 animate-fadeInUp">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-slate-100">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies Carousel / Chips */}
            <div className="px-3 sm:px-4 py-2 bg-slate-100/90 border-t border-slate-200/70 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto flex-shrink-0">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className="px-2.5 py-1 bg-white hover:bg-blue-50 hover:border-blue-300 border border-slate-200 text-slate-700 hover:text-blue-600 rounded-full text-[11px] sm:text-xs font-semibold transition-all shadow-2xs hover:scale-102"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-2.5 sm:p-3 bg-white border-t border-slate-200/80 flex items-center gap-2 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about vacancies, partners, training..."
                className="flex-1 min-w-0 px-3.5 sm:px-4 py-2.5 rounded-2xl bg-slate-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border border-transparent outline-none transition-all text-xs sm:text-sm text-slate-900 placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full flex items-center justify-center transition-all shadow-md shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================
   MESSAGE BUBBLE COMPONENT
   ========================================= */

function MessageBubble({
  msg,
  onActionClick,
}: {
  msg: Message;
  onActionClick: (action: ChatAction) => void;
}) {
  const isBot = msg.sender === 'bot';

  const time = new Date(msg.time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`flex items-end gap-2 ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
          <Bot className="w-4 h-4" />
        </div>
      )}

      <div className={`max-w-[85%] sm:max-w-[80%] ${isBot ? '' : 'items-end'}`}>
        <div
          className={`px-3.5 sm:px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm whitespace-pre-line ${
            isBot
              ? 'bg-white text-slate-800 rounded-bl-sm border border-slate-100 font-normal'
              : 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-br-sm font-medium'
          }`}
        >
          {msg.text}

          {/* Interactive Action Buttons inside Bot Message */}
          {isBot && msg.actions && msg.actions.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
              {msg.actions.map((act, i) => (
                <button
                  key={i}
                  onClick={() => onActionClick(act)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200/80 text-blue-700 rounded-xl text-[11px] font-semibold transition-all duration-200 shadow-2xs hover:scale-102 active:scale-98"
                >
                  <span>{act.label}</span>
                  {act.isExternal ? (
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  ) : act.url ? (
                    <ArrowRight className="w-3 h-3 ml-0.5 opacity-70" />
                  ) : (
                    <Sparkles className="w-3 h-3 ml-0.5 opacity-70" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <p
          className={`text-[9px] sm:text-[10px] text-slate-400 mt-1 px-1 ${
            isBot ? 'text-left' : 'text-right'
          }`}
        >
          {time}
        </p>
      </div>

      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-slate-300/80 flex items-center justify-center flex-shrink-0 text-slate-600">
          <UserIcon className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}