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
    salary: '€4,500 – €6,500',
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
    slug: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    flagCode: 'ru',
    jobs: '10+',
    salary: '€1,500 – €3,000',
    language: 'Russian',
    capital: 'Moscow',
    description:
      'Russia offers growing opportunities for international nurses in its expanding private healthcare sector. With affordable living and a rich cultural experience, Russia provides a unique career pathway.',
    highlights: [
      'Growing private healthcare sector',
      'Affordable cost of living',
      'Rich cultural and historical experience',
      'Opportunities in major cities',
      'Structured nursing programs',
    ],
    color: 'from-blue-700 to-red-600',
  },
  {
    slug: 'ukraine',
    name: 'Ukraine',
    flag: '🇺🇦',
    flagCode: 'ua',
    jobs: '5+',
    salary: '€1,200 – €2,500',
    language: 'Ukrainian',
    capital: 'Kyiv',
    description:
      'Ukraine offers nursing opportunities with strong medical education traditions. With affordable living costs and a welcoming healthcare community, Ukraine provides a valuable international experience.',
    highlights: [
      'Strong medical education tradition',
      'Affordable living costs',
      'Welcoming healthcare community',
      'Clinical skill development',
      'European medical exposure',
    ],
    color: 'from-blue-500 to-yellow-500',
  },
  {
    slug: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    flagCode: 'ro',
    jobs: '7+',
    salary: '€1,800 – €3,200',
    language: 'Romanian',
    capital: 'Bucharest',
    description:
      'Romania offers growing nursing opportunities in its modernizing healthcare system. With EU membership, affordable living, and a warm climate, Romania is an accessible entry point into European healthcare.',
    highlights: [
      'EU member with growing healthcare sector',
      'Affordable cost of living',
      'Warm Mediterranean-like climate',
      'Accessible nursing license process',
      'Growing demand for international nurses',
    ],
    color: 'from-blue-700 to-amber-600',
  },
];
