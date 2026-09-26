export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  /** URL to the live deployed instance of the project. */
  localUrl: string;
  /** URL to the project's GitHub repository. */
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ev-chargers-reservations",
    title: "EV Chargers Reservations",
    category: "Full Stack · CRUD",
    description:
      "CRUD system for managing and reserving electric vehicle chargers, with real-time availability tracking and an admin dashboard.",
    tech: ["React", "Express", "Node.js", "SQLite"],
    localUrl: "https://ev-charger-system-steel.vercel.app",
    githubUrl: "https://github.com/JorgeVillaTech/ev-charger-system",
    featured: true,
  },
  {
    slug: "ai-financial-risk-agent",
    title: "AI Financial Risk Agent",
    category: "AI · Agents",
    description:
      "AI agent for financial risk management and advisory: analyzes data, generates recommendations, and converses with the user through an LLM-based assistant.",
    tech: ["Next.js", "Python", "OpenAI", "Microsoft Agent Framework"],
    localUrl: "https://ai-management-evaluation-agent-5n3c.vercel.app",
    githubUrl: "https://github.com/JorgeVillaTech/AI-management-evaluation-agent",
    featured: true,
  },
];