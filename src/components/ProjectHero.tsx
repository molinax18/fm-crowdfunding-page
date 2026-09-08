import { useState, type ComponentPropsWithoutRef } from "react";
import Bookmark from "./ui/Bookmark";

import mastercraftLogo from "../assets/svg/logo-mastercraft.svg";
import Button from "./ui/Button";

export default function ProjectHero({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const [isMarked, setIsMarked] = useState(false);
  const onMarked = () => setIsMarked((prev) => !prev);

  return (
    <section
      aria-labelledby="project-hero"
      className={`flex flex-col gap-y-6 project-card text-center ${className}`}
      {...props}
    >
      <header>
        <img
          src={mastercraftLogo}
          alt="Mastercraft logo"
          className="inline -mt-20"
        />

        <h1
          id="project-title"
          className="project-card-title text-title-size-lg"
        >
          Mastercraft Bamboo Monitor Riser
        </h1>
      </header>

      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain
      </p>

      <footer className="flex items-center gap-x-4 md:justify-between">
        <Button className="cursor-pointer grow md:grow-0">
          Back this project
        </Button>
        <Bookmark isMarked={isMarked} onMarked={onMarked} />
      </footer>
    </section>
  );
}
