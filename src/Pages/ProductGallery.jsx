import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductGallery.css";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].large);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={selectedImage}
          alt="Product"
          className={`main-image ${isZoomed ? "zoomed" : ""}`}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt=""
            onClick={() => setSelectedImage(image.large)}
            className={`thumbnail ${
              selectedImage === image.large ? "selected" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductGallery;
