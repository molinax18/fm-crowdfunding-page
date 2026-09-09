import PledgeOptionCard from "./PledgeOptionCard";
import { PROJECT_REWARDS } from "../constants/rewards";

export default function BackProjectModal() {
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

      {PROJECT_REWARDS.map((reward) => (
        <PledgeOptionCard key={reward.id} {...reward} />
      ))}
    </section>
  );
}
