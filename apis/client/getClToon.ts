import { ToonRequest } from "@/type/axios/toon";
import { axiosInstanceClient } from "../axiosInstanceClient";
import { ToonResponseList } from "@/type/response";

export const getClToonList = async (query: ToonRequest) => {
  const { data } = await axiosInstanceClient.get<ToonResponseList>(
    "/api/toons",
    {
      authorization: false,
      params: { ...query },
    }
  );

  return { data, currentPage: query.page, isLast: data.length === 0 };
};
