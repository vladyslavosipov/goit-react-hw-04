import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  if (!image) {
    return null;
  }

  const imageUrl = image.urls?.regular;
  const authorName = image.user?.name || "Unknown author";
  const description =
    image.description || image.alt_description || "No description available";

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.ImageModal}
      overlayClassName={s.Overlay}
      ariaHideApp={false}
    >
      <p className={s.description}>{description}</p>
      {imageUrl ? (
        <img
          className={s.image}
          src={imageUrl}
          alt={image.alt_description || "No description available"}
        />
      ) : (
        <div>Image not available</div>
      )}

      <p>Author: {authorName}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;