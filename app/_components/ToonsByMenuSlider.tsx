import { getSvToonList } from "@/apis/client/getSvToon";
import SwiperSlider from "./SwiperSlider";

interface ToonsByMenuSliderInterface {
  menu: string;
}

export default async function ToonsByMenuSlider({
  menu,
}: ToonsByMenuSliderInterface) {
  const params = {
    page: 1,
    size: 10,
    menu: menu,
  };
  const { data } = await getSvToonList(params);

  return <SwiperSlider toonResponseList={data} />;
}
