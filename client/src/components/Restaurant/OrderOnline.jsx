import React, { useState, useEffect } from "react";

// react-icons
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn.jsx";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

// redux
import { getMenu } from "../../redux/reducers/food/food.action.js";
import { useDispatch, useSelector } from "react-redux";

const OrderOnline = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  const restaurant = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    restaurant &&
      dispatch(getMenu(restaurant.menu)).then((data) => {
        setMenu(data.payload.menus.menus);
      });
  }, [restaurant]);

  return (
    <>
      <div className="w-full flex items-start">
        <aside className="sticky top-16 hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 w-1/4 h-screen">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              target={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:2-3/4 sticky top-16 overflow-auto h-screen ">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="text-xl text-gray-400 font-light flex items-center gap-3 ">
              <AiOutlineCompass /> Live Track your order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex overflow-y-screen flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList {...item} key={index} target={index} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
};

export default OrderOnline;
