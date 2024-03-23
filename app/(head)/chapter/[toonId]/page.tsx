import { getSvChapterList } from "@/apis/client/getSvChapter";
import { getSvToonInfo } from "@/apis/client/getSvToon";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import Link from "next/link";
import { Suspense } from "react";
import ChapterToonInfo from "../_components/ChapterToonInfo";

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
        <ChapterToonInfo toonInfo={toonInfo} toonId={params.toonId} />
      </Suspense>
      <div className="px-2 sm:px-6">
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
                  <span className="text-red-500 ml-4">
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
