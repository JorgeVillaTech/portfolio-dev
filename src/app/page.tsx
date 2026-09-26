import { SiteHeader } from "@/frontend/components/layout/site-header";
import { SiteFooter } from "@/frontend/components/layout/site-footer";
import { HeroSection } from "@/frontend/components/sections/hero-section";
import { ProjectsSection } from "@/frontend/components/sections/projects-section";
import { ExperienceSection } from "@/frontend/components/sections/experience-section";
import { ContactSection } from "@/frontend/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
