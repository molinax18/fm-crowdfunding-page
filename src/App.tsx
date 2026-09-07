import Header from "./components/Header";
import HeroBackground from "./components/HeroBackground";

export default function App() {
  return (
    <div className="grid w-[90%] mx-auto max-w-300">
      <HeroBackground />
      <Header />
    </div>
  );
}
