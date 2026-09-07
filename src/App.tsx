import Header from "./components/Header";
import HeroBackground from "./components/HeroBackground";
import ProjectHero from "./components/ProjectHero";

export default function App() {
  return (
    <div className="grid grid-rows-[var(--hero-image)_1fr] w-[90%] mx-auto max-w-300">
      <Header className="self-start" />

      <HeroBackground />

      <main className="grid grid-cols-[minmax(min-content,var(--card-max-size))] mx-auto">
        <ProjectHero className="-mt-20" />
      </main>
    </div>
  );
}
