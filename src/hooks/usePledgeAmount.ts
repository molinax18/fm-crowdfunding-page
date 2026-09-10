import { useState } from "react";

export default function usePledgeAmount(defaultValue?: string) {
  const [amount, setAmount] = useState(defaultValue ?? "");
  const amountToNumber = Number(amount.trim());
  const isValid = amountToNumber >= Number(defaultValue ?? 0);

  return {
    amount,
    amountToNumber,
    setAmount,
    isValid,
  };
}
