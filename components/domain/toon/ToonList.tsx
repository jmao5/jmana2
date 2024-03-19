"use client";

import { useToonListQuery } from "@/hooks/apis/useToonListQuery";
import InfiniteScroll from "react-infinite-scroller";
import ToonCard from "./ToonCard";

interface ToonCardProps {
  token?: string;
}

const ToonList: React.FC<ToonCardProps> = ({ token }) => {
  console.log("화면단에서 토큰 : ", token);
  const params = {
    page: 1,
    size: null,
    search: "",
    days: null,
    toonMark: false,
    menu: null,
  };

  const { loadedToons, fetchNextPage, hasNextPage } = useToonListQuery(params);

  return (
    <>
      {token ? (
        <InfiniteScroll
          pageStart={1}
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          // loader={<LoadingSpiner />}
        >
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {loadedToons?.map(({ data }, index) => (
              <ToonCard key={index} toonResponseList={data} />
            ))}
          </ul>
        </InfiniteScroll>
      ) : (
        ""
      )}
    </>
  );
};

export default ToonList;
