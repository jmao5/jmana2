import ToonCard from "@/app/_components/ToonList";
import { getServerToken } from "@/utils/auth";

export default function Home({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const token = getServerToken();

  // const params = {
  //   size: 100,
  // };
  // const { data } = await getToonSeverList(params);

  return <ToonCard token={token} search={search} />;
}
