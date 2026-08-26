import {
  Scissors,
  Sparkles,
  Heart,
  Flower2,
  Smile,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BeautyRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface BeautyAndCareDepartment {
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
  roles: BeautyRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const beautyAndCareDepartments: BeautyAndCareDepartment[] = [
  // =========================================================================
  // 1. HAIR & STYLING
  // =========================================================================
  {
    id: 'hair-styling',
    slug: 'hair-styling',
    title: 'Hair & Styling',
    shortTitle: 'Hair & Styling',
    route: '/services/beauty-and-care/hair-styling',
    icon: Scissors,
    color: 'from-pink-600 to-rose-500',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    tagline: 'Haute Coiffure, Modern Precision Haircuts, Balayage Color & Master Barbering',
    shortDescription:
      'Placing creative Hair Stylists, Hairdressers, Master Barbers, and Expert Colorists across luxury European salons, 5-star hotel spas, and premium studios.',
    overview:
      'Our Hair & Styling division recruits talented hair artists, certified master barbers, and technical colorists for high-end European salons, five-star hotel spas, and cruise lines across the Netherlands, Germany, the UK, Poland, Dubai, and Qatar. Stylists master bespoke consultations, modern precision scissor and clipper cutting, creative balayage/ombre highlights, keratin smoothing therapies, and red-carpet event styling.',
    perksHighlights:
      'Lucrative monthly base pay plus 100% direct client tips & product retail commission (averaging €500–€1,200/mo extra), salon masterclasses, employer visa sponsorship, and relocation housing support.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,600 – €4,800/mo' },
      { label: 'Luxury Salon Partners', value: '80+ Salons' },
      { label: 'Tips & Commissions', value: '100% Kept by Staff' },
      { label: 'Visa Sponsorship', value: 'Full Support' },
    ],
    roles: [
      {
        title: 'Hair Stylist (Senior Creative Stylist)',
        badge: 'High Salon Demand',
        salaryRange: '€2,800 – €4,500 / month + Tips',
        description:
          'Delivering luxury bespoke consultations, precision haircuts, layered blowouts, updos, and texture treatments for discerning international clientele.',
        responsibilities: [
          'Conduct comprehensive client consultations analyzing hair texture, face shape, and lifestyle needs.',
          'Execute precision wet and dry haircutting techniques using shears, texturizers, and razors.',
          'Perform luxury blow-dries, curling, flat-iron smoothing, and red-carpet editorial styling.',
          'Apply keratin smoothing treatments, botox hair therapy, and deep-conditioning restorative masks.',
          'Recommend premium retail home-care products (Kérastase, Olaplex, L’Oréal Professionnel) achieving retail targets.',
        ],
        qualifications: [
          'Diploma / NVQ Level 2/3 in Hairdressing or equivalent certified cosmetology diploma.',
          '2–5+ years of experience in high-end unisex or women’s hair salons.',
          'Strong visual portfolio showcasing modern haircuts and blowouts.',
        ],
        skills: [
          'Precision scissor & razor cutting',
          'Editorial blowouts, curls & updos',
          'Keratin & hair botox treatments',
          'Client consultation & product upselling',
        ],
        experience: '2+ years in professional hair styling.',
      },
      {
        title: 'Hairdresser (Cutting, Perming & Treatments)',
        badge: 'Core Salon Craft',
        salaryRange: '€2,500 – €3,800 / month + Tips',
        description:
          'Providing everyday professional hair services: washing, scalp massages, basic/advanced cutting, permanent waving (perms), and setting styles.',
        responsibilities: [
          'Perform soothing scalp detox washes and conditioning basin treatments.',
          'Execute classic and modern haircuts for women, men, and children.',
          'Administer permanent waving, curl reforming, and relaxing chemical services safely.',
          'Maintain impeccable hygiene, sterilizing scissors, combs, and styling chairs between clients.',
          'Assist senior art directors during complex hair transformation sessions.',
        ],
        qualifications: [
          'Vocational Certificate / Diploma in Hairdressing.',
          '2+ years practical salon experience.',
        ],
        skills: [
          'Classic haircutting & sectioning',
          'Scalp treatment & hair washing technique',
          'Chemical perming & relaxing',
          'Salon sanitation & hygiene protocols',
        ],
        experience: '2+ years salon hairdressing experience.',
      },
      {
        title: 'Barber (Fade Specialist & Traditional Shaving)',
        badge: 'High European Hiring',
        salaryRange: '€2,600 – €4,200 / month + Tips',
        description:
          'Mastering skin fades, taper cuts, beard sculpting, traditional hot-towel straight razor shaves, and facial grooming in gentleman’s barber lounges.',
        responsibilities: [
          'Execute skin fades, low/mid/high tapers, textured crops, and pompadours using professional clippers.',
          'Perform traditional hot towel straight-edge razor wet shaves with pre-shave oils and aftershave balms.',
          'Sculpt and trim beards, mustache styling, and precision razor line-ups.',
          'Provide men’s express facial scrubs, blackhead mask treatments, and ear/nose waxing.',
          'Deliver charismatic customer service creating loyal repeating client relationships.',
        ],
        qualifications: [
          'Certified Barbering Diploma or proven traditional barber apprenticeship.',
          '2+ years experience in high-traffic modern barbershops or luxury men’s grooming lounges.',
        ],
        skills: [
          'Clipper over comb & skin fade precision',
          'Straight-razor hot towel shaving',
          'Beard shaping, trimming & styling',
          'Men’s grooming & facial care',
        ],
        experience: '2+ years dedicated barbering experience.',
      },
      {
        title: 'Hair Colorist (Balayage, Foils & Bleach Specialist)',
        badge: 'Specialist Color Master',
        salaryRange: '€3,000 – €4,800 / month + Tips',
        description:
          'Formulating custom hair colors, performing freehand French balayage, foil highlights, color correction, root melts, and platinum blonde bleaching.',
        responsibilities: [
          'Formulate precise color mixes using permanent, semi-permanent, and toner formulations.',
          'Execute French balayage, babylights, foliage, ombre, and micro-foiling techniques.',
          'Perform complex color corrections: removing box dye, neutralizing unwanted brassy undertones, and banding repair.',
          'Safely administer high-lift bleach and tone processes while maintaining hair bond integrity (Olaplex/K18).',
          'Maintain client color formulation history cards in digital salon management software.',
        ],
        qualifications: [
          'Advanced Certificate in Hair Color / Master Colorist Diploma (Wella, L’Oréal, Schwarzkopf).',
          '3+ years dedicated colorist experience.',
        ],
        skills: [
          'Freehand Balayage & foliage artistry',
          'Color correction & tone formulation chemistry',
          'Bond builder protection (Olaplex / K18)',
          'Platinum blonde & fashion shade application',
        ],
        experience: '3+ years specialized hair coloring experience.',
      },
    ],
    keyResponsibilities: [
      'Delivering personalized luxury hair consultations and modern precision haircuts.',
      'Performing advanced hair color transformations: balayage, highlights, and color corrections.',
      'Executing traditional barbering: skin fades, hot-towel razor shaves, and beard grooming.',
      'Administering restorative hair treatments: keratin, hair botox, and scalp therapies.',
      'Upholding European salon hygiene, tool sterilization, and cosmetic safety standards.',
    ],
    qualifications: [
      'Diploma, NVQ, or Certified Vocational Qualification in Hairdressing, Barbering, or Cosmetology.',
      '2 to 5+ years of verified salon experience with a strong photographic portfolio of work.',
      'Warm client manners, active listening, and conversational English skills.',
      'Passion for staying current with trending global hair aesthetics and fashion styles.',
    ],
    requiredSkills: [
      'Precision Scissor & Clipper Cutting',
      'French Balayage & Creative Foil Highlights',
      'Hot Towel Straight Razor Shaving',
      'Keratin Smoothing & Bond Repair Therapies',
      'Client Retention & Salon Product Retailing',
    ],
    careerOpportunities: [
      'High monthly earnings (€2,600 – €4,800/mo) with substantial daily cash tips and retail bonuses.',
      'Full employer relocation packages: visa sponsorship, travel tickets, and salon tool sets provided.',
      'Promotion track from Junior Stylist to Senior Art Director, Salon Manager, and Brand Educator.',
      'Opportunities to work on international fashion weeks, editorial photoshoots, and luxury cruise lines.',
    ],
  },

  // =========================================================================
  // 2. SKIN & AESTHETICS
  // =========================================================================
  {
    id: 'skin-aesthetics',
    slug: 'skin-aesthetics',
    title: 'Skin & Aesthetics',
    shortTitle: 'Skin & Aesthetics',
    route: '/services/beauty-and-care/skin-aesthetics',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-500',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1512290900672-1f4a9b5f5bb7?q=80&w=800&auto=format&fit=crop',
    tagline: 'Clinical Skincare, HydraFacials, Chemical Peels & Non-Invasive Aesthetic Therapies',
    shortDescription:
      'Connecting certified Beauticians, Skin Therapists, Medical Aestheticians, and Facialists with premier skin clinics and medispas.',
    overview:
      'Our Skin & Aesthetics division recruits certified beauty therapists, dermal clinicians, and clinical aestheticians for high-end aesthetic clinics, medispas, and luxury wellness centers across the Netherlands, Germany, the UK, Switzerland, and the Gulf. Practitioners perform deep skin diagnostic analyses, medical-grade HydraFacials, microdermabrasion, superficial chemical peels, microneedling, and LED light therapies complying with European cosmetic safety directives.',
    perksHighlights:
      'Generous commission on skin treatments and clinical skincare retail (SkinCeuticals, Dermalogica), employer work visa sponsorship, advanced laser/device training, and accommodation assistance.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€2,800 – €5,200/mo' },
      { label: 'Medispa & Clinic Partners', value: '65+ Clinics' },
      { label: 'CIDESCO / ITEC Certified', value: 'Recognized' },
      { label: 'Visa Sponsorship', value: 'Guaranteed' },
    ],
    roles: [
      {
        title: 'Beautician (Full-Service Beauty Therapist)',
        badge: 'High Hiring Demand',
        salaryRange: '€2,400 – €3,600 / month + Tips',
        description:
          'Providing full-spectrum beauty care: professional waxing/threading, eyebrow shaping, eyelash tinting/lifting, express facials, and body polishing.',
        responsibilities: [
          'Deliver full body waxing (hot wax & strip wax) and painless Brazilian/Hollywood waxing.',
          'Execute precision eyebrow threading, brow lamination, and eyelash lift/tint treatments.',
          'Perform classic cleansing facials, facial steaming, extractions, and soothing mask applications.',
          'Apply full body scrubs, wraps, and spray tanning applications.',
          'Ensure 100% strict salon sanitation, towel autoclaving, and single-use hygienic consumables.',
        ],
        qualifications: [
          'Diploma in Beauty Therapy (CIBTAC / ITEC / VTCT Level 2/3 or equivalent).',
          '2+ years practical beauty therapist experience.',
        ],
        skills: [
          'Hot wax & strip body waxing technique',
          'Eyebrow threading & lash lifting',
          'Classic facial cleansing & extractions',
          'Body scrubs & beauty hygiene standards',
        ],
        experience: '2+ years in full-service beauty salon.',
      },
      {
        title: 'Skin Therapist / Dermal Clinician',
        badge: 'Clinical Skincare Specialist',
        salaryRange: '€3,000 – €4,600 / month + Commission',
        description:
          'Conducting digital skin diagnostics (Observ 520 / Visia), formulating customized skin treatment plans for acne, hyperpigmentation, rosacea, and skin rejuvenation.',
        responsibilities: [
          'Perform computerized skin barrier analyses assessing hydration, pigmentation, and sebum levels.',
          'Administer customized clinical chemical peels (AHA, BHA, Glycolic, Salicylic, TCA).',
          'Operate advanced medical skincare devices: HydraFacial MD, OxyGeneo, and LED phototherapy.',
          'Prescribe active cosmeceutical skincare home regimens (Retinoids, Vitamin C, Niacinamide).',
          'Maintain precise clinical treatment records and monitor patient before/after photographic progress.',
        ],
        qualifications: [
          'Diploma / Degree in Dermal Science, Cosmetology, or CIDESCO International Diploma.',
          '2–4+ years in a dermatology clinic, medispa, or clinical skincare center.',
        ],
        skills: [
          'Skin barrier diagnosis & customized treatment plans',
          'Chemical peeling (AHA / BHA / Jessner)',
          'HydraFacial MD & OxyGeneo device operation',
          'Cosmeceutical active ingredient knowledge',
        ],
        experience: '2+ years in clinical skin therapy.',
      },
      {
        title: 'Aesthetician (Laser & Advanced Non-Invasive Rejuvenation)',
        badge: 'High Value Device Specialist',
        salaryRange: '€3,400 – €5,200 / month + Commission',
        description:
          'Operating advanced aesthetic technology: Diode/Alexandrite laser hair removal, RF skin tightening, microneedling (Dermapen), and HIFU lifting treatments.',
        responsibilities: [
          'Administer laser hair reduction treatments using Candela GentleMax Pro, Soprano Titanium, or Cynosure.',
          'Perform automated microneedling (Dermapen 4) for collagen induction and scar revision.',
          'Conduct radiofrequency (RF) skin tightening and High-Intensity Focused Ultrasound (HIFU) facial contouring.',
          'Conduct client Fitzpatrick skin typing and laser test patch safety evaluations.',
          'Ensure strict adherence to European laser safety regulations and clinic sterilization protocols.',
        ],
        qualifications: [
          'CIDESCO / ITEC Level 4 in Laser & Light Therapies or certified Aesthetic Practitioner credential.',
          '3+ years hands-on aesthetic device experience.',
        ],
        skills: [
          'Laser hair removal (Candela / Soprano / Alexandrite)',
          'Automated microneedling (Dermapen) & RF tightening',
          'Fitzpatrick skin typing & laser safety protocols',
          'Skin rejuvenation & collagen induction therapy',
        ],
        experience: '3+ years in medical aesthetics or laser clinic.',
      },
      {
        title: 'Facial Therapist (Holistic & Anti-Aging Massage)',
        badge: 'Luxury Spa Specialist',
        salaryRange: '€2,600 – €4,000 / month + Tips',
        description:
          'Delivering luxury bespoke anti-aging facials, buccal intra-oral facial lifting massages, lymphatic drainage, and gua sha sculpted facial therapies.',
        responsibilities: [
          'Perform signature sculpted lifting facial massages including Buccal (intra-oral) technique.',
          'Execute facial lymphatic drainage, ice globe cryotherapy, and jade/gua sha facial sculpting.',
          'Incorporate aromatherapy oils, hot stone compresses, and collagen eye contour treatments.',
          'Create serene, tranquil treatment room ambiences with personalized sound and scent selections.',
        ],
        qualifications: [
          'Diploma in Holistic Facial Therapy or International Beauty Certification.',
          '2+ years in 5-star hotel spas or luxury holistic skincare clinics.',
        ],
        skills: [
          'Sculptural face lifting & buccal massage',
          'Lymphatic drainage & gua sha contouring',
          'Holistic skincare & customized mask therapies',
          'Luxury spa customer hospitality',
        ],
        experience: '2+ years in holistic or luxury facial therapies.',
      },
    ],
    keyResponsibilities: [
      'Conducting skin assessments and creating customized treatment protocols.',
      'Performing medical-grade facials, HydraFacials, chemical peels, and microneedling.',
      'Operating advanced aesthetic laser devices and radiofrequency skin tightening machines.',
      'Prescribing targeted cosmeceutical skincare regimens for lasting clinical results.',
      'Adhering to strict EU clinical hygiene, client confidentiality, and sterilization directives.',
    ],
    qualifications: [
      'CIDESCO, CIBTAC, ITEC, or VTCT recognized international diploma in Beauty & Aesthetics.',
      '2 to 5+ years of verified clinical or medispa experience.',
      'Deep knowledge of cosmetic dermatology, Fitzpatrick skin types, and active skincare ingredients.',
      'Polite, caring demeanor with fluent English communication for high-end clientele.',
    ],
    requiredSkills: [
      'HydraFacial MD & Chemical Peeling Techniques',
      'Laser Hair Removal & Light Device Operation',
      'Dermapen Collagen Induction Microneedling',
      'Sculptural & Buccal Facial Massage',
      'Cosmeceutical Skincare Prescription (SkinCeuticals/Zo Skin)',
    ],
    careerOpportunities: [
      'Attractive remuneration (€2,800 – €5,200/month) with high treatment & product retail commissions.',
      'Complete employer relocation: work permit visas, flight tickets, and accommodation assistance.',
      'Career growth from Dermal Therapist to Head Aesthetician, Clinic Supervisor, and Brand Trainer.',
      'High-demand career in Europe’s booming medical aesthetics and premium medispa market.',
    ],
  },

  // =========================================================================
  // 3. NAIL & BEAUTY
  // =========================================================================
  {
    id: 'nail-beauty',
    slug: 'nail-beauty',
    title: 'Nail & Beauty',
    shortTitle: 'Nail & Beauty',
    route: '/services/beauty-and-care/nail-beauty',
    icon: Heart,
    color: 'from-rose-500 to-red-500',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    heroImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop',
    tagline: 'Artistic Nail Extensions, Gel-X, Russian Manicures, Nail Art & Luxury Spa Pedicures',
    shortDescription:
      'Placing certified Nail Technicians, Russian Manicurists, and Medical Pedicurists across high-end European nail lounges, luxury department stores, and resorts.',
    overview:
      'Our Nail & Beauty division recruits talented nail artists, e-file Russian manicure specialists, and medical pedicure practitioners for premier nail bars and luxury salons across the Netherlands, Germany, the UK, France, and the Middle East. Technicians master Russian dry hardware manicures, sculptured acrylics, builder gel (BIAB), Gel-X soft gel extensions, intricate hand-painted nail art, and restorative foot wellness.',
    perksHighlights:
      'Competitive base pay + 100% direct tips (often exceeding €600–€1,000/month), premium brand products provided (OPI, The GelBottle, Bio Sculpture), and full work visa sponsorship.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,400 – €4,200/mo' },
      { label: 'Nail Lounge Partners', value: '75+ Lounges' },
      { label: 'Direct Client Tips', value: '100% Kept by Staff' },
      { label: 'Visa Sponsorship', value: 'Full Support' },
    ],
    roles: [
      {
        title: 'Nail Technician (BIAB, Gel-X & Acrylic Sculpting)',
        badge: 'High European Hiring',
        salaryRange: '€2,500 – €4,000 / month + Tips',
        description:
          'Applying builder gel overlays (BIAB), soft-gel Gel-X extensions, dual-form acrylic extensions, and flawless gel polish finishes with precision cuticle prep.',
        responsibilities: [
          'Perform Builder in a Bottle (BIAB) overlays reinforcing natural nail strength.',
          'Sculpt and shape acrylic, polygel, and Gel-X full-cover extensions to desired lengths (Almond, Coffin, Stiletto, Square).',
          'Apply gel polish smoothly with crisp, gap-free cuticle line alignment and mirror topcoats.',
          'Execute safe, damage-free removal of acrylics, hard gels, and dip powders.',
          'Sterilize e-file carbide drill bits, nippers, and pushers in medical-grade autoclaves.',
        ],
        qualifications: [
          'Certified Nail Technician Diploma (NVQ / VTCT Level 2/3 or accredited nail academy certificate).',
          '2+ years experience in high-volume or luxury nail salons.',
          'Photographic portfolio of clean cuticle work and nail shape symmetry.',
        ],
        skills: [
          'BIAB builder gel & Gel-X extensions',
          'Acrylic sculpting & apex structure architecture',
          'E-file cuticle prep & sanitization',
          'Gel polish application & mirror finish',
        ],
        experience: '2+ years dedicated nail technician experience.',
      },
      {
        title: 'Manicurist (Russian Dry Hardware & Nail Art Artist)',
        badge: 'Precision Artistry Lead',
        salaryRange: '€2,600 – €4,200 / month + Tips',
        description:
          'Specializing in Russian combi dry e-file manicures, flawless deep cuticle cleaning, and hand-painted nail art: French ombre, 3D chrome, and geometric designs.',
        responsibilities: [
          'Execute pristine Russian dry e-file manicures using diamond flame and ball bits for flawless cuticles.',
          'Create hand-painted intricate nail art: chrome glazed donuts, French tips, marble, blooming gel, and crystals.',
          'Perform Japanese manicures and nourishing keratin hand spa treatments.',
          'Maintain high service speed without compromising precision and hygiene standards.',
        ],
        qualifications: [
          'Certified Russian Manicure / E-file specialist certification.',
          '2+ years experience with proven hand-painted nail art skills.',
        ],
        skills: [
          'Russian dry e-file manicure technique',
          'Hand-painted intricate nail art & chrome effects',
          'Deep cuticle cleaning & under-cuticle color application',
          'Fast-paced salon workflow management',
        ],
        experience: '2+ years specialized e-file and nail art experience.',
      },
      {
        title: 'Pedicurist (Spa & Medical Foot Wellness)',
        badge: 'Wellness Foot Specialist',
        salaryRange: '€2,400 – €3,800 / month + Tips',
        description:
          'Delivering luxury spa pedicures, callous peeling, e-file dry podology foot treatments, ingrown nail relief, and relaxing foot reflexology massages.',
        responsibilities: [
          'Perform luxury spa pedicures with foot soak basins, sugar scrubs, paraffin wax wraps, and foot reflexology.',
          'Execute e-file podo-disc dry pedicures removing severe heel callouses and cracked skin safely.',
          'Treat minor ingrown toenails and apply podo-gel toenail reconstruction.',
          'Apply durable long-lasting gel polish or classic lacquer on toenails.',
          'Sanitize pedicure spa chairs and pipe-free whirlpool basins after every client.',
        ],
        qualifications: [
          'Diploma / Certificate in Pedicure & Foot Care / Podology basics.',
          '2+ years practical pedicure experience.',
        ],
        skills: [
          'E-file podo-disc callus removal',
          'Toenail shaping, reconstruction & gel application',
          'Spa foot bath, scrubs & reflexology massage',
          'Pedicure station hygiene & pipeless basin sanitation',
        ],
        experience: '2+ years professional pedicure experience.',
      },
    ],
    keyResponsibilities: [
      'Applying modern nail enhancements: BIAB, Gel-X, polygel, and sculpted acrylics.',
      'Executing precision Russian dry e-file manicures and deep cuticle care.',
      'Creating trending hand-painted nail art, chrome finishes, and ombre designs.',
      'Delivering rejuvenating spa pedicures, callus smoothing, and foot reflexology.',
      'Maintaining 100% autoclave sterilization of all metal instruments and files.',
    ],
    qualifications: [
      'Accredited Certificate or Diploma in Nail Technology / Nail Artistry / Pedicure.',
      '2 to 5+ years of verified professional salon experience.',
      'Strong creative aesthetic sense, steady hands, and attention to microscopic detail.',
      'Polite, friendly client communication skills.',
    ],
    requiredSkills: [
      'Russian E-File Combi Manicure',
      'Builder in a Bottle (BIAB) & Gel-X Systems',
      'Hand-Painted Nail Art & Chrome Aesthetics',
      'Podo-Disc Dry Pedicure & Callus Smoothing',
      'Medical Autoclave Tool Sterilization',
    ],
    careerOpportunities: [
      'High total earnings (€2,400 – €4,200/month) boosted by substantial direct daily customer tips.',
      'Full employer relocation: work permit visa sponsorship, flight tickets, and studio accommodation.',
      'Progression from Nail Tech to Master Artist, Salon Lead, and Brand Educator.',
      'Expanding opportunities across luxury boutique nail lounges in Amsterdam, Berlin, London, and Paris.',
    ],
  },

  // =========================================================================
  // 4. SPA & WELLNESS
  // =========================================================================
  {
    id: 'spa-wellness',
    slug: 'spa-wellness',
    title: 'Spa & Wellness',
    shortTitle: 'Spa & Wellness',
    route: '/services/beauty-and-care/spa-wellness',
    icon: Flower2,
    color: 'from-emerald-600 to-teal-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    tagline: 'Holistic Body Massages, Hydrotherapy, Hammam Rituals & 5-Star Resort Wellness',
    shortDescription:
      'Connecting certified Spa Therapists, Massage Practitioners, and Holistic Wellness Therapists with 5-star international hotel resorts and luxury thermal spas.',
    overview:
      'Our Spa & Wellness division recruits certified body therapists, licensed massage practitioners, and wellness specialists for five-star luxury hotel spas, Alpine thermal resorts, and luxury cruise liners across Switzerland, Germany, the Netherlands, the UK, Dubai, and the Maldives. Therapists master Swedish relaxation, deep tissue, hot stone therapy, Balinese massage, Ayurvedic rituals, Turkish hammam scrubs, and sound healing.',
    perksHighlights:
      'High monthly tax-compliant salary + generous service charge shares and client tips, complimentary 5-star hotel meals and accommodations, international flight allowances, and European work visas.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,800 – €4,800/mo' },
      { label: '5-Star Resort Partners', value: '55+ Luxury Hotels' },
      { label: 'Meals & Housing', value: '100% Provided' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Spa Therapist (5-Star Hotel Resort & Day Spa)',
        badge: 'Luxury Resort Demand',
        salaryRange: '€2,800 – €4,500 / month + Tips',
        description:
          'Delivering full-body wellness treatments, body wraps, scrubs, hydrotherapy baths, and signature hotel ritual packages in luxury spa suites.',
        responsibilities: [
          'Perform signature body rituals: exfoliating body polishes, detoxifying clay wraps, and aromatherapy hydrotherapy.',
          'Execute traditional and contemporary body massages: Swedish, Balinese, Aromatherapy, and Hot Stone.',
          'Prepare and maintain serene treatment suites: adjusting lighting, ambient temperature, and burning pure essential oils.',
          'Conduct guest health intake questionnaires, ensuring safety contraindications are strictly adhered to.',
          'Promote luxury spa product lines (ESPA, Elemis, Babor) maximizing retail guest conversion.',
        ],
        qualifications: [
          'Diploma in Spa Therapy (CIDESCO / CIBTAC / ITEC / VTCT Level 3).',
          '2–5+ years experience in 5-star hotel spas, luxury resorts, or cruise ships.',
        ],
        skills: [
          'Body wraps, polishes & hydrotherapy rituals',
          'Swedish, Aromatherapy & Hot Stone massages',
          'Luxury 5-star guest service etiquette',
          'Spa retail product recommendation (Elemis/ESPA)',
        ],
        experience: '2+ years in 5-star hotel spa or luxury resort.',
      },
      {
        title: 'Massage Therapist (Deep Tissue, Sports & Thai Massage)',
        badge: 'Therapeutic Body Specialist',
        salaryRange: '€2,800 – €4,600 / month + Tips',
        description:
          'Specializing in therapeutic deep tissue muscle release, sports recovery massage, trigger point therapy, and traditional Thai stretching massage.',
        responsibilities: [
          'Administer deep tissue massage targeting chronic muscle tension, knots, and myofascial restrictions.',
          'Perform sports pre/post-event recovery massages to enhance athletic mobility and reduce fatigue.',
          'Execute traditional floor or table Thai yoga massages utilizing assisted stretching and acupressure points.',
          'Maintain ergonomic therapist body mechanics to sustain power and endurance without strain.',
        ],
        qualifications: [
          'Certified Massage Therapist Diploma (minimum 500+ hours training).',
          '2+ years experience in sports clinics, luxury thermal spas, or wellness resorts.',
        ],
        skills: [
          'Deep tissue & myofascial trigger point therapy',
          'Sports recovery & athletic muscle release',
          'Traditional Thai yoga assisted stretching',
          'Ergonomic body mechanics & pressure control',
        ],
        experience: '2+ years dedicated therapeutic massage experience.',
      },
      {
        title: 'Wellness Therapist (Ayurveda, Sound Healing & Hammam)',
        badge: 'Holistic Mind-Body Lead',
        salaryRange: '€3,000 – €4,800 / month + Tips',
        description:
          'Leading holistic mind-body wellness: Ayurvedic Abhyanga and Shirodhara, traditional Turkish/Moroccan Hammam kessa scrubs, and Tibetan singing bowl sound healing.',
        responsibilities: [
          'Perform traditional Ayurvedic therapies: warm herbal oil Abhyanga massage and rhythmic Shirodhara oil flow.',
          'Administer authentic Turkish/Moroccan Hammam rituals: eucalyptus black soap foam washing and Kessa glove peeling.',
          'Conduct restorative Sound Bath meditation sessions using Tibetan singing bowls and chimes.',
          'Educate wellness guests on holistic lifestyle balance, breathwork, and herbal tea infusions.',
        ],
        qualifications: [
          'Certification in Ayurvedic Therapy, Hammam Rituals, or Holistic Sound Healing.',
          '2+ years in destination wellness retreats or luxury hammam spas.',
        ],
        skills: [
          'Ayurvedic Abhyanga & Shirodhara therapies',
          'Authentic Hammam foam washing & Kessa scrubs',
          'Tibetan singing bowl sound meditation',
          'Holistic lifestyle & relaxation guidance',
        ],
        experience: '2+ years in holistic wellness or destination retreat.',
      },
    ],
    keyResponsibilities: [
      'Delivering 5-star signature spa rituals, body exfoliations, and detoxifying wraps.',
      'Performing therapeutic body massages: Swedish, deep tissue, hot stone, and sports recovery.',
      'Executing specialized holistic therapies: Ayurvedic Shirodhara, Hammam scrubs, and sound healing.',
      'Creating serene, tranquil guest environments with personalized aromatherapy and music.',
      'Maintaining spotless hygiene, linen freshness, and adherence to medical contraindications.',
    ],
    qualifications: [
      'CIDESCO, CIBTAC, ITEC, or recognized International Diploma in Spa & Massage Therapy.',
      '2 to 5+ years of verified experience in 5-star hotel spas, thermal baths, or luxury cruise lines.',
      'Calm, grounded presence with exceptional hospitality manners and English fluency.',
      'High physical stamina and mastery of ergonomic therapist body mechanics.',
    ],
    requiredSkills: [
      'Deep Tissue & Therapeutic Myofascial Release',
      'Swedish, Balinese & Hot Stone Massage',
      'Ayurvedic Abhyanga & Shirodhara Rituals',
      'Authentic Hammam Foam Washing & Kessa Peeling',
      '5-Star Hospitality Guest Etiquette & Product Sales',
    ],
    careerOpportunities: [
      'Attractive remuneration (€2,800 – €4,800/month) with service charge allocations and direct tips.',
      'Complimentary 5-star resort accommodation, duty meals, flight tickets, and European work visas.',
      'Promotion track from Spa Therapist to Lead Therapist, Assistant Spa Manager, and Spa Director.',
      'Opportunities to work across breathtaking European Alpine wellness resorts, Swiss spas, and Mediterranean retreats.',
    ],
  },

  // =========================================================================
  // 5. MAKEUP & BRIDAL
  // =========================================================================
  {
    id: 'makeup-bridal',
    slug: 'makeup-bridal',
    title: 'Makeup & Bridal',
    shortTitle: 'Makeup & Bridal',
    route: '/services/beauty-and-care/makeup-bridal',
    icon: Smile,
    color: 'from-fuchsia-600 to-pink-600',
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    heroImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Definition Bridal Glamour, Airbrush Artistry, Editorial & Luxury Beauty Consulting',
    shortDescription:
      'Placing certified Makeup Artists, Bridal Glamour Specialists, and Luxury Beauty Consultants across wedding agencies, photography studios, and cosmetic flagship counters.',
    overview:
      'Our Makeup & Bridal division recruits professional makeup artists, high-definition bridal specialists, and luxury beauty advisors for destination wedding agencies, television/editorial photography studios, and prestigious cosmetic counters (MAC, Charlotte Tilbury, Dior) across the Netherlands, Germany, the UK, Italy, France, and Dubai. Artists master HD bridal makeup, airbrush foundation, contouring, lash application, and color harmony.',
    perksHighlights:
      'Generous event booking rates, wedding bonuses, cosmetic product discounts, masterclass sponsorships, and European work visa assistance.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,600 – €4,600/mo' },
      { label: 'Bridal & Studio Partners', value: '50+ Agencies' },
      { label: 'Top Cosmetic Brands', value: 'MAC, Dior, NARS' },
      { label: 'Visa Sponsorship', value: 'Guaranteed' },
    ],
    roles: [
      {
        title: 'Makeup Artist (Editorial, Fashion & Studio MUA)',
        badge: 'High Creative Demand',
        salaryRange: '€2,600 – €4,200 / month',
        description:
          'Creating high-definition makeup looks for fashion runways, commercial photoshoots, television productions, and special gala events with speed and precision.',
        responsibilities: [
          'Design makeup concepts aligned with fashion director mood boards and lighting conditions.',
          'Apply flawless high-definition (HD) foundation, contouring, highlighting, and blending.',
          'Execute dramatic eye makeup: cut-crease, winged liner, smokey eyes, and individual lash application.',
          'Perform airbrush makeup for long-lasting, sweat-proof full-coverage finishes.',
          'Maintain impeccable brush hygiene, UV-sterilizing palettes and disposable applicators.',
        ],
        qualifications: [
          'Diploma / Certificate in Professional Makeup Artistry from an accredited beauty academy.',
          '2+ years experience in photography studios, fashion shows, or cosmetic flagship stores.',
          'Comprehensive digital portfolio showcasing versatile makeup transformations.',
        ],
        skills: [
          'HD photography makeup & airbrush application',
          'Advanced contouring, strobing & color correction',
          'Creative editorial eye makeup & false lashes',
          'Sanitary makeup kit maintenance & hygiene',
        ],
        experience: '2+ years professional makeup artistry.',
      },
      {
        title: 'Bridal Makeup Artist (Destination Wedding & Glamour)',
        badge: 'Luxury Event Specialist',
        salaryRange: '€3,000 – €4,600 / month + Event Tips',
        description:
          'Specializing in bespoke bridal trials, waterproof long-lasting bridal makeup, dupatta/veil setting, and full wedding party glamour styling.',
        responsibilities: [
          'Conduct in-depth bridal consultation trials testing color palettes matching dress, jewelry, and theme.',
          'Apply 16-hour transfer-proof, tear-resistant bridal foundation and setting sprays.',
          'Style classic, soft glam, Arabian, European, and traditional Asian bridal makeup looks.',
          'Coordinate day-of wedding timelines, managing makeup for the bride, bridesmaids, and family.',
          'Provide calming emotional support and on-location touch-ups during photoshoots.',
        ],
        qualifications: [
          'Certified Bridal Makeup Master Diploma.',
          '3+ years dedicated bridal makeup experience with strong destination wedding portfolio.',
        ],
        skills: [
          '16-hour waterproof bridal makeup techniques',
          'Soft glam & dramatic bridal color palettes',
          'Veil, jewelry & dupatta draping coordination',
          'Crisis composure & wedding timeline management',
        ],
        experience: '3+ years specialized bridal makeup artistry.',
      },
      {
        title: 'Beauty Consultant / Cosmetic Brand Advisor',
        badge: 'Flagship Retail Lead',
        salaryRange: '€2,400 – €3,600 / month + Retail Commission',
        description:
          'Representing luxury cosmetic houses (Charlotte Tilbury, Estée Lauder, NARS) in high-end department stores, conducting live flash makeovers and driving product sales.',
        responsibilities: [
          'Deliver complimentary flash makeover consultations showcasing flagship brand products.',
          'Diagnose client undertones, skin types, and curate personalized makeup and skincare routines.',
          'Achieve monthly individual and counter sales targets, building a loyal repeating client book.',
          'Manage counter visual merchandising, tester hygiene, and new product launch promotions.',
        ],
        qualifications: [
          'Certificate in Makeup / Beauty Sales with 2+ years luxury retail cosmetic experience.',
        ],
        skills: [
          'Luxury cosmetic product knowledge & flash makeovers',
          'Color matching & undertone diagnosis',
          'Retail sales upselling & client relationship building',
          'Counter visual merchandising & hygiene',
        ],
        experience: '2+ years in luxury beauty or cosmetic retail.',
      },
    ],
    keyResponsibilities: [
      'Executing high-definition makeup for editorial photoshoots, television, and fashion events.',
      'Creating bespoke, long-lasting 16-hour waterproof bridal glamour for destination weddings.',
      'Applying airbrush foundation, precision contouring, strobing, and custom lash enhancements.',
      'Providing expert color consultations, skin undertone matching, and luxury cosmetic sales.',
      'Upholding the highest level of makeup tool sterilization and sanitary product dispensing.',
    ],
    qualifications: [
      'Accredited Diploma in Professional Makeup Artistry, Bridal Cosmetology, or Aesthetics.',
      '2 to 5+ years of verified experience with an impressive visual portfolio.',
      'Mastery of color theory, skin undertones, face sculpting, and diverse ethnic skin tones.',
      'Excellent interpersonal charm, punctuality, and English communication skills.',
    ],
    requiredSkills: [
      'HD Airbrush & Long-Wear Waterproof Bridal Makeup',
      'Advanced Face Contouring, Strobing & Color Theory',
      'Cut-Crease & Editorial Eye Artistry',
      'Luxury Cosmetic Brand Product Knowledge',
      'Hygiene Protocols & Brush Sanitation',
    ],
    careerOpportunities: [
      'Competitive earnings (€2,600 – €4,600/month) with high event booking bonuses and sales commissions.',
      'Full employer relocation: work permit visa sponsorship, flight tickets, and accommodation assistance.',
      'Promotion track from Counter Artist to Lead Makeup Designer, Bridal Director, and National Brand Ambassador.',
      'Opportunities in destination wedding hotspots (Lake Como, Santorini, French Riviera, Swiss Alps).',
    ],
  },
];
