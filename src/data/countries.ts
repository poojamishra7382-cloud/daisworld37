export interface CountryItem {
  slug: string;
  name: string;
  flag: string;
  flagCode: string;
  jobs: string;
  salary: string;
  language: string;
  capital: string;
  description: string;
  highlights: string[];
  color: string;
}

export const countries: CountryItem[] = [
  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    flagCode: 'fr',
    jobs: '12+',
    salary: '€2,200 – €4,000',
    language: 'French',
    capital: 'Paris',
    description:
      'France offers excellent nursing opportunities in world-class public and private hospitals. With a strong healthcare system and generous benefits, France is a top destination for Indian nurses seeking a European career.',
    highlights: [
      '35-hour work week with overtime pay',
      'Universal healthcare coverage',
      '5 weeks paid annual leave',
      'Subsidized public transport',
      'Rich cultural heritage',
    ],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    flagCode: 'de',
    jobs: '15+',
    salary: '€2,800 – €4,200',
    language: 'German',
    capital: 'Berlin',
    description:
      'Germany has one of the highest demands for qualified nurses in Europe. With excellent salaries, structured career paths, and a world-renowned healthcare system, Germany is ideal for ambitious nursing professionals.',
    highlights: [
      'High demand for nursing professionals',
      'Structured career progression',
      'Excellent work-life balance',
      'Comprehensive health insurance',
      'Strong Indian expat community',
    ],
    color: 'from-slate-700 to-slate-900',
  },
  {
    slug: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    flagCode: 'nl',
    jobs: '40+',
    salary: '€2,450 – €5,500',
    language: 'Dutch',
    capital: 'Amsterdam',
    description:
      'The Netherlands is our primary destination, offering the highest salaries and most comprehensive support package. With 40+ open positions and an inclusive work culture, it is the best choice for Indian nurses.',
    highlights: [
      'Highest nursing salaries in West Europe',
      'Inclusive and English-friendly work culture',
      '36–40 hour work week',
      '25+ days annual leave',
      'Excellent public healthcare system',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    flagCode: 'ch',
    jobs: '6+',
    salary: '₣ 4,500 – ₣ 7,500',
    language: 'German / French',
    capital: 'Bern',
    description:
      'Switzerland offers the highest nursing salaries in Europe, set against breathtaking alpine scenery. With a premium healthcare system and exceptional quality of life, Switzerland is for top-tier nursing talent.',
    highlights: [
      'Highest nursing salaries in Europe',
      'World-class healthcare infrastructure',
      'Stunning alpine living environment',
      'Excellent safety and cleanliness',
      'Multilingual work environment',
    ],
    color: 'from-red-500 to-rose-600',
  },
  {
    slug: 'belgium',
    name: 'Belgium',
    flag: '🇧🇪',
    flagCode: 'be',
    jobs: '8+',
    salary: '€2,600 – €4,000',
    language: 'Dutch / French',
    capital: 'Brussels',
    description:
      'Belgium combines excellent healthcare opportunities with a central European location. With competitive salaries and easy access to neighboring countries, Belgium is a smart choice for career growth.',
    highlights: [
      'Central European location',
      'Multilingual work environment',
      'Competitive salary packages',
      'Strong healthcare infrastructure',
      'Easy travel to neighboring countries',
    ],
    color: 'from-amber-600 to-yellow-700',
  },
  {
  slug: 'australia',
  name: 'Australia',
  flag: '🇦🇺',
  flagCode: 'au',
  jobs: '25+',
  salary: 'A$ 4,000 – A$ 7,000',
  language: 'English',
  capital: 'Canberra',
  description:
    'Australia offers excellent career opportunities for international nurses with high salaries, modern healthcare facilities, and a great work-life balance. It is one of the most preferred destinations for healthcare professionals.',
  highlights: [
    'High salary packages',
    'Advanced healthcare system',
    'Strong demand for nurses',
    'Great work-life balance',
    'PR opportunities available',
  ],
  color: 'from-green-600 to-blue-500',
},
  {
  slug: 'canada',
  name: 'Canada',
  flag: '🇨🇦',
  flagCode: 'ca',
  jobs: '30+',
  salary: 'C$ 4,500 – C$ 8,000',
  language: 'English / French',
  capital: 'Ottawa',
  description:
    'Canada is one of the top destinations for international nurses, offering high salaries, excellent healthcare infrastructure, and strong immigration pathways. It provides a safe and high-quality lifestyle.',
  highlights: [
    'High demand for nurses',
    'Excellent salary packages',
    'World-class healthcare system',
    'PR and immigration opportunities',
    'Safe and high quality of life',
  ],
  color: 'from-red-600 to-white',
},
  {
  slug: 'uk',
  name: 'United Kingdom',
  flag: '🇬🇧',
  flagCode: 'gb',
  jobs: '35+',
  salary: '£2,500 – £4,500',
  language: 'English',
  capital: 'London',
  description:
    'The United Kingdom is one of the most popular destinations for international nurses, offering structured career growth through the NHS, competitive salaries, and excellent training opportunities.',
  highlights: [
    'High demand for nurses in NHS',
    'Structured career progression',
    'Globally recognized healthcare system',
    'Relocation and sponsorship support',
    'Strong professional development programs',
  ],
  color: 'from-blue-700 to-red-600',
},
];
