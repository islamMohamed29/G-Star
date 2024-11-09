import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { saveRecentlyViewed } from "../RecentlyViewed/RecentlyViewed";

const Product = ({ product }) => {
  const productUrl = `/product/${product.id}?color=${encodeURIComponent(
    product.mainImage.color
  )}`;
  useEffect(() => {
    saveRecentlyViewed(product);
  }, [product]);

  const [currentColor, setCurrentColor] = useState("");

  const handleColorHover = (color) => {
    console.log(color, "color");
    setCurrentColor(color);
  };

  const getColorImage = (color) => {
    const colorInfo = product.colorPanel.find((panel) => panel.color === color);
    return colorInfo ? colorInfo.colorImage : product.hoverImage;
  };

  return (
    <div className="col-md-3">
      <div className="product">
        {/* <Link to={`/shop/product/${product.id}`}> */}
        <Link to={`/shop${productUrl}`}>
          <img
            src={product.mainImage.image}
            alt={`${product.name}`}
            className="main-image"
          />
          <img
            src={product.hoverImage}
            alt={`${product.name}`}
            className="hover-image"
          />
          {currentColor && (
            <img
              src={getColorImage(currentColor)}
              alt={product.name}
              className="hover-image"
            />
          )}
        </Link>
        <div className="product-status"></div>
        <div className="about-product">
          <div className="status">NEW</div>
          <div className="info">
            <div className="top-info">
              <div className="name">{product.name}</div>
              <div className="price">{product.price} €</div>
            </div>
            <div className="colors">
              <div className="list-colors">
                {product.colorPanel.map((panel, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleColorHover(panel.color)}
                    onMouseLeave={() => handleColorHover("")}
                  >
                    <Link
                      to="#"
                      className={`color-thumbnail ${
                        product.mainImage.color === panel.color
                          ? "selected"
                          : ""
                      }`}
                    >
                      <img
                        src={panel.thumbnail}
                        alt={panel.color}
                        className="color-image"
                      />
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
