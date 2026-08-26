import {
  Globe,
  Fuel,
  Cog,
  Wrench,
  ShieldAlert,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface OilAndGasRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface OilAndGasDepartment {
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
  roles: OilAndGasRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const oilAndGasDepartments: OilAndGasDepartment[] = [
  // =========================================================================
  // 1. EXPLORATION & GEOLOGY
  // =========================================================================
  {
    id: 'exploration-geology',
    slug: 'exploration-geology',
    title: 'Exploration & Geology',
    shortTitle: 'Exploration & Geology',
    route: '/services/oil-and-gas/exploration-geology',
    icon: Globe,
    color: 'from-amber-600 to-orange-500',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
    tagline: 'Subsurface Reservoir Characterization, Seismic Imaging & Basin Hydrocarbon Exploration',
    shortDescription:
      'Connecting Petroleum Geologists, Exploration Engineers, and Geophysicists with multinational E&P operators across the North Sea, Europe, and the Middle East.',
    overview:
      'Our Exploration & Geology division recruits qualified geoscientists, subsurface modelers, and exploration engineers for leading international Exploration & Production (E&P) operators and energy conglomerates across the Netherlands, Norway, the UK (Aberdeen), Saudi Arabia, Qatar, and the UAE. Professionals interpret 2D/3D/4D seismic surveys, map subterranean reservoir formations, evaluate well log petrophysics, and de-risk exploratory drilling prospects.',
    perksHighlights:
      'High expat remuneration, offshore rotation bonuses, fully paid international flight allowances, luxury compound housing, private healthcare, and work visa sponsorship.',
    stats: [
      { label: 'Avg. Monthly Package', value: '€5,200 – €10,500/mo' },
      { label: 'E&P Operator Partners', value: '35+ Operators' },
      { label: 'Offshore & Remote Perks', value: 'Fully Covered' },
      { label: 'Processing Timeline', value: '2 – 4 Months' },
    ],
    roles: [
      {
        title: 'Petroleum Geologist / Reservoir Geologist',
        badge: 'Senior Geoscientist Role',
        salaryRange: '€5,500 – €9,200 / month',
        description:
          'Analyzing sedimentary basins, interpreting core samples and petrophysical logs, building 3D static reservoir models (Petrel), and estimating hydrocarbon volumes (STOIIP).',
        responsibilities: [
          'Integrate geological, geochemical, and geophysical data to delineate hydrocarbon reservoir horizons.',
          'Construct 3D static reservoir geological models in Petrel, calculating porosity, permeability, and water saturation.',
          'Evaluate wireline well logs, mud-logging data, and rock core samples during live exploratory drilling.',
          'Identify stratigraphic traps, structural faults, and assess hydrocarbon migration pathways.',
          'Collaborate with reservoir engineers to formulate field development plans (FDP) and well placement strategies.',
        ],
        qualifications: [
          'Master’s Degree (M.Sc / M.Tech) in Petroleum Geology, Geoscience, or Earth Sciences.',
          '4–8+ years of experience in conventional or unconventional oil & gas exploration.',
          'Mastery in Schlumberger Petrel, Techlog, or Kingdom software suites.',
        ],
        skills: [
          '3D geological reservoir modeling (Petrel)',
          'Petrophysical log interpretation & core analysis',
          'Basin analysis & hydrocarbon volumetric estimation',
          'Well planning & geosteering during drilling',
        ],
        experience: '4+ years in petroleum reservoir geology.',
      },
      {
        title: 'Exploration Engineer (Prospect Evaluation)',
        badge: 'High E&P Demand',
        salaryRange: '€5,800 – €9,800 / month',
        description:
          'Evaluating exploratory well viability, prospect risk analysis, reservoir pressure transient modeling, and conceptual well design for frontier exploration blocks.',
        responsibilities: [
          'Perform economic feasibility and risk modeling for wildcat and appraisal drilling prospects.',
          'Analyze drill-stem tests (DST), downhole pressure data, and formation fluid properties (PVT).',
          'Coordinate with drilling and environmental teams to prepare exploratory Well Authorization for Expenditure (AFE).',
          'Monitor real-time formation pressure data (LWD/MWD) to optimize casing seat depths.',
          'Prepare comprehensive exploration technical dossiers for government licensing rounds and farm-in reviews.',
        ],
        qualifications: [
          'Bachelor’s / Master’s Degree in Petroleum Engineering or Chemical Engineering.',
          '3–7+ years in oil & gas exploration engineering or reservoir engineering.',
        ],
        skills: [
          'Prospect risk analysis & AFE preparation',
          'PVT fluid analysis & formation pressure evaluation',
          'Eclipse / CMG reservoir simulation basics',
          'Exploration well economics & license bidding',
        ],
        experience: '3+ years in oil & gas exploration engineering.',
      },
      {
        title: 'Geophysicist (Seismic Data Processing & Interpretation)',
        badge: 'Specialist Technical Role',
        salaryRange: '€6,000 – €10,500 / month',
        description:
          'Processing and interpreting 2D/3D/4D reflection seismic data, acoustic velocity modeling, seismic inversion, and mapping deep subsurface fault architectures.',
        responsibilities: [
          'Process raw seismic survey data: noise attenuation, velocity analysis, pre-stack depth migration (PSDM).',
          'Interpret seismic time/depth horizons, fault polygons, and direct hydrocarbon indicators (DHI / Bright Spots).',
          'Conduct acoustic impedance inversion and amplitude versus offset (AVO) analysis for fluid detection.',
          'Perform depth conversion, velocity modeling, and time-to-depth well seismic calibration (VSP).',
          'Participate in offshore seismic vessel survey design and quality assurance monitoring.',
        ],
        qualifications: [
          'M.Sc / Ph.D in Geophysics, Applied Physics, or Geoscience.',
          '4+ years in seismic acquisition, processing, or structural seismic interpretation.',
          'Proficiency with Petrel Geophysics, SeisWorks, Hampson-Russell, or Paradigm.',
        ],
        skills: [
          '2D/3D Seismic interpretation & structural mapping',
          'AVO analysis, seismic inversion & attribute analysis',
          'Pre-Stack Depth Migration (PSDM) & velocity modeling',
          'Geophysical software (Petrel, Kingdom, Hampson-Russell)',
        ],
        experience: '4+ years dedicated geophysical seismic interpretation.',
      },
    ],
    keyResponsibilities: [
      'Subsurface geological mapping, 3D static reservoir modeling, and volumetric reserve calculations.',
      'Processing and interpreting 2D/3D reflection seismic surveys and rock petrophysical logs.',
      'De-risking exploratory drilling prospects and identifying economic hydrocarbon accumulations.',
      'Collaborating with drilling engineers for geosteering, casing depths, and formation pressure containment.',
      'Ensuring total compliance with environmental E&P regulations and national energy ministry reporting.',
    ],
    qualifications: [
      'Master’s or Bachelor’s Degree in Geology, Geophysics, Geoscience, or Petroleum Engineering.',
      '3 to 8+ years of verified exploration experience with international E&P operators or service companies.',
      'Proficiency with industry software: Petrel, Techlog, Kingdom, Landmark, or Hampson-Russell.',
      'Fluent technical English communication and cross-disciplinary teamwork capability.',
    ],
    requiredSkills: [
      'Petrel 3D Reservoir Geological Modeling',
      '2D/3D/4D Seismic Interpretation & AVO Analysis',
      'Petrophysical Log Evaluation & Core Analysis',
      'Prospect Risk Assessment & Volumetric Estimation',
      'Real-Time Geosteering & Well Planning',
    ],
    careerOpportunities: [
      'Lucrative international salaries (€5,200 – €10,500+/month) with tax-free benefits in the Gulf & expat allowances.',
      'Full employer relocation packages: business class flights, luxury compound housing, and family healthcare.',
      'Promotion ladder from Explorationist to Senior Staff Geologist, Exploration Manager, and Chief Geoscientist.',
      'Prestigious projects across offshore North Sea basins, Mediterranean deepwater, and Middle Eastern mega-fields.',
    ],
  },

  // =========================================================================
  // 2. DRILLING & WELL OPERATIONS
  // =========================================================================
  {
    id: 'drilling-well-operations',
    slug: 'drilling-well-operations',
    title: 'Drilling & Well Operations',
    shortTitle: 'Drilling & Wells',
    route: '/services/oil-and-gas/drilling-well-operations',
    icon: Fuel,
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    heroImage: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Pressure Drilling, Offshore Jack-Up & Deepwater Rig Operations',
    shortDescription:
      'Placing certified Drilling Engineers, Offshore Drillers, and Well Site Supervisors (Company Men) on offshore rigs and onshore drill sites.',
    overview:
      'Our Drilling & Well Operations division specializes in sourcing certified drilling supervisors, directional drillers, and drilling engineers for jack-up rigs, semi-submersibles, drillships, and onshore drilling rigs across the North Sea, Gulf of Mexico, Saudi Arabia, and the UAE. Professionals ensure safe well trajectory control, mud hydraulics, blow-out preventer (BOP) testing, and casing/cementing execution meeting strict API and IWCF safety standards.',
    perksHighlights:
      'Generous rotational rosters (28 days on / 28 days off or 14/14), full offshore accommodation and catering, round-trip international flights, and IWCF/BOSIET certification support.',
    stats: [
      { label: 'Avg. Rotational Salary', value: '€4,800 – €11,500/mo' },
      { label: 'Offshore Drilling Rigs', value: '40+ Rig Contracts' },
      { label: 'Rotation Roster (On/Off)', value: '28 / 28 Days' },
      { label: 'IWCF Level 4 Certified', value: '100% Compliant' },
    ],
    roles: [
      {
        title: 'Drilling Engineer (Well Design & Hydraulics)',
        badge: 'High Technical Demand',
        salaryRange: '€5,000 – €8,500 / month',
        description:
          'Formulating detailed drilling programs, casing design, mud weight hydraulics, bottom hole assembly (BHA) selection, and directional well path planning (Compass).',
        responsibilities: [
          'Design casing and cementing programs, calculating burst, collapse, and tensile safety margins.',
          'Optimize drilling fluid hydraulics, bit selection, and rate of penetration (ROP) parameters.',
          'Model directional and horizontal well trajectories using Landmark Compass / WellPlan software.',
          'Prepare Drilling Authorization for Expenditure (AFE), well risk assessments, and contingency plans.',
          'Analyze daily drilling reports (DDR), stuck-pipe risks, and coordinate with rig-site drilling supervisors.',
        ],
        qualifications: [
          'B.E. / B.Tech / M.Tech in Petroleum Engineering or Mechanical Engineering.',
          '3–7+ years of experience in drilling engineering with operating or drilling service companies.',
          'Valid IWCF / IADC Well Control certification (Level 4).',
        ],
        skills: [
          'Well engineering & casing design (Landmark / WellPlan)',
          'Drilling hydraulics & BHA optimization',
          'Directional drilling planning (Compass)',
          'IWCF Well Control & Kick Tolerance modeling',
        ],
        experience: '3+ years in drilling engineering and well planning.',
      },
      {
        title: 'Driller (Offshore Jack-Up & Cyberbase Rig)',
        badge: 'Core Rig Floor Leader',
        salaryRange: '€4,200 – €6,800 / month',
        description:
          'Operating modern cyberbase drilling consoles, controlling drawworks, top-drive torque, mud pumps, and executing casing runs and tripping operations safely.',
        responsibilities: [
          'Operate rig cyberbase chairs (NOV / Aker / Cameron) controlling rotary torque, WOB, and drill string RPM.',
          'Supervise the rig floor crew (assistant driller, derrickman, roughnecks) during tripping in/out operations.',
          'Monitor mud pit levels and return flow continuously to detect early signs of influx/kicks.',
          'Execute shut-in procedures immediately upon kick detection per standard IWCF well control guidelines.',
          'Perform regular functional and pressure testing of the Blow-Out Preventer (BOP) stack and choke manifold.',
        ],
        qualifications: [
          'Diploma / High School with certified Driller credentials and IWCF Level 3 / Level 4 certificate.',
          '3+ years of experience as Driller on automated cyberbase offshore or heavy onshore rigs.',
        ],
        skills: [
          'Cyberbase drilling console operation (NOV/Aker)',
          'Well control kick detection & shut-in procedures',
          'Tripping pipe, casing running & cementing',
          'Rig floor crew leadership & safety compliance',
        ],
        experience: '3+ years experience as Driller on offshore or heavy land rigs.',
      },
      {
        title: 'Well Site Supervisor / Company Man',
        badge: 'Senior Offshore Representative',
        salaryRange: '€7,500 – €11,500 / month',
        description:
          'Serving as the operator’s top on-site authority, directing all drilling, logging, cementing, and third-party service contractors, ensuring zero incidents and budget adherence.',
        responsibilities: [
          'Direct all on-rig operations representing the oil company (Operator) 24/7 on the drill site.',
          'Coordinate simultaneous operations (SIMOPS) between drilling, wireline logging, casing, and mud logging.',
          'Approve daily drilling costs, contractor time tickets, and enforce strict drilling safety protocols.',
          'Lead real-time decision making during downhole challenges: stuck pipe, lost circulation, or well kicks.',
          'Ensure seamless logistics: supply boat schedules, helicopter crew changes, and offshore fuel management.',
        ],
        qualifications: [
          'Degree / Diploma in Petroleum or Mechanical Engineering with 8+ years offshore drilling experience.',
          'Valid IWCF Level 4 Well Control Supervisor certification & OPITO BOSIET offshore safety certificate.',
          'Proven record in offshore drilling management and cost containment.',
        ],
        skills: [
          'Offshore rig leadership & SIMOPS coordination',
          'IWCF Level 4 Well Control management',
          'Crisis decision making & stuck-pipe remediation',
          'Third-party contractor management & cost control',
        ],
        experience: '8+ years drilling experience with 3+ years as Company Man / Well Site Supervisor.',
      },
    ],
    keyResponsibilities: [
      'Designing and executing safe, efficient exploratory, development, and workover well operations.',
      'Operating advanced cyberbase drilling rigs, top-drives, iron roughnecks, and mud circulation systems.',
      'Maintaining 100% compliance with IWCF / IADC well control and blow-out prevention standards.',
      'Directing downhole casing, directional drilling, cementing, and wireline formation testing.',
      'Enforcing zero-harm offshore safety rules, Permit-to-Work (PTW), and emergency shutdown protocols.',
    ],
    qualifications: [
      'Degree, Diploma, or Technical certification in Petroleum Engineering, Drilling, or Mechanical Engineering.',
      'Valid IWCF or IADC Well Control certification (Level 3 for Drillers, Level 4 for Supervisors).',
      'OPITO-approved BOSIET / FOET with CA-EBS (for all offshore assignments).',
      'Strong physical fitness, mental resilience, and adaptability to 28/28 or 14/14 rotation schedules.',
    ],
    requiredSkills: [
      'IWCF Level 4 / IADC Well Control Compliance',
      'Cyberbase Rig Floor Operation (NOV / Aker)',
      'Directional Drilling & Well Hydraulics (Landmark)',
      'BOP Stack Testing & Well Influx Containment',
      'Offshore Logistics & SIMOPS Coordination',
    ],
    careerOpportunities: [
      'High rotational remuneration (€4,800 – €11,500/month) with full offshore allowances and paid time off.',
      '28 days on / 28 days off schedule providing excellent work-life balance and worldwide travel flexibility.',
      'Promotion track from Assistant Driller to Driller, Toolpusher, Drilling Superintendent, and VP of Drilling.',
      'Global deployment across premier offshore assets: North Sea harsh-environment rigs and Middle Eastern drillships.',
    ],
  },

  // =========================================================================
  // 3. PRODUCTION & OPERATIONS
  // =========================================================================
  {
    id: 'production-operations',
    slug: 'production-operations',
    title: 'Production & Operations',
    shortTitle: 'Production & Operations',
    route: '/services/oil-and-gas/production-operations',
    icon: Cog,
    color: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    heroImage: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
    tagline: 'Continuous Hydrocarbon Processing, Offshore Platforms, Refineries & LNG Terminals',
    shortDescription:
      'Recruiting Production Engineers, Control Room Process Operators, and Field Operators for oil & gas processing plants, FPSOs, and LNG terminals.',
    overview:
      'Our Production & Operations division supplies qualified petroleum production engineers, DCS console operators, and offshore field technicians for offshore fixed platforms, Floating Production Storage and Offloading (FPSO) vessels, gas processing plants, and crude oil refineries across Europe, the North Sea, and the Middle East. Personnel manage oil/gas/water 3-phase separation, gas compression, crude stabilization, and fiscal metering.',
    perksHighlights:
      'Attractive rotation salaries, rotational air travel allowances, comprehensive medical insurance, offshore accommodation, and certified process safety training.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€3,800 – €8,200/mo' },
      { label: 'Refinery & Platform Sites', value: '45+ Facilities' },
      { label: 'Rotation / Standard Perks', value: 'Fully Sponsored' },
      { label: 'Visa Processing', value: '2 – 3 Months' },
    ],
    roles: [
      {
        title: 'Production Engineer (Facility & Reservoir Optimization)',
        badge: 'High European Demand',
        salaryRange: '€4,800 – €7,800 / month',
        description:
          'Optimizing oil and gas well inflow performance (Nodal Analysis), artificial lift systems (ESP, Gas Lift), surface separation facilities, and chemical injection programs.',
        responsibilities: [
          'Perform Nodal Analysis and well performance modeling using Prosper / GAP / Pipesim software.',
          'Design, monitor, and optimize artificial lift systems: Electric Submersible Pumps (ESP) and continuous Gas Lift.',
          'Oversee surface processing facilities: 3-phase test separators, crude desalters, and gas dehydration (TEG).',
          'Track daily production allocations, well decline curves, and recommend scale/corrosion chemical treatments.',
          'Plan and execute well intervention workovers, acid stimulation, and hydraulic fracturing jobs.',
        ],
        qualifications: [
          'B.E. / B.Tech / M.Tech in Petroleum Engineering or Chemical Engineering.',
          '3–6+ years in production engineering with an E&P operating company.',
          'Proficiency with Prosper, GAP, Pipesim, or IPM software.',
        ],
        skills: [
          'Nodal analysis & well modeling (Prosper / Pipesim)',
          'Artificial lift systems (ESP / Gas Lift / PCP)',
          'Surface separation & gas dehydration design',
          'Well testing & production allocation audits',
        ],
        experience: '3+ years in oil & gas production optimization.',
      },
      {
        title: 'Process Operator / Panel Operator (DCS Console)',
        badge: 'Critical Operations Role',
        salaryRange: '€3,800 – €5,800 / month',
        description:
          'Controlling live plant process parameters (pressure, temperature, flow, level) from the Central Control Room (CCR) via DCS systems (Honeywell, Yokogawa, Emerson DeltaV).',
        responsibilities: [
          'Monitor and adjust distillation columns, gas compressors, boilers, and separators via DCS console.',
          'Respond swiftly to process alarms, trip conditions, and execute Emergency Shutdown (ESD) sequences when required.',
          'Direct field operators via two-way radio during equipment startups, line routing, and isolation changeovers.',
          'Log production process parameters, monitor flare gas volumes, and balance steam/power utility grids.',
          'Enforce strict adherence to Process Safety Management (PSM) and Management of Change (MOC) guidelines.',
        ],
        qualifications: [
          'Diploma in Chemical Engineering, Petroleum Refining, or Instrumentation.',
          '3+ years as Panel / DCS Operator in a refinery, gas plant, or offshore processing facility.',
        ],
        skills: [
          'Distributed Control Systems (Honeywell / DeltaV / Yokogawa)',
          'Process alarm response & ESD shutdown protocols',
          'Distillation, separation & gas compression control',
          'Process Safety Management (PSM) compliance',
        ],
        experience: '3+ years as DCS Console / Process Operator.',
      },
      {
        title: 'Field Operator (Plant & Platform Outside Operator)',
        badge: 'High Hiring Volume',
        salaryRange: '€3,200 – €4,800 / month',
        description:
          'Conducting field plant rounds, operating manual valves, pigging pipelines, starting pumps and compressors, and executing Lock-Out/Tag-Out (LOTO) isolations.',
        responsibilities: [
          'Execute routine site inspection rounds, checking lube oil levels, vibration, and pressure differential gauges.',
          'Perform positive mechanical isolations: blind installation, valve lockout/tagout (LOTO), and gas testing.',
          'Launch and receive pipeline pigs for line cleaning, corrosion inspection, and liquid slug handling.',
          'Collect process hydrocarbon samples for laboratory quality analysis (B&SW, RVP, sulfur content).',
          'Prepare equipment for maintenance turnover: purging, steaming, draining, and issuing gas-free certificates.',
        ],
        qualifications: [
          'ITI / Diploma in Mechanical / Chemical / Petroleum Trade.',
          '2+ years in refinery, petrochemical, or offshore field operations.',
        ],
        skills: [
          'Plant equipment startup, shutdown & valve alignment',
          'Lock-Out / Tag-Out (LOTO) & safe mechanical isolation',
          'Pipeline pigging & hydrocarbon sampling',
          'Gas testing & hazardous area (ATEX) awareness',
        ],
        experience: '2+ years field operator experience in hydrocarbons.',
      },
    ],
    keyResponsibilities: [
      'Operating central hydrocarbon separation, gas sweetening, dehydration, and crude stabilization units.',
      'Monitoring and controlling plant parameters through advanced Distributed Control Systems (DCS).',
      'Executing mechanical line isolations, LOTO tagging, vessel purging, and pipeline pigging operations.',
      'Optimizing well flow rates, artificial lift systems (ESP/Gas Lift), and chemical injection programs.',
      'Upholding international Process Safety Management (PSM), ATEX, and environmental emission limits.',
    ],
    qualifications: [
      'Degree, Diploma, or ITI in Chemical, Petroleum, Mechanical, or Instrumentation Engineering.',
      '2 to 6+ years of verified operating experience in refineries, gas plants, FPSOs, or offshore platforms.',
      'Familiarity with DCS software (Honeywell Experion, Emerson DeltaV, Yokogawa Centum) and process safety.',
      'Good technical English communication for high-reliability operational coordination.',
    ],
    requiredSkills: [
      'DCS Control Console Operation (DeltaV / Honeywell)',
      'Nodal Analysis & Artificial Lift (Prosper / Pipesim)',
      'LOTO Mechanical Isolations & Safe System of Work',
      'Gas Compression & 3-Phase Separation Facilities',
      'Process Safety Management (PSM) & Alarm Handling',
    ],
    careerOpportunities: [
      'Competitive international salaries (€3,800 – €8,200/month) with rotation bonuses and overtime allowances.',
      'Full employer relocation packages: visa sponsorship, travel tickets, furnished housing, and healthcare.',
      'Career progression from Field Operator to Panel Operator, Shift Team Leader, and Operations Superintendent.',
      'Opportunities in booming European LNG import terminals and North Sea decarbonized production facilities.',
    ],
  },

  // =========================================================================
  // 4. MAINTENANCE & ENGINEERING
  // =========================================================================
  {
    id: 'maintenance-engineering',
    slug: 'maintenance-engineering',
    title: 'Maintenance & Engineering',
    shortTitle: 'Maintenance & Engg',
    route: '/services/oil-and-gas/maintenance-engineering',
    icon: Wrench,
    color: 'from-cyan-600 to-blue-600',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop',
    tagline: 'Turbomachinery Overhauls, Explosion-Proof Electrical & Precision Instrumentation',
    shortDescription:
      'Connecting Mechanical Engineers, Electrical Engineers, certified Instrumentation Technicians, and Millwrights with major oil & gas infrastructure assets.',
    overview:
      'Our Maintenance & Engineering division supplies certified rotating equipment specialists, hazardous area (CompEx) electricians, and calibration instrumentation technicians for refineries, petrochemical complexes, offshore platforms, and LNG terminals across Europe and the Middle East. Technicians maintain gas turbines (Solar, GE Frame), centrifugal multi-stage pumps, safety-instrumented systems (SIS/SIL), and smart transmitters.',
    perksHighlights:
      'High base salaries, hazardous area allowances, CompEx and ATEX certification training, fully equipped toolkits, furnished accommodation, and work visa support.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€3,400 – €7,200/mo' },
      { label: 'Asset Maintenance Roles', value: '60+ Vacancies' },
      { label: 'CompEx / ATEX Certified', value: '100% Compliant' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Mechanical Maintenance Engineer (Rotating Equipment & Turbines)',
        badge: 'High Technical Demand',
        salaryRange: '€4,500 – €7,200 / month',
        description:
          'Leading predictive, preventive, and major overhaul maintenance on heavy rotating machinery: industrial gas turbines (GE, Rolls-Royce, Solar), centrifugal gas compressors, and multi-stage pumps.',
        responsibilities: [
          'Plan and supervise major turnarounds (TAR) and overhaul maintenance on gas turbines and compressors.',
          'Analyze machinery vibration telemetry spectra, lube oil degradation reports, and thermal imaging data.',
          'Execute precision laser shaft alignments, dynamic balancing, and mechanical seal replacements.',
          'Manage Computerized Maintenance Management Systems (SAP PM / Maximo) work orders and spare parts inventory.',
          'Ensure all maintenance tasks adhere strictly to API 610 (Pumps), API 617 (Compressors), and API 616 (Turbines).',
        ],
        qualifications: [
          'B.E. / B.Tech in Mechanical Engineering.',
          '3–6+ years in oil & gas rotating equipment maintenance and turnaround overhauls.',
          'Certification in Vibration Analysis (ISO 18436 Category II/III is a plus).',
        ],
        skills: [
          'Gas turbine & compressor overhaul leadership (GE/Solar)',
          'Vibration analysis & laser shaft alignment',
          'SAP PM / Maximo work order asset management',
          'API machinery standards & mechanical seal diagnostics',
        ],
        experience: '3+ years in mechanical rotating machinery maintenance.',
      },
      {
        title: 'Electrical Engineer (Hazardous Area / CompEx)',
        badge: 'Specialist Expat Role',
        salaryRange: '€4,200 – €6,800 / month',
        description:
          'Maintaining high/medium voltage switchgear, explosion-proof motors (Ex-d, Ex-e), UPS battery banks, and transformers in ATEX Zone 0/1/2 classified hazardous areas.',
        responsibilities: [
          'Maintain 11kV/6.6kV/415V switchgear panels, vacuum circuit breakers (VCB), and motor protection relays.',
          'Conduct mandatory CompEx inspections on explosion-proof electrical enclosures and cable glands in hazardous zones.',
          'Oversee electrical generator synchronization, emergency diesel generators (EDG), and power distribution SCADA.',
          'Execute preventive testing: insulation resistance (Megger), dielectric breakdown, and thermal scans.',
        ],
        qualifications: [
          'Degree / Diploma in Electrical Engineering.',
          '3+ years in oil & gas or petrochemical electrical maintenance.',
          'Valid CompEx Ex01-Ex04 certification (or willingness to obtain certified training).',
        ],
        skills: [
          'CompEx hazardous area inspection & maintenance',
          'HV/MV switchgear & protection relay testing',
          'Emergency diesel generators & UPS battery banks',
          'Electrical isolation LOTO & Permit to Work',
        ],
        experience: '3+ years in oil & gas electrical maintenance.',
      },
      {
        title: 'Instrumentation Technician (Control Valves & Smart Transmitters)',
        badge: 'High Hiring Demand',
        salaryRange: '€3,200 – €4,800 / month',
        description:
          'Calibrating, installing, and servicing smart electronic transmitters (pressure, temperature, flow, level), pneumatic control valves, ESD valves, and fire & gas detectors.',
        responsibilities: [
          'Calibrate smart HART / Foundation Fieldbus transmitters using Fluke / Beamex calibrators.',
          'Overhaul, stroke, and calibrate pneumatic control valves, smart positioners (Fisher, Masoneilan), and actuators.',
          'Perform loop testing from field junction boxes to DCS I/O cards and Safety Instrumented Systems (SIS/Triconex).',
          'Inspect and test Fire & Gas (F&G) detection devices: optical flame detectors, toxic gas sensors, and heat probes.',
          'Troubleshoot pneumatic tubing, solenoid valves, and purge systems in hazardous environments.',
        ],
        qualifications: [
          'Diploma / ITI in Instrumentation & Control / Electronics Engineering.',
          '2+ years in oil & gas, refinery, or offshore instrument maintenance.',
        ],
        skills: [
          'HART / Fieldbus smart transmitter calibration (Fluke/Beamex)',
          'Control valve overhaul & positioner calibration',
          'Loop checking & SIS/Triconex I/O testing',
          'Fire & Gas (F&G) detector maintenance',
        ],
        experience: '2+ years instrumentation maintenance experience.',
      },
      {
        title: 'Mechanical Maintenance Technician / Millwright',
        badge: 'Core Field Craft',
        salaryRange: '€2,800 – €4,200 / month',
        description:
          'Hands-on servicing of centrifugal pumps, fin-fan air coolers, fin-tube heat exchangers, valves, pipe spools, and mechanical seal rebuilds on plant sites.',
        responsibilities: [
          'Dismantle, inspect, replace bearings, and rebuild centrifugal pumps and mechanical seals.',
          'Perform laser shaft alignment between electric motors, gearboxes, and pumps.',
          'Clean, bundle-pull, retube, and hydro-test shell & tube heat exchangers during plant turnarounds.',
          'Torque flange bolts using hydraulic torque wrenches (Hytorc) adhering strictly to gasket specifications.',
        ],
        qualifications: [
          'ITI / Diploma in Mechanical Trade / Millwright certification.',
          '2+ years practical mechanical maintenance experience in oil refineries or chemical plants.',
        ],
        skills: [
          'Centrifugal pump & mechanical seal rebuilding',
          'Laser shaft alignment & dial gauge leveling',
          'Hydraulic torque tightening (Hytorc)',
          'Heat exchanger & vessel maintenance',
        ],
        experience: '2+ years practical mechanical technician experience.',
      },
    ],
    keyResponsibilities: [
      'Predictive and preventive maintenance on high-pressure turbomachinery, pumps, and compressors.',
      'Inspection and maintenance of explosion-proof electrical systems in ATEX / CompEx hazardous zones.',
      'Calibration of smart transmitters, control valves, safety relief valves (PSV), and SIS trip loops.',
      'Leading planned turnaround (TAR) shutdowns, equipment overhauls, and hydraulic bolt torquing.',
      'Maintaining complete digital equipment maintenance histories in SAP PM / Maximo ERP software.',
    ],
    qualifications: [
      'Degree, Diploma, or ITI in Mechanical, Electrical, or Instrumentation & Control Engineering.',
      '2 to 6+ years of verified maintenance experience in refineries, petrochemicals, or offshore assets.',
      'Familiarity with CompEx, ATEX, API, and ISO rotating machinery reliability standards.',
      'Proficiency in reading P&IDs, electrical schematics, and instrument loop diagrams.',
    ],
    requiredSkills: [
      'Gas Turbine & Rotating Machinery Overhauls (API)',
      'CompEx Hazardous Area Electrical Maintenance',
      'Smart Transmitter & Control Valve Calibration (HART)',
      'Laser Shaft Alignment & Dynamic Balancing',
      'SAP PM / Maximo Maintenance Work Order Management',
    ],
    careerOpportunities: [
      'Competitive European packages (€3,400 – €7,200/month) with overtime and offshore rotation bonuses.',
      'Full employer relocation: work permit visa, certified safety training, flights, and company accommodation.',
      'Promotion track from Maintenance Technician to Reliability Engineer, Maintenance Superintendent, and Asset Manager.',
      'High-stability employment across vital European energy security infrastructure and LNG facilities.',
    ],
  },

  // =========================================================================
  // 5. HSE & SAFETY
  // =========================================================================
  {
    id: 'hse-safety',
    slug: 'hse-safety',
    title: 'HSE & Safety',
    shortTitle: 'HSE & Safety',
    route: '/services/oil-and-gas/hse-safety',
    icon: ShieldAlert,
    color: 'from-orange-600 to-red-600',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    tagline: 'Zero-Harm Culture, Process Safety Management & Environmental Compliance in Hydrocarbons',
    shortDescription:
      'Recruiting certified HSE Officers, Process Safety Engineers, Environmental Specialists, and Offshore Safety Supervisors for international oil & gas operations.',
    overview:
      'Our HSE & Safety division connects certified health, safety, and environmental professionals with offshore drilling rigs, oil refineries, gas processing complexes, and petrochemical facilities across the North Sea, the UK, the Netherlands, and the Middle East. Safety leaders enforce NEBOSH, OSHA, and ISO 14001/45001 standards, conduct HAZOP risk analyses, manage Permit-to-Work (PTW) frameworks, and lead incident investigations.',
    perksHighlights:
      'High expat remuneration, offshore rotation allowances, NEBOSH / OPITO certification support, luxury housing/camp facilities, and complete visa sponsorship.',
    stats: [
      { label: 'Avg. Monthly Salary', value: '€4,000 – €8,800/mo' },
      { label: 'Safety Leadership Roles', value: '40+ Openings' },
      { label: 'NEBOSH & OPITO Certified', value: '100% Compliant' },
      { label: 'Visa Sponsorship', value: 'Guaranteed' },
    ],
    roles: [
      {
        title: 'HSE Officer / Safety Advisor',
        badge: 'High Industry Demand',
        salaryRange: '€4,000 – €6,200 / month',
        description:
          'Monitoring daily on-site and offshore safety compliance, issuing Permits-to-Work (PTW), conducting hazardous gas monitoring, and leading emergency drill exercises.',
        responsibilities: [
          'Conduct daily safety audits across plant operating units, offshore decks, and confined space entries.',
          'Verify Permit-to-Work (PTW) packages for hot work, radiography, and critical crane lifting operations.',
          'Perform atmospheric gas testing (LEL, H2S, O2, CO) using certified portable multi-gas detectors.',
          'Deliver mandatory HSE safety inductions and morning toolbox talks to multinational crews.',
          'Audit offshore life-saving appliances (TEMPSC lifeboats, life rafts, fire extinguishing systems).',
        ],
        qualifications: [
          'NEBOSH IGC / NEBOSH Diploma / IOSH certified credentials.',
          '3+ years of dedicated HSE safety experience in oil & gas, refinery, or offshore environments.',
          'Valid OPITO BOSIET offshore safety certification (for offshore positions).',
        ],
        skills: [
          'NEBOSH IGC & OSHA safety compliance',
          'Permit-to-Work (PTW) & Hot Work monitoring',
          'Atmospheric gas detection (H2S / LEL)',
          'Emergency response & fire drill coordination',
        ],
        experience: '3+ years in oil & gas HSE safety operations.',
      },
      {
        title: 'Safety Engineer (Process Safety & HAZOP / QRA)',
        badge: 'Specialist Engineering Role',
        salaryRange: '€5,200 – €8,200 / month',
        description:
          'Leading Process Safety Management (PSM), Hazard and Operability (HAZOP) studies, Quantitative Risk Assessment (QRA), and designing Safety Instrumented Systems (SIL/SIS).',
        responsibilities: [
          'Facilitate and document HAZOP, HAZID, and Layer of Protection Analysis (LOPA) reviews for new projects.',
          'Perform quantitative risk analysis (QRA), gas dispersion modeling, and blast overpressure studies (Phast).',
          'Establish Safety Integrity Level (SIL) targets and evaluate Safety Instrumented Functions (SIF) per IEC 61511.',
          'Manage the plant Process Safety Management (PSM) framework: Management of Change (MOC) and pre-startup reviews (PSSR).',
          'Investigate major process safety incidents, conducting comprehensive Root Cause Analysis (Tripod / TapRooT).',
        ],
        qualifications: [
          'B.E. / B.Tech / M.Tech in Chemical Engineering, Petroleum Engineering, or Process Safety.',
          '4–8+ years in process safety engineering with E&P or EPC design consultants.',
          'TÜV Rheinland Functional Safety Engineer (FS Eng) or certified HAZOP Chairman credential is a plus.',
        ],
        skills: [
          'HAZOP / HAZID / LOPA facilitation & documentation',
          'Safety Integrity Level (SIL) & IEC 61511 compliance',
          'Phast dispersion & explosion risk modeling',
          'Process Safety Management (PSM) & MOC governance',
        ],
        experience: '4+ years in oil & gas process safety engineering.',
      },
      {
        title: 'Environmental Specialist (Emissions & Waste Management)',
        badge: 'Sustainability & ESG Lead',
        salaryRange: '€4,500 – €7,200 / month',
        description:
          'Monitoring carbon footprint, greenhouse gas (GHG) reporting, wastewater effluent treatment, produced water discharge compliance, and ISO 14001 environmental audits.',
        responsibilities: [
          'Monitor industrial atmospheric emissions (NOx, SOx, VOCs) and continuous flare gas reduction initiatives.',
          'Audit produced water disposal, oily water separator effluents, and drill cuttings biodegradation.',
          'Ensure total compliance with national environmental protection agencies (EPA) and EU Carbon Emissions Trading (ETS).',
          'Maintain environmental management systems adhering strictly to ISO 14001 international standards.',
          'Develop oil spill contingency response plans and coordinate emergency marine boom deployment drills.',
        ],
        qualifications: [
          'Degree in Environmental Engineering, Chemical Engineering, or Environmental Science.',
          '3+ years in oil & gas environmental compliance or sustainability management.',
        ],
        skills: [
          'ISO 14001 Environmental Management Systems',
          'GHG emissions accounting & flare reduction',
          'Produced water effluent & drill cuttings treatment',
          'Oil spill response & marine environmental protection',
        ],
        experience: '3+ years in environmental engineering within hydrocarbons.',
      },
      {
        title: 'Safety Supervisor / HSE Superintendent',
        badge: 'Senior Safety Management',
        salaryRange: '€5,800 – €8,800 / month',
        description:
          'Leading site HSE teams, managing contractor safety performance, setting annual safety KPIs (TRIFR / LTIFR), and reporting directly to asset leadership.',
        responsibilities: [
          'Direct the entire site HSE department, safety advisors, and emergency medical response staff.',
          'Track and report key performance indicators (Total Recordable Incident Frequency - TRIF, LTI, Near-Misses).',
          'Conduct comprehensive contractor safety evaluations and pre-qualification audits.',
          'Serve as chief safety commander during plant turnarounds (TAR) and major offshore expansion campaigns.',
        ],
        qualifications: [
          'Bachelor’s Degree with NEBOSH Diploma / NVQ Level 5 / CMIOSH credentials.',
          '6–10+ years in oil & gas safety management including 2+ years in team leadership.',
        ],
        skills: [
          'HSE department leadership & contractor safety audits',
          'Safety KPI analytics (TRIFR / LTIFR) & executive reporting',
          'Turnaround (TAR) safety command & emergency planning',
          'ISO 45001 & ISO 14001 integrated management systems',
        ],
        experience: '6+ years in oil & gas HSE safety leadership.',
      },
    ],
    keyResponsibilities: [
      'Enforcing zero-harm occupational health, safety, and environmental standards across assets.',
      'Leading Process Safety Management (PSM), HAZOP reviews, and SIL/SIS verification studies.',
      'Managing Permit-to-Work (PTW) systems, atmospheric gas detection, and high-risk task sign-offs.',
      'Ensuring compliance with ISO 14001 environmental emissions limits, flare reduction, and waste disposal.',
      'Conducting rigorous incident root cause analysis (RCA) and driving proactive safety culture training.',
    ],
    qualifications: [
      'Degree or Diploma in Engineering, Occupational Health & Safety, or Environmental Science.',
      'NEBOSH IGC, NEBOSH Diploma, IOSH, or TÜV Functional Safety certifications.',
      'OPITO-approved BOSIET / FOET offshore survival certification (for offshore deployment).',
      'Strong leadership, high moral courage, and authoritative English communication skills.',
    ],
    requiredSkills: [
      'NEBOSH / OSHA / ISO 45001 Safety Management',
      'HAZOP / HAZID / LOPA Process Safety Facilitation',
      'Permit-to-Work (PTW) & Gas Detection Protocols',
      'Incident Investigation & Root Cause Analysis (RCA)',
      'ISO 14001 Environmental Compliance & Carbon Audits',
    ],
    careerOpportunities: [
      'High international salaries (€4,000 – €8,800/month) with offshore rotation allowances and corporate perks.',
      'Comprehensive expat relocation: work permits, international health coverage, and furnished housing.',
      'Promotion track from HSE Officer to Safety Superintendent, Corporate HSE Director, and VP of Process Safety.',
      'Prestigious roles across major North Sea offshore assets, European mega-refineries, and Gulf energy hubs.',
    ],
  },
];
