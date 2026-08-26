import {
  Stethoscope,
  HeartPulse,
  Pill,
  Microscope,
  Activity,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface HealthcareRole {
  title: string;
  badge: string;
  salaryRange: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  experience: string;
}

export interface HealthcareDepartment {
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
  licensingHighlights: string;
  stats: { label: string; value: string }[];
  roles: HealthcareRole[];
  keyResponsibilities: string[];
  qualifications: string[];
  requiredSkills: string[];
  careerOpportunities: string[];
}

export const healthcareDepartments: HealthcareDepartment[] = [
  // =========================================================================
  // 1. DOCTORS & PHYSICIANS
  // =========================================================================
  {
    id: 'doctors-physicians',
    slug: 'doctors-physicians',
    title: 'Doctors & Physicians',
    shortTitle: 'Doctors',
    route: '/services/healthcare/doctors-physicians',
    icon: Stethoscope,
    color: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    heroImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop',
    tagline: 'Leading International Hospital Placements for Medical Consultants & Surgeons',
    shortDescription:
      'Direct recruitment for General Physicians, Medical Specialists, and Surgeons across accredited European, UK, and Middle Eastern hospital networks.',
    overview:
      'Our Doctors & Physicians division connects licensed medical practitioners, specialist consultants, and surgeons with top-tier university hospitals, private healthcare groups, and specialized clinics across the Netherlands, Germany, the UK, Ireland, UAE, and Saudi Arabia. We provide end-to-end guidance for foreign qualification recognition, medical council registrations (BIG-register, GMC, DHA, MOH), language proficiency pathways, structured hospital interviews, and complete visa sponsorship for candidates and their families.',
    licensingHighlights:
      'Complete facilitation for BIG-register (Netherlands), German Approbation (Fachsprachprüfung & Kenntnisprüfung), GMC Registration (UK), and Gulf Dataflow/Prometric approvals.',
    stats: [
      { label: 'Avg. Salary Package', value: '€6,500 – €14,000/mo' },
      { label: 'Active Hospital Partners', value: '85+ Hospitals' },
      { label: 'Visa & Family Sponsorship', value: '100% Guaranteed' },
      { label: 'Processing Timeline', value: '4 – 8 Months' },
    ],
    roles: [
      {
        title: 'General Physician (GP / Internal Medicine)',
        badge: 'High Demand in Europe',
        salaryRange: '€6,500 – €9,500 / month',
        description:
          'Primary care physicians and internal medicine specialists responsible for comprehensive diagnosis, acute/chronic illness management, preventative medicine, and multidisciplinary outpatient coordination in modern medical facilities.',
        responsibilities: [
          'Conduct comprehensive physical examinations, patient histories, and diagnostic evaluations.',
          'Formulate evidence-based treatment plans for acute, chronic, and complex adult conditions.',
          'Manage outpatient consultations, emergency triage, and specialized referral coordination.',
          'Oversee preventative health screenings, immunizations, and community health initiatives.',
          'Collaborate with allied healthcare teams to ensure holistic patient recovery and care continuity.',
        ],
        qualifications: [
          'MBBS / MBChB or international equivalent medical degree.',
          'MD / DNB in General / Internal Medicine, or Family Medicine residency completion.',
          'Active Medical Council Registration in home country.',
          'Eligibility for European / Gulf medical registration (BIG, Approbation, DHA, GMC).',
        ],
        skills: [
          'Diagnostic clinical acumen & patient triage',
          'Chronic disease management (Diabetes, Hypertension, Cardiovascular)',
          'Electronic Health Records (EHR / Epic / Cerner)',
          'Patient empathy & multilingual communication',
        ],
        experience: '2+ years of post-residency clinical practice in an accredited hospital or clinic.',
      },
      {
        title: 'Specialist Doctors (Cardiology, Radiology, Pediatrics, Oncology, Anesthesia)',
        badge: 'Specialist Fast-Track',
        salaryRange: '€8,000 – €13,500 / month',
        description:
          'Board-certified consultants across Cardiology, Radiology, Pediatrics, Anesthesiology, Oncology, Orthopedics, Obstetrics & Gynecology, delivering advanced tertiary medical care in accredited international healthcare centers.',
        responsibilities: [
          'Deliver tertiary-level clinical consultations, procedural interventions, and specialty rounds.',
          'Interpret complex diagnostic imaging, echocardiograms, biopsies, and advanced lab results.',
          'Lead multidisciplinary tumor boards, mortality reviews, and clinical audit committees.',
          'Train junior doctors, clinical fellows, and international medical residents.',
          'Ensure strict compliance with international patient safety and healthcare accreditation standards.',
        ],
        qualifications: [
          'MBBS + MD / MS / DNB / DM / MCh / MRCP / FRCR / European Specialist Board.',
          'Certified specialist qualification recognized by the national medical regulatory authority.',
          'Proven clinical track record with documented surgical or interventional logbooks (where applicable).',
          'Good Standing Certificate from the relevant Medical Council.',
        ],
        skills: [
          'Advanced clinical specialization & tertiary care delivery',
          'Interventional and diagnostic procedural expertise',
          'Evidence-based clinical protocol formulation',
          'Crisis intervention & intensive care collaboration',
        ],
        experience: '3+ years of post-specialist registration clinical experience in tertiary care.',
      },
      {
        title: 'Surgeons (General, Orthopedic, Neuro, Cardiac & Laparoscopic)',
        badge: 'Direct Hospital Contract',
        salaryRange: '€9,500 – €16,000 / month',
        description:
          'Experienced consultant surgeons performing complex elective and emergency surgical procedures, minimally invasive laparoscopic surgeries, trauma care, and post-operative critical care in advanced operation theaters.',
        responsibilities: [
          'Perform comprehensive pre-operative assessments, informed consent, and risk stratifications.',
          'Execute elective, emergency, minimally invasive laparoscopic, and robotic surgical operations.',
          'Direct intraoperative teams, scrub nurses, perfusionists, and surgical technicians.',
          'Manage post-operative ICU recovery, surgical complications, and rehabilitation transitions.',
          'Maintain meticulous operative records and contribute to clinical outcomes registries.',
        ],
        qualifications: [
          'MBBS + MS / MCh / DNB / FRCS / European Board of Surgery (EBSQ) or equivalent.',
          'Verified operative logbook with minimum required volume of major surgical cases.',
          'Advanced Trauma Life Support (ATLS) and ACLS certifications.',
          'Active specialist surgical license with unblemished practice history.',
        ],
        skills: [
          'Minimally invasive laparoscopic & robotic surgery',
          'Intraoperative crisis & hemorrhage management',
          'Complex wound management & surgical critical care',
          'Precision surgical dexterity & team leadership',
        ],
        experience: '4+ years of independent surgical consultant experience.',
      },
    ],
    keyResponsibilities: [
      'Comprehensive patient clinical assessment, accurate differential diagnosis, and evidence-based therapeutic planning.',
      'Conducting specialized surgical operations, emergency resuscitation, and specialized medical procedures.',
      'Collaborating closely with multidisciplinary teams including nurses, pharmacists, and diagnostic technicians.',
      'Adhering to European, UK, and international hospital safety, infection control, and clinical governance protocols.',
      'Participating in clinical research, continuous medical education (CME), and medical staff mentorship.',
    ],
    qualifications: [
      'MBBS / MD / MS / DNB / DM / MCh / MRCP / FRCS or equivalent recognized medical qualification.',
      'Valid registration with National / State Medical Council with unblemished professional standing.',
      'Language proficiency certification (OET / IELTS Grade B/7.0 for UK/Ireland, or A2/B1/B2 commitment for Germany/Netherlands).',
      'Documented clinical residency and active clinical practice within the last 12 months.',
    ],
    requiredSkills: [
      'Clinical Diagnostic & Therapeutic Mastery',
      'Emergency Resuscitation & Critical Care Protocols (ACLS / BLS / ATLS)',
      'Interdisciplinary Hospital Communication & Bedside Manner',
      'Hospital Information Systems & Electronic Health Records (EHR)',
      'Patient Advocacy & Ethical Medical Governance',
    ],
    careerOpportunities: [
      'Direct permanent hospital employment contracts with competitive monthly base salaries (€6,500 – €16,000+).',
      'Comprehensive employer-paid malpractice insurance and annual Continuing Medical Education (CME) budgets.',
      'Full family visa sponsorship including spouse work rights and access to world-class public education & healthcare.',
      'Clear, accelerated career pathways toward Department Head, Clinical Director, and Permanent Residency (PR).',
    ],
  },

  // =========================================================================
  // 2. NURSING
  // =========================================================================
  {
    id: 'nursing',
    slug: 'nursing',
    title: 'Nursing',
    shortTitle: 'Nursing',
    route: '/services/healthcare/nursing',
    icon: HeartPulse,
    color: 'from-cyan-600 to-blue-500',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
    tagline: 'Empowering Registered Nurses with Fast-Track European & Global Hospital Placement',
    shortDescription:
      'Connecting Registered Nurses, ICU specialists, OT Staff Nurses, and Nurse Supervisors with top public & private hospital groups across the EU, UK & Middle East.',
    overview:
      'Our Nursing recruitment division is dedicated to placing skilled, compassionate Indian and international nurses in high-acuity European and global healthcare systems. Facing acute nursing shortages, premier hospitals in the Netherlands, Germany, the UK, Ireland, and the Gulf offer direct sponsorships, subsidized language training programs, fast-track registration support (NMC, NMBI, BIG-register, German Anerkennung), paid relocation, and excellent work-life balance.',
    licensingHighlights:
      'Full support for NMC CBT & OSCE (UK), NMBI Adaptation (Ireland), German B2 Pflegedokumentation & Defizitbescheid clearing, and Dutch BIG nurse registration.',
    stats: [
      { label: 'Avg. Nursing Salary', value: '€3,200 – €5,800/mo' },
      { label: 'Direct Hospital Jobs', value: '120+ Openings' },
      { label: 'Language Training Subsidy', value: '100% Reimbursed' },
      { label: 'Relocation & Housing', value: 'Assistance Provided' },
    ],
    roles: [
      {
        title: 'Registered Nurse (RN - Medical / Surgical / Ward)',
        badge: 'Highest Placement Volume',
        salaryRange: '€3,200 – €4,400 / month',
        description:
          'Professional staff nurses providing direct patient bedside care, medication administration, vital monitoring, wound dressings, and interdisciplinary patient care coordination in general and specialized hospital wards.',
        responsibilities: [
          'Perform comprehensive baseline and continuous patient physical and vital sign assessments.',
          'Administer IV medications, oral drugs, blood transfusions, and therapeutic treatments per protocol.',
          'Execute specialized aseptic wound dressings, catheterizations, and post-op care.',
          'Educate patients and family caregivers regarding discharge instructions and disease management.',
          'Maintain precise digital nursing documentation adhering to hospital quality standards.',
        ],
        qualifications: [
          'B.Sc Nursing / Post Basic B.Sc Nursing / GNM from an accredited nursing college.',
          'Active registration with State Nursing Council (RN / RM).',
          'Minimum 1–2 years of recent clinical hospital ward experience (100+ bed hospital).',
          'Basic Life Support (BLS) certification.',
        ],
        skills: [
          'Patient physical assessment & vital signs monitoring',
          'Safe pharmacological & intravenous therapy',
          'Infection prevention and aseptic techniques',
          'Empathic patient communication & teamwork',
        ],
        experience: '1+ years of post-registration bedside nursing experience.',
      },
      {
        title: 'ICU & Critical Care Nurse (ICU, CCU, NICU, Emergency)',
        badge: 'Critical Shortage / Fast-Track',
        salaryRange: '€3,800 – €5,200 / month',
        description:
          'Specialized critical care nurses managing hemodynamically unstable, intubated, and critically ill patients requiring continuous hemodynamic monitoring, mechanical ventilation, and rapid emergency intervention.',
        responsibilities: [
          'Manage mechanical ventilators, arterial lines, central venous lines, and vasoactive infusions.',
          'Monitor invasive cardiac output, intracranial pressure, and multi-organ telemetry data.',
          'Execute rapid response protocols, CPR, and advanced airway management during cardiac arrest.',
          'Operate continuous renal replacement therapy (CRRT) and extracorporeal life support systems.',
          'Provide compassionate, intensive end-of-life and family counseling in high-stress settings.',
        ],
        qualifications: [
          'B.Sc Nursing / Post Basic B.Sc with Post-Basic Diploma or experience in Critical Care.',
          'Valid RN / RM license with good standing certificate.',
          'Advanced Cardiac Life Support (ACLS) & BLS certifications.',
          'Minimum 2 years of continuous tertiary ICU / CCU / ER experience.',
        ],
        skills: [
          'Mechanical ventilation & arterial blood gas (ABG) interpretation',
          'Invasive hemodynamic monitoring & titration of inotropes',
          'Crisis decision-making under intense pressure',
          'Advanced cardiac life support & defibrillation',
        ],
        experience: '2+ years dedicated ICU / Critical Care nursing experience.',
      },
      {
        title: 'Staff Nurse & Operation Theatre (OT / Scrub / Recovery)',
        badge: 'Specialized Skills Bonus',
        salaryRange: '€3,600 – €4,800 / month',
        description:
          'Perioperative and surgical scrub nurses ensuring sterile field maintenance, instrument handling, intraoperative patient safety, and post-anesthesia recovery unit (PACU) stabilization.',
        responsibilities: [
          'Prepare operation theaters, surgical instrument trays, implants, and sterile draping.',
          'Anticipate surgeons’ needs during complex laparoscopic, orthopedic, and cardiac procedures.',
          'Perform rigorous surgical sponge, needle, and instrument safety counts per WHO surgical checklist.',
          'Manage patient airway recovery, extubation monitoring, and acute pain in the PACU recovery room.',
          'Enforce strict aseptic sterilization protocols and OT airflow contamination controls.',
        ],
        qualifications: [
          'B.Sc Nursing / GNM with certified specialized perioperative or OT nursing experience.',
          'Active Registered Nurse license.',
          'BLS and ACLS certification.',
          'Documented scrub experience across general, orthopedic, or specialized surgical specialties.',
        ],
        skills: [
          'Sterile field management & surgical instrumentation',
          'WHO Surgical Safety Checklist compliance',
          'Post-anesthesia recovery & airway management',
          'Laser & electrosurgical equipment safety',
        ],
        experience: '2+ years of continuous Operation Theatre (OT) scrub / circulating experience.',
      },
      {
        title: 'Nurse Supervisor & Clinical Nurse Manager',
        badge: 'Leadership Role',
        salaryRange: '€4,500 – €6,200 / month',
        description:
          'Experienced nursing leaders overseeing clinical ward operations, staff shift rosters, quality assurance, patient safety audits, and continuing nursing education in international hospitals.',
        responsibilities: [
          'Supervise nursing personnel, duty scheduling, shift handovers, and resource allocation.',
          'Conduct clinical quality audits, incident investigations, and infection control inspections.',
          'Mentor junior nurses, international nurse recruits, and nursing student interns.',
          'Liaise with hospital medical directors, pharmacy heads, and hospital administration.',
          'Drive evidence-based nursing care protocols and patient satisfaction benchmarks.',
        ],
        qualifications: [
          'B.Sc / M.Sc Nursing with Healthcare Management certification or equivalent experience.',
          'Registered Nurse with 5+ years total experience including 2+ years in a supervisory role.',
          'Demonstrated leadership, conflict resolution, and quality audit capabilities.',
        ],
        skills: [
          'Clinical leadership & ward management',
          'Healthcare quality assurance (JCI / ISO / NHS standards)',
          'Staff training, onboarding & clinical mentorship',
          'Hospital budgeting & bed management',
        ],
        experience: '5+ years total clinical experience with 2+ years in team leadership.',
      },
    ],
    keyResponsibilities: [
      'Direct clinical patient care, vital signs monitoring, diagnostic specimen collection, and IV medication therapy.',
      'Collaborating seamlessly with attending physicians, surgeons, therapists, and hospital pharmacists.',
      'Maintaining rigorous compliance with patient safety protocols, medication rights, and infection control.',
      'Utilizing hospital Electronic Health Record (EHR) systems for precise clinical documentation.',
      'Providing empathetic patient education, family reassurance, and culturally competent healthcare delivery.',
    ],
    qualifications: [
      'B.Sc Nursing, Post Basic B.Sc Nursing, or GNM (General Nursing & Midwifery) from recognized university.',
      'Active registration with State Nursing Council / Indian Nursing Council (INC) with clean disciplinary record.',
      'Minimum 1 to 2+ years of continuous hospital bedside experience.',
      'Language readiness (English IELTS 6.5-7.0 / OET B, or readiness for Dutch/German language training sponsored by employers).',
    ],
    requiredSkills: [
      'Holistic Patient Assessment & Clinical Triage',
      'Medication Administration & IV Cannulation',
      'Wound Management & Aseptic Surgical Techniques',
      'Critical Thinking & Emergency Life Support (BLS / ACLS)',
      'Intercultural Communication & Compassionate Care',
    ],
    careerOpportunities: [
      'Direct, permanent hospital employment contracts with 36–40 hour work weeks and overtime allowances.',
      'Generous shift bonuses for evening, night, and weekend shifts (up to 25%–50% extra hourly pay).',
      'Free or fully reimbursed language training programs (Dutch/German B2 level).',
      'Comprehensive relocation support including flight tickets, initial housing, and family visa sponsorship.',
    ],
  },

  // =========================================================================
  // 3. PHARMACY
  // =========================================================================
  {
    id: 'pharmacy',
    slug: 'pharmacy',
    title: 'Pharmacy',
    shortTitle: 'Pharmacy',
    route: '/services/healthcare/pharmacy',
    icon: Pill,
    color: 'from-indigo-600 to-blue-600',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    heroImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop',
    tagline: 'Global Careers in Hospital, Clinical & Community Pharmaceutical Sciences',
    shortDescription:
      'Connecting Pharmacists, Clinical Specialists, and Pharmacy Technicians with international hospital pharmacies, retail chains, and clinical research facilities.',
    overview:
      'Our Pharmacy division provides specialized recruitment pathways for licensed pharmacists and pharmacy technicians seeking international careers in the Netherlands, Germany, the UK, UAE, and Qatar. Modern overseas hospitals and community pharmacy chains require qualified professionals for therapeutic drug monitoring, automated medication dispensing, sterile compounding, clinical trials oversight, and pharmacovigilance.',
    licensingHighlights:
      'Guidance for GPhC Registration (UK), European Pharmacy Equivalent Assessment, DHA/MOH Pharmacist Licensing, and Good Manufacturing Practice (GMP) validation.',
    stats: [
      { label: 'Avg. Pharmacy Salary', value: '€3,400 – €6,800/mo' },
      { label: 'Hospital & Retail Networks', value: '60+ Partners' },
      { label: 'Visa Sponsorship', value: 'Full Employer Backing' },
      { label: 'Placement Success Rate', value: '98%' },
    ],
    roles: [
      {
        title: 'Pharmacist (Hospital & Community / Retail)',
        badge: 'High Industry Demand',
        salaryRange: '€3,400 – €5,200 / month',
        description:
          'Licensed pharmacists responsible for prescription verification, compounding, dispensing pharmaceuticals, patient counseling, and managing pharmaceutical inventory in hospital and community pharmacies.',
        responsibilities: [
          'Verify prescription accuracy, correct dosages, potential drug interactions, and contraindications.',
          'Dispense prescription and OTC medications adhering strictly to statutory drug control laws.',
          'Provide clear, comprehensive patient counseling on dosage schedules and potential adverse reactions.',
          'Supervise pharmacy assistants, maintain cold-chain storage, and audit controlled narcotics registers.',
          'Liaise with physicians and nursing teams regarding drug availability and therapeutic alternatives.',
        ],
        qualifications: [
          'B.Pharm / M.Pharm / Pharm.D from a recognized Pharmacy Council institution.',
          'Registered Pharmacist license with active State Pharmacy Council registration.',
          '1–2+ years of experience in hospital or organized retail pharmacy operations.',
          'Solid understanding of Good Pharmacy Practice (GPP) and automated dispensing systems.',
        ],
        skills: [
          'Pharmacotherapy & drug interaction analysis',
          'Prescription screening & sterile dispensing',
          'Patient medication counseling & advisory',
          'Pharmacy Management Software & inventory ERP',
        ],
        experience: '1+ years of post-registration professional pharmacy practice.',
      },
      {
        title: 'Clinical Pharmacist (Therapeutic Monitoring & ICU)',
        badge: 'Advanced Clinical Role',
        salaryRange: '€4,500 – €6,800 / month',
        description:
          'Specialized clinical pharmacists participating in daily hospital multidisciplinary medical rounds, optimizing drug therapy regimens, therapeutic drug monitoring (TDM), and antimicrobial stewardship.',
        responsibilities: [
          'Conduct comprehensive medication reconciliation for newly admitted and ICU patients.',
          'Calculate precision pharmacokinetics and perform Therapeutic Drug Monitoring (TDM) for high-risk drugs.',
          'Advise medical consultants on individualized antimicrobial dosing and renal/hepatic dose adjustments.',
          'Monitor, document, and report Adverse Drug Reactions (ADRs) to international pharmacovigilance databases.',
          'Develop hospital clinical formularies and evidence-based pharmacotherapy guidelines.',
        ],
        qualifications: [
          'Pharm.D (Doctor of Pharmacy) or M.Pharm in Clinical Pharmacy / Pharmacy Practice.',
          'Registered Pharmacist with documented clinical hospital residency experience.',
          'Proven competency in pharmacokinetics, infectious diseases, or oncology pharmacy.',
        ],
        skills: [
          'Therapeutic Drug Monitoring (TDM) & pharmacokinetics',
          'Antimicrobial stewardship & clinical rounds',
          'Adverse drug reaction (ADR) evaluation & pharmacovigilance',
          'Critical care pharmacotherapy consultation',
        ],
        experience: '2+ years of clinical pharmacist practice in a tertiary care hospital.',
      },
      {
        title: 'Pharmacy Assistant & Pharmacy Technician',
        badge: 'Fast Entry Pathway',
        salaryRange: '€2,600 – €3,800 / month',
        description:
          'Certified pharmacy technicians assisting licensed pharmacists in medication repackaging, automated dispensing unit restocking, inventory maintenance, and prescription preparation.',
        responsibilities: [
          'Prepare, count, label, and package medications under the supervision of a licensed pharmacist.',
          'Operate automated dispensing machines (Pyxis / Omnicell) and cleanroom equipment.',
          'Maintain cleanroom sterility, laminar flow hoods, and stock expiration audits.',
          'Handle patient billing, insurance claims verification, and supplier purchase orders.',
        ],
        qualifications: [
          'Diploma in Pharmacy (D.Pharm) or Certified Pharmacy Technician certificate.',
          'Basic understanding of medical terminology, brand/generic drugs, and dosage calculations.',
          '1+ years of experience in a pharmacy setting.',
        ],
        skills: [
          'Medication packaging & labeling accuracy',
          'Automated dispensing machinery operation',
          'Cleanroom hygiene & stock inventory audits',
          'Customer service & digital billing systems',
        ],
        experience: '1+ years in hospital or retail pharmacy environment.',
      },
    ],
    keyResponsibilities: [
      'Accurate dispensing, compound preparation, and verification of prescribed pharmaceutical products.',
      'Screening prescriptions for adverse drug interactions, dosage errors, and therapeutic duplications.',
      'Participating in antimicrobial stewardship, therapeutic drug monitoring, and clinical hospital rounds.',
      'Ensuring compliance with international Good Pharmacy Practice (GPP) and hazardous drug handling standards.',
      'Maintaining precise digital inventories, temperature logs, and controlled substance registries.',
    ],
    qualifications: [
      'B.Pharm, M.Pharm, Pharm.D, or D.Pharm from a recognized university or pharmacy institute.',
      'Valid registration as a Pharmacist with National / State Pharmacy Council with good standing.',
      'Knowledge of international pharmacopeias (USP, BP, Ph. Eur.) and automated pharmacy technology.',
      'Language proficiency (IELTS/OET for UK/Ireland or willingness to undergo EU language courses).',
    ],
    requiredSkills: [
      'Pharmacokinetics & Therapeutic Drug Monitoring (TDM)',
      'Prescription Validation & Aseptic Compounding',
      'Clinical Pharmacology & Antimicrobial Stewardship',
      'Pharmacy Information Systems & Automated Dispensing',
      'Patient Consultation & Empathetic Communication',
    ],
    careerOpportunities: [
      'Competitive international salaries (€3,400 – €6,800+/month) with standard European benefits.',
      'Sponsorship opportunities across world-renowned hospital groups and multinational pharmaceutical chains.',
      'Specialization tracks into Oncology Pharmacy, Pediatric Pharmacotherapy, and Clinical Trials Management.',
      'Complete employer support for work permits, relocation allowances, and permanent residency.',
    ],
  },

  // =========================================================================
  // 4. MEDICAL LABORATORY
  // =========================================================================
  {
    id: 'medical-laboratory',
    slug: 'medical-laboratory',
    title: 'Medical Laboratory',
    shortTitle: 'Laboratory',
    route: '/services/healthcare/medical-laboratory',
    icon: Microscope,
    color: 'from-teal-600 to-emerald-500',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    heroImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    tagline: 'High-Tech Pathology & Diagnostic Laboratory Careers Worldwide',
    shortDescription:
      'Placing Medical Lab Technologists, Certified Phlebotomists, and Microbiology Technicians in ISO-accredited diagnostic centers and hospital laboratories.',
    overview:
      'Our Medical Laboratory division recruits qualified diagnostic specialists, medical technologists, and phlebotomists for accredited hospital pathology laboratories, diagnostic networks, and research institutes across Europe and the Middle East. With high diagnostic testing volumes globally, overseas laboratories offer state-of-the-art automated analyzers, molecular biology suites, and structured career growth.',
    licensingHighlights:
      'Full guidance for HCPC Registration (UK Biomedical Scientist), European Laboratory Equivalence, ISO 15189 compliance, and Gulf Prometric/Dataflow verification.',
    stats: [
      { label: 'Avg. Laboratory Salary', value: '€2,800 – €5,400/mo' },
      { label: 'Accredited Lab Openings', value: '75+ Vacancies' },
      { label: 'Automation & Tech', value: 'ISO 15189 Certified' },
      { label: 'Visa Sponsorship', value: '100% Guaranteed' },
    ],
    roles: [
      {
        title: 'Medical Lab Technician & Technologist (MLT / BMLT / DMLT)',
        badge: 'High International Demand',
        salaryRange: '€3,000 – €4,800 / month',
        description:
          'Diagnostic laboratory technologists conducting automated biochemistry, hematology, coagulation, urinalysis, and immunology testing on human clinical specimens with rigorous quality control.',
        responsibilities: [
          'Operate, calibrate, and maintain high-throughput automated analyzers (Roche, Abbott, Sysmex, Beckman).',
          'Execute daily Internal Quality Control (IQC) and participate in External Quality Assurance (EQAS).',
          'Perform manual differential blood counts, microscopic examinations, and cross-matching.',
          'Analyze diagnostic results for abnormal critical values and immediately notify attending physicians.',
          'Ensure total adherence to ISO 15189, CAP, and biosafety level (BSL-2) safety protocols.',
        ],
        qualifications: [
          'B.Sc MLT (Medical Laboratory Technology) / BMLT / DMLT from a recognized institution.',
          'Registration with Allied Health Professionals Council / Paramedical Council.',
          '1–3+ years of clinical laboratory experience in a hospital or NABL-accredited diagnostic lab.',
        ],
        skills: [
          'Automated clinical biochemistry & hematology testing',
          'Quality control calibration (Westgard rules & Levey-Jennings charts)',
          'Microscopic examination of biological specimens',
          'Laboratory Information Management Systems (LIMS)',
        ],
        experience: '2+ years working in an accredited clinical pathology laboratory.',
      },
      {
        title: 'Certified Phlebotomist (Blood Collection & Blood Bank)',
        badge: 'Fast-Track Placement',
        salaryRange: '€2,600 – €3,800 / month',
        description:
          'Expert blood collection specialists skilled in advanced venipuncture, pediatric capillary sampling, blood donation drives, specimen barcoding, and pre-analytical quality assurance.',
        responsibilities: [
          'Perform skilled, painless venipuncture on adult, geriatric, pediatric, and difficult-access patients.',
          'Verify patient identity, adhere strictly to tube draw order, and apply digital barcodes.',
          'Screen voluntary blood donors and collect whole blood units in blood bank and transfusion centers.',
          'Handle specimen centrifugation, separation, cold-chain preservation, and biohazard transport.',
          'Alleviate patient anxiety through compassionate, reassuring bedside communication.',
        ],
        qualifications: [
          'Certificate / Diploma in Medical Laboratory Technology (DMLT) or Certified Phlebotomy Technician.',
          'Proven mastery of aseptic blood drawing techniques and needle-stick safety protocols.',
          '1+ years of high-volume phlebotomy experience in hospitals, blood banks, or collection centers.',
        ],
        skills: [
          'Advanced venipuncture & capillary blood sampling',
          'Strict Order of Draw compliance & barcode tagging',
          'Pediatric & geriatric patient handling',
          'Biosafety, sharp disposal & infection control',
        ],
        experience: '1+ years in high-volume blood collection or hospital phlebotomy unit.',
      },
      {
        title: 'Microbiology & Molecular Diagnostics Technician',
        badge: 'High Specialization Role',
        salaryRange: '€3,400 – €5,400 / month',
        description:
          'Specialists performing microbiological cultures, antibiotic susceptibility testing (AST), PCR viral load testing, serological ELISA assays, and molecular sequencing in advanced pathology units.',
        responsibilities: [
          'Inoculate clinical specimens onto selective media and identify bacterial/fungal pathogens.',
          'Perform automated and manual Antibiotic Sensitivity Testing (AST) per EUCAST / CLSI guidelines.',
          'Execute Real-Time PCR (RT-PCR), DNA/RNA extraction, and molecular infectious disease assays.',
          'Maintain sterile laminar airflow hoods, autoclave cycles, and reference culture collections.',
          'Coordinate with hospital infection control committees regarding nosocomial outbreak surveillance.',
        ],
        qualifications: [
          'B.Sc / M.Sc in Medical Microbiology / Biotechnology / Medical Laboratory Technology.',
          'Hands-on experience in molecular diagnostics (RT-PCR) and automated culture systems (BACTEC, VITEK).',
          '2+ years of dedicated clinical microbiology laboratory experience.',
        ],
        skills: [
          'Molecular biology techniques (RT-PCR & Nucleic Acid Extraction)',
          'Bacterial culture, staining & automated identification (VITEK)',
          'Antimicrobial susceptibility testing (EUCAST/CLSI)',
          'Biosafety Level 2/3 precautions & decontamination',
        ],
        experience: '2+ years in clinical microbiology or molecular diagnostic laboratory.',
      },
    ],
    keyResponsibilities: [
      'Specimen receipt, pre-analytical verification, automated testing, and accurate data entry into LIMS.',
      'Performing multi-analyzer maintenance, calibration, quality control audits, and troubleshooting.',
      'Identifying critical diagnostic red flags and communicating urgent findings to clinical consultants.',
      'Strict adherence to biohazard handling, chemical safety, waste segregation, and personal protective equipment.',
      'Participating in international laboratory accreditation inspections (ISO 15189, JCI, CAP).',
    ],
    qualifications: [
      'B.Sc MLT, M.Sc MLT, BMLT, DMLT, or Medical Microbiology degree from recognized institution.',
      'Active registration with State Paramedical / Allied Health Council.',
      'Proven competency with major diagnostic analyzer brands (Roche, Beckman Coulter, Abbott, Sysmex, bioMérieux).',
      'Language readiness for English, Dutch, or German working environments.',
    ],
    requiredSkills: [
      'Automated Diagnostic Analyzer Operation',
      'Quality Control & Assurance (IQC / EQAS / Westgard Rules)',
      'Aseptic Blood Collection & Specimen Integrity',
      'Molecular Diagnostic Techniques & PCR',
      'Laboratory Information Management Systems (LIMS)',
    ],
    careerOpportunities: [
      'Direct contracts with leading European reference laboratories and university hospital pathology departments.',
      'Starting monthly remuneration from €2,800 to €5,400+ with additional shift allowances.',
      'Professional progression into Senior Biomedical Scientist, Lab Manager, and Quality Lead roles.',
      'Complete employer visa sponsorship, relocation coverage, and family residency facilitation.',
    ],
  },

  // =========================================================================
  // 5. ALLIED HEALTH & WELLNESS
  // =========================================================================
  {
    id: 'allied-health-wellness',
    slug: 'allied-health-wellness',
    title: 'Allied Health & Wellness',
    shortTitle: 'Allied Health',
    route: '/services/healthcare/allied-health-wellness',
    icon: Activity,
    color: 'from-emerald-600 to-teal-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    tagline: 'Integrative Healthcare, Physiotherapy, Clinical Nutrition & Holistic Wellness',
    shortDescription:
      'Recruiting Physiotherapists, Clinical Dietitians, Ayurvedic Doctors (BAMS), and Certified Yoga Therapists for international wellness resorts, rehab clinics, and integrative health centers.',
    overview:
      'Our Allied Health & Wellness division bridges modern physical rehabilitation and clinical nutrition with authentic holistic healing traditions (Ayurveda & Therapeutic Yoga). We connect qualified physiotherapists, clinical dietitians, Ayurvedic doctors (BAMS/MD), and certified yoga masters with premier rehabilitation hospitals, luxury wellness retreats, specialized lifestyle clinics, and international spa medical centers across Europe, the Middle East, and worldwide.',
    licensingHighlights:
      'Facilitation for European Physiotherapy Board recognitions, Clinical Nutrition certifications, and AYUSH-certified international wellness licensing.',
    stats: [
      { label: 'Avg. Wellness Salary', value: '€3,000 – €6,200/mo' },
      { label: 'Rehab & Resort Partners', value: '70+ Facilities' },
      { label: 'Holistic & Medical Balance', value: '100% Accredited' },
      { label: 'Visa Sponsorship', value: 'Full Expat Package' },
    ],
    roles: [
      {
        title: 'Physiotherapist & Physical Rehabilitation Specialist',
        badge: 'High European Demand',
        salaryRange: '€3,400 – €5,500 / month',
        description:
          'Licensed physical therapists providing musculoskeletal, neurological, orthopedic, post-surgical, and geriatric rehabilitation in modern therapy centers and sports recovery clinics.',
        responsibilities: [
          'Conduct comprehensive biomechanical, functional mobility, and postural assessments.',
          'Design customized therapeutic exercise, manual therapy, and electrotherapy rehabilitation plans.',
          'Treat post-operative orthopedic patients (joint replacements, ligament repairs, spinal rehabilitation).',
          'Implement neuro-rehabilitation protocols for stroke, Parkinson’s, and spinal cord injury patients.',
          'Educate patients on ergonomics, core stabilization, and long-term injury prevention.',
        ],
        qualifications: [
          'Bachelor of Physiotherapy (BPT) or Master of Physiotherapy (MPT) from recognized university.',
          'Active registration with State Physiotherapy Council / Indian Association of Physiotherapists (IAP).',
          '2+ years of clinical physiotherapy experience in a hospital, rehabilitation center, or sports clinic.',
        ],
        skills: [
          'Manual therapy & joint mobilization techniques',
          'Neuro-rehabilitation & gait training',
          'Electrotherapy & therapeutic exercise prescription',
          'Biomechanical analysis & patient progress tracking',
        ],
        experience: '2+ years in clinical physiotherapy or rehabilitation facility.',
      },
      {
        title: 'Clinical Dietitian & Nutritionist',
        badge: 'Growing Lifestyle Sector',
        salaryRange: '€3,000 – €4,800 / month',
        description:
          'Certified nutrition experts designing medical nutrition therapy (MNT), enteral/parenteral feeding plans, bariatric dietetics, and metabolic wellness programs in hospitals and wellness retreats.',
        responsibilities: [
          'Perform comprehensive nutritional assessments, body composition analysis, and dietary history reviews.',
          'Formulate customized Medical Nutrition Therapy (MNT) for diabetes, renal, cardiac, and oncology patients.',
          'Calculate precision caloric and macronutrient requirements for enteral and parenteral ICU feeding.',
          'Deliver personalized nutrition counseling in metabolic lifestyle and weight management clinics.',
          'Collaborate with hospital culinary chefs to develop nutritionally balanced, therapeutic patient menus.',
        ],
        qualifications: [
          'B.Sc / M.Sc in Clinical Nutrition & Dietetics / Food & Nutrition.',
          'Registered Dietitian (RD) credential or national nutrition association membership.',
          '2+ years of experience as a clinical dietitian in a hospital or wellness center.',
        ],
        skills: [
          'Medical Nutrition Therapy (MNT) calculation',
          'Enteral & parenteral feeding protocols',
          'Metabolic syndrome & chronic disease nutrition',
          'Therapeutic menu planning & dietary counseling',
        ],
        experience: '2+ years in clinical nutrition or hospital dietetics department.',
      },
      {
        title: 'Yoga & Wellness Specialist / Ayurvedic Practitioner (BAMS)',
        badge: 'Global Wellness Trend',
        salaryRange: '€3,200 – €6,200 / month',
        description:
          'Ayurvedic doctors (BAMS) and certified master yoga instructors delivering authentic holistic treatments, therapeutic yoga, Panchakarma detox, and stress-reduction programs in international wellness resorts.',
        responsibilities: [
          'Conduct Ayurvedic Prakriti/Vikriti constitution analysis and recommend lifestyle interventions.',
          'Prescribe and oversee authentic Panchakarma therapies, herbal wellness remedies, and detox regimens.',
          'Lead daily restorative, therapeutic, and dynamic Hatha / Vinyasa yoga sessions and breathwork (Pranayama).',
          'Conduct mindfulness meditation workshops and stress-management seminars for international guests.',
          'Supervise holistic spa therapists to ensure traditional quality, hygiene, and guest satisfaction.',
        ],
        qualifications: [
          'BAMS / MD (Ayurveda) or B.Sc/M.Sc in Yoga Therapy / Yoga Alliance RYT-500 Certification.',
          'Valid registration with National Commission for Indian System of Medicine (NCISM) or AYUSH.',
          '2+ years of experience in luxury wellness resorts, Ayurvedic hospitals, or holistic healing retreats.',
        ],
        skills: [
          'Ayurvedic pulse & constitution diagnosis (Nadi Pariksha)',
          'Therapeutic Yoga, Asana alignment & Pranayama instruction',
          'Panchakarma detox protocol supervision',
          'Mindfulness meditation & holistic lifestyle coaching',
        ],
        experience: '2+ years in an accredited Ayurvedic hospital or international luxury wellness retreat.',
      },
    ],
    keyResponsibilities: [
      'Holistic physical, nutritional, and lifestyle assessments tailored to individualized recovery and wellness goals.',
      'Delivering evidence-based physiotherapy, customized clinical dietetics, and authentic therapeutic yoga protocols.',
      'Collaborating with multidisciplinary clinical and hospitality teams to deliver world-class wellness experiences.',
      'Educating clients on sustainable posture, functional fitness, nutrition, and stress management.',
      'Maintaining international safety, patient hygiene, and luxury hospitality hospitality standards.',
    ],
    qualifications: [
      'BPT / MPT (Physiotherapy), B.Sc/M.Sc (Nutrition & Dietetics), or BAMS/MD (Ayurveda) / Certified Yoga Master.',
      'Valid registration with relevant professional councils (Physiotherapy Council, Dietetic Association, AYUSH).',
      'Minimum 2+ years of professional practice in accredited hospitals, rehabilitation clinics, or wellness resorts.',
      'Excellent English communication and interpersonal client relationship skills.',
    ],
    requiredSkills: [
      'Biomechanical Assessment & Rehabilitation Protocols',
      'Clinical Dietetics & Medical Nutrition Therapy (MNT)',
      'Ayurvedic Diagnostics & Therapeutic Yoga Mastery',
      'Client-Centric Communication & Holistic Coaching',
      'Cross-Cultural Adaptability in Luxury & Medical Settings',
    ],
    careerOpportunities: [
      'Lucrative international employment packages (€3,000 – €6,200/month) with paid accommodation and flights.',
      'Placements in prestigious European rehabilitation hospitals, Swiss medical spas, and Middle Eastern luxury wellness resorts.',
      'Expat lifestyle benefits including annual paid leave, medical insurance, and performance bonuses.',
      'High-growth international career path in the multi-trillion dollar global wellness & rehabilitation industry.',
    ],
  },
];
