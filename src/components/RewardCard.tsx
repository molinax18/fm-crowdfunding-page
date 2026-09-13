import type { IReward } from "../types/reward";
import { useModal } from "../hooks/useModal";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import BackProjectModal from "./BackProjectModal";

export default function RewardCard({
  id,
  title,
  pledge,
  description,
  remaining,
}: IReward) {
  const { closeModal, isOpen, openModal } = useModal();
  const isSoldOut = remaining === 0;

  return (
    <>
      <article
        aria-labelledby={`${id}-title`}
        className={`project-card flex flex-col gap-y-6 ${isSoldOut ? "opacity-50" : ""}`}
      >
        <header className="flex flex-col gap-y-1 md:flex-row md:items-center md:justify-between">
          <h3
            id={`${id}-title`}
            className="project-card-title text-title-size-md"
          >
            {title}
          </h3>
          <p className="text-green-400 font-medium text-sm">
            <span className="sr-only">Minimum pledge: </span>Pledge ${pledge} or
            more
          </p>
        </header>

        <p>{description.reward}</p>

        <footer className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-x-2">
            <strong className="project-card-title text-title-size-xl">
              {remaining}
            </strong>
            <span>left</span>
          </p>
          <Button
            className={`self-start ${!isSoldOut ? "cursor-pointer" : "cursor-not-allowed"}`}
            variant={isSoldOut ? "secondary" : "primary"}
            disabled={isSoldOut}
            aria-label={
              isSoldOut ? `${title} is sold out` : `Select ${title} reward`
            }
            onClick={openModal}
          >
            {isSoldOut ? "Out of stock" : "Select Reward"}
          </Button>
        </footer>
      </article>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="grid place-content-center"
      >
        <Modal.Content className="modal-card project-card">
          <BackProjectModal defaultValue={id} />
        </Modal.Content>
      </Modal>
    </>
  );
}
