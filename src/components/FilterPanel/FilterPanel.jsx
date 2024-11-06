// import PropTypes from "prop-types";
// import PriceRangeFilter from "../Filters/PriceRangeFilter";
// import ColorFilter from "../Filters/ColorFilter";
// import GenderFilter from "../Filters/GenderFilter";
// import SizeFilter from "../Filters/SizeFilter";
// import LengthFilter from "../Filters/LengthFilter";
// import CategoryFilter from "../Filters/CategoryFilter";
// import FitFilter from "../Filters/FitFilter";

// // eslint-disable-next-line no-unused-vars
// const FilterPanel = ({ filters, setFilters }) => {
//   return (
//     <>
//       <PriceRangeFilter setFilters={setFilters} />
//       <ColorFilter setFilters={setFilters} />
//       <GenderFilter setFilters={setFilters} />
//       <SizeFilter setFilters={setFilters} />
//       <LengthFilter setFilters={setFilters} />
//       <CategoryFilter setFilters={setFilters} />
//       <FitFilter setFilters={setFilters} />
//     </>
//   );
// };

// FilterPanel.propTypes = {
//   filters: PropTypes.shape({
//     priceRange: PropTypes.arrayOf(PropTypes.number).isRequired,
//   }).isRequired,
//   setFilters: PropTypes.func.isRequired,
// };

// export default FilterPanel;

import PropTypes from "prop-types";
import PriceRangeFilter from "../Filters/PriceRangeFilter";
import ColorFilter from "../Filters/ColorFilter";
import GenderFilter from "../Filters/GenderFilter";
import SizeFilter from "../Filters/SizeFilter";
import LengthFilter from "../Filters/LengthFilter";
import CategoryFilter from "../Filters/CategoryFilter";
import FitFilter from "../Filters/FitFilter";
import { useSelector } from "react-redux";

// eslint-disable-next-line no-unused-vars
const FilterPanel = () => {
  return (
    <>
      <PriceRangeFilter />
      <ColorFilter />
      <GenderFilter />
      <SizeFilter />
      {/* 
     
    
      <LengthFilter />
      <CategoryFilter />
      <FitFilter /> */}
    </>
  );
};

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    priceRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterPanel;
