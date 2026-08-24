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
  region?: 'europe' | 'middle-east' | 'other';
}

export const countries: CountryItem[] = [
  // =====================================================
  // FRANCE
  // =====================================================

  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    flagCode: 'fr',
    jobs: '25+',
    salary: '€2,200 – €5,000',
    language: 'French / English',
    capital: 'Paris',
    description:
      'France offers diverse career opportunities across healthcare, hospitality, construction and oil & gas. With a strong economy, advanced infrastructure, world-class services and established industries, France provides international professionals with excellent opportunities for career growth.',
    highlights: [
      'Strong healthcare sector',
      'World-class hospitality and tourism industry',
      'Construction and infrastructure opportunities',
      'Energy and industrial opportunities',
      'Excellent professional growth environment',
    ],
    color: 'from-blue-600 to-indigo-600',
  },

  // =====================================================
  // GERMANY
  // =====================================================

  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    flagCode: 'de',
    jobs: '30+',
    salary: '€2,800 – €5,500',
    language: 'German / English',
    capital: 'Berlin',
    description:
      'Germany offers diverse career opportunities across healthcare, hospitality, construction and oil & gas. With a powerful economy, advanced technology, modern infrastructure and well-established industries, Germany is an attractive destination for skilled international professionals.',
    highlights: [
      'Strong healthcare industry',
      'Growing hospitality sector',
      'Major construction and infrastructure projects',
      'Energy and industrial opportunities',
      'Excellent career development',
    ],
    color: 'from-slate-700 to-slate-900',
  },

  // =====================================================
  // NETHERLANDS
  // =====================================================

  {
    slug: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    flagCode: 'nl',
    jobs: '40+',
    salary: '€2,450 – €5,500',
    language: 'Dutch / English',
    capital: 'Amsterdam',
    description:
      'The Netherlands offers international career opportunities across healthcare, hospitality, construction and oil & gas. Its modern infrastructure, strong economy, innovative industries and international work environment make it an attractive destination for skilled professionals.',
    highlights: [
      'Modern healthcare sector',
      'Strong hospitality and tourism industry',
      'Advanced construction and infrastructure',
      'Energy and industrial opportunities',
      'International work environment',
    ],
    color: 'from-orange-500 to-red-500',
  },

  // =====================================================
  // SWITZERLAND
  // =====================================================

  {
    slug: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    flagCode: 'ch',
    jobs: '20+',
    salary: 'CHF 4,500 – CHF 8,000',
    language: 'German / French / Italian / English',
    capital: 'Bern',
    description:
      'Switzerland offers premium career opportunities across healthcare, hospitality, construction and energy-related industries. With a strong economy, excellent infrastructure, high living standards and international business environment, it is an attractive destination for skilled professionals.',
    highlights: [
      'World-class healthcare infrastructure',
      'Premium hospitality industry',
      'Construction and infrastructure projects',
      'Energy and industrial opportunities',
      'High quality of life',
    ],
    color: 'from-red-500 to-rose-600',
  },

  // =====================================================
  // BELGIUM
  // =====================================================

  {
    slug: 'belgium',
    name: 'Belgium',
    flag: '🇧🇪',
    flagCode: 'be',
    jobs: '20+',
    salary: '€2,600 – €5,000',
    language: 'Dutch / French / English',
    capital: 'Brussels',
    description:
      'Belgium provides career opportunities across healthcare, hospitality, construction and oil & gas. Its central European location, strong infrastructure, international business environment and developed industries make it a smart destination for career growth.',
    highlights: [
      'Strong healthcare infrastructure',
      'Growing hospitality industry',
      'Construction and infrastructure opportunities',
      'Energy and industrial sector',
      'Central European location',
    ],
    color: 'from-amber-600 to-yellow-700',
  },

  // =====================================================
  // AUSTRALIA
  // =====================================================

  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    flagCode: 'au',
    jobs: '35+',
    salary: 'A$ 4,000 – A$ 9,000',
    language: 'English',
    capital: 'Canberra',
    description:
      'Australia offers excellent career opportunities across healthcare, hospitality, construction and oil & gas. With a strong economy, advanced infrastructure, high demand for skilled professionals and a high standard of living, Australia is a preferred destination for international workers.',
    highlights: [
      'Strong healthcare sector',
      'Growing hospitality and tourism industry',
      'Large construction and infrastructure projects',
      'Major energy and resources industry',
      'Excellent work-life balance',
    ],
    color: 'from-green-600 to-blue-500',
  },

  // =====================================================
  // CANADA
  // =====================================================

  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    flagCode: 'ca',
    jobs: '40+',
    salary: 'C$ 4,500 – C$ 9,000',
    language: 'English / French',
    capital: 'Ottawa',
    description:
      'Canada provides diverse career opportunities across healthcare, hospitality, construction and oil & gas. With strong infrastructure, natural resources, modern cities and a high-quality work environment, Canada is an attractive destination for skilled international professionals.',
    highlights: [
      'Strong healthcare industry',
      'Growing hospitality sector',
      'Construction and infrastructure opportunities',
      'Oil, gas and natural resources industry',
      'High quality of life',
    ],
    color: 'from-red-600 to-red-800',
  },

  // =====================================================
  // UNITED KINGDOM
  // =====================================================

  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    flagCode: 'gb',
    jobs: '35+',
    salary: '£2,500 – £5,500',
    language: 'English',
    capital: 'London',
    description:
      'The United Kingdom offers career opportunities across healthcare, hospitality, construction and oil & gas. Its established industries, modern infrastructure, international business environment and strong professional standards create opportunities for skilled professionals from around the world.',
    highlights: [
      'Established healthcare sector',
      'Strong hospitality and tourism industry',
      'Major construction projects',
      'Energy and industrial opportunities',
      'Strong professional development',
    ],
    color: 'from-blue-700 to-red-600',
  },

  // =====================================================
  // UAE
  // =====================================================

  {
    slug: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    flagCode: 'ae',
    jobs: '40+',
    salary: 'AED 6,000 – AED 15,000',
    language: 'English / Arabic',
    capital: 'Abu Dhabi',
    description:
      'The UAE offers diverse career opportunities across healthcare, hospitality, construction and oil & gas. With world-class infrastructure, modern healthcare facilities, luxury hospitality, major construction projects and a strong energy sector, the UAE is a leading destination for international professionals.',
    highlights: [
      'Modern healthcare facilities',
      'World-class hospitality industry',
      'Large construction and infrastructure projects',
      'Major oil and gas sector',
      'International work environment',
    ],
    color: 'from-emerald-500 to-green-700',
  },

  // =====================================================
  // QATAR
  // =====================================================

  {
    slug: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    flagCode: 'qa',
    jobs: '30+',
    salary: 'QAR 7,000 – QAR 18,000',
    language: 'English / Arabic',
    capital: 'Doha',
    description:
      'Qatar offers growing opportunities across healthcare, hospitality, construction and oil & gas. The country has invested heavily in modern infrastructure, healthcare facilities, tourism, construction and energy development, creating opportunities for skilled international professionals.',
    highlights: [
      'Growing healthcare sector',
      'Expanding hospitality industry',
      'Major infrastructure projects',
      'Strong oil, gas and LNG sector',
      'International workforce',
    ],
    color: 'from-purple-600 to-purple-900',
  },

  // =====================================================
  // SAUDI ARABIA
  // =====================================================

  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    flagCode: 'sa',
    jobs: '50+',
    salary: 'SAR 6,000 – SAR 18,000',
    language: 'English / Arabic',
    capital: 'Riyadh',
    description:
      'Saudi Arabia offers extensive career opportunities across healthcare, hospitality, construction and oil & gas. Large-scale development, tourism, infrastructure and economic diversification projects are creating new opportunities for skilled international professionals.',
    highlights: [
      'Growing healthcare infrastructure',
      'Rapidly expanding hospitality sector',
      'Large construction and development projects',
      'Major oil and gas industry',
      'Large-scale future development projects',
    ],
    color: 'from-green-600 to-emerald-800',
  },

  // =====================================================
  // BAHRAIN
  // =====================================================

  {
    slug: 'bahrain',
    name: 'Bahrain',
    flag: '🇧🇭',
    flagCode: 'bh',
    jobs: '20+',
    salary: 'BHD 500 – BHD 1,500',
    language: 'English / Arabic',
    capital: 'Manama',
    description:
      'Bahrain provides career opportunities across healthcare, hospitality, construction and oil & gas. Its developing economy, modern infrastructure, growing tourism industry and established energy sector create opportunities for skilled international professionals.',
    highlights: [
      'Growing healthcare sector',
      'Developing hospitality industry',
      'Construction and infrastructure opportunities',
      'Established oil and gas sector',
      'International work environment',
    ],
    color: 'from-red-500 to-red-800',
    region: 'middle-east',
  },
];

export const europeCountries = countries.filter((c) =>
  ['france', 'germany', 'netherlands', 'switzerland', 'belgium', 'uk'].includes(c.slug)
);

export const middleEastCountries = countries.filter((c) =>
  ['uae', 'qatar', 'saudi-arabia', 'bahrain'].includes(c.slug)
);