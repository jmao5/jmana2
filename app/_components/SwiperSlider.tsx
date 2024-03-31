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
    <div className="w-full p-2 gap-2 sm:gap-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
        className="pb-2 pt-0.5"
      >
        {toonResponseList.map((item, innerIndex) => (
          <SwiperSlide key={innerIndex}>
            <ToonCardInner item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
