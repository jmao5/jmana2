import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type UserIdContextType = {
  userId: number;
  setUserId: (value: number) => void;
};

const getSavedUserId = (): number => {
  const savedUserId =
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("odh_userId") || "0")
      : 0;
  return !Number.isNaN(savedUserId) ? savedUserId : 0;
};

const useUserIdStore = create(
  persist<UserIdContextType>(
    (set) => ({
      userId: getSavedUserId(),
      setUserId: (value: number) => {
        set({ userId: value });
        if (typeof window !== "undefined") {
          localStorage.setItem("odh_userId", value.toString());
        }
      },
    }),
    {
      name: "isAuthId",
    }
  )
);

export const useUserId = () => {
  const { userId, setUserId } = useUserIdStore();
  const router = useRouter();

  useEffect(() => {
    if (userId === 0) {
      router.push("/login");
    }
  }, [router, userId]);

  return { userId, setUserId };
};

export default useUserIdStore;
