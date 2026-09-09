import type { Dispatch, SetStateAction } from "react";
import type { IReward } from "./reward";
import type { IStat } from "./stats";

export interface ICrowdfundState {
  stats: IStat;
  rewards: IReward[];
}

export interface ICrowdfundContext {
  crowdfund: ICrowdfundState;
  setCrowdfund: Dispatch<SetStateAction<ICrowdfundState>>;
}
