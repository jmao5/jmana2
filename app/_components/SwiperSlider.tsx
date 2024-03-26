"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { ToonResponse } from "@/type/response";
import { Pagination } from "swiper/modules";
import ToonCardInner from "./ToonCardInner";

export default function SwiperSlider({
  toonResponseList,
}: {
  toonResponseList: ToonResponse[];
}) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="relative w-full pb-8"
    >
      {toonResponseList.map((item, innerIndex) => (
        <SwiperSlide key={innerIndex}>
          <ToonCardInner item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
