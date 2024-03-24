import { create } from "zustand";
import { persist } from "zustand/middleware";

const RunStoreKey = "isRun";

interface RunStateType {
  isRun: boolean;
  setIsRun: (isRun: boolean) => void;
}

const useRunStore = create(
  persist<RunStateType>(
    (set) => ({
      isRun: false,
      setIsRun: (isRun: boolean) => set({ isRun }),
    }),
    {
      name: RunStoreKey,
    }
  )
);

export default useRunStore;
