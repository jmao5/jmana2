import { ChapterResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getSvChapterList = async (id: number) => {
  return await axiosInstanceServer.get<ChapterResponse[]>(
    "/searchChapterList",
    {
      params: { id },
    }
  );
};
