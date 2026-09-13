import type { ICrowdfundContext } from "../types/crowdfundContext";
import { createContext } from "react";

export const CrowdfundContext = createContext<ICrowdfundContext | null>(null);
