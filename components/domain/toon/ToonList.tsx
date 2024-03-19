"use client";

import LoadingSpiner from "@/components/common/LoadingSpiner";
import { useToonListQuery } from "@/hooks/apis/useToonListQuery";
import classNames from "classnames";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroller";
import ToonCard from "./ToonCard";
import "./index.scss";

interface ToonCardProps {
  token?: string;
}

const ToonList: React.FC<ToonCardProps> = ({ token }) => {
  // const { handleScroll, scrollableRef } = useScroll();
  const { loadedToons, fetchNextPage, hasNextPage, isLoading } =
    useToonListQuery({
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
        isLoading ? (
          <LoadingSpiner />
        ) : (
          <div className={classNames("explore-plans__wrapper")}>
            <InfiniteScroll
              pageStart={1}
              hasMore={hasNextPage}
              loadMore={() => fetchNextPage()}
              // loader={
              //   <FadeLoader
              //     key="loader"
              //     color={COLOR.PRIMARY}
              //     speedMultiplier={1}
              //     className={classNames("explore-plans__loader")}
              //   />
              // }
            >
              <ul className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mx-2 md:mx-4 mt-2 md:mt-4">
                {flatLoadedToons?.map(({ data }, index) => (
                  <ToonCard key={index} toonResponseList={data} />
                ))}
              </ul>
            </InfiniteScroll>
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default ToonList;
