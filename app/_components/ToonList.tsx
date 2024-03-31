"use client";

import LoadingSpiner from "@/components/common/LoadingSpiner";
import { useToonListQuery } from "@/hooks/apis/useToonListQuery";
import { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroller";
import ToonCard from "./ToonCard";

interface ToonCardProps {
  token?: string;
  search?: string;
  toonMark?: boolean;
  menu?: string;
}

const ToonList: React.FC<ToonCardProps> = ({
  token,
  search,
  toonMark,
  menu,
}) => {
  // const { handleScroll, scrollableRef } = useScroll();
  const { loadedToons, fetchNextPage, hasNextPage, isLoading } = token
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useToonListQuery({
        page: 1,
        size: null,
        search: search ? search : "",
        days: null,
        toonMark: toonMark ? toonMark : false,
        menu: menu ? menu : search === "" ? "TOON" : "",
      })
    : {
        loadedToons: [],
        fetchNextPage: () => {},
        hasNextPage: false,
        isLoading: false,
      };

  const flatLoadedToons = useMemo(() => loadedToons.flat(), [loadedToons]);

  return (
    <>
      {token ? (
        isLoading ? (
          <LoadingSpiner />
        ) : (
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
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 mx-2 sm:mx-4 mt-2 sm:mt-4 mb-16">
              {flatLoadedToons?.map(({ data }, index) => (
                <ToonCard key={index} toonResponseList={data} />
              ))}
            </ul>
          </InfiniteScroll>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default ToonList;
