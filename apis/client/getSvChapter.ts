import { ChapterResponse, UserToonMarkCheckResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getSvChapterList = async (id: number) => {
  return await axiosInstanceServer.get<ChapterResponse[]>(
    "/searchChapterList",
    {
      params: { id },
    }
  );
};

export const getToonMarkAuthUser = async (toonId: number) => {
  return await axiosInstanceServer.get<UserToonMarkCheckResponse>(
    `/user/${toonId}/toonMark`
  );
};
