import PropTypes from "prop-types";
import PriceRangeFilter from "./PriceRangeFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import SizeFilter from "./SizeFilter";

// eslint-disable-next-line no-unused-vars
const FilterPanel = ({ filters, setFilters }) => {
  return (
    <>
      <PriceRangeFilter setFilters={setFilters} />
      <ColorFilter setFilters={setFilters} />
      <GenderFilter setFilters={setFilters} />
      <SizeFilter setFilters={setFilters} />
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
