// ============================================================
//  PORTFOLIO DATA — Edit everything here!
//  All sections of the portfolio are controlled from this file.
// ============================================================

export const portfolioData = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  personal: {
    name: "Saif Ali Khan",
    title: "MERN Full Stack Developer",
    subtitle: "Building Scalable Web Applications",
    experience: "1 Year 5 Months",
    location: "Mau, Uttar Pradesh, India",
    email: "hasansaifkhan0@gmail.com",
    phone: "+91-8933831760",
    whatsapp: "918933831760",  // Country code + number (no + or spaces)
    github: "https://github.com/khanalisaif",
    profilePhoto: "/profile.jpg",
    resumePDF: "/resume.pdf",
    summary: "Detail-driven MERN Full Stack Developer with 1 year 4 months of hands-on experience in building, optimizing, and deploying scalable web applications. Strong expertise in React.js, Node.js, Express.js, and MongoDB, with real-world exposure to authentication systems, API integrations, and performance optimization. Recognized for clean coding practices, structured problem-solving, and delivering production-ready solutions within collaborative, fast-paced development environments.",
  },

  // ── TYPING ANIMATION ROLES ─────────────────────────────────
  roles: [
    "MERN Full Stack Developer",
    "React.js Specialist",
    "Node.js Backend Engineer",
    "API Architecture Expert",
    "UI Performance Optimizer",
  ],

  // ── SKILLS ─────────────────────────────────────────────────
  // Each category has a label, icon name (lucide), and list of skills
  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      color: "#FF6B35",
      items: ["JavaScript (ES6+)", "TypeScript", "Java (Core)", "Python (Basic)"],
    },
    {
      category: "Frontend",
      icon: "Monitor",
      color: "#00D9FF",
      items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      category: "Backend",
      icon: "Server",
      color: "#A855F7",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "OTP", "RBAC", "MVC Architecture"],
    },
    {
      category: "Database",
      icon: "Database",
      color: "#10B981",
      items: ["MongoDB", "Mongoose", "PostgreSQL", "SQL", "Schema Design", "Data Validation"],
    },
    {
      category: "Performance",
      icon: "Zap",
      color: "#F59E0B",
      items: ["Shimmer UI", "Lazy Loading", "Code Splitting", "Optimization Techniques"],
    },
    {
      category: "Integrations",
      icon: "Plug",
      color: "#EC4899",
      items: ["Payment Gateways", "Third-Party APIs", "Email & OTP Services"],
    },
    {
      category: "Tools",
      icon: "Wrench",
      color: "#6366F1",
      items: ["Git", "GitHub", "Postman", "Environment Configuration"],
    },
    {
      category: "Core Concepts",
      icon: "Brain",
      color: "#14B8A6",
      items: ["DSA", "OOP", "Clean Code Principles", "Debugging"],
    },
    {
      category: "Deployment",
      icon: "Rocket",
      color: "#F97316",
      items: ["Build Optimization", "Production Issue Handling", "Vercel"],
    },
  ],

  // ── EXPERIENCE ─────────────────────────────────────────────
  experience: [
    {
      role: "MERN Full Stack Developer",
      company: "Travel Grow India",
      period: "November 2025 – Present",
      type: "Full-time",
      points: [
        "Developing scalable MERN stack applications used in live production environments.",
        "Designing RESTful APIs, implementing secure authentication and role-based authorization.",
        "Enhancing UI performance and collaborating with cross-functional teams.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Embrizon Technologies",
      period: "12 Months",
      type: "Full-time",
      points: [
        "Built responsive web applications using React.js and Node.js.",
        "Worked on frontend UI, backend APIs, database integration, and application optimization.",
        "Collaborated with team members to deliver production-ready features on schedule.",
      ],
    },
  ],

  // ── PROJECTS ───────────────────────────────────────────────
  projects: [
    {
      title: "High-Scale Energy Ingestion Engine",
      subtitle: "MERN Full Stack",
      description: "A full-stack MERN application built to ingest, store, and analyze high-frequency telemetry data from Smart Meters and EV Vehicles at scale. Processes real-time telemetry every 60 seconds from thousands of devices.",
      features: [
        "Polymorphic telemetry ingestion (auto-detects Meter or Vehicle data)",
        "Hot & Cold storage architecture for performance optimization",
        "Real-time dashboard for fleet and device monitoring",
        "24-hour vehicle performance analytics",
        "MongoDB aggregation-based analytics (no full collection scans)",
        "Scalable design capable of handling millions of records per day",
      ],
      tech: ["React 18", "Node.js", "Express.js", "MongoDB", "Mongoose", "Recharts", "Vite", "Joi", "Axios"],
      liveUrl: "https://energy-ingestion-system-s2tp.vercel.app/",
      githubUrl: "https://github.com/khanalisaif",
      featured: true,
    },
    {
      title: "SpendSense — Expense Tracker",
      subtitle: "MERN Full Stack",
      description: "A full-stack daily expense tracker built with the MERN stack. Users can add, edit, and delete their daily expenses with automatic cleanup — entries older than 30 days are automatically removed, keeping the dashboard clean and relevant.",
      features: [
        "Add, edit, and delete daily expenses with ease",
        "Auto-delete entries after 30 days for clutter-free tracking",
        "Dark & Light mode toggle for comfortable viewing",
        "Responsive two-column layout for large screens",
        "Clean, minimal UI built with Syne & DM Sans typography",
        "MongoDB backend with Express.js REST APIs",
      ],
      tech: ["React 18", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vite", "Tailwind CSS"],
      liveUrl: "https://expensetracker.saifalikhan.in/",
      githubUrl: "https://github.com/khanalisaif",
      featured: true,
    },
    {
      title: "Travel Grow India",
      subtitle: "Travel Leads Platform",
      description: "End-to-end MERN-based travel leads and agent management system used in live production. Increased operational efficiency and user engagement by approximately 20%.",
      features: [
        "Role-based access control (RBAC) for agents and admins",
        "API integrations for travel data management",
        "Secure JWT authentication system",
        "Real-time lead tracking and management dashboard",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux Toolkit", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: "https://github.com/khanalisaif",
      featured: true,
    },
    {
      title: "Doctora",
      subtitle: "Healthcare Management System",
      description: "A comprehensive healthcare management system with frontend and backend modules built in a collaborative team environment with real-time problem solving and deployment-ready features.",
      features: [
        "Patient management and appointment scheduling",
        "Frontend and backend module integration",
        "Real-time problem solving and deployment features",
        "Responsive design across all devices",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/khanalisaif",
      featured: false,
    },
  ],

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      degree: "Graduation ",
      institution: "Maharaja Suhel Dev State University",
      year: "2024",
      percentage: null,
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "UP Board",
      year: "2021",
      percentage: "72%",
    },
    {
      degree: "Secondary (10th)",
      institution: "UP Board",
      year: "2019",
      percentage: "83%",
    },
  ],

  // ── COURSES ────────────────────────────────────────────────
  courses: [
    {
      title: "Diploma in Software Technologies",
      institution: "Coders Academy",
      description: "Industry-focused training in MERN Stack with hands-on live projects. Strong foundation in full stack development, clean coding practices, and real-world problem solving.",
    },
    {
      title: "MERN Stack Development",
      institution: "Live Projects & Practical Training",
      description: "Practical hands-on experience with real-world projects covering the complete MERN stack ecosystem.",
    },
  ],

  // ── LANGUAGES ──────────────────────────────────────────────
  languages: ["English", "Hindi"],

  // ── STATS (shown on hero/about) ────────────────────────────
  stats: [
    { label: "Experience", value: "1.5+", unit: "Years" },
    { label: "Projects", value: "40+", unit: "Built" },
    { label: "Technologies", value: "20+", unit: "Mastered" },
    { label: "Efficiency", value: "20%", unit: "Improved" },
  ],
};
