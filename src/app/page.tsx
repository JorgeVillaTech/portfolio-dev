import { SiteHeader } from "@/frontend/components/layout/site-header";
import { SiteFooter } from "@/frontend/components/layout/site-footer";
import { HeroSection } from "@/frontend/components/sections/hero-section";
import { ProjectsSection } from "@/frontend/components/sections/projects-section";
import { SkillsSection } from "@/frontend/components/sections/skills-section";
import { ContactSection } from "@/frontend/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
