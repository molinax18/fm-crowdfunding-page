import Header from "./components/Header";
import HeroBackground from "./components/HeroBackground";
import ProjectHero from "./components/ProjectHero";

export default function App() {
  return (
    <div className="grid grid-rows-[var(--hero-image)_1fr] w-[90%] mx-auto max-w-300">
      <Header className="self-start" />

      <HeroBackground />

      <main className="bg-red-200">
        <ProjectHero />
      </main>
    </div>
  );
}
