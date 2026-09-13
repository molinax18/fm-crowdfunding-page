import type { ComponentPropsWithoutRef } from "react";
import type { IStatUI } from "../types/stats";

interface StatGroupProps extends IStatUI, ComponentPropsWithoutRef<"article"> {}

export default function StatGroup({
  amount,
  label,
  className = "",
  ...props
}: StatGroupProps) {
  return (
    <article
      className={`relative flex flex-col gap-y-1 pb-2 ${className}`}
      {...props}
    >
      <strong className="project-card-title text-title-size-xl">
        {amount}
      </strong>
      <span className="text-sm">{label}</span>
    </article>
  );
}
