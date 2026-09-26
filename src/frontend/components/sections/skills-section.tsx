import { skillsAndLanguages } from "@/backend/data/site";
import { SectionHeading } from "@/frontend/components/section-heading";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-border/60 bg-secondary/20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Languages"
          description="The languages, frameworks, and tools I use, and how I've actually put them to work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillsAndLanguages.map((category) => (
            <Card
              key={category.title}
              className="border-border/70 bg-card/60"
            >
              <CardHeader>
                <CardTitle className="font-mono text-sm font-medium uppercase tracking-wider text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
