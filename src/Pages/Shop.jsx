import { useSelector } from "react-redux";
import products from "../json/products";
import Resources from "../locales/Resources.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterPanel from "./FilterPanel";

const initialFilters = {
  priceRange: [0, Infinity],
  colors: [],
  length: [],
  sizes: [],
  fit: [],
  category: [],
  gender: [],
};

export default function Shop() {
  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  const [currentColor, setCurrentColor] = useState("");
  const handleColorHover = (color) => {
    setCurrentColor(color);
  };

  const [filters, setFilters] = useState(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    // Apply filters whenever filters state changes

    // const applyFilters = () => {
    let filtered = products;

    for (let key of [
      "colors",
      "length",
      "sizes",
      "fit",
      "category",
      "gender",
    ]) {
      if (filters[key].length > 0) {
        if (key === "colors") {
          filtered = filtered.filter((product) =>
            filters[key].some((color) => product.colors?.includes(color))
          );
        } else if (key === "sizes") {
          filtered = filtered.filter((product) =>
            filters[key].some((size) => product.sizes?.includes(size))
          );
        } else {
          filtered = filtered.filter((product) =>
            filters[key].includes(product[key])
          );
        }
      }
    }

    // Apply price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
    // };
  }, [filters]);

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

        {/* <ProductList products={filteredProducts} /> */}

        <section className="products_shop_all">
          <div className="head-section">
            <div className="filter">
              <FilterPanel filters={filters} setFilters={setFilters} />

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
            </div>
            <div className="sort"></div>
          </div>
          <div className="products">
            <div className="container">
              <div className="row">
                {filteredProducts.map((product, index) => {
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
                          <img
                            src={`/products/product-1/${
                              currentColor
                                ? product.images[currentColor]
                                : product.hoverImage
                            }`}
                            className="hover-image"
                            // alt  // product.name or currnetColor alt name
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
                                  {Object.keys(product.images).map(
                                    (color, index) => (
                                      <li
                                        key={index}
                                        onMouseEnter={() =>
                                          handleColorHover(color)
                                        }
                                        onMouseLeave={() =>
                                          handleColorHover("")
                                        }
                                      >
                                        <Link
                                          href="#"
                                          className={`jeans_${color}`}
                                        ></Link>
                                      </li>
                                    )
                                  )}
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
