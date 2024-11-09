import PriceRangeFilter from "../Filters/PriceRangeFilter";
import ColorFilter from "../Filters/ColorFilter";
import GenderFilter from "../Filters/GenderFilter";
import SizeFilter from "../Filters/SizeFilter";
import LengthFilter from "../Filters/LengthFilter";
import CategoryFilter from "../Filters/CategoryFilter";

import { useSelector } from "react-redux";
import SortDropdown from "../Filters/SortDropdown";

const FilterPanel = () => {
  const categoryFilters = useSelector((state) => state.filters.category);
  let isLengthShow =
    (categoryFilters.includes("sweats") &&
      !categoryFilters.includes("jeans")) ||
    (categoryFilters.includes("t_Shirts") &&
      !categoryFilters.includes("jeans"));

  return (
    <>
      <div className="head-filter-section">
        <div className="filter">
          <PriceRangeFilter />
          <ColorFilter />
          <GenderFilter />
          <SizeFilter />
          <CategoryFilter />
          {!isLengthShow && <LengthFilter />}
        </div>
        <SortDropdown />
      </div>
    </>
  );
};

export default FilterPanel;
