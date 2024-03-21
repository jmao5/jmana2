import { getSvChapterImageList } from "@/apis/client/getSvChapterImage";
import LoadingSpiner from "@/components/common/LoadingSpiner";
import ChapterImage from "@/components/domain/chapterImage/ChapterImage";
import { Suspense } from "react";

export default async function ChapterImagePage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);

  return (
    <Suspense fallback={<LoadingSpiner />}>
      {chapterImageList.map((image, index) => (
        <ChapterImage chapterImage={image} key={index} />
      ))}
    </Suspense>
  );
}
