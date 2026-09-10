import type { TRewardId } from "../types/reward";
import type {
  ICrowdfundContext,
  ICrowdfundState,
} from "../types/crowdfundContext";
import { createContext, useContext, useState, type ReactNode } from "react";
import {
  CROWDFUND_CONTEXT_INITIAL_VALUES,
  CROWDFUND_INITIAL_VALUES,
} from "../constants/crowdfund";

const CrowdfundContext = createContext<ICrowdfundContext | null>(null);

export function CrowdfundProvider({ children }: { children: ReactNode }) {
  const [crowdfund, setCrowdfund] = useState<ICrowdfundState>(
    CROWDFUND_CONTEXT_INITIAL_VALUES,
  );

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
      }}
    >
      {children}
    </CrowdfundContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCrowdfundContext() {
  const crowdfund = useContext(CrowdfundContext);

  if (!crowdfund) {
    throw new Error("crowdfundContext must be used within a provider");
  }

  return crowdfund;
}
