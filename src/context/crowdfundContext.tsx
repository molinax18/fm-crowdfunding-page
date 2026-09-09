import type { TRewardId } from "../types/reward";
import type {
  ICrowdfundContext,
  ICrowdfundState,
} from "../types/crowdfundContext";
import { createContext, useContext, useState, type ReactNode } from "react";
import { CROWDFUND_INITIAL_VALUES } from "../constants/crowdfund";

const CrowdfundContext = createContext<ICrowdfundContext | null>(null);

export function CrowdfundProvider({ children }: { children: ReactNode }) {
  const [crowdfund, setCrowdfund] = useState<ICrowdfundState>(
    CROWDFUND_INITIAL_VALUES,
  );

  const updatedReward = (id: TRewardId, amount: number) => {
    setCrowdfund((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        amount: prev.stats.amount + amount,
        backers: prev.stats.backers + 1,
      },
      rewards: prev.rewards.map((reward) =>
        reward.id === id
          ? { ...reward, remaining: reward.remaining - 1 }
          : reward,
      ),
    }));
  };

  return (
    <CrowdfundContext.Provider
      value={{ crowdfund, setCrowdfund, updatedReward }}
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
