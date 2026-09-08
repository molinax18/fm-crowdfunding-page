import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const variantStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button
      type={type}
      className={`px-6 py-4 rounded-full font-medium transition-colors duration-150 ${variantStyles} ${className}`}
      {...props}
    />
  );
}
