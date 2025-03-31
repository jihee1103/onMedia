import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./imageCarousel.css";
import Banner from "./Banner";

const carouselData = [
  {
    src: "/src/assets/digitalAward/1.png",
    id: "k-digital",
  },
  {
    src: "/src/assets/mobileAward/1.png",
    id: "mobile",
  },
  {
    src: "/src/assets/mobileAward/2.png",
    id: "mobile",
  },
];

function ImageCarousel() {
  return (
    <Swiper
      className="bannerWrapper"
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {carouselData.map((data, index) => (
        <SwiperSlide key={index} className="banner">
          <Banner src={data.src} id={data.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
