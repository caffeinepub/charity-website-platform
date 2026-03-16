import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DownloadButton from "./components/DownloadButton";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import GetInvolvedSection from "./components/GetInvolvedSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection onScrollTo={scrollToSection} />

        <FeaturedProjects onScrollTo={scrollToSection} />

        <AboutSection />

        <ProjectsSection onScrollTo={scrollToSection} />

        <GetInvolvedSection />

        <ContactSection />
      </main>

      <Footer />

      <DownloadButton />
    </div>
  );
}
