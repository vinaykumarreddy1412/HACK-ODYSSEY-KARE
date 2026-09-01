/**
 * HACK ODYSSEY 4.0 - CENTRAL CONFIGURATION
 * Kalasalingam Academy of Research and Education (KARE) under Euphoria 2026
 * 
 * All important links, contact details, dates, and constants are configured here.
 */

const EVENT_CONFIG = {
  // Core Event Details
  eventName: "HACK ODYSSEY 4.0",
  edition: "4.0",
  parentEvent: "Euphoria 2026",
  institution: "Kalasalingam Academy of Research and Education (KARE)",
  institutionShort: "KARE",
  tagline: "CODE. CREATE. CONQUER THE ODYSSEY.",
  description: "A premier 24-hour national level hackathon bringing student innovators, developers, and visionaries together to build cutting-edge AI and emerging technology solutions addressing global Sustainable Development Goals.",
  
  // Date & Duration
  date: "25 — 26 September 2026",
  startDate: "2026-09-25T09:00:00+05:30",
  endDate: "2026-09-26T09:00:00+05:30",
  durationHours: 24,
  durationText: "24 Hours",
  mode: "Offline",
  
  // Participation & Prizes
  registrationFee: "₹300 per member",
  registrationFeeAmount: "₹300",
  prizePool: "Up to ₹1,00,000",
  prizePoolAmount: "₹1,00,000",
  teamSize: "4–5 Members",
  
  // Venue
  venueName: "KRISHNA AUDITORIUM",
  venueLocation: "HMGG+2W6, Krishnan Kovil, Kunnur, Tamil Nadu 626126",
  
  // Action Links (Easily Configurable)
  registrationUrl: "https://euphoria.kalasalingam.ac.in",
  whatsappUrl: "https://chat.whatsapp.com/Kvs4ltMc7wvHQfbZ5DZugD",
  mapsEmbedUrl: "https://maps.google.com/maps?q=KRISHNA+AUDITORIUM,+Krishnan+Kovil,+Tamil+Nadu+626126&t=&z=17&ie=UTF8&iwloc=&output=embed",
  
  // Convenors
  convenors: [
    {
      name: "Dr. P. Deepalakshmi",
      role: "Dean / SoC",
      fullRole: "Dean, School of Computing",
      initials: "PD",
      institution: "KARE"
    },
    {
      name: "Dr. R. Raja Subramanian",
      role: "HoD / CSE",
      fullRole: "Head of Department, CSE",
      initials: "RS",
      institution: "KARE"
    },
    {
      name: "Dr. N. C. Brintha",
      role: "HoD / IT",
      fullRole: "Head of Department, Information Technology",
      initials: "NB",
      institution: "KARE"
    }
  ],
  
  // Faculty Sponsor
  facultySponsor: {
    name: "Dr. P. Chinnasamy",
    role: "Faculty Sponsor",
    designation: "ACM/KARE, ASP/CSE",
    initials: "PC",
    department: "Department of CSE"
  },
  
  // Faculty Coordinators
  facultyCoordinators: [
    { name: "Dr. P. Chinnasamy", designation: "ACM/KARE, ASP/CSE", role: "Faculty Sponsor & Coordinator", initials: "PC" },
    { name: "Mrs. N. Kirthiga", designation: "AP/CSE", role: "Faculty Coordinator", initials: "NK" },
    { name: "Mrs. S. Reshni", designation: "AP/CSE", role: "Faculty Coordinator", initials: "SR" },
    { name: "Mrs. B. Lavanya", designation: "AP/CSE", role: "Faculty Coordinator", initials: "BL" },
    { name: "Mrs. S. Shanmuga Priya", designation: "AP/CSE", role: "Faculty Coordinator", initials: "SP" },
    { name: "Mr. C. Sivamurugan", designation: "AP/CSE", role: "Faculty Coordinator", initials: "CS" },
    { name: "Dr. M. K. Nagarajan", designation: "AP/CSE", role: "Faculty Coordinator", initials: "MN" },
    { name: "Dr. R. Rajasekhar", designation: "AP/CSE", role: "Faculty Coordinator", initials: "RR" },
    { name: "Dr. T. Dhilipan Raj Kumar", designation: "AP/CSE", role: "Faculty Coordinator", initials: "TD" },
    { name: "Mr. Aravind Chandran", designation: "ASP/CSE", role: "Faculty Coordinator", initials: "AC" }
  ],
  
  // Student Coordinators
  studentCoordinators: [
    {
      name: "C YASASVI",
      phone: "+91 93901 98225",
      phoneClean: "919390198225",
      role: "Student Coordinator",
      initials: "CY"
    },
    {
      name: "SAI CHAKRADHAR",
      phone: "+91 63026 07469",
      phoneClean: "916302607469",
      role: "Student Coordinator",
      initials: "SC"
    },
    {
      name: "UMESH",
      phone: "+91 95738 61418",
      phoneClean: "919573861418",
      role: "Student Coordinator",
      initials: "UM"
    },
    {
      name: "S TAHA",
      phone: "+91 78933 40788",
      phoneClean: "917893340788",
      role: "Student Coordinator",
      initials: "ST"
    }
  ],

  // SDGs Info
  sdgs: [
    {
      number: "02",
      badge: "SDG 2",
      title: "ZERO HUNGER & SUSTAINABLE AGRICULTURE",
      shortTitle: "Zero Hunger & AgroTech",
      color: "#DDA63A",
      logoPath: "assets/logos/sdg-2.svg",
      description: "AI-driven precision agriculture, crop disease early detection, soil health telemetry, smart food supply-chain logistics, and automated surplus food redistribution systems.",
      iconSvg: "fa-seedling"
    },
    {
      number: "03",
      badge: "SDG 3",
      title: "GOOD HEALTH & WELL-BEING INNOVATION",
      shortTitle: "Good Health & Healthcare AI",
      color: "#4C9F38",
      logoPath: "assets/logos/sdg-3.svg",
      description: "Diagnostic intelligence, assistive medical devices, predictive epidemic surveillance, decentralized patient health records, and AI mental wellness monitoring platforms.",
      iconSvg: "fa-heart-pulse"
    },
    {
      number: "04",
      badge: "SDG 4",
      title: "QUALITY EDUCATION & LIFELONG LEARNING",
      shortTitle: "Quality Education & EdTech",
      color: "#C5192D",
      logoPath: "assets/logos/sdg-4.svg",
      description: "Adaptive intelligent tutoring systems, multilingual accessibility learning tools for differently abled students, gamified STEM simulations, and verified skill credentialing.",
      iconSvg: "fa-graduation-cap"
    },
    {
      number: "06",
      badge: "SDG 6",
      title: "CLEAN WATER & SANITATION",
      shortTitle: "Clean Water & Smart IoT",
      color: "#26BDE2",
      logoPath: "assets/logos/sdg-6.svg",
      description: "IoT sensor-based water contamination monitoring, autonomous leak detection in urban grids, AI solar water desalination modeling, and equitable distribution telemetry.",
      iconSvg: "fa-droplet"
    },
    {
      number: "11",
      badge: "SDG 11",
      title: "SUSTAINABLE CITIES & COMMUNITIES",
      shortTitle: "Sustainable Cities & Mobility",
      color: "#FD9D24",
      logoPath: "assets/logos/sdg-11.svg",
      description: "Smart traffic de-congestion networks, intelligent solid waste sorting robotics, emergency disaster response routing, and carbon-neutral green building energy optimization.",
      iconSvg: "fa-city"
    },
    {
      number: "13",
      badge: "SDG 13",
      title: "CLIMATE ACTION & ENVIRONMENTAL MONITORING",
      shortTitle: "Climate Action & Ecology",
      color: "#3F7E44",
      logoPath: "assets/logos/sdg-13.svg",
      description: "Satellite remote-sensing deforestation detection, real-time industrial carbon emission tracking, ocean plastic micro-waste mapping, and climate risk predictive analytics.",
      iconSvg: "fa-earth-americas"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.EVENT_CONFIG = EVENT_CONFIG;
}
