import { ChapterTextResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getSvChapterText = async (id: number) => {
  return await axiosInstanceServer.get<ChapterTextResponse>(
    "/searchChapterText",
    {
      params: { id },
    }
  );
};
