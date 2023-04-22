import AboutSection from "<import>/components/AboutSection";
import HeroSection from "<import>/components/HeroSection";
import ProjectsSection from "<import>/components/ProjectsSection";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md: max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
