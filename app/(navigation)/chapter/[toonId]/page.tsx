import { getSvToonInfo } from "@/apis/client/getSvToon";
import classNames from "classnames";
import Image from "next/image";

export default async function PlanIdPage({
  params,
}: {
  params: { toonId: number };
}) {
  const { data } = await getSvToonInfo(params.toonId);

  // Example chapter data (replace with your actual chapter data)
  const chapters = [
    { id: 1, title: "1화", date: "2024.03.01" },
    { id: 2, title: "2화", date: "2024.03.08" },
    { id: 3, title: "3화", date: "2024.03.15" },
    { id: 4, title: "4화", date: "2024.03.22" },
    { id: 5, title: "5화", date: "2024.03.29" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-start justify-center bg-white p-6">
        <div className="w-1/4 flex-shrink-0">
          <Image
            src={data.imagePath}
            alt={data.title}
            className="rounded-lg shadow-md h-44"
            width={100}
            height={100}
          />
        </div>
        <div className="w-3/4 ml-6 flex-grow overflow-hidden">
          <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
          <p className="text-gray-600 text-sm mb-2">{data.genre}</p>
          <p className="text-base leading-relaxed line-clamp-4">
            {data.toonSummary}
          </p>
        </div>
      </div>

      <div className="mt-6 p-6">
        <ul className="divide-y divide-gray-300">
          {/* Map over the chapters array and render each chapter */}
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              className="py-4 flex justify-between items-center"
            >
              <a
                href={`#${chapter.id}`}
                className="flex-grow text-lg font-semibold text-blue-600 hover:underline"
              >
                {chapter.title}
              </a>
              <span className="text-gray-600 ml-4">{chapter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
