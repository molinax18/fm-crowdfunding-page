import type { ComponentPropsWithoutRef } from "react";
import Button from "./ui/Button";

import successImage from "../assets/svg/icon-check.svg";

interface SuccessModalProps extends ComponentPropsWithoutRef<"section"> {
  onClose: () => void;
}

export default function SuccessModal({
  onClose,
  className = "",
  ...props
}: SuccessModalProps) {
  return (
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
        <h2
          id="success-modal-title"
          className="project-card-title text-title-size-lg"
        >
          Thanks for your support
        </h2>
      </header>

      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>

      <Button onClick={onClose} className="cursor-pointer">
        Got it!
      </Button>
    </section>
  );
}
