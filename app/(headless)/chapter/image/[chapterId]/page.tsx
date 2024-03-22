import {
  getSvChapterImageList,
  getSvPrevNext,
} from "@/apis/client/getSvChapterImage";
import ChapterImage from "@/app/(headless)/chapter/image/[chapterId]/_components/ChapterImage";

export default async function ChapterImagePage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);
  const { data: prevNextInfo } = await getSvPrevNext(chapterId);

  return (
    <ChapterImage
      chapterImageList={chapterImageList}
      prevNextInfo={prevNextInfo}
    />
  );
}
