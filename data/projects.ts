export interface Project {
  id: number
  title: string
  subtitle: string
  category: string
  status: "Completed" | "In Progress" | "Academic"
  team: string
  year: string
  featured: boolean
  description: string
  highlights: string[]
  tech: string[]
  repoUrl: string | null
  docUrl: string | null
  demo: string | null
}

export const isPlaceholder = (url: string | null): boolean =>
  url !== null && url.startsWith("{{") && url.endsWith("}}")

export const isLiveUrl = (url: string | null): boolean =>
  url !== null && !isPlaceholder(url)

export const categories = [
  "All",
  "Software Dev",
  "System Analysis",
  "QA",
  "UI/UX",
  "Database",
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Game Inventory System",
    subtitle: "Java OOP CLI Application",
    category: "Software Dev",
    status: "Completed",
    team: "Team of 4",
    year: "2025",
    featured: true,
    description:
      "CLI-based RPG Inventory Management System built in Java, applying multi-level inheritance, design patterns, and JDBC with PostgreSQL across a 4-person team.",
    highlights: [
      "15+ classes with multi-level inheritance (Item \u2192 Equipment \u2192 Weapon \u2192 MeleeWeapon)",
      "Data Mapper pattern separating persistence from business logic",
      "Singleton + Factory design patterns with custom exception handling",
      "Java Collection Framework: HashMap, PriorityQueue, Stack, Set",
      "Git feature branching \u2014 each member owned one full feature slice",
    ],
    tech: ["Java 17", "PostgreSQL", "JDBC", "Maven", "Git"],
    repoUrl: "https://github.com/RotuaTampubolon/game-inventory",
    docUrl: null,
    demo: null,
  },
  {
    id: 2,
    title: "Studify",
    subtitle: "Student Productivity REST API",
    category: "Software Dev",
    status: "Completed",
    team: "Individual",
    year: "2025",
    featured: true,
    description:
      "Fullstack REST API with layered architecture, JWT authentication, bcrypt password hashing, and PostgreSQL managed via Prisma ORM.",
    highlights: [
      "Layered architecture: routes \u2192 controllers \u2192 services \u2192 database",
      "JWT auth with bcrypt (12 salt rounds) and ownership-based authorization",
      "Full Task CRUD with status tracking (TODO / IN_PROGRESS / DONE)",
      "Priority levels and status filtering with referential integrity",
      "Cascade deletion between User and Task entities",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT", "bcrypt"],
    repoUrl: "https://github.com/RotuaTampubolon/studify",
    docUrl: null,
    demo: null,
  },
  {
    id: 3,
    title: "MindSpend",
    subtitle: "Behavioral Finance Mobile App",
    category: "Software Dev",
    status: "Completed",
    team: "Individual",
    year: "2025\u20132026",
    featured: false,
    description:
      "Full-stack behavioral finance app delivering real-time spending insights and anomaly-based nudges. Deployed on Railway with automated migrations.",
    highlights: [
      "Custom insight engine: detects anomalies via 7-day rolling average comparison",
      "Categorized behavioral nudges with severity levels",
      "Deployed on Railway with automated migration on startup",
      "UUID primary keys and enum-constrained categories for data integrity",
    ],
    tech: ["Node.js", "PostgreSQL", "Prisma ORM", "JWT", "Railway"],
    repoUrl: "https://github.com/RotuaTampubolon/mindspend-backend",
    docUrl: null,
    demo: null,
  },
  {
    id: 4,
    title: "BEM IT Del Portal",
    subtitle: "System Requirements Specification",
    category: "System Analysis",
    status: "Completed",
    team: "Team of 4",
    year: "2026",
    featured: false,
    description:
      "Led requirements elicitation and authored a complete SyRS for a multi-module campus web portal covering 4 integrated operational modules.",
    highlights: [
      "4 modules: equipment borrowing, facility complaints, lost & found, student aspirations",
      "Full docs: Use Case Diagrams, Narratives (UC01\u2013UC06), Sequence Diagrams, Class Diagram, DFD L1 & L2, ERD, Data Dictionary",
      "BPMN 2.0 As-Is and To-Be process modeling",
      "5 actor roles with CIS-based authentication integration",
      "Project lead role",
    ],
    tech: ["Draw.io", "Bizagi Modeler", "BPMN 2.0", "Microsoft Word"],
    repoUrl: null,
    docUrl: "https://drive.google.com/file/d/1i3sFcG3OPzLqRSBVoqtM2Js_uCaL4spG/view?usp=sharing",
    demo: null,
  },
  {
    id: 5,
    title: "IT Del Admissions BPM Redesign",
    subtitle: "Business Process Improvement",
    category: "System Analysis",
    status: "Completed",
    team: "Individual",
    year: "2025",
    featured: false,
    description:
      "End-to-end business process analysis and redesign of a 29-step student admission workflow targeting a 21-day cycle time reduction.",
    highlights: [
      "As-Is analysis: Value-Added & Waste Analysis across 29 process steps",
      "Root cause analysis: Fishbone Diagram + Pareto Analysis + Queuing Analysis",
      "To-Be model: automation, task parallelism, step elimination",
      "Measurable targets across Time, Cost, Quality, and Flexibility dimensions",
    ],
    tech: ["Bizagi Modeler", "BPMN 2.0", "Fishbone Diagram", "Pareto Analysis"],
    repoUrl: null,
    docUrl: "https://drive.google.com/file/d/1r-D8z8E1SNYK3SqtA4-a_kJ6IZJtE0Go/view?usp=sharing",
    demo: null,
  },
  {
    id: 6,
    title: "REST API Testing",
    subtitle: "Automated QA Pipeline",
    category: "QA",
    status: "Completed",
    team: "Individual",
    year: "2026",
    featured: false,
    description:
      "QA portfolio project with structured test coverage and an automated CI/CD regression pipeline using Newman CLI and GitHub Actions.",
    highlights: [
      "10 test cases covering GET, POST, PUT, DELETE operations",
      "3 documented defects with severity classification and reproduction steps",
      "CI/CD pipeline: automated test execution on every commit",
      "Full QA docs: Test Plan, Test Cases, Bug Reports, Test Summary Report",
    ],
    tech: ["Postman", "Newman CLI", "GitHub Actions", "Git"],
    repoUrl: "https://github.com/RotuaTampubolon/reqres-api-testing",
    docUrl: null,
    demo: null,
  },
  {
    id: 7,
    title: "Manual Testing \u2014 Login Feature",
    subtitle: "Authentication QA Project",
    category: "QA",
    status: "Completed",
    team: "Individual",
    year: "2025",
    featured: false,
    description:
      "Manual QA project with 20 test cases covering positive, negative, boundary value, security, and accessibility scenarios.",
    highlights: [
      "20 test cases \u2014 100% planned execution coverage",
      "6 defects found including 2 high-severity authentication vulnerabilities",
      "Boundary Value Analysis + Equivalence Partitioning applied",
      "Industry-standard defect documentation with severity/priority classification",
    ],
    tech: ["Manual Testing", "Test Case Design", "Bug Reporting"],
    repoUrl: "https://github.com/RotuaTampubolon/saucedemo-qa",
    docUrl: null,
    demo: null,
  },
  {
    id: 8,
    title: "The Kit Co.",
    subtitle: "Mountaineering Rental Platform",
    category: "UI/UX",
    status: "Completed",
    team: "Team",
    year: "2025",
    featured: false,
    description:
      "High-fidelity Figma prototype for a 24/7 online mountaineering gear rental platform with a defined operational model and full user journey.",
    highlights: [
      "End-to-end prototype: registration \u2192 gear browsing \u2192 booking \u2192 digital checkout",
      "Operational model: physical shop as pickup point only, 100% digital transactions",
      "Requirements analysis to optimize booking workflow and prevent usability bugs",
    ],
    tech: ["Figma", "User Journey Mapping", "Requirements Analysis"],
    repoUrl: "https://github.com/RotuaTampubolon/TheKitCo.",
    docUrl: "https://drive.google.com/file/d/1DqFgS4SfdImOyoq0D4Atq504ert75bgg/view?usp=sharing",
    demo: null,
  },
  {
    id: 9,
    title: "Student & Dormitory Database",
    subtitle: "Relational Database Design",
    category: "Database",
    status: "Completed",
    team: "Individual",
    year: "2025",
    featured: false,   
    description:
      "Normalized relational database covering student biodata, dormitory assignments, and activity tracking with ERD and validated SQL reporting.",
    highlights: [
      "5+ normalized tables with referential integrity constraints",
      "15+ SQL queries: retrieval, joins, aggregation, and automated reporting",
      "ERD modeling with cascade deletion and foreign key constraints",
    ],
    tech: ["MySQL", "ERD Design", "SQL"],
    repoUrl: null,
    docUrl: "https://drive.google.com/file/d/1X5F9Z8E1SNYK3SqtA4-a_kJ6IZJtE0Go/view?usp=sharing",
    demo: null,
  },
  {
    id: 10,
    title: "Student Grade Management",
    subtitle: "C CLI Application",
    category: "Software Dev",
    status: "Completed",
    team: "Individual",
    year: "2025",
    featured: false,
    description:
      "C-based CLI application managing 50+ student records with file persistence, grade classification (A\u2013F), and edge case validation.",
    highlights: [
      "Manages 50+ student records with full file I/O persistence",
      "Grade classification A\u2013F with edge case handling (null, out-of-range, duplicates)",
      "Manual functional testing \u2014 3 logic errors identified and resolved",
    ],
    tech: ["C", "File I/O", "Modular Programming"],
    repoUrl: "https://github.com/RotuaTampubolon/student-grade-management",
    docUrl: null,
    demo: null,
  },
]
