import Header from "./components/Header";
import HeroBackground from "./components/HeroBackground";
import ProjectAbout from "./components/ProjectAbout";
import ProjectHero from "./components/ProjectHero";
import ProjectStats from "./components/ProjectStats";

export default function App() {
  return (
    <div className="grid grid-rows-[var(--hero-image)_1fr] w-[90%] mx-auto max-w-300">
      <Header className="self-start" />

      <HeroBackground />

      <main className="grid grid-cols-[minmax(min-content,var(--card-max-size))] gap-y-8 mx-auto pb-16">
        <ProjectHero className="-mt-20" />
        <ProjectStats />
        <ProjectAbout />
      </main>
    </div>
  );
}
