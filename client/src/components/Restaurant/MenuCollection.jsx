import React from "react";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurentImage] = useState(0);
  const openViewer = () => setIsMenuOpen(true);
  const closeViewer = () => setIsMenuOpen(false);

  console.log(props);
  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={props.images}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div
        className="w-32 h-32 flex flex-col md:w-48 md:h-48"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow:hidden rounded-lg">
          <img
            src={props.images[0]}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110 object-cover"
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages}</p>
        </div>
      </div>
    </>
  );
};

export default MenuCollection;
