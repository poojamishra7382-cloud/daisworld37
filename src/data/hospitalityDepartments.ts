import {
  Bell,
  Sparkles,
  UtensilsCrossed,
  ChefHat,
  CalendarCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface HospitalityRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface HospitalityDepartment {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  route: string;
  icon: LucideIcon;
  color: string;
  badgeColor: string;
  heroImage: string;
  cardImage: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  perksHighlights: string;
  stats: { label: string; value: string }[];
  roles: HospitalityRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const hospitalityDepartments: HospitalityDepartment[] = [
  // =========================================================================
  // 1. FRONT OFFICE
  // =========================================================================
  {
    id: 'front-office',
    slug: 'front-office',
    title: 'Front Office',
    shortTitle: 'Front Office',
    route: '/services/hospitality/front-office',
    icon: Bell,
    color: 'from-amber-500 to-orange-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
    tagline: 'First-Class Guest Experience & Front Desk Operations in 4-Star & 5-Star Luxury Hotels',
    shortDescription:
      'Placing Receptionists, Front Desk Executives, and Guest Relations Managers across premium European, UK, and Middle Eastern luxury hotel chains.',
    overview:
      'Our Front Office division connects talented hospitality professionals with prestigious international hotel brands including Marriott, Hilton, Accor, Hyatt, and boutique luxury resorts across the Netherlands, Germany, Switzerland, the UK, UAE, and Qatar. Front office staff serve as the primary ambassadors of guest satisfaction, managing seamless check-in/out experiences, VIP concierge services, and reservation workflows with the highest standards of international hospitality etiquette.',
    perksHighlights:
      'Full employer visa sponsorship, duty meals provided, shared or subsidized accommodation, health insurance, and structured career paths to Assistant Front Office Manager (AFOM).',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€2,400 – €3,800/mo' },
      { label: '5-Star Partner Hotels', value: '110+ Properties' },
      { label: 'Accommodation & Meals', value: '100% Provided' },
      { label: 'Visa Processing', value: '2 – 4 Months' },
    ],
    roles: [
      {
        title: 'Receptionist',
        badge: 'High European Demand',
        salaryRange: '€2,400 – €3,200 / month',
        description:
          'Welcoming international guests, managing check-ins, room key allocations, billing reconciliations, and delivering prompt, courteous assistance throughout guest stays.',
        responsibilities: [
          'Greet arriving guests warmly, verify reservations, and execute seamless digital check-in/out procedures.',
          'Issue room keys, explain hotel amenities, and answer guest inquiries about local attractions and transport.',
          'Process cash, credit card, and corporate invoice payments adhering to international accounting standards.',
          'Operate Property Management Systems (Opera PMS, Fidelio, Protel) with high accuracy and speed.',
          'Coordinate with housekeeping and concierge teams for immediate room readiness and luggage handling.',
        ],
        qualifications: [
          'Degree / Diploma in Hotel Management, Hospitality Administration, or Tourism.',
          '1+ years of front desk experience in a 3-star or 4-star hotel environment.',
          'Fluent English communication skills (German, Dutch, or French is an added advantage).',
          'Proficiency with Opera Cloud PMS or standard hotel reservation systems.',
        ],
        skills: [
          'Guest check-in/out & cash handling',
          'Opera PMS / Fidelio / Hotel PMS mastery',
          'Multilingual communication & customer empathy',
          'Telephone etiquette & complaint resolution',
        ],
        experience: '1+ years of front desk or hotel reception experience.',
      },
      {
        title: 'Front Desk Executive',
        badge: 'Fast-Track Placement',
        salaryRange: '€2,700 – €3,600 / month',
        description:
          'Managing shift handovers, room inventory allocations, VIP arrivals, reservation adjustments, and night audit balancing in busy luxury hotel lobbies.',
        responsibilities: [
          'Oversee daily arrival rosters, allocate premium suites, and manage room upgrades and special requests.',
          'Perform nightly audit closures, balance daily revenue reports, and reconcile credit accounts.',
          'Handle escalated guest complaints with professional diplomacy and immediate service recovery.',
          'Liaise with corporate travel desks, group tour coordinators, and online travel agencies (OTAs).',
          'Train and supervise junior front desk trainees and interns on hotel standard operating procedures (SOPs).',
        ],
        qualifications: [
          'Bachelor’s in Hotel Management (BHM) / B.Sc Hospitality & Hotel Administration.',
          '2+ years of continuous experience as a Front Desk Agent / Executive in an upscale hotel.',
          'Proven record in night auditing, cash reconciliation, and guest conflict resolution.',
        ],
        skills: [
          'Night audit & daily revenue balancing',
          'Room inventory yield management',
          'VIP guest protocols & personalized service',
          'Conflict de-escalation & problem solving',
        ],
        experience: '2+ years in upscale hotel front desk operations.',
      },
      {
        title: 'Guest Relations Executive / Manager',
        badge: 'VIP & Luxury Shortage',
        salaryRange: '€3,000 – €4,200 / month',
        description:
          'Dedicated to VIP guests, loyalty club members, and high-profile dignitaries, ensuring bespoke stays, personalized amenities, and maximum guest satisfaction scores (GSS).',
        responsibilities: [
          'Meet and greet VIP guests upon arrival, escorting them to suites and providing private registration.',
          'Coordinate personalized welcome gifts, dietary preferences, and customized city itineraries.',
          'Conduct daily lobby presence, proactively gathering guest feedback and resolving inquiries.',
          'Analyze guest satisfaction survey metrics (TripAdvisor, TrustYou, Medallia) and drive quality improvements.',
          'Collaborate with F&B and Spa teams to deliver tailor-made luxury experiences.',
        ],
        qualifications: [
          'Degree in Hospitality, Public Relations, or International Business.',
          '2–4+ years in Guest Relations / Concierge in a 5-star hotel or luxury resort.',
          'Outstanding grooming, refined interpersonal etiquette, and fluent spoken English.',
        ],
        skills: [
          'VIP protocol & luxury concierge management',
          'Guest Satisfaction Score (GSS) optimization',
          'Bespoke itinerary & event coordination',
          'Refined cultural etiquette & diplomacy',
        ],
        experience: '2+ years dedicated Guest Relations or VIP Concierge experience.',
      },
    ],
    keyResponsibilities: [
      'Delivering world-class guest reception, seamless registration, and professional departure billing.',
      'Operating modern Property Management Systems (Opera PMS, Amadeus, Oracle Hospitality) seamlessly.',
      'Resolving guest requests, complaints, and service inquiries with prompt, diplomatic customer care.',
      'Collaborating closely with Housekeeping, F&B, Maintenance, and Security departments.',
      'Upholding international 5-star hotel grooming, safety, data privacy, and hospitality standards.',
    ],
    qualifications: [
      'Degree or Diploma in Hotel Management, Hospitality, Tourism, or equivalent.',
      'Minimum 1 to 3+ years of professional front office experience in recognized hotels.',
      'Fluent spoken and written English communication (European language skills are a plus).',
      'Pleasing personality, impeccable grooming, and strong commitment to customer service excellence.',
    ],
    requiredSkills: [
      'Opera PMS & Hotel Management Software',
      'Guest Check-In / Check-Out & Billing',
      'VIP Concierge & Service Recovery',
      'Cross-Cultural Communication & Diplomacy',
      'Shift Handover & Night Audit Balancing',
    ],
    careerOpportunities: [
      'Competitive European monthly remuneration (€2,400 – €4,200/month) with overtime allowances and tips.',
      'Comprehensive expat relocation package: employer visa sponsorship, flights, and subsidized housing.',
      'Career advancement from Receptionist to Shift Leader, Assistant Front Desk Manager, and Front Office Director.',
      'Worldwide transfer opportunities across multinational hotel groups (Marriott, Hilton, IHG, Hyatt, Accor).',
    ],
  },

  // =========================================================================
  // 2. HOUSEKEEPING
  // =========================================================================
  {
    id: 'housekeeping',
    slug: 'housekeeping',
    title: 'Housekeeping',
    shortTitle: 'Housekeeping',
    route: '/services/hospitality/housekeeping',
    icon: Sparkles,
    color: 'from-blue-600 to-teal-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    tagline: 'Pristine Cleanliness, Luxury Room Standards & Facility Care for Overseas Hotels & Resorts',
    shortDescription:
      'Placing Room Attendants, Housekeeping Supervisors, and Laundry Specialists in European luxury hotels, wellness resorts, and cruise liners.',
    overview:
      'Our Housekeeping recruitment division sources dedicated, detail-oriented room attendants, floor supervisors, and laundry professionals for leading 4-star, 5-star hotels, luxury chalets, and international resort properties in the Netherlands, Germany, Austria, the UK, and the Gulf. Housekeeping is the backbone of hotel operations, ensuring immaculate hygiene, luxurious guest room presentation, and eco-friendly linen care.',
    perksHighlights:
      'Complimentary staff accommodation, free daily duty meals, European work permits, uniform laundry service, and paid overtime bonuses.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€2,200 – €3,500/mo' },
      { label: 'Active Hotel Openings', value: '150+ Vacancies' },
      { label: 'Free Accommodation', value: '100% Provided' },
      { label: 'Placement Timeline', value: '1 – 3 Months' },
    ],
    roles: [
      {
        title: 'Room Attendant / Housekeeper',
        badge: 'High Hiring Volume',
        salaryRange: '€2,200 – €2,900 / month',
        description:
          'Responsible for cleaning, sanitizing, making beds, replenishing amenities, and inspecting luxury guest rooms and suites according to strict 5-star hotel hygiene checklists.',
        responsibilities: [
          'Clean, dust, vacuum, and sanitize guest bedrooms, living areas, and luxury marble bathrooms.',
          'Change bed linen, make beds with precise hospital corners, and replace towels and bathrobes.',
          'Replenish minibar items, bath amenities, tea/coffee sets, and complimentary guest items.',
          'Report maintenance defects, room damages, and lost & found items to the floor supervisor immediately.',
          'Operate modern industrial vacuum cleaners, steam cleaners, and eco-friendly cleaning chemicals safely.',
        ],
        qualifications: [
          'High School / 10th / 12th pass or Certificate in Housekeeping / Hotel Operations.',
          '1+ years of housekeeping experience in recognized hotels, resorts, or service apartments.',
          'Physical fitness, attention to detail, and ability to clean assigned room quotas per shift.',
        ],
        skills: [
          'Luxury bed making & room styling',
          'Bathroom sanitization & hygiene protocols',
          'Chemical safety & COSHH compliance',
          'Speed, stamina & attention to detail',
        ],
        experience: '1+ years in hotel housekeeping or room attendant role.',
      },
      {
        title: 'Housekeeping Supervisor / Floor Supervisor',
        badge: 'Team Leader Track',
        salaryRange: '€2,700 – €3,500 / month',
        description:
          'Supervising room attendants, conducting rigorous quality inspections on guest floors, managing linen stock inventories, and coordinating fast room turnarounds for incoming VIP arrivals.',
        responsibilities: [
          'Inspect cleaned guest rooms and public areas to ensure strict adherence to hotel brand cleanliness standards.',
          'Distribute daily room assignment sheets, master keys, and cleaning supplies to floor attendants.',
          'Train new room attendants on speed cleaning techniques, chemical safety, and ergonomic practices.',
          'Coordinate directly with Front Office on room release statuses (Clean, Inspected, Out-of-Order).',
          'Manage daily linen count registers, lost & found logs, and periodic deep cleaning schedules.',
        ],
        qualifications: [
          'Diploma or Degree in Hotel Management / Housekeeping.',
          '2–3+ years in hotel housekeeping with at least 1 year in a supervisory role.',
          'Working knowledge of Opera PMS / Housekeeping room management modules.',
        ],
        skills: [
          'Room inspection & quality audits',
          'Staff roster planning & workload balancing',
          'Linen inventory & chemical stock control',
          'Interdepartmental coordination with Front Desk',
        ],
        experience: '2+ years total housekeeping experience with 1+ years in supervision.',
      },
      {
        title: 'Laundry Staff & Linen Attendant',
        badge: 'Fast-Track Placement',
        salaryRange: '€2,200 – €2,800 / month',
        description:
          'Operating industrial washing machines, hydro-extractors, flatwork ironers, and dry-cleaning units, ensuring crisp, sanitized bed linen and guest laundry garments.',
        responsibilities: [
          'Sort, wash, dry, iron, and fold hotel bed sheets, duvet covers, pillowcases, and towels.',
          'Inspect guest laundry garments for fabric delicate tags, stains, and execute specialized dry cleaning.',
          'Operate commercial rotary ironers, folding machinery, and steam pressing stations.',
          'Maintain accurate records of guest garment intake, dry-cleaning billing, and linen distribution.',
          'Enforce strict hygiene, water temperature controls, and chemical dosing guidelines.',
        ],
        qualifications: [
          'Certificate / Prior experience in commercial laundry, dry cleaning, or textile care.',
          '1+ years of experience in hotel on-premises laundry (OPL) or commercial laundry plants.',
        ],
        skills: [
          'Commercial laundry machine operation',
          'Fabric care, stain removal & steam pressing',
          'Linen counting & storage organization',
          'Workplace safety & chemical dosing',
        ],
        experience: '1+ years in hotel laundry or commercial dry cleaning.',
      },
    ],
    keyResponsibilities: [
      'Maintaining impeccable cleanliness, hygiene, and aesthetic appeal across guest rooms and public areas.',
      'Adhering to international hotel sanitization, chemical safety (COSHH), and eco-friendly standards.',
      'Performing thorough room inspections, inventory replenishment, and maintenance reporting.',
      'Operating industrial laundry and floor care machinery with precision and safety.',
      'Collaborating with Front Desk teams for rapid room turnaround and VIP readiness.',
    ],
    qualifications: [
      'High School Certificate, Diploma, or Degree in Hospitality / Housekeeping Management.',
      'Prior experience (1–3 years) in hotel housekeeping, room cleaning, or commercial laundry.',
      'Physical stamina, positive work attitude, and eye for cleanliness and presentation.',
      'Basic English communication skills for international hotel environments.',
    ],
    requiredSkills: [
      '5-Star Room Sanitization & Make-Up',
      'Inspection Checklists & Quality Control',
      'Linen Inventory & Laundry Machine Operation',
      'Ergonomic Cleaning & Chemical Safety',
      'Time Management & Room Quota Delivery',
    ],
    careerOpportunities: [
      'Stable European employment contracts with monthly earnings from €2,200 to €3,500+.',
      'All-inclusive expat benefits: free company accommodation, free daily meals, and health insurance.',
      'Rapid promotion ladder from Room Attendant to Floor Supervisor, Assistant Housekeeper, and Executive Housekeeper.',
      'Year-round or seasonal placements across luxury ski resorts (Swiss Alps/Austria) and coastal European resorts.',
    ],
  },

  // =========================================================================
  // 3. FOOD & BEVERAGE (F&B)
  // =========================================================================
  {
    id: 'food-and-beverage',
    slug: 'food-and-beverage',
    title: 'Food & Beverage (F&B)',
    shortTitle: 'Food & Beverage',
    route: '/services/hospitality/food-and-beverage',
    icon: UtensilsCrossed,
    color: 'from-rose-500 to-red-600',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    tagline: 'World-Class Fine Dining Service, Mixology & Restaurant Leadership',
    shortDescription:
      'Recruiting Waiters, Restaurant Supervisors, Bartenders, and F&B Managers for Michelin-starred restaurants, 5-star hotel dining, and luxury cocktail lounges.',
    overview:
      'Our Food & Beverage division places refined service professionals, mixologists, and restaurant leaders in luxury European dining rooms, resort restaurants, and upscale bars across the Netherlands, Germany, the UK, UAE, and Qatar. Overseas hospitality groups seek dynamic staff with passion for culinary service, wine knowledge (Sommelier skills), craft cocktail creation, and guest satisfaction.',
    perksHighlights:
      'High European base salary plus generous daily service charge and tips (€500–€1,500/mo extra), free duty meals, accommodation assistance, and work visa.',
    stats: [
      { label: 'Avg. Monthly Base', value: '€2,400 – €4,800/mo' },
      { label: 'Tips & Service Charge', value: '+ €600 – €1,500/mo' },
      { label: 'Restaurant & Bar Partners', value: '90+ Outlets' },
      { label: 'Visa Sponsorship', value: '100% Guaranteed' },
    ],
    roles: [
      {
        title: 'Waiter / Server (Fine Dining & Banquet)',
        badge: 'High Tips & In-Demand',
        salaryRange: '€2,400 – €3,200 / month',
        description:
          'Delivering sophisticated table service, taking orders, explaining menu ingredients, serving food & wine pairings, and ensuring an unforgettable dining experience.',
        responsibilities: [
          'Greet restaurant guests, present food and beverage menus, and explain daily chef specials in detail.',
          'Take orders accurately using handheld POS devices (Micros, Symphony, Lightspeed) and relay dietary allergies to the kitchen.',
          'Execute professional silver service, plated service, and wine pouring following 5-star restaurant standards.',
          'Clear tables quietly, replace cutlery per course, and present bills with prompt card/cash processing.',
          'Maintain restaurant side stations, polish glassware/cutlery, and prepare table settings before service shifts.',
        ],
        qualifications: [
          'Diploma / Degree in Hotel Management or Food & Beverage Service.',
          '1+ years of experience as a Waiter / Server in a recognized restaurant or hotel dining room.',
          'Fluent spoken English, excellent grooming, and energetic customer service attitude.',
        ],
        skills: [
          'Fine dining table service & wine pouring etiquette',
          'POS order entry (Micros, Symphony, Toast)',
          'Menu knowledge, upselling & dietary awareness',
          'Tray carrying & multi-table coordination',
        ],
        experience: '1+ years in fine dining, casual dining, or hotel restaurant.',
      },
      {
        title: 'Restaurant Supervisor / Captain',
        badge: 'Leadership Track',
        salaryRange: '€2,900 – €3,800 / month',
        description:
          'Supervising restaurant floor service, managing table reservations, conducting pre-service briefings, training service staff, and maximizing covers and beverage revenues.',
        responsibilities: [
          'Conduct pre-shift briefing with service team and culinary chefs regarding VIP bookings and 86-list.',
          'Oversee table allocation, smooth guest seating flow, and coordinate pacing between kitchen and floor.',
          'Handle guest feedback, service delays, and billing discrepancies with composure and generosity.',
          'Train junior waitstaff on menu upselling, wine pairing suggestions, and service speed benchmarks.',
          'Perform daily opening and closing duties, cashier reconciliation, and beverage inventory audits.',
        ],
        qualifications: [
          'Degree in Hospitality / Hotel Management.',
          '2–3+ years of continuous experience in restaurant service with 1+ years in a supervisory role.',
          'Strong team leadership, conflict resolution, and beverage upselling capabilities.',
        ],
        skills: [
          'Restaurant floor management & table pacing',
          'Staff scheduling & pre-shift briefing',
          'Wine knowledge (WSET Level 1/2 is a plus)',
          'Guest complaint resolution & upselling',
        ],
        experience: '2+ years in F&B service with supervisory experience.',
      },
      {
        title: 'Bartender & Mixologist',
        badge: 'Creative & High Earning',
        salaryRange: '€2,600 – €3,600 / month',
        description:
          'Crafting classic and signature cocktails, pouring draft beers and fine wines, managing bar stock, and delivering engaging, charismatic bar counter service.',
        responsibilities: [
          'Prepare classic cocktails (Old Fashioned, Martini, Negroni) and develop innovative seasonal cocktail menus.',
          'Operate bar POS systems, pour draft beer, uncork fine wines, and serve bar food efficiently.',
          'Maintain strict bar cleanliness, sanitize cocktail shakers, glassware, and restock ice and garnishes.',
          'Manage bar inventory, monitor liquor wastage, and perform weekly beverage stock audits.',
          'Engage bar counter guests with entertaining, hospitable conversation and recommend signature drinks.',
        ],
        qualifications: [
          'Certification in Bartending / Mixology or Diploma in Hotel Management.',
          '1–2+ years of professional bartending experience in a busy cocktail bar, lounge, or hotel bar.',
          'Solid understanding of spirits, liqueurs, cocktails, beer styles, and bar hygiene laws.',
        ],
        skills: [
          'Classic & craft cocktail mixology',
          'Flair bartending & speed service',
          'Bar stock inventory & wastage management',
          'Responsible beverage service & alcohol laws',
        ],
        experience: '1+ years working in a high-volume cocktail bar or hotel lounge.',
      },
      {
        title: 'Food & Beverage (F&B) Manager',
        badge: 'Senior Management Role',
        salaryRange: '€4,000 – €5,800 / month',
        description:
          'Leading all dining outlets, banquet operations, room service, bar revenues, cost control (Food Cost & Beverage Cost), and international staff training across the hotel property.',
        responsibilities: [
          'Direct operations across multiple restaurant outlets, bars, banquet halls, and in-room dining.',
          'Formulate annual F&B budgets, forecast sales, and control cost of goods sold (COGS) and labor costs.',
          'Collaborate with Executive Chef to conceptualize new restaurant menus and culinary promotions.',
          'Ensure total compliance with European food safety laws (HACCP), alcohol licensing, and hygiene audits.',
          'Lead hiring, performance reviews, and mentorship of restaurant supervisors and service staff.',
        ],
        qualifications: [
          'Bachelor’s / Master’s Degree in Hospitality Management.',
          '5+ years total F&B experience with at least 2+ years as Assistant F&B Manager or Restaurant General Manager.',
          'Proven record in revenue generation, P&L management, and team leadership.',
        ],
        skills: [
          'Multi-outlet F&B operations & P&L management',
          'Food & Beverage cost control (COGS)',
          'HACCP & food safety governance',
          'Strategic menu pricing & promotional campaigns',
        ],
        experience: '5+ years total F&B experience with senior management track record.',
      },
    ],
    keyResponsibilities: [
      'Delivering exemplary dining room service, wine service, and cocktail craftsmanship.',
      'Operating restaurant POS software, order routing systems, and inventory tracking.',
      'Ensuring strict compliance with European HACCP food safety, allergen labeling, and sanitization laws.',
      'Maximizing restaurant revenue through strategic upselling of premium wines, appetizers, and desserts.',
      'Resolving guest requests with prompt hospitality and fostering repeat customer loyalty.',
    ],
    qualifications: [
      'Diploma or Degree in Hotel Management, Culinary & Beverage Service, or Bartending Certification.',
      '1 to 3+ years of professional experience in hotels, fine dining restaurants, or cocktail lounges.',
      'Fluent spoken English; European language skills (German/Dutch/French) are highly rewarded.',
      'Outgoing personality, team spirit, and high stamina during peak dinner rushes.',
    ],
    requiredSkills: [
      'Silver & Plated Service Etiquette',
      'Classic & Signature Mixology',
      'Wine Pairing & Sommelier Basics',
      'POS Systems (Micros, Symphony, Lightspeed)',
      'HACCP Food Safety & Allergen Handling',
    ],
    careerOpportunities: [
      'Excellent international salary (€2,400 – €5,800/mo) plus substantial monthly tip pooling (€600 – €1,500+).',
      'Full employer sponsorship: work visa, round-trip flights, meals on duty, and subsidized accommodation.',
      'Fast-track career advancement from Server to Captain, Bar Manager, Restaurant GM, and Corporate F&B Director.',
      'Opportunities to work with celebrity chef restaurants and Michelin-starred establishments across Europe.',
    ],
  },

  // =========================================================================
  // 4. KITCHEN / CULINARY
  // =========================================================================
  {
    id: 'kitchen-culinary',
    slug: 'kitchen-culinary',
    title: 'Kitchen / Culinary',
    shortTitle: 'Kitchen & Culinary',
    route: '/services/hospitality/kitchen-culinary',
    icon: ChefHat,
    color: 'from-amber-600 to-yellow-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
    tagline: 'Culinary Artistry, Modern Gastronomy & International Commercial Kitchen Careers',
    shortDescription:
      'Placing Executive Chefs, Sous Chefs, Commis Chefs, and Pastry Specialists in high-end European restaurant kitchens, luxury hotels, and private catering groups.',
    overview:
      'Our Kitchen & Culinary division connects passionate chefs, line cooks, and pastry artists with international culinary establishments across the Netherlands, Germany, Switzerland, the UK, and the Middle East. Whether executing contemporary European cuisine, authentic Asian/Indian gastronomy, or artisan pastry craft, overseas kitchens offer cutting-edge culinary equipment, premium seasonal ingredients, and rapid career progression.',
    perksHighlights:
      'High chef salaries, chef uniform and knife kit allowance, free daily culinary meals, private or shared housing, and European work permit backing.',
    stats: [
      { label: 'Avg. Chef Salary', value: '€2,600 – €6,500/mo' },
      { label: 'Michelin & Hotel Kitchens', value: '80+ Properties' },
      { label: 'Free Meals & Housing', value: '100% Provided' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Executive Chef / Head Chef',
        badge: 'Senior Culinary Lead',
        salaryRange: '€4,500 – €6,500 / month',
        description:
          'Leading all culinary kitchen operations, menu R&D, ingredient procurement, food costing, kitchen hygiene audits, and managing kitchen brigade teams in luxury properties.',
        responsibilities: [
          'Design innovative seasonal menus, signature dishes, and banquet catering concepts.',
          'Manage kitchen P&L, maintain food cost target percentages (typically 28–32%), and negotiate with food purveyors.',
          'Lead, mentor, and schedule the entire kitchen brigade (Sous Chefs, Chef de Parties, Commis).',
          'Enforce strict compliance with HACCP food hygiene, refrigeration temperature logs, and safety regulations.',
          'Expedite dinner service at the pass, inspecting every dish for taste, temperature, and plating perfection.',
        ],
        qualifications: [
          'Degree in Culinary Arts / Hotel Management from recognized culinary institute.',
          '5–8+ years total professional kitchen experience including 2+ years as Head Chef or Executive Sous Chef.',
          'Documented portfolio of menu design, kitchen management, and culinary achievements.',
        ],
        skills: [
          'Culinary innovation & advanced recipe development',
          'Food cost control & supplier management',
          'HACCP hygiene & kitchen safety leadership',
          'Brigade team management & pass expediting',
        ],
        experience: '5+ years experience in high-volume luxury kitchens or fine dining.',
      },
      {
        title: 'Sous Chef (Second in Command)',
        badge: 'High Kitchen Demand',
        salaryRange: '€3,400 – €4,800 / month',
        description:
          'Managing day-to-day kitchen operations, supervising station prep, executing high-volume service shifts, and ensuring consistent culinary execution in the Executive Chef’s absence.',
        responsibilities: [
          'Oversee daily mise-en-place preparation across all hot, cold, and pastry kitchen sections.',
          'Direct line cooks and Commis Chefs during intense lunch and dinner services.',
          'Manage kitchen inventory, daily food requisition orders, and minimize food wastage.',
          'Train kitchen apprentices on precise knife skills, butchery, sauce making, and plating aesthetics.',
          'Ensure commercial cooking equipment (Rational ovens, induction ranges, salamanders) are cleaned and maintained.',
        ],
        qualifications: [
          'Diploma / Degree in Culinary Arts or Hotel Management.',
          '3–5+ years of continuous culinary experience with 1+ years as Junior Sous Chef or Senior CDP.',
        ],
        skills: [
          'Kitchen line expediting & prep coordination',
          'Classical sauce preparation & protein butchery',
          'Stock rotation (FIFO) & wastage elimination',
          'Kitchen team training & shift leadership',
        ],
        experience: '3+ years in commercial hotel or restaurant kitchen.',
      },
      {
        title: 'Commis Chef (Commis I, II, III / Line Cook)',
        badge: 'Fast Career Start',
        salaryRange: '€2,400 – €3,200 / month',
        description:
          'Executing food prep, knife work, cooking station duties (Grill, Sauté, Larder, Fryer), and assisting section chefs (CDP) during busy meal services.',
        responsibilities: [
          'Prepare daily vegetables, meats, seafood, stocks, and dressings per standardized recipe cards.',
          'Operate assigned cooking station efficiently during service, cooking orders to exact customer preferences.',
          'Label, date, and store all food items adhering to strict FIFO and refrigeration standards.',
          'Maintain spotless hygiene at cooking stations, sanitize cutting boards, and clean kitchen equipment after shifts.',
        ],
        qualifications: [
          'Certificate / Diploma in Culinary Arts, Food Production, or Hotel Management.',
          '1+ years of line cook or kitchen prep experience in a commercial restaurant or hotel kitchen.',
        ],
        skills: [
          'Knife skills & ingredient preparation',
          'Station cooking (Sauté, Grill, Fryer, Salad)',
          'Food safety, temperature logs & FIFO',
          'Teamwork under pressure & stamina',
        ],
        experience: '1+ years in kitchen prep or line cooking.',
      },
      {
        title: 'Pastry Chef / Baker (Chocolatier & Bakery)',
        badge: 'Specialized Artisan Role',
        salaryRange: '€2,800 – €4,200 / month',
        description:
          'Creating artisan bread, French viennoiserie, fine dining plated desserts, wedding cakes, and chocolate confectioneries for hotel outlets and banquets.',
        responsibilities: [
          'Bake fresh morning breads, croissants, baguettes, and pastries daily for breakfast buffets.',
          'Prepare intricate plated desserts, mousses, tarts, and soufflés for à la carte restaurant service.',
          'Design custom celebration cakes, dessert buffet displays, and handcrafted chocolate showpieces.',
          'Control pastry inventory, dairy supplies, premium chocolates, and specialty baking flours.',
        ],
        qualifications: [
          'Degree / Diploma in Pastry & Baking Arts from a recognized culinary school.',
          '2+ years of dedicated pastry chef or bakery experience in hotels, bakeries, or upscale restaurants.',
        ],
        skills: [
          'Artisan bread baking & viennoiserie',
          'Plated dessert design & sugar work',
          'Chocolate tempering & confectionery',
          'Precision recipe formulation & baking science',
        ],
        experience: '2+ years dedicated pastry and bakery experience.',
      },
    ],
    keyResponsibilities: [
      'Preparing and cooking top-tier culinary creations adhering to strict recipe and presentation guidelines.',
      'Enforcing European HACCP hygiene standards, temperature records, and cross-contamination prevention.',
      'Managing ingredient prep, protein butchery, sauce production, and stock rotation (FIFO).',
      'Operating modern commercial kitchen equipment safely and maintaining spotless work stations.',
      'Collaborating seamlessly as an agile, disciplined kitchen brigade team during peak service hours.',
    ],
    qualifications: [
      'Diploma, Degree, or Certificate in Culinary Arts, Food Production, or Hotel Management.',
      'Minimum 1 to 4+ years of professional kitchen experience in commercial hotels or restaurants.',
      'Knowledge of international cooking methods, knife mastery, and culinary terminology.',
      'High passion for food, physical stamina, and willingness to work flexible kitchen shifts.',
    ],
    requiredSkills: [
      'Classical & Modern Cooking Techniques',
      'HACCP Food Safety & Kitchen Hygiene',
      'Knife Skills & High-Volume Mise-en-Place',
      'Portion Control & Plating Presentation',
      'Speed, Precision & High-Pressure Composure',
    ],
    careerOpportunities: [
      'Attractive international remuneration (€2,400 – €6,500/month) with free meals and accommodation.',
      'Direct permanent European chef contracts with complete visa, work permit, and flight support.',
      'Clear culinary promotion ladder from Commis Chef to Demi CDP, CDP, Sous Chef, and Executive Chef.',
      'Prestige of working with world-renowned European culinary traditions and international hotel chains.',
    ],
  },

  // =========================================================================
  // 5. SALES & EVENTS
  // =========================================================================
  {
    id: 'sales-and-events',
    slug: 'sales-and-events',
    title: 'Sales & Events',
    shortTitle: 'Sales & Events',
    route: '/services/hospitality/sales-and-events',
    icon: CalendarCheck,
    color: 'from-purple-600 to-indigo-600',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    tagline: 'Corporate Conferences, Luxury Weddings, Banquets & Hospitality Business Development',
    shortDescription:
      'Connecting Hospitality Sales Executives, Event Coordinators, and Banquet Managers with international convention hotels, luxury venues, and resort event spaces.',
    overview:
      'Our Sales & Events division recruits energetic business developers, wedding planners, and banquet operations leaders for international convention hotels, luxury resort venues, and exhibition centers across Europe and the Middle East. From high-stakes corporate summits and trade expos to grand weddings and gala dinners, sales and event professionals drive millions in hotel revenue and ensure flawless execution.',
    perksHighlights:
      'Attractive base salary plus lucrative event commission bonuses, laptop and phone allowance, duty meals, European work visa, and relocation assistance.',
    stats: [
      { label: 'Avg. Monthly Base', value: '€2,800 – €5,200/mo' },
      { label: 'Performance Commission', value: 'Uncapped Bonuses' },
      { label: 'Convention & Venue Partners', value: '70+ Venues' },
      { label: 'Visa Sponsorship', value: '100% Provided' },
    ],
    roles: [
      {
        title: 'Sales Executive (Corporate & MICE)',
        badge: 'High Commission Potential',
        salaryRange: '€2,800 – €4,000 / month',
        description:
          'Generating corporate group room bookings, business travel accounts, MICE (Meetings, Incentives, Conferences, Exhibitions) contracts, and driving hotel room revenues.',
        responsibilities: [
          'Prospect corporate clients, travel management companies (TMCs), and event organizers for hotel group bookings.',
          'Conduct hotel site inspections, showcase banquet venues, and prepare customized sales proposals and rate contracts.',
          'Negotiate corporate room rates, minimum banquet spends, and contract terms to maximize RevPAR and event revenues.',
          'Maintain client relationships in CRM systems (Salesforce, Delphi, Opera Sales & Catering).',
          'Represent the hotel at international travel trade fairs, networking galas, and tourism exhibitions.',
        ],
        qualifications: [
          'Bachelor’s Degree in Hospitality Management, Marketing, Business Administration, or PR.',
          '2+ years of B2B sales experience in a hotel, convention center, or travel company.',
          'Strong negotiation, pitching, and client relationship management capabilities.',
        ],
        skills: [
          'B2B hotel sales & corporate contracting',
          'Delphi / Opera Sales & Catering / Salesforce CRM',
          'Site inspections & sales pitching',
          'Revenue optimization & lead conversion',
        ],
        experience: '2+ years in hotel corporate sales or MICE revenue generation.',
      },
      {
        title: 'Event Coordinator / Wedding Planner',
        badge: 'Creative & Client-Focused',
        salaryRange: '€2,600 – €3,600 / month',
        description:
          'Planning and coordinating every detail of weddings, corporate conferences, gala dinners, and private celebrations from contract signing to live event execution.',
        responsibilities: [
          'Liaise with wedding couples and corporate event planners to understand event agendas, themes, and audiovisual requirements.',
          'Prepare detailed Banquet Event Orders (BEOs), seating floor plans, and run-of-show timelines.',
          'Coordinate with culinary chefs for customized menu tastings, dietary menus, and beverage packages.',
          'Oversee external event vendors: florists, decorators, lighting engineers, musicians, and photographers.',
          'Supervise event operations on the event day, ensuring seamless timing and immediate resolution of guest requests.',
        ],
        qualifications: [
          'Degree / Diploma in Event Management, Hospitality, or Communications.',
          '1–3+ years of experience planning conferences, banquets, or luxury weddings in hotels or event venues.',
        ],
        skills: [
          'Banquet Event Order (BEO) generation',
          'Floor plan software (Social Tables, Visio)',
          'Vendor coordination & timeline management',
          'High empathy, creativity & client diplomacy',
        ],
        experience: '1+ years in hotel event planning or wedding coordination.',
      },
      {
        title: 'Banquet Manager / Operations Head',
        badge: 'Senior Operations Leader',
        salaryRange: '€3,400 – €5,200 / month',
        description:
          'Managing the physical setup, service execution, bar operations, and banquet waitstaff for large-scale conferences, gala dinners, and multi-day exhibitions.',
        responsibilities: [
          'Direct banquet setup crews according to BEO diagrams (theater, classroom, banquet round tables).',
          'Manage the execution of food & beverage service for events ranging from 50 to 1,500+ attendees.',
          'Hire, schedule, and train casual and full-time banquet servers, bartenders, and setup staff.',
          'Coordinate live service timing seamlessly with the Executive Banquet Chef and event planners.',
          'Maintain banquet equipment inventories: tables, chiavari chairs, stage podiums, linens, and silverware.',
        ],
        qualifications: [
          'Degree in Hotel Management / F&B Operations.',
          '3–5+ years in banquet operations with at least 2 years as Assistant Banquet Manager or Banquet Captain.',
          'Proven ability to lead large banquet teams under tight turnaround deadlines.',
        ],
        skills: [
          'Large-scale event & banquet service execution',
          'BEO interpretation & room setup logistics',
          'Banquet staff roster & labor cost management',
          'Audiovisual (AV) & staging coordination',
        ],
        experience: '3+ years in large-scale banquet or convention operations.',
      },
    ],
    keyResponsibilities: [
      'Driving hotel room and banquet revenue through proactive corporate client acquisition and MICE contracts.',
      'Generating detailed Banquet Event Orders (BEOs) and coordinating seamless operational execution.',
      'Directing large-scale banquet food & beverage service for corporate galas, weddings, and conventions.',
      'Collaborating with Culinary, Front Office, Housekeeping, and Engineering departments.',
      'Ensuring maximum client satisfaction, glowing event reviews, and repeat annual bookings.',
    ],
    qualifications: [
      'Degree or Diploma in Hospitality Management, Event Management, Marketing, or Business.',
      '1 to 4+ years of experience in hotel sales, event coordination, or banquet operations.',
      'Fluent English communication, persuasive presentation skills, and refined interpersonal presence.',
      'Proficiency with hotel sales software (Delphi, Opera Sales & Catering, Social Tables).',
    ],
    requiredSkills: [
      'Corporate Account Management & Negotiation',
      'Banquet Event Orders (BEO) & Floor Plans',
      'Event Day Operations & Vendor Management',
      'Client Relationship Management (CRM & Delphi)',
      'High-Pressure Event Multitasking & Problem Solving',
    ],
    careerOpportunities: [
      'Attractive international remuneration (€2,800 – €5,200/mo) with uncapped event performance commissions.',
      'Full employer relocation support: work permits, visa sponsorship, duty meals, and travel allowances.',
      'Career advancement from Event Coordinator to Sales Manager, Director of Events, and Hotel Commercial Director.',
      'Opportunities to manage world-renowned corporate summits, luxury destination weddings, and international congresses.',
    ],
  },
];
