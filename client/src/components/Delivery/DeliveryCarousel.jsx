import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// importing swiper package css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// components
import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
      title: "Sandwich",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      title: "Thali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/7b0966fb0ab1c60888a652b2eaf826da1632716547.png",
      title: "Salad",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
      title: "Chole Bhature",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      title: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
      title: "Coffee",
    },
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Pagination, Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className="text-xl mt-4 mb-2 md:font-semibold md:mt-8 md:text-3xl">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {categories.map((food, index) => (
          <DeliveryCategoryCard key={index} {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {categories.map((food, index) => (
            <SwiperSlide key={index}>
              <DeliveryCategoryCard {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryCarousel;
