import { useState, type ComponentPropsWithoutRef } from "react";
import Bookmark from "./ui/Bookmark";

import mastercraftLogo from "../assets/svg/logo-mastercraft.svg";

export default function ProjectHero({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const [isMarked, setIsMarked] = useState(false);
  const onMarked = () => setIsMarked((prev) => !prev);

  return (
    <section
      aria-labelledby="project-title"
      className={`flex flex-col gap-y-6 project-card text-center ${className}`}
      {...props}
    >
      <header>
        <img
          src={mastercraftLogo}
          alt="Mastercraft logo"
          className="inline -mt-20"
        />

        <h1 id="project-title" className="text-2xl text-black font-bold">
          Mastercraft Bamboo Monitor Riser
        </h1>
      </header>

      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain
      </p>

      <footer className="flex items-center gap-x-4 md:justify-between">
        <button
          type="button"
          className="grow bg-green-400 text-white font-medium px-6 py-4 rounded-full cursor-pointer transition-colors duration-150 md:grow-0 hover:bg-green-700"
        >
          Back this project
        </button>
        <Bookmark isMarked={isMarked} onMarked={onMarked} />
      </footer>
    </section>
  );
}
