import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navOpen } from "../../redux/slices/layout-slice";
import Resources from "../../locales/Resources.json";
import { Link } from "react-router-dom";
import { calcTotalItems, removeItemCart } from "../../redux/slices/cart-slice";
export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsClicked(!isClicked);
    dispatch(navOpen(!isClicked));
  };
  let cartData = useSelector((state) => state.cart.cartItems);
  let subTotal = useSelector((state) => state.cart.subTotal);
  let tax = useSelector((state) => state.cart.tax);
  let totalAmount = useSelector((state) => state.cart.totalAmount);
  let totalCartItems = useSelector((state) => state.cart.totalItems);
  const handleLang = (e) => {
    localStorage.setItem("language", e.target.value);
    window.location.reload();
  };
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  // const [totalCartItems, setTotalCartItems] = useState(0);

  // const calculateCosts = () => {
  //   const totalItems = cartData.reduce((acc, item) => acc + item.quantity, 0);
  //   setTotalCartItems(totalItems);
  // };

  // useEffect(() => {
  //   calculateCosts();
  // }, [cartData]);
  useEffect(() => {
    dispatch(calcTotalItems());
  }, [dispatch]);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <div
              onClick={handleClick}
              className={`bars-container ${isClicked ? "change" : ""}`}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            <div className="links">
              <ul>
                <li>
                  <Link to={"/shop"}>{Resources["shop"][currentLanguage]}</Link>
                </li>
              </ul>
            </div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-center">
            <h1 className="logo">Outfits</h1>
            <div className="search">
              <label htmlFor="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
              <input id="search" type="text" placeholder="search" />
            </div>
          </div>
          <div className="nav-right">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="language">
              <i className="fa-solid fa-globe"></i>
              <select onChange={(e) => handleLang(e)}>
                <option value="en" selected={currentLanguage === "en"}>
                  en
                </option>
                <option value="ar" selected={currentLanguage === "ar"}>
                  ar
                </option>
              </select>
            </div>
            <div className="user">
              <i className="fa-solid fa-user"></i>
              <Link to="login">Login</Link>
            </div>
            <div className="whishlist">
              <Link className="user_wishlist">
                <Link className="wishlist_icon" to={"/wishlist"}>
                  <i className="fa-regular fa-heart"></i>
                </Link>
                <div className="wishlist_panel">
                  <div className="wrapper">
                    <p className="text_loginFirst">
                      You havent saved any items to your wishlist yet. Start
                      shopping and add your favorite items to your wishlist.
                    </p>
                    <p className="text_loginFirst gray">
                      Become a G-Star RAW member today or log in to save the
                      item(s) so they wont be lost.
                    </p>
                    {!currentUser && (
                      <Fragment>
                        <Link className="large_link full_Width" to={"login"}>
                          Login
                        </Link>

                        <Link
                          className="large_link full_Width gray"
                          to={"register"}
                        >
                          Create Account
                        </Link>
                      </Fragment>
                    )}
                  </div>
                </div>
              </Link>
            </div>
            <div className="cart">
              <Link className="shopping-cart">
                <Link className="cart_icon" to={"/checkout/shopping-bag"}>
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <span>{totalCartItems >= 100 ? `99+` : totalCartItems}</span>
                </Link>

                <div className="shopping_cart_panel">
                  <div className="wrapper">
                    {cartData.length > 0 && (
                      <>
                        <div className="header">
                          Items not reserved
                          <span>- checkout now to make them yours</span>
                        </div>
                        <ul className="cart_product">
                          {cartData?.map((productCart) => (
                            <li className="product">
                              <span
                                onClick={() =>
                                  dispatch(
                                    removeItemCart({
                                      id: productCart.id,
                                      size: productCart.selectedSize,
                                    })
                                  )
                                }
                                className="remove_product"
                              >
                                <i class="fa-solid fa-xmark"></i>
                              </span>
                              <div className="image">
                                <img
                                  // src="/products/product-1/back-1.jpg"
                                  src={
                                    productCart.colorPanel.find(
                                      (color) =>
                                        color.color ===
                                        productCart.selectedColor
                                    )?.image || ""
                                  }
                                  alt={productCart.name}
                                />
                              </div>
                              <div className="details">
                                <div className="head">
                                  <p className="product_name">
                                    {productCart.name}
                                  </p>
                                  <p className="product_price">
                                    {productCart.price}
                                  </p>
                                </div>
                                <div className="bottom">
                                  <p>
                                    {productCart.category} /{" "}
                                    {productCart.selectedColor} /{" "}
                                    {productCart.selectedSize} /{" "}
                                    {productCart.quantity}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                          <div className="line_section"></div>
                        </ul>
                        <div className="price_details">
                          <div className="sub_details">
                            <ul>
                              <li>
                                <p className="name">Subtotal</p>
                                <p className="data">{subTotal}</p>
                              </li>
                              <li>
                                <p className="name">Shipping</p>
                                <p className="data">Free</p>
                              </li>
                              <li>
                                <p className="name">Tax</p>
                                <p className="data">{tax}</p>
                              </li>
                              <li className="total">
                                <div className="name">Total</div>
                                <div className="data">{totalAmount}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}

                    {!cartData.length > 0 && (
                      <>
                        <p className="cart_empty">your shopping bag is empty</p>
                        <Link className="large_link" to={"/shop"}>
                          containue shopping
                        </Link>
                      </>
                    )}

                    {cartData.length > 0 && (
                      <Link
                        className="large_link"
                        to={"/checkout/shopping-bag"}
                      >
                        checkout
                      </Link>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isClicked ? "show" : ""} `}>
        <div className="accordion accordion-flush" id="accordionFlushSideBar">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingNewArrivals">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseNewArrivals"
                aria-expanded="false"
                aria-controls="flush-collapseNewArrivals"
              >
                New Arrivals
              </button>
            </h2>
            <div
              id="flush-collapseNewArrivals"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingNewArrivals"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingMen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseMen"
                aria-expanded="false"
                aria-controls="flush-collapseMen"
              >
                Men
              </button>
            </h2>
            <div
              id="flush-collapseMen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingMen"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second accordion body. imagine this being filled with some
                actual content.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingJeans">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseJeans"
                aria-expanded="false"
                aria-controls="flush-collapseJeans"
              >
                Jeans
              </button>
            </h2>
            <div
              id="flush-collapseJeans"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingJeans"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingDeals">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseDeals"
                aria-expanded="false"
                aria-controls="flush-collapseDeals"
              >
                Deals
              </button>
            </h2>
            <div
              id="flush-collapseDeals"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingDeals"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSecondhand">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSecondhand"
                aria-expanded="false"
                aria-controls="flush-collapseSecondhand"
              >
                SecondHand
              </button>
            </h2>
            <div
              id="flush-collapseSecondhand"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSecondhand"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingHighlights">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseHighlights"
                aria-expanded="false"
                aria-controls="flush-collapseHighlights"
              >
                Highlights
              </button>
            </h2>
            <div
              id="flush-collapseHighlights"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingHighlights"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingStorefinder">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseStorefinder"
                aria-expanded="false"
                aria-controls="flush-collapseStorefinder"
              >
                Storefinder
              </button>
            </h2>
            <div
              id="flush-collapseStorefinder"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingStorefinder"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSustainability">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSustainability"
                aria-expanded="false"
                aria-controls="flush-collapseSustainability"
              >
                Sustainability
              </button>
            </h2>
            <div
              id="flush-collapseSustainability"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSustainability"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingHelpAndInfo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseHelpAndInfo"
                aria-expanded="false"
                aria-controls="flush-collapseHelpAndInfo"
              >
                Help & Info
              </button>
            </h2>
            <div
              id="flush-collapseHelpAndInfo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingHelpAndInfo"
              data-bs-parent="#accordionFlushSideBar"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
