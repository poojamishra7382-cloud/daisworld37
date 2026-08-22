import {
  Stethoscope,
  Hotel,
  HardHat,
  Fuel,
  Sparkles,
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

    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
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

    image: '/download5.jpg',
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

    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
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

    image: 
      'https://images.openai.com/static-rsc-4/d9KX9WrZF_8aeIxbdpX0rCO7tZunJ4_tYxiifAnjEw0AdEliwY1qLmI5aX8MYf6PRrdJh4QZkNQg6emMjboy-_dNwQBn0ZjJQx3djugvjftZCQDYCYILrQXiPaegMbkdVRrCowEhiEU0M0QeBsNxB4UZUb_cJ7yWobbxEK7M7BkICCq6LlzV2K7m2ZKZnjVn?purpose=fullsize',
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

    image:
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80',
  },
];