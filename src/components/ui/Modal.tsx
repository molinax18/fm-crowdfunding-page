import type { ComponentPropsWithoutRef, ReactNode } from "react";
import CloseModalIcon from "../../assets/svg/icon-close-modal.svg?react";
import useModalAccessibility from "../../hooks/useModalAccessibility";

interface BackProjectModalProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  defaultClose?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  defaultClose = true,
  ...props
}: BackProjectModalProps) {
  const { closeButtonRef } = useModalAccessibility(isOpen, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay fixed inset-0 z-50 grid place-items-center overflow-hidden p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="back-project-title"
        className={`modal-container relative max-h-[calc(100dvh-2rem)] w-full max-w-(--card-max-size) overflow-y-auto overscroll-contain project-card ${className}`}
        {...props}
      >
        {defaultClose && (
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => onClose()}
            className="absolute top-9 right-6 cursor-pointer"
            aria-label="Close back this project dialog"
          >
            <CloseModalIcon aria-hidden="true" focusable="false" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
