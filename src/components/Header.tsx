import { useState } from "react";
import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import CloseIcon from "../assets/svg/icon-close-menu.svg?react";
import NavbarMobile from "./NavbarMobile";

import crowdfundLogo from "../assets/svg/logo.svg";
import NavbarDesktop from "./NavbarDesktop";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="relative z-10 flex items-center justify-between py-6">
      <img src={crowdfundLogo} alt="Crowdfund logo" />

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
