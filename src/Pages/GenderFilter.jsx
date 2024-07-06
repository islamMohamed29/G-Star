import PropTypes from "prop-types";

const GenderFilter = ({ setFilters }) => {
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => {
      let updatedGenderFilters;

      if (checked) {
        // Add the selected gender to the array if it's not already there
        updatedGenderFilters = prevFilters.gender.includes(name)
          ? prevFilters.gender
          : [...prevFilters.gender, name];
      } else {
        // Remove the selected gender from the array
        updatedGenderFilters = prevFilters.gender.filter(
          (gender) => gender !== name
        );
      }

      return {
        ...prevFilters,
        gender: updatedGenderFilters,
      };
    });
  };

  return (
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
            name="men"
            id="menCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="menCheckBox">Men</label>
        </li>
        <li>
          <input
            disabled
            type="checkbox"
            name="women"
            id="womenCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="womenCheckBox">Women</label>
        </li>
      </ul>
    </div>
  );
};
GenderFilter.propTypes = {
  setFilters: PropTypes.func.isRequired,
};
export default GenderFilter;
