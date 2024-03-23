import ToonList from "@/app/_components/ToonList";
import Icon from "@/components/common/Icon/Icon";
import { getServerToken } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function Manhua() {
  const token = getServerToken();
  if (!token) redirect("/login?redirect=");

  return <ToonList token={token} menu={"MANHUA"} />;
}
