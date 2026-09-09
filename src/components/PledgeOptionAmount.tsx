import type { ComponentPropsWithoutRef } from "react";
import DollarIcon from "../assets/svg/currency-dollar.svg?react";
import Button from "./ui/Button";

export default function PledgeOptionAmount({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`flex flex-col gap-y-4 text-center ${className}`}
      {...props}
    >
      <p>Enter your pledge</p>

      <form className="flex justify-center gap-x-2">
        <label
          htmlFor="pledge"
          className="
            flex gap-x-1 px-6 group py-4 w-full max-w-40
            border border-gray-300 rounded-full
            focus-within:outline-2 focus-within:outline-green-400
          "
        >
          <DollarIcon className="group-focus-within:text-green-400" />
          <input
            type="number"
            name="pledge"
            id="pledge"
            className="w-full outline-none font-medium text-black"
          />
        </label>

        <Button type="submit" className="cursor-pointer">
          Continue
        </Button>
      </form>
    </div>
  );
}
