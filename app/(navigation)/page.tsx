import { getToonList } from "@/apis/client/getToonList";
import { getServerToken } from "@/utils/auth";
import Image from "next/image";

export default async function Home() {
  // const userId = getServerUserId();
  const token = getServerToken();
  const params = {
    size: 100,
  };
  const { data: toonList } = await getToonList(params);

  return token ? (
    <div className="grid grid-cols-3 gap-4">
      {toonList.map((item) => (
        <div
          className="shadow-md p-4 bg-white rounded-lg w-full relative"
          key={item.id}
        >
          <div className="h-28">
            <Image src={item.imagePath} alt={item.title} fill />
          </div>
          <div className="h-4">
            <div className="pt-2 h-8">
              <div className="font-semibold text-xs leading-7">
                <div className="flex items-center space-x-1.5">
                  <span className="truncate">{item.title}</span>
                </div>
              </div>
              <div className="text-cyan-600 font-semibold leading-6">
                {item.genre}
              </div>
              <div className="flex text-base leading-6 text-blackAlpha-500"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
}
