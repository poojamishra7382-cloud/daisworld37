import {
  Stethoscope,
  Hotel,
  HardHat,
  Fuel,
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
      'International healthcare recruitment and career opportunities',

    description:
      'We connect qualified healthcare professionals with leading hospitals, clinics, and healthcare institutions across international markets. From recruitment to documentation and placement, we support candidates throughout their journey.',

    overview:
      'Our healthcare recruitment services connect qualified and experienced healthcare professionals with trusted hospitals, clinics, medical centers, and healthcare institutions across international markets. We support candidates throughout the recruitment journey, from profile assessment and documentation to job matching, interviews, and placement.',

    features: [
      'Healthcare professional recruitment',
      'Nurse and medical staff placement',
      'Credential verification & documentation',
      'International job placement',
      'Career guidance & placement support',
    ],

    roles: [
      'Registered Nurses',
      'Staff Nurses',
      'Nursing Assistants',
      'Healthcare Assistants',
      'Medical Technicians',
      'Laboratory Technicians',
      'Radiology Technicians',
      'Medical Professionals',
    ],

    industries: [
      'Hospitals',
      'Private Clinics',
      'Medical Centers',
      'Nursing Homes',
      'Rehabilitation Centers',
      'Specialized Healthcare Facilities',
      'Long-Term Care Facilities',
    ],

    benefits: [
      'International healthcare career opportunities',
      'Professional job placement',
      'Documentation guidance',
      'Interview coordination',
      'Career guidance and placement support',
      'International placement assistance',
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
      'Hotel & resort recruitment',
      'Chefs & kitchen staff placement',
      'Housekeeping staff recruitment',
      'Front office recruitment',
      'Restaurant & food service recruitment',
      'Food & beverage staffing',
      'International job placement support',
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
      'Skilled construction worker recruitment',
      'Civil & building professionals',
      'Electricians & plumbers',
      'Welders & technicians',
      'Engineers & supervisors',
      'Heavy equipment operators',
      'International workforce placement',
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
      'Oil & gas workforce recruitment',
      'Engineers & technical professionals',
      'Operators & maintenance staff',
      'Skilled technicians & workers',
      'Project-based manpower solutions',
      'Technical candidate screening',
      'International placement & documentation support',
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
];