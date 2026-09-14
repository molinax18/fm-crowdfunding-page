import type { ComponentPropsWithoutRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./ui/Button";

import successImage from "../assets/svg/icon-check.svg";

interface SuccessModalProps extends ComponentPropsWithoutRef<"section"> {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  isOpen,
  onClose,
  className = "",
  ...props
}: SuccessModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed inset-0 z-40 overflow-hidden" />
        <Dialog.Content className="modal-card project-card z-50">
          <section
            aria-labelledby="success-modal-title"
            className={`flex flex-col gap-y-6 items-center text-center ${className}`}
            {...props}
          >
            <header className="flex flex-col gap-y-2">
              <img
                src={successImage}
                alt="Big white check with green background"
                className="size-25 mx-auto"
              />
              <Dialog.Title
                id="success-modal-title"
                className="project-card-title text-title-size-lg"
              >
                Thanks for your support
              </Dialog.Title>
            </header>

            <Dialog.Description asChild>
              <p>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
            </Dialog.Description>

            <Button onClick={onClose} className="cursor-pointer">
              Got it!
            </Button>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
