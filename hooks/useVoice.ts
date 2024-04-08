import { useEffect, useState } from "react";
import NoSleep from "nosleep.js";

const useVoice = (chapterText: string) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPause, setIsPauseg] = useState(false);
  const noSleep = new NoSleep();

  useEffect(() => {
    setVoiceList();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoiceList;
    }
  }, []);

  const setVoiceList = () => {
    setVoices(window.speechSynthesis.getVoices());
  };

  // 일시 중지 및 재개 기능 수정
  const toggleSpeech = () => {
    if (isSpeaking) {
      // window.speechSynthesis.pause();
      window.speechSynthesis.cancel();
      setIsPauseg(true);
      setIsSpeaking(false);
      noSleep.enable();
    } else {
      // if (isPause) {
      //   window.speechSynthesis.resume();
      // } else {
      speakText(chapterText); // 일시 중지된 위치가 없으면 처음부터 읽습니다.
      // }
      setIsSpeaking(true);
      noSleep.disable();
    }
  };

  const speakText = (text: string) => {
    // 특정 텍스트를 읽도록 수정합니다.
    const lang = "ko-KR";
    const replaceText = text.replace(/[\u4e00-\u9fa5]/g, "");
    const utterances = replaceText
      .split(".")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        return new SpeechSynthesisUtterance(line);
      });

    utterances.forEach((utterance) => {
      window.speechSynthesis.speak(utterance);
    });

    const kor_voice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
    );
    // 한국어 음성이 있고, 텍스트가 한국어인 경우에만 음성을 출력합니다.

    if (kor_voice) {
      utterances.forEach((utterance, index) => {
        if (index === 0) utterance.voice = kor_voice;
        window.speechSynthesis.speak(utterance);
      });
    } else {
      console.error("한국어 음성을 찾을 수 없거나, 한국어 텍스트가 아닙니다.");
    }
  };

  // SSR 우회
  const location =
    typeof window === "undefined" ? { pathname: "" } : window.location;

  // 현재 페이지 내에서 URL 변경 시 음성 중지
  useEffect(() => {
    if (!window.speechSynthesis) {
      return;
    }

    if (!window.speechSynthesis.speaking) {
      return;
    }
    noSleep.disable();
    window.speechSynthesis.cancel();
  }, [location.pathname, noSleep]);

  return { isSpeaking, toggleSpeech };
};

export default useVoice;
