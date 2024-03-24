import { useCallback, useEffect, useState } from "react";

const useScrollInterval = () => {
  const [scrollInterval, setScrollInterval] = useState<number | null>(null);

  const handleScrollInterval = useCallback(() => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  }, [scrollInterval]);

  const scrollToBottom = () => {
    if (scrollInterval == null) {
      setScrollInterval(window.setInterval(() => window.scrollBy(0, 2), 1));
    } else {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleScrollInterval);
    return () => {
      window.removeEventListener("beforeunload", handleScrollInterval);
      handleScrollInterval();
    };
  }, [handleScrollInterval]);

  return {
    scrollToBottom,
    handleScrollInterval,
  };
};

export default useScrollInterval;
