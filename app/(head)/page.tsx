import { getServerToken } from "@/utils/auth";
import ToonsByMenuSlider from "../_components/ToonsByMenuSlider";

export default function Home() {
  const token = getServerToken();

  return <ToonsByMenuSlider token={token} />;
}
