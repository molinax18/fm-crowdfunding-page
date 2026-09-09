import type { TRewardId } from "../types/reward";
import { useState, type SubmitEvent } from "react";
import { useCrowdfundContext } from "../context/crowdfundContext";

export default function usePledgeAmount(
  rewardId: TRewardId,
  defaultValue?: string,
) {
  const { updatedReward } = useCrowdfundContext();
  const [amount, setAmount] = useState(defaultValue ?? "");
  const amountToNumber = Number(amount.trim());
  const isValid = amountToNumber >= Number(defaultValue ?? 0);

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    updatedReward(rewardId, amountToNumber);
  };

  return {
    amount,
    setAmount,
    isValid,
    onSubmit,
  };
}
