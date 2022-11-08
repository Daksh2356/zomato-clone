import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";

// components
// import FoodList from "../../OrderOnline/FoodList";
import FoodItem from "./FoodItem";

const CartData = ({ toggle }) => {
  const cart = useSelector((globalState) => globalState.cart.cart);
  const navigate = useNavigate();
  const continueToCheckout = () => navigate("/checkout/orders");
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1" onClick={toggle}>
            {cart.length} Items <IoMdArrowDropup />
          </small>
          <h4>
            {cart.reduce((acc, currVal) => acc + currVal.totalPrice, 0)}
            <sub> (plus tax)</sub>
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 px-3 py-1 text-white bg-zomato-400 rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};
const CartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((globalState) => globalState.cart.cart);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);
  return (
    <>
      {cart.length && (
        <>
          {isOpen && (
            <div className="w-full overflow-y-scroll h-48 bg-white z-20 p-2 bottom-14 px-3 fixed">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="font-semibold text-xl">Your orders</h3>
                <IoCloseSharp onClick={closeCart} className="cursor-pointer" />
              </div>
              <hr className="my-2" />
              <div className="flex flex-col gap-2 md:px-20">
                {cart.map((food, index) => (
                  <FoodItem key={index} {...food} />
                ))}
              </div>
            </div>
          )}

          <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0 mx-auto lg:px-20">
            <CartData toggle={toggleCart} />
          </div>
        </>
      )}
    </>
  );
};

export default CartContainer;
