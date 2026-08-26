export interface Partner {
  id: number;
  name: string;
  category: 'Healthcare' | 'Hospitality' | 'Construction' | 'Oil & Gas' | 'Beauty & Care';
  country: string;
  city: string;
  description: string;
  image: string;
}

export const partnersData: Partner[] = [
  // =========================================================================
  // HEALTHCARE
  // =========================================================================
  {
    id: 1,
    name: "Siemens Healthineers",
    category: "Healthcare",
    country: "Germany",
    city: "Erlangen",
    description:
      "Siemens Healthineers is a leading healthcare technology company providing advanced medical imaging, CT/MRI diagnostics, and integrated hospital solutions.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Royal Philips Healthcare",
    category: "Healthcare",
    country: "Netherlands",
    city: "Amsterdam",
    description:
      "Royal Philips is a global health technology leader focused on advanced patient monitoring, intensive care solutions, and clinical digital diagnostic tools.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Bupa Healthcare Group",
    category: "Healthcare",
    country: "UK",
    city: "London",
    description:
      "Bupa is an international healthcare organization operating modern acute hospitals, specialized surgical centers, and comprehensive care clinics.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Ramsay Health Care",
    category: "Healthcare",
    country: "Australia",
    city: "Sydney",
    description:
      "Ramsay Health Care is a premier global hospital network operating high-tech surgical theaters, trauma centers, and clinical facilities.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Roche Diagnostics & Pharma",
    category: "Healthcare",
    country: "Switzerland",
    city: "Basel",
    description:
      "Roche is a global biotechnology and pharmaceutical leader pioneering medical diagnostics, oncology therapeutics, and clinical laboratory research.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "UCB Biopharma",
    category: "Healthcare",
    country: "Belgium",
    city: "Brussels",
    description:
      "UCB is a Belgian global biopharmaceutical enterprise specializing in neurology, immunology, and transformative hospital therapeutics.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  },

  // =========================================================================
  // HOSPITALITY
  // =========================================================================
  {
    id: 7,
    name: "Accor Hotels & Luxury Resorts",
    category: "Hospitality",
    country: "France",
    city: "Paris",
    description:
      "Accor is a world-leading hospitality group operating 5-star luxury hotels, boutique resorts, and Michelin-recognized culinary dining across global destinations.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    name: "Marriott International Europe",
    category: "Hospitality",
    country: "Netherlands",
    city: "Amsterdam",
    description:
      "Marriott operates iconic 5-star luxury hotels, executive suites, and world-class guest hospitality services across European capital cities.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    name: "Hilton Worldwide Group",
    category: "Hospitality",
    country: "UK",
    city: "London",
    description:
      "Hilton is a premier global hospitality leader delivering luxury accommodation, international banquet catering, and VIP concierge services.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    name: "Kempinski Luxury Hotels",
    category: "Hospitality",
    country: "Germany",
    city: "Munich",
    description:
      "Europe's oldest luxury hotel group delivering timeless heritage hospitality, fine dining gastronomy, and premier resort management.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
  },

  // =========================================================================
  // OIL & GAS / ENERGY
  // =========================================================================
  {
    id: 11,
    name: "TotalEnergies Global",
    category: "Oil & Gas",
    country: "France",
    city: "Paris",
    description:
      "TotalEnergies is a major global multi-energy producer active in offshore petroleum exploration, natural gas extraction, LNG terminals, and refining.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    name: "Shell Netherlands Energy",
    category: "Oil & Gas",
    country: "Netherlands",
    city: "The Hague",
    description:
      "Shell operates state-of-the-art petroleum refineries, natural gas processing facilities, and European energy pipeline infrastructure.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
  },

  // =========================================================================
  // CONSTRUCTION & INFRASTRUCTURE
  // =========================================================================
  {
    id: 13,
    name: "Hochtief Infrastructure",
    category: "Construction",
    country: "Germany",
    city: "Essen",
    description:
      "Hochtief is a world-leading construction group delivering mega-bridges, high-speed rail corridors, airport terminals, and commercial complexes.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    name: "Brookfield Developments",
    category: "Construction",
    country: "Canada",
    city: "Toronto",
    description:
      "Brookfield constructs and manages landmark architectural skyscrapers, transport infrastructure, and commercial urban master-developments.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    name: "ABB Infrastructure & Power",
    category: "Construction",
    country: "Switzerland",
    city: "Zurich",
    description:
      "ABB provides electrification, heavy industrial automation, and smart power infrastructure engineering across international major projects.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },

  // =========================================================================
  // BEAUTY & CARE / WELLNESS
  // =========================================================================
  {
    id: 16,
    name: "L'Oréal Luxury Salon & Aesthetic Network",
    category: "Beauty & Care",
    country: "France",
    city: "Paris",
    description:
      "Global beauty leader operating premier luxury hair styling studios, professional aesthetic institutes, and cosmetic wellness centers.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 17,
    name: "Babor Aesthetic & Medical Spas",
    category: "Beauty & Care",
    country: "Germany",
    city: "Aachen",
    description:
      "Renowned German luxury skincare institute delivering clinical aesthetic treatments, medical facial therapies, and certified wellness care.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 18,
    name: "ESPA International Luxury Spas",
    category: "Beauty & Care",
    country: "UK",
    city: "London",
    description:
      "World-class luxury spa and wellness management operating 5-star hotel thermal spas, holistic body treatments, and aesthetic therapy.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
  },
];