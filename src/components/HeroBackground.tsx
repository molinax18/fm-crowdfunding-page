import type { CSSProperties } from "react";
import heroMobile from "../assets/bg/image-hero-mobile.jpg";
import heroDesktop from "../assets/bg/image-hero-desktop.jpg";

const heroPaths = {
  "--hero-mobile": `url(${heroMobile})`,
  "--hero-desktop": `url(${heroDesktop})`,
} as CSSProperties;

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      style={heroPaths}
      className="
        bg-gray-500 bg-(image:--hero-mobile) md:bg-(image:--hero-desktop)
        bg-no-repeat bg-center bg-cover
        absolute inset-x-0 w-screen h-80
      "
    />
  );
}
