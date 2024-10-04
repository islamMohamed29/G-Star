import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { saveRecentlyViewed } from "../RecentlyViewed/RecentlyViewed";

const Product = ({ product, currentColor, handleColorHover }) => {
  useEffect(() => {
    saveRecentlyViewed(product);
  }, [product]);
  return (
    <div className="col-md-3">
      <div className="product">
        <Link to={`/shop/product/${product.id}`}>
          <img
            src={`/products/product-1/${product.mainImage}`}
            alt={`${product.name}`}
            className="main-image"
          />
          <img
            src={`/products/product-1/${product.hoverImage}`}
            alt={`${product.name}`}
            className="hover-image"
          />
          <img
            src={`/products/product-1/${
              currentColor ? product.images[currentColor] : product.hoverImage
            }`}
            className="hover-image"
            alt={product.name}
          />
        </Link>
        <div className="product-status"></div>
        <div className="about-product">
          <div className="status">NEW</div>
          <div className="info">
            <div className="top-info">
              <div className="name">{product.name}</div>
              <div className="price">{product.price} EGP</div>
            </div>
            <div className="colors">
              <div className="list-colors">
                {Object.keys(product.images).map((color, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleColorHover(color)}
                    onMouseLeave={() => handleColorHover("")}
                  >
                    <Link href="#" className={`jeans_${color}`}></Link>
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
