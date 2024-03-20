import { getSvChapterImageList } from "@/apis/client/getSvChapterImage";
import Image from "next/image";

export default async function ChapterImagePage({
  params,
}: {
  params: { chapterId: number };
}) {
  const { chapterId } = params;
  const { data: chapterImageList } = await getSvChapterImageList(chapterId);

  return (
    <>
      {chapterImageList.map((images, index) => (
        <div className="w-full h-screen relative" key={index}>
          <Image
            alt={images.id.toString()}
            src={images.toonImageUrl}
            layout="fill"
            objectFit="contain"
            // blurDataURL={BLUR_IMAGE_SRC}
            // placeholder="blur"
            // unoptimized={true}
          />
        </div>
      ))}
    </>
  );
}
