import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn.jsx";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }

    return;
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 py-2 ">
          <div className="pl-2 py-3">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="text-xl text-gray-400 font-light flex items-center gap-3 ">
              <AiOutlineCompass /> Live Track your order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="w-full h-screen overflow-y-screen flex gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList
                {...item}
                key={index}
                onClickHandler={onClickHandler}
                selected={selected}
              />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn onClickHandler={onClickHandler} selected={selected} />
    </>
  );
};

export default OrderOnline;
