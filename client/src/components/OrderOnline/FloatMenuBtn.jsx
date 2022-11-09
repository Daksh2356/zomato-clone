import React, { useState } from "react";

// react-icons
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

// components
import MenuListContainer from "./MenuListContainer";

const FloatMenuBtn = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <div className="fixed w-8/12 bottom-2 right-2 z-30 flex flex-col items-end gap-3 md:hidden">
      {isClicked && (
        <div className="p-3 bg-white h-48 overflow-y-scroll drop-shadow-md rounded-md">
          {props.menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={props.onClickHandler}
              selected={props.selected}
              target={index}
            />
          ))}
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="text-white bg-yellow-900 flex gap-2 items-center rounded-md px-3 py-1"
      >
        {isClicked ? <MdClose /> : <HiMenu />} Menu
      </button>
    </div>
  );
};

export default FloatMenuBtn;
