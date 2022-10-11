import React, { useState } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
// import RestuarantCard from "./RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:font-semibold md:mt-8 md:text-3xl">
        Delivery Restaurants in NCR (Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {/* {restaurantList.map((restaurant) => (
          <RestuarantCard {...restaurant} key={restaurant._id} />
        ))} */}
      </div>
    </>
  );
};

export default Delivery;
