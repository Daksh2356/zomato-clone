import React from "react";

// components
import MenuCategory from "./MenuCategory";

const MenuListContainer = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 cursor-pointer">
        <MenuCategory
          name={props.name}
          items={props.items}
          target={props.target}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props.name}
        />
      </div>
    </>
  );
};

export default MenuListContainer;
