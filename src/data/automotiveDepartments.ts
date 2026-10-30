import {
  Compass,
  Wrench,
  Factory,
  Zap,
  ClipboardCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AutomotiveRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface AutomotiveDepartment {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  route: string;
  icon: LucideIcon;
  color: string;
  badgeColor: string;
  heroImage: string;
  heroPosition?: string;
  cardImage: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  perksHighlights: string;
  stats: { label: string; value: string }[];
  roles: AutomotiveRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const automotiveDepartments: AutomotiveDepartment[] = [
  // =========================================================================
  // 1. AUTOMOTIVE ENGINEERING & DESIGN
  // =========================================================================
  {
    id: 'automotive-engineering-design',
    slug: 'engineering-design',
    title: 'Automotive Engineering & Design',
    shortTitle: 'Engineering & Design',
    route: '/services/automotive/engineering-design',
    icon: Compass,
    color: 'from-red-600 to-rose-600',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    heroImage: '/automotive-engineering-hero.jpg',
    heroPosition: 'center 15%',
    cardImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    tagline: 'Precision CAD/CAM Modeling, Aerodynamic Simulation & Powertrain Architecture',
    shortDescription:
      'Connecting Design Engineers, CAD Modelers, Powertrain Specialists, and CFD Analysts with top European automotive OEMs and motorsport technical centers.',
    overview:
      'Our Automotive Engineering & Design division places world-class mechanical, automotive, and simulation engineers across Germany, Sweden, Italy, the UK, the Netherlands, and Japan. Engineers collaborate on conceptual vehicle styling, Body-in-White (BIW) structures, advanced aerodynamic modeling, structural crash simulation, and next-generation thermal powertrain architecture using industry-standard tools like CATIA V5/V6, Siemens NX, and ANSYS.',
    perksHighlights:
      'Premium European engineering salaries, direct R&D center contracts, international relocation assistance, family visa sponsorship, and exposure to cutting-edge hypercar and EV prototype platforms.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€4,200 – €7,800/mo' },
      { label: 'OEM & Tier-1 Partners', value: '45+ Technical Centers' },
      { label: 'Relocation Assistance', value: '100% Comprehensive' },
      { label: 'Visa Sponsorship', value: 'Full Work Permit' },
    ],
    roles: [
      {
        title: 'Automotive CAD Design Engineer (CATIA / Siemens NX)',
        badge: 'High OEM Demand',
        salaryRange: '€4,200 – €6,500 / month',
        description:
          'Developing 3D surface models and structural components for chassis, interiors, and Body-in-White (BIW) in accordance with global automotive safety standards.',
        responsibilities: [
          'Generate class-A surface models and production-ready solid geometry using CATIA V5/3DEXPERIENCE or Siemens NX.',
          'Design structural BIW panels, brackets, closures, and plastic injection interior trim components.',
          'Execute packaging and clearance studies to resolve spatial clashes with adjacent subsystems.',
          'Implement Design for Manufacturing (DFM) and Design for Assembly (DFA) methodologies in close coordination with tooling teams.',
          'Manage Engineering Change Orders (ECOs) and product lifecycle documentation via Teamcenter or Enovia.',
        ],
        qualifications: [
          'Bachelor’s or Master’s in Mechanical, Automotive, or Aerospace Engineering.',
          '3+ years of professional CAD modeling experience within OEM or Tier-1 automotive suppliers.',
          'Demonstrated expertise in CATIA V5/V6 surfacing or Siemens NX drafting and geometric dimensioning (GD&T).',
        ],
        skills: [
          'CATIA V5 / Siemens NX',
          'GD&T & Tolerance Stack-up',
          'BIW & Interior Trim Design',
          'DFM / DFA Principles',
          'Teamcenter PLM',
        ],
        experience: '3+ years in automotive product development.',
      },
      {
        title: 'Powertrain & Transmission Development Engineer',
        badge: 'Core Propulsion Craft',
        salaryRange: '€4,500 – €7,200 / month',
        description:
          'Engineering internal combustion, hybrid, and electric propulsion systems, optimizing thermal management, gearboxes, and fuel efficiency.',
        responsibilities: [
          'Design and analyze crankshaft, cylinder head, valvetrain, and transmission gear assemblies.',
          'Simulate fluid dynamics and thermal dissipation across cooling circuits and turbocharger housings.',
          'Conduct dynamometer engine calibration and test bench data analysis for emissions and fuel economy compliance.',
          'Collaborate with calibration teams to fine-tune Engine Control Unit (ECU) parameters.',
          'Investigate powertrain durability, NVH (Noise, Vibration, Harshness), and fatigue lifecycles.',
        ],
        qualifications: [
          'B.Tech / M.Tech in Automotive, Thermal, or Mechanical Engineering.',
          '4+ years in engine, transmission, or hybrid powertrain design.',
          'Hands-on experience with 1D/3D simulation software (GT-POWER, MATLAB/Simulink).',
        ],
        skills: [
          'Powertrain Thermodynamics',
          'Transmission Geartrain Design',
          'GT-POWER / AVL BOOST',
          'ECU Calibration Support',
          'Thermal Management Systems',
        ],
        experience: '4+ years in automotive propulsion systems.',
      },
      {
        title: 'Chassis & Vehicle Dynamics Engineer',
        badge: 'Handling & Safety',
        salaryRange: '€4,000 – €6,800 / month',
        description:
          'Optimizing suspension geometry, steering response, brake systems, and ride dynamics for premium passenger and commercial vehicles.',
        responsibilities: [
          'Design multi-link suspension kinematics, anti-roll bars, subframes, and steering rack mounts.',
          'Run multi-body dynamic simulations in Adams/Car or CarSim to evaluate ride comfort and handling stability.',
          'Specify damper tuning curves, spring rates, and bushing compliances based on virtual track test results.',
          'Coordinate brake system sizing, hydraulic booster calculations, and ESC tuning integration.',
          'Perform physical vehicle track tests with telemetry data acquisition equipment.',
        ],
        qualifications: [
          'Degree in Mechanical or Automotive Engineering.',
          '3+ years focusing on vehicle dynamics, suspension, or steering systems.',
        ],
        skills: [
          'Adams/Car & CarSim Simulation',
          'Suspension Kinematics & Elasto-kinematics',
          'Braking System Calculations',
          'Data Acquisition & Telemetry',
        ],
        experience: '3+ years in chassis engineering.',
      },
      {
        title: 'Body-in-White (BIW) Structural Simulation Engineer (CAE / Crash)',
        badge: 'Safety Compliance',
        salaryRange: '€4,600 – €7,800 / month',
        description:
          'Simulating crashworthiness, occupant safety, and structural stiffness using explicit FEA solvers like LS-DYNA, PAM-CRASH, or RADIOSS.',
        responsibilities: [
          'Build high-fidelity finite element crash models for frontal, side, rollover, and pedestrian impact simulations.',
          'Analyze structural deformation, energy absorption, and deceleration pulses adhering to Euro NCAP and US FMVSS criteria.',
          'Optimize high-strength steel (AHSS) and aluminum extrusion gauges to minimize curb weight while retaining crash safety.',
          'Perform modal analysis and static torsional/bending stiffness calculations.',
          'Deliver root-cause recommendations for structural reinforcing and spot-weld placement.',
        ],
        qualifications: [
          'Master’s degree in Structural Mechanics, Finite Element Analysis, or Automotive Engineering.',
          '3+ years using LS-DYNA, Primer, HyperMesh, or ANSA.',
        ],
        skills: [
          'LS-DYNA / PAM-CRASH',
          'HyperMesh / ANSA Pre-processing',
          'Euro NCAP & Crashworthiness Standards',
          'Material Characterization & Plasticity',
        ],
        experience: '3+ years in crash & safety simulation.',
      },
    ],
    keyResponsibilities: [
      'Architect concept-to-production automotive subsystems adhering to Euro NCAP, UNECE, and ISO regulations.',
      'Produce comprehensive 3D CAD models, 2D detailed engineering drawings, and GD&T tolerance calculations.',
      'Conduct multi-physics finite element analysis (FEA) and computational fluid dynamics (CFD) virtual simulations.',
      'Interface directly with tooling suppliers, prototype build shops, and production manufacturing lines.',
      'Participate in design verification plan & report (DVP&R) creation and physical prototype testing validations.',
    ],
    qualifications: [
      'Bachelor’s or Master’s in Mechanical, Automotive, Mechatronics, or Aerospace Engineering.',
      'Proficiency in industry-standard software: CATIA, Siemens NX, SolidWorks, ANSYS, or LS-DYNA.',
      'Strong understanding of automotive manufacturing processes (stamping, injection molding, die casting).',
      'Solid command of technical English for international R&D cross-functional team collaboration.',
    ],
    requiredSkills: [
      'Parametric 3D CAD Modeling',
      'FEA Structural & Thermal Simulation',
      'Class-A Surfacing',
      'GD&T & Tolerance Stack-ups',
      'DFM, DFA & FMEA Protocols',
      'Teamcenter & Enovia PLM',
    ],
    careerOpportunities: [
      'Work on prestigious European luxury, sports car, and electric hypercar platforms.',
      'Direct permanent contracts with leading German, Swedish, and Italian automotive OEM brands.',
      'High expat compensation packages with performance bonuses and project milestone incentives.',
      'Structured technical leadership tracks toward Lead Design Engineer and Chief Vehicle Architect.',
    ],
  },

  // =========================================================================
  // 2. VEHICLE MAINTENANCE & REPAIR
  // =========================================================================
  {
    id: 'vehicle-maintenance-repair',
    slug: 'maintenance-repair',
    title: 'Vehicle Maintenance & Repair',
    shortTitle: 'Maintenance & Repair',
    route: '/services/automotive/maintenance-repair',
    icon: Wrench,
    color: 'from-amber-600 to-red-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    heroImage: '/vehicle-maintenance-hero.png',
    cardImage: '/vehicle-maintenance-hero.png',
    tagline: 'Dealership Diagnostics, Mechanical Overhauls & Multi-Brand Fleet Servicing',
    shortDescription:
      'Recruiting Master Auto Mechanics, Diagnostic Technicians, Heavy Commercial Vehicle Fitters, and Bodyshop Repairers for authorized European workshops.',
    overview:
      'Our Vehicle Maintenance & Repair division connects seasoned automotive mechanics, computerized diagnostic specialists, and body-shop technicians with authorized brand dealerships (BMW, Mercedes-Benz, VAG, Volvo, Stellantis) and multi-brand fleet service centers across Germany, the Netherlands, Norway, Poland, the UAE, and Qatar. Candidates excel at electronic fault tracing, automatic transmission rebuilding, brake overhauls, engine rebuilding, and climate system servicing.',
    perksHighlights:
      'Guaranteed base salary with overtime bonuses, brand factory certification training (Bosch / OEM), brand-new tooling sets provided by employers, and full relocation visa processing.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,800 – €5,200/mo' },
      { label: 'Authorized Workshop Partners', value: '90+ Dealerships' },
      { label: 'Tool Allowance & Uniforms', value: '100% Provided' },
      { label: 'Visa Sponsorship', value: 'Full Support' },
    ],
    roles: [
      {
        title: 'Master Automotive Diagnostic Technician',
        badge: 'Top Workshop Demand',
        salaryRange: '€3,200 – €5,200 / month',
        description:
          'Utilizing advanced computerized scan tools, digital oscilloscopes, and wiring schematics to troubleshoot complex electrical, CAN-bus, and powertrain malfunctions.',
        responsibilities: [
          'Connect OEM diagnostic systems (ODIS, ISTA, Xentry) to read, decipher, and clear Diagnostic Trouble Codes (DTCs).',
          'Diagnose complex intermittent sensor, actuator, CAN-bus, and LIN communication failures.',
          'Perform compression, cylinder leak-down, and fuel rail pressure dynamic diagnostic tests.',
          'Execute software updates, module reprogramming, and component calibration after parts replacement.',
          'Mentor junior apprentice mechanics on complex diagnostic logic and safety guidelines.',
        ],
        qualifications: [
          'Diploma / Vocational Certificate (ITI / Polytechnic) in Automobile or Mechanical Engineering.',
          '3–7+ years of diagnostic experience in authorized OEM dealership centers.',
          'Proficiency with diagnostic platforms like Bosch KTS, Snap-On, or OEM proprietary software.',
        ],
        skills: [
          'Computerized ECU Diagnostics (ISTA, ODIS, Xentry)',
          'Automotive Oscilloscopes & Multimeters',
          'CAN / LIN Bus Network Troubleshooting',
          'Component Coding & Calibration',
        ],
        experience: '3+ years in computerized automotive diagnostics.',
      },
      {
        title: 'Certified Auto Mechanic (Engine & Transmission Specialist)',
        badge: 'Core Mechanical Role',
        salaryRange: '€2,800 – €4,400 / month',
        description:
          'Conducting mechanical teardowns, engine rebuilds, timing chain replacements, clutch repairs, and transmission overhauls.',
        responsibilities: [
          'Disassemble, inspect, hone, and rebuild internal combustion engines (petrol, diesel, hybrid).',
          'Replace timing belts/chains, water pumps, oil pumps, and variable valve timing phasers with exact timing marks.',
          'Remove, overhaul, and reinstall automatic, dual-clutch (DSG), and manual transmissions.',
          'Inspect and renew steering racks, control arms, MacPherson struts, and multi-link suspension bushings.',
          'Perform routine periodic services: oil/filter changes, spark plug replacements, brake pads and rotor resurfacing.',
        ],
        qualifications: [
          'ITI / Vocational Diploma in Motor Vehicle Mechanic (MMV).',
          '3+ years practical experience in high-volume passenger vehicle service bays.',
        ],
        skills: [
          'Engine Rebuilding & Cylinder Head Overhaul',
          'Timing Belt & Chain Replacement',
          'Gearbox & Dual-Clutch Servicing',
          'Brake System Overhauling',
        ],
        experience: '3+ years in mechanical vehicle repair.',
      },
      {
        title: 'Heavy Vehicle & Commercial Fleet Mechanic',
        badge: 'Commercial Fleet',
        salaryRange: '€3,100 – €4,800 / month',
        description:
          'Maintaining heavy commercial trucks, prime movers, municipal buses, and diesel transport fleets across European logistics hubs.',
        responsibilities: [
          'Service heavy commercial diesel engines (Scania, Volvo, MAN, Mercedes-Benz Actros).',
          'Maintain pneumatic air brake circuits, air compressors, and EBS brake regulators.',
          'Overhaul heavy drive axles, differential units, propeller shafts, and fifth-wheel couplings.',
          'Troubleshoot DEF/AdBlue selective catalytic reduction (SCR) emissions and DPF filtration systems.',
          'Conduct European roadworthiness statutory vehicle inspections (TÜV / MOT preparation).',
        ],
        qualifications: [
          'Technical Diploma / ITI in Heavy Diesel Commercial Vehicles.',
          '3+ years maintaining heavy trucks, semi-trailers, or transit buses.',
        ],
        skills: [
          'Heavy Commercial Diesel Engines',
          'Air Brake Systems (WABCO / Knorr-Bremse)',
          'SCR / DPF Aftertreatment Systems',
          'Differential & Axle Overhaul',
        ],
        experience: '3+ years with heavy commercial trucks/buses.',
      },
      {
        title: 'Collision Repair & Auto Body Panel Technician (Denter)',
        badge: 'Bodyshop Craft',
        salaryRange: '€2,700 – €4,200 / month',
        description:
          'Restoring damaged vehicle frames, chassis alignment, pulling dents, and replacing welded/bonded steel and aluminum body panels.',
        responsibilities: [
          'Mount crash-damaged vehicles on electronic chassis measuring benches (Car-O-Liner / Celette).',
          'Perform structural chassis pulling and laser dimensional realignment back to factory tolerances.',
          'Cut, fit, and weld high-strength steel and aluminum panels utilizing MIG/MAG and spot welding machines.',
          'Execute paintless dent repair (PDR) and traditional pin-pulling panel straightening.',
          'Align door gaps, hood, trunk lids, and exterior bumpers for flawless panel fitment.',
        ],
        qualifications: [
          'Vocational certification in Automotive Body Repair & Collision Technology.',
          '3+ years in accredited insurance collision repair facilities.',
        ],
        skills: [
          'Chassis Jig & Bench Realignment',
          'MIG / MAG & Resistance Spot Welding',
          'Aluminum & Steel Panel Shaping',
          'Paintless Dent Removal (PDR)',
        ],
        experience: '3+ years in automotive body repair.',
      },
    ],
    keyResponsibilities: [
      'Perform detailed mechanical, electrical, and computerized diagnostics on modern multi-brand automobiles.',
      'Execute engine, transmission, steering, suspension, and brake system repairs to manufacturer specs.',
      'Utilize OEM digital workshop manuals, torque sequences, and electrical wiring schematics.',
      'Inspect and service vehicle air conditioning, heating (R134a / R1234yf), and fluid circulation systems.',
      'Prepare vehicles for European statutory roadworthiness, safety, and emission compliance inspections.',
    ],
    qualifications: [
      'ITI, Diploma, or National Vocational Qualification in Motor Vehicle Technology or Mechanical Engineering.',
      'Valid driver’s license (heavy vehicle endorsement is an added benefit).',
      'Proven experience working with modern automotive diagnostic scanners and workshop equipment.',
      'Commitment to workplace safety, ISO repair procedures, and clean workshop organization.',
    ],
    requiredSkills: [
      'Electronic Fault Tracing & Scanning',
      'Engine & Transmission Overhaul',
      'Brake & Hydraulic System Maintenance',
      'Automotive Air Conditioning Servicing',
      'Suspension & Wheel Alignment',
      'Pneumatic & Electrical Schematics',
    ],
    careerOpportunities: [
      'Secure long-term contracts with premier European auto dealership groups and national fleet operators.',
      'Subsidized certifications for High-Voltage EV Level 1/2 safety and Master Diagnostic Technicians.',
      'Overtime earning opportunities averaging an additional €400 to €800 per month.',
      'Clear progression to Workshop Supervisor, Service Advisor, or Bodyshop Technical Manager.',
    ],
  },

  // =========================================================================
  // 3. AUTOMOTIVE MANUFACTURING & PRODUCTION
  // =========================================================================
  {
    id: 'automotive-manufacturing-production',
    slug: 'manufacturing-production',
    title: 'Automotive Manufacturing & Production',
    shortTitle: 'Manufacturing & Production',
    route: '/services/automotive/manufacturing-production',
    icon: Factory,
    color: 'from-rose-600 to-orange-600',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    heroImage: '/automotive-manufacturing-hero.jpg',
    cardImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Speed Assembly Plants, Robotic Spot-Welding, Stamping Presses & Line Leadership',
    shortDescription:
      'Supplying Production Technicians, Robotic Welding Cell Operators, CNC Machinists, and Assembly Line Supervisors for advanced European gigafactories.',
    overview:
      'Our Automotive Manufacturing & Production division staffs high-throughput vehicle assembly plants, tier-1 stamping facilities, and automated powertrain component factories across Germany, Czech Republic, Slovakia, Poland, and Hungary. We supply skilled line operators, automated robotic spot-welding technicians (KUKA, ABB, Fanuc), CNC machining specialists, automated paint shop operators, and production shift leaders who ensure strict takt-time efficiency.',
    perksHighlights:
      'Guaranteed EU labor contracts, subsidized plant canteen meals, rotating shift premiums (+25% to +40%), company accommodation support, and full visa sponsorship.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€2,900 – €5,400/mo' },
      { label: 'European Gigafactories', value: '60+ Production Plants' },
      { label: 'Shift Premiums & Bonuses', value: '+30% Extra Pay' },
      { label: 'Visa & Work Permits', value: '100% Guaranteed' },
    ],
    roles: [
      {
        title: 'Automotive Assembly Line Production Specialist',
        badge: 'High Plant Demand',
        salaryRange: '€2,800 – €4,100 / month + Shift Allowance',
        description:
          'Operating assembly stations for engine sub-assembly, interior cockpits, doors, wiring harnesses, and final vehicle trim line integration.',
        responsibilities: [
          'Install sub-assemblies (dashboard, seats, airbags, windshields) within strict cycle takt times.',
          'Operate pneumatic and electric torque-controlled nutrunners, ensuring recorded fastener torque verification.',
          'Follow standard operating sheets (SOS) and line-side 5S lean manufacturing guidelines.',
          'Identify and flag component defects, cosmetic imperfections, and fitting misalignments before vehicle departure.',
          'Participate in Kaizen continuous improvement cycles to reduce station cycle time.',
        ],
        qualifications: [
          'High School Diploma, ITI, or Vocational Certificate in Manufacturing, Fitter, or Mechanical trade.',
          '1–3+ years of experience in automotive or industrial manufacturing assembly lines.',
        ],
        skills: [
          'Assembly Line Takt Time Adherence',
          'Torque Tool Operation & Calibration',
          'Lean Manufacturing & 5S Principles',
          'Poka-Yoke Error-Proofing',
        ],
        experience: '1+ years in automotive manufacturing assembly.',
      },
      {
        title: 'Industrial Robotics & Automated Welding Cell Operator (KUKA / Fanuc / ABB)',
        badge: 'Robotics & Automation',
        salaryRange: '€3,300 – €4,900 / month',
        description:
          'Setting up, monitoring, and maintaining robotic resistance spot welding, laser seam welding, and structural gluing cells for BIW production.',
        responsibilities: [
          'Operate automated welding robots (KUKA, Fanuc, ABB) across body-in-white (BIW) framing stations.',
          'Execute weld seam inspection, chisel testing, and ultrasonic non-destructive weld integrity verification.',
          'Teach robot path touch-ups, change electrode welding tips, and calibrate automatic tip dressers.',
          'Troubleshoot cell interlocks, safety light curtains, pneumatic clamping fixtures, and PLC fault signals.',
          'Perform preventative maintenance on robot arms, weld cables, and pneumatic water cooling lines.',
        ],
        qualifications: [
          'Diploma / ITI in Mechatronics, Electrical, Instrumentation, or Robotic Automation.',
          '2+ years operating automated industrial robotic welding or assembly cells.',
        ],
        skills: [
          'KUKA / Fanuc / ABB Robot Operation',
          'Resistance Spot & Laser Seam Welding',
          'Ultrasonic Weld Quality Inspection',
          'Fixture Calibration & Tip Dressing',
        ],
        experience: '2+ years with automotive industrial robotics.',
      },
      {
        title: 'Automotive CNC Machinist & Tool/Die Maker',
        badge: 'Precision Craft',
        salaryRange: '€3,100 – €4,800 / month',
        description:
          'Machining engine blocks, cylinder heads, transmission casings, and maintaining heavy stamping dies and plastic injection molds.',
        responsibilities: [
          'Set up and operate 3-axis and 5-axis CNC milling, turning, and grinding centers (Siemens / Fanuc / Heidenhain).',
          'Load raw aluminum castings, forgings, and steel billets, running precision machining routines.',
          'Inspect machined bores, bearing journals, and valve seats with micrometers, bore gauges, and CMM arms.',
          'Perform die spotting, sharpening, polishing, and restorative welding on heavy stamping press dies.',
          'Replace worn cutting inserts, adjust tool offsets, and monitor coolant concentration and chip evacuation.',
        ],
        qualifications: [
          'ITI / Diploma in Machinist, Tool & Die Making, or Mechanical Engineering.',
          '3+ years machining high-precision metal parts in automotive or aerospace domains.',
        ],
        skills: [
          '5-Axis CNC Milling & Turning',
          'Tool & Die Maintenance & Spotting',
          'Fanuc / Siemens CNC Controllers',
          'Precision Metrology Measuring',
        ],
        experience: '3+ years in CNC automotive machining.',
      },
      {
        title: 'Paint Shop Automated Coating Specialist',
        badge: 'Surface Finishing',
        salaryRange: '€3,000 – €4,600 / month',
        description:
          'Operating automated cathodic electrodeposition (E-coat), primer, basecoat, and clearcoat robotic spray booths for automotive car bodies.',
        responsibilities: [
          'Oversee robotic electrostatic rotary bell paint atomizers (Durr / Eisenmann) inside cleanroom spray booths.',
          'Monitor chemical immersion bath parameters (pH, conductivity, temperature) in the cathodic dip painting (KTL) tank.',
          'Inspect painted vehicle shells for paint run, orange peel, dust inclusions, and coating film thickness.',
          'Mix paints, solvent thinners, and hardeners adhering to precise viscosity and color spectrophotometer formulas.',
          'Maintain high cleanliness standards within cleanroom air-handling and humidity control units.',
        ],
        qualifications: [
          'Diploma / Certificate in Surface Coating, Chemical Technology, or Automotive Painting.',
          '2+ years in automotive OEM automated paint shops.',
        ],
        skills: [
          'Robotic Spray Painting (Durr / Fanuc)',
          'E-Coat / KTL Dip Tank Chemistry',
          'Paint Thickness & Gloss Meter Inspection',
          'Cleanroom Safety Protocols',
        ],
        experience: '2+ years in automotive surface coating.',
      },
    ],
    keyResponsibilities: [
      'Operate advanced automotive manufacturing stations adhering strictly to cycle takt times and production quotas.',
      'Monitor automated welding, stamping, machining, and paint shop machinery, rectifying line stoppages promptly.',
      'Maintain comprehensive production logbooks, scrap counts, and total productive maintenance (TPM) records.',
      'Enforce European environmental health and safety (EHS) and occupational safety guidelines on the plant floor.',
      'Collaborate with continuous improvement teams to enhance First Time Quality (FTQ) yield metrics.',
    ],
    qualifications: [
      'High School Diploma, ITI, or Polytechnic Diploma in Mechanical, Electrical, Mechatronics, or Production Engineering.',
      'Previous experience in high-volume serial manufacturing (automotive, appliances, or machinery).',
      'Willingness to work on rotational 3-shift schedules (morning, afternoon, night) with overtime incentives.',
      'Physical fitness, high manual dexterity, and a safety-first mindset.',
    ],
    requiredSkills: [
      'Automated Assembly Operations',
      'Robotics & PLC Fault Identification',
      'CNC Machining & Tool Setting',
      'Poka-Yoke & First Time Quality (FTQ)',
      'Total Productive Maintenance (TPM)',
      'Lean Manufacturing & Kanban Systems',
    ],
    careerOpportunities: [
      'Fast-track progression to Line Group Leader, Shift Supervisor, and Production Area Manager.',
      'Direct contracts with renowned European automotive gigafactories (Germany, Poland, Czechia, Slovakia).',
      'Attractive shift premiums and year-end production milestone bonuses.',
      'Subsidized training programs in automated robotics, Six Sigma, and industrial automation.',
    ],
  },

  // =========================================================================
  // 4. AUTOMOTIVE ELECTRICAL & ELECTRIC VEHICLES (EV)
  // =========================================================================
  {
    id: 'automotive-electrical-ev',
    slug: 'electrical-ev',
    title: 'Automotive Electrical & Electric Vehicles (EV)',
    shortTitle: 'Electrical & EV',
    route: '/services/automotive/electrical-ev',
    icon: Zap,
    color: 'from-red-600 to-amber-500',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    heroImage: '/automotive-ev-hero.jpg',
    cardImage: 'https://images.unsplash.com/photo-1558441719-aa34ab5f34e8?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Voltage Battery Packs, Inverter Electronics, Motor Calibration & ADAS Sensors',
    shortDescription:
      'Placing certified High-Voltage EV Technicians, Battery Integration Specialists, Auto-Electricians, and Autonomous Sensor Calibration Engineers.',
    overview:
      'Our Automotive Electrical & Electric Vehicles (EV) division spearheads international placements for the fast-evolving e-mobility transformation. We recruit high-voltage battery specialists, power electronics technicians, auto-electricians, and ADAS sensor calibration engineers for electric vehicle gigafactories, EV charging infrastructure companies, and advanced e-mobility development labs in the Netherlands, Germany, Norway, France, the UK, and Sweden.',
    perksHighlights:
      'Industry-leading compensation packages for certified high-voltage EV specialists, employer-sponsored European High-Voltage Safety Certifications (DGUV 209-093 / IMI Level 3-4), and relocation flight assistance.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€3,400 – €6,800/mo' },
      { label: 'EV Gigafactory Partners', value: '30+ E-Mobility Centers' },
      { label: 'High-Voltage Safety Certs', value: 'Fully Sponsored' },
      { label: 'Processing Timeline', value: '6 – 10 Weeks' },
    ],
    roles: [
      {
        title: 'Electric Vehicle (EV) High-Voltage Systems Technician',
        badge: 'E-Mobility Specialized',
        salaryRange: '€3,500 – €5,800 / month',
        description:
          'Safely de-energizing, diagnosing, repairing, and re-commissioning 400V / 800V lithium-ion traction battery packs, inverters, and on-board chargers.',
        responsibilities: [
          'Perform electrical isolation, de-energization, and lock-out/tag-out (LOTO) protocols on high-voltage (HV) systems.',
          'Diagnose faults in high-voltage traction batteries, DC-DC converters, and three-phase AC electric drive motors.',
          'Replace degraded battery cell modules, contactors, pyro-fuses, and battery management monitoring boards.',
          'Test insulation resistance and ground-bond integrity using calibrated high-voltage insulation megohmmeter testers.',
          'Monitor battery thermal cooling circuits, chillers, and positive temperature coefficient (PTC) cabin heaters.',
        ],
        qualifications: [
          'Diploma / Degree in Electrical Engineering, Mechatronics, or Automotive Electronics.',
          'Certification in High-Voltage Vehicle Safety (DGUV 209-093, IMI Level 3/4, or equivalent).',
          '2+ years working directly with electric, hybrid, or plug-in hybrid vehicle electrical systems.',
        ],
        skills: [
          'High-Voltage Safety & Isolation (400V/800V)',
          'Battery Module Diagnostics & Swapping',
          'Inverter & Traction Motor Testing',
          'Insulation Resistance Megohmmeter Testing',
        ],
        experience: '2+ years in electric vehicle powertrain service.',
      },
      {
        title: 'Auto-Electrician & Wiring Harness Specialist',
        badge: 'Core Electrical Role',
        salaryRange: '€2,900 – €4,600 / month',
        description:
          'Installing, repairing, and tracing complex multi-wire vehicle harnesses, relay boxes, lighting systems, and body control modules (BCM).',
        responsibilities: [
          'Read and decipher complex automotive electrical schematics and connector pin-out diagrams.',
          'Trace open circuits, short-to-ground, parasitic battery drains, and high-resistance wiring faults.',
          'Perform mil-spec crimping, terminal de-pinning, soldering, and harness heat-shrink weather-proofing.',
          'Install and calibrate aftermarket accessories: telematics trackers, dashcams, alarm systems, and emergency vehicle lights.',
          'Diagnose starter motor, alternator, dual-battery auxiliary systems, and smart charging relays.',
        ],
        qualifications: [
          'Vocational Certificate / ITI in Auto-Electrician or Electrical Engineering.',
          '3+ years in automotive electrical fault diagnosis and wiring repairs.',
        ],
        skills: [
          'Automotive Wiring Harness Repair',
          'Parasitic Battery Drain Tracing',
          'Connector De-Pinning & Crimping',
          'Electrical Schematic Interpretation',
        ],
        experience: '3+ years in automotive electrical repairs.',
      },
      {
        title: 'EV Battery Pack Assembly & BMS Calibration Engineer',
        badge: 'Gigafactory Role',
        salaryRange: '€3,800 – €6,200 / month',
        description:
          'Assembling lithium-ion prismatic/cylindrical cell modules, wire-bonding busbars, and calibrating Battery Management System (BMS) control software.',
        responsibilities: [
          'Assemble cylindrical/prismatic lithium battery cells into sub-modules utilizing laser wire bonding and ultrasonic welding.',
          'Install cooling cold-plates, thermal interface pads, and liquid glycol circulation channels.',
          'Configure and calibrate Battery Management System (BMS) algorithms for State of Charge (SoC) and State of Health (SoH).',
          'Perform end-of-line cycle charge/discharge testing on battery cycler dynamometers.',
          'Analyze cell voltage deviations, temperature thermistor readings, and internal resistance degradation.',
        ],
        qualifications: [
          'Degree in Electrical, Chemical, or Mechatronics Engineering.',
          '2+ years in lithium battery assembly, testing, or BMS calibration.',
        ],
        skills: [
          'Lithium-Ion Battery Architecture',
          'BMS Algorithm & SoC / SoH Calibration',
          'Battery Testing & Cycler Systems',
          'Thermal Runaway Mitigation Protocols',
        ],
        experience: '2+ years with EV battery packs.',
      },
      {
        title: 'ADAS & Autonomous Vehicle Sensor Calibration Specialist',
        badge: 'Smart Mobility',
        salaryRange: '€3,400 – €5,600 / month',
        description:
          'Calibrating forward-facing radar, stereo camera pods, LiDAR units, and ultrasonic park sensors following windshield replacement or collision repair.',
        responsibilities: [
          'Set up static target boards, radar reflector cones, and laser wheel alignment rigs in dedicated calibration bays.',
          'Perform dynamic road test calibrations using OEM scan tools across varying lighting and weather conditions.',
          'Diagnose sensor misalignment, blinded camera lenses, blocked radar transceivers, and communication bus errors.',
          'Verify functionality of Autonomous Emergency Braking (AEB), Adaptive Cruise Control (ACC), and Lane Keeping Assist (LKA).',
          'Document compliance calibration certificates for insurance and regulatory verification.',
        ],
        qualifications: [
          'Diploma / Degree in Automotive Technology, Electronics, or Computer Science.',
          '2+ years focusing on ADAS calibration and camera/radar sensor integration.',
        ],
        skills: [
          'Static & Dynamic ADAS Calibration',
          'Radar, LiDAR & Camera Sensor Alignment',
          'ACC / AEB / LKA Function Verification',
          'Diagnostic Scan Tool Interfaces',
        ],
        experience: '2+ years with ADAS automotive sensors.',
      },
    ],
    keyResponsibilities: [
      'Perform safe electrical isolation, diagnostics, and repairs on high-voltage electric and hybrid vehicle powertrains.',
      'Diagnose and assemble lithium-ion battery packs, power inverters, DC-DC converters, and onboard chargers.',
      'Troubleshoot CAN, LIN, and Automotive Ethernet communication network buses across electronic control modules.',
      'Calibrate ADAS cameras, millimeter-wave radar, and ultrasonic safety sensors with high millimeter precision.',
      'Maintain rigorous compliance with high-voltage occupational safety standards and ESD protective procedures.',
    ],
    qualifications: [
      'Degree or Diploma in Electrical, Electronics, Mechatronics, or Automotive Engineering.',
      'Formal high-voltage automotive safety training / certification is highly preferred.',
      'Sound understanding of electric circuit diagrams, oscilloscope waveforms, and electronic test instruments.',
      'High attention to detail, precision, and adherence to zero-voltage verification safety protocols.',
    ],
    requiredSkills: [
      'High-Voltage Safety Protocols (DGUV / IMI)',
      'Lithium-Ion Battery Pack Diagnostics',
      'Power Inverters & Electric Drive Motors',
      'ADAS Radar & Camera Sensor Calibration',
      'CAN-Bus & Automotive Ethernet Analysis',
      'Electronic Wiring Harness Repair',
    ],
    careerOpportunities: [
      'Lead the global clean energy mobility transition at state-of-the-art European EV gigafactories.',
      'Subsidized sponsorships for Level 4 Master High-Voltage EV Diagnostic Specialist certification.',
      'Competitive monthly remuneration with generous relocation allowances and housing support.',
      'Rapid career advancement into EV Powertrain Lead, Battery Team Manager, or E-Mobility Project Director.',
    ],
  },

  // =========================================================================
  // 5. QUALITY CONTROL, TESTING & INSPECTION
  // =========================================================================
  {
    id: 'quality-control-testing-inspection',
    slug: 'quality-testing-inspection',
    title: 'Quality Control, Testing & Inspection',
    shortTitle: 'Quality & Testing',
    route: '/services/automotive/quality-testing-inspection',
    icon: ClipboardCheck,
    color: 'from-orange-600 to-red-600',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    heroImage: '/automotive-qc-hero.png',
    cardImage: '/automotive-qc-hero.png',
    tagline: 'IATF 16949 Audits, CMM 3D Metrology, Dynamometer Road Testing & EOL Verification',
    shortDescription:
      'Connecting Automotive Quality Engineers, CMM Metrology Specialists, Vehicle Test Drivers, and Pre-Delivery Inspectors with European automotive centers.',
    overview:
      'Our Quality Control, Testing & Inspection division places meticulous automotive quality assurance engineers, 3D coordinate measuring machine (CMM) programmers, durability test drivers, and end-of-line inspectors across leading manufacturing plants, test tracks, and homologation laboratories in Germany, Sweden, Belgium, the UK, and Italy. Professionals uphold IATF 16949 quality standards, perform PPAP documentation, and validate vehicle durability under extreme conditions.',
    perksHighlights:
      'Competitive European tax-efficient salaries, factory certifications in Six Sigma and metrology software (PC-DMIS / Calypso), furnished relocation housing assistance, and full work visa clearance.',
    stats: [
      { label: 'Avg. Monthly Earnings', value: '€3,200 – €6,200/mo' },
      { label: 'Accredited Testing Labs', value: '40+ Facilities' },
      { label: 'Quality Standards', value: 'IATF 16949 / ISO' },
      { label: 'Visa Sponsorship', value: 'Full Support' },
    ],
    roles: [
      {
        title: 'Automotive Quality Assurance (QA/QC) Engineer',
        badge: 'High Quality Demand',
        salaryRange: '€3,600 – €5,800 / month',
        description:
          'Driving zero-defect manufacturing quality, executing PPAP submissions, 8D problem-solving investigations, and IATF 16949 compliance audits.',
        responsibilities: [
          'Develop and implement Control Plans, PFMEA, and Inspection Test Plans across manufacturing lines.',
          'Lead cross-functional 8D root-cause investigations, Fishbone diagrams, and corrective/preventative actions (CAPA).',
          'Coordinate Production Part Approval Process (PPAP Level 1–5) and Advanced Product Quality Planning (APQP).',
          'Calculate Statistical Process Control (SPC) metrics (Cp, Cpk) and gauge repeatability and reproducibility (GR&R).',
          'Conduct internal and supplier quality audits to ensure compliance with IATF 16949 and ISO 9001.',
        ],
        qualifications: [
          'Degree in Mechanical, Industrial, or Automotive Engineering.',
          '3+ years in automotive quality engineering with IATF 16949 certified manufacturing plants.',
          'Certified Six Sigma Green/Black Belt or IATF Internal Auditor is a strong advantage.',
        ],
        skills: [
          'IATF 16949 & ISO 9001 Standards',
          'Core Tools (APQP, PPAP, FMEA, MSA, SPC)',
          '8D Problem Solving & Root Cause Analysis',
          'Statistical Process Control (Minitab)',
        ],
        experience: '3+ years in automotive quality assurance.',
      },
      {
        title: 'CMM Metrology & Precision 3D Inspection Specialist',
        badge: 'Metrology Lab',
        salaryRange: '€3,200 – €5,000 / month',
        description:
          'Programming and operating coordinate measuring machines (CMM) and laser optical 3D scanners to inspect machined engine components and sheet metal stampings.',
        responsibilities: [
          'Program bridge and gantry CMM machines using software such as Zeiss Calypso or Hexagon PC-DMIS.',
          'Operate portable CMM arms (Faro / Romer) and 3D optical blue-light scanners (GOM / ATOS).',
          'Interpret complex engineering drawings with tight geometric dimensioning and tolerancing (GD&T) callouts.',
          'Generate comprehensive dimensional measurement reports and color deviation heatmaps.',
          'Calibrate hand measuring gauges (micrometers, height gauges, dial indicators) according to ISO 17025.',
        ],
        qualifications: [
          'Diploma / Degree in Mechanical Engineering or Metrology.',
          '3+ years programming CMM machines with Zeiss Calypso or PC-DMIS.',
        ],
        skills: [
          'Zeiss Calypso / Hexagon PC-DMIS Programming',
          'GD&T Interpretation to ASME Y14.5 / ISO 1101',
          'GOM / ATOS 3D Optical Scanning',
          'Gauge Calibration (ISO 17025)',
        ],
        experience: '3+ years in CMM metrology inspection.',
      },
      {
        title: 'Vehicle Road Test & NVH Validation Specialist',
        badge: 'Test Track Role',
        salaryRange: '€3,400 – €5,400 / month',
        description:
          'Conducting dynamic test track evaluations, acoustic NVH (Noise, Vibration, Harshness) measurements, and endurance driving validation on prototype vehicles.',
        responsibilities: [
          'Drive prototype and pre-series production vehicles on proving grounds (high-speed oval, cobbles, braking tracks).',
          'Instrument vehicles with multi-channel sound level meters, accelerometers, and telemetry data recorders.',
          'Evaluate subjective ride quality, cabin acoustic squeaks/rattles, braking feel, and high-speed stability.',
          'Perform cold-chamber (-30°C) and hot-chamber (+45°C) climatic environmental durability test runs.',
          'Log detailed engineering subjective reports and interface with chassis/body engineers for tuning revisions.',
        ],
        qualifications: [
          'Degree / Diploma in Automotive or Mechanical Engineering.',
          'Valid high-performance driver license (proving ground test driver certification is advantageous).',
          '2+ years in vehicle dynamic testing, durability validation, or NVH data logging.',
        ],
        skills: [
          'Vehicle Dynamic Track Driving',
          'NVH Sound & Vibration Data Acquisition',
          'Chamber Durability & Climate Testing',
          'Telemetry Data Logging (CANape / Dewesoft)',
        ],
        experience: '2+ years in automotive vehicle testing.',
      },
      {
        title: 'End-of-Line (EOL) & Pre-Delivery Inspection (PDI) Auditor',
        badge: 'Final Verification',
        salaryRange: '€2,900 – €4,400 / month',
        description:
          'Conducting 100% final quality sign-off checks on fully assembled vehicles before delivery to dealership showrooms.',
        responsibilities: [
          'Execute comprehensive cosmetic inspections under high-lux inspection lighting tunnels for paint and panel gaps.',
          'Run vehicle dynamic roller dynamometer tests verifying ABS, brake balance, and speedometer accuracy.',
          'Check functionality of all electronic systems: infotainment, heated seats, climate control, lighting, and panoramic sunroofs.',
          'Conduct high-pressure water booth testing to verify vehicle weather-strip water-tightness.',
          'Document final clearance certificates and release vehicles for international shipping logistics.',
        ],
        qualifications: [
          'Vocational Certificate / Diploma in Automobile Engineering or Quality Control.',
          '2+ years in final automotive plant inspection or dealership pre-delivery inspection.',
        ],
        skills: [
          'End-of-Line Inspection Tunnels',
          'Roller Dynamometer Brake & Speed Testing',
          'Water Ingress Testing Protocols',
          'Cosmetic & Paint Defect Auditing',
        ],
        experience: '2+ years in vehicle final inspection.',
      },
    ],
    keyResponsibilities: [
      'Oversee rigorous quality gates across stamping, welding, paint, assembly, and final vehicle rollout.',
      'Perform high-precision 3D dimensional metrology inspection on coordinate measuring machines (CMM).',
      'Execute Advanced Product Quality Planning (APQP) and comprehensive PPAP documentation packages.',
      'Conduct dynamic vehicle test track evaluations and NVH data logging to validate vehicle durability.',
      'Audit internal manufacturing workflows and tier-1 supplier facilities in compliance with IATF 16949.',
    ],
    qualifications: [
      'Degree or Diploma in Mechanical, Industrial, Production, or Automotive Engineering.',
      'Strong practical familiarity with IATF 16949 automotive quality management standards.',
      'Hands-on experience with metrology software (Calypso, PC-DMIS) or dynamic test equipment.',
      'Analytical mindset with sharp attention to subtle cosmetic, acoustic, and dimensional defects.',
    ],
    requiredSkills: [
      'IATF 16949 / ISO 9001 Quality Management',
      'CMM 3D Metrology (Zeiss Calypso / PC-DMIS)',
      'PPAP, APQP, FMEA & 8D Problem Solving',
      'Vehicle Dynamic & Durability Road Testing',
      'Statistical Process Control (SPC & MSA)',
      'NVH Acoustic & Vibration Data Logging',
    ],
    careerOpportunities: [
      'Direct placement with European OEM quality departments, technical testing centers, and homologation bodies.',
      'Subsidized training and certification for Lead Auditor (IATF 16949) and Six Sigma Black Belt.',
      'Clear promotional path to Quality Plant Director, Metrology Lab Lead, or Global Supplier Quality Manager.',
      'Generous relocation support including flights, visa handling, and company accommodation assistance.',
    ],
  },
];
