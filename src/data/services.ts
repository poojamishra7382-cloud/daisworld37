import { Languages, Plane, Laptop, Stethoscope, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  features: string[];
  color: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'language',
    title: 'Language',
    icon: Languages,
    short: 'Free Dutch, German, spanish, arabic, french, language training',
    description:
      'We provide comprehensive language training in Dutch and German, taking you from zero to conversational fluency. Our certified trainers use immersive techniques so you can communicate confidently in hospitals and daily life.',
    features: [
      'Free A1–B2 Dutch language courses',
      'Native-speaker conversation practice',
      'Medical vocabulary focused training',
      'Flexible online + offline classes',
      'Certified exam preparation',
    ],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    slug: 'visa',
    title: 'Visa',
    icon: Plane,
    short: 'Full visa processing & documentation',
    description:
      'From document verification to embassy interviews, we handle the entire visa process end-to-end. Our team ensures your application is complete, compliant, and submitted on time for the highest success rate.',
    features: [
      'Complete visa documentation support',
      'Embassy interview preparation',
      'Document attestation & translation',
      'MVV and work permit processing',
      'Real-time application tracking',
    ],
    color: 'from-indigo-600 to-blue-500',
  },
  // {
  //   slug: 'it',
  //   title: 'IT',
  //   icon: Laptop,
  //   short: 'IT skills training for healthcare tech',
  //   description:
  //     'Modern European hospitals use advanced healthcare IT systems. We train you on electronic health records, hospital management software, and digital tools so you are job-ready from day one.',
  //   features: [
  //     'Hospital information system training',
  //     'Electronic health record (EHR) systems',
  //     'Digital patient management tools',
  //     'Basic IT certifications',
  //     'Hands-on software workshops',
  //   ],
  //   color: 'from-cyan-600 to-teal-500',
  // },
  {
    slug: 'nurse',
    title: 'Nurse',
    icon: Stethoscope,
    short: 'Nursing Career & job placement',
    description:
      'We guide you through nursing license validation, credential equivalence, and job placement with top European healthcare institutions. Our network spans hundreds of partner hospitals.',
    features: [
      'Nursing license validation & equivalence',
      'Direct placement in partner hospitals',
      'Clinical practice gap training',
      'Specialty-specific job matching',
      'Post-placement career mentoring',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'support',
    title: 'Support',
    icon: LifeBuoy,
    short: 'End-to-end relocation & settlement support',
    description:
      'Moving to a new country is a big step. We provide complete relocation support — from airport pickup to accommodation, banking, registration, and ongoing mentorship throughout your journey.',
    features: [
      'Airport pickup & initial accommodation',
      'Bank account & insurance setup',
      'City registration & BSN assistance',
      '24/7 helpline for first 6 months',
      'Community & cultural integration events',
    ],
    color: 'from-teal-600 to-emerald-500',
  },
];
