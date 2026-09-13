import { useContext, createContext } from "react";
import type { ICrowdfundContext } from "../types/crowdfundContext";

export const CrowdfundContext = createContext<ICrowdfundContext | null>(null);

export function useCrowdfundContext() {
  const crowdfund = useContext(CrowdfundContext);

  if (!crowdfund) {
    throw new Error("crowdfundContext must be used within a provider");
  }

  return crowdfund;
}
