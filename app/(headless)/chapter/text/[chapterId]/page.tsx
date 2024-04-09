import { getSvPrevNext } from "@/apis/client/getSvChapterImage";
import ChapterText from "./_components/ChapterText";
import { getSvChapterText } from "@/apis/client/getSvChapterText";
import { getServerToken } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function ChapterTextPage({
  params,
  searchParams,
}: {
  params: { chapterId: number };
  searchParams: { toonId: number };
}) {
  const token = getServerToken();
  if (!token) redirect("/login");

  const { chapterId } = params;
  const { data: chapterText } = await getSvChapterText(chapterId);
  const { data: prevNextInfo } = await getSvPrevNext(chapterId);

  return (
    <ChapterText
      chapterText={chapterText}
      prevNextInfo={prevNextInfo}
      chapterId={chapterId}
      toonId={searchParams.toonId}
    />
  );
}
