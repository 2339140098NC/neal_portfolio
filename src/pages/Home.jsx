import {ThemeToggle} from "@/components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/HeroSection";
import {AboutMeSection} from "@/components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Contact } from "lucide-react";
import { Footer} from "../components/Footer";

export default function Home() {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
    {/* Theme toggle*/}
    <ThemeToggle/>
    {/* Background Effects*/}
    <StarBackground/>
    {/* Navbar*/}
    <Navbar/>
    {/* Main content */}
    <main>
      <HeroSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
    {/* Footer */}
    <Footer />
  </div>;
}