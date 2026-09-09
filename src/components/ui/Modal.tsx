import type { ComponentPropsWithoutRef, ReactNode } from "react";
import CloseModalIcon from "../../assets/svg/icon-close-modal.svg?react";

interface BackProjectModalProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  ...props
}: BackProjectModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed z-50 inset-0 grid place-content-center bg-black/50`}
      {...props}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="back-project-title"
        className={`relative project-card w-[90%] max-w-(--card-max-size) mx-auto ${className}`}
      >
        <button
          type="button"
          onClick={() => onClose()}
          className="absolute top-9 right-6 cursor-pointer"
          aria-label="Close back this project dialog"
        >
          <CloseModalIcon aria-hidden="true" focusable="false" />
        </button>
        {children}
      </div>
    </div>
  );
}
