import React from "react";
import { useParams } from "react-router-dom";

// layouts
import HomepageLayout from "../layouts/Homepage.Layout";

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";
const Home = () => {
  const { type } = useParams();
  return (
    <div className="my-5 mb-20 md:mb-10">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night-life" && <NightLife />}
      {type === "nutrition" && <Nutrition />}
    </div>
  );
};

export default HomepageLayout(Home);
