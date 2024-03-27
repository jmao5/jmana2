import { getSvChapterList } from "@/apis/client/getSvChapter";
import { getSvToonInfo } from "@/apis/client/getSvToon";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import Link from "next/link";
import { Suspense } from "react";
import ChapterToonInfo from "../_components/ChapterToonInfo";
import Icon from "@/components/common/Icon/Icon";

export default async function ChapterPage({
  params,
}: {
  params: { toonId: number };
}) {
  const { data: toonInfo } = await getSvToonInfo(params.toonId);
  const { data: chapterList } = await getSvChapterList(params.toonId);

  return (
    <div className="w-full">
      <ChapterToonInfo toonInfo={toonInfo} toonId={params.toonId} />
      <ul className="px-2 sm:px-6 mb-16">
        {chapterList.map((chapter) => (
          <li key={chapter.id}>
            <Link
              href={`/chapter/image/${chapter.id}`}
              className={`flex items-center justify-between px-6 py-2 transition-colors hover:bg-gray-200 ${
                chapter.updatedAt && "bg-zinc-100"
              } rounded-lg border border-gray-300`}
              scroll={false}
            >
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-black">
                  {chapter.cateTitle}
                </h2>
                <p className="text-stone-400 text-sm">
                  {chapter.uploadDate.toString()}
                </p>
              </div>
              <Icon
                name="ARROW_RIGHT"
                size="lg"
                classNameList={["text-sky-500"]}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
