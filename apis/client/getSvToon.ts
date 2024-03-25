import { ToonResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";
import { ToonRequest } from "@/type/axios/toon";

export const getSvToonList = async (parmas: ToonRequest) => {
  return await axiosInstanceServer.get<ToonResponse[]>("/toons", {
    params: parmas,
    authorization: false,
  });
};

export const getSvToonInfo = async (id: number) => {
  return await axiosInstanceServer.get<ToonResponse>("/searchToon", {
    params: { id },
    authorization: false,
  });
};
