import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export const useProductFiltering = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const filterProducts = async () => {
      setLoading(true);
      try {
        let filtered = initialProducts;

        filtered = filtered.filter(
          (product) =>
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1]
        );

        for (let key of [
          "colors",
          "lengths",
          "sizes",
          "fit",
          "category",
          "gender",
        ]) {
          if (filters[key].length > 0) {
            if (key === "colors") {
              filtered = filtered.filter((product) =>
                filters[key].some((color) =>
                  product.colors
                    ?.map((c) => c.toLowerCase())
                    .includes(color.toLowerCase())
                )
              );
            } else if (
              key === "sizes" ||
              key === "lengths" ||
              key === "category"
            ) {
              if (key === "sizes") {
                filtered = filtered.filter((product) =>
                  filters[key].some((size) => product.sizes?.includes(size))
                );
              }
              if (key === "lengths") {
                filtered = filtered.filter((product) =>
                  filters[key].some((length) =>
                    product.lengths?.includes(length)
                  )
                );
              }
              if (key === "category") {
                filtered = filtered.filter((product) =>
                  filters[key].some((category) =>
                    product.category
                      ?.toLowerCase()
                      .includes(category.toLowerCase())
                  )
                );
              }
            } else {
              filtered = filtered.filter((product) =>
                filters[key].includes(product[key])
              );
            }
          }
        }

        setFilteredProducts(filtered);
      } catch (error) {
        console.error("Error filtering products:", error);
      } finally {
        setLoading(false);
      }
    };

    filterProducts();
  }, [filters, initialProducts]);

  return { filteredProducts, loading };
};
