import PropTypes from "prop-types";
import { useState } from "react";

const PriceRangeCheckboxes = ({ setFilters }) => {
  // eslint-disable-next-line no-unused-vars
  const [checkedRanges, setCheckedRanges] = useState({
    price0to500CheckBox: false,
    price500to1000CheckBox: false,
    price1000to2500CheckBox: false,
    price2500orMoreCheckBox: false,
  });
  const priceRanges = {
    price0to500CheckBox: [0, 500],
    price500to1000CheckBox: [500, 1000],
    price1000to2500CheckBox: [1000, 2500],
    price2500orMoreCheckBox: [2500, Infinity],
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setCheckedRanges((prevCheckedRanges) => {
      const newCheckedRanges = {
        ...prevCheckedRanges,
        [name]: checked,
      };

      const activeRanges = Object.keys(newCheckedRanges)
        .filter((key) => newCheckedRanges[key])
        .map((key) => priceRanges[key]);

      if (activeRanges.length === 0) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          priceRange: [0, Infinity],
        }));
      } else {
        const minPrice = Math.min(...activeRanges.map((range) => range[0]));
        const maxPrice = Math.max(...activeRanges.map((range) => range[1]));

        setFilters((prevFilters) => ({
          ...prevFilters,
          priceRange: [minPrice, maxPrice],
        }));
      }

      return newCheckedRanges;
    });
  };

  return (
    <div className="by-price-range">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Price range
      </button>
      <ul className="dropdown-menu parentFilterPanel">
        <li>
          <input
            type="checkbox"
            name="price0to500CheckBox"
            id="price0to500CheckBox"
            className="filterCheckBox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="price0to500CheckBox">0-500 EGP</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="price500to1000CheckBox"
            id="price500to1000CheckBox"
            className="filterCheckBox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="price500to1000CheckBox">500-1000 EGP</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="price1000to2500CheckBox"
            id="price1000to2500CheckBox"
            className="filterCheckBox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="price1000to2500CheckBox">1000-2500 EGP</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="price2500orMoreCheckBox"
            id="price2500orMoreCheckBox"
            className="filterCheckBox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="price2500orMoreCheckBox">2500 EGP or more</label>
        </li>
      </ul>
    </div>
  );
};

PriceRangeCheckboxes.propTypes = {
  setFilters: PropTypes.func.isRequired,
};

export default PriceRangeCheckboxes;