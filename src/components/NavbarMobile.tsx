import { useEffect, type ComponentPropsWithoutRef } from "react";
import { LINKS } from "../constants/links";

export default function NavbarMobile({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"nav">) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const currentPaddingRight = Number.parseFloat(
        getComputedStyle(document.body).paddingRight,
      );
      document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
    };
  }, []);

  return (
    <nav
      id="mobile-navigation"
      aria-label="Primary navigation"
      className={`overlay fixed -z-20 inset-0 ${className}`}
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
