import { create } from "zustand";

interface RunStateType {
  isRun: boolean;
  setIsRun: (isRun: boolean) => void;
}

const useRunStore = create<RunStateType>((set) => ({
  isRun: false,
  setIsRun: (isRun: boolean) => set({ isRun }),
}));

export default useRunStore;
