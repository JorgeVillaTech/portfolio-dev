import { ArrowRight, FolderGit2, Mail } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/frontend/components/icons";
import { siteConfig } from "@/backend/data/site";

const SOCIAL_LINKS = [
  { href: siteConfig.social.github, label: "GitHub", icon: GithubIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Decorative background: grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--border)_60%,transparent)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] -z-10 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {siteConfig.availability}
          </div>

          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {siteConfig.role} · {siteConfig.tagline}
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="group"
              render={
                <a href="#projects">
                  <FolderGit2 className="size-4" />
                  View projects
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              render={<a href="#contact">Contact</a>}
            />
          </div>

          <div className="mt-10 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="group flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_0_1px_var(--primary),0_8px_20px_-8px_var(--primary)] active:translate-y-0"
              >
                <Icon className="size-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/60 px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-primary/50" />
              <span className="size-2.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                profile.json
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
              <code>
                <span className="text-primary">{"{"}</span>{"\n"}
                {"  "}
                <span className="text-foreground">&quot;name&quot;</span>:{" "}
                <span className="text-primary">
                  &quot;{siteConfig.name}&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-foreground">&quot;role&quot;</span>:{" "}
                <span className="text-primary">
                  &quot;{siteConfig.role}&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-foreground">&quot;focus&quot;</span>:{" "}
                <span className="text-primary">&quot;AI · FullStack&quot;</span>
                ,{"\n"}
                {"  "}
                <span className="text-foreground">&quot;stack&quot;</span>: [
                {"\n"}
                {"    "}
                <span className="text-primary">&quot;React&quot;</span>,{" "}
                <span className="text-primary">&quot;Next.js&quot;</span>,
                {"\n"}
                {"    "}
                <span className="text-primary">&quot;Python&quot;</span>,{" "}
                <span className="text-primary">&quot;FastAPI&quot;</span>,
                {"\n"}
                {"    "}
                <span className="text-primary">&quot;LLMs&quot;</span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}
                <span className="text-foreground">
                  &quot;location&quot;
                </span>
                :{" "}
                <span className="text-primary">
                  &quot;{siteConfig.location}&quot;
                </span>
                {"\n"}
                <span className="text-primary">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
