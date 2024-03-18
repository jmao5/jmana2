import { getToonSeverList } from "@/apis/client/getToonList";
import { getServerToken } from "@/utils/auth";
import Image from "next/image";

export default async function Home() {
  // const userId = getServerUserId();
  const token = getServerToken();
  const params = {
    size: 100,
  };
  const { data: toonList } = await getToonSeverList(params);

  return (
    <ul className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {toonList.map((item) => (
        <li key={item.id}>
          <a className="link block bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-32 relative">
              <Image src={item.imagePath} alt={item.title} layout="fill" />
            </div>
            <div className="p-2">
              <strong className="block text-md text-gray-900 truncate">
                {item.title}
              </strong>
              <span className="block text-gray-600 mt-1 text-sm truncate">
                {item.genre}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
