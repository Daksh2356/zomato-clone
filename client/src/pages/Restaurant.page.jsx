import React from "react";
import { Outlet, useParams, useLocation, Navigate } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/restaurant/${id}` === pathname) {
    return <Navigate to={`/restaurant/${id}/overview`} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default Restaurant;
