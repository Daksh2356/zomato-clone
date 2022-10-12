import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PicureCarouselCard";

// importing swiper package css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DiningCarousel = () => {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/b64b5994cba7120fd820351832bfc2b4_1665491156.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665492991.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665493873.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/aab50558180da225560f5aaa4dbe7d30_1665496174.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/b64b5994cba7120fd820351832bfc2b4_1665491156.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/b64b5994cba7120fd820351832bfc2b4_1665491156.jpg",
      title: "Great Buffets",
      places: "11 places",
    },
  ]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  return (
    <div className="w-full">
      <Swiper {...slideConfig}>
        {dining.map((item, index) => (
          <SwiperSlide key={index}>
            <PictureCarouselCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiningCarousel;
