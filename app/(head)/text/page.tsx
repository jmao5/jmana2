import ToonList from "@/app/_components/ToonList";
import { getServerToken } from "@/utils/auth";

export default function Text() {
  const token = getServerToken();

  return <ToonList token={token} menu={"NOVEL"} />;
}
