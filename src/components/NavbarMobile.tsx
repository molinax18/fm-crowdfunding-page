import type { ComponentPropsWithoutRef } from "react";
import { LINKS } from "../constants/links";

export default function NavbarMobile({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Primary navigation"
      className={`w-[90%] mx-auto rounded-lg bg-white ${className}`}
      {...props}
    >
      <ul className="flex flex-col text-black font-medium">
        {LINKS.map(({ href, value }) => (
          <li
            key={value}
            className="p-4 border-b border-gray-300 last:border-b-0"
          >
            <a href={href}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
