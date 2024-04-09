import { UserResponse } from "@/type/response";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserInfoStore = {
  userInfo: UserResponse["data"]["basicInfo"] | null;
  setUserInfo: (value: UserResponse["data"]["basicInfo"]) => void;
};

const isUserInfoStore = create(
  persist<UserInfoStore>(
    (set) => ({
      userInfo: null,
      setUserInfo: (value) => {
        set({ userInfo: value });
      },
    }),
    {
      name: "isUserInfoStore",
    }
  )
);

export default isUserInfoStore;
