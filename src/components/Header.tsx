import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import crowdfundLogo from "../assets/svg/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <img src={crowdfundLogo} alt="Crowdfund logo" />

      <MenuIcon />
    </header>
  );
}
