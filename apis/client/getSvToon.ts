import { ToonResponse, ToonResponseList } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getSvToonList = async (parmas: { [key: string]: any }) => {
  return await axiosInstanceServer.get<ToonResponseList>("/toons", {
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
