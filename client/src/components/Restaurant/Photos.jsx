import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "./PhotoCollection";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImage } from "../../redux/reducers/image/image.action";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openViewer = () => setIsMenuOpen(true);
  const closeViewer = () => setIsMenuOpen(false);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          disableScroll={false}
          currentIndex={currentImage}
          onClose={closeViewer}
        />
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            image={photo}
            index={index}
            key={index}
            openViewer={openViewer}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
};

export default Photos;
