import React from "react";
import { useSelector } from "react-redux";
import TopBar from "../TopBar";

export default function SearchPage() {
  const { searchQuery, filteredProducts } = useSelector(
    (state) => state.search
  );

  const isOpen = useSelector((state) => state.layout.navOpen);
  const getProductsWithColors = (filteredProducts) => {
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
    ? getProductsWithColors(filteredProducts)
    : [];

  return (
    <main className="search_page">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <TopBar />
        <div className="result_search">
          <p>{`${productsWithColors.length} Result For ${searchQuery}`}</p>
        </div>
      </div>
    </main>
    // <div>
    //   <h1>Hello Eslam</h1>
    //   <h2>
    //     {productsWithColors.length} Results For "{searchQuery}"
    //   </h2>
    //   <div className="products-grid">
    //     {productsWithColors.map((product) => (
    //       <div
    //         key={`${product.id}-${product.mainImage.color}`}
    //         className="product-card"
    //       >
    //         <img
    //           src={product.mainImage.image}
    //           alt={`${product.name} - ${product.mainImage.color}`}
    //         />
    //         <h3>
    //           {product.name} - {product.mainImage.color}
    //         </h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
