import React from "react";

const PhotoCollection = (props) => {
  const openImage = () => {
    props.setCurrentImage(props.index);
    props.openViewer();
  };
  return (
    <>
      <div className="flex flex-col h-48" onClick={openImage}>
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="menu photos"
            className="w-full h-full object-cover object-center transform transition duration-400 hover:scale-110 rounded-lg "
          />
        </div>
      </div>
    </>
  );
};

export default PhotoCollection;
