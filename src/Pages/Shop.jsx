import { useSelector } from "react-redux";
import products from "../json/products";
import Resources from "../locales/Resources.json";
export default function Shop() {
  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  return (
    <main className="shop-all">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <div className="top-bar">
          <ul>
            <li>{Resources["springUpdate"][currentLanguage]}</li>
            <li>Free shipping</li>
            <li>Free 60 day returns</li>
          </ul>
        </div>
        <header>
          <picture className="top-banner-image">
            <source
              media="(min-width: 1024px)"
              srcSet="/pages/shop/Banner_Desktop.jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/pages/shop/Banner_Tablet.jpeg"
            />
            <source
              media="(min-width: 0px)"
              srcSet="/pages/shop/Banner_Mobile.jpeg"
            />
            <img decoding="async" alt="stay tuned htmlFor upcoming deals" />
          </picture>
          <div className="banner-content">
            <h1>stay tuned htmlFor upcoming Deals</h1>
            <div>
              Our women sale may have ended, but you can still explore <br />
              our&nbsp;
              <u>
                <b>women collection</b>
              </u>
              . Subscribe to our newsletter to stay <br /> up to date with the
              latest news and offers.
            </div>
          </div>
        </header>
        <section className="products_shop_all">
          <div className="head-section">
            <div className="filter">
              <div className="by-gender">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="genderDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gender
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-start"
                  aria-labelledby="genderDropdown"
                >
                  <li>
                    <input
                      type="checkbox"
                      name="men_checkBox"
                      id="menCheckBox"
                    />
                    <label htmlFor="menCheckBox">Men</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="women_checkBox"
                      id="womenCheckBox"
                    />
                    <label htmlFor="womenCheckBox">Women</label>
                  </li>
                </ul>
              </div>
              <div className="by-category">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="categoryDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-start"
                  aria-labelledby="categoryDropdown"
                >
                  <li>
                    <input
                      type="checkbox"
                      name="accessories_checkBox"
                      id="accessoriesCheckBox"
                    />
                    <label htmlFor="accessoriesCheckBox">Accessories</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="giftCard_checkBox"
                      id="giftCardCheckBox"
                    />
                    <label htmlFor="giftCardCheckBox">Gift card</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="jacketsAndBlazersCard_checkBox"
                      id="jacketsAndBlazersCardCheckBox"
                    />
                    <label htmlFor="jacketsAndBlazersCardCheckBox">
                      Jackets & blazers
                    </label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      name="jeans_checkBox"
                      id="jeansCheckBox"
                    />
                    <label htmlFor="jeansCheckBox">Jeans</label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      name="jumpstitsAndOveralls_checkBox"
                      id="jumpstitsAndOverallsCheckBox"
                    />
                    <label htmlFor="jumpstitsAndOverallsCheckBox">
                      Jumpsuits & overalls
                    </label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      name="knitwear_checkBox"
                      id="knitwearCheckBox"
                    />
                    <label htmlFor="knitwearCheckBox">Knitwear</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="pantsCheckBox"
                      id="pantsCheckBox"
                    />
                    <label htmlFor="pantsCheckBox">Pants</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="shirtsCheckBox"
                      id="shirtsCheckBox"
                    />
                    <label htmlFor="shirtsCheckBox">Shirts</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="shoesCheckBox"
                      id="shoesCheckBox"
                    />
                    <label htmlFor="shoesCheckBox">Shoes</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="shortsCheckBox"
                      id="shortsCheckBox"
                    />
                    <label htmlFor="shortsCheckBox">Shorts</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="sweatsCheckBox"
                      id="sweatsCheckBox"
                    />
                    <label htmlFor="sweatsCheckBox">Sweats</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="swimwearCheckBox"
                      id="swimwearCheckBox"
                    />
                    <label htmlFor="swimwearCheckBox">Swimwear</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="tShirtsCheckBox"
                      id="tShirtsCheckBox"
                    />
                    <label htmlFor="tShirtsCheckBox">T-shirts</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="underwearCheckBox"
                      id="underwearCheckBox"
                    />
                    <label htmlFor="underwearCheckBox">Underwear</label>
                  </li>
                </ul>
              </div>

              <div className="by-fit">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fit
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="checkbox"
                      name="superSkinnyCheckBox"
                      id="superSkinnyCheckBox"
                    />
                    <label htmlFor="superSkinnyCheckBox">Super Skinny</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="aLineCheckBox"
                      id="aLineCheckBox"
                    />
                    <label htmlFor="aLineCheckBox">A-line</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="bootcutCheckBox"
                      id="bootcutCheckBox"
                    />
                    <label htmlFor="bootcutCheckBox">Bootcut</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="skinnyCheckBox"
                      id="skinnyCheckBox"
                    />
                    <label htmlFor="skinnyCheckBox">Skinny</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="truckerCheckBox"
                      id="truckerCheckBox"
                    />
                    <label htmlFor="truckerCheckBox">Trucker</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="slimCheckBox"
                      id="slimCheckBox"
                    />
                    <label htmlFor="slimCheckBox">Slim</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="taperedCheckBox"
                      id="taperedCheckBox"
                    />
                    <label htmlFor="taperedCheckBox">Tapered</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="looseCheckBox"
                      id="looseCheckBox"
                    />
                    <label htmlFor="looseCheckBox">Loose</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="straightCheckBox"
                      id="straightCheckBox"
                    />
                    <label htmlFor="straightCheckBox">Straight</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="bootcutFlareCheckBox"
                      id="bootcutFlareCheckBox"
                    />
                    <label htmlFor="bootcutFlareCheckBox">
                      Bootcut & Flare
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="boyfriendCheckBox"
                      id="boyfriendCheckBox"
                    />
                    <label htmlFor="boyfriendCheckBox">Boyfriend</label>
                  </li>
                </ul>
              </div>
              <div className="by-size">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Size
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="checkbox"
                      name="size28CheckBox"
                      id="size28CheckBox"
                    />
                    <label htmlFor="size28CheckBox">28</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size29CheckBox"
                      id="size29CheckBox"
                    />
                    <label htmlFor="size29CheckBox">29</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size30CheckBox"
                      id="size30CheckBox"
                    />
                    <label htmlFor="size30CheckBox">30</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size31CheckBox"
                      id="size31CheckBox"
                    />
                    <label htmlFor="size31CheckBox">31</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size32CheckBox"
                      id="size32CheckBox"
                    />
                    <label htmlFor="size32CheckBox">32</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size33CheckBox"
                      id="size33CheckBox"
                    />
                    <label htmlFor="size33CheckBox">33</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size34CheckBox"
                      id="size34CheckBox"
                    />
                    <label htmlFor="size34CheckBox">34</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size36CheckBox"
                      id="size36CheckBox"
                    />
                    <label htmlFor="size36CheckBox">36</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size38CheckBox"
                      id="size38CheckBox"
                    />
                    <label htmlFor="size38CheckBox">38</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size40CheckBox"
                      id="size40CheckBox"
                    />
                    <label htmlFor="size40CheckBox">40</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size41CheckBox"
                      id="size41CheckBox"
                    />
                    <label htmlFor="size41CheckBox">41</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size42CheckBox"
                      id="size42CheckBox"
                    />
                    <label htmlFor="size42CheckBox">42</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size43CheckBox"
                      id="size43CheckBox"
                    />
                    <label htmlFor="size43CheckBox">43</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="size44CheckBox"
                      id="size44CheckBox"
                    />
                    <label htmlFor="size44CheckBox">44</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="xxxSmallCheckBox"
                      id="xxxSmallCheckBox"
                    />
                    <label htmlFor="xxxSmallCheckBox">XXXS</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="xxSmallCheckBox"
                      id="xxSmallCheckBox"
                    />
                    <label htmlFor="xxSmallCheckBox">XXS</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="xSmallCheckBox"
                      id="xSmallCheckBox"
                    />
                    <label htmlFor="xSmallCheckBox">XS</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="smallCheckBox"
                      id="smallCheckBox"
                    />
                    <label htmlFor="smallCheckBox">S</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="mediumCheckBox"
                      id="mediumCheckBox"
                    />
                    <label htmlFor="mediumCheckBox">M</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="largeCheckBox"
                      id="largeCheckBox"
                    />
                    <label htmlFor="largeCheckBox">L</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="xLargeCheckBox"
                      id="xLargeCheckBox"
                    />
                    <label htmlFor="xLargeCheckBox">XL</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="xxLargeCheckBox"
                      id="xxLargeCheckBox"
                    />
                    <label htmlFor="xxLargeCheckBox">XXL</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="oneSizeCheckBox"
                      id="oneSizeCheckBox"
                    />
                    <label htmlFor="oneSizeCheckBox">one size</label>
                  </li>
                </ul>
              </div>
              <div className="by-length">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Length
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="checkbox"
                      name="length26CheckBox"
                      id="length26CheckBox"
                    />
                    <label htmlFor="length26CheckBox">26</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length28CheckBox"
                      id="length28CheckBox"
                    />
                    <label htmlFor="length28CheckBox">28</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length30CheckBox"
                      id="length30CheckBox"
                    />
                    <label htmlFor="length30CheckBox">30</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length32CheckBox"
                      id="length32CheckBox"
                    />
                    <label htmlFor="length32CheckBox">32</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length34CheckBox"
                      id="length34CheckBox"
                    />
                    <label htmlFor="length34CheckBox">34</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length36CheckBox"
                      id="length36CheckBox"
                    />
                    <label htmlFor="length36CheckBox">36</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="length38CheckBox"
                      id="length38CheckBox"
                    />
                    <label htmlFor="length38CheckBox">38</label>
                  </li>
                </ul>
              </div>
              <div className="by-color">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Color
                </button>
                <ul className="dropdown-menu">
                  <div className="wrap">
                    <div className="one-column">
                      <li>
                        <input
                          type="checkbox"
                          name="metalCheckBox"
                          id="metalCheckBox"
                        />
                        <label htmlFor="metalCheckBox">Metal</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="whiteCheckBox"
                          id="whiteCheckBox"
                        />
                        <label htmlFor="whiteCheckBox">White</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="beigeCheckBox"
                          id="beigeCheckBox"
                        />
                        <label htmlFor="beigeCheckBox">Beige</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="yellowCheckBox"
                          id="yellowCheckBox"
                        />
                        <label htmlFor="yellowCheckBox">Yellow</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="orangeCheckBox"
                          id="orangeCheckBox"
                        />
                        <label htmlFor="orangeCheckBox">Orange</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="redCheckBox"
                          id="redCheckBox"
                        />
                        <label htmlFor="redCheckBox">Red</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="pinkCheckBox"
                          id="pinkCheckBox"
                        />
                        <label htmlFor="pinkCheckBox">Pink</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="purpleCheckBox"
                          id="purpleCheckBox"
                        />
                        <label htmlFor="purpleCheckBox">Purple</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="lightBlueCheckBox"
                          id="lightBlueCheckBox"
                        />
                        <label htmlFor="lightBlueCheckBox">Light blue</label>
                      </li>
                    </div>
                    <div className="two-column">
                      <li>
                        <input
                          type="checkbox"
                          name="mediumBlueCheckBox"
                          id="mediumBlueCheckBox"
                        />
                        <label htmlFor="mediumBlueCheckBox">Medium blue</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="darkBlueCheckBox"
                          id="darkBlueCheckBox"
                        />
                        <label htmlFor="darkBlueCheckBox">Dark blue</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="greenCheckBox"
                          id="greenCheckBox"
                        />
                        <label htmlFor="greenCheckBox">Green</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="brownCheckBox"
                          id="brownCheckBox"
                        />
                        <label htmlFor="brownCheckBox">Brown</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="greyCheckBox"
                          id="greyCheckBox"
                        />
                        <label htmlFor="greyCheckBox">Grey</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="blackCheckBox"
                          id="blackCheckBox"
                        />
                        <label htmlFor="blackCheckBox">Black</label>
                      </li>

                      <li>
                        <input
                          type="checkbox"
                          name="otherCheckBox"
                          id="otherCheckBox"
                        />
                        <label htmlFor="otherCheckBox">Other</label>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="by-price-range">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Price range
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <input
                      type="checkbox"
                      name="price0to500CheckBox"
                      id="price0to500CheckBox"
                    />
                    <label htmlFor="price0to50CheckBox">0-500 EGP</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price500to1000CheckBox"
                      id="price500to1000CheckBox"
                    />
                    <label htmlFor="price500to1000CheckBox">500-1000 EGP</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price1000to2500CheckBox"
                      id="price1000to2500CheckBox"
                    />
                    <label htmlFor="price1000to2500CheckBox">
                      1000-2500 EGP
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="price2500orMoreCheckBox"
                      id="price2500orMoreCheckBox"
                    />
                    <label htmlFor="price2500orMoreCheckBox">
                      2500 EGP or more
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sort"></div>
          </div>
          <div className="products">
            <div className="container">
              <div className="row">
                {products.map((product, index) => {
                  return (
                    <>
                      <div className="col-md-3">
                        <div key={index} className="product">
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
                                  <li>
                                    <a href="">x</a>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {/* {products.map((product) => {
              return (
                <div className="product"></div>
                // <div className="product">
                //   <img
                //     src={`/products/2448586_7_800x.webp`}
                //     alt=""
                //     className="main-image"
                //   />
                //   <img
                //     src={`/products/2448586_7_800x.webp`}
                //     alt=""
                //     className="hover-image"
                //   />
                //   <div className="about-product">
                //     <div className="status">NEW</div>
                //     <div className="info">
                //       <div className="name">{product.name}</div>
                //       <div className="price">{product.price} EGP</div>
                //     </div>
                //   </div>
                //   <div className="colors"></div>
                // </div>
              );
            })} */}
          </div>
        </section>
      </div>
    </main>
  );
}
