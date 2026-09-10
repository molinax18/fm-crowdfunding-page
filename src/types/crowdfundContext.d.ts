import type { IReward, TRewardId } from "./reward";
import type { IStat } from "./stats";

export interface ICrowdfundState {
  stats: IStat;
  rewards: IReward[];
}

export interface ICrowdfundContext {
  crowdfund: ICrowdfundState;
  updateCrowdfund: (id: TRewardId, amount: number) => void;
  isCrowdfundComplete: (crowdfund: ICrowdfundState) => boolean;
}
