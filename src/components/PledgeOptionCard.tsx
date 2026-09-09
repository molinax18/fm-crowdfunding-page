import type { IReward, TRewardId } from "../types/reward";
import PledgeOptionAmount from "./PledgeOptionAmount";

interface PledgeOptionCardProps extends IReward {
  currentRewardId: TRewardId | null;
  onChange: (id: TRewardId) => void;
}

export default function PledgeOptionCard({
  id,
  title,
  pledge,
  description,
  remaining,
  currentRewardId,
  onChange,
}: PledgeOptionCardProps) {
  const isSoldOut = remaining === 0;
  const isSameReward = currentRewardId === id;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className={`grid gap-y-6 project-card transition-colors duration-150 md:grid-cols-12 ${isSoldOut ? "opacity-50" : ""} ${isSameReward ? "border-green-400" : "border-gray-300"}`}
    >
      <header className="flex items-center gap-x-4 md:row-start-1 md:col-span-10">
        <label
          htmlFor={id}
          className={`flex items-center gap-x-4 ${isSoldOut ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <input
            className="checkbox disabled:cursor-not-allowed"
            type="checkbox"
            name={id}
            id={id}
            checked={isSameReward}
            onChange={() => onChange(id)}
            aria-describedby={`${id}-description`}
            disabled={isSoldOut}
          />

          <div className="flex items-center flex-col gap-1 md:flex-row md:gap-4">
            <h3
              id={`${id}-title`}
              className="project-card-title text-title-size-md"
            >
              {title}
            </h3>
            <p className="text-green-400 font-medium text-sm">
              <span className="sr-only">Minimum pledge: </span>Pledge ${pledge}
              or more
            </p>
          </div>
        </label>
      </header>
      <p id={`${id}-description`} className="md:row-start-2 md:col-span-full">
        {description.pledge}
      </p>

      <div className="flex items-center gap-x-2 md:row-start-1 md:col-start-11 md:col-span-full md:place-self-end">
        <strong className="project-card-title text-title-size-xl">
          {remaining}
        </strong>
        <span>left</span>
      </div>

      {isSameReward && !isSoldOut && (
        <PledgeOptionAmount className="pt-6 border-t border-gray-300 md:row-start-3 md:col-span-full md:flex-row md:items-center md:justify-between" />
      )}
    </article>
  );
}
