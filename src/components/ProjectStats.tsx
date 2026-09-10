import type { ComponentPropsWithoutRef } from "react";
import type { IStatUI } from "../types/stats";
import { useCrowdfundContext } from "../context/crowdfundContext";
import StatGroup from "./StatGroup";
import ProgressBar from "./ProgressBar";

export default function ProjectStats({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const {
    crowdfund: { stats },
  } = useCrowdfundContext();
  const projectStats: IStatUI[] = [
    {
      amount: stats.amount,
      label: `of ${stats.goalAmount} backed`,
    },
    {
      amount: stats.backers,
      label: "total backers",
    },
    {
      amount: stats.daysLeft,
      label: "days left",
    },
  ];

  return (
    <section
      id="project-stats"
      aria-label="Project statistics"
      className={`grid gap-y-6 project-card text-center md:grid-cols-3 md:gap-8 md:text-left ${className}`}
      {...props}
    >
      {projectStats.map(({ amount, label }) => (
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
        currentVal={stats.amount}
        maxVal={stats.goalAmount}
        className="md:col-span-full"
      />
    </section>
  );
}
