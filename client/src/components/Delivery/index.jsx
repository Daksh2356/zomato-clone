import React, { useState } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "831y812h132jb12jh1",
      isPro: true,
      isOffer: true,
      name: "Singla's Sweets, Bakery & Restaurant",
      restaurantReviewValue: 3.9,
      cuisine: [
        "South Indian",
        "Mithai",
        "Chinese",
        "Street Food",
        "Fast Food",
        "North Indian",
        "Beverages",
      ],
      averageCost: 200,
    },
    {
      _id: "9213912jcajsanjas",
      isPro: true,
      isOffer: false,
      name: "Prem Di Hatti",
      restaurantReviewValue: 4.2,
      cuisine: ["North Indian", "Street Food"],
      averageCost: 200,
    },
    {
      _id: "831y8knscajnjab12jh1",
      isPro: true,
      isOffer: true,
      name: "Singla's Sweets, Bakery & Restaurant",
      restaurantReviewValue: 3.9,
      cuisine: [
        "South Indian",
        "Mithai",
        "Chinese",
        "Street Food",
        "Fast Food",
        "North Indian",
        "Beverages",
      ],
      averageCost: 200,
    },
  ]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:font-semibold md:mt-8 md:text-3xl">
        Delivery Restaurants in NCR (Delhi)
      </h1>
      <div className="grid gap-0 sm:grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
