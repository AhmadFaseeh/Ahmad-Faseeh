export const PERSONAL_INFO = {
  name: "Muhammad Ahmad Faseeh",
  firstName: "Ahmad",
  title: "Software Engineer Python / FastAPI · Docker · Full-Stack",
  role: "Software Engineer & Full-Stack Architect",
  location: "Lahore, Punjab, PK",
  email: "muhammadahmadfaseeh5@gmail.com",
  phone: "0320-6493816",
  resume: "/Muhammad_Ahmad_Fasih.pdf",
  github: "https://github.com/AhmadFaseeh",
  linkedin: "https://linkedin.com/in/muhammadahmadfaseeh",
  bio: "Software Engineer with hands-on experience building scalable backend services in Python (FastAPI), Node.js, and Next.js, and interactive front-ends in React.js. Skilled in containerizing and deploying applications with Docker, designing RESTful & GraphQL APIs, and writing clean, readable, reusable, and well-documented code with strong analytical reasoning for debugging and evaluating architectural trade-offs.",
  stats: [
    { value: "02+", label: "Years Experience", numeric: 2 },
    { value: "12+", label: "Production Projects", numeric: 12 },
    { value: "25+", label: "Technologies Mastered", numeric: 25 },
    { value: "99.9%", label: "Clean Architecture", numeric: 99.9 }
  ],
  systemSpecs: {
    status: "AVAILABLE_FOR_HIRE",
    engine: "Python / FastAPI / Docker / React",
    architecture: "Layered Services / DTOs / Clean Architecture",
    latency: "< 45ms P99 API Latency",
    security: "JWT / OAuth2 / Dockerized Sandbox"
  }
};

export const TECHNICAL_SKILLS = {
  languages: [
    { name: "Python", level: 92, tag: "Primary" },
    { name: "JavaScript (ES6+)", level: 95, tag: "Core" },
    { name: "TypeScript", level: 90, tag: "Strict" },
    { name: "SQL (PostgreSQL, MySQL)", level: 88, tag: "Relational" },
    { name: "PHP", level: 80, tag: "Backend" },
    { name: "HTML5 / CSS3", level: 96, tag: "Markup" },
    { name: "C++", level: 75, tag: "Core Alg" }
  ],
  backend: [
    { name: "Python (FastAPI)", level: 94, tag: "Async Core" },
    { name: "Node.js & Express", level: 92, tag: "REST API" },
    { name: "NestJS", level: 86, tag: "Enterprise" },
    { name: "RESTful & GraphQL APIs", level: 92, tag: "Architecture" },
    { name: "JWT / OAuth Auth", level: 90, tag: "Security" },
    { name: "LangChain & CrewAI", level: 88, tag: "Agentic AI" },
    { name: "RAG & Vector Pipelines", level: 86, tag: "Embeddings" }
  ],
  frontend: [
    { name: "React.js", level: 95, tag: "Interactive" },
    { name: "Next.js", level: 90, tag: "SSR/App Router" },
    { name: "GSAP Animations", level: 92, tag: "Motion" },
    { name: "Three.js / WebGL", level: 85, tag: "3D Graphics" },
    { name: "Tailwind CSS", level: 95, tag: "Styling" },
    { name: "Redux Toolkit", level: 88, tag: "State" },
    { name: "Framer Motion", level: 90, tag: "Micro-UX" }
  ],
  databases: [
    { name: "PostgreSQL", level: 90, tag: "Primary RDBMS" },
    { name: "MySQL", level: 88, tag: "RDBMS" },
    { name: "MongoDB", level: 88, tag: "NoSQL" },
    { name: "Vector Databases", level: 85, tag: "Pinecone/Qdrant" },
    { name: "Firebase", level: 84, tag: "Realtime" },
    { name: "Redis Caching", level: 88, tag: "In-Memory" }
  ],
  cloudDevOps: [
    { name: "Docker & Compose", level: 90, tag: "Containerization" },
    { name: "Containerized Deployments", level: 88, tag: "Production" },
    { name: "Git / GitHub Workflows", level: 94, tag: "VCS / CI" },
    { name: "Vercel & Cloudflare", level: 92, tag: "Edge / CDN" },
    { name: "Redis Caching", level: 88, tag: "Performance" },
    { name: "CI-style Deployment", level: 86, tag: "Automation" }
  ],
  practices: [
    { name: "Clean Architecture", level: 94, tag: "Layered DTOs" },
    { name: "Code Review & Standards", level: 92, tag: "Quality" },
    { name: "Technical Documentation", level: 90, tag: "Specs" },
    { name: "Performance Benchmarking", level: 88, tag: "Metrics" },
    { name: "Debugging & Root-Cause", level: 95, tag: "Diagnostics" },
    { name: "Agile Collaboration", level: 90, tag: "Scrum" }
  ]
};

export const WORK_EXPERIENCE = [
  {
    role: "Software Engineer & Full Stack Developer",
    company: "IT KUMAIL",
    location: "Lahore, Punjab",
    period: "Jul 2025 – Present",
    type: "Full-Time",
    highlights: [
      "Design, develop, and maintain efficient, high-quality, reusable code in Python, TypeScript, and Node.js, applying clean architecture principles (layered services, repositories, DTOs) for long-term maintainability.",
      "Build high-performance RESTful APIs using FastAPI and Express, with JWT/OAuth authentication, complex business logic, and asynchronous workflows across multiple SaaS products.",
      "Developed and integrated FastAPI-based services within the company's CRM system, building data-processing endpoints and connecting CRM backend logic with the broader SaaS ecosystem.",
      "Containerized services with Docker writing Dockerfiles and Docker Compose configurations and deployed to Vercel/Cloudflare, ensuring consistent, reliable environments across development and production.",
      "Benchmark and continuously optimize backend and API response performance through real-time server health monitoring, load testing, and query optimization on PostgreSQL, translating results into concrete engineering improvements.",
      "Evaluate and document trade-offs between competing technical approaches (schema design, caching strategy, concurrency handling), producing clear written rationale for architectural decisions shared with the team.",
      "Integrate automated payment systems (Stripe & PayPal), managing subscription lifecycles, webhooks, retry logic, and secure transaction flows."
    ],
    tech: ["Python", "FastAPI", "Docker", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "PayPal", "Vercel", "Cloudflare"]
  },
  {
    role: "WordPress & Front-End Developer",
    company: "IT KUMAIL",
    location: "Lahore, Punjab",
    period: "Jul 2025 – March 2026",
    type: "Full-Time",
    highlights: [
      "Developed interactive UI components using React.js and GSAP, and integrated an AI-powered chatbot to automate visitor query handling gaining direct exposure to deploying and refining AI-driven product features.",
      "Diagnosed and resolved bugs, security vulnerabilities, and performance issues through systematic root-cause analysis across live web applications, including query optimization and caching (Redis).",
      "Customized back-end logic and integrated third-party APIs to extend application functionality, ensuring readable and maintainable code across the stack.",
      "Optimized large-scale applications for Core Web Vitals, achieving high Lighthouse scores through advanced caching, lazy loading, and render-blocking resolution."
    ],
    tech: ["React.js", "GSAP", "PHP", "WordPress", "Redis", "Core Web Vitals", "AI Chatbot", "REST APIs"]
  },
  {
    role: "Freelance Web Developer",
    company: "Upwork",
    location: "Remote",
    period: "Feb 2025 – Jul 2025",
    type: "Freelance",
    highlights: [
      "Delivered multiple client projects spanning JavaScript/TypeScript web application development, RESTful API integrations, and custom React front-ends for international clients.",
      "Implemented responsive layouts, state management architectures, and high-converting checkout and lead generation workflows."
    ],
    tech: ["React.js", "JavaScript", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS", "Next.js"]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "PMAS Arid Agriculture University",
    location: "Lahore, Punjab",
    period: "Oct 2023 – Present",
    status: "In Progress",
    description: "Focusing on Software Architecture, Distributed Systems, Data Structures, Relational Database Engineering, and Modern Web Engineering paradigms."
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Superior College",
    location: "Piplan, Punjab",
    period: "Sep 2021 – Jun 2023",
    status: "Completed",
    description: "Built fundamental foundations in Computer Science, Object-Oriented Programming, C++, Boolean Logic, and Mathematical Problem Solving."
  }
];

export const PROJECTS = [
  {
    id: "cerahi-crm",
    title: "Cerahi Industries CRM",
    subtitle: "Enterprise CRM Dashboard & Business Operations Platform",
    category: "Full-Stack CRM",
    featured: true,
    tech: ["React.js", "FastAPI", "Python", "PostgreSQL", "Docker", "REST API", "TypeScript", "Tailwind CSS"],
    description: "Developed and integrated a full-featured enterprise CRM system for Cerahi Industries, featuring real-time order management, invoice tracking, lead management, inventory control, accounting modules, and an interactive analytics dashboard with live business metrics.",
    metrics: ["Real-time order tracking", "Multi-module ERP integration", "294+ invoices managed"],
    image: "/cerahi_crm.png",
    demoLink: "",
    githubLink: "https://github.com/AhmadIntern"
  },
  {
    id: "mausam-x",
    title: "MausamX Live 3D Weather",
    subtitle: "Real-Time 3D Weather & Live Doppler Radar Intelligence",
    category: "Full-Stack 3D Web App",
    featured: true,
    tech: ["React.js", "Three.js", "Vite", "Tailwind CSS", "REST API", "Doppler Radar", "OpenWeather"],
    description: "Engineered a real-time 3D weather intelligence platform featuring live interactive Doppler radar, air quality indexing (AQI), 24-hour / 7-day predictive forecasts, astronomical sun/moon cycles, and global multi-city search with fluid animations.",
    metrics: ["Live Doppler radar & maps", "Real-time 3D Three.js weather", "Global multi-city AQI metrics"],
    image: "/mausam_x_v2.png",
    demoLink: "https://mausam-x.vercel.app/",
    githubLink: "https://github.com/AhmadFaseeh/MausamX"
  },
  {
    id: "cerahi-dentistry",
    title: "Cerahi Dentistry",
    subtitle: "Precision Medical & Dental Catalog Platform",
    category: "Front-end Web Application",
    featured: false,
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST API", "Tailwind CSS", "Docker"],
    description: "Built a precision dental instruments catalog and business platform, listing and showcasing surgical and dental tools with a robust PostgreSQL backend, clean REST API layer, and high-performance server-side rendering.",
    metrics: ["PostgreSQL indexing", "Fast SSR catalogue", "Production Docker container"],
    image: "/cerahi-dentistry.jpeg",
    demoLink: "https://cerahidentistry.com/",
    githubLink: "https://github.com/AhmadIntern"
  },
  {
    id: "cerahi-surgical",
    title: "Cerahi Surgical",
    subtitle: "Enterprise Surgical Instruments Manufacturer Catalog",
    category: "Next.js & Cloud Analytics",
    featured: false,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Redux Toolkit", "Recharts", "GSAP"],
    description: "Built a high-end, responsive online catalog and business platform for a premium surgical instruments manufacturer, featuring advanced fuzzy search, recharts-driven analytics, and Redux Toolkit state management with fluid micro-interactions.",
    metrics: ["1000+ SKU inventory", "Interactive analytics suite", "GSAP fluid micro-interactions"],
    image: "/cerahi_surgical.png",
    demoLink: "https://cerahi.com/",
    githubLink: "https://github.com/AhmadIntern"
  },
  {
    id: "tothewebpro",
    title: "To The Web Pro",
    subtitle: "SEO Analysis Suite & Web Developer Tools Engine",
    category: "Full-Stack Web Utilities",
    featured: false,
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "SEO Suite", "GSAP", "Framer Motion"],
    description: "A comprehensive SEO utilities and web developer tools platform featuring real-time meta tag checkers, speed test tools, lighthouse diagnostic aids, and custom developer workflow automations with an API-integrated Node.js/MongoDB backend.",
    metrics: ["Core Web Vitals scoring", "Live Meta analyzer", "Instant API diagnostics"],
    image: "/tothewebpro.png",
    demoLink: "https://tothewebpro.com/",
    githubLink: "https://github.com/AhmadFaseeh"
  },
  {
    id: "cerahi-tsg",
    title: "Cerahi TSG",
    subtitle: "Sportswear & Apparel Dynamic E-Commerce Showcase",
    category: "E-Commerce",
    featured: false,
    tech: ["React.js", "Tailwind CSS", "Stripe", "Redux Toolkit", "GSAP", "Framer Motion"],
    description: "Developed a dynamic sportswear and apparel e-commerce showcase platform with Stripe-powered cart workflows, webhook verification, fluid GSAP/Framer Motion animations, and interactive brand storytelling.",
    metrics: ["Stripe webhook checkout", "Stateful cart architecture", "Fluid 60fps animations"],
    image: "/cerahi_tsg.png",
    demoLink: "https://cerahitsg.com/",
    githubLink: "https://github.com/AhmadFaseeh"
  },
  {
    id: "gofly-travel",
    title: "GoFly Travel",
    subtitle: "All-in-One Travel Booking & Discovery Platform",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "ELEMENTOR", "PHP", "MySQL", "Stripe", "REST API", "SEO", "Custom Theme", "WooCommerce"],
    description: "Developed a full-featured travel booking platform enabling users to search and book Tours, Flights, and Hotels with destination discovery, dynamic package pricing, and a clean mobile-first UI showcasing global destinations.",
    metrics: ["Multi-category booking engine", "Dynamic tour packages", "Mobile-first responsive UI"],
    image: "/gofly_travel.png",
    demoLink: "https://goflytravel.com/",
  },
  {
    id: "digital-marketing-emirates",
    title: "Digital Marketing Emirates",
    subtitle: "Top UAE Digital Marketing Agency Platform",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "ELEMENTOR", "PHP", "MySQL", "SEO", "Custom Theme", "REST API"],
    description: "Built a professional digital marketing agency website for the UAE market, featuring service showcases (SEO, PPC, Social Media), city-based landing pages, a portfolio section, and conversion-optimized lead generation workflows with high Lighthouse scores.",
    metrics: ["Multi-city landing pages", "Conversion-optimized flows", "95+ Lighthouse score"],
    image: "/digital_marketing.jpg",
    demoLink: "https://digitalmarketingemirates.com/",
  },
  {
    id: "prime-swift-uae",
    title: "Prime Swift UAE",
    subtitle: "Insulation Contractors UAE — Lead Generation & Services Platform",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "SEO", "Custom Theme", "Contact Form 7", "Core Web Vitals"],
    description: "Built a professional lead-generation website for Prime Swift Insulation Contracting LLC in Dubai UAE, featuring service showcases, an instant quote form, SEO-optimized service pages, and a mobile-first layout designed to convert B2B and B2C insulation clients.",
    metrics: ["Lead-gen quote form", "SEO-optimized service pages", "Mobile-first UAE market"],
    image: "/prime_swift_uae.png",
    demoLink: "https://primeswiftuae.com/",
    githubLink: ""
  },
  {
    id: "cherry-blossom-festival",
    title: "National Cherry Blossom Festival",
    subtitle: "Washington DC's Longest-Running Cultural Festival Platform",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "SEO", "Custom Theme", "WooCommerce", "Events Manager"],
    description: "Developed and maintained the official website for Washington DC's iconic National Cherry Blossom Festival, featuring event listings, Bloom Watch, community programs, sponsor showcases, a store, and multi-page visitor planning guides for an international audience.",
    metrics: ["Multi-page event platform", "Bloom Watch integration", "International audience reach"],
    image: "/cherry_blossom.png",
    demoLink: "https://nationalcherryblossomfestival.org/",
    githubLink: ""
  },
  {
    id: "luxury-trips",
    title: "The Luxury Trips",
    subtitle: "All-in-One Travel Booking & Tour Discovery Platform",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "WooCommerce", "REST API", "SEO", "Custom Theme"],
    description: "Developed a comprehensive travel booking platform featuring Tours, Hotels, Visa, and Experience categories with destination search, custom itinerary builder, WhatsApp support integration, and a mobile-optimized UI for global travel agencies.",
    metrics: ["Multi-category booking engine", "Custom itinerary builder", "WhatsApp CTA integration"],
    image: "/luxury_trips.png",
    demoLink: "https://theluxurytrips.co.uk/",
    githubLink: ""
  },
  {
    id: "good-flights",
    title: "Good Flights UK",
    subtitle: "Cheap Flights Booking Platform — UK Aviation Market",
    category: "WordPress",
    featured: false,
    tech: ["WordPress", "Elementor", "PHP", "MySQL", "SEO", "Custom Theme", "Flights API", "Core Web Vitals"],
    description: "Built a UK-focused flight booking platform for Good Flights, featuring One Way and Return flight search, holiday packages, transparent pricing, and a trust-building design with 5k+ real traveler reviews — optimized for high conversion in the competitive UK aviation market.",
    metrics: ["One-way & return search", "5k+ traveler trust signals", "High-conversion UK market"],
    image: "/good_flights.png",
    demoLink: "https://goodflights.co.uk/",
    githubLink: ""
  }
];

export const SERVICES = [
  {
    num: "01",
    title: "Scalable Backend Architecture",
    tagline: "Python (FastAPI), Node.js & NestJS",
    description: "Engineering resilient, high-throughput microservices and RESTful/GraphQL APIs. Clean architecture with layered services, repository patterns, DTO validations, and sub-50ms query optimization.",
    deliverables: ["FastAPI & Express RESTful APIs", "JWT / OAuth2 Secure Authentication", "Database Architecture & Query Profiling", "Stripe / PayPal Payment Workflows"]
  },
  {
    num: "02",
    title: "AI Engineering & Agentic Workflows",
    tagline: "LangChain, CrewAI, RAG & LLMs",
    description: "Building autonomous agentic pipelines, RAG systems over proprietary knowledge bases, vector search retrieval, and custom multi-agent routing using Gemini, OpenAI, and Flowise.",
    deliverables: ["Autonomous Multi-Agent Routing", "RAG & VectorDB Search Engines", "n8n & Flowise Enterprise Automations", "Intelligent Customer Chatbots"]
  },
  {
    num: "03",
    title: "High-Performance Web & Full-Stack Apps",
    tagline: "React.js, Next.js & TypeScript ",
    description: "Crafting hyper-fluid, responsive web applications with state-of-the-art UX, Redux state management, 3D WebGL Three.js elements, and buttery smooth GSAP animations.",
    deliverables: ["Next.js SSR / App Router Platforms", "Interactive 3D / WebGL Three.js Experiences", "GSAP Smooth Motion & Micro-interactions", "95+ Lighthouse Score Optimization"]
  },
  {
    num: "04",
    title: "Dockerization & Cloud DevOps",
    tagline: "Docker, Vercel, Cloudflare & Redis",
    description: "Containerizing services with multi-stage Dockerfiles and Docker Compose. Configuring reliable deployment pipelines on Vercel and Cloudflare, with Redis in-memory caching for peak load handling.",
    deliverables: ["Docker Compose Multi-Container Stacks", "Redis Query Caching & Rate Limiting", "CI/CD Pipeline Configurations", "Vercel & Cloudflare Edge Deployment"]
  }
];
export const TECH_STACK = [
  "Python", "FastAPI", "Docker", "Node.js", "TypeScript", "React", "Next.js", "PostgreSQL",
  "MongoDB", "Redis", "LangChain", "CrewAI", "Gemini API", "OpenAI", "RAG", "Vector DBs",
  "n8n", "GSAP", "Three.js", "Tailwind CSS", "Stripe", "GraphQL", "NestJS", "Git / GitHub"
];
export const RECOGNITIONS = [
  {
    title: "Outstanding Full-Stack & Backend Performance",
    issuer: "IT KUMAIL Engineering Team",
    date: "2025 – 2026",
    badge: "VERIFIED EXCELLENCE",
    note: "Recognized for architecting resilient FastAPI backend services and integrating AI automated agent pipelines."
  },
  {
    title: "Agentic AI & Workflow Automation Specialist",
    issuer: "Autonomous Systems Project",
    date: "2026",
    badge: "INNOVATION AWARD",
    note: "Developed multi-agent routing engines and vector RAG pipelines with LlamaIndex and LangChain."
  },
  {
    title: "Top Rated Freelance Delivery",
    issuer: "Upwork International Clients",
    date: "2025",
    badge: "CLIENT APPRECIATION",
    note: "Consistently delivered clean, responsive React & Node.js web applications with 100% positive feedback."
  }
];