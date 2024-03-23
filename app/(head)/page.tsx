import ToonList from "@/app/_components/ToonList";
import { getServerToken } from "@/utils/auth";

export default function Home({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const token = getServerToken();

  return <ToonList token={token} search={search} />;
}
