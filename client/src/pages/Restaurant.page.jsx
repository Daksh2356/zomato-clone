import React from "react";
import { Outlet } from "react-router-dom";
import RestaurantLayout from "../layouts/Restaurant.Layout";

const Restaurant = () => {
  return (
    <>
      <h2>Restaurant</h2>
      <Outlet />
    </>
  );
};

export default RestaurantLayout(Restaurant);
