import { type ComponentPropsWithoutRef } from "react";
import { currentAmount, GOAL_AMOUNT, PROJECT_STATS } from "../constants/stats";
import StatGroup from "./StatGroup";
import ProgressBar from "./ProgressBar";

export default function ProjectStats({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      aria-label="Project statistics"
      className={`grid gap-y-6 project-card text-center md:grid-cols-3 md:gap-8 md:text-left ${className}`}
      {...props}
    >
      {PROJECT_STATS.map(({ amount, label }) => (
        <StatGroup
          key={label}
          amount={amount}
          label={label}
          className="
            place-self-center md:place-self-auto
            pb-3 md:pb-0
            border-b border-gray-300 md:border-b-0 md:border-r
            last-of-type:border-b-0 md:last-of-type:border-r-0
          "
        />
      ))}

      <ProgressBar
        currentVal={currentAmount}
        maxVal={GOAL_AMOUNT}
        className="md:col-span-full"
      />
    </section>
  );
}
