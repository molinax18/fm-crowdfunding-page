import { useState } from "react";
import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import CloseIcon from "../assets/svg/icon-close-menu.svg?react";
import NavbarMobile from "./NavbarMobile";

import crowdfundLogo from "../assets/svg/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="relative z-10 flex items-center justify-between py-6">
      <img src={crowdfundLogo} alt="Crowdfund logo" />

      {open ? (
        <CloseIcon onClick={toggleMenu} />
      ) : (
        <MenuIcon onClick={toggleMenu} />
      )}

      {open && <NavbarMobile />}
    </header>
  );
}
