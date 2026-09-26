import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/frontend/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import { Button } from "@/frontend/components/ui/button";
import type { Project } from "@/backend/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_0_1px_var(--primary),0_20px_45px_-20px_var(--primary)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <CardHeader>
        <span className="w-fit font-mono text-xs font-medium uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-pretty leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-end gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-border/70 font-mono text-[11px] font-normal text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2.5">
        <Button
          size="sm"
          className="flex-1 min-w-38"
          render={
            <a href={project.localUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              Open project
            </a>
          }
        />
        <Button
          size="sm"
          variant="outline"
          className="flex-1 min-w-38"
          render={
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              Open on GitHub
            </a>
          }
        />
      </CardFooter>
    </Card>
  );
}
