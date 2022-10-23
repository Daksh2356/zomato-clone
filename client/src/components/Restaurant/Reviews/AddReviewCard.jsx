import React, { useState } from "react";

// components
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const openModal = () => {
    // if (!localStorage.zomatoUser) {
    //   return alert("Please sign in for posting a review ");
    // }
    setIsOpen(true);
  };

  const getReviewType = (type) => {
    setType(type);
  };
  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
      <h3 className="font-medium text-xl">Rate your experience</h3>
      <div className="flex items-center gap-3 ">
        <div className="flex items-center gap-2">
          <input
            type={"radio"}
            id="dining"
            name="review"
            onChange={(each) => getReviewType(each.target.name)}
          />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type={"radio"}
            id="delivery"
            name="review"
            onChange={(each) => getReviewType(each.target.name)}
          />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <button className="text-zomato-400 text-left " onClick={openModal}>
        Write a review
      </button>
    </>
  );
};

export default AddReviewCard;
