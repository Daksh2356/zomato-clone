import React from "react";

// react-icons
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantInfo = (props) => {
  return (
    <div className="my-4">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">{props.name}</h1>
        <div className="flex items-center gap-6 text-xs md:text-base">
          <div className="flex items-center gap-2 ">
            <span className="flex items-center rounded gap-1 px-2 py-1 font-medium text-white bg-green-400 ">
              {props.restaurantRating} <TiStarFullOutline />
            </span>
            <span>
              <strong>100</strong>
              <p className="border-dashed border-b border-gray-500">
                Dining Reviews
              </p>
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="flex items-center rounded gap-1 px-2 py-1 font-medium text-white bg-green-400 ">
              {props.DeliveryRating} <TiStarFullOutline />
            </span>
            <span>
              <strong>100</strong>
              <p className="border-dashed border-b border-gray-500">
                Delivery Reviews
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-base md:text-lg text-gray-600 gap-2 md:block">
        <h3>{props.cuisine && props.cuisine.join(", ")}</h3>
        <h3 className="text-gray-400">{props.address}</h3>
        <div className="text-sm">
          <span className="text-yellow-500">Open Now</span> - 10 am - 8 pm
          ( Today )
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
