import { useEffect, type ComponentPropsWithoutRef } from "react";
import { LINKS } from "../constants/links";

export default function NavbarMobile({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"nav">) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  return (
    <nav
      id="mobile-navigation"
      aria-label="Primary navigation"
      className={`fixed -z-20 inset-0 bg-black/50 ${className}`}
      {...props}
    >
      <ul className="relative top-18 flex flex-col w-[90%] mx-auto rounded-lg bg-white text-black font-medium">
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
