import type { TRewardId } from "../types/reward";
import { useCrowdfundContext } from "../context/useCrowdfundContext";
import PledgeOptionCard from "./PledgeOptionCard";
import useRewardId from "../hooks/useRewardId";

interface BackProjectModalProps {
  defaultValue?: TRewardId;
}

export default function BackProjectModal({
  defaultValue,
}: BackProjectModalProps) {
  const {
    crowdfund: { rewards },
  } = useCrowdfundContext();
  const { currentRewardId, updateRewardId } = useRewardId(defaultValue || null);

  return (
    <section
      aria-labelledby="back-project-title"
      className="flex flex-col gap-y-6"
    >
      <header className="flex flex-col gap-y-2">
        <h2
          id="back-project-title"
          className="project-card-title text-title-size-lg"
        >
          Back this project
        </h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </header>

      {rewards.map((reward) => (
        <PledgeOptionCard
          currentRewardId={currentRewardId}
          onChange={updateRewardId}
          key={reward.id}
          {...reward}
        />
      ))}
    </section>
  );
}
