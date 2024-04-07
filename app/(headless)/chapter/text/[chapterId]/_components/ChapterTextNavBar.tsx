import Icon from "@/components/common/Icon/Icon";
import { Toast } from "@/components/common/Toaster/customToast";
import useNavVisibleStore from "@/stores/isNavVisible";
import useRunStore from "@/stores/isRun";
import { ChapterPrevNextResponse } from "@/type/response";
import Link from "next/link";
import React, { MouseEventHandler, useEffect, useState } from "react";

const ChapterTextNavBar = ({
  prevNextInfo,
  chapterText,
  scrollToBottom,
}: {
  prevNextInfo: ChapterPrevNextResponse;
  chapterText: string;
  scrollToBottom: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { isNavVisible } = useNavVisibleStore();
  const { isRun, setIsRun } = useRunStore();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleRunClick = () => {
    setIsRun(!isRun);
    if (!isRun) {
      Toast.success("정주행 시작합니다.");
    }
  };

  useEffect(() => {
    setVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceList;
    }
  }, []);

  // 일시 중지 및 재개 기능 수정
  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
    } else {
      speakText(chapterText); // 일시 중지된 위치가 없으면 처음부터 읽습니다.
      setIsSpeaking(true);
    }
  };

  const speakText = (text: string) => {
    // 특정 텍스트를 읽도록 수정합니다.
    const lang = "ko-KR";
    const koreanOnlyText = text.replace(/[\u4e00-\u9fa5]/g, "");

    const utterThis = new SpeechSynthesisUtterance(koreanOnlyText);
    const kor_voice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
    );
    // 한국어 음성이 있고, 텍스트가 한국어인 경우에만 음성을 출력합니다.

    if (kor_voice) {
      utterThis.voice = kor_voice;
      window.speechSynthesis.speak(utterThis);
    } else {
      console.error("한국어 음성을 찾을 수 없거나, 한국어 텍스트가 아닙니다.");
    }
  };

  const setVoiceList = () => {
    setVoices(window.speechSynthesis.getVoices());
  };

  return (
    <div
      className={`${isNavVisible ? "block" : "hidden"}`}
      onClick={handleButtonClick}
    >
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 w-full h-12 flex items-center justify-center text-white">
        {prevNextInfo.cateTitle}
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
        <div className="flex justify-between w-[350px] lg:w-[450px]">
          {prevNextInfo.titlePrev && (
            <Link
              href={`/chapter/text/${prevNextInfo.titlePrev}`}
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
              scroll={false}
            >
              <Icon name="ARROW_LEFT" color="white" />
            </Link>
          )}
          <Link
            href={`/chapter/${prevNextInfo.toonId}`}
            className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
            scroll={false}
          >
            <Icon name="MORE_VERT" color="white" />
          </Link>
          <button
            className="relative h-12 w-12 rounded-full border-opacity-100"
            onClick={handleRunClick}
          >
            <div
              className="absolute inset-0 w-full h-full rounded-full animate-spin"
              style={{
                animationDuration: "3s",
                background:
                  "linear-gradient(45deg, rgb(4, 202, 252) 0%, rgb(19, 187, 252) 25%, rgb(76, 126, 252) 50%, rgb(127, 72, 252) 75%, rgb(148, 50, 252) 100%)",
              }}
            ></div>
            <div
              className={`absolute ${
                isRun ? "inset-10" : "inset-1"
              }  bg-black rounded-full`}
            ></div>
            <div className="relative w-12">
              {isRun ? (
                <Icon name="SPRINT" color="black" />
              ) : (
                <Icon name="DIRECTIONS_RUN" color="white" />
              )}
            </div>
          </button>
          <button
            className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
            onClick={scrollToBottom}
          >
            <Icon name="PLAY" color="white" isFilled={true} size="3xl" />
          </button>
          <button
            className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
            onClick={toggleSpeech}
          >
            {isSpeaking ? (
              <Icon name="MIC" isFilled={true} size="3xl" />
            ) : (
              <Icon name="MIC" color="white" isFilled={true} size="3xl" />
            )}
          </button>
          {prevNextInfo.titleNext && (
            <Link
              href={`/chapter/text/${prevNextInfo.titleNext}`}
              className="relative h-12 w-12 overflow-hidden rounded-full bg-black border border-solid border-opacity-10 border-white flex items-center justify-center"
              scroll={false}
            >
              <Icon name="ARROW_RIGHT" color="white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterTextNavBar;
