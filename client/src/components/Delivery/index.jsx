import React, { useState, useEffect } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

// redux
import { useSelector } from "react-redux";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const reduxStorage = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxStorage && setRestaurantList(reduxStorage);
  }, [reduxStorage]);
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
