import React, { useState } from "react";

// components
import ReviewCard from "./Reviews/ReviewCard";
import AddReviewCard from "./Reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 3,
      isRestaurantReview: true,
      createdAt: "Fri Oct 21 2022 13:12:33 GMT+0530 (India Standard Time)",
      reviewText: "Nice staff and food",
    },
    {
      rating: 4.5,
      isRestaurantReview: true,
      createdAt: "Fri Oct 23 2022 15:00:00 GMT+0530 (India Standard Time)",
      reviewText: "Very good experience",
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col md:flex md:flex-row relative gap-5">
      <div className="w-full md:w-8/12 flex flex-col gap-3">
        <div className="md:hidden mb-4">
          <AddReviewCard />
        </div>
        {reviews.map((review, index) => (
          <ReviewCard {...review} key={index} />
        ))}
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 flex-col gap-4 sticky rounded-xl top-20 p-4 bg-white shadow-md "
      >
        <AddReviewCard />
      </aside>
    </div>
  );
};

export default Reviews;
