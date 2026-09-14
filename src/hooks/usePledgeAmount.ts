import { useState } from "react";

export function usePledgeAmount(defaultValue?: string) {
  const [amount, setAmount] = useState(defaultValue ?? "");
  const amountToNumber = Number(amount.trim());
  const isValid =
    amountToNumber >= Number(defaultValue ?? 0) && amountToNumber <= 999;

  return {
    amount,
    amountToNumber,
    setAmount,
    isValid,
  };
}
