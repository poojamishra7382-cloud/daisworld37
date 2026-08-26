import {
  Building2,
  Zap,
  Wrench,
  HardHat,
  Hammer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ConstructionRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface ConstructionDepartment {
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
  roles: ConstructionRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const constructionDepartments: ConstructionDepartment[] = [
  // =========================================================================
  // 1. CIVIL & STRUCTURAL
  // =========================================================================
  {
    id: 'civil-structural',
    slug: 'civil-structural',
    title: 'Civil & Structural',
    shortTitle: 'Civil & Structural',
    route: '/services/construction/civil-structural',
    icon: Building2,
    color: 'from-amber-600 to-yellow-500',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    tagline: 'Modern Mega-Structures, Commercial High-Rises & European Infrastructure Engineering',
    shortDescription:
      'Placing Civil Engineers, Structural Designers, Site Engineers, and Land Surveyors across high-profile infrastructure and civil construction projects.',
    overview:
      'Our Civil & Structural division connects qualified structural engineers, civil project engineers, and survey experts with top-tier international general contractors across the Netherlands, Germany, the UK, Poland, Saudi Arabia, and the UAE. Candidates lead complex foundation design, reinforced concrete casting, steel framework erection, BIM coordination, and civil infrastructure construction adhering to rigorous Eurocodes (EN 1990–1999) and international FIDIC standards.',
    perksHighlights:
      'Full employer visa sponsorship, site accommodation or living allowances, certified safety gear (PPE), transportation, and fast-track European permanent residency (PR) pathways.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€3,200 – €6,800/mo' },
      { label: 'Active Infrastructure Projects', value: '65+ Sites' },
      { label: 'Site Housing & Transport', value: '100% Provided' },
      { label: 'Visa Processing Timeline', value: '2 – 4 Months' },
    ],
    roles: [
      {
        title: 'Civil Engineer (Project & Infrastructure)',
        badge: 'High European Demand',
        salaryRange: '€3,400 – €5,400 / month',
        description:
          'Managing on-site civil works, earthworks, concrete structural execution, contractor supervision, project scheduling, and municipal compliance on large civil projects.',
        responsibilities: [
          'Review civil engineering drawings, structural blueprints, and technical specifications for execution readiness.',
          'Supervise on-site sub-contractors, concrete pouring, rebar placement, and ground compaction works.',
          'Prepare daily progress reports, material requirement schedules, and verify contractor billing claims.',
          'Ensure all structural activities strictly comply with municipal building codes and safety regulations.',
          'Coordinate with architects, MEP engineers, and structural consultants to resolve on-site technical RFIs.',
        ],
        qualifications: [
          'B.E. / B.Tech / M.Tech in Civil Engineering from an accredited university.',
          '2–5+ years of on-site civil engineering experience in commercial buildings or infrastructure.',
          'Working knowledge of AutoCAD, MS Project, and Primavera P6.',
          'Good command of English (German or Dutch is an added advantage).',
        ],
        skills: [
          'Site execution & concrete quality control',
          'AutoCAD & civil drawing interpretation',
          'Project scheduling (MS Project / Primavera)',
          'Subcontractor management & material estimation',
        ],
        experience: '2+ years of on-site civil construction experience.',
      },
      {
        title: 'Structural Engineer (Design & Analysis)',
        badge: 'Specialist Fast-Track',
        salaryRange: '€4,200 – €6,800 / month',
        description:
          'Designing reinforced concrete (RCC), precast elements, and structural steel framing using modern FEA modeling software adhering to Eurocode design codes.',
        responsibilities: [
          'Perform structural modeling, load calculations (wind, seismic, dead/live loads), and finite element analysis (FEA).',
          'Utilize advanced structural software (ETABS, SAP2000, STAAD.Pro, Tekla Structures, Revit Structure).',
          'Design steel connections, foundation footings, retaining walls, and pre-stressed concrete members.',
          'Review shop drawings, bar bending schedules (BBS), and structural steel fabrication packages.',
          'Conduct structural safety audits, site inspections, and structural integrity verification.',
        ],
        qualifications: [
          'B.Tech + M.Tech in Structural Engineering / Civil Engineering.',
          '3–6+ years of structural design and modeling experience.',
          'Proficiency with Eurocodes (EC2, EC3) or British Standards (BS EN).',
        ],
        skills: [
          'ETABS / STAAD.Pro / Tekla Structures',
          'Revit BIM structural modeling',
          'Eurocode structural calculations & seismic design',
          'Steel fabrication & connection design',
        ],
        experience: '3+ years of structural design analysis experience.',
      },
      {
        title: 'Site Engineer (Field Execution & QA)',
        badge: 'High Placement Volume',
        salaryRange: '€3,000 – €4,500 / month',
        description:
          'Directing field construction crews, setting out grid lines, monitoring material quality, ensuring pour card sign-offs, and enforcing zero-defect construction.',
        responsibilities: [
          'Set out building grid lines, column levels, and structural benchmarks using optical and laser levels.',
          'Supervise daily formwork alignment, rebar cover inspection, and slump cone concrete testing.',
          'Maintain meticulous site daily logbooks, labor strength registers, and machinery utilization logs.',
          'Ensure strict compliance with environmental protection, waste disposal, and safety hazard mitigations.',
          'Coordinate concrete batching plant deliveries and testing cube crushing compressive strength.',
        ],
        qualifications: [
          'Diploma or Degree in Civil Engineering.',
          '2+ years of continuous on-site field execution experience.',
          'Hands-on competency in total stations, auto-levels, and pour card inspections.',
        ],
        skills: [
          'Formwork & rebar inspection checklists',
          'Concrete batching & slump testing',
          'Total Station & leveling instruments',
          'Field workforce coordination & daily logging',
        ],
        experience: '2+ years field site engineering experience.',
      },
      {
        title: 'Land Surveyor / Geodetic Surveyor',
        badge: 'Precision Technical Role',
        salaryRange: '€3,200 – €4,800 / month',
        description:
          'Performing high-precision topographical surveys, boundary demarcations, GPS/GNSS site mapping, and 3D laser scanning for civil engineering projects.',
        responsibilities: [
          'Operate robotic Total Stations, GNSS/RTK GPS receivers, and 3D LiDAR laser scanners.',
          'Establish primary geodetic control networks, benchmark elevations, and road alignment centerlines.',
          'Process raw field survey data, generate digital elevation models (DEM), and produce contour maps in Civil 3D.',
          'Perform periodic structural settlement monitoring and deformation surveys for deep excavations.',
          'Verify as-built coordinates against master engineering design files for handover sign-off.',
        ],
        qualifications: [
          'Diploma / Degree in Geomatics, Surveying Engineering, or Civil Engineering.',
          '2+ years of field surveying experience in civil infrastructure, roads, or high-rise projects.',
          'Mastery in Leica, Trimble, or Topcon Total Stations and Civil 3D software.',
        ],
        skills: [
          'Robotic Total Station & RTK GPS operation',
          'AutoCAD Civil 3D & topographical mapping',
          'Structural settlement & deformation monitoring',
          'Point cloud processing & 3D scanning',
        ],
        experience: '2+ years in land and geodetic surveying.',
      },
    ],
    keyResponsibilities: [
      'Executing civil works, deep foundation piling, structural concrete framing, and steel erection.',
      'Performing accurate structural load analysis, BIM modeling, and engineering drafting.',
      'Conducting rigorous geodetic land surveys, setting out benchmarks, and deformation monitoring.',
      'Enforcing strict compliance with European building codes (Eurocodes) and quality standards.',
      'Coordinating cross-functional project teams including MEP, safety officers, and municipal inspectors.',
    ],
    qualifications: [
      'Degree or Diploma in Civil Engineering, Structural Engineering, or Geomatic Surveying.',
      'Minimum 2 to 5+ years of verified on-site civil construction or design engineering experience.',
      'Knowledge of international building standards, AutoCAD, BIM Revit, or structural analysis software.',
      'Good communication in English; willingness to learn basic European site languages.',
    ],
    requiredSkills: [
      'Structural Analysis (ETABS / STAAD / Tekla)',
      'Site Execution & Concrete Quality Control',
      'AutoCAD Civil 3D & Total Station Surveying',
      'BIM Coordination & Blueprints Interpretation',
      'Eurocode (EN) Standards & FIDIC Documentation',
    ],
    careerOpportunities: [
      'Attractive European tax-compliant salaries (€3,200 – €6,800/month) with site allowances and overtime.',
      'Complete employer relocation: work permit sponsorship, flight tickets, and furnished site accommodation.',
      'Accelerated promotion tracks from Site Engineer to Senior Project Engineer, Project Manager, and Construction Director.',
      'Experience on high-impact European civil projects: offshore wind turbine foundations, rail tunnels, and commercial skyscrapers.',
    ],
  },

  // =========================================================================
  // 2. ELECTRICAL
  // =========================================================================
  {
    id: 'electrical',
    slug: 'electrical',
    title: 'Electrical',
    shortTitle: 'Electrical',
    route: '/services/construction/electrical',
    icon: Zap,
    color: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Voltage Sub-Stations, Industrial Automation & Smart Building Electrical Installations',
    shortDescription:
      'Connecting Electrical Engineers, Certified Industrial Electricians, and Electrical Supervisors with leading European building and industrial contracting firms.',
    overview:
      'Our Electrical construction division recruits qualified electrical design engineers, high/low voltage site supervisors, and certified commercial electricians for major infrastructure, data center, solar farm, and industrial facility projects across the Netherlands, Germany, the UK, and the Gulf. Professionals ensure safe power distribution, switchgear testing, cable containment, and intelligent building automation (BMS).',
    perksHighlights:
      'Complimentary accommodation, toolkits and safety PPE provided, certified electrical safety training (NEN 3140 / IEC 60364), overtime pay, and European work visa.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€3,000 – €5,800/mo' },
      { label: 'Active Industrial Projects', value: '50+ Locations' },
      { label: 'Safety PPE & Tools', value: '100% Provided' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Electrical Engineer (MEP & Power Distribution)',
        badge: 'High European Demand',
        salaryRange: '€3,800 – €5,800 / month',
        description:
          'Designing and executing electrical power distribution, transformer sub-stations, switchgear panels, backup UPS/generators, and low-current fire/security systems.',
        responsibilities: [
          'Design single-line diagrams (SLD), cable sizing calculations, and short-circuit load flow analysis.',
          'Supervise installation and commissioning of MV/LV transformers, switchgears, and motor control centers (MCC).',
          'Coordinate electrical conduit routings with HVAC and plumbing services in 3D Navisworks BIM models.',
          'Review electrical submittals, testing & commissioning (T&C) method statements, and factory acceptance test (FAT) reports.',
          'Ensure strict compliance with IEC 60364, IEEE, and European electrical safety standards (NEN 1010/3140).',
        ],
        qualifications: [
          'B.E. / B.Tech in Electrical / Electrical & Electronics Engineering.',
          '3–5+ years in commercial, industrial, or data center electrical engineering.',
          'Proficiency with ETAP, Dialux, AutoCAD Electrical, and Revit MEP.',
        ],
        skills: [
          'MV/LV power distribution & switchgear design',
          'ETAP / Dialux / AutoCAD Electrical',
          'Testing & Commissioning (T&C) protocols',
          'IEC / NEN standards compliance',
        ],
        experience: '3+ years in electrical project engineering.',
      },
      {
        title: 'Electrician (Commercial & Industrial)',
        badge: 'High Hiring Volume',
        salaryRange: '€2,600 – €3,800 / month',
        description:
          'Installing cable trays, pulling heavy power cables, wiring distribution boards (DB), connecting lighting control panels, and troubleshooting electrical systems.',
        responsibilities: [
          'Install galvanized cable trays, ladder racks, unistrut channels, and PVC/GI conduits.',
          'Pull, lay, gland, and terminate armored power and control cables (XLPE, SWA, Fire-Rated).',
          'Wire distribution boards, circuit breakers (MCB, MCCB, RCD), contactors, and lighting fixtures.',
          'Perform insulation resistance (Megger), earth loop impedance, and continuity testing on electrical circuits.',
          'Adhere strictly to Lock-Out/Tag-Out (LOTO) safety protocols and high-voltage safety procedures.',
        ],
        qualifications: [
          'ITI / Diploma in Electrical / Certified Electrician Wireman license.',
          '2+ years of experience in commercial, residential, or industrial electrical wiring.',
          'Ability to read electrical schematic drawings and cable schedules accurately.',
        ],
        skills: [
          'Cable tray fabrication & conduit bending',
          'Cable pulling, glanding & DB termination',
          'Megger testing & continuity verification',
          'Lock-Out / Tag-Out (LOTO) electrical safety',
        ],
        experience: '2+ years industrial or commercial electrician experience.',
      },
      {
        title: 'Electrical Supervisor / Foreman',
        badge: 'Leadership Role',
        salaryRange: '€3,200 – €4,600 / month',
        description:
          'Leading on-site electrical teams, allocating daily conduit and cable pulling tasks, conducting quality inspections, and ensuring timely milestone delivery.',
        responsibilities: [
          'Supervise electrical installation crews, verify daily work quantities, and maintain tool inventories.',
          'Conduct pre-work toolbox talks on electrical hazard prevention and verify permits to work (PTW).',
          'Coordinate site cable inspections with clients’ QA/QC inspectors and electrical consultants.',
          'Ensure accurate as-built drawing markups and material requisition tracking against BOQ.',
        ],
        qualifications: [
          'Diploma in Electrical Engineering with certified supervisory credentials.',
          '3–5+ years in electrical contracting with at least 1+ years in a foreman / supervisory role.',
        ],
        skills: [
          'Electrical team leadership & daily task scheduling',
          'Permit-to-Work (PTW) & toolbox safety talks',
          'Quality inspection & punch-list clearance',
          'Material staging & tool management',
        ],
        experience: '3+ years total experience with 1+ years in team leadership.',
      },
    ],
    keyResponsibilities: [
      'Installation, wiring, and commissioning of MV/LV power systems, lighting, and switchboards.',
      'Performing electrical testing: insulation resistance, earth resistance, and load balancing.',
      'Ensuring strict adherence to European electrical safety codes (IEC, NEN, VDE) and LOTO regulations.',
      'Reading and interpreting complex electrical schematics, single-line diagrams, and BIM layouts.',
      'Maintaining spotless site safety records and coordinating with mechanical and civil contractors.',
    ],
    qualifications: [
      'Degree, Diploma, or ITI Certificate in Electrical Engineering / Electrical Trade.',
      '2 to 5+ years of verified experience in commercial buildings, factories, or infrastructure projects.',
      'Familiarity with European electrical wiring standards (NEN 1010/3140 or British BS 7671).',
      'Basic to intermediate English communication for multinational construction environments.',
    ],
    requiredSkills: [
      'Power Distribution & Cable Termination',
      'Cable Tray Fabrication & Conduit Installation',
      'Testing & Commissioning (Megger / Earth Resistance)',
      'Electrical Schematics & SLD Blueprints',
      'Lock-Out / Tag-Out (LOTO) & Safety Protocols',
    ],
    careerOpportunities: [
      'Competitive monthly earnings (€2,600 – €5,800/mo) with overtime pay and generous weekend shift bonuses.',
      'Comprehensive employer support: work permit visa, safety certifications, flight tickets, and accommodation.',
      'Career pathways from Electrician to Electrical Foreman, MEP Site Engineer, and Electrical Project Manager.',
      'High demand in European data center boom (Amsterdam, Frankfurt, Dublin) and renewable solar energy farms.',
    ],
  },

  // =========================================================================
  // 3. PLUMBING & HVAC
  // =========================================================================
  {
    id: 'plumbing-hvac',
    slug: 'plumbing-hvac',
    title: 'Plumbing & HVAC',
    shortTitle: 'Plumbing & HVAC',
    route: '/services/construction/plumbing-hvac',
    icon: Wrench,
    color: 'from-cyan-600 to-teal-600',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    heroImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop',
    tagline: 'Precision Mechanical Services, Ventilation, Chilled Water Systems & Sanitary Plumbing',
    shortDescription:
      'Recruiting HVAC Engineers, certified HVAC Technicians, and Industrial Plumbers for commercial complexes, hospitals, and residential towers.',
    overview:
      'Our Plumbing & HVAC division specializes in recruiting certified mechanical technicians, duct fabricators, chiller specialists, and sanitary plumbers for commercial buildings, healthcare facilities, data centers, and residential developments across the Netherlands, Germany, the UK, and the Middle East. Technicians install energy-efficient VRF/VRV systems, chilled water networks, fire hydrants, and potable water distribution.',
    perksHighlights:
      'Furnished company accommodation, duty transport, specialized pipe & HVAC tool sets, certified European F-Gas refrigeration certification support, and work visa.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€2,800 – €5,600/mo' },
      { label: 'HVAC & MEP Openings', value: '70+ Vacancies' },
      { label: 'Tools & Accommodation', value: '100% Provided' },
      { label: 'Visa Approval Rate', value: '99%' },
    ],
    roles: [
      {
        title: 'Plumber (Commercial, Industrial & Sanitary)',
        badge: 'High European Hiring',
        salaryRange: '€2,600 – €3,800 / month',
        description:
          'Installing potable water supply lines, drainage pipes, sanitary fixtures, fire suppression sprinkler networks, and hydraulic booster pump sets in buildings.',
        responsibilities: [
          'Measure, cut, bend, and join copper, PPR, PEX, HDPE, and cast-iron plumbing pipes.',
          'Install sanitary fixtures (toilets, urinals, vanity basins, bathtubs) with watertight fittings.',
          'Execute hydro-static pressure testing on water supply networks to verify leak-proof integrity.',
          'Assemble drainage waste vent (DWV) systems, storm-water sump pumps, and grease traps.',
          'Install and service solar water heaters, calorifiers, and domestic water filtration plants.',
        ],
        qualifications: [
          'ITI / Diploma in Plumbing / Mechanical Engineering.',
          '2+ years of experience in commercial plumbing, high-rise residential, or industrial piping.',
          'Proficiency with pipe threading machines, electro-fusion welders, and pressure testing gauges.',
        ],
        skills: [
          'PPR / PEX / Copper / HDPE pipe jointing',
          'Hydrostatic pressure testing & leak detection',
          'Sanitary ware & fixture installation',
          'Drainage & stormwater DWV systems',
        ],
        experience: '2+ years in commercial plumbing or sanitary installations.',
      },
      {
        title: 'HVAC Technician (Chillers, VRF, Ducting & AC)',
        badge: 'Critical Shortage / Fast-Track',
        salaryRange: '€2,800 – €4,200 / month',
        description:
          'Installing, servicing, and commissioning central air conditioning units, chillers, air handling units (AHU), fan coil units (FCU), VRV/VRF systems, and ductwork.',
        responsibilities: [
          'Install GI rectangular and spiral ductwork, dampers, air grilles, and acoustic insulation.',
          'Mount, pipe, and braze copper refrigerant lines for VRF/VRV multi-split AC units.',
          'Perform vacuum leak testing, refrigerant charging (R410A, R32), and superheat/subcooling checks.',
          'Service industrial chillers, cooling towers, chilled water circulation pumps, and heat exchangers.',
          'Troubleshoot electrical control panels, thermostats, VAV boxes, and inverter compressors.',
        ],
        qualifications: [
          'Diploma / ITI in Refrigeration & Air Conditioning (RAC) or Mechanical Engineering.',
          '2–4+ years of hands-on experience in HVAC installation, maintenance, or commissioning.',
          'Understanding of F-Gas environmental regulations and oxy-acetylene copper brazing.',
        ],
        skills: [
          'Refrigerant charging, vacuuming & leak testing',
          'Copper pipe oxy-acetylene brazing',
          'Chiller & AHU/FCU mechanical servicing',
          'Duct fabrication, insulation & air balancing',
        ],
        experience: '2+ years in central HVAC / VRF / Chiller installations.',
      },
      {
        title: 'HVAC Engineer (Design, MEP & Commissioning)',
        badge: 'Senior Mechanical Role',
        salaryRange: '€3,800 – €5,600 / month',
        description:
          'Designing HVAC heating and cooling loads, selecting equipment (chillers, AHUs, pumps), coordinating 3D MEP duct routing, and conducting Testing, Adjusting & Balancing (TAB).',
        responsibilities: [
          'Calculate building thermal cooling/heating loads using HAP (Hourly Analysis Program) or Trace 700.',
          'Design ventilation duct layouts, smoke extraction systems, and hydronic chilled water piping.',
          'Coordinate MEP clashes in Revit BIM models with structural and architectural teams.',
          'Lead Testing, Adjusting, and Balancing (TAB) air volume measurements using anemometers and hood balancers.',
          'Ensure compliance with European energy efficiency standards (ASHRAE, EN 13779, LEED).',
        ],
        qualifications: [
          'B.E. / B.Tech in Mechanical Engineering.',
          '3–5+ years of HVAC design, project engineering, or commissioning experience.',
          'Proficiency with HAP, Revit MEP, AutoCAD, and duct sizing software.',
        ],
        skills: [
          'HVAC thermal load calculations (HAP)',
          'Revit MEP & 3D clash coordination',
          'Testing, Adjusting & Balancing (TAB)',
          'Hydronic chilled water & ventilation design',
        ],
        experience: '3+ years in HVAC mechanical project engineering.',
      },
    ],
    keyResponsibilities: [
      'Installation of sanitary piping, drainage systems, water boosters, and firefighting networks.',
      'Mounting, refrigerant brazing, and commissioning of central chillers, AHUs, FCUs, and VRF systems.',
      'Conducting hydrostatic pressure tests, vacuum leak checks, and Air Flow Balancing (TAB).',
      'Ensuring compliance with European HVAC environmental codes (F-Gas, ASHRAE, EN 12056).',
      'Coordinating with electrical and civil contractors for seamless MEP integration.',
    ],
    qualifications: [
      'Degree, Diploma, or ITI in Mechanical Engineering / RAC (Refrigeration & Air Conditioning) / Plumbing.',
      '2 to 5+ years of verified on-site experience in commercial, healthcare, or industrial MEP projects.',
      'Familiarity with modern energy-efficient HVAC technology and safety regulations.',
      'Functional English communication for on-site technical coordination.',
    ],
    requiredSkills: [
      'HVAC Ducting & Mechanical Ventilation',
      'Chiller / AHU / VRF Installation & Commissioning',
      'Copper Pipe Brazing & Refrigerant Charging',
      'Plumbing Pipe Jointing (PEX / PPR / Copper)',
      'Hydrostatic & TAB Air Balancing Protocols',
    ],
    careerOpportunities: [
      'Competitive international salaries (€2,800 – €5,600/month) with overtime allowances and site benefits.',
      'Expat relocation package: work permits, travel tickets, accommodation, and safety tool sets.',
      'Promotion ladder from HVAC Technician to MEP Site Engineer, Commissioning Manager, and MEP Project Director.',
      'Expanding job markets across European green transition projects (Heat Pump installations & energy retrofits).',
    ],
  },

  // =========================================================================
  // 4. SITE MANAGEMENT & SAFETY
  // =========================================================================
  {
    id: 'site-management-safety',
    slug: 'site-management-safety',
    title: 'Site Management & Safety',
    shortTitle: 'Management & Safety',
    route: '/services/construction/site-management-safety',
    icon: HardHat,
    color: 'from-orange-600 to-red-600',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    tagline: 'Zero-Harm Construction Safety, Rigorous QA/QC Inspections & Operational Site Leadership',
    shortDescription:
      'Connecting certified Site Managers, Construction Supervisors, HSE Safety Officers, and QA/QC Engineers with international general contractors.',
    overview:
      'Our Site Management & Safety division sources experienced construction managers, certified NEBOSH HSE inspectors, and quality assurance engineers for high-stakes infrastructure, residential, and industrial construction projects across the Netherlands, Germany, the UK, and the Gulf. These leaders enforce zero-harm safety cultures, ensure FIDIC contract compliance, manage subcontractors, and conduct stringent material quality audits.',
    perksHighlights:
      'High executive salaries, company vehicle or transport allowance, furnished accommodation, health coverage, performance bonuses, and European work visa.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€3,400 – €7,500/mo' },
      { label: 'Management Openings', value: '45+ Key Roles' },
      { label: 'NEBOSH & VCA Certified', value: '100% Compliant' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Site Manager / Construction Project Manager',
        badge: 'Senior Leadership Lead',
        salaryRange: '€4,800 – €7,500 / month',
        description:
          'Directing entire on-site construction operations, managing project budgets, coordinating multiple subcontractors, resolving client RFIs, and delivering milestones on time.',
        responsibilities: [
          'Oversee all civil, structural, MEP, and finishing operations on multi-million Euro project sites.',
          'Manage master project timelines using Primavera P6 / MS Project and enforce critical path progress.',
          'Chair weekly client progress meetings, resolve subcontractor disputes, and review cost variations.',
          'Ensure site operations strictly comply with national building regulations, planning permits, and safety laws.',
          'Approve monthly contractor progress payment valuations and material procurement forecasts.',
        ],
        qualifications: [
          'Bachelor’s / Master’s Degree in Civil Engineering, Construction Management, or Architecture.',
          '5–10+ years of construction experience including 2+ years as Site Manager on large projects.',
          'Proven record in FIDIC contracts, subcontractor management, and P&L accountability.',
        ],
        skills: [
          'Full-site construction leadership & P&L control',
          'FIDIC contract administration & dispute resolution',
          'Primavera P6 / MS Project critical path scheduling',
          'Subcontractor orchestration & client diplomacy',
        ],
        experience: '5+ years experience in on-site construction project management.',
      },
      {
        title: 'Construction Supervisor / Site Foreman',
        badge: 'Operations Track',
        salaryRange: '€3,200 – €4,800 / month',
        description:
          'Supervising daily trade workforce, machinery allocation, formwork/rebar execution pacing, and ensuring work aligns with approved architectural and structural drawings.',
        responsibilities: [
          'Direct daily activities of trade crews (masons, carpenters, steel fixers, electricians, plumbers).',
          'Inspect formwork shuttering, scaffolding stability, and concrete pour preparation before sign-off.',
          'Track daily machinery productivity (cranes, excavators, concrete pumps) and fuel consumption logs.',
          'Enforce strict site housekeeping, PPE wearing compliance, and prompt defect rectification.',
        ],
        qualifications: [
          'Diploma in Civil / Mechanical Engineering or Construction Management.',
          '3–5+ years in on-site construction supervision.',
        ],
        skills: [
          'Workforce allocation & trade supervision',
          'Drawing interpretation & field setting out',
          'Scaffolding inspection & crane coordination',
          'Daily progress logging & punch-list clearance',
        ],
        experience: '3+ years in field construction supervision.',
      },
      {
        title: 'Safety Officer / HSE Inspector (NEBOSH / IOSH / VCA)',
        badge: 'Critical Safety Shortage',
        salaryRange: '€3,400 – €5,200 / month',
        description:
          'Enforcing zero-accident health & safety protocols, conducting daily site safety hazard audits, issuing Permits-to-Work (PTW), and leading accident prevention training.',
        responsibilities: [
          'Conduct daily site risk assessments, safety hazard walkthroughs, and issue corrective action notices.',
          'Manage Permit-to-Work (PTW) systems for hot works, confined spaces, and high-altitude working.',
          'Inspect scaffolding stability, crane lifting rigging gear, and electrical temporary boards daily.',
          'Lead mandatory site induction training and daily morning toolbox talks for all new workers.',
          'Investigate near-misses and safety incidents, compiling detailed root-cause analysis (RCA) reports.',
        ],
        qualifications: [
          'NEBOSH IGC (International General Certificate) / IOSH / European VCA-VOL certification.',
          'Degree / Diploma with 2–5+ years of dedicated HSE safety experience on construction sites.',
          'Sound knowledge of OSHA, European HSE legislation, and ISO 45001 safety frameworks.',
        ],
        skills: [
          'NEBOSH / OSHA / VCA safety compliance',
          'Risk Assessment & Method Statements (RAMS)',
          'Permit-to-Work (PTW) & Scaffolding safety audits',
          'Incident investigation & root cause analysis (RCA)',
        ],
        experience: '2+ years dedicated construction HSE safety experience.',
      },
      {
        title: 'QA/QC Engineer (Civil, Structural & MEP Quality)',
        badge: 'Quality Assurance Specialist',
        salaryRange: '€3,600 – €5,400 / month',
        description:
          'Ensuring all building materials, concrete pours, welds, and installations strictly meet project specifications, ISO 9001 quality plans, and Eurocode standards.',
        responsibilities: [
          'Formulate Project Quality Plans (PQP) and Inspection and Test Plans (ITP) for all construction stages.',
          'Inspect incoming raw materials (rebar, cement, pipes, structural steel) and verify Mill Test Certificates (MTC).',
          'Witness concrete cube compressive testing, non-destructive testing (NDT), and weld inspections.',
          'Issue Non-Conformance Reports (NCR) for defective work and oversee remedial rectification actions.',
          'Compile final QA/QC documentation dossiers and as-built test certificates for client project handover.',
        ],
        qualifications: [
          'B.E. / B.Tech in Civil / Mechanical Engineering.',
          '3–5+ years of dedicated QA/QC experience on construction sites.',
          'CSWIP / NDT Level II or Lead Auditor ISO 9001 certification is an added advantage.',
        ],
        skills: [
          'Inspection & Test Plans (ITP) & Material verification',
          'Non-Conformance Report (NCR) management',
          'NDT inspection & concrete compressive testing',
          'ISO 9001 Quality Management Systems',
        ],
        experience: '3+ years in construction QA/QC engineering.',
      },
    ],
    keyResponsibilities: [
      'Directing overall site construction operations, project scheduling, and contractor coordination.',
      'Enforcing strict NEBOSH, OSHA, and European VCA health, safety, and environmental (HSE) standards.',
      'Conducting rigorous material inspections, compressive cube tests, and ISO 9001 QA/QC audits.',
      'Managing Permits-to-Work (PTW), risk assessments (RAMS), and accident prevention protocols.',
      'Delivering multi-million Euro construction projects on time, within budget, and to international quality standards.',
    ],
    qualifications: [
      'Degree or Diploma in Civil Engineering, Construction Management, HSE Safety, or Quality Engineering.',
      '2 to 8+ years of proven on-site construction management, safety officer, or QA/QC experience.',
      'Certified credentials: NEBOSH IGC, IOSH, VCA-VOL, or ISO 9001/45001 Lead Auditor.',
      'Strong leadership, English communication, and high crisis-management capability.',
    ],
    requiredSkills: [
      'Construction Project Management (PMP / FIDIC)',
      'NEBOSH HSE Safety & Risk Assessment (RAMS)',
      'Quality Assurance & Inspection Test Plans (ITP)',
      'Permit-to-Work (PTW) & Scaffolding Safety',
      'Primavera P6 Scheduling & Contractor Coordination',
    ],
    careerOpportunities: [
      'High international management salaries (€3,400 – €7,500/month) with site allowances and vehicle perks.',
      'Complete expat relocation: work permits, travel tickets, family visa sponsorship, and private housing.',
      'Career advancement from Site Supervisor to Project Director, Regional HSE Head, and Country Operations Director.',
      'Global credentials and recognition on prestigious European civil infrastructure and skyscraper projects.',
    ],
  },

  // =========================================================================
  // 5. SKILLED TRADES & FINISHING
  // =========================================================================
  {
    id: 'skilled-trades-finishing',
    slug: 'skilled-trades-finishing',
    title: 'Skilled Trades & Finishing',
    shortTitle: 'Trades & Finishing',
    route: '/services/construction/skilled-trades-finishing',
    icon: Hammer,
    color: 'from-amber-700 to-stone-600',
    badgeColor: 'bg-stone-50 text-stone-700 border-stone-200',
    heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    tagline: 'Master Craftsmanship, Architectural Finishing, Precision Carpentry & Structural Welding',
    shortDescription:
      'Placing certified Masons, Formwork Carpenters, Commercial Painters, Structural Welders, and Tile Setters across European construction developments.',
    overview:
      'Our Skilled Trades & Finishing division connects experienced Indian and international craftspeople with European and global construction contractors across the Netherlands, Germany, Poland, the UK, and the Gulf. Skilled trades are the core hands-on workforce transforming architectural blueprints into pristine structural reality: from flawless brick masonry and precision formwork carpentry to certified 6G pipe welding and luxury marble tiling.',
    perksHighlights:
      'Complimentary company accommodation, free site transport, work permit visa sponsorship, professional tool kits, safety boots & PPE, and paid overtime.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€2,400 – €3,800/mo' },
      { label: 'Active Trade Openings', value: '200+ Jobs' },
      { label: 'PPE & Accommodation', value: '100% Provided' },
      { label: 'Visa Sponsorship', value: 'Guaranteed' },
    ],
    roles: [
      {
        title: 'Mason (Block, Brick, Plaster & Concrete)',
        badge: 'High Hiring Volume',
        salaryRange: '€2,400 – €3,200 / month',
        description:
          'Laying bricks, AAC lightweight blocks, stone masonry, applying internal/external cement plaster, and leveling screed concrete floors with speed and alignment precision.',
        responsibilities: [
          'Lay clay bricks, concrete hollow blocks, and AAC blocks using plumb line, spirit level, and mortar trowels.',
          'Apply smooth internal cement plastering and external sand-faced waterproof stucco rendering.',
          'Mix mortar batches to exact ratios of cement, sand, and waterproofing admixtures.',
          'Cast concrete lintels, sill slabs, and repair concrete honeycombing defects.',
          'Read basic masonry blueprints and maintain straight alignment, vertical plumb, and uniform mortar joints.',
        ],
        qualifications: [
          '10th Pass / ITI Mason Trade Certificate or proven on-site masonry apprenticeship.',
          '2+ years of verified bricklaying, block work, or plastering experience.',
          'High physical stamina, speed, and accuracy in wall construction.',
        ],
        skills: [
          'Bricklaying, block work & plumb alignment',
          'Internal & external cement plastering',
          'Mortar mixing & screed floor leveling',
          'Blueprint interpretation & joint tooling',
        ],
        experience: '2+ years practical masonry experience.',
      },
      {
        title: 'Carpenter (Formwork & Shuttering / Finishing)',
        badge: 'High European Demand',
        salaryRange: '€2,600 – €3,600 / month',
        description:
          'Constructing timber and steel formwork shuttering for concrete columns, slabs, and beams, as well as installing architectural doors, windows, and drywall partitions.',
        responsibilities: [
          'Erect modular formwork systems (Doka, Peri, Meva) and traditional plywood shuttering for concrete pours.',
          'Install vertical props, walers, tie rods, and scaffolding bracing to withstand wet concrete pressure.',
          'Fabricate and install wooden door frames, fire-rated timber doors, baseboards, and acoustic ceiling panels.',
          'Install gypsum board drywalls, metal stud framing, and suspended false ceiling grids.',
          'Safely operate power saws, nail guns, router machines, and joinery hand tools.',
        ],
        qualifications: [
          'ITI Carpenter Certificate or verified formwork / joinery experience.',
          '2+ years of commercial formwork or finishing carpentry experience.',
        ],
        skills: [
          'System formwork (Doka / Peri) & shuttering',
          'Drywall metal stud & gypsum installation',
          'Door hanging, lock fitting & joinery finishing',
          'Safe power tool & circular saw operation',
        ],
        experience: '2+ years in formwork or finishing carpentry.',
      },
      {
        title: 'Painter (Commercial, Airless Spray & Waterproofing)',
        badge: 'Fast Placement Track',
        salaryRange: '€2,400 – €3,200 / month',
        description:
          'Surface preparation, wall putty application, operating airless spray painting units, rolling acrylic finishes, and applying epoxy floor coatings in buildings.',
        responsibilities: [
          'Prepare wall surfaces: sanding, scraping, applying primer, wall putty, and sealant coats.',
          'Operate commercial airless spray pumps (Graco / Wagner) for rapid interior and exterior wall coating.',
          'Apply decorative texture finishes, enamel coats on metalwork, and stain/varnish on architectural woodwork.',
          'Apply industrial epoxy floor coatings in basements, warehouses, and hospital corridors.',
          'Perform waterproofing membrane coatings on rooftops, balconies, and wet areas.',
        ],
        qualifications: [
          'Certificate / Prior experience in commercial or residential painting.',
          '2+ years experience in wall painting, spray painting, or surface finishing.',
        ],
        skills: [
          'Airless spray painting pump operation',
          'Wall putty sanding & surface preparation',
          'Epoxy floor coating & waterproofing membranes',
          'Color mixing & precision edge masking',
        ],
        experience: '2+ years commercial painting experience.',
      },
      {
        title: 'Welder (6G, TIG / MIG / Arc & Structural Steel)',
        badge: 'Certified Specialist Role',
        salaryRange: '€2,800 – €3,800 / month',
        description:
          'Performing certified structural steel welding, 6G pipe welding, TIG/MIG/SMAW fabrication, and fitting steel girders, trusses, and industrial pipeline networks.',
        responsibilities: [
          'Execute SMAW (Stick), GMAW (MIG), and GTAW (TIG) welds in 3G, 4G, and 6G positions.',
          'Weld heavy structural steel beams, column base plates, roof trusses, and crane runway girders.',
          'Perform pipe welding on carbon steel and stainless-steel pipes meeting radiographic NDT quality standards.',
          'Operate oxy-acetylene cutting torches, plasma cutters, and angle grinders safely.',
          'Read welding symbols on fabrication blueprints and comply with WPS (Welding Procedure Specifications).',
        ],
        qualifications: [
          'ITI Welder Certificate with 3G/4G/6G Welder Qualification Test (WQT) certification (AWS / ASME / EN ISO 9606).',
          '2–4+ years of structural or pipe welding experience.',
        ],
        skills: [
          '6G Pipe welding (TIG / SMAW / MIG)',
          'Structural steel fabrication & joint fit-up',
          'WPS compliance & X-Ray/NDT weld quality',
          'Oxy-fuel torch & plasma cutting',
        ],
        experience: '2+ years certified welding experience.',
      },
      {
        title: 'Tiler & Marble Mason (Ceramic, Porcelain & Granite)',
        badge: 'Luxury Finish Specialist',
        salaryRange: '€2,600 – €3,500 / month',
        description:
          'Cutting, laying, and grouting ceramic, porcelain, mosaic, marble, and granite tiles on floors, walls, and luxury bathrooms with laser-straight joints.',
        responsibilities: [
          'Prepare substrate screeds, apply waterproof slurry coats, and set out tile grid lines using laser levels.',
          'Cut large-format porcelain tiles and natural granite slabs using electric wet-tile saws and manual tile cutters.',
          'Apply tile adhesive with notched trowels ensuring 100% adhesive coverage and zero hollow spots.',
          'Align tiles using leveling spacer clips for completely flat, lip-free floor and wall surfaces.',
          'Apply epoxy and cementitious tile grouts, silicone sealants, and polish natural marble surfaces.',
        ],
        qualifications: [
          'ITI / Apprenticeship in Tiling, Marble Masonry, or Construction Trade.',
          '2+ years of tile laying experience in commercial or residential buildings.',
        ],
        skills: [
          'Large-format porcelain & marble tile laying',
          'Wet-tile saw cutting & miter 45-degree edging',
          'Laser leveling & tile leveling spacer systems',
          'Epoxy grouting & silicone caulking',
        ],
        experience: '2+ years professional tile and marble setting experience.',
      },
    ],
    keyResponsibilities: [
      'Executing high-precision brickwork, block masonry, and smooth interior/exterior plaster rendering.',
      'Erecting robust system formwork shuttering (Doka, Peri) and architectural finish carpentry.',
      'Performing certified structural and pipe welding (3G/4G/6G) meeting strict radiographic NDT standards.',
      'Applying flawless airless spray paint, waterproofing coatings, and luxury marble/porcelain tiling.',
      'Adhering to international workplace safety, PPE wearing, and tool maintenance standards.',
    ],
    qualifications: [
      'ITI Trade Certificate, Vocational Diploma, or documented apprenticeship in relevant skilled trade.',
      '2 to 5+ years of verified practical experience on commercial, industrial, or residential construction sites.',
      'High craftsmanship standards, speed, accuracy, and physical stamina.',
      'Basic English communication skills for international multi-trade job sites.',
    ],
    requiredSkills: [
      'Formwork Shuttering & Joinery Carpentry',
      'Block Masonry & Stucco Plastering',
      '6G TIG / MIG / Arc Structural Welding (AWS/ISO)',
      'Large Format Porcelain Tiling & Marble Setting',
      'Airless Spray Painting & Waterproofing Systems',
    ],
    careerOpportunities: [
      'Attractive European salaries (€2,400 – €3,800/month) with standard overtime pay bonuses.',
      'Full employer relocation support: work permit visas, flight tickets, tool kits, and company housing.',
      'Fast-track promotion from Tradesman to Trade Foreman, Site Supervisor, and Master Craftsman.',
      'Year-round job stability across high-demand European construction and infrastructure sectors.',
    ],
  },
];
