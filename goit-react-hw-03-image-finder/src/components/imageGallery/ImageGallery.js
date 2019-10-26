import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data, modal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={data} modal={modal} />
    </ul>
  );
};

export default ImageGallery;
