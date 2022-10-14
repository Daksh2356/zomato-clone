import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PicureCarouselCard";

// importing swiper package css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NightLifeCarousel = () => {
  const [nightlife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/a42c79d7300c0ec4e23e4dedfd5826bf_1665493873.jpg",
      title: "Night Hunters",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/5/20209465/ac91cf5d656e00758bf03054d2a02631.jpg",
      title: "Night Hunters",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png",
      title: "Night Hunters",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/20061990/aecd3a161472ce2bf214e0d0bc4b4038.jpeg",
      title: "Night Hunters",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/7/18925817/362a5e18494519dcf1e64b84b93f5d5e.jpg",
      title: "Night Hunters",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/312902/2e3a98229ef00de30a9c7ad867bc0d5a.png",
      title: "Night Hunters",
      places: "7 places",
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
        {nightlife.map((item, index) => (
          <SwiperSlide key={index}>
            <PictureCarouselCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NightLifeCarousel;
