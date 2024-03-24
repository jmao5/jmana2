import ToonList from "@/app/_components/ToonList";
import { getServerToken } from "@/utils/auth";

export default function Webtoon() {
  const token = getServerToken();

  return <ToonList token={token} menu={"TOON"} />;
}
