import type { IReward } from "../types/reward";
import Button from "./ui/Button";

interface RewardCardProps extends IReward {
  onSelect?: () => void;
}

export default function RewardCard({
  id,
  title,
  pledge,
  description,
  remaining,
  onSelect,
}: RewardCardProps) {
  const isSoldOut = remaining === 0;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className={`project-card flex flex-col gap-y-6 ${isSoldOut ? "opacity-50" : ""}`}
    >
      <header className="flex flex-col gap-y-1 md:flex-row md:items-center md:justify-between">
        <h3
          id={`${id}-title`}
          className="project-card-title text-title-size-md"
        >
          {title}
        </h3>
        <p className="text-green-400 font-medium text-sm">
          <span className="sr-only">Minimum pledge: </span>Pledge ${pledge} or
          more
        </p>
      </header>

      <p>{description.reward}</p>

      <footer className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-x-2">
          <strong className="project-card-title text-title-size-xl">
            {remaining}
          </strong>
          <span>left</span>
        </p>
        <Button
          className={`self-start ${!isSoldOut ? "cursor-pointer" : "cursor-not-allowed"}`}
          variant={isSoldOut ? "secondary" : "primary"}
          disabled={isSoldOut}
          aria-label={
            isSoldOut ? `${title} is sold out` : `Select ${title} reward`
          }
          onClick={onSelect}
        >
          {isSoldOut ? "Out of stock" : "Select Reward"}
        </Button>
      </footer>
    </article>
  );
}
