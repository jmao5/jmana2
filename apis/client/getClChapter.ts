import { UserToonMarkCheckResponse } from "@/type/response";
import { axiosInstanceClient } from "../axiosInstanceClient";

export const toggleIsToonMark = (toonId: number) => {
  return axiosInstanceClient.put(`/api/user/${toonId}/toonMark`);
};

export const getToonClMarkAuthUser = (toonId: number) => {
  return axiosInstanceClient.get<UserToonMarkCheckResponse>(
    `/api/user/${toonId}/toonMark`
  );
};
