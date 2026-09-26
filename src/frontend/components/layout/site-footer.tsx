import { siteConfig } from "@/backend/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="font-mono">
          Built with Next.js, Tailwind &amp; shadcn/ui
        </p>
      </div>
    </footer>
  );
}
