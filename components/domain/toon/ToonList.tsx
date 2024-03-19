"use client";

import { COLOR } from "@/constants/color";
import { useToonListQuery } from "@/hooks/apis/useToonListQuery";
import { useScroll } from "@/hooks/useScroll";
import classNames from "classnames";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { FadeLoader } from "react-spinners";
import ToonCard from "./ToonCard";
import "./index.scss";

interface ToonCardProps {
  token?: string;
}

const ToonList: React.FC<ToonCardProps> = ({ token }) => {
  const { handleScroll, scrollableRef } = useScroll();
  const { loadedToons, fetchNextPage, hasNextPage } = useToonListQuery({
    page: 1,
    size: null,
    search: "",
    days: null,
    toonMark: false,
    menu: null,
  });

  const flatLoadedToons = useMemo(() => loadedToons.flat(), [loadedToons]);

  return (
    <>
      {token ? (
        <div className={classNames("explore-plans__wrapper")}>
          <InfiniteScroll
            pageStart={1}
            hasMore={hasNextPage}
            loadMore={() => fetchNextPage()}
            loader={
              <FadeLoader
                key="loader"
                color={COLOR.PRIMARY}
                speedMultiplier={1}
                className={classNames("explore-plans__loader")}
              />
            }
          >
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
              {flatLoadedToons?.map(({ data }, index) => (
                <ToonCard key={index} toonResponseList={data} />
              ))}
            </ul>
          </InfiniteScroll>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ToonList;
