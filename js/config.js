/** Profile & content — edit email and highlights here */
export const PROFILE = {
  name: "Nadiia Haidash",
  nameShort: "Nadiia",
  role: "Entrepreneurship & CS",
  tagline:
    "CS student building games, full-stack apps, and hackathon prototypes — code with design in mind.",
  location: "Helsinki, Finland",
  email: "haidashnadia@gmail.com", // e.g. hello@example.com — leave empty to hide mailto
  links: {
    linkedin: "https://www.linkedin.com/in/nadiia-haidash",
    github: "https://github.com/nadiikka",
    itch: "https://nadiiykka.itch.io/",
  },
  githubUsername: "nadiikka",
};

export const SKILLS = {
  languages: [
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 95 },
    { name: "C#", level: 92 },
    { name: "Java", level: 72 },
    { name: "SQL", level: 78 },
    { name: "HTML/CSS", level: 92 },
  ],
  frameworks: [
    { name: "React", level: 88 },
    { name: "Unity", level: 96 },
    { name: "FastAPI", level: 82 },
    { name: "Flask", level: 76 },
    { name: "Django", level: 72 },
    { name: "Node.js", level: 80 },
    { name: ".NET", level: 85 },
  ],
  tools: [
    { name: "RISC-V Assembly", level: 50 },
    { name: "Git", level: 98 },
    { name: "Docker", level: 72 },
    { name: "AWS", level: 80 },
    { name: "Figma", level: 88 },
    { name: "Blender", level: 68 },
    { name: "LLM APIs", level: 82 },
  ],
};

/** Shown first; matched GitHub repos by `githubRepo` are merged with API data */
export const PROJECT_HIGHLIGHTS = [
  {
    id: "aerorozum",
    title: "AeroRozum",
    description:
      "An autonomous drone system built at the Junction × Aalto Defence Hackathon. Our team reached the Top 5 in the acceleration pitch by combining edge AI, sensor fusion, and mission-level search behaviour on real hardware.",
    tech: ["Python", "Jetson Orin", "Computer Vision", "Edge AI"],
    links: {
      article:
        "https://blogit.metropolia.fi/tekoalya-tutkimassa/en/2026/05/19/how-metropolia-software-students-worked-with-hardware-and-ai-and-made-it-to-the-top-5-of-finlands-largest-defense-hackathon/",
    },
    badge: "Top 5",
    featured: true,
  },
  {
    id: "kutojan-elamaa",
    title: "Kutojan Elämää",
    description:
      "A shipped educational Unity game made with a teammate for a real museum in Kauhava. Built in three weeks to make the lives of traditional weavers tangible through interactive play.",
    tech: ["Unity", "C#", "Game Design", "Museum Installation"],
    links: {
      itch: "https://nadiiykka.itch.io/",
    },
    badge: "Shipped · Museum game",
    featured: true,
  },
  {
    id: "connect3",
    title: "Connect3",
    description:
      "An AI-powered platform connecting older adults with younger family members through shared activities and meaningful social routines. Built with my team at Junction 2025.",
    tech: ["AI", "TypeScript", "Product Design", "Social Impact"],
    links: {
      linkedin:
        "https://www.linkedin.com/in/nadiia-haidash",
    },
    badge: "Junction 2025 · SAS winner",
    featured: true,
  },
  {
    id: "aurum",
    title: "Aurum",
    description:
      "An AI-assisted service-finding platform developed at the STUHI Hackathon. Designed for fast discovery with voice search, then implemented the backend logic for search, bookings, and reviews.",
    tech: ["JavaScript", "React", "ElevenLabs", "Backend"],
    githubRepo: "Aurum",
    links: {
      live: "https://cobalt-rose.vercel.app",
      linkedin:
        "https://www.linkedin.com/posts/nadiia-haidash_stuhi-hackathon-activity-7422563131132116992-HIkA",
    },
    badge: "STUHI Hackathon · Voice search",
    featured: true,
  },
  {
    githubRepo: "Connect3",
    id: "github-connect3",
    title: "Connect3 repository",
    description: "The working repository behind the Junction 2025 social connection prototype.",
    tech: ["TypeScript", "Web"],
    featured: false,
  },
  {
    id: "ai-agent",
    title: "AIAgent — Student Helpmate",
    description: "Student Helpmate — AI-assisted tooling for study workflows.",
    tech: ["Python", "AI"],
    githubRepo: "AIAgent",
    featured: false,
  },
];

export const ITCH_GAMES = [
  {
    title: "BubbleShooter 2D",
    description: "Bullet hell made for FGJ/GGJ 2025.",
    url: "https://nadiiykka.itch.io/bubbleshooter",
  },
  {
    title: "Light's out",
    description: "A short puzzle game.",
    url: "https://isla-isopahkala.itch.io/lights-out",
  },
  {
    title: "MySummerTrip",
    description: "A game about my summer trip.",
    url: "https://nadiiykka.itch.io/mysummertrip",
  },
];

export const TIMELINE = [
  {
    type: "work",
    title: "Game Developer (Erasmus+ BIP)",
    org: "Łódź University of Technology",
    period: "May 2026 — Jun 2026",
    place: "Łódź, Poland",
    summary:
      "International team building a serious game on misinformation, deepfakes, and AI literacy — UX, 3D, user testing, and pitching.",
  },
  {
    type: "work",
    title: "Pathways Pre-Incubator Participant",
    org: "Helsinki Incubators",
    period: "Mar 2026 — Jun 2026",
    place: "Helsinki, Finland",
    summary:
      "Developed an early-stage product idea through workshops, coaching, and peer collaboration in an interdisciplinary entrepreneurship programme.",
  },
  {
    type: "work",
    title: "Mobile Game Developer",
    org: "Kauhavan kaupunki (museum internship)",
    period: "Feb 2025 — May 2025",
    place: "Kauhajoki, Finland",
    summary:
      "Unity museum game — C# gameplay scripts and player interactions for a public cultural installation.",
  },
  {
    type: "work",
    title: "Sales & Technical Assistant Intern",
    org: "TechStar",
    period: "Mar 2025 — Apr 2025",
    place: "Limerick, Ireland",
    summary:
      "Advised customers on hardware specifications, handled electronics, supported inventory management, and maintained a customer-friendly store environment.",
  },
  {
    type: "work",
    title: "Computer Games Developer",
    org: "Kurikan Kaupunginkirjasto",
    period: "Jan 2024 — May 2024",
    place: "Kauhajoki, Finland",
    summary: "Game development within a municipal library learning program.",
  },
  {
    type: "volunteer",
    title: "Deep Tech Investor Day Volunteer",
    org: "Helsinki",
    period: "Jun 2026",
    place: "Helsinki, Finland",
    summary:
      "Supported event operations at the Defence stage, including speaker assistance, presentation slides, and live microphone handling.",
  },
  {
    type: "volunteer",
    title: "Slush Volunteer",
    org: "Slush",
    period: "Nov 2025",
    place: "Helsinki, Finland",
    summary:
      "Helped guide attendees, support venue operations, and contribute to recycling efforts during two fast-paced days at the event.",
  },
  {
    type: "volunteer",
    title: "Erasmus+ Youth Exchange Participant",
    org: "Volunteers Build the Bricks of the Future Together",
    period: "Aug 2025",
    place: "Şanlıurfa, Turkey",
    summary:
      "Participated in an international project on volunteering and community engagement, strengthening teamwork and intercultural communication.",
  },
  {
    type: "education",
    title: "Bachelor of Science, Computer Science",
    org: "University of Helsinki",
    period: "2026 — Present",
    place: "Helsinki, Finland",
    summary: null,
  },
  {
    type: "education",
    title: "Bachelor of Engineering, Information Technology",
    org: "Metropolia University of Applied Sciences",
    period: "2025 — 2026",
    place: "Helsinki, Finland",
    summary: null,
  },
  {
    type: "education",
    title: "Professional Associate Degree, Software Engineering",
    org: "Husiatyn Professional College (TNTU)",
    period: "2022 — 2026",
    place: "Ukraine",
    summary: null,
  },
  {
    type: "education",
    title: "Vocational Qualification in ICT, Game Development",
    org: "Vuoksi Vocational School",
    period: "2023 — 2025",
    place: "Kauhajoki, Finland",
    summary: null,
  },
];
