import type { TRewardId } from "../types/reward";
import { type ComponentPropsWithoutRef, type SubmitEvent } from "react";
import DollarIcon from "../assets/svg/currency-dollar.svg?react";
import Button from "./ui/Button";
import usePledgeAmount from "../hooks/usePledgeAmount";
import useModal from "../hooks/useModal";
import { createPortal } from "react-dom";
import Modal from "./ui/Modal";
import SuccessModal from "./SuccessModal";
import { useCrowdfundContext } from "../context/crowdfundContext";

interface IPledgeOptionAmount extends ComponentPropsWithoutRef<"div"> {
  rewardId: TRewardId;
}

export default function PledgeOptionAmount({
  rewardId,
  defaultValue,
  className = "",
  ...props
}: IPledgeOptionAmount) {
  const { updatedReward } = useCrowdfundContext();
  const { isOpen, openModal, closeModal } = useModal();
  const { amount, isValid, amountToNumber, setAmount } = usePledgeAmount(
    String(defaultValue),
  );
  const inputId = `pledge-${rewardId}`;

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    updatedReward(rewardId, amountToNumber);
    openModal();
  };

  return (
    <>
      <div
        className={`flex flex-col gap-y-4 text-center ${className}`}
        {...props}
      >
        <p>Enter your pledge</p>

        <form className="flex justify-center gap-x-2" onSubmit={onSubmit}>
          <label
            htmlFor={inputId}
            className={`
            flex gap-x-1 px-6 group py-4 w-full max-w-40
            border border-gray-300 rounded-full
            focus-within:outline-2 ${!isValid ? "focus-within:outline-red-500" : "focus-within:outline-green-400"}
          `}
          >
            <span className="sr-only">Pledge amount</span>
            <DollarIcon
              className={
                !isValid ? "text-red-500" : "group-focus-within:text-green-400"
              }
            />
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              name="pledge"
              id={inputId}
              inputMode="decimal"
              aria-invalid={!isValid}
              aria-describedby={`${inputId}-hint`}
              className="w-full outline-none font-medium text-black"
            />
          </label>

          <Button
            type="submit"
            className={isValid ? "cursor-pointer" : "cursor-not-allowed"}
            variant={!isValid ? "secondary" : "primary"}
            disabled={!isValid}
          >
            Continue
          </Button>
        </form>
        <p id={`${inputId}-hint`} className="sr-only">
          Enter an amount greater than or equal to the minimum pledge.
        </p>
      </div>

      {createPortal(
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          aria-labelledby="success-modal-title"
          defaultClose={false}
          className="max-w-(--card-size-md)"
        >
          <SuccessModal onClose={closeModal} />
        </Modal>,
        document.body,
      )}
    </>
  );
}
