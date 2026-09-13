import {
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";
import CloseModalIcon from "../../assets/svg/icon-close-modal.svg?react";

interface IModalContext {
  isOpen: boolean;
  onClose: () => void;
  defaultClose: boolean;
}

interface Modal extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  defaultClose?: boolean;
}

const ModalContext = createContext<IModalContext | null>(null);

export default function Modal({
  defaultClose = true,
  isOpen,
  onClose,
  children,
  className = "",
  ...props
}: Modal) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose, defaultClose }}>
      <div
        className={`overlay fixed inset-0 z-50 overflow-hidden ${className}`}
        {...props}
      >
        {children}
      </div>
    </ModalContext.Provider>,
    document.body,
  );
}

interface ModalContent extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

function Content({ className = "", children, ...props }: ModalContent) {
  const { isOpen, onClose, defaultClose } = useContext(
    ModalContext,
  ) as IModalContext;
  const { closeButtonRef } = useModalAccessibility(isOpen, onClose);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`modal-container ${className}`}
      {...props}
    >
      {children}

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
    </div>
  );
}

Modal.Content = Content;
