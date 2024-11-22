import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={s.imageGallery}>
    {images.map((image) => (
      <li
        className={s.ImageGalleryItem}
        key={image.id}
        onClick={() => onImageClick(image)}
      >
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;