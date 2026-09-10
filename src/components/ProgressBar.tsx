import type { ComponentPropsWithoutRef } from "react";

interface ProgressBarProps extends ComponentPropsWithoutRef<"progress"> {
  currentVal: number;
  maxVal: number;
}

export default function ProgressBar({
  currentVal,
  maxVal,
  className = "",
  ...props
}: ProgressBarProps) {
  const percentage = Math.round((currentVal / maxVal) * 100);

  return (
    <progress
      aria-label="Project funding progress"
      aria-valuetext={`${percentage}% funded`}
      className={`progress-bar ${className}`}
      value={currentVal}
      max={maxVal}
      {...props}
    ></progress>
  );
}
