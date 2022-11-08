import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import Reactstars from "react-rating-stars-component";

// importing swiper package css
import "swiper/css";
import "swiper/css/navigation";

// components
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "./Reviews/ReviewCard";
import MapView from "./MapView";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getReview } from "../../redux/reducers/review/review.action";
import { getImage } from "../../redux/reducers/image/image.action";

const Overview = () => {
  const [restaurant, setRestaurant] = useState({ cuisine: [] });
  const [menuimages, setMenuImages] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) setRestaurant(reduxState);
  }, [reduxState]);

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenuImages(images);

        dispatch(getReview(reduxState?._id)).then((data) => {
          setReviews(data.payload.review);
        });
      });
    }
  }, [reduxState]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  const getLatLong = (mapaddress) => {
    return mapaddress.split(",").map((item) => parseFloat(item));
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row relative">
      <div className="w-full md:w-8/12">
        <h2 className="font-semibold text-lg my-4 md:text-xl">
          About this place
        </h2>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">Menu</h4>
          <Link to={`/restaurant/${id}/menu`}>
            <span className="flex items-center gap-1 text-zomato-400 ">
              See all menus <IoMdArrowDropright />
            </span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 my-6">
          <MenuCollection
            menuTitle="Menu"
            pages={menuimages.length}
            images={menuimages}
          />
        </div>
        <h4 className="font-medium text-lg my-4">Cuisines</h4>
        <div className="flex flex-wrap gap-3  ">
          {restaurant?.cuisine.map((cuisineName, index) => (
            <span
              className="border border-zomato-600 bg-zomato-100 font-semibold rounded-full px-3 py-2"
              key={index}
            >
              {cuisineName}
            </span>
          ))}
        </div>
        <div className="my-4">
          <h4 className="text-lg font-medium my-4 mb-2">Average Cost </h4>
          <h6>₹ 450 for one order (approx.)</h6>
          <small className="text-gray-400">
            Exclusive of applicable taxes and charges, if any
          </small>
        </div>
        <div className="flex flex-col-reverse">
          <div className="my-4">
            <h4 className="text-lg font-medium my-3">
              {restaurant.name} Reviews
            </h4>
            {/* <Reactstars
              count={5}
              onChange={(newRating) => console.log(newRating)}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            /> */}
            {reviews.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
          </div>
          <div className="my-4">
            <h4 className="font-medium text-lg">Similar Restaurants</h4>
            <div>
              <Swiper {...slideConfig}>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/3/307893/f606e2cc225f298f77b0bf9673e96dbe_featured_v2.jpg"
                    title="Bikkgane Biryani"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/2/18363082/029c99fa45772a9c162983d13861d864_featured_v2.jpg"
                    title="Behrouz Biryani"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/4/844/c2aff8d94b55d820df98053ce1b8d9cb_featured_v2.jpg"
                    title="Khan Chacha"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div
          className="my-4 flex flex-col w-full gap-4 md:hidden
         sticky "
        >
          <MapView
            address="C-3/4 Pitampura"
            title="McDonald's"
            phno="+9123878322"
            mapLocation={getLatLong("28.5805809666,77.3730812967")}
            LatAndLong="28.5805809666,77.3730812967"
          />
        </div>
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 flex-col gap-4 sticky rounded-xl top-20 p-4 bg-white shadow-md "
      >
        <MapView
          address="C-3/4 Pitampura"
          title="McDonald's"
          phno="+9123878322"
          mapLocation={getLatLong("28.5805809666,77.3730812967")}
          LatAndLong="28.5805809666,77.3730812967"
        />
      </aside>
    </div>
  );
};

export default Overview;
