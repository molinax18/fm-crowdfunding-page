import { useState, type ComponentPropsWithoutRef } from "react";
import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import CloseIcon from "../assets/svg/icon-close-menu.svg?react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

import crowdfundLogo from "../assets/svg/logo.svg";

export default function Header({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"header">) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header
      className={`relative z-50 flex items-center justify-between py-6 ${className}`}
      {...props}
    >
      <a href="#main-content" aria-label="Go to main content">
        <img src={crowdfundLogo} alt="Crowdfund" />
      </a>

      <button
        className="md:hidden"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
      >
        {open ? (
          <CloseIcon aria-hidden="true" focusable="false" />
        ) : (
          <MenuIcon aria-hidden="true" focusable="false" />
        )}
      </button>

      {open && <NavbarMobile className="md:hidden" />}
      <NavbarDesktop className="hidden md:inline-block" />
    </header>
  );
}
