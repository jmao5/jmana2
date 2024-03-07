"use client";

import useAuthStore from "@/stores/isAuth";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const { setIsAuth } = useAuthStore();

  setIsAuth(false);
  router.replace("/");
  return null;
};

export default Logout;
