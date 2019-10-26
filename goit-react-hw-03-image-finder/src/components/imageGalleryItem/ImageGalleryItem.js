import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function ImageGalleryItem({ images, modal }) {
  return (
    <>
      {images.map((image) => {
        const { webformatURL, largeImageURL } = image;
        return (
          <li className="ImageGalleryItem" key={uuidv4()} onClick={modal}>
            <img
              src={webformatURL}
              alt={uuidv4()}
              className="ImageGalleryItem-image"
              data-image={largeImageURL}
            />
          </li>
        );
      })}
    </>
  );
}
