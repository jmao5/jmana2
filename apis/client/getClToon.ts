import { ToonRequest } from "@/type/axios/toon";
import { axiosInstanceClient } from "../axiosInstanceClient";
import { ToonResponse } from "@/type/response";

export const getClToonList = async (query: ToonRequest) => {
  const { data } = await axiosInstanceClient.get<ToonResponse[]>("/api/toons", {
    authorization: false,
    params: { ...query },
  });

  return { data, currentPage: query.page, isLast: data.length === 0 };
};
