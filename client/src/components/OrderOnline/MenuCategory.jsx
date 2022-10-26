import React from "react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

const MenuCategory = (props) => {
  const { id } = useParams();
  return (
    <>
      <div
        className={classnames("py-2 px-1", {
          "text-zomato-600 bg-zomato-50 border-r-4 border-zomato-400":
            props.isActive,
        })}
      >
        <Link
          to={`/restaurant/${id}/order-online/#${props.target}`}
          id={props.name}
          onClick={props.onClickHandler}
        >
          {props.name} ({props.items.length})
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
