import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";
import relativeime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeime);

const ReviewCard = (props) => {
  const [user, setUser] = useState("Daksh");

  return (
    <div className="flex flex-col gap-3 my-3 pb-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg ">{user}</h3>
            <small className="text-gray-500">
              5 Reviews &#8226; 3 Followers
            </small>
          </div>
        </div>
        <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">
          Follow
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-white text-xs bg-green-700 gap-2 px-2 py-1 rounded-lg flex items-center">
            {props.rating}
            <TiStarFullOutline />
          </span>
          <h5 className="uppercase">
            {props.isRestaurantReview ? "Dining" : "Delivery"}
          </h5>
          <small className="text-gray-500 ">
            {dayjs(props.createdAt).fromNow()}
          </small>
        </div>
        <div className="w-full">
          <p className="w-full font-light text-gray-700">{props.reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
