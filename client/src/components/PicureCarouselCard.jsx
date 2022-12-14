import React from "react";

// react-icons
import { IoMdArrowDropright } from "react-icons/io";

const PicureCarouselCard = (props) => {
  return (
    <>
      <div className="w-full h-72 lg:h-80 relative px-2 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover object-center transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 80%",
            }}
          />
        </div>
        <div className="absolute w-full left-5 bottom-2 text-white">
          <h4 className="z-10">{props.title}</h4>
          <h6 className="z-10 flex items-center">
            {props.places} <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PicureCarouselCard;
