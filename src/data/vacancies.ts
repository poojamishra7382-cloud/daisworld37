export interface Vacancy {
  id: string;
  title: string;
  category: 'Healthcare' | 'Hospitality' | 'Construction' | 'Oil & Gas' | 'Beauty & Care';
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
];
