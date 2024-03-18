import { ToonResponseList } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getToonList = async (parmas: { [key: string]: any }) => {
  return await axiosInstanceServer.get<ToonResponseList>("/toons", {
    params: parmas,
    authorization: false,
  });
};
