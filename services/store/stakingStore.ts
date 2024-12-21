import { create } from "zustand";

interface StakingStore {
  shouldRefresh: boolean;
  triggerRefresh: () => void;
}

export const useStakingStore = create<StakingStore>(set => ({
  shouldRefresh: false,
  triggerRefresh: () => set(state => ({ shouldRefresh: !state.shouldRefresh })),
}));
