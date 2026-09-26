export const siteConfig = {
  name: "Jorge Villalobos",
  initials: "JV",
  role: "Software Engineer",
  tagline: "AI FullStack Developer",
  summary:
    "I build AI-powered full stack applications: clean interfaces, robust backends, and intelligent agents that solve real problems.",
  location: "Costa Rica",
  availability: "Available for freelance projects and full-time opportunities",
  email: "jorgevihe@gmail.com",
  social: {
    github: "https://github.com/JorgeVillaTech",
    linkedin: "https://www.linkedin.com/in/jorge-villalobos-herrera-87b28a126/",
  },
} as const;

export type Skill = {
  name: string;
  level: number; // 0 - 100
};

export const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "CopilotKit + AG-UI", level: 75 },
    ],
  },
  {
    title: "AI & Cloud",
    skills: [
      { name: "LLMs & AI Systems (OpenAI)", level: 88 },
      { name: "Microsoft Agent Framework", level: 78 },
      { name: "AWS (Cloud Fundamentals)", level: 70 },
      { name: "MySQL & SQLite", level: 85 },
    ],
  },
];

export const stats = [
  { label: "Projects completed", value: "10+" },
  { label: "Stacks mastered", value: "5+" },
  { label: "AI agents built", value: "2+" },
];
