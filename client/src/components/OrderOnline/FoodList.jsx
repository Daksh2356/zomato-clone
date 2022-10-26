import React from "react";

// components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2
          id={props.target}
          className="w-full top-0 bg-white px-2 py-1 sticky z-10 font-semibold text-gray-800 text-xl"
        >
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((each, index) => (
            <FoodItem {...each} key={index} _id={each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
