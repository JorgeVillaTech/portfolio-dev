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

export type SkillItem = {
  name: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillsAndLanguages: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      {
        name: "HTML & CSS",
        description:
          "Semantic markup and responsive styling behind every interface I've built, from static pages to the layouts underneath my React and Next.js apps.",
      },
      {
        name: "JavaScript & TypeScript",
        description:
          "My day-to-day language on both ends of the stack — typed components in React, typed APIs in Express, fewer runtime surprises.",
      },
      {
        name: "Python",
        description:
          "Used for backend logic and AI integrations, including the data handling and LLM orchestration behind the AI Financial Risk Agent.",
      },
      {
        name: "SQL",
        description:
          "Designed and queried relational schemas for CRUD systems, such as the reservation and availability data in the EV Chargers Reservations app.",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "React",
        description:
          "Built interactive, real-time interfaces — including the admin dashboard and live availability tracking for EV Chargers Reservations.",
      },
      {
        name: "Next.js",
        description:
          "Used for full stack apps that need server-side rendering and API routes, such as this portfolio and the AI Financial Risk Agent.",
      },
      {
        name: "Express / Node.js",
        description:
          "Built the REST API and business logic behind the EV Chargers Reservations backend, handling reservations and admin operations.",
      },
      {
        name: "FastAPI",
        description:
          "Used to expose Python-based AI and data services as APIs consumed by frontend clients.",
      },
    ],
  },
  {
    title: "AI & Agents",
    items: [
      {
        name: "OpenAI / LLMs",
        description:
          "Integrated LLMs to power conversational agents, like the assistant in the AI Financial Risk Agent that analyzes data and generates recommendations.",
      },
      {
        name: "Microsoft Agent Framework",
        description:
          "Used to structure and orchestrate the reasoning and tool-use flow of the AI Financial Risk Agent.",
      },
      {
        name: "CopilotKit + AG-UI",
        description:
          "Used to build agent-facing UI components that connect frontend interfaces directly to AI agent backends.",
      },
    ],
  },
  {
    title: "Tools & Infrastructure",
    items: [
      {
        name: "Tailwind CSS",
        description:
          "Primary styling approach for recent projects, including this portfolio — utility-first classes for consistent, responsive design.",
      },
      {
        name: "Bootstrap",
        description:
          "Used in earlier projects for quick, component-based layouts before moving to Tailwind.",
      },
      {
        name: "Vite",
        description:
          "Build tool and dev server for fast local development on React projects.",
      },
      {
        name: "MySQL & SQLite",
        description:
          "Relational databases behind CRUD systems and admin dashboards, such as EV Chargers Reservations.",
      },
      {
        name: "AWS",
        description:
          "Cloud fundamentals used for deploying and hosting backend services.",
      },
    ],
  },
];
