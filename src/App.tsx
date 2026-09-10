import { CrowdfundProvider } from "./context/crowdfundContext";
import Header from "./components/Header";
import HeroBackground from "./components/HeroBackground";
import ProjectAbout from "./components/ProjectAbout";
import ProjectHero from "./components/ProjectHero";
import ProjectStats from "./components/ProjectStats";

export default function App() {
  return (
    <div className="grid grid-rows-[var(--hero-image)_1fr] w-[90%] mx-auto max-w-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <Header className="self-start" />

      <HeroBackground />

      <main
        id="main-content"
        className="grid grid-cols-[minmax(min-content,var(--card-max-size))] gap-y-8 mx-auto pb-16"
      >
        <CrowdfundProvider>
          <ProjectHero className="-mt-20" />
          <ProjectStats />
          <ProjectAbout />
        </CrowdfundProvider>
      </main>
    </div>
  );
}
