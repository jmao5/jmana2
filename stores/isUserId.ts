import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserIdContextType = {
  userId: number;
  setUserId: (value: number) => void;
};

const useUserIdStore = create(
  persist<UserIdContextType>(
    (set) => ({
      userId: 0,
      setUserId: (value: number) => {
        set({ userId: value });
      },
    }),
    {
      name: "isAuthId",
    }
  )
);

export default useUserIdStore;
