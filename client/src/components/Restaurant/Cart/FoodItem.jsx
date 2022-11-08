import React from "react";
import { BsTrashFill } from "react-icons/bs";

// redux
import { useDispatch } from "react-redux";
import {
  increement_qty,
  decreement_qty,
  deleteFromCart,
} from "../../../redux/reducers/cart/cart.action";

const FoodItem = (props) => {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => {
    dispatch(deleteFromCart(props._id));
  };

  const increement = () => {
    dispatch(increement_qty(props._id));
  };
  const decreement = () => {
    if (props.quantity === 1) return;
    dispatch(decreement_qty(props._id));
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h5>{props.name}</h5>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <small>₹ {parseInt(props.price) * props.quantity}</small>
            <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1 ">
              <button
                className="p-1 bg-zomato-400 text-white rounded"
                onClick={decreement}
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                className="p-1 bg-zomato-400 text-white rounded"
                onClick={increement}
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill
            onClick={deleteFoodFromCart}
            className="text-zomato-400 text-lg md:text-xl
             cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default FoodItem;
