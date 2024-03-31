import useRunStore from "@/stores/isRun";
import { ChapterPrevNextResponse } from "@/type/response";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useScrollDoubleChk = (prevNextInfo: ChapterPrevNextResponse) => {
  const router = useRouter();
  const { isRun } = useRunStore();
  const [isBottom, setIsBottom] = useState(false);
  const [firstReachedBottom, setFirstReachedBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight } = document.documentElement;
      const reachedBottom = scrollTop + window.innerHeight >= scrollHeight;

      // 페이지가 처음으로 하단에 도달했을 때 firstReachedBottom을 true로 설정
      if (!firstReachedBottom && reachedBottom) {
        setFirstReachedBottom(true);
      }

      // 스크롤 위치가 다시 하단에 도달했을 때 isBottom을 true로 설정
      if (isRun && firstReachedBottom && reachedBottom) {
        setIsBottom(true);
        if (prevNextInfo.titleNext) {
          router.push(`/chapter/image/${prevNextInfo.titleNext}`);
        }
      } else {
        setIsBottom(false);
      }

      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    // 정리(clean-up) 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [firstReachedBottom, scrollPosition]);

  return { isBottom, firstReachedBottom, scrollPosition };
};

export default useScrollDoubleChk;
