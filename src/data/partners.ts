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
  // ================= FRANCE =================

  {
    id: 1,
    name: "Accor",
    category: "Hospitality",
    country: "France",
    city: "Paris",
    description:
      "Accor is a global hospitality group operating hotels, resorts and hospitality brands across international markets.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    name: "TotalEnergies",
    category: "Oil & Gas",
    country: "France",
    city: "Paris",
    description:
      "TotalEnergies is a major international energy company active across oil, gas, electricity and renewable energy.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= GERMANY =================

  {
    id: 3,
    name: "Siemens Healthineers",
    category: "Healthcare",
    country: "Germany",
    city: "Erlangen",
    description:
      "Siemens Healthineers is a leading healthcare technology company providing medical technology, imaging and diagnostic solutions.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    name: "Hochtief",
    category: "Construction",
    country: "Germany",
    city: "Essen",
    description:
      "Hochtief is a major international construction company involved in infrastructure, building and engineering projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= NETHERLANDS =================

  {
    id: 5,
    name: "Royal Philips",
    category: "Healthcare",
    country: "Netherlands",
    city: "Amsterdam",
    description:
      "Royal Philips is a global health technology company focused on healthcare innovation, medical technology and patient care.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 6,
    name: "Shell Netherlands",
    category: "Oil & Gas",
    country: "Netherlands",
    city: "The Hague",
    description:
      "Shell has a major presence in the Netherlands across energy, fuels, natural gas and related businesses.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= UNITED KINGDOM =================

  {
    id: 7,
    name: "Bupa",
    category: "Healthcare",
    country: "UK",
    city: "London",
    description:
      "Bupa is an international healthcare organization providing healthcare services, hospitals and health insurance solutions.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 8,
    name: "BP",
    category: "Oil & Gas",
    country: "UK",
    city: "London",
    description:
      "BP is a global energy company operating across oil, gas, fuels and other energy businesses.",
    image:
      "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= CANADA =================

  {
    id: 9,
    name: "Brookfield",
    category: "Construction",
    country: "Canada",
    city: "Toronto",
    description:
      "Brookfield is a global investment and infrastructure organization involved in real estate, infrastructure and development projects.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 10,
    name: "Suncor Energy",
    category: "Oil & Gas",
    country: "Canada",
    city: "Calgary",
    description:
      "Suncor Energy is a major Canadian integrated energy company involved in oil, natural resources and energy production.",
    image:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= AUSTRALIA =================

  {
    id: 11,
    name: "Ramsay Health Care",
    category: "Healthcare",
    country: "Australia",
    city: "Sydney",
    description:
      "Ramsay Health Care is a major healthcare provider operating hospitals and healthcare facilities across several countries.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 12,
    name: "BHP",
    category: "Oil & Gas",
    country: "Australia",
    city: "Melbourne",
    description:
      "BHP is a major global resources company involved in natural resources, energy and large-scale industrial operations.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= SWITZERLAND =================

  {
    id: 13,
    name: "Roche",
    category: "Healthcare",
    country: "Switzerland",
    city: "Basel",
    description:
      "Roche is a global healthcare and pharmaceutical company focused on medicines, diagnostics and medical innovation.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 14,
    name: "ABB",
    category: "Construction",
    country: "Switzerland",
    city: "Zurich",
    description:
      "ABB is a global technology company providing electrification, automation and industrial solutions for infrastructure and industry.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },

  // ================= BELGIUM =================

  {
    id: 15,
    name: "UCB",
    category: "Healthcare",
    country: "Belgium",
    city: "Brussels",
    description:
      "UCB is a Belgian global biopharmaceutical company focused on innovative medicines and healthcare solutions.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 16,
    name: "DEME",
    category: "Construction",
    country: "Belgium",
    city: "Antwerp",
    description:
      "DEME is a Belgian international group active in marine engineering, infrastructure and environmental projects.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
  },
];