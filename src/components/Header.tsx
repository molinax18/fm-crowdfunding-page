import type { ComponentPropsWithoutRef } from "react";
import { useModal } from "../hooks/useModal";
import MenuIcon from "../assets/svg/icon-hamburger.svg?react";
import CloseIcon from "../assets/svg/icon-close-menu.svg?react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

import crowdfundLogo from "../assets/svg/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

export default function Header({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"header">) {
  const { closeModal, openModal, isOpen } = useModal();

  return (
    <header
      className={`flex items-center justify-between py-6 ${className}`}
      {...props}
    >
      <a
        href="#main-content"
        aria-label="Go to main content"
        className="relative z-20"
      >
        <img src={crowdfundLogo} alt="Crowdfund" />
      </a>

      <button
        className="md:hidden"
        type="button"
        onClick={isOpen ? closeModal : openModal}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? (
          <CloseIcon aria-hidden="true" focusable="false" />
        ) : (
          <MenuIcon aria-hidden="true" focusable="false" />
        )}
      </button>

      <Dialog.Root
        open={isOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="overlay fixed inset-0 z-10 overflow-hidden" />
          <Dialog.Content className="absolute top-18 z-11 inset-x-0">
            <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
            <Dialog.Description className="sr-only">
              Primary navigation links
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                type="button"
                className="fixed top-7 right-[5%] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <CloseIcon aria-hidden="true" focusable="false" />
              </button>
            </Dialog.Close>
            <NavbarMobile
              className="w-[90%] mx-auto rounded-lg bg-white"
              onLinkClick={closeModal}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <NavbarDesktop className="hidden md:inline-block" />
    </header>
  );
}
