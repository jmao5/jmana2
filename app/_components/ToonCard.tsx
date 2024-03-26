"use client";

import { ToonResponse } from "@/type/response";
import ToonCardInner from "./ToonCardInner";

const ToonCard: React.FC<{ toonResponseList: ToonResponse[] }> = ({
  toonResponseList,
}) => {
  return (
    <>
      {toonResponseList.map((item, innerIndex) => (
        <ToonCardInner key={innerIndex} item={item} />
      ))}
    </>
  );
};

export default ToonCard;
