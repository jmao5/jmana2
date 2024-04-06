import ToonList from "@/app/_components/ToonList";
import { Menu } from "@/constants/menu";
import { getServerToken } from "@/utils/auth";

export default function Webtoon() {
  const token = getServerToken();

  return <ToonList token={token} menu={Menu.WEBTOON} />;
}
