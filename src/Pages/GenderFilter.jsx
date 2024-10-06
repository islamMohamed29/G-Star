import PropTypes from "prop-types";

const GenderFilter = ({ setFilters }) => {
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => {
      let updatedGenderFilters;

      if (checked) {
        console.log(checked, "checkd");
        updatedGenderFilters = prevFilters.gender.includes(name)
          ? prevFilters.gender
          : [...prevFilters.gender, name];

        console.log(updatedGenderFilters, "updatedGenderFilters");
      } else {
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
        className="dropdown-menu parentFilterPanel dropdown-menu-start"
        aria-labelledby="genderDropdown"
      >
        <li>
          <input
            type="checkbox"
            name="men"
            id="menCheckBox"
            className="filterCheckBox"
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
            className="filterCheckBox"
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
