import PropTypes from "prop-types";

const LengthFilter = ({ setFilters }) => {
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setFilters((prevFilters) => {
      let updatedSizeFilters;

      if (checked) {
        updatedSizeFilters = prevFilters.lengths.includes(name)
          ? prevFilters.lengths
          : [...prevFilters.lengths, name];
      } else {
        updatedSizeFilters = prevFilters.lengths.filter(
          (length) => length !== name
        );
      }

      return {
        ...prevFilters,
        lengths: updatedSizeFilters,
      };
    });
  };
  return (
    <div className="by-length">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Length
      </button>
      <ul className="dropdown-menu parentFilterPanel ">
        <li>
          <input
            type="checkbox"
            name="26"
            id="length26CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length26CheckBox">26</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="28"
            id="length28CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length28CheckBox">28</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="30"
            id="length30CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length30CheckBox">30</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="32"
            id="length32CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length32CheckBox">32</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="34"
            id="length34CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length34CheckBox">34</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="36"
            id="length36CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length36CheckBox">36</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="38"
            id="length38CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="length38CheckBox">38</label>
        </li>
      </ul>
    </div>
  );
};

LengthFilter.propTypes = {
  setFilters: PropTypes.func.isRequired,
};

export default LengthFilter;
