import { getSvChapterList } from "@/apis/client/getSvChapter";
import { getSvToonInfo } from "@/apis/client/getSvToon";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ChapterPage({
  params,
}: {
  params: { toonId: number };
}) {
  const { data: toonInfo } = await getSvToonInfo(params.toonId);
  const { data: chapterList } = await getSvChapterList(params.toonId);

  return (
    <div className="w-full">
      <Suspense fallback={<LoadingSpiner />}>
        <div className="flex items-start justify-center bg-white p-6">
          <div className="w-1/4 flex-shrink-0">
            <Image
              src={toonInfo.imagePath}
              alt={toonInfo.title}
              className="rounded-lg shadow-md h-44"
              width={100}
              height={100}
            />
          </div>
          <div className="w-3/4 ml-6 flex-grow overflow-hidden">
            <h1 className="text-3xl font-semibold mb-2">{toonInfo.title}</h1>
            <p className="text-gray-600 text-sm mb-2">{toonInfo.genre}</p>
            <p className="text-base leading-relaxed line-clamp-4">
              {toonInfo.toonSummary}
            </p>
          </div>
        </div>
      </Suspense>
      <div className="mt-6 p-6">
        <ul className="divide-y divide-gray-300">
          {/* Map over the chapters array and render each chapter */}
          <Suspense fallback={<LoadingSpiner />}>
            {chapterList.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`/chapter/image/${chapter.id}`}
                  className="py-4 flex justify-between items-center"
                >
                  <span className="flex-grow text-lg font-semibold text-black">
                    {chapter.cateTitle}
                  </span>
                  <span className="text-gray-600 ml-4">
                    {chapter.uploadDate.toString()}
                  </span>
                </Link>
              </li>
            ))}
          </Suspense>
        </ul>
      </div>
    </div>
  );
}
