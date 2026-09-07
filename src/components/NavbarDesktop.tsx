import type { ComponentPropsWithoutRef } from "react";
import { LINKS } from "../constants/links";

export default function NavbarDesktop({
  ...props
}: ComponentPropsWithoutRef<"nav">) {
  return (
    <nav aria-label="Primary navigation" {...props}>
      <ul className="flex gap-x-6 text-white font-medium">
        {LINKS.map(({ href, value }) => (
          <li key={value}>
            <a href={href}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
