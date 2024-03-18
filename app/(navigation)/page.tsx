import { getToonSeverList } from "@/apis/client/getToonList";
import ToonCard from "@/components/domain/toon/ToonCard";
import { getServerToken } from "@/utils/auth";

export default async function Home() {
  const token = getServerToken();
  const params = {
    size: 100,
  };
  const { data } = await getToonSeverList(params);

  return (
    <ul className="grid grid-cols-3 md:grid-cols-4 gap-4">
      <ToonCard toonList={data} token={token} />
    </ul>
  );
}
