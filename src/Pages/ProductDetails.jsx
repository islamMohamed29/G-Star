import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../json/products";
import { useDispatch, useSelector } from "react-redux";
import ProductGallery from "./ProductGallery.jsx";
import SvgPant from "../components/Shop/SvgPant.jsx";
import RecentlyViewed from "../components/RecentlyViewed/RecentlyViewed.jsx";
import { addItem } from "../redux/slices/cart-slice.js";
import { notifyError, notifyWarning } from "../dependencies/Notification.js";
import QuantityIncrementAnimation from "../dependencies/QuantityIncrementAnimation";
import Resources from "../locales/Resources.json";

export default function ProductDetails() {
  const detailsRef = useRef(null);
  let dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColorImage, setSelectedColorImage] = useState(null);
  const [lowStockMessage, setLowStockMessage] = useState("");

  const [selectedSize, setSelectedSize] = useState(null);
  const cartData = useSelector((state) => state.cart.cartItems);
  console.log(cartData, "cartData");
  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      const initialColor = foundProduct.colorPanel[0]?.color;
      setGalleryImages(foundProduct.gallery[initialColor] || []);
      setSelectedImage(galleryImages[0]?.large || "");
    }
  }, [id]);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === Number(id));

    if (
      foundProduct &&
      foundProduct.colorPanel &&
      foundProduct.colorPanel.length > 0
    ) {
      setProduct(foundProduct);
      const initialColor = foundProduct.colorPanel[0]?.color;

      setSelectedColor(initialColor);
      const initialImages = foundProduct.gallery[initialColor] || [];
      setGalleryImages(initialImages);
      setSelectedImage(initialImages[0]?.large || "");
      setSelectedColorImage(foundProduct.colorPanel[0]?.colorImage);
    }
  }, [id]);

  function handleColorChange(color, image) {
    if (product && product.gallery && product.gallery[color]) {
      const updatedGallery = product.gallery[color] || [];
      setGalleryImages(updatedGallery);
      setSelectedColor(color);
      setSelectedImage(updatedGallery[0]?.large || "");
      setSelectedColorImage(image);
      setSelectedSize(null);
    }
  }
  const [showAnimation, setShowAnimation] = useState(false);
  const handleAddToCart = () => {
    if (!selectedSize) {
      notifyWarning(Resources["selectSizeFirst"][currentLanguage]);
      return;
    }
    const selectedColorStock = product.colorPanel.find(
      (color) => color.color === selectedColor
    )?.stockBySize;

    if (!selectedColorStock || !selectedColorStock[selectedSize]) {
      alert("عذراً، هذا المقاس غير متوفر حالياً.");
      return;
    }
    const availableStock = selectedColorStock[selectedSize];
    // const availableStock = product.stockBySize[selectedSize];
    if (!availableStock || availableStock <= 0) {
      alert("عذراً، هذا المقاس غير متوفر حالياً.");
      return;
    }

    const existingCartItem = cartData.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingCartItem) {
      if (existingCartItem.quantity >= availableStock) {
        notifyWarning(
          `${Resources["cannotAddMore"][currentLanguage]} + ${availableStock}.`
        );
        return;
      }
      setShowAnimation(false);
      setTimeout(() => setShowAnimation(true), 10);
    }

    dispatch(
      addItem({
        ...product,
        selectedSize,
        selectedColor,
        quantity: 1,
        availableStock,
      })
    );
  };
  function handleSizeChange(size) {
    setSelectedSize(size);

    const selectedColorStock = product.colorPanel.find(
      (color) => color.color === selectedColor
    )?.stockBySize;
    console.log(selectedColorStock, "selectedColorStock");

    if (selectedColorStock && selectedColorStock[size] <= 2) {
      setLowStockMessage(
        <>
          The available quantity of this size <strong>{size}</strong> for the{" "}
          <strong>{selectedColor}</strong> color is only{" "}
          <strong>{selectedColorStock[size]}</strong>!
        </>
      );
    } else {
      setLowStockMessage(""); // عدم عرض الرسالة إذا كانت الكمية أكبر من 2
    }
  }
  return (
    <main className="product_details">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <div className="container-fluid">
          {product ? (
            <div className="row">
              <div className="col-md-8 p-0">
                <div className="preview_area">
                  <ProductGallery
                    images={galleryImages}
                    selectedImage={selectedImage}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="details_area" ref={detailsRef}>
                  <div className="name-product">{product.name}</div>
                  <div className="price-product">
                    €{product.price} <span className="vat">including VAT</span>
                  </div>
                  <div className="colors-panel my-20">
                    <p className="special-gray-title-14 m-0">
                      Available color(s)
                    </p>
                    <p className="special-gray-title-14">
                      Color <span className="color-name">{selectedColor}</span>
                    </p>
                    <div className="panel">
                      <ul>
                        {product.colorPanel &&
                          product.colorPanel.map((color, index) => (
                            <li
                              className={
                                color.colorImage === selectedColorImage
                                  ? "selected-color"
                                  : ""
                              }
                              key={index}
                            >
                              <img
                                src={color.colorImage}
                                alt={color.color}
                                onClick={() =>
                                  handleColorChange(
                                    color.color,
                                    color.colorImage
                                  )
                                }
                              />
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="sizing-area">
                    <p className="special-gray-title-14 ">Sizing</p>
                    <p className="size special-gray-title-13 m-0">size</p>
                    <div className="panel">
                      <ul className="my-6">
                        {/* {product.sizes &&
                          product.sizes.map((size, index) => (
                            <li
                              className={
                                selectedSize === size ? "selected-size" : ""
                              }
                              onClick={() => setSelectedSize(size)}
                              key={index}
                            >
                              {size}
                            </li>
                          ))} */}
                        {/* {product.sizes &&
                          product.sizes.map((size, index) => {
                            const isAvailable =
                              product.stockBySize &&
                              product.stockBySize[size] > 0;
                            return (
                              <li
                                className={`size-item ${
                                  selectedSize === size ? "selected-size" : ""
                                } ${!isAvailable ? "disabled-size" : ""}`}
                                onClick={() =>
                                  isAvailable && setSelectedSize(size)
                                }
                                key={index}
                                aria-disabled={!isAvailable}
                              >
                                {size}
                              </li>
                            );
                          })} */}
                        {selectedColor &&
                          product.colorPanel.find(
                            (color) => color.color === selectedColor
                          )?.stockBySize &&
                          Object.keys(
                            product.colorPanel.find(
                              (color) => color.color === selectedColor
                            ).stockBySize
                          ).map((size, index) => {
                            const availableStock = product.colorPanel.find(
                              (color) => color.color === selectedColor
                            ).stockBySize[size];
                            const isAvailable = availableStock > 0;
                            return (
                              <li
                                key={index}
                                className={`size-item ${
                                  selectedSize === size ? "selected-size" : ""
                                } ${!isAvailable ? "disabled-size" : ""}`}
                                onClick={() =>
                                  isAvailable && handleSizeChange(size)
                                }
                                aria-disabled={!isAvailable}
                              >
                                {size}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                  <div className="is-available">
                    <p>Product is available</p>
                  </div>
                  <div className="low_stock_msg">
                    <p>{lowStockMessage}</p>
                  </div>
                  <div className="buttons-area">
                    <button
                      onClick={handleAddToCart}
                      // disabled={!selectedSize}
                      className="add_cart"
                    >
                      add to bag
                      {showAnimation && <QuantityIncrementAnimation />}
                    </button>
                    <button className="add_wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>

                  <div className="location_ups">
                    <div className="location">
                      <div className="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <p>Find in local store</p>
                    </div>
                    <div className="ups">
                      <div className="wrap">
                        <div className="icon">
                          <i class="fa-solid fa-truck-fast"></i>
                        </div>
                        <p>UPS</p>
                      </div>
                      <p className="cost_shipping">Free</p>
                    </div>
                  </div>

                  <div className="accordion-panel">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushProductDetails"
                    >
                      {/* start  */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-d-staq">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseDstaq"
                            aria-expanded="false"
                            aria-controls="flush-collapseDstaq"
                          >
                            D-staq
                          </button>
                        </h2>
                        <div
                          id="flush-collapseDstaq"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-d-staq"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            <SvgPant />
                            <p className="text-accordion">
                              The D-Staq pant is a simplified version of the
                              Staq pant first launched in May 2016. It is a
                              hybrid design combining traditional denim and
                              chino details based on research conducted in the
                              G-Star Raw archive.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-material">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseMaterial"
                            aria-expanded="false"
                            aria-controls="flush-collapseMaterial"
                          >
                            Material
                          </button>
                        </h2>
                        <div
                          id="flush-collapseMaterial"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-material"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae blanditiis neque doloremque
                            maiores dolorum fugit veniam, quibusdam, excepturi,
                            nam qui distinctio aliquid. Temporibus labore
                            quaerat numquam, suscipit deleniti quia laudantium.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-features">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFeatures"
                            aria-expanded="false"
                            aria-controls="flush-collapseFeatures"
                          >
                            Features
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFeatures"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-features"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae blanditiis neque doloremque
                            maiores dolorum fugit veniam, quibusdam, excepturi,
                            nam qui distinctio aliquid. Temporibus labore
                            quaerat numquam, suscipit deleniti quia laudantium.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-responsibleMaterialsRanking"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseResponsibleMaterialsRanking"
                            aria-expanded="false"
                            aria-controls="flush-collapseResponsibleMaterialsRanking"
                          >
                            Responsible Materials Ranking
                          </button>
                        </h2>
                        <div
                          id="flush-collapseResponsibleMaterialsRanking"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-responsibleMaterialsRanking"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae blanditiis neque doloremque
                            maiores dolorum fugit veniam, quibusdam, excepturi,
                            nam qui distinctio aliquid. Temporibus labore
                            quaerat numquam, suscipit deleniti quia laudantium.
                          </div>
                        </div>
                      </div>

                      {/* End   */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-sizeAndFit">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSizeAndFit"
                            aria-expanded="false"
                            aria-controls="flush-collapseSizeAndFit"
                          >
                            Size & Fit
                          </button>
                        </h2>
                        <div
                          id="flush-collapseSizeAndFit"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-sizeAndFit"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae blanditiis neque doloremque
                            maiores dolorum fugit veniam, quibusdam, excepturi,
                            nam qui distinctio aliquid. Temporibus labore
                            quaerat numquam, suscipit deleniti quia laudantium.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-descriptionAndCare"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseDescriptionAndCare"
                            aria-expanded="false"
                            aria-controls="flush-collapseDescriptionAndCare"
                          >
                            Description & Care
                          </button>
                        </h2>
                        <div
                          id="flush-collapseDescriptionAndCare"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-descriptionAndCare"
                          data-bs-parent="#accordionFlushProductDetails"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Similique eaque suscipit facere velit modi.
                            Praesentium quidem corrupti, neque natus, aliquid
                            pariatur atque, sunt accusantium sequi molestias
                            libero placeat mollitia alias.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <RecentlyViewed />
      </div>
    </main>
  );
}
