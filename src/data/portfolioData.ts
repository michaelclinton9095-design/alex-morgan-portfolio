import { ProfileData, Project, SkillCategory, Service, Experience, Education, SiteSettings } from '../types';

export const initialProfileData: ProfileData = {
  name: "Alex Morgan",
  avatarUrl: "/avatar.svg",
  title: "Full-Stack Developer | Software Engineer | Technical Support Engineer",
  organization: "Apex Cloud Platforms",
  designation: "Technical Support Engineer",
  qualification: "Master's Degree in Computer Science",
  bioIntro: "Building Modern Digital Experiences Through Clean Code & Thoughtful Engineering.",
  aboutDetails: [
    "I am a Computer Science postgraduate and Technical Support Engineer passionate about architecting scalable, user-friendly web applications and solving complex system problems.",
    "My dual background in full-stack software development and mission-critical technical support equips me with a unique advantage: I don't just write clean, modern code—I design systems with high reliability, performance observability, and real-world resilience in mind.",
    "From high-throughput e-commerce storefronts and content management platforms to low-latency real-time chat infrastructure, I specialize in transforming technical challenges into dependable digital solutions for independent clients."
  ],
  location: "Open for Global Remote & Freelance Contracts",
  email: "michaelclinton9095@gmail.com",
  github: "https://github.com/michael-clinton-sudo",
  linkedin: "https://linkedin.com/in/fullstack-engineer",
  resumeUrl: "#",
  availableForFreelance: true
};

export const initialProjects: Project[] = [
  {
    id: "redstore-ecommerce",
    title: "RedStore E-Commerce Platform",
    tagline: "High-Performance Full-Stack E-Commerce Platform & Operations Admin Hub",
    description: "An end-to-end full-stack digital commerce platform featuring dynamic product catalogs, real-time search & filtering, persistent shopping cart & wishlist, zero-trust server-calculated checkout, order tracking, and an extensive administration dashboard with real-time MongoDB revenue aggregation.",
    category: "E-Commerce",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express 5", "MongoDB", "REST API"],
    features: [
      "Dynamic catalog with real-time search, multi-facet category and price sorting",
      "Multi-image product gallery with dynamic discount computation and ±₹500 related items",
      "Persistent cart calculation with stock limit validation and tax/shipping thresholds",
      "Zero-trust server-side checkout price verification and inventory decrement",
      "Executive Admin Dashboard with live MongoDB revenue and order KPI aggregation"
    ],
    githubUrl: "https://github.com/michael-clinton-sudo/redstore-ecommerce-platform.git",
    demoUrl: "http://localhost:5174",
    adminUrl: "http://localhost:5174/#/admin",
    backendUrl: "http://localhost:5000",
    database: "reactbackend",
    videoUrl: "/recorded-videos/RedStore/MASTER-DEMO-RedStore.mp4",
    featureVideos: [
      { id: "RED-01", title: "Catalog Search, Filtering & Sort", url: "/recorded-videos/RedStore/REDSTORE-CATALOG-FILTER-SORT.mp4", duration: "0:02.5" },
      { id: "RED-02", title: "Product Details & Sizing Swatches", url: "/recorded-videos/RedStore/REDSTORE-PRODUCT-DETAILS-GALLERY.mp4", duration: "0:02.5" },
      { id: "RED-03", title: "Cart Persistence & Stock Limits", url: "/recorded-videos/RedStore/REDSTORE-CART-PERSISTENCE-TOTALS.mp4", duration: "0:02.5" },
      { id: "RED-04", title: "Secure Checkout Pipeline", url: "/recorded-videos/RedStore/REDSTORE-CHECKOUT-ORDER-PIPELINE.mp4", duration: "0:02.5" },
      { id: "RED-05", title: "Admin Revenue KPIs & Aggregation", url: "/recorded-videos/RedStore/REDSTORE-ADMIN-DASHBOARD-KPIS.mp4", duration: "0:02.5" },
      { id: "RED-06", title: "Admin Product Catalog Operations", url: "/recorded-videos/RedStore/REDSTORE-ADMIN-PRODUCT-MANAGEMENT.mp4", duration: "0:02.5" },
      { id: "RED-07", title: "Order Lifecycle & Fulfillment", url: "/recorded-videos/RedStore/REDSTORE-ADMIN-ORDER-FULFILLMENT.mp4", duration: "0:02.5" }
    ],
    imageUrl: "/redstore.png",
    featured: true,
    status: "Completed",
    architectureNotes: "Engineered with React 19, TypeScript, and Tailwind CSS on Vite, communicating with an Express 5 REST API backed by MongoDB reactbackend."
  },
  {
    id: "codenest-blog",
    title: "CodeNest Tech Editorial Platform",
    tagline: "Editorial Publishing Platform with CMS Content Authoring Studio",
    description: "A modern developer-focused editorial blogging platform equipped with article authoring, rich typography, syntax-highlighted code blocks, tag clouds, category filters, threaded reader discussions, atomic likes, newsletter subscriptions, and an integrated administrative CMS console.",
    category: "Content Management",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express 5", "MongoDB", "REST API"],
    features: [
      "Published reader view featuring reading time estimates, SEO slugs, and responsive typography",
      "Atomic MongoDB view counter ($inc) on visit and atomic likes toggling",
      "Full CMS Admin Studio for article authoring, Markdown drafts, and instant publishing",
      "Threaded reader discussion system with approved moderation filtering",
      "Newsletter lead capture pipeline with duplicate conflict handling (HTTP 409)"
    ],
    githubUrl: "https://github.com/michael-clinton-sudo/codenest-blog-app.git",
    demoUrl: "http://localhost:5176",
    adminUrl: "http://localhost:5176/#/admin",
    backendUrl: "http://localhost:5001",
    database: "codenest",
    videoUrl: "/recorded-videos/CodeNest/MASTER-DEMO-CodeNest.mp4",
    featureVideos: [
      { id: "CODE-01", title: "Editorial Feed & Read Times", url: "/recorded-videos/CodeNest/CODENEST-READER-FEED-PAGINATION.mp4", duration: "0:02.5" },
      { id: "CODE-02", title: "Full-Text Search & Category Filter", url: "/recorded-videos/CodeNest/CODENEST-SEARCH-CATEGORY-FILTER.mp4", duration: "0:02.5" },
      { id: "CODE-03", title: "Reader Markdown & Atomic Likes", url: "/recorded-videos/CodeNest/CODENEST-ARTICLE-VIEW-LIKES.mp4", duration: "0:02.5" },
      { id: "CODE-04", title: "Reader Comments System", url: "/recorded-videos/CodeNest/CODENEST-READER-COMMENTS.mp4", duration: "0:02.5" },
      { id: "CODE-05", title: "Newsletter Lead Capture Pipeline", url: "/recorded-videos/CodeNest/CODENEST-NEWSLETTER-SUBSCRIPTION.mp4", duration: "0:02.5" },
      { id: "CODE-06", title: "CMS Authoring Studio & Drafts", url: "/recorded-videos/CodeNest/CODENEST-CMS-ARTICLE-STUDIO.mp4", duration: "0:02.5" },
      { id: "CODE-07", title: "Editorial Analytics & Moderation", url: "/recorded-videos/CodeNest/CODENEST-CMS-ANALYTICS-COMMENTS.mp4", duration: "0:02.5" }
    ],
    imageUrl: "/codenest.png",
    featured: true,
    status: "Completed",
    architectureNotes: "Structured with strict public reader isolation (drafts remain private), MongoDB aggregation pipelines for readership metrics, and full Markdown syntax highlighting."
  },
  {
    id: "realtime-chat",
    title: "Pulse Real-Time Collaboration & Chat",
    tagline: "Low-Latency Event-Driven Messaging Suite with WebSockets & MongoDB",
    description: "A responsive, enterprise-grade real-time collaboration application engineered with channel-based discussions, live user presence indicators, instant Socket.IO message streaming with database persistence before broadcast, voice audio recording, and multipart document attachments.",
    category: "Real-Time / Social",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express 5", "Socket.IO", "MongoDB"],
    features: [
      "Sub-15ms message dispatch and synchronized multi-client state via Socket.IO",
      "Public and private discussion channels with persistent MongoDB message history",
      "Active online/away/offline user presence heartbeat tracking and live status broadcast",
      "Browser Web Audio / MediaRecorder voice note recording and in-feed audio playback",
      "Multipart document file upload pipeline with file size validation and download access"
    ],
    githubUrl: "https://github.com/michael-clinton-sudo/realtime-chat-app.git",
    demoUrl: "http://localhost:5175",
    backendUrl: "http://localhost:5002",
    database: "pulse",
    videoUrl: "/recorded-videos/Pulse/MASTER-DEMO-Pulse.mp4",
    featureVideos: [
      { id: "PULSE-01", title: "Channel Creation & Room Persistence", url: "/recorded-videos/Pulse/PULSE-CHANNEL-MANAGEMENT.mp4", duration: "0:02.5" },
      { id: "PULSE-02", title: "Socket.IO Low-Latency Messaging", url: "/recorded-videos/Pulse/PULSE-REALTIME-MESSAGING.mp4", duration: "0:02.5" },
      { id: "PULSE-03", title: "Live Presence Status Tracking", url: "/recorded-videos/Pulse/PULSE-PRESENCE-STATUS.mp4", duration: "0:02.5" },
      { id: "PULSE-04", title: "Voice Note Audio Recording", url: "/recorded-videos/Pulse/PULSE-VOICE-NOTE-AUDIO.mp4", duration: "0:02.5" },
      { id: "PULSE-05", title: "Multipart File Attachments", url: "/recorded-videos/Pulse/PULSE-FILE-ATTACHMENTS.mp4", duration: "0:02.5" },
      { id: "PULSE-06", title: "Network Offline Resilience", url: "/recorded-videos/Pulse/PULSE-OFFLINE-RESILIENCE.mp4", duration: "0:02.5" }
    ],
    imageUrl: "/pulse.png",
    featured: true,
    status: "Completed",
    architectureNotes: "Self-hosted event-driven architecture using Express 5 and Socket.IO 4.8 on port 5002, with persistent MongoDB pulse storage for rooms, messages, and presence."
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Python", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Advanced", highlight: true }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React 19 / 18", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Vite & Bundlers", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "State Management (Context/Hooks)", level: "Advanced" },
      { name: "Responsive UI & Mobile-First", level: "Advanced", highlight: true }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "RESTful API Design", level: "Advanced", highlight: true },
      { name: "Authentication (JWT / Session)", level: "Advanced" },
      { name: "Middleware Architecture", level: "Advanced" },
      { name: "Serverless & Cloud Functions", level: "Proficient" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced", highlight: true },
      { name: "Firebase Realtime DB", level: "Advanced" },
      { name: "Cloud Firestore", level: "Proficient" },
      { name: "Redis Caching", level: "Proficient" },
      { name: "Cloudinary Asset Storage", level: "Proficient" }
    ]
  },
  {
    category: "Frameworks & UI Libraries",
    icon: "Boxes",
    skills: [
      { name: "React Router v7", level: "Advanced" },
      { name: "Lucide Icons", level: "Advanced" },
      { name: "Axios Client", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "VS Code & Debugging Tools", level: "Advanced" },
      { name: "Vercel & Cloud Deployment", level: "Proficient" },
      { name: "Linux / Windows CLI", level: "Advanced" }
    ]
  },
  {
    category: "Software Engineering & Support",
    icon: "ShieldCheck",
    skills: [
      { name: "Technical Support Engineering", level: "Advanced", highlight: true },
      { name: "Root Cause Analysis (RCA)", level: "Advanced", highlight: true },
      { name: "Production System Debugging", level: "Advanced", highlight: true },
      { name: "Clean Architecture & Modular Code", level: "Advanced" },
      { name: "Performance Optimization", level: "Advanced" },
      { name: "Application Modernization", level: "Advanced", highlight: true }
    ]
  }
];

export const initialServices: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Application Development",
    description: "End-to-end bespoke web applications engineered with modern TypeScript, React, and Node.js with secure authentication and high-availability database models.",
    icon: "Layers",
    deliverables: ["Fully functional web app", "TypeScript frontend + backend", "Database schema & integration", "Production build & docs"],
    active: true
  },
  {
    id: "ecommerce-dev",
    title: "E-Commerce Website Development",
    description: "Custom commerce storefronts featuring responsive catalog grids, frictionless cart checkout workflows, payment gateway integrations, and order management.",
    icon: "ShoppingCart",
    deliverables: ["Product catalog & search", "Cart & checkout pipeline", "Order history & status tracking", "Admin order management"],
    active: true
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard & CMS Development",
    description: "SaaS-grade administrative control panels with real-time KPI metrics, searchable data tables, filterable reports, and granular role-based authorization.",
    icon: "BarChart3",
    deliverables: ["Executive KPI dashboard", "Full CRUD data tables", "Data export & search filters", "Responsive mobile layouts"],
    active: true
  },
  {
    id: "blog-cms",
    title: "Blog & Content Publishing Systems",
    description: "Modern publishing solutions with markdown authoring, category hierarchies, SEO tags, draft/publishing lifecycle, and audience engagement features.",
    icon: "BookOpen",
    deliverables: ["Clean reader typography", "Rich text / Markdown editor", "SEO metadata & OpenGraph", "Comment moderation system"],
    active: true
  },
  {
    id: "realtime-apps",
    title: "Real-Time Chat & Messaging Applications",
    description: "Low-latency reactive messaging systems with active presence detection, channel rooms, multi-device sync, and WebSocket/Firebase integration.",
    icon: "MessageSquare",
    deliverables: ["Instant message delivery", "User presence indicators", "Room & channel management", "Offline resilience"],
    active: true
  },
  {
    id: "api-integration",
    title: "REST API Design & Backend Integration",
    description: "Robust, well-documented RESTful APIs built on Node.js/Express with schema validation, rate limiting, and third-party service connections.",
    icon: "Cpu",
    deliverables: ["Structured endpoint architecture", "JWT & OAuth authorization", "Request input validation", "Postman / OpenAPI specs"],
    active: true
  },
  {
    id: "modernization",
    title: "Existing Application Modernization & Refactoring",
    description: "Upgrading legacy JavaScript codebases to modern TypeScript, replacing obsolete build systems with Vite, and migrating legacy styling to Tailwind CSS.",
    icon: "RefreshCw",
    deliverables: ["TypeScript migration", "Vite bundler setup", "Tailwind CSS design tokens", "Zero functionality regression"],
    active: true
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing & Technical Troubleshooting",
    description: "Deep diagnostic investigation to detect and resolve stubborn runtime bugs, memory leaks, race conditions, and UI inconsistencies.",
    icon: "Wrench",
    deliverables: ["Root cause analysis report", "Regression-free code patch", "Verification testing", "Preventative documentation"],
    active: true
  },
  {
    id: "perf-optimization",
    title: "Performance Optimization & Auditing",
    description: "Auditing web applications to enhance Core Web Vitals, minimize bundle sizes, eliminate unnecessary re-renders, and accelerate API latency.",
    icon: "Zap",
    deliverables: ["Lighthouse audit review", "Bundle size reduction", "Database query optimization", "Caching strategies"],
    active: true
  },
  {
    id: "tailwind-ui",
    title: "Responsive UI/UX Implementation with Tailwind CSS",
    description: "Translating mockups or redesigning legacy layouts into pixel-perfect, accessible, and responsive interfaces with seamless light & dark themes.",
    icon: "Palette",
    deliverables: ["Tailwind CSS design system", "Accessible WCAG 2.2 components", "Mobile-first layouts", "Persistent dark/light theme"],
    active: true
  }
];

export const initialExperience: Experience[] = [
  {
    id: "exp-tech-support",
    role: "Technical Support Engineer & Systems Specialist",
    company: "Enterprise Cloud Platforms (Apex)",
    period: "2022 - Present",
    location: "Global Remote",
    description: [
      "Diagnose, troubleshoot, and resolve mission-critical software, networking, database lock contention, and API incidents for enterprise clients across distributed microservices.",
      "Conduct in-depth blameless root cause analysis (RCA) on production anomalies, identifying defect patterns and delivering architectural patches with 99.9% resolution rate.",
      "Collaborate directly with core engineering teams to trace distributed OpenTelemetry spans, optimize slow database queries, and reduce mean-time-to-resolution (MTTR) by 45%."
    ],
    skills: ["Root Cause Analysis", "System Diagnostics", "MongoDB Query Tuning", "API Observability", "Production Reliability"],
    current: true
  }
];

export const initialEducation: Education[] = [
  {
    id: "edu-mscs",
    degree: "Master of Science in Computer Science (M.S. CS)",
    institution: "Accredited University Graduate School of Engineering",
    year: "Completed with Distinction",
    details: "Specialized in Distributed Systems, Advanced Database Architecture, Network Security & Cryptography, Fault-Tolerant Computing, and Algorithms Design. Graduated with Honors."
  },
  {
    id: "edu-bscs",
    degree: "Bachelor of Science in Computer Engineering (B.S.)",
    institution: "University School of Technology & Applied Sciences",
    year: "First Class Honours",
    details: "Foundations in Operating Systems, Compiler Design, Object-Oriented Software Engineering, Data Structures, Relational Database Management Systems, and Web Technologies."
  }
];

export const initialSettings: SiteSettings = {
  siteTitle: "Full-Stack Developer & Software Engineer | Professional Portfolio",
  siteDescription: "Portfolio of a Computer Science Master's graduate and Technical Support Engineer specializing in TypeScript, React, Tailwind CSS, and scalable Node.js architectures.",
  contactEmail: "contact@developer-portfolio.dev",
  seoKeywords: ["Full-Stack Developer", "Software Engineer", "Technical Support Engineer", "TypeScript", "Tailwind CSS", "React", "Node.js", "Freelance Developer"],
  themeDefault: "dark"
};
