import {
  Zap,
  Flame,
  Construction,
  Wrench,
  Truck,
  Layers,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SpecializedRole {
  id: string;
  title: string;
  category: 'Electrical' | 'Welding' | 'Scaffolding' | 'Piping' | 'Heavy Equipment' | 'Finishing';
  categoryLabel: string;
  badge: string;
  salaryRange: string;
  salaryInr: string;
  experience: string;
  description: string;
  responsibilities: string[];
  certifications: string[];
  skills: string[];
  locations: string[];
}

export interface TradeCategory {
  id: 'All' | 'Electrical' | 'Welding' | 'Scaffolding' | 'Piping' | 'Heavy Equipment' | 'Finishing';
  name: string;
  icon: LucideIcon;
  count: number;
}

export const tradeCategories: TradeCategory[] = [
  { id: 'All', name: 'All Specialized Trades', icon: Sparkles, count: 18 },
  { id: 'Electrical', name: 'Electrical & Power', icon: Zap, count: 3 },
  { id: 'Welding', name: 'Welding & Metallurgy', icon: Flame, count: 3 },
  { id: 'Scaffolding', name: 'Scaffolding & Rigging', icon: Construction, count: 3 },
  { id: 'Piping', name: 'Piping & Millwright', icon: Wrench, count: 3 },
  { id: 'Heavy Equipment', name: 'Heavy Machinery & Cranes', icon: Truck, count: 3 },
  { id: 'Finishing', name: 'Finishing & Civil Trades', icon: Layers, count: 3 },
];

export const specializedRoles: SpecializedRole[] = [
  // =========================================================================
  // 1. ELECTRICAL & INSTRUMENTATION
  // =========================================================================
  {
    id: 'industrial-electrician',
    title: 'Certified Industrial Electrician',
    category: 'Electrical',
    categoryLabel: 'Electrical & Power',
    badge: 'High European Demand',
    salaryRange: '€3,200 – €5,200 / month',
    salaryInr: '₹2.9L – ₹4.7L / mo',
    experience: '3+ years in industrial plants or commercial megaprojects.',
    description:
      'Installation, termination, testing, and troubleshooting of high-voltage switchgear, motor control centers (MCC), transformers, and industrial cable trays in major European industrial plants and data centers.',
    responsibilities: [
      'Install, pull, and terminate armored power, control, and instrumentation cables according to IEC and European electrical codes.',
      'Gland, crimp, and terminate cables into distribution boards, switchgear, PLC panels, and motor starters.',
      'Perform insulation resistance (Megger), loop impedance, and continuity testing before plant commissioning.',
      'Read and interpret multi-page electrical schematics, single-line diagrams (SLD), and panel layouts.',
      'Adhere strictly to Lockout/Tagout (LOTO) and zero-energy verification safety protocols.',
    ],
    certifications: ['ITI / Diploma in Electrical', 'CompEx (preferred)', 'NEN 3140 / DGUV / 18th Edition', 'VCA / SCC Safety'],
    skills: ['Switchgear & MCCs', 'Cable Pulling & Glanding', 'Megger & Loop Testing', 'Electrical Schematics', 'LOTO Safety'],
    locations: ['Germany', 'Netherlands', 'UK', 'Norway', 'Saudi Arabia'],
  },
  {
    id: 'hv-cable-jointer',
    title: 'High-Voltage (HV) Cable Jointer & Substation Specialist',
    category: 'Electrical',
    categoryLabel: 'Electrical & Power',
    badge: 'Critical Infrastructure',
    salaryRange: '€3,600 – €5,800 / month',
    salaryInr: '₹3.2L – ₹5.2L / mo',
    experience: '4+ years with 11kV – 132kV cable splicing and terminations.',
    description:
      'Executing precision jointing and heat-shrink/cold-shrink terminations on medium and high-voltage XLPE and PILC underground power transmission cables for renewable wind farms and regional power substations.',
    responsibilities: [
      'Prepare and splice 11kV, 33kV, and 66kV transmission cables using approved heat-shrink and cold-shrink joint kits.',
      'Terminate HV cables into transformers, GIS switchgear, and overhead line transition poles.',
      'Conduct VLF (Very Low Frequency) withstand and sheath testing on newly installed cable links.',
      'Operate stripping and bevelling precision tools on cross-linked polyethylene (XLPE) insulation.',
      'Maintain clean, moisture-controlled temporary jointing habitats in outdoor trenches.',
    ],
    certifications: ['High-Voltage Jointer Certificate', 'VCA-VOL', 'DGUV High-Voltage Safety', 'Confined Space Certificate'],
    skills: ['11kV–66kV Jointing', 'Heat/Cold Shrink Kits', 'XLPE Cable Prep', 'VLF Testing', 'Substation Switchgear'],
    locations: ['Netherlands', 'Germany', 'United Kingdom', 'Sweden'],
  },
  {
    id: 'marine-offshore-electrician',
    title: 'Marine & Offshore Electrical Technician',
    category: 'Electrical',
    categoryLabel: 'Electrical & Power',
    badge: 'Offshore Rotation',
    salaryRange: '€3,800 – €6,200 / month',
    salaryInr: '₹3.4L – ₹5.6L / mo',
    experience: '3+ years on offshore rigs, wind turbine platforms, or shipyards.',
    description:
      'Maintaining and troubleshooting marine generator sets, propulsion drives, UPS backup banks, and explosion-proof (ATEX) lighting across offshore platforms and maritime vessel refits.',
    responsibilities: [
      'Perform preventative maintenance on marine diesel generators, switchboards, and synchro-check relays.',
      'Inspect and certify ATEX-rated electrical enclosures and junction boxes in hazardous marine zones.',
      'Troubleshoot dynamic positioning (DP) and navigational instrumentation wiring systems.',
      'Replace and test emergency backup battery banks and shore-to-ship connection cables.',
    ],
    certifications: ['BOSIET / FOET with CA-EBS', 'CompEx Ex01-Ex04', 'STCW Marine Electrical', 'Seaman Book'],
    locations: ['Norway', 'Netherlands (North Sea)', 'UAE', 'Singapore'],
    skills: ['ATEX Hazardous Zones', 'BOSIET Certified', 'Marine Switchboards', 'Emergency Power Systems', 'Fault Diagnostics'],
  },

  // =========================================================================
  // 2. WELDING & METALLURGY
  // =========================================================================
  {
    id: '6g-tig-mig-welder',
    title: '6G / Multi-Process Pipe Welder (TIG / GTAW / SMAW)',
    category: 'Welding',
    categoryLabel: 'Welding & Metallurgy',
    badge: 'Urgent Trade Demand',
    salaryRange: '€3,400 – €5,400 / month',
    salaryInr: '₹3.0L – ₹4.9L / mo',
    experience: '3+ years pipe welding under X-Ray / Radiographic testing (RT).',
    description:
      'High-precision root, fill, and cap welding on carbon steel, stainless steel (304/316L), duplex, and alloy pipes in 6G inclined fixed positions for petrochemical plants and power boilers.',
    responsibilities: [
      'Execute 100% X-ray / UT clean weld passes using GTAW (TIG) for root and SMAW / FCAW for fill and cap.',
      'Set correct purge gas (Argon) levels with oxygen meters to prevent internal sugaring on stainless steel.',
      'Weld high-pressure process pipelines in awkward 6G and 6GR fixed positions without position rotation.',
      'Monitor and adhere to interpass temperature guidelines and preheat requirements specified in WPS.',
      'Perform visual inspection of root penetration, concavity, and cap profile before NDT testing.',
    ],
    certifications: ['6G Welder Qualification (ASME Sec IX / EN 287 / ISO 9606-1)', 'VCA / SCC Safety', 'Hot Work Permit'],
    skills: ['6G Position TIG/MIG', 'X-Ray Quality Welds', 'Argon Back-Purging', 'Duplex & Stainless Steel', 'WPS Adherence'],
    locations: ['Germany', 'Netherlands', 'Norway', 'Poland', 'UAE'],
  },
  {
    id: 'structural-mig-welder',
    title: 'Structural Steel MIG / FCAW Welder & Fabricator',
    category: 'Welding',
    categoryLabel: 'Welding & Metallurgy',
    badge: 'Shipyard & Megaproject',
    salaryRange: '€3,000 – €4,600 / month',
    salaryInr: '₹2.7L – ₹4.1L / mo',
    experience: '3+ years in structural fabrication, bridge girders, or heavy frames.',
    description:
      'Joining heavy plate structural steel, bridge girders, columns, and crane booms using multi-pass flux-cored arc welding (FCAW) and MIG processes under EN 1090 execution classes.',
    responsibilities: [
      'Weld heavy I-beams, box girders, and base plates in 2G, 3G vertical-up, and 4G overhead positions.',
      'Operate heavy overhead gantry cranes and hydraulic clamping fixtures to assemble structural members.',
      'Grind, gouge (air carbon arc gouging), and prepare bevelled weld joints according to fabrication drawings.',
      'Maintain weld bead aesthetics and throat thickness per engineering specifications.',
    ],
    certifications: ['ISO 9606-1 (MIG/MAG 135/136)', 'EN 1090 Structural Welding Card', 'VCA Basic'],
    skills: ['FCAW 136 / MIG 135', '3G & 4G Positions', 'Heavy Plate Beveling', 'Arc Air Gouging', 'Blueprint Reading'],
    locations: ['Poland', 'Germany', 'Czech Republic', 'Saudi Arabia'],
  },
  {
    id: 'orbital-automated-welder',
    title: 'Orbital & Automated Tube Welder',
    category: 'Welding',
    categoryLabel: 'Welding & Metallurgy',
    badge: 'Cleanroom & Pharma',
    salaryRange: '€3,600 – €5,600 / month',
    salaryInr: '₹3.2L – ₹5.0L / mo',
    experience: '2+ years with closed-head orbital welding systems (AMI / Polysoude).',
    description:
      'Operating computer-controlled orbital TIG welding machines for ultra-high purity (UHP) stainless steel tubing in pharmaceutical plants, semiconductor cleanrooms, and food-grade facilities.',
    responsibilities: [
      'Program weld schedules (pulsed current, travel speed, rotation) into orbital power supplies.',
      'Face and clean 316L VIM/VAR electropolished tubing to achieve zero-particulate burr-free square cuts.',
      'Verify weld purge oxygen levels are below 5 ppm using calibrated digital trace oxygen sensors.',
      'Log weld heat numbers and coupon test samples for FDA / GMP qualification documentation.',
    ],
    certifications: ['Orbital Welding Certification', 'ISO 9606-1 GTAW', 'Cleanroom Protocols Certificate'],
    skills: ['Orbital Power Units', 'UHP Cleanroom Piping', 'Trace Oxygen Testing', 'Borescope Inspection', 'WPS Programming'],
    locations: ['Germany', 'Netherlands', 'Ireland', 'Switzerland'],
  },

  // =========================================================================
  // 3. SCAFFOLDING & RIGGING
  // =========================================================================
  {
    id: 'certified-scaffolder',
    title: 'Certified Industrial Scaffolder (CISRS / DGUV / OSHA)',
    category: 'Scaffolding',
    categoryLabel: 'Scaffolding & Rigging',
    badge: 'Immediate Deployment',
    salaryRange: '€3,000 – €4,800 / month',
    salaryInr: '₹2.7L – ₹4.3L / mo',
    experience: '2-5+ years erecting modular system and tube & fitting scaffolding.',
    description:
      'Safe erection, modification, and dismantling of heavy industrial scaffolding, suspended scaffolds, cantilever platforms, and birdcage systems on refineries, shipyards, and construction sites.',
    responsibilities: [
      'Erect and dismantle Layher, Cuplok, and tube-and-fitting scaffolding systems per engineering load drawings.',
      'Install toe-boards, double guardrails, safety netting, kick-boards, and ladder access points.',
      'Inspect ground soil and concrete bearing capacity before placing sole boards and base jacks.',
      'Anchor scaffolding ties into reinforced concrete and structural steelwork with mechanical anchors.',
      'Use double lanyards, harness fall-arrest systems, and rope & wheel gin wheels with 100% tie-off.',
    ],
    certifications: ['CISRS Card (Scaffolder / Advanced)', 'DGUV 201-011 (German Scaffolding)', 'VCA / SCC Safety', 'Working at Heights Certificate'],
    skills: ['Layher & Cuplok Systems', 'Tube & Fitting Erecting', 'Cantilever Platforms', 'Fall Arrest 100% Tie-Off', 'Load Calculations'],
    locations: ['Netherlands', 'Germany', 'Norway', 'Belgium', 'UAE'],
  },
  {
    id: 'scaffolding-inspector-supervisor',
    title: 'Scaffolding Inspector & Safety Supervisor',
    category: 'Scaffolding',
    categoryLabel: 'Scaffolding & Rigging',
    badge: 'Leadership Role',
    salaryRange: '€3,600 – €5,600 / month',
    salaryInr: '₹3.2L – ₹5.0L / mo',
    experience: '5+ years as Scaffolding Foreman or certified Inspector.',
    description:
      'Performing statutory safety inspections, green Scafftag sign-offs, weekly stability checks, and leading scaffolding crews across large industrial turnarounds and shutdowns.',
    responsibilities: [
      'Inspect completed scaffold structures against EN 12811 European design standards before issuing green tags.',
      'Maintain statutory weekly inspection logs and re-inspect structures following storms or site impacts.',
      'Conduct daily Tool Box Talks (TBT), review Job Safety Analyses (JSA), and supervise lifting operations.',
      'Coordinate material staging and dismantling logistics during plant turnaround schedules.',
    ],
    certifications: ['CISRS Advanced Inspector Card', 'VCA-VOL (Management)', 'NEBOSH IGC (preferred)', 'DGUV Supervisor'],
    skills: ['Scafftag Issuance', 'EN 12811 Standards', 'Statutory 7-Day Checks', 'Turnaround Coordination', 'Crew Leadership'],
    locations: ['Netherlands', 'Germany', 'United Kingdom', 'Saudi Arabia'],
  },
  {
    id: 'heavy-rigger-banksman',
    title: 'Certified Heavy Rigger & Banksman / Slinger',
    category: 'Scaffolding',
    categoryLabel: 'Scaffolding & Rigging',
    badge: 'Tandem Lift Specialist',
    salaryRange: '€3,100 – €4,900 / month',
    salaryInr: '₹2.8L – ₹4.4L / mo',
    experience: '3+ years directing heavy tandem crane lifts and slinging heavy plant equipment.',
    description:
      'Rigging, slinging, and signaling heavy industrial components—including distillation towers, bridge sections, generators, and precast girders—working closely with crane operators.',
    responsibilities: [
      'Inspect wire rope slings, web slings, shackles, spreader beams, and chain blocks before every lift.',
      'Calculate component centers of gravity, sling angles, and tension loads to prevent unbalance or tipping.',
      'Guide crane movements using standard banksman two-way radio protocols and visual hand signals.',
      'Execute complex tandem crane lifts and heavy machinery skidding operations inside tight plant areas.',
    ],
    certifications: ['CPCS / OPITO Rigger Stage 1/2', 'Banksman / Slinger Certificate', 'VCA Safety'],
    skills: ['Rigging & Slinging', 'Center of Gravity Calculations', 'Hand & Radio Signaling', 'Spreader Beam Setup', 'Tandem Lifts'],
    locations: ['Norway', 'Germany', 'Netherlands', 'Qatar', 'Kuwait'],
  },

  // =========================================================================
  // 4. PIPING & MECHANICAL
  // =========================================================================
  {
    id: 'industrial-pipefitter',
    title: 'Industrial Pipefitter & Spool Fabricator',
    category: 'Piping',
    categoryLabel: 'Piping & Millwright',
    badge: 'High Plant Demand',
    salaryRange: '€3,100 – €4,900 / month',
    salaryInr: '₹2.8L – ₹4.4L / mo',
    experience: '3+ years reading isometric drawings and fabricating high-pressure spools.',
    description:
      'Reading complex piping isometric drawings, measuring, cutting, beveling, fitting, and tacking high-pressure steel, copper-nickel, and alloy pipe spools for chemical refineries and power plants.',
    responsibilities: [
      'Read and interpret detailed isometric (ISO) drawings, P&IDs, and bill of materials (BOM).',
      'Calculate take-offs, rolling offsets, elbow cutbacks, and root face dimensions with zero error.',
      'Fit up pipes, flanges, reducers, tees, and valves using pipe clamps and hi-lo internal alignment gauges.',
      'Execute hydro-testing, pneumatic pressure testing, and flange torqueing using calibrated torque wrenches.',
    ],
    certifications: ['ITI / Diploma in Mechanical / Fitter', 'VCA / SCC Safety', 'Flange Assembly Protocol (EN 1591-4)'],
    skills: ['Isometric Drawings', 'Offset Calculations', 'Hi-Lo Flange Alignment', 'Torque Bolt Tightening', 'Hydrostatic Testing'],
    locations: ['Germany', 'Netherlands', 'Poland', 'Czech Republic', 'Saudi Arabia'],
  },
  {
    id: 'millwright-mechanical-fitter',
    title: 'Industrial Millwright & Rotating Equipment Fitter',
    category: 'Piping',
    categoryLabel: 'Piping & Millwright',
    badge: 'Turbine & Compressor',
    salaryRange: '€3,400 – €5,400 / month',
    salaryInr: '₹3.0L – ₹4.9L / mo',
    experience: '4+ years assembling and aligning pumps, compressors, steam turbines, and gearboxes.',
    description:
      'Precision installation, leveling, shimming, laser alignment, and overhaul of heavy rotating machinery, centrifugal pumps, multi-stage compressors, and turbine drives in industrial facilities.',
    responsibilities: [
      'Perform precision laser alignment of shaft-to-shaft couplings within 0.02 mm runout tolerances.',
      'Overhaul centrifugal pumps, gearboxes, blowers, and screw compressors; replace bearings, impellers, and mechanical seals.',
      'Level machine base plates using precision machinist spirit levels and adjustable hydraulic jacks.',
      'Check soft-foot conditions and thermal growth compensation on high-speed rotating equipment.',
    ],
    certifications: ['Certified Millwright / Mechanical Technician', 'Laser Alignment Certificate (Pruftechnik / Easy-Laser)', 'VCA Safety'],
    skills: ['Laser Shaft Alignment', 'Mechanical Seal Overhaul', 'Bearing Fit & Tolerances', 'Vibration Analysis', 'Gearbox Rebuilds'],
    locations: ['Germany', 'Netherlands', 'Sweden', 'UAE'],
  },
  {
    id: 'hvac-chiller-technician',
    title: 'Commercial HVAC & Industrial Chiller Technician',
    category: 'Piping',
    categoryLabel: 'Piping & Millwright',
    badge: 'Year-Round Demand',
    salaryRange: '€3,100 – €4,800 / month',
    salaryInr: '₹2.8L – ₹4.3L / mo',
    experience: '3+ years with VRF systems, air handling units (AHUs), and water-cooled chillers.',
    description:
      'Installation, brazing, evacuating, charging, and maintenance of large commercial chiller systems, VRF air conditioning, and ventilation ducting in commercial towers, hospitals, and industrial data centers.',
    responsibilities: [
      'Install and braze refrigerant copper pipe networks with nitrogen purge to prevent carbon scale formation.',
      'Perform vacuum decay tests down to 500 microns and charge R410a, R32, and R134a refrigerants.',
      'Troubleshoot electrical compressor contactors, variable frequency drives (VFDs), and expansion valves.',
      'Commission air handling units (AHUs), balancing supply/return air flow with digital anemometers.',
    ],
    certifications: ['F-Gas Category 1 (EU Certified)', 'HVAC Technician Diploma', 'VCA Safety'],
    skills: ['F-Gas Certified', 'Copper Oxy-Acetylene Brazing', 'Chiller Overhaul', 'Deep Vacuum Evacuation', 'Airflow Balancing'],
    locations: ['Netherlands', 'Germany', 'United Kingdom', 'Qatar'],
  },

  // =========================================================================
  // 5. HEAVY MACHINERY & CRANES
  // =========================================================================
  {
    id: 'mobile-crawler-crane-operator',
    title: 'Mobile & Crawler Crane Operator (50T – 500T+)',
    category: 'Heavy Equipment',
    categoryLabel: 'Heavy Machinery & Cranes',
    badge: 'High-Earning Specialization',
    salaryRange: '€3,500 – €5,800 / month',
    salaryInr: '₹3.1L – ₹5.2L / mo',
    experience: '4+ years operating hydraulic all-terrain or lattice boom crawler cranes.',
    description:
      'Safe operation of high-tonnage mobile cranes (Liebherr, Demag, Terex) and crawler cranes for wind turbine erection, industrial vessel placements, and heavy infrastructure lifting.',
    responsibilities: [
      'Execute pre-lift boom, wire rope, hydraulic winch, and outrigger stability checks.',
      'Interpret load charts, boom angle indicators, and computer load moment indicators (LMI / SLI).',
      'Position crane on steel spreader mats, ensuring ground bearing pressure limits are respected.',
      'Operate boom extensions, fly jibs, and superlift counterweight attachments in varying wind conditions.',
    ],
    certifications: ['Heavy Crane Operator License (EU / CPCS / NCCCO / National)', 'Medical Fitness Certificate', 'VCA Safety'],
    skills: ['Liebherr / Demag Cranes', 'Load Chart Mastery', 'LMI System Calibration', 'Wind Turbine Erection', 'Ground Pressure Setup'],
    locations: ['Germany', 'Netherlands', 'Norway', 'Saudi Arabia', 'UAE'],
  },
  {
    id: 'tower-crane-operator',
    title: 'Tower Crane Operator (Top-Slewing / Luffing)',
    category: 'Heavy Equipment',
    categoryLabel: 'Heavy Machinery & Cranes',
    badge: 'High-Rise Construction',
    salaryRange: '€3,200 – €5,000 / month',
    salaryInr: '₹2.9L – ₹4.5L / mo',
    experience: '3+ years on top-slewing or luffing jib tower cranes on high-rise structures.',
    description:
      'Operating cabin-controlled and remote-controlled tower cranes (Potain, Liebherr, Wolff) on high-rise residential towers, bridge pylons, and complex urban construction projects.',
    responsibilities: [
      'Perform daily pre-shift brake, limit switch, and wire rope spooling inspections from the crane cabin.',
      'Execute blind lifts in communication with ground banksmen via dedicated crane two-way radio channels.',
      'Luff, hoist, and slew heavy concrete skips, steel rebar bundles, and formwork tables with precision.',
      'Park and weathervane crane safely during high wind alerts per European safety regulations.',
    ],
    certifications: ['Tower Crane Operator License', 'Working at Heights Level 3', 'Medical Height Fitness Card'],
    skills: ['Cabin & Remote Operation', 'Blind Lift Signaling', 'Potain / Liebherr', 'Weathervaning Protocols', 'Zero-Swing Control'],
    locations: ['United Kingdom', 'Germany', 'Netherlands', 'Poland', 'UAE'],
  },
  {
    id: 'excavator-heavy-plant-operator',
    title: 'Excavator & Heavy Earthmoving Plant Operator',
    category: 'Heavy Equipment',
    categoryLabel: 'Heavy Machinery & Cranes',
    badge: 'Highway & Civil Projects',
    salaryRange: '€2,800 – €4,400 / month',
    salaryInr: '₹2.5L – ₹4.0L / mo',
    experience: '3+ years operating 20T–50T tracked excavators and GPS grading machinery.',
    description:
      'Operating modern tracked excavators (CAT, Komatsu, Volvo) equipped with 3D GPS grading systems for deep pipeline trenching, foundation excavations, and civil highway infrastructure earthworks.',
    responsibilities: [
      'Operate tracked excavators for precision bulk excavation, battering slopes, and utility trenching.',
      'Utilize 3D Trimble / Leica machine control GPS guidance displays to achieve exact finished grade levels.',
      'Change quick-hitch hydraulic attachments including rock breakers, grading buckets, and rippers safely.',
      'Conduct daily grease maintenance, track tension checks, and engine fluid level verifications.',
    ],
    certifications: ['Heavy Plant Operator License (Excavator 360)', 'GPS Machine Control Certificate', 'VCA Safety'],
    skills: ['360 Excavator 20T-50T', '3D GPS Leica / Trimble', 'Trench Box Safety', 'Hydraulic Attachments', 'Precision Grading'],
    locations: ['Germany', 'Netherlands', 'Sweden', 'Poland'],
  },

  // =========================================================================
  // 6. FINISHING & CIVIL TRADES
  // =========================================================================
  {
    id: 'steel-fixer-ironworker',
    title: 'Steel Fixer & Rebar Fabricator',
    category: 'Finishing',
    categoryLabel: 'Finishing & Civil Trades',
    badge: 'Infrastructure Roles',
    salaryRange: '€2,800 – €4,200 / month',
    salaryInr: '₹2.5L – ₹3.8L / mo',
    experience: '2+ years tying reinforcement steel on bridges, tunnels, or foundations.',
    description:
      'Reading structural bar bending schedules (BBS), cutting, bending, and tying high-tensile steel rebar cages for bridge piers, wind turbine foundation rafts, and precast concrete beams.',
    responsibilities: [
      'Read and follow structural reinforcement placement blueprints and bar bending schedules.',
      'Tie reinforcement steel cages using tying wire, battery-powered tier tools, and manual tying pliers.',
      'Position concrete cover blocks, chairs, and couplers to ensure exact structural concrete cover.',
      'Assemble prefabricated rebar columns, beams, and mat foundations ahead of concrete pouring.',
    ],
    certifications: ['Steel Fixer Trade Certificate', 'VCA / SCC Safety', 'Manual Handling Certificate'],
    skills: ['Bar Bending Schedules', 'Pliers & Automatic Tying', 'Concrete Cover Chairs', 'Bridge & Raft Foundations', 'Blueprint Reading'],
    locations: ['Germany', 'Netherlands', 'Poland', 'Czech Republic'],
  },
  {
    id: 'blaster-industrial-painter',
    title: 'Industrial Sandblaster & Airless Spray Painter',
    category: 'Finishing',
    categoryLabel: 'Finishing & Civil Trades',
    badge: 'Corrosion Protection',
    salaryRange: '€2,900 – €4,500 / month',
    salaryInr: '₹2.6L – ₹4.0L / mo',
    experience: '3+ years in blast cleaning (Grit/Garnet) and multi-coat airless paint spraying.',
    description:
      'Surface preparation by grit and abrasive blasting to Sa 2.5 standard, followed by multi-coat epoxy and polyurethane airless spray application on steel tanks, bridges, and offshore jackets.',
    responsibilities: [
      'Operate pressurized blast pots, deadman handles, and garnet/copper slag abrasives to achieve Sa 2.5 / Sa 3 finish.',
      'Apply multi-pack epoxy primers and polyurethane topcoats using heavy-ratio airless spray pump systems.',
      'Measure wet film thickness (WFT) and dry film thickness (DFT) with magnetic elcometer gauges.',
      'Conduct holiday pinhole spark testing to verify zero coating voids or micro-cracks.',
    ],
    certifications: ['NACE / FROSIO Level 1/2 (added advantage)', 'Airless Spray Certificate', 'VCA / Breathing Air Training'],
    skills: ['Sa 2.5 Grit Blasting', 'Airless Spray Pumps', 'DFT Elcometer Gauging', 'Epoxy & Polyurethane', 'Pinhole Spark Testing'],
    locations: ['Netherlands', 'Germany', 'Norway', 'UAE'],
  },
  {
    id: 'thermal-insulator-cladder',
    title: 'Industrial Thermal Insulator & Sheet Metal Cladder',
    category: 'Finishing',
    categoryLabel: 'Finishing & Civil Trades',
    badge: 'Refinery & Plant Maintenance',
    salaryRange: '€2,900 – €4,500 / month',
    salaryInr: '₹2.6L – ₹4.0L / mo',
    experience: '3+ years fabricating aluminum/stainless sheet metal jackets and installing pipe insulation.',
    description:
      'Measuring, pattern development, cutting, rolling, and swaging sheet metal cladding (aluminum, stainless steel) over mineral wool and cellular glass insulation on high-temperature process pipelines and tanks.',
    responsibilities: [
      'Develop sheet metal patterns for pipe elbows, tees, reducers, and valve insulation boxes.',
      'Install rockwool, ceramic fiber blankets, and acoustic insulation barriers on process piping.',
      'Fabricate and rivet aluminum and stainless steel jacketing using roll-formers, swagers, and shears.',
      'Seal cladding joints with specialized mastic and silicone to prevent water ingress and corrosion under insulation (CUI).',
    ],
    certifications: ['Insulation & Cladding Trade Diploma', 'VCA / SCC Safety', 'Working at Heights Certificate'],
    skills: ['Sheet Metal Patterning', 'Swaging & Rolling Machines', 'Rockwool & Armaflex', 'CUI Prevention', 'Valve Box Fabrication'],
    locations: ['Germany', 'Netherlands', 'Belgium', 'Saudi Arabia'],
  },
];

