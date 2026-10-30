export interface JobTypeSpecialization {
  title: string;
  tagline: string;
  description: string;
  typicalSites: string;
  keyTools: string[];
}

export interface JobAdvantage {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface JobResponsibilityGroup {
  category: string;
  tasks: string[];
}

export interface SkilledJobDetail {
  id: string;
  slug: string;
  title: string;
  roleNumber: string;
  tagline: string;
  heroImage: string;
  badge: string;
  location: string;
  experience: string;
  salary: string;
  salaryNote: string;
  roleOverview: string;
  roleScopeParagraphs: string[];
  types: JobTypeSpecialization[];
  responsibilities: JobResponsibilityGroup[];
  advantages: JobAdvantage[];
  requirements: string[];
  certifications: string[];
  targetCountries: string[];
}

export const skilledJobsDetailData: SkilledJobDetail[] = [
  // =========================================================================
  // 1. ELECTRICIANS
  // =========================================================================
  {
    id: 'electricians',
    slug: 'electricians',
    title: 'Electricians',
    roleNumber: 'Job 01',
    tagline: 'Industrial Power, Solar PV Systems & EV Charging Infrastructure Specialists',
    heroImage: '/electricians-hero.jpg',
    badge: 'Electrical & Power Systems • Solar & EV',
    location: 'Europe & Global Megaprojects',
    experience: '2–5 years of relevant professional experience in Europe or equivalent international projects',
    salary: '€3,000–€4,500 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    roleOverview:
      'We are seeking certified, experienced Electricians to execute high-precision electrical installation, maintenance, troubleshooting, and commissioning across industrial plants, solar farms, EV charging stations, and critical infrastructure megaprojects.',
    roleScopeParagraphs: [
      'Modern electrical systems require multi-disciplinary craftsmen capable of transitioning seamlessly between heavy industrial high-voltage switchgear, renewable solar photovoltaic (PV) arrays, and ultra-fast electric vehicle (EV) charging networks.',
      'Our electricians operate under European and international electrical standards (IEC, NEN 1010, DGUV V3, 18th Edition), ensuring continuous plant uptime, power reliability, and adherence to statutory safety and Lockout/Tagout (LOTO) protocols.',
    ],
    types: [
      {
        title: 'Industrial & Plant Electrician',
        tagline: 'Switchgear, Motor Controls & Automated Production Lines',
        description:
          'Installation and maintenance of medium and high-voltage switchgear, Motor Control Centers (MCC), variable frequency drives (VFDs), industrial cable trays, and transformer feeds in automated manufacturing facilities and processing plants.',
        typicalSites: 'Automotive gigafactories, chemical processing plants, food production facilities, and distribution hubs.',
        keyTools: ['Megger Insulation Testers', 'Hydraulic Cable Crimpers', 'Cable Pulling Winches', 'Loop Calibrators'],
      },
      {
        title: 'Solar PV & Renewable Energy Electrician',
        tagline: 'Utility-Scale Solar Farms & Commercial Grid Ties',
        description:
          'DC and AC wiring, combiner box installation, string and central inverter commissioning, grounding grid construction, and battery energy storage system (BESS) integration for large-scale solar arrays.',
        typicalSites: 'Utility-scale solar farms, commercial rooftop arrays, agrivoltaic installations, and battery storage yards.',
        keyTools: ['MC4 Crimping Tools', 'Solar Irradiance Meters', 'DC Clamp Meters', 'Thermal Imaging Cameras'],
      },
      {
        title: 'EV Charging Infrastructure Specialist',
        tagline: 'High-Power DC Fast Chargers & Highway Hubs',
        description:
          'Complete electrical infrastructure installation for Level 2 and Level 3 DC fast chargers (50kW to 350kW+), high-amperage sub-panels, dynamic load management systems, and smart telematics connectivity.',
        typicalSites: 'Highway service plazas, commercial fleet depots, urban rapid charging hubs, and public parking complexes.',
        keyTools: ['EVSE Test Adapters', 'Phase Rotation Meters', 'Torque Wrenches', 'Earth Resistance Testers'],
      },
      {
        title: 'High-Voltage (HV) Cable Jointer & Substation Tech',
        tagline: 'Underground Transmission & Substation Connections',
        description:
          'Precision stripping, jointing, and terminating of 11kV, 33kV, and 66kV XLPE and PILC underground power transmission cables, connecting into gas-insulated switchgear (GIS) and step-up transformers.',
        typicalSites: 'Wind farm collector substations, regional transmission networks, and heavy industrial yards.',
        keyTools: ['Semi-Con Stripping Tools', 'Gas Blow Torches', 'VLF Withstand Test Sets', 'Sheath Testers'],
      },
    ],
    responsibilities: [
      {
        category: 'Installation & Wiring',
        tasks: [
          'Pull, dress, gland, and terminate armored power, control, and instrumentation cables according to IEC and local wiring schematics.',
          'Install metallic and non-metallic containment including heavy cable trays, ladder racks, conduit bends, and trunking.',
          'Assemble and wire main distribution boards, low-voltage panels, control cabinets, and emergency lighting arrays.',
          'Erect solar PV string combiner boxes, inverters, and high-capacity DC fast charging pedestals.',
        ],
      },
      {
        category: 'Testing, Commissioning & Troubleshooting',
        tasks: [
          'Perform insulation resistance (Megger), earth continuity, loop impedance, and RCD trip testing before plant energization.',
          'Verify phase sequence, voltage balance, and harmonic distortion across three-phase 400V/690V industrial power supplies.',
          'Troubleshoot electrical faults, relay trips, and PLC digital I/O signal discrepancies using engineering P&IDs and schematics.',
          'Complete statutory pre-commissioning test certificates and inspection sign-off sheets.',
        ],
      },
      {
        category: 'Safety & Regulatory Compliance',
        tasks: [
          'Implement Lockout/Tagout (LOTO) protocols and verify zero energy state prior to commencing work on live equipment.',
          'Maintain compliance with European safety regulations (NEN 3140, DGUV Vorschrift 3, BS 7671 18th Edition).',
          'Inspect ATEX / Ex-rated electrical enclosures and seals in explosive or hazardous industrial atmospheres.',
          'Conduct daily toolbox safety briefings and ensure proper PPE usage (arc flash face shields, insulated gloves).',
        ],
      },
    ],
    advantages: [
      {
        title: 'Unmatched Global Demand in Energy Transition',
        subtitle: 'Secured Long-Term Career Future',
        description:
          'The European and global push toward renewable solar energy and electric vehicle mobility has created an acute shortage of certified electricians, guaranteeing long-term job security and high contract demand.',
        badge: 'Green Energy Growth',
      },
      {
        title: 'High International Earning Potential',
        subtitle: '€3,000–€4,500/mo + Overtime Premiums',
        description:
          'Attractive base salaries combined with guaranteed overtime rates (1.5x to 2.0x hourly pay) allow skilled electricians to maximize foreign savings and build generational wealth.',
        badge: 'Top Tier Pay',
      },
      {
        title: 'Employer-Provided Housing & Transport',
        subtitle: 'Zero Upfront Accommodation Hassle',
        description:
          'Direct deployment packages include fully furnished private or shared accommodations, utility bills covered, and free daily transport to and from the work site.',
        badge: 'Full Housing Included',
      },
      {
        title: 'European Accreditation & Skill Advancement',
        subtitle: 'Valued International Credentials',
        description:
          'Gain hands-on experience on multi-megawatt projects and receive support to obtain internationally recognized certifications like VCA-VOL, CompEx, and European safety passports.',
        badge: 'Career Progression',
      },
    ],
    requirements: [
      'Minimum English-speaking ability for on-site communication and safety compliance.',
      'Relevant diploma or technical qualification in Electrical Engineering or ITI Electrician trade certificate.',
      '2–5 years of relevant professional experience in Europe or equivalent international infrastructure projects.',
      'Hands-on experience with solar panels, inverters, and EV charging station installations is strongly preferred.',
      'Proven knowledge of electrical installation, troubleshooting, schematics reading, and safety procedures.',
    ],
    certifications: [
      'ITI / Diploma in Electrical Engineering',
      'VCA / SCC Safety Passport (European recognized)',
      'NEN 3140 / DGUV Vorschrift 3 / BS 7671 18th Edition (or national equivalent)',
      'Solar PV Installer / EVSE Certification (added advantage)',
    ],
    targetCountries: ['Netherlands', 'Germany', 'Norway', 'United Kingdom', 'Sweden', 'Poland'],
  },

  // =========================================================================
  // 2. WELDERS
  // =========================================================================
  {
    id: 'welders',
    slug: 'welders',
    title: 'Welders',
    roleNumber: 'Job 02',
    tagline: 'Multi-Process 6G Pipe, Structural Steel & Automated Orbital Specialists',
    heroImage: '/welders-hero.jpg',
    badge: 'Metal Fabrication & Industrial Welding',
    location: 'Europe & Global Megaprojects',
    experience: '2–5 years of relevant professional experience in Europe or certified international fabrication yards',
    salary: '€2,500–€3,600 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    roleOverview:
      'We are hiring certified, high-precision Welders specialized in pipe and structural steel fabrication for major industrial expansions, petrochemical refineries, pharmaceutical facilities, and maritime fabrication megaprojects.',
    roleScopeParagraphs: [
      'Industrial welding demands extraordinary dexterity and strict metallurgical adherence. Craftsmen must produce defect-free weld joints subject to non-destructive testing (NDT), including 100% radiographic X-ray (RT) and ultrasonic inspection (UT).',
      'Deployed welders work across carbon steel, stainless steel (304/316L), duplex, super duplex, and titanium, adhering strictly to approved Welding Procedure Specifications (WPS) under ASME Section IX, EN ISO 9606-1, and AWS standards.',
    ],
    types: [
      {
        title: '6G / Multi-Process Pipe Welder (TIG / GTAW & SMAW)',
        tagline: 'High-Pressure Process Piping in 6G Fixed Inclined Position',
        description:
          'Precision welding of high-pressure process pipelines in 6G and 6GR fixed positions without rotation. TIG (GTAW) root and hot pass with stick (SMAW) or flux-cored (FCAW) fill and capping passes.',
        typicalSites: 'Petrochemical refineries, power plant boilers, offshore platform tie-ins, and gas compressor stations.',
        keyTools: ['Inverter TIG/Stick Welders', 'Argon Purge Bladders', 'Digital Oxygen Trace Meters', 'Tungsten Grinders'],
      },
      {
        title: 'Structural Steel MIG / FCAW Welder',
        tagline: 'Heavy Plate, Bridge Girders & Architectural Beams',
        description:
          'Joining heavy plate structural steel, columns, crane booms, and architectural framework using multi-pass flux-cored arc welding (FCAW-G / FCAW-S) and MIG (GMAW 135/136) in 2G, 3G vertical-up, and 4G overhead positions.',
        typicalSites: 'Shipbuilding yards, bridge construction, gigafactory structural frames, and heavy gantry crane fabrication.',
        keyTools: ['Heavy MIG/MAG Wire Feeders', 'Air Carbon Arc Gouging Torches', 'Preheat Induction Mats', 'Weld Fillet Gauges'],
      },
      {
        title: 'Orbital & Automated Tube Welder',
        tagline: 'Ultra-High Purity (UHP) Cleanroom & Pharma Piping',
        description:
          'Operating computer-controlled enclosed orbital TIG welding weldheads for ultra-high purity 316L VIM/VAR electropolished tubing, achieving zero-particulate, mirror-smooth internal weld beads.',
        typicalSites: 'Semiconductor cleanrooms, biopharma production suites, food & beverage processing lines, and vacuum systems.',
        keyTools: ['Orbital Power Supplies', 'Facing Tools & Tube Cutters', 'Borescope Cameras', 'High-Purity Argon Regulators'],
      },
      {
        title: 'Submerged Arc & Heavy Pressure Vessel Welder',
        tagline: 'Automated Longitudinal & Circumferential Tank Welds',
        description:
          'Setup and operation of automated submerged arc welding (SAW) tractors and column-and-boom manipulators for heavy wall pressure vessels, offshore wind turbine monopiles, and chemical storage reactors.',
        typicalSites: 'Heavy equipment fabrication shops, wind tower factories, and pressure vessel manufacturing facilities.',
        keyTools: ['SAW Tractor Units', 'Flux Recovery Units', 'Turning Rolls & Positioners', 'Preheat Tempil Sticks'],
      },
    ],
    responsibilities: [
      {
        category: 'Fabrication & Joint Execution',
        tasks: [
          'Weld high-pressure process pipes and structural joints in 1G, 2G, 3G, 4G, 5G, and 6G/6GR positions without pipe rotation.',
          'Execute 100% radiographic (RT) and ultrasonic (UT) clean weld passes with zero slag inclusions, porosity, or lack of fusion.',
          'Set up inert gas purge systems (Argon) and verify oxygen levels below 5 ppm using digital trace sensors to eliminate sugaring.',
          'Interpret detailed isometric drawings, structural fabrication blueprints, and Welding Procedure Specifications (WPS).',
        ],
      },
      {
        category: 'Metallurgy & Quality Assurance',
        tasks: [
          'Preheat, interpass temperature control, and post-weld heat treatment (PWHT) monitoring on high-alloy steel and duplex joints.',
          'Gouge, grind, and bevel root faces using angle grinders, carbon arc gouging torches, and pipe beveling machines.',
          'Perform visual weld inspections (VT), checking bead profile, throat thickness, undercut, and weld convexity.',
          'Maintain heat number traceability and stamp approved welder ID numbers adjacent to every completed weld pass.',
        ],
      },
      {
        category: 'Safety & Environmental Standards',
        tasks: [
          'Inspect welding leads, gas regulators, flashback arrestors, and fume extraction arms before commencing hot work.',
          'Comply strictly with hot work permit systems, fire watch rules, and confined space atmospheric testing.',
          'Wear specialized PPE including auto-darkening respirators (PAPR), leather welding leathers, and flame-retardant hoods.',
        ],
      },
    ],
    advantages: [
      {
        title: 'Critical Global Megaproject Demand',
        subtitle: 'Indispensable Technical Skill',
        description:
          'Every industrial turnaround, energy transition project, and advanced infrastructure build depends on verified welders, providing high employment stability and consistent overseas contract offers.',
        badge: 'High Industry Demand',
      },
      {
        title: 'Substantial Overtime & High Earning Capacity',
        subtitle: '€2,500–€3,600/mo + Premium Overtime',
        description:
          'Turnarounds and shutdown projects frequently offer 50-60 hour work weeks with overtime premiums up to 2.0x, enabling exceptional total monthly savings.',
        badge: 'High Shift Premiums',
      },
      {
        title: 'Global Code Certifications (ASME & ISO)',
        subtitle: 'Internationally Transferable Credentials',
        description:
          'Successful client coupons and radiography qualification tests establish permanent credentials in ASME Section IX and ISO 9606-1, opening doors to top-paying projects globally.',
        badge: 'International Codes',
      },
      {
        title: 'Complete Relocation & Site Care',
        subtitle: 'Zero Settlement Hassle',
        description:
          'Employers provide flight tickets, visa sponsorship, furnished living quarters, free work transit, and all required personal protective equipment.',
        badge: '100% Relocation Support',
      },
    ],
    requirements: [
      'Minimum English-speaking ability for safety directives and client coordination.',
      'Relevant welding diploma, ITI Welder certificate, or certified apprenticeship qualification.',
      '2–5 years of relevant welding experience in Europe or certified international fabrication yards.',
      'Practical knowledge of multi-process welding techniques (TIG/MIG/SMAW/FCAW) and modern inverter machines.',
      'Proven ability to interpret technical welding blueprints, WPS documents, and maintain high safety procedures.',
    ],
    certifications: [
      'ISO 9606-1 / ASME Sec IX Welder Qualification Test Certificate',
      'VCA / SCC Basic Safety (or national safety card)',
      'Hot Work & Confined Space Safety Training',
      'Cleanroom Protocol Certification (for orbital welders)',
    ],
    targetCountries: ['Germany', 'Netherlands', 'Norway', 'Poland', 'Czech Republic', 'Belgium'],
  },

  // =========================================================================
  // 3. SCAFFOLDERS
  // =========================================================================
  {
    id: 'scaffolders',
    slug: 'scaffolders',
    title: 'Scaffolders',
    roleNumber: 'Job 03',
    tagline: 'Industrial Access Systems, Suspended Scaffolds & Working-at-Height Specialists',
    heroImage: '/scaffolders-hero.jpg',
    badge: 'Industrial Access & Scaffolding Structures',
    location: 'Europe & Global Megaprojects',
    experience: '2–5 years of relevant professional scaffolding experience in Europe',
    salary: '€2,500–€4,000 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    roleOverview:
      'We are deploying certified, safety-driven Scaffolders to erect, inspect, modify, and dismantle complex modular system scaffolding, suspended platforms, and industrial birdcage frameworks for major European construction and plant shutdown projects.',
    roleScopeParagraphs: [
      'Scaffolders are the backbone of site safety and project velocity. No heavy construction, refinery maintenance, or shipyard overhaul can proceed without engineered, stable, and inspected working-at-height access platforms.',
      'Our scaffolders specialize in European system scaffolds (Layher Allround, Cuplok, Kwikstage) and traditional tube-and-fitting designs, strictly upholding European standard EN 12811 and CISRS/DGUV safety guidelines.',
    ],
    types: [
      {
        title: 'Industrial System Scaffolder (Layher & Cuplok)',
        tagline: 'Modular Access Around Complex Industrial Equipment',
        description:
          'Rapid assembly and modification of modular system scaffolds around spherical storage tanks, distillation columns, industrial piping, and boiler structures during plant turnarounds.',
        typicalSites: 'Chemical plants, oil refineries, power stations, and offshore processing platforms.',
        keyTools: ['Scaffold Spanners & Podgers', 'Magnetic Spirit Levels', 'Ratchet Wrenches', 'Layher Wedge Hammers'],
      },
      {
        title: 'Tube & Fitting Scaffolder',
        tagline: 'Custom Non-Standard Geometric Access Structures',
        description:
          'Erecting bespoke tube-and-fitting scaffolding for complex architectural elevations, bridge piers, irregular heritage structures, and high-load cantilever platforms.',
        typicalSites: 'Bridge rehabilitation, historic building renovations, heavy civil works, and shipyard dry docks.',
        keyTools: ['Forged Swivel Couplers', 'Right-Angle Couplers', 'Sleeve Couplers', 'Torque Wrenches'],
      },
      {
        title: 'Suspended & Cantilever Scaffolder',
        tagline: 'Overhead Hanging Platforms & Offshore Rigs',
        description:
          'Erecting suspended wire-hung platforms and cantilevered outrigger scaffolds over open water or deep voids, utilizing certified girder clamps, wire ropes, and tension ties.',
        typicalSites: 'Offshore oil platforms, deep bridge spans, marine jetties, and skyscraper overhangs.',
        keyTools: ['Girder Clamps & Beam Trolleys', 'Tension Load Cells', 'Safety Fall Arrestors', 'Drop-Forged Eyebolts'],
      },
      {
        title: 'Scaffolding Inspector & Supervisor',
        tagline: 'Statutory Inspections, Scafftag Sign-Off & Crew Leadership',
        description:
          'Conducting mandatory weekly structural stability checks, load calculations, issuing Green Scafftags, leading toolbox safety talks, and overseeing high-risk complex dismantling operations.',
        typicalSites: 'Multi-million Euro turnaround sites, major international EPC construction megaprojects.',
        keyTools: ['Scafftag Management Kits', 'Laser Distance Measurers', 'Structural Deflection Meters', 'JSA Documentation'],
      },
    ],
    responsibilities: [
      {
        category: 'Erection & Assembly',
        tasks: [
          'Inspect ground bearing pressure and soil conditions before laying timber soleplates and adjustable base jacks.',
          'Erect vertical standards, horizontal ledgers, transoms, and diagonal sway bracing per structural load drawings.',
          'Install scaffold wooden and steel deck boards, toe boards, double guardrails, brick guards, and debris safety netting.',
          'Secure scaffold framework to permanent structural columns using certified right-angle ties, anchor bolts, and beam clamps.',
        ],
      },
      {
        category: 'Inspection & Modification',
        tasks: [
          'Inspect completed scaffolds against EN 12811 European design standards and sign off statutory Green Scafftags.',
          'Modify existing scaffold decks safely to accommodate piping teams, insulation crews, and painting contractors.',
          'Conduct mandatory stability re-inspections following high-wind weather events, site impacts, or prolonged idle periods.',
          'Execute systematic dismantling in reverse sequence, passing components safely down using gin wheels and rope hoists.',
        ],
      },
      {
        category: 'Working-at-Height & Crew Safety',
        tasks: [
          'Maintain 100% continuous tie-off using dual-lanyard fall arrest harnesses and inertia reels at all times.',
          'Establish exclusion drop zones underneath scaffold erection and dismantle zones to protect ground personnel.',
          'Lead daily morning Toolbox Talks (TBT) and review Job Safety Analyses (JSA) with scaffolding crew members.',
        ],
      },
    ],
    advantages: [
      {
        title: 'Year-Round Continuous Project Demand',
        subtitle: 'First On Site, Last Off Site',
        description:
          'Scaffolders are needed on virtually every phase of industrial construction, refinery maintenance, and civil works, ensuring continuous year-round employment opportunities.',
        badge: 'Guaranteed Utilization',
      },
      {
        title: 'Attractive Earnings & Turnaround Bonuses',
        subtitle: '€2,500–€4,000/mo + Overtime Rates',
        description:
          'Competitive European hourly pay rates supplemented by extensive overtime hours during scheduled turnaround and shutdown windows.',
        badge: 'High Overtime Pay',
      },
      {
        title: 'Internationally Validated Certifications',
        subtitle: 'CISRS, DGUV & VCA Credentials',
        description:
          'Gain or enhance globally respected credentials such as CISRS cards (UK) and DGUV 201-011 certifications (Germany) that unlock high-paying tiers worldwide.',
        badge: 'Global Accreditations',
      },
      {
        title: 'Complete Visa & Relocation Sponsorship',
        subtitle: 'Free Lodging, Transport & Flights',
        description:
          'Comprehensive employment contracts provide work visa authorization, employer-funded comfortable housing, daily commute vehicles, and complete safety PPE.',
        badge: 'Zero Upfront Expense',
      },
    ],
    requirements: [
      'Minimum English-speaking ability for site induction, daily briefings, and safety coordination.',
      '2–5 years of relevant scaffolding experience on European construction or industrial projects.',
      'Practical knowledge of modular system scaffolding (Layher / Cuplok) and tube-and-fitting equipment.',
      'Comprehensive understanding of working-at-height safety procedures, harness usage, and rescue planning.',
      'Relevant scaffolding training card or safety certifications where required by the hiring European employer.',
    ],
    certifications: [
      'CISRS Card (Scaffolder / Advanced) or DGUV 201-011 German Scaffolding Card',
      'VCA / SCC Safety Passport',
      'Working at Heights Level 2/3 Certification',
      'Scaffold Inspection / Scafftag Certification (for supervisory roles)',
    ],
    targetCountries: ['Netherlands', 'Germany', 'Norway', 'Belgium', 'United Kingdom', 'Sweden'],
  },

  // =========================================================================
  // 4. CRANE OPERATORS – CONTAINER TERMINALS AT THE PORT
  // =========================================================================
  {
    id: 'crane-operators',
    slug: 'crane-operators',
    title: 'Crane Operators – Container Terminals at the Port',
    roleNumber: 'Job 04',
    tagline: 'Ship-to-Shore (STS), RTG & Intermodal Maritime Terminal Specialists',
    heroImage: '/crane-operators-hero.jpg',
    badge: 'Maritime Port Logistics & Heavy Container Handling',
    location: 'Europe & Global Megaprojects',
    experience: '2–5 years of relevant professional crane-operation experience in Europe or modern container terminals',
    salary: '€2,500–€3,500 per month (indicative gross salary)',
    salaryNote:
      'Indicative gross monthly estimate, not a guaranteed offer. Final compensation depends on destination country, employer, and shift schedules.',
    roleOverview:
      'We are deploying experienced, certified Crane Operators to operate container-handling gantry cranes at premier European and international seaports, handling continuous vessel loading, discharging, yard stacking, and freight intermodal logistics.',
    roleScopeParagraphs: [
      'Container terminal crane operators hold pivotal roles in global supply chain logistics. Operating high-tonnage Ship-to-Shore (STS) and Rubber-Tired Gantry (RTG) cranes requires supreme spatial awareness, steady hand-eye coordination, and calm composure at heights over 50 meters.',
      'Operators work with cutting-edge automated spreader systems, computerized Terminal Operating Systems (TOS), and camera-assisted cabin controls, achieving high container moves per hour while strictly upholding zero-accident port safety mandates.',
    ],
    types: [
      {
        title: 'Ship-to-Shore (STS) Quay Crane Operator',
        tagline: 'Discharging & Loading Ultra-Large Container Vessels (ULCV)',
        description:
          'Operating high-speed quay cranes reaching up to 24 container rows across mega vessels, hoisting and lowering 20ft, 40ft, and 45ft containers between ship cell guides and terminal transfer chassis.',
        typicalSites: 'Major deep-water seaport container terminals (Rotterdam, Hamburg, Antwerp, Felixstowe).',
        keyTools: ['Telescopic Spreader Heads', 'Anti-Sway Computer Systems', 'Vessel Cell Guide Monitors', 'TOS Touchscreens'],
      },
      {
        title: 'Rubber-Tired Gantry (RTG) Yard Crane Operator',
        tagline: 'High-Density Yard Stacking & Internal Truck Transfer',
        description:
          'Navigating diesel and electric RTG cranes across terminal yard blocks, stacking containers up to 1-over-6 high and loading/discharging internal transfer vehicles (ITV) and external road hauliers.',
        typicalSites: 'High-throughput seaport storage yards, dry ports, and inland intermodal hubs.',
        keyTools: ['Auto-Steering Systems', 'Stack Collision Sensors', 'Digital Load Weight Indicators', 'Container Position Radios'],
      },
      {
        title: 'Rail-Mounted Gantry (RMG) Intermodal Operator',
        tagline: 'Seamless Sea-to-Rail Intermodal Transfer',
        description:
          'Operating wide-span rail-mounted cranes spanning multiple rail tracks and container buffer lanes, loading and securing containers onto freight railway wagons.',
        typicalSites: 'Seaport on-dock rail terminals, inland multimodal rail hubs, and logistics freight corridors.',
        keyTools: ['Automated Rail Positioning Guides', 'Twistlock Verification Cameras', 'Rail Shunter Two-Way Radios'],
      },
      {
        title: 'Mobile Harbor Crane (MHC) Operator',
        tagline: 'Flexible Multi-Purpose Port & Bulk Berth Handling',
        description:
          'Operating heavy rubber-tired mobile harbor cranes (Liebherr, Gottwald) capable of shifting between container spreaders, heavy-lift project cargo hooks, and bulk grabs.',
        typicalSites: 'Multi-purpose river ports, bulk maritime terminals, and general cargo docks.',
        keyTools: ['Rotating Slewing Cabins', 'Heavy Cargo Lifting Slings', 'Automatic Outrigger Pads', 'LMI Computer Displays'],
      },
    ],
    responsibilities: [
      {
        category: 'Precision Crane Operation',
        tasks: [
          'Operate cabin-controlled and remote container-handling cranes to safely hoist, traverse, trolley, and lower standard and high-cube shipping containers.',
          'Align telescopic spreader twistlocks smoothly into container corner castings under challenging wind and vessel surge conditions.',
          'Execute blind and semi-blind crane lifts guided by ground signalmen (banksmen / hatch clerks) via dedicated two-way VHF radio protocols.',
          'Achieve sustained operational productivity targets (target moves per hour) with zero container or vessel hull damage.',
        ],
      },
      {
        category: 'Pre-Shift Inspection & Safety Systems',
        tasks: [
          'Conduct mandatory pre-shift inspections of hoist wire ropes, braking systems, hydraulic spreaders, limit switches, and emergency stops.',
          'Monitor computerized Load Moment Indicators (LMI) and gross container weight readouts to prevent structural crane overload.',
          'Respond instantly to high-wind anemometer warning alarms, parking and storm-pinning cranes according to terminal gale procedures.',
          'Report all mechanical, electrical, or hydraulic anomalies immediately to terminal maintenance engineering teams.',
        ],
      },
    ],
    advantages: [
      {
        title: 'Prestige Roles in Global Maritime Logistics',
        subtitle: 'Driving International Trade Velocity',
        description:
          'Container crane operators are celebrated key workers at the core of international trade networks, enjoying high professional standing and strong job stability.',
        badge: 'High-Status Logistics Career',
      },
      {
        title: 'Competitive European Salaries & Performance Bonuses',
        subtitle: '€2,500–€3,500/mo + Move Bonuses',
        description:
          'Reliable monthly base compensation augmented by terminal productivity incentives, shift premiums, and weekend night differential allowances.',
        badge: 'Productivity Incentives',
      },
      {
        title: 'Ergonomic, Climate-Controlled Workspaces',
        subtitle: 'Advanced Technology Operator Cabs',
        description:
          'Work inside modern, heated, and air-conditioned operator cabins fitted with vibration-absorbing seats, intuitive electronic joysticks, and HD camera feeds.',
        badge: 'Ergonomic Working Environment',
      },
      {
        title: 'Full Visa Sponsorship & Living Quarters',
        subtitle: '100% Legal International Placement',
        description:
          'Dais World Endeavor ensures complete European work visa compliance, employer-provided comfortable housing, health insurance, and paid annual leave flights.',
        badge: 'Full Expat Package',
      },
    ],
    requirements: [
      'Minimum English-speaking ability for terminal communications, radio coordination, and safety instructions.',
      'Relevant crane-operation diploma, licence, or qualification as required locally (e.g., EU / CPCS / National Port License).',
      '2–5 years of relevant crane-operation experience in Europe or modern container terminals.',
      'Proven experience operating container terminals, STS, RTG, or mobile harbor cranes is strongly preferred.',
      'Deep knowledge of lifting procedures, container handling, load charts, and maritime port workplace safety standards.',
    ],
    certifications: [
      'Heavy Crane Operator License (Port / Gantry / STS / RTG)',
      'Medical Fitness Certificate (Depth perception, vision, height tolerance)',
      'VCA / Safety at Sea / Port Safety Passport',
      'Radio Communication (VHF) Certification',
    ],
    targetCountries: ['Netherlands', 'Germany', 'Belgium', 'United Kingdom', 'Poland', 'Spain'],
  },
];

