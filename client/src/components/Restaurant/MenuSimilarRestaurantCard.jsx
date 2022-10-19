import React from "react";
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantCard = (props) => {
  return (
    <div className="mx-2 my-2">
      <div className="bg-white shadow rounded-md">
        <div className="w-full h-48">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full rounded-t-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="font-semibold text-lg">{props.title}</h3>
          <div className="flex items-center justify-start gap-4 text-sm">
            <span className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center text-sm gap-1 text-white px-2 py-1 rounded bg-green-500">
                4.0 <TiStar />
              </span>
              Dining
            </span>
            <span className="flex items-center justify-between gap-2 text-sm">
              <span className="flex items-center text-sm gap-1 text-white px-2 py-1 rounded bg-green-500">
                3.8 <TiStar />
              </span>
              Delivery
            </span>
          </div>
          <h4 className="font-medium text-md">Street Food, Beverages, Tea</h4>
        </div>
      </div>
    </div>
  );
};

export default MenuSimilarRestaurantCard;
