import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import ReviewCard from "./Reviews/ReviewCard";
import AddReviewCard from "./Reviews/AddReviewCard";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getReview } from "../../redux/reducers/review/review.action";

const Reviews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [reviews, setReviews] = useState([]);


  const updatedReviews = useSelector(
    (globalState) => globalState.review.reviews.review
  );

  useEffect(() => {
    dispatch(getReview(id)).then((data) => {
      setReviews(data.payload.review);
    });
  }, []);

  useEffect(() => {
    if (updatedReviews) {
      setReviews(updatedReviews);
    }
  }, [updatedReviews]);

  return (
    <div className="w-full h-full flex flex-col md:flex md:flex-row relative gap-5">
      <div className="w-full md:w-8/12 flex flex-col gap-3">
        <div className="md:hidden mb-4 flex flex-col gap-2">
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
