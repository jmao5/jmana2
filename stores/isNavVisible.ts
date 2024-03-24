import { create } from "zustand";
import { persist } from "zustand/middleware";

const NavVisibleStoreKey = "isNavVisible";

interface NavVisibleStateType {
  isNavVisible: boolean;
  setIsNavVisible: (isNavVisible: boolean) => void;
}

const useNavVisibleStore = create(
  persist<NavVisibleStateType>(
    (set) => ({
      isNavVisible: false,
      setIsNavVisible: (isNavVisible: boolean) => set({ isNavVisible }),
    }),
    {
      name: NavVisibleStoreKey,
    }
  )
);

export default useNavVisibleStore;
