import type { ComponentPropsWithoutRef } from "react";
import { useModal } from "../hooks/useModal";
import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import CloseIcon from "../assets/svg/icon-close-menu.svg?react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Modal from "./ui/Modal";

import crowdfundLogo from "../assets/svg/logo.svg";

export default function Header({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"header">) {
  const { closeModal, openModal, isOpen } = useModal();

  return (
    <header
      className={`relative z-20 flex items-center justify-between py-6 ${className}`}
      {...props}
    >
      <a href="#main-content" aria-label="Go to main content">
        <img src={crowdfundLogo} alt="Crowdfund" />
      </a>

      <button
        className="md:hidden"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? (
          <CloseIcon
            aria-hidden="true"
            focusable="false"
            onClick={closeModal}
          />
        ) : (
          <MenuIcon aria-hidden="true" focusable="false" onClick={openModal} />
        )}
      </button>

      <Modal
        defaultClose={false}
        isOpen={isOpen}
        onClose={closeModal}
        className="z-10!"
      >
        <Modal.Content className="relative top-18">
          <NavbarMobile />
        </Modal.Content>
      </Modal>

      <NavbarDesktop className="hidden md:inline-block" />
    </header>
  );
}
