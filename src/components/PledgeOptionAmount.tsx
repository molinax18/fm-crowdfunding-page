import type { TRewardId } from "../types/reward";
import { type ComponentPropsWithoutRef } from "react";
import DollarIcon from "../assets/svg/currency-dollar.svg?react";
import Button from "./ui/Button";
import usePledgeAmount from "../hooks/usePledgeAmount";

interface IPledgeOptionAmount extends ComponentPropsWithoutRef<"div"> {
  rewardId: TRewardId;
}

export default function PledgeOptionAmount({
  rewardId,
  defaultValue,
  className = "",
  ...props
}: IPledgeOptionAmount) {
  const { amount, isValid, onSubmit, setAmount } = usePledgeAmount(
    rewardId,
    String(defaultValue),
  );

  return (
    <div
      className={`flex flex-col gap-y-4 text-center ${className}`}
      {...props}
    >
      <p>Enter your pledge</p>

      <form className="flex justify-center gap-x-2" onSubmit={onSubmit}>
        <label
          htmlFor="pledge"
          className={`
            flex gap-x-1 px-6 group py-4 w-full max-w-40
            border border-gray-300 rounded-full
            focus-within:outline-2 ${!isValid ? "focus-within:outline-red-500" : "focus-within:outline-green-400"}
          `}
        >
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
            id="pledge"
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
    </div>
  );
}
