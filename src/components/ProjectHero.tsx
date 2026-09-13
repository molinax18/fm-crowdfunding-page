import { useState, type ComponentPropsWithoutRef } from "react";
import { useCrowdfundContext } from "../context/useCrowdfundContext";
import { useModal } from "../hooks/useModal";
import Bookmark from "./ui/Bookmark";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import BackProjectModal from "./BackProjectModal";

import mastercraftLogo from "../assets/svg/logo-mastercraft.svg";

export default function ProjectHero({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const { crowdfund, isCrowdfundComplete } = useCrowdfundContext();
  const { isOpen, openModal, closeModal } = useModal();
  const [isMarked, setIsMarked] = useState(false);
  const onMarked = () => setIsMarked((prev) => !prev);

  return (
    <>
      <section
        aria-labelledby="project-title"
        className={`flex flex-col gap-y-6 project-card text-center ${className}`}
        {...props}
      >
        <header>
          <img
            src={mastercraftLogo}
            alt="Mastercraft logo"
            className="inline -mt-20"
          />

          <h1
            id="project-title"
            className="project-card-title text-title-size-lg"
          >
            Mastercraft Bamboo Monitor Riser
          </h1>
        </header>

        <p>
          A beautifully handcrafted monitor stand to reduce neck and eye strain
        </p>

        <footer className="flex items-center gap-x-4 md:justify-between">
          <Button
            className={`grow md:grow-0 ${isCrowdfundComplete(crowdfund) ? "cursor-not-allowed" : "cursor-pointer"}`}
            variant={isCrowdfundComplete(crowdfund) ? "secondary" : "primary"}
            disabled={isCrowdfundComplete(crowdfund)}
            onClick={openModal}
          >
            Back this project
          </Button>
          <Bookmark isMarked={isMarked} onMarked={onMarked} />
        </footer>
      </section>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="grid place-content-center"
      >
        <Modal.Content className="modal-card project-card">
          <BackProjectModal />
        </Modal.Content>
      </Modal>
    </>
  );
}
