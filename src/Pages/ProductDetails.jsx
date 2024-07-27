import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../json/products";
import { useSelector } from "react-redux";
import ProductGallery from "./ProductGallery.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

  useEffect(() => {
    const foundProduct = products.filter(
      (product) => product.id === Number(id)
    );
    setProduct(foundProduct);
    console.log(id, "id");
    console.log(foundProduct, "foundProduct");
  }, [id]);

  return (
    <main className="product_details">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <div className="container-fluid">
          {product.length > 0 && product !== null && (
            <div className="row">
              <div className="col-md-8">
                <div className="preview_area">
                  <ProductGallery images={product[0].gallery} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="details_area">
                  <div className="name-product">{product[0].name}</div>
                  <div className="price-product">{product[0].price}</div>
                  <div className="brand-product">{product[0].brand}</div>
                  <div className="category-product">{product[0].category}</div>
                  <div className="gender-product">{product[0].gender}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
