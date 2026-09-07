import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  circleColor?: string;
  pathColor?: string;
}

export default function BookmarkIcon({
  circleColor = "currentColor",
  pathColor = "#B1B1B1",
  ...props
}: IconProps) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle className={circleColor} cx="28" cy="28" r="28" />
        <path className={pathColor} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
