import { getServerToken } from "@/utils/auth";
import ToonsByMenuSlider from "../_components/ToonsByMenuSlider";
import LoginPage from "../(auth)/login/page";

export default async function Home() {
  const token = getServerToken();

  return token ? (
    <>
      <span className="left-aligned">웹툰</span>
      <ToonsByMenuSlider menu="TOON" />
    </>
  ) : (
    <LoginPage />
  );
}
