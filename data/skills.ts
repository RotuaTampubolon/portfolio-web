export interface SkillCategory {
  name: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "code",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL", "HTML"],
  },
  {
    name: "Frameworks & Libraries",
    icon: "squares",
    skills: ["Node.js", "Express.js", "Prisma ORM", "JDBC", "Maven"],
  },
  {
    name: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "ERD Design", "Schema Normalization"],
  },
  {
    name: "Testing & QA",
    icon: "shield",
    skills: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "Newman",
      "GitHub Actions",
      "Test Case Design",
      "Bug Reporting",
      "Regression Testing",
    ],
  },
  {
    name: "System Analysis & Design",
    icon: "layout",
    skills: [
      "Requirements Elicitation",
      "SRS/SyRS",
      "Use Case Narratives",
      "DFD",
      "BPMN 2.0",
      "Sequence Diagrams",
      "Data Dictionary",
    ],
  },
  {
    name: "Design & Collaboration",
    icon: "pencil",
    skills: ["Figma", "Draw.io", "Bizagi Modeler", "Git", "GitHub", "Notion"],
  },
]
