import React from "react";
import { useParams } from "react-router-dom";
import classnames from "classnames";

const MenuCategory = (props) => {
  const { id } = useParams();
  return (
    <>
      <a
        className={classnames("py-2 px-1", {
          "text-zomato-600 bg-zomato-50 border-r-4 border-zomato-400":
            props.isActive,
        })}
        href={`/restaurant/${id}/order-online/#${props.target}`}
        onClick={props.onClickHandler}
        id={props.name}
      >
        {props.name} ({props.items.length})
      </a>
    </>
  );
};

export default MenuCategory;
