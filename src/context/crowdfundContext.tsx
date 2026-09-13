import type { TRewardId } from "../types/reward";
import type { ICrowdfundState } from "../types/crowdfundContext";
import { useState, type ReactNode } from "react";
import {
  CROWDFUND_CONTEXT_INITIAL_VALUES,
  CROWDFUND_INITIAL_VALUES,
  GOAL_DATE,
} from "../constants/crowdfund";
import { getDaysDifference } from "../utils/getDaysDifference";
import { CrowdfundContext } from "./useCrowdfundContext";

export function CrowdfundProvider({ children }: { children: ReactNode }) {
  const [crowdfund, setCrowdfund] = useState<ICrowdfundState>(() => ({
    ...CROWDFUND_CONTEXT_INITIAL_VALUES,
    stats: {
      ...CROWDFUND_CONTEXT_INITIAL_VALUES.stats,
      daysLeft: Math.max(getDaysDifference(new Date(), GOAL_DATE), 0),
    },
  }));

  const isCrowdfundComplete = (crowdfund: ICrowdfundState) => {
    const { stats } = crowdfund;
    return stats.daysLeft === 0 || stats.amount >= stats.goalAmount;
  };

  const updateCrowdfund = (id: TRewardId, amount: number) => {
    const crowdfundModified = {
      ...crowdfund,
      stats: {
        ...crowdfund.stats,
        amount: crowdfund.stats.amount + amount,
        backers: crowdfund.stats.backers + 1,
      },
      rewards: crowdfund.rewards.map((reward) =>
        reward.id === id
          ? { ...reward, remaining: reward.remaining - 1 }
          : reward,
      ),
    };

    if (isCrowdfundComplete(crowdfundModified)) {
      setCrowdfund(CROWDFUND_INITIAL_VALUES);
      return;
    }

    setCrowdfund(crowdfundModified);
  };

  return (
    <CrowdfundContext.Provider
      value={{
        crowdfund,
        updateCrowdfund,
        isCrowdfundComplete,
      }}
    >
      {children}
    </CrowdfundContext.Provider>
  );
}
