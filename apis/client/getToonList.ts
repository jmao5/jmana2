import { ToonResponseList } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";
import { axiosInstanceClient } from "../axiosInstanceClient";
import { ToonRequest } from "@/type/axios/toon";

export const getToonSeverList = async (parmas: { [key: string]: any }) => {
  return await axiosInstanceServer.get<ToonResponseList>("/toons", {
    params: parmas,
    authorization: false,
  });
};

export const getToonClList = async (parmas: ToonRequest) => {
  return await axiosInstanceClient.get<ToonResponseList>("/api/toons", {
    authorization: false,
    params: { ...parmas },
  });
};
