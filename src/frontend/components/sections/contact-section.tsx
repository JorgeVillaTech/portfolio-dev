import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/frontend/components/icons";
import { siteConfig } from "@/backend/data/site";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "Text me",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "View profile",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "View profile",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.availability}. If you have a project in mind or
              want to talk about AI and full stack development, reach out.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {siteConfig.location}
            </div>
          </div>

          <div
            aria-hidden
            className="hidden w-px bg-border/70 lg:block"
          />

          <div className="grid gap-3">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/60 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_var(--primary)] active:translate-y-0"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="size-4.5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    <span className="block text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
