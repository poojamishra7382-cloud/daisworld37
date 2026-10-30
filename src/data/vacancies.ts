export interface Vacancy {
  id: string;
  title: string;
  category: 'Healthcare' | 'Hospitality' | 'Construction' | 'Oil & Gas' | 'Beauty & Care' | 'Automotive & Automobile' | 'Skilled Jobs';
  country: string;
  countryCode: string;
  region: 'West Europe' | 'Europe' | 'Middle East';
  positions: string;
  salary: string;
  salaryInr: string;
  experience: string;
  qualification: string;
  languageReq: string;
  contract: string;
  benefits: string[];
  isFeatured?: boolean;
  isUrgent?: boolean;
  postedDate: string;
  deadline: string;
  description: string;
  requirements?: string[];
  salaryNote?: string;
  detailUrl?: string;
}

export const vacancies: Vacancy[] = [
  // =========================================================================
  // NETHERLANDS NURSING DRIVES (CURRENT ACTIVE HIRING POSTER)
  // =========================================================================
  {
    id: 'ot-nurses-netherlands',
    title: '20 Operation Room (OT) Nurses',
    category: 'Healthcare',
    country: 'Netherlands (West Europe)',
    countryCode: 'nl',
    region: 'West Europe',
    positions: '20 Openings',
    salary: '€3,900 – €5,500 / month',
    salaryInr: '₹3,50,000 – ₹5,00,000 / mo',
    experience: '1+ Years OT / Surgical experience',
    qualification: 'B.Sc Nursing / GNM / Post Basic B.Sc',
    languageReq: 'Dutch Language Training provided up to B1 (4-6 Months)',
    contract: '2 Years | 2 Years | 1 Year (Renewable with PR path)',
    benefits: [
      '100% Visa & Air Ticket Provided',
      'Dutch Language Training up to B1 Level',
      'Free Accommodation & Relocation Assistance',
      'Overtime & Shift Allowances',
      'Long-term Employment Contract (5 Years)',
      'Permanent Residency (PR) Pathway in Netherlands',
    ],
    isFeatured: true,
    isUrgent: true,
    postedDate: 'Currently Hiring · August 2026',
    deadline: 'Immediate Screening & Selection',
    description:
      'Active urgent hiring for 20 Operation Room (OT) Nurses in top government & private hospital chains across the Netherlands. 100% visa processing, flight tickets, Dutch language training (4 to 6 months), and housing provided.',
  },
  {
    id: 'healthcare-assistants-netherlands',
    title: '30 Healthcare Assistants & Caregivers',
    category: 'Healthcare',
    country: 'Netherlands (West Europe)',
    countryCode: 'nl',
    region: 'West Europe',
    positions: '30 Openings',
    salary: '€2,450 – €3,200 / month',
    salaryInr: '₹2,20,000 – ₹2,90,000 / mo',
    experience: '0 – 2 Years (Freshers & ANM / GNM welcome)',
    qualification: 'ANM / GNM / B.Sc Nursing / Caregiving Diploma',
    languageReq: 'Dutch Language Training provided up to B1 (4-6 Months)',
    contract: '2 Years | 2 Years | 1 Year (Renewable)',
    benefits: [
      '100% Work Visa & Air Ticket Provided',
      'Complete Dutch Language Training (4 to 6 Months)',
      'Subsidized Staff Housing & Transport',
      'Comprehensive Netherlands Health Insurance',
      'Supportive Work Environment & Work-Life Balance',
      'Career Upgrade Pathways to Registered Nurse',
    ],
    isFeatured: true,
    isUrgent: true,
    postedDate: 'Currently Hiring · August 2026',
    deadline: 'Immediate Batch Enrollment',
    description:
      'Currently hiring 30 Healthcare Assistants and Caregivers for premier Netherlands eldercare centers and rehabilitation hospitals. Comprehensive Dutch language training and direct employer visa sponsorship provided.',
  },
  {
    id: 'registered-nurses-netherlands',
    title: '20 Registered Staff Nurses (General / Ward)',
    category: 'Healthcare',
    country: 'Netherlands (West Europe)',
    countryCode: 'nl',
    region: 'West Europe',
    positions: '20 Openings',
    salary: '€3,200 – €3,775 / month',
    salaryInr: '₹2,85,000 – ₹3,40,000 / mo',
    experience: '1 – 5 Years clinical hospital experience',
    qualification: 'B.Sc Nursing / GNM with State Nursing Council Registration',
    languageReq: 'Dutch Language Training provided up to B1 (4-6 Months)',
    contract: '2 Years | 2 Years | 1 Year (Renewable with PR path)',
    benefits: [
      '100% Visa & Air Ticket by Company',
      'Dutch Language Training up to B1 Level',
      'Relocation Bonus & Initial Free Accommodation',
      'European Pension & Healthcare Coverage',
      'Paid Annual Leaves (30+ Days)',
      'Netherlands PR Eligibility after 5 Years',
    ],
    isFeatured: true,
    isUrgent: true,
    postedDate: 'Currently Hiring · August 2026',
    deadline: 'Fast-Track Dutch Batch',
    description:
      'Direct hiring for 20 Registered Staff Nurses for hospital wards and healthcare centres in the Netherlands. Competitive Euro salaries, Dutch language training, visa processing, and relocation support included.',
  },
  {
    id: 'icu-critical-care-germany',
    title: 'ICU & Critical Care Specialists',
    category: 'Healthcare',
    country: 'Germany & Switzerland',
    countryCode: 'de',
    region: 'Europe',
    positions: '15 Openings',
    salary: '€3,500 – €4,800 / month',
    salaryInr: '₹3,15,000 – ₹4,30,000 / mo',
    experience: '2+ Years ICU / CCU experience',
    qualification: 'B.Sc Nursing / Post-Basic Nursing with ICU certification',
    languageReq: 'German B1/B2 training provided',
    contract: '3 Years renewable contract',
    benefits: [
      'Full Visa Sponsorship',
      'Flight Ticket & Settlement Allowance',
      'Language Training with Monthly Stipend',
      'Fast-track Approbation Support',
    ],
    isFeatured: false,
    isUrgent: true,
    postedDate: 'August 2026',
    deadline: 'Open Until Filled',
    description:
      'Join leading German university hospitals in Intensive Care Units. Includes specialized language training and fast-track recognition.',
  },

  // =========================================================================
  // HOSPITALITY & CULINARY
  // =========================================================================
  {
    id: 'executive-chefs-europe-gulf',
    title: 'Executive & Sous Chefs (Indian / Continental / Bakery)',
    category: 'Hospitality',
    country: 'UAE & Germany',
    countryCode: 'ae',
    region: 'Middle East',
    positions: '12 Openings',
    salary: 'AED 8,000 – 14,000 / €2,800 – €4,200',
    salaryInr: '₹1,80,000 – ₹3,80,000 / mo',
    experience: '3+ Years in 4-Star / 5-Star Hotels or Fine Dining',
    qualification: 'Diploma / Degree in Hotel Management or Culinary Arts',
    languageReq: 'Conversational English',
    contract: '2 Years renewable',
    benefits: [
      'Duty Meals & Free Accommodation',
      'Annual Return Flight Ticket',
      'Complete Work Permit & Medical Insurance',
      'Service Charge & Tips',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'August 2026',
    deadline: 'Rolling Applications',
    description:
      'Hiring experienced chefs for luxury 5-star hotel chains in Dubai and European fine-dining restaurant chains.',
  },
  {
    id: 'front-office-fb-supervisors',
    title: 'Hotel Front Office & F&B Supervisors',
    category: 'Hospitality',
    country: 'UAE & Qatar',
    countryCode: 'qa',
    region: 'Middle East',
    positions: '25 Openings',
    salary: 'QAR 4,500 – 7,500 / month',
    salaryInr: '₹1,05,000 – ₹1,75,000 / mo',
    experience: '1 – 3 Years in Hospitality customer service',
    qualification: 'Graduate / Hotel Management Diploma',
    languageReq: 'Fluent English (Arabic is a plus)',
    contract: '2 Years renewable',
    benefits: [
      'Company Provided Luxury Staff Housing',
      'Free Transport & Meals on Duty',
      'Two-Way Air Tickets & Visa',
      'Gratuity & End of Service Benefits',
    ],
    isFeatured: false,
    isUrgent: true,
    postedDate: 'August 2026',
    deadline: 'Urgent Batch',
    description:
      'Front of house and food & beverage supervisors for prestigious luxury hotel resorts and convention centres in Doha and Dubai.',
  },

  // =========================================================================
  // CONSTRUCTION & ENGINEERING
  // =========================================================================
  {
    id: 'civil-mep-site-engineers',
    title: 'Civil & MEP Project Site Engineers',
    category: 'Construction',
    country: 'Saudi Arabia (Mega Projects) & Qatar',
    countryCode: 'sa',
    region: 'Middle East',
    positions: '20 Openings',
    salary: 'SAR 9,000 – 16,000 / month',
    salaryInr: '₹2,00,000 – ₹3,55,000 / mo',
    experience: '3 – 7 Years in Infrastructure / High-rise Projects',
    qualification: 'B.E / B.Tech in Civil / Mechanical / Electrical',
    languageReq: 'English',
    contract: '2 to 3 Years Renewable',
    benefits: [
      'Single / Family Accommodation Provided',
      'Company Transport or Car Allowance',
      'Visa, Iqama & Medical Insurance Covered',
      '30 Days Paid Vacation with Air Ticket',
    ],
    isFeatured: false,
    isUrgent: true,
    postedDate: 'August 2026',
    deadline: 'Immediate Joining',
    description:
      'Site engineers required for giga-infrastructure, airport expansion, and commercial smart-city developments across the Gulf.',
  },

  // =========================================================================
  // OIL & GAS
  // =========================================================================
  {
    id: 'oil-gas-instrumentation-tech',
    title: 'Offshore & Refinery Instrumentation Technicians',
    category: 'Oil & Gas',
    country: 'Saudi Arabia & UAE',
    countryCode: 'sa',
    region: 'Middle East',
    positions: '15 Openings',
    salary: 'SAR 7,500 – 13,000 / month',
    salaryInr: '₹1,65,000 – ₹2,90,000 / mo',
    experience: '2+ Years in Petrochemical / Refinery / Offshore plant',
    qualification: 'ITI / Diploma in Instrumentation / Electronics',
    languageReq: 'English',
    contract: '2 Years Contract',
    benefits: [
      'Free Boarding & Lodging in Camp / Town',
      'Offshore Allowances & Rotation Leaves',
      'Complete Visa & Round-Trip Flights',
      'Health, Life & Hazard Insurance',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'August 2026',
    deadline: 'Ongoing Selection',
    description:
      'Experienced instrument technicians needed for refinery shutdown and offshore platform maintenance programs.',
  },

  // =========================================================================
  // BEAUTY & CARE
  // =========================================================================
  {
    id: 'spa-aesthetic-therapists',
    title: 'Spa Therapists & Aesthetic Care Specialists',
    category: 'Beauty & Care',
    country: 'West Europe & UAE',
    countryCode: 'fr',
    region: 'West Europe',
    positions: '10 Openings',
    salary: '€2,200 – €3,500 / AED 6,500 – 11,000',
    salaryInr: '₹1,50,000 – ₹3,15,000 / mo',
    experience: '1 – 4 Years in Luxury Spa / Wellness Resort',
    qualification: 'CIDESCO / CIBTAC / Ayurveda Wellness Certificate',
    languageReq: 'English (French / German bonus)',
    contract: '2 Years Renewable',
    benefits: [
      'Free Accommodation & Meal Allowance',
      'Attractive Commission on Treatments & Retail',
      'Visa Processing & Annual Flight Ticket',
      'European Certification Training on-site',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'August 2026',
    deadline: 'Next Batch Selection',
    description:
      'Luxury resort spas and wellness clinics seeking qualified massage, holistic, and aesthetic skincare therapists.',
  },

  // =========================================================================
  // AUTOMOTIVE & AUTOMOBILE
  // =========================================================================
  {
    id: 'luxury-car-mechanical-engineer-netherlands',
    title: 'Luxury Car Mechanical Engineer – Overseas',
    category: 'Automotive & Automobile',
    country: 'Netherlands',
    countryCode: 'nl',
    region: 'West Europe',
    positions: '10 Openings',
    salary: '€2,200 – €4,500 / month',
    salaryInr: '₹2,00,000 – ₹4,00,000 / month',
    experience: 'Practical experience in luxury car repair & maintenance (BMW, Mercedes, Audi, Porsche, Jaguar, Land Rover)',
    qualification: 'ITI, Diploma, or Degree in Automobile or Mechanical Engineering',
    languageReq: 'Basic English (Dutch workplace language support provided)',
    contract: 'Full-Time / 2 Years Renewable',
    benefits: [
      'Overseas employment in Netherlands with legal work visa',
      'Competitive salary package (₹2,00,000 – ₹4,00,000 per month)',
      'Hands-on servicing of premium brands (BMW, Mercedes, Audi, Porsche, Land Rover)',
      'Relocation guidance & additional benefits as per employer policy',
    ],
    isFeatured: true,
    isUrgent: true,
    postedDate: 'Current Vacancy',
    deadline: 'Immediate Hiring',
    description:
      'We are hiring experienced Luxury Car Mechanical Engineers for overseas employment in the Netherlands. Candidates must have hands-on experience in repairing, servicing, and maintaining premium and luxury vehicles including BMW, Mercedes-Benz, Audi, Porsche, Jaguar, and Land Rover.',
  },

  // =========================================================================
  // EUROPE HEALTHCARE VACANCIES
  // =========================================================================
  {
    id: 'dentist-europe',
    title: 'Dentist',
    category: 'Healthcare',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Open Vacancies',
    salary: '€4,000 – €6,500 / month',
    salaryInr: 'approx ₹3,60,000 – ₹5,85,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Actual compensation varies by destination country, employer, qualification, specialization, and working hours.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification:
      'Recognized dental degree or diploma and professional registration as required by the destination country',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2–3 Years Renewable',
    benefits: [
      'Assistance with European professional registration and licensing',
      'Full work permit & visa documentation support',
      'Modern state-of-the-art dental clinical environments',
      'Statutory annual leave & health insurance coverage',
    ],
    isFeatured: true,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Open Until Filled',
    description:
      'We are seeking qualified dentists to diagnose oral health conditions, examine patients, perform dental procedures, recommend treatment plans, and provide preventive dental care.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant recognized dental qualification.',
      '2–5 years of relevant professional experience in Europe.',
      'Valid professional registration or licence as required locally.',
      'Good patient communication and clinical skills.',
    ],
  },
  {
    id: 'dental-hygienist-europe',
    title: 'Dental Hygienist',
    category: 'Healthcare',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Open Vacancies',
    salary: '€3,000 – €4,500 / month',
    salaryInr: 'approx ₹2,70,000 – ₹4,05,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Actual compensation varies by destination country, employer, qualification, specialization, and working hours.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification: 'Relevant dental hygiene diploma or recognized qualification',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2–3 Years Renewable',
    benefits: [
      'Assistance with destination country credentials verification',
      'Work visa and employment relocation guidance',
      'Modern ergonomic equipment and ultrasonic instrumentation',
      'Comprehensive statutory medical insurance & benefits',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Open Until Filled',
    description:
      'We are looking for qualified dental hygienists to provide preventive oral healthcare, professional teeth cleaning, periodontal care, oral hygiene education, and patient support in dental practices or clinics.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant dental hygiene diploma or recognized qualification.',
      '2–5 years of relevant professional experience in Europe.',
      'Professional registration where required by the destination country.',
      'Knowledge of dental hygiene procedures and infection-control standards.',
    ],
  },
  {
    id: 'nurse-europe',
    title: 'Nurse',
    category: 'Healthcare',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Multiple Openings',
    salary: '€2,800 – €4,300 / month',
    salaryInr: 'approx ₹2,50,000 – ₹3,85,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Actual compensation varies by country, employer, qualification, specialization, and working hours. Professional registration, qualification recognition, and language requirements depend on the destination country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification: 'Recognized nursing diploma',
    languageReq: 'Dutch B1',
    contract: 'Full-Time / 2–3 Years Renewable',
    benefits: [
      '100% legal European work visa sponsorship assistance',
      'Shift premiums, weekend allowances, and overtime compensation',
      'Relocation support and temporary housing options',
      'Continuing education and European career upgrade opportunities',
    ],
    isFeatured: true,
    isUrgent: true,
    postedDate: 'Current Vacancy',
    deadline: 'Open Until Filled',
    description:
      'We are recruiting qualified nurses to provide patient care, monitor health conditions, administer prescribed treatments, maintain medical records, and collaborate with doctors and other healthcare professionals.',
    requirements: [
      'Dutch language proficiency at B1 level.',
      'Recognized nursing diploma.',
      '2–5 years of relevant professional experience in Europe.',
      'Professional nursing registration where required.',
      'Knowledge of patient safety, hygiene, and clinical procedures.',
    ],
  },
  {
    id: 'operating-room-assistant-europe',
    title: 'Operating Room Assistant',
    category: 'Healthcare',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Multiple Openings',
    salary: '€3,800 – €5,600 / month',
    salaryInr: 'approx ₹3,40,000 – ₹5,00,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Actual compensation varies by country, employer, qualification, specialization, and working hours. Qualification recognition depends on the destination European country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification:
      'Recognized Operating Room Assistant or Surgical Technologist qualification',
    languageReq: 'Dutch B1',
    contract: 'Full-Time / 2–3 Years Renewable',
    benefits: [
      'Work visa & relocation assistance for qualified candidates',
      'State-of-the-art operating theatre suites and academic medical centers',
      'On-call and specialized surgical shift allowances',
      'Statutory paid leave, pension contribution, and medical insurance',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Open Until Filled',
    description:
      'We are seeking experienced operating room assistants to support surgical teams, prepare operating rooms, arrange instruments and equipment, maintain sterile conditions, and assist with safe operating theatre procedures.',
    requirements: [
      'Dutch language proficiency at B1 level, subject to employer requirements.',
      'Relevant recognized diploma or qualification.',
      '2–5 years of relevant professional experience in Europe.',
      'Knowledge of sterile techniques and operating room protocols.',
      'Professional registration or certification where required.',
    ],
  },
  {
    id: 'anesthesia-assistant-europe',
    title: 'Anesthesia Assistant',
    category: 'Healthcare',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Multiple Openings',
    salary: '€2,700 – €4,000 / month',
    salaryInr: 'approx ₹2,40,000 – ₹3,60,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Dutch B1 or diploma alone does not guarantee automatic eligibility to practice without required local credentials.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification:
      'Recognized anesthesia assistant or anesthesia nursing qualification',
    languageReq: 'Dutch B1',
    contract: 'Full-Time / 2–3 Years Renewable',
    benefits: [
      'Work visa and employment relocation support',
      'Collaborative environment alongside experienced anesthesiology teams',
      'Hospital shift allowances and weekend bonuses',
      'Comprehensive healthcare and statutory social security benefits',
    ],
    isFeatured: false,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Open Until Filled',
    description:
      'We are hiring qualified anesthesia assistants to support anesthesiologists and anesthesia teams in preparing equipment, assisting with anesthesia procedures, monitoring patients within their professional scope, and maintaining patient safety before, during, and after surgery.',
    requirements: [
      'Dutch language proficiency at B1 level, subject to employer requirements.',
      'Relevant recognized anesthesia diploma or qualification.',
      '2–5 years of relevant professional experience in Europe.',
      'Knowledge of anesthesia equipment and patient monitoring.',
      'Required professional registration and certifications for the destination country.',
    ],
  },

  // =========================================================================
  // EUROPE SKILLED JOBS VACANCIES
  // =========================================================================
  {
    id: 'welder-europe',
    title: 'Welder',
    category: 'Skilled Jobs',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Active Openings',
    salary: '€2,500 – €3,600 / month',
    salaryInr: 'approx ₹2,25,000 – ₹3,25,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Diploma, licence, and certification requirements may differ by country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification: 'Relevant welding diploma or professional qualification',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2 Years Renewable',
    detailUrl: '/services/specialized-services/welders',
    benefits: [
      'Full European legal work visa assistance',
      'Shift bonuses and overtime allowances (1.5x)',
      'Furnished housing options or accommodation allowances',
      'Modern welding equipment and certified PPE provided',
    ],
    isFeatured: true,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Immediate Selection',
    description:
      'We are hiring experienced welders for metal fabrication, joining metal components, and industrial or structural welding projects. Candidates should be able to follow technical drawings, operate welding equipment safely, and maintain quality standards.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant welding diploma or professional qualification.',
      '2–5 years of relevant welding experience in Europe.',
      'Knowledge of welding techniques and equipment.',
      'Ability to follow technical drawings and safety procedures.',
    ],
  },
  {
    id: 'electrician-europe',
    title: 'Electrician',
    category: 'Skilled Jobs',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Active Openings',
    salary: '€3,000 – €4,500 / month',
    salaryInr: 'approx ₹2,70,000 – ₹4,05,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Diploma, licence, and certification requirements may differ by country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification: 'Relevant electrical diploma or technical qualification',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2 Years Renewable',
    detailUrl: '/services/specialized-services/electricians',
    benefits: [
      'Legal European work visa sponsorship support',
      'High-growth projects in solar PV and EV charging networks',
      'Tools, calibrated test instruments, and safety gear supplied',
      'Accommodation and site travel arrangements as per employer',
    ],
    isFeatured: true,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Immediate Selection',
    description:
      'We are seeking experienced electricians for electrical installation, maintenance, troubleshooting, and repair work. Candidates must have practical experience with solar panel systems and EV charging station installations.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant electrical diploma or technical qualification.',
      '2–5 years of relevant professional experience in Europe.',
      'Hands-on experience with solar panels and EV charging stations.',
      'Knowledge of electrical safety procedures and local regulations.',
    ],
  },
  {
    id: 'scaffolder-europe',
    title: 'Scaffolder',
    category: 'Skilled Jobs',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Active Openings',
    salary: '€2,500 – €4,000 / month',
    salaryInr: 'approx ₹2,25,000 – ₹3,60,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Safety certification requirements differ by country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification:
      'Relevant scaffolding qualification or safety certification where required',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2 Years Renewable',
    detailUrl: '/services/specialized-services/scaffolders',
    benefits: [
      'Assistance with work visa and European safety card verification',
      'Direct employment contracts with accredited European contractors',
      'Overtime compensation and generous weekend premiums',
      'Accommodation assistance and daily site commute arrangements',
    ],
    isFeatured: true,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Immediate Selection',
    description:
      'We are looking for experienced scaffolders to assemble, inspect, modify, and dismantle scaffolding structures for construction and industrial projects. Candidates should understand scaffold stability, safe assembly procedures, and working-at-height safety.',
    requirements: [
      'Minimum English-speaking ability.',
      '2–5 years of relevant scaffolding experience in Europe.',
      'Practical knowledge of scaffolding equipment and assembly.',
      'Understanding of working-at-height safety procedures.',
      'Relevant safety certifications where required by local regulations.',
    ],
  },
  {
    id: 'crane-operator-europe',
    title: 'Crane Operator – Container Terminals at the Port',
    category: 'Skilled Jobs',
    country: 'Europe',
    countryCode: 'eu',
    region: 'Europe',
    positions: 'Active Openings',
    salary: '€2,500 – €3,500 / month',
    salaryInr: 'approx ₹2,25,000 – ₹3,15,000 / mo',
    salaryNote:
      '* Indicative gross monthly salary estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules. Licence and certification requirements differ by country.',
    experience: '2–5 years of relevant professional experience in Europe',
    qualification:
      'Relevant crane-operation diploma, licence, or recognized qualification',
    languageReq: 'Minimum English-speaking ability',
    contract: 'Full-Time / 2 Years Renewable',
    detailUrl: '/services/specialized-services/crane-operators',
    benefits: [
      'European legal work permit and visa guidance',
      'Modern container handling gantry and STS cabin facilities',
      'Port terminal shift premiums and statutory benefits',
      'Relocation guidance and settlement assistance',
    ],
    isFeatured: true,
    isUrgent: false,
    postedDate: 'Current Vacancy',
    deadline: 'Immediate Selection',
    description:
      'We are recruiting experienced crane operators for port and container-terminal operations. Responsibilities include loading and unloading shipping containers, lifting and positioning cargo, coordinating with terminal teams, and following operational and workplace safety procedures.',
    requirements: [
      'Minimum English-speaking ability.',
      'Relevant crane-operation diploma, licence, or qualification as required locally.',
      '2–5 years of relevant crane-operation experience in Europe.',
      'Port or container-terminal experience preferred.',
      'Knowledge of lifting procedures and workplace safety requirements.',
    ],
  },
];
