import { useCrowdfundContext } from "../context/crowdfundContext";
import RewardCard from "./RewardCard";

export default function ProjectAbout() {
  const { crowdfund, isCrowdfundComplete } = useCrowdfundContext();

  return (
    <section
      aria-labelledby="project-about-title"
      className="flex flex-col gap-y-6"
    >
      <div className="project-card flex flex-col gap-y-6">
        <h2
          id="project-about-title"
          className="project-card-title text-title-size-lg"
        >
          About this project
        </h2>

        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        {isCrowdfundComplete(crowdfund) ? (
          <footer className="project-card flex flex-col gap-y-4">
            <h3 className="project-card-title text-title-size-lg">
              ¡The crowdfund is over!
            </h3>
            <p>
              ¡Thanks to all of you for contributing to the project! We are so
              grateful to you!
              <br />
              <span className="text-xs">
                (If you are seeing this, then I forgot to update the crowdfund
                days left. I hope I remember it later...)
              </span>
            </p>
          </footer>
        ) : (
          crowdfund.rewards.map((reward) => (
            <RewardCard key={reward.title} {...reward} />
          ))
        )}
      </div>
    </section>
  );
}
