import { projects } from "@/backend/data/projects";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "@/frontend/components/section-heading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-border/60 bg-secondary/20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="A selection of projects that reflect my focus on full stack applications and applied artificial intelligence."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
