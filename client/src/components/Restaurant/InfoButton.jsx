import React from "react";
import classnames from "classnames";

const InfoButton = ({ children, ...props }) => {
  return (
    <button
      className={classnames(
        "flex items-center px-4 py-2 gap-4 border border-black rounded-lg",
        {
          "bg-zomato-300 text-white border-none": props.isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

export default InfoButton;
