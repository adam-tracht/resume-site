// No need for Image import here
import { HeroSection } from "./components/sections/HeroSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ExpertiseSection } from "./components/sections/ExpertiseSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Expertise Areas Section */}
      <ExpertiseSection />

      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
