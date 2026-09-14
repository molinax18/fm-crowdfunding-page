import type { TRewardId } from "../types/reward";
import { useCrowdfundContext } from "../context/useCrowdfundContext";
import { useRewardId } from "../hooks/useRewardId";
import * as Dialog from "@radix-ui/react-dialog";
import CloseModalIcon from "../assets/svg/icon-close-modal.svg?react";
import PledgeOptionCard from "./PledgeOptionCard";

interface BackProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  defaultValue?: TRewardId;
}

export default function BackProjectModal({
  isOpen,
  closeModal,
  defaultValue,
}: BackProjectModalProps) {
  const {
    crowdfund: { rewards },
  } = useCrowdfundContext();
  const { currentRewardId, updateRewardId } = useRewardId(defaultValue || null);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay fixed inset-0 z-10 overflow-hidden" />
        <Dialog.Content className="modal-card project-card">
          <section
            aria-labelledby="back-project-title"
            className="flex flex-col gap-y-6"
          >
            <button
              type="button"
              className="absolute top-9 right-6 cursor-pointer"
              aria-label="Close back this project dialog"
              onClick={closeModal}
            >
              <CloseModalIcon aria-hidden="true" focusable="false" />
            </button>

            <header className="flex flex-col gap-y-2">
              <Dialog.Title
                id="back-project-title"
                className="project-card-title text-title-size-lg"
              >
                Back this project
              </Dialog.Title>
              <Dialog.Description asChild>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Monitor
                  Riser out in the world?
                </p>
              </Dialog.Description>
            </header>

            {rewards.map((reward) => (
              <PledgeOptionCard
                currentRewardId={currentRewardId}
                onChange={updateRewardId}
                key={reward.id}
                {...reward}
              />
            ))}
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
