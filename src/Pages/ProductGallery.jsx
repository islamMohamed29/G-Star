import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductGallery.css";
import ImageWithLoader from "../components/Loading/ImageWithLoader";

const ProductGallery = ({ images, selectedImage }) => {
  const [currentImage, setCurrentImage] = useState(selectedImage);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  useEffect(() => {
    setCurrentImage(selectedImage);
  }, [selectedImage]);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={currentImage}
          alt="Product"
          className={`main-image ${isZoomed ? "zoomed" : ""}`}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        />
        {/* <ImageWithLoader
          src={currentImage}
          alt={"Product"}
          isZoomed={isZoomed} 
          handleMouseMove={handleMouseMove}
          handleClick={handleClick}
          // className={`main-image ${isZoomed ? "zoomed" : ""}`}
        /> */}
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt=""
            onClick={() => setCurrentImage(image.large)}
            className={`thumbnail ${
              currentImage === image.large ? "selected" : ""
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
