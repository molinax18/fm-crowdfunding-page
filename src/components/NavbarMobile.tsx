import type { ComponentPropsWithoutRef } from "react";
import { LINKS } from "../constants/links";

interface NavbarMobileProps extends ComponentPropsWithoutRef<"nav"> {
  onLinkClick: () => void;
}

export default function NavbarMobile({
  className = "",
  onLinkClick,
  ...props
}: NavbarMobileProps) {
  return (
    <nav
      id="mobile-navigation"
      aria-label="Primary navigation"
      className={` ${className}`}
      {...props}
    >
      <ul className="flex flex-col text-black font-medium">
        {LINKS.map(({ href, value }) => (
          <li
            key={value}
            className="p-4 border-b border-gray-300 last:border-b-0"
          >
            <a href={href} onClick={onLinkClick}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
