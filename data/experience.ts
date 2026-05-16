export interface ExperienceItem {
  period: string
  role: string
  org: string
  type: "Organization" | "Education"
  gpa?: string
  description: string
  isLatest: boolean
}

export const experience: ExperienceItem[] = [
  {
    period: "January 2026 \u2013 Present",
    role: "Education Division Member",
    org: "HIMSI \u2014 Information Systems Student Association, Institut Teknologi Del",
    type: "Organization",
    description:
      "Coordinated educational programs and workshops for IS students. Developed planning, communication, and project coordination skills through cross-functional collaboration in a structured student body.",
    isLatest: true,
  },
  {
    period: "2024 \u2013 Present",
    role: "Bachelor of Information Systems",
    org: "Institut Teknologi Del, Sitoluama",
    type: "Education",
    gpa: "3.45 / 4.00",
    description:
      "Coursework spanning Systems Analysis & Design, OOP, Database Systems, Business Process Management, UI/UX Design, and Procedural Programming.",
    isLatest: false,
  },
]
