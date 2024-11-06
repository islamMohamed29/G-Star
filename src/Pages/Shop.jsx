import { useSelector } from "react-redux";
import products from "../json/products";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import Product from "../components/Shop/Product";
import TopBar from "../components/TopBar";
import { useProductFiltering } from "../hooks/useProductFiltering";

export default function Shop() {
  const { filteredProducts, loading } = useProductFiltering(products);
  const isOpen = useSelector((state) => state.layout.navOpen);
  const filters = useSelector((state) => state.filters);
  const getProductWithColors = (filteredProducts) => {
    return filteredProducts.flatMap((product) =>
      product.colorPanel.map((panel) => ({
        ...product,
        mainImage: {
          color: panel.color,
          image: panel.colorImage,
        },
      }))
    );
  };
  const productsWithColors = filteredProducts
    ? getProductWithColors(filteredProducts)
    : [];

  return (
    <main className="shop-all">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <TopBar />
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

        <section className="products_wrapper">
          <div className="head-section">
            <div className="filter">
              <FilterPanel filters={filters} />
            </div>
            <div className="sort"></div>
          </div>
          <div className="products">
            <div className="container">
              <div className="row">
                {productsWithColors.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
