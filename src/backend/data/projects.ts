export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  /** URL to the instance running on a local server (adjust the port per project). */
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
    tech: ["React", "FastAPI", "Python", "SQL"],
    localUrl: "http://localhost:3001",
    githubUrl: "https://github.com/your-username/ev-chargers-reservations",
    featured: true,
  },
  {
    slug: "ai-financial-risk-agent",
    title: "AI Financial Risk Agent",
    category: "AI · Agents",
    description:
      "AI agent for financial risk management and advisory: analyzes data, generates recommendations, and converses with the user through an LLM-based assistant.",
    tech: ["Next.js", "Python", "OpenAI", "Microsoft Agent Framework"],
    localUrl: "http://localhost:3002",
    githubUrl: "https://github.com/your-username/ai-financial-risk-agent",
    featured: true,
  },
];
