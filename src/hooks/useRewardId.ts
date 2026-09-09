import type { TRewardId } from "../types/reward";
import { useState } from "react";

export default function useRewardId(id: TRewardId | null) {
  const [currentRewardId, setCurrentRewardId] = useState<TRewardId | null>(
    id || null,
  );

  const updateRewardId = (id: TRewardId) => {
    setCurrentRewardId(id);
  };

  return {
    currentRewardId,
    updateRewardId,
  };
}
