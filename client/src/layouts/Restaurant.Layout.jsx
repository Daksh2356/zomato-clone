import React from "react";
import { useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton.jsx";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Restaurant/Cart/CartContainer";

// redux
import { useDispatch } from "react-redux";
// import { getImage } from "../redux/reducers/image/image.action";
import { getSpecificRestro } from "../redux/reducers/restaurant/restaurant.action";
import { getImage } from "../redux/reducers/image/image.action";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificRestro(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
        setRestaurant((prev) => ({
          ...prev,
          images: data.payload.images,
        }));
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo {...restaurant} />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky bg-white pt-2 z-10 top-0">
          <Tabs />
        </div>
        {Component}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;

// images: [
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/8/3258/2dda8ff0de3784942603dff9d4a65a69.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/8/3258/5ce65085a803c57a3b7f3e09203836b6.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/8/3258/baac382f7de060f40e88ee948b898b0d.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/8/3258/2a2d715e473f4c293edb20209436c8b2.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/8/3258/2dda8ff0de3784942603dff9d4a65a69.jpg",
//   },
// ],
// name: "Biryani Blues",
// cuisine: ["Chinese", "Street Food", "North Indian", "Beverages"],
// address: "NSP Pitampura",
// restaurantRating: 4.2,
// deliveryRating: 3.5,
