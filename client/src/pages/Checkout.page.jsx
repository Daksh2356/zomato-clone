import React, { useState } from "react";
import CheckoutLayout from "../layouts/Checkout.Layout";
import { BsShieldFillCheck } from "react-icons/bs";

// components
import FoodItem from "../components/Restaurant/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
      name: "Butter Pancakes with Bacon",
      rating: 4.5,
      price: 250,
      quantity: 3,
      totalPrice: 750,
      description: "Rashers and bourbon caramel sauce.",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
      name: "Amritsari Fish Tikka",
      rating: 5,
      price: 200,
      quantity: 4,
      totalPrice: 800,
      description:
        "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    },
  ]);

  const address = [
    {
      name: "home",
      address: "Simp Street, 123 Main Lane",
    },
    {
      name: "Work",
      address: "123 Main Street, CP",
    },
  ];

  const payNow = () => {
    let options = {
      key: "rzp_test_ibjyeOGDQGD7C0",
      name: "Zomato Master",
      amount:
        cart.reduce((price, currval) => price + currval.totalPrice, 0) * 100,
      currency: "INR",
      description: "Fast Delivery Options",
      handler: (data) => {
        alert("Payment successfull !!");
        console.log(data);
      },
      prefill: {
        name: "Daksh",
        email: "test@email.com",
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="my-3 flex flex-col items-center gap-2">
      <h1 className="text-xl font-bold md:text-2xl text-center">Checkout</h1>
      <div className="w-full  md:w-3/5 rounded-lg p-4 py-3 drop-shadow-2xl bg-white flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col items-center gap-3">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4> Domino's Pizza</h4>
            <small>GT WORLD MALL, MAGADI ROAD, NCR NOIDA</small>
          </div>
          <div className="my-4 h-32 px-4 overflow-y-scroll flex flex-col w-4/5 gap-3 lg:w-4/5">
            {cart.map((item, index) => (
              <FoodItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center w-full md:w-3/5">
            <h4 className="text-lg font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button
          onClick={payNow}
          className="flex items-center justify-center gap-2 bg-zomato-400 my-4 md:my-8 py-2 px-4 rounded-lg h-16 w-full md:w-4/5 text-white text-lg font-medium"
        >
          Pay Securely <BsShieldFillCheck />
        </button>
      </div>
    </div>
  );
};

export default CheckoutLayout(Checkout);
