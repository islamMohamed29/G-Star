import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../json/products";
import { useSelector } from "react-redux";
import ProductGallery from "./ProductGallery.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");


  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

    useEffect(() => {
      const foundProduct = products.find(
        (product) => product.id === Number(id)
      );
      console.log(foundProduct,'foundProduct')
      if (foundProduct && foundProduct.colorPanel && foundProduct.colorPanel.length > 0) {
        setProduct(foundProduct);
        const initialColor = foundProduct.colorPanel[0]?.color;
       
        setSelectedColor(initialColor);
        const initialImages = foundProduct.gallery[initialColor] || [];
        console.log(initialImages[0],'initialImages')
        setGalleryImages(initialImages);
        setSelectedImage(initialImages[0]?.large || "");
      }
    }, [id]);

  // function handleColorChange(color) {
  //   const colorImage = product[0].colorPanel.find(c => c.color === color)?.image;

  //   if (colorImage) {
  //     const updatedGallery = product[0].gallery.filter(img =>
  //       img.color === color
  //     );
      
  //     if (updatedGallery.length > 0) {
  //       setGalleryImages(updatedGallery);
  //       setSelectedColor(color);
  //       setSelectedImage(updatedGallery[0].large);
  //     }
  //   }
  // }
  function handleColorChange(color) {
    if (product && product.gallery && product.gallery[color]) {
      const updatedGallery = product.gallery[color] || [];
      setGalleryImages(updatedGallery);
      setSelectedColor(color);
      setSelectedImage(updatedGallery[0]?.large || "");
    }
  }

  return (
    <main className="product_details">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <div className="container-fluid">
          {product ? (
            <div className="row">
              <div className="col-md-8">
                <div className="preview_area">
                  <ProductGallery images={galleryImages} selectedImage={selectedImage} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="details_area">
                  <div className="name-product">{product.name}</div>
                  <div className="price-product">€{product.price} <span className="vat">including VAT</span></div>
                  <div className="colors-panel">
                    <p className="title">Available color(s)</p>
                    <p className="selected-color">Color<span className="color-name"> {selectedColor}</span></p>
                    <div className="panel">
                      <ul>
                      {product.colorPanel && product.colorPanel.map((color, index) => (
                      <li key={index}>
                        <img
                          src={color.image}
                          alt={color.color}
                          onClick={() => handleColorChange(color.color, color.image)}
                        />
                      </li>
                    ))}
                      </ul>
                    </div>
                  </div>
                  <div className="brand-product">{product.brand}</div>
                  <div className="category-product">{product.category}</div>
                  <div className="gender-product">{product.gender}</div>
                </div>
              </div>
            </div>
          ) : <div>Loading...</div>}
        </div>
      </div>
    </main>
  );
}
