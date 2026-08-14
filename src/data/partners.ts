export interface Partner {
  id: number;
  name: string;
  category: string;
  country: string;
  city: string;
  description: string;
  image: string;
}

export const partnersData: Partner[] = [
  // ================= HEALTHCARE =================

  {
    id: 1,
    name: "Apollo Hospitals",
    category: "Healthcare",
    country: "India",
    city: "Chennai",
    description:
      "Apollo Hospitals is one of India's leading healthcare networks, providing advanced medical care and multi-specialty hospital services.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    name: "Fortis Healthcare",
    category: "Healthcare",
    country: "India",
    city: "Gurugram",
    description:
      "Fortis Healthcare is a leading healthcare network providing multi-specialty medical care and hospital services.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    name: "Max Healthcare",
    category: "Healthcare",
    country: "India",
    city: "New Delhi",
    description:
      "Max Healthcare is a prominent healthcare provider offering multi-specialty medical services and advanced patient care.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    name: "HCA Healthcare",
    category: "Healthcare",
    country: "USA",
    city: "Nashville",
    description:
      "HCA Healthcare is one of the major healthcare providers in the United States, operating hospitals and healthcare facilities.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= HOSPITALITY =================

  {
    id: 5,
    name: "Marriott International",
    category: "Hospitality",
    country: "USA",
    city: "Bethesda",
    description:
      "Marriott International is a global hospitality company operating hotels, resorts and lodging brands worldwide.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 6,
    name: "Hilton",
    category: "Hospitality",
    country: "USA",
    city: "McLean",
    description:
      "Hilton is a globally recognized hospitality company with hotels and resorts across international markets.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 7,
    name: "Accor",
    category: "Hospitality",
    country: "France",
    city: "Paris",
    description:
      "Accor is a global hospitality group operating a diverse portfolio of hotels, resorts and hospitality brands.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 8,
    name: "Hyatt",
    category: "Hospitality",
    country: "USA",
    city: "Chicago",
    description:
      "Hyatt is a global hospitality company operating hotels, resorts and other hospitality properties around the world.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= CONSTRUCTION =================

  {
    id: 9,
    name: "Larsen & Toubro",
    category: "Construction",
    country: "India",
    city: "Mumbai",
    description:
      "Larsen & Toubro is a major Indian engineering and construction organization involved in infrastructure and large-scale projects.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 10,
    name: "VINCI",
    category: "Construction",
    country: "France",
    city: "Paris",
    description:
      "VINCI is an international group involved in construction, infrastructure and major development projects.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 11,
    name: "Bechtel",
    category: "Construction",
    country: "USA",
    city: "Reston",
    description:
      "Bechtel is a global engineering, construction and project management organization working on major infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 12,
    name: "Skanska",
    category: "Construction",
    country: "Sweden",
    city: "Stockholm",
    description:
      "Skanska is a major international construction and development company working across infrastructure and building projects.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= OIL & GAS =================

  {
    id: 13,
    name: "Shell",
    category: "Oil & Gas",
    country: "UK",
    city: "London",
    description:
      "Shell is a global energy company involved in oil, gas, integrated energy and related businesses.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 14,
    name: "BP",
    category: "Oil & Gas",
    country: "UK",
    city: "London",
    description:
      "BP is a global energy company operating across oil, gas, fuels and other energy businesses.",
    image:
      "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 15,
    name: "TotalEnergies",
    category: "Oil & Gas",
    country: "France",
    city: "Paris",
    description:
      "TotalEnergies is a major international energy company active across oil, gas, electricity and renewable energy.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 16,
    name: "Chevron",
    category: "Oil & Gas",
    country: "USA",
    city: "Houston",
    description:
      "Chevron is a major integrated energy company involved in oil, natural gas and energy production.",
    image:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
  },
];