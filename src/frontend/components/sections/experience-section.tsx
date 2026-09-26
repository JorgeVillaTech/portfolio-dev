import { Quote } from "lucide-react";
import { stats } from "@/backend/data/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-border/60 bg-secondary/20 py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/70 bg-card/60 p-5 text-center transition-colors hover:border-primary/40 sm:p-6"
            >
              <p className="font-mono text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <figure className="flex flex-col justify-center rounded-xl border border-border/70 bg-card/60 p-8">
          <Quote className="size-6 text-primary/70" />
          <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
            Good software doesn&apos;t just work: it&apos;s understood, it
            scales, and it&apos;s maintained over time.
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
