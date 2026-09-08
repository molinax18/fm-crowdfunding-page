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
  return (
    <progress
      aria-label="Project funding progress"
      className={`progress-bar ${className}`}
      value={currentVal}
      max={maxVal}
      {...props}
    ></progress>
  );
}
