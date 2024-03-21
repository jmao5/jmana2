import { ChapterImageResponse, ChapterPrevNextResponse } from "@/type/response";
import { axiosInstanceServer } from "../axiosInstanceServer";

export const getSvChapterImageList = async (id: number) => {
  return await axiosInstanceServer.get<ChapterImageResponse[]>(
    "/searchChapterImageList",
    {
      params: { id },
    }
  );
};

export const getSvPrevNext = async (id: number) => {
  return await axiosInstanceServer.get<ChapterPrevNextResponse>(
    "/searchPrevNext",
    {
      params: { id },
    }
  );
};
