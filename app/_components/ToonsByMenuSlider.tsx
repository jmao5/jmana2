import { getSvToonList } from "@/apis/client/getSvToon";
import SwiperSlider from "./SwiperSlider";

interface ToonsByMenuSliderInterface {
  menu?: string;
  toonMark?: boolean;
}

export default async function ToonsByMenuSlider({
  menu,
  toonMark,
}: ToonsByMenuSliderInterface) {
  const params = {
    page: 1,
    size: 20,
    menu: menu,
    toonMark: toonMark,
  };
  const { data } = await getSvToonList(params);

  return <SwiperSlider toonResponseList={data} />;
}
