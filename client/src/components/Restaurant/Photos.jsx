import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "./PhotoCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/2/312902/8759dd35a3f20e43b35dce6dd5d78f07.jpeg",
    "https://b.zmtcdn.com/data/pictures/2/312902/de221ff1a8456f6b108f8d3cf2d560ed.png",
    "https://b.zmtcdn.com/data/pictures/3/7713/f5ed8ef544553bbfaf3eb32fbc6cbec2.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/b00/1ab882c4e6a30babe4f45277f8daab00_1490925811.jpg",
    "https://b.zmtcdn.com/data/pictures/3/7713/6e16c01bb70e6f6f8c00c4329650318b.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/3/7713/87509fc7a73ddb8fada04f9848a1ea34.jpg",
    "https://b.zmtcdn.com/data/pictures/2/312902/42f409df2e0ace38adca7939f3f65c86.jpg",
    "https://b.zmtcdn.com/data/pictures/3/7713/b3ef6b730e4104e586662fc149801e56.jpg",
    "https://b.zmtcdn.com/data/pictures/2/312902/11e02e347072f57156096363299686ec.png",
    "https://b.zmtcdn.com/data/pictures/chains/3/7713/7460a0de73b54434a7d703910ec2519a.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openViewer = () => setIsMenuOpen(true);
  const closeViewer = () => setIsMenuOpen(false);

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
