import {
  Stethoscope,
  Hotel,
  HardHat,
  Fuel,
  Sparkles,
  Car,
  Wrench,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  overview: string;
  features: string[];
  roles: string[];
  industries: string[];
  benefits: string[];
  color: string;
  image: string;
}

export const services: ServiceItem[] = [

  // =====================================================
  // HEALTHCARE
  // =====================================================

  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: Stethoscope,

    short:
      'International medical & holistic healthcare recruitment across Doctors, Nurses, Dietitians, Phlebotomists, Ayurveda & Yoga',

    description:
      'We connect qualified healthcare and holistic medical professionals — including Specialist Doctors, Registered Nurses, Ayurvedic Practitioners (BAMS), Certified Yoga Instructors & Therapists, Clinical Dietitians & Nutritionists, Phlebotomists, and Medical Laboratory Technologists — with leading international hospitals, diagnostic centers, wellness retreats, and medical facilities.',

    overview:
      'Our healthcare recruitment services connect qualified medical and holistic wellness professionals across all clinical disciplines with trusted hospitals, clinics, diagnostic centers, Ayurvedic wellness resorts, yoga retreats, and healthcare institutions internationally. From Doctors and Registered Nurses to Ayurvedic Doctors (BAMS), Certified Yoga Therapists, Clinical Dietitians, Certified Phlebotomists, Laboratory Technicians, and Allied Health staff, we support candidates throughout licensing, documentation, interviews, visa processing, and relocation.',

    features: [
      'Specialist Doctors & Medical Consultants Recruitment',
      'Registered Nurses, Staff Nurses & ICU Specialists',
      'Ayurvedic Doctors (BAMS/MD) & Panchakarma Specialists',
      'Certified Yoga Instructors, Therapists & Masters',
      'Clinical Dietitians, Nutritionists & Wellness Experts',
      'Phlebotomists, Blood Bank Staff & Lab Technicians',
      'Credential Verification, Licensing & Eligibility Support',
      'International Hospital, Clinic & Wellness Placement',
    ],

    roles: [
      'Specialist Doctors & General Physicians',
      'Registered Nurses & Staff Nurses',
      'Ayurvedic Doctors & Practitioners (BAMS / MD)',
      'Certified Yoga Instructors & Yoga Therapists',
      'Dietitians & Clinical Nutritionists',
      'Panchakarma & Ayurvedic Therapists',
      'Phlebotomists (Blood Collection Specialists)',
      'Medical Laboratory Technicians (MLT / DMLT)',
      'Radiology & Imaging Technicians (X-Ray / MRI)',
      'Physiotherapists & Rehabilitation Specialists',
      'Operation Theatre (OT) Technicians',
      'Pharmacists & Pharmacy Technicians',
      'Healthcare Assistants & Caregivers',
    ],

    industries: [
      'Government & Private Hospitals',
      'Ayurveda Hospitals & Wellness Resorts',
      'Yoga Retreats & Holistic Healing Centers',
      'Diagnostic Centers & Pathology Labs',
      'Nutrition & Wellness Clinics',
      'Specialized Medical Centers',
      'Nursing Homes & Elderly Care',
      'Rehabilitation & Physiotherapy Centers',
      'Blood Banks & Clinical Research Facilities',
      'Long-Term Care Facilities',
    ],

    benefits: [
      'Competitive international salaries (€2,800 to €8,000+/month)',
      'Direct employment contracts with accredited hospitals, clinics & wellness centers',
      'Complete licensing, credentialing & document apostille support',
      'Free or subsidized medical language training assistance',
      '100% visa processing & relocation guidance',
      'Long-term residency & international career advancement',
    ],

    color: 'from-blue-600 to-cyan-500',

    image: '/service-healthcare-hero.jpg',
  },


  // =====================================================
  // HOSPITALITY
  // =====================================================

  {
    slug: 'hospitality',
    title: 'Hospitality',
    icon: Hotel,

    short:
      'Skilled hospitality professionals for global opportunities',

    description:
      'We recruit and place skilled hospitality professionals with hotels, resorts, restaurants, and hospitality businesses worldwide. Our solutions help employers build reliable teams while helping candidates discover international career opportunities.',

    overview:
      'Our hospitality recruitment services connect skilled and experienced professionals with hotels, resorts, restaurants, and hospitality organizations across international markets. We focus on matching candidates according to their skills, experience, qualifications, and employer requirements.',

    features: [
      'Hotel & Resort Workforce Recruitment',
      'Executive Chefs & Kitchen Staff Placement',
      'Housekeeping & Facility Staff Recruitment',
      'Front Office & Guest Relations Staffing',
      'Restaurant & Food Service Recruitment',
      'Food & Beverage Staffing Solutions',
      'International Placement & Relocation Support',
    ],

    roles: [
      'Hotel Managers',
      'Front Office Staff',
      'Receptionists',
      'Chefs',
      'Sous Chefs',
      'Cooks',
      'Kitchen Assistants',
      'Housekeeping Staff',
      'Waiters & Waitresses',
      'Food & Beverage Staff',
      'Restaurant Staff',
      'Maintenance Staff',
    ],

    industries: [
      'Hotels',
      'Luxury Resorts',
      'Restaurants',
      'Cafes',
      'Food & Beverage Businesses',
      'Holiday Resorts',
      'Guest Houses',
      'Hospitality Groups',
    ],

    benefits: [
      'International hospitality opportunities',
      'Professional job matching',
      'Access to hotel and resort vacancies',
      'Career development support',
      'Employer interview coordination',
      'International placement assistance',
    ],


    color: 'from-indigo-600 to-blue-500',

    image: '/service-hospitality-hero.jpg',
  },


  // =====================================================
  // CONSTRUCTION
  // =====================================================

  {
    slug: 'construction',
    title: 'Construction',
    icon: HardHat,

    short:
      'Skilled and experienced construction workforce',

    description:
      'We provide skilled and experienced construction professionals for international projects. Our recruitment services cover multiple construction trades and help employers build dependable teams for residential, commercial, infrastructure, and industrial projects.',

    overview:
      'Our construction recruitment services help international employers find skilled and experienced professionals for residential, commercial, infrastructure, and industrial projects. We match candidates according to their technical skills, experience, qualifications, and project requirements.',

    features: [
      'Skilled Construction Worker Recruitment',
      'Civil & Building Engineering Professionals',
      'Certified Electricians & Plumbers Recruitment',
      'Expert Welders, Fitters & Fabricators Placement',
      'Site Engineers & Project Supervisors',
      'Heavy Equipment & Crane Operators',
      'International Workforce & Trade Placement',
    ],

    roles: [
      'Civil Engineers',
      'Site Engineers',
      'Construction Supervisors',
      'Electricians',
      'Plumbers',
      'Welders',
      'Steel Fixers',
      'Carpenters',
      'Masons',
      'Painters',
      'Tile Fixers',
      'Equipment Operators',
      'Technicians',
    ],

    industries: [
      'Residential Construction',
      'Commercial Construction',
      'Infrastructure Projects',
      'Road & Highway Projects',
      'Industrial Construction',
      'Building Projects',
      'Engineering Projects',
      'Maintenance Projects',
    ],

    benefits: [
      'Access to skilled international workforce',
      'Project-specific recruitment',
      'Technical skill assessment',
      'Experienced candidate sourcing',
      'Documentation support',
      'International placement assistance',
    ],

    
    color: 'from-blue-500 to-indigo-600',

    image: '/service-construction-hero.jpg',
  },


  // =====================================================
  // OIL & GAS
  // =====================================================

  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    icon: Fuel,

    short:
      'Specialized manpower for the oil and gas industry',

    description:
      'We connect experienced oil and gas professionals with international employers and projects. Our recruitment solutions help companies access qualified technical, engineering, operational, and maintenance talent for demanding industry requirements.',

    overview:
      'Our oil and gas recruitment services connect experienced professionals with international employers and energy projects. We provide recruitment support for engineering, technical, operational, maintenance, and skilled workforce requirements while focusing on qualifications, experience, and project needs.',

    features: [
      'Oil & Gas Specialized Workforce Recruitment',
      'Engineers & Technical Professionals Staffing',
      'Plant Operators & Maintenance Staff Placement',
      'Certified Welders, Riggers & Pipe Fitters',
      'Project-Based Manpower Solutions',
      'Technical Candidate Verification & Screening',
      'International Placement & Visa Processing Support',
    ],

    roles: [
      'Petroleum Engineers',
      'Mechanical Engineers',
      'Electrical Engineers',
      'Process Engineers',
      'Project Engineers',
      'Plant Operators',
      'Field Operators',
      'Maintenance Technicians',
      'Mechanical Technicians',
      'Electrical Technicians',
      'Welders',
      'Pipe Fitters',
      'Safety Professionals',
    ],

    industries: [
      'Oil Exploration',
      'Oil Production',
      'Gas Processing',
      'Refineries',
      'Petrochemical Plants',
      'Energy Projects',
      'Pipeline Projects',
      'Offshore Operations',
      'Onshore Operations',
    ],

    benefits: [
      'Access to specialized technical professionals',
      'Industry-focused recruitment',
      'Experienced candidate sourcing',
      'Technical skill assessment',
      'Project-specific manpower solutions',
      'International recruitment support',
    ],

    
    color: 'from-cyan-600 to-teal-500',

    image: '/service-oil-hero.jpg',
  },


  // =====================================================
  // BEAUTY & CARE
  // =====================================================

  {
    slug: 'beauty-and-care',
    title: 'Beauty & Care',
    icon: Sparkles,

    short:
      'Certified beauty, wellness, spa, and aesthetic professionals for global brands',

    description:
      'We recruit and place certified beauty therapists, cosmetologists, hair stylists, spa professionals, and skin care specialists with luxury salons, 5-star hotel spas, wellness retreats, and aesthetic clinics across international markets.',

    overview:
      'Our Beauty & Care recruitment services bridge certified Indian beauty and wellness professionals with premier luxury spas, wellness resorts, aesthetic clinics, and high-end beauty salons across the Middle East, Europe, and worldwide. We ensure thorough skill assessment, international trade certification, documentation, and personalized career support for long-term growth abroad.',

    features: [
      'Luxury Spa & Wellness Resort Staffing',
      'Certified Cosmetologists & Aesthetician Recruitment',
      'Professional Hair Stylists & Salon Artists',
      'Nail Technicians & Makeup Artists Placement',
      'Hands-On Trade & Practical Skill Evaluation',
      'Documentation, Licensing & Visa Processing',
      'Luxury Hospitality & Service Standard Orientation',
      'International Contract & Relocation Assistance',
    ],

    roles: [
      'Spa Therapists & Masseurs',
      'Cosmetologists & Aestheticians',
      'Skin Care Specialists',
      'Hair Stylists & Colorists',
      'Nail Technicians & Nail Artists',
      'Professional Makeup Artists',
      'Laser & Beauty Technicians',
      'Salon & Spa Managers',
    ],

    industries: [
      '5-Star Luxury Hotel Spas',
      'High-End Beauty Salons',
      'Aesthetic & Dermatology Clinics',
      'Wellness & Ayurvedic Resorts',
      'International Cruise Liners',
      'Medi-Spas & Laser Centers',
      'Bridal & Fashion Studios',
      'Luxury Wellness Retreats',
    ],

    benefits: [
      'Lucrative international tax-free salaries & service incentives',
      'Placement with top global luxury brands and 5-star resorts',
      'Comprehensive documentation & visa clearance support',
      'Flight tickets, accommodation & health insurance provided',
      'Professional skill advancement & global career exposure',
      'Transparent and reliable overseas placement process',
    ],

    color: 'from-pink-500 to-rose-500',

    image: '/service-beauty-hero.jpg',
  },


  // =====================================================
  // AUTOMOTIVE & AUTOMOBILE
  // =====================================================

  {
    slug: 'automotive',
    title: 'Automotive & Automobile',
    icon: Car,

    short:
      'Premier automotive recruitment across design, maintenance, assembly manufacturing, EV powertrains & metrology testing',

    description:
      'We recruit and deploy qualified automotive engineers, certified master technicians, automated assembly operators, EV battery specialists, and quality auditors with leading European OEMs, gigafactories, tier-1 suppliers, and authorized brand dealerships.',

    overview:
      'Our Automotive & Automobile recruitment services bridge India’s finest automotive engineers and certified technicians with premier car manufacturers, commercial fleet operators, and next-generation electric vehicle gigafactories across Germany, Sweden, the Netherlands, the UK, Poland, and the Middle East. From CAD/CAM design and robotic assembly to high-voltage EV battery integration and IATF 16949 quality testing, we manage full licensing, verification, and relocation.',

    features: [
      'Automotive Design & CAD/CAM Simulation Engineers',
      'Dealership Master Technicians & Certified Diagnostic Mechanics',
      'High-Speed Robotic Assembly & Stamping Cell Operators',
      'Electric Vehicle (EV) High-Voltage Battery & BMS Specialists',
      'Precision CMM 3D Metrology & IATF 16949 QA/QC Auditors',
      'Heavy Commercial Fleet & Diesel Truck Fitters',
      'Comprehensive Tooling & European Safety Certification Support',
      'Direct OEM Placement & End-to-End Visa Processing',
    ],

    roles: [
      'Automotive CAD Design Engineers (CATIA / NX)',
      'Master Automotive Diagnostic Technicians',
      'Electric Vehicle (EV) High-Voltage Technicians',
      'Automated Robotic Welding Operators (KUKA / Fanuc)',
      'Powertrain & Transmission Engineers',
      'Automotive Quality Assurance (QA/QC) Engineers',
      'CMM Precision 3D Metrology Technicians',
      'Auto-Electricians & Wiring Harness Specialists',
      'Heavy Commercial Vehicle & Fleet Mechanics',
      'Chassis & Vehicle Dynamics Engineers',
      'CNC Machinists & Tool/Die Makers',
      'End-of-Line Vehicle Road Test Drivers',
    ],

    industries: [
      'Passenger Vehicle OEMs & R&D Centers',
      'Electric Vehicle (EV) Gigafactories',
      'Authorized Brand Dealership Service Networks',
      'Tier-1 Automotive Component Manufacturers',
      'Heavy Commercial Truck & Bus Builders',
      'Automotive Testing & Homologation Facilities',
      'Body-in-White (BIW) Stamping & Stamping Plants',
      'Battery Pack & Power Electronics Producers',
      'Motorsport & High-Performance Engineering Centers',
    ],

    benefits: [
      'Competitive international salaries (€2,800 to €7,800+/month)',
      'Direct employment contracts with accredited European OEMs & Tier-1 suppliers',
      'Assistance with European trade credentials & high-voltage safety certifications',
      'Flight tickets, visa sponsorship & furnished company accommodation options',
      'Structured career growth and high shift / overtime premiums',
      '100% transparent and reliable overseas placement support',
    ],

    color: 'from-red-600 to-rose-600',

  image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop',
  },

  // =====================================================
  // SKILLED JOB (SPECIALIZED SERVICES)
  // =====================================================

  {
    slug: 'specialized-services',
    title: 'Skilled Job',
    icon: Wrench,

    short:
      'Certified international recruitment for skilled jobs including Electricians, Welders, Scaffolders & Crane Operators',

    description:
      'We recruit and deploy certified skilled craftsmen for premier European and Middle Eastern infrastructure, energy, plant construction, and port facilities.',

    overview:
      'Our Skilled Job recruitment division fulfills high-demand skilled workforce requirements across the globe. From certified electricians and welders to scaffolders and crane operators, we ensure comprehensive verification and 100% legal visa processing.',

    features: [
      'Certified Industrial, High-Voltage & Marine Electricians',
      'Multi-Process 6G / TIG / MIG / SMAW Pipe & Structural Welders',
      'Advanced CISRS & DGUV Certified Industrial Scaffolders',
      'Precision Industrial Pipefitters, Steamfitters & Flange Aligners',
      'Heavy Equipment, Mobile & Tower Crane Operators (NCCCO / EU)',
      'Certified Riggers, Banksmen & Slinger Signalers',
      'Industrial Mechanics, Rotating Equipment Millwrights & Fitters',
      'HVAC, Ducting, Chiller & Industrial Refrigeration Technicians',
    ],

    roles: [
      'Certified Industrial Electricians',
      '6G TIG / MIG / Arc Welders',
      'Advanced Industrial Scaffolders (CISRS)',
      'Industrial Pipefitters & Steamfitters',
      'Heavy Mobile & Tower Crane Operators',
      'Riggers & Banksmen / Slingers',
      'Industrial Millwrights & Mechanics',
      'Commercial HVAC & Chiller Technicians',
      'Steel Fixers & Rebar Fabricators',
      'Industrial Sandblasters & Spray Painters',
      'Thermal Insulators & Cladders',
      'Formwork & Shuttering Carpenters',
    ],

    industries: [
      'Power Plants & Renewable Energy Substations',
      'Petrochemical Refineries & Heavy Industry',
      'Offshore Oil Platforms & Shipbuilding Yards',
      'Infrastructure, Bridges & High-Speed Rail',
      'Mega Commercial & Industrial Construction',
      'Hyperscale Data Centers & Tech Facilities',
      'Mining & Mineral Processing Facilities',
      'Heavy Manufacturing & Assembly Plants',
    ],

    benefits: [
      'Competitive international trade wages (€2,800 to €5,800+/month)',
      'Direct employment contracts with accredited European and global EPC contractors',
      'Free employer-provided accommodation, utilities, and daily site transportation',
      'Trade credential verification, European safety certs (VCA/SCC), and testing support',
      'Full flight tickets, visa sponsorship, health insurance & PPE provided',
      'Substantial overtime opportunities with guaranteed extra shift allowances',
    ],

    color: 'from-teal-600 to-emerald-600',

    image: '/skilled-jobs-hero.jpg',
  },
];