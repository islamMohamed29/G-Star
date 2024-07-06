import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ColorFilter = ({ setFilters }) => {
  const [checkedColors, setCheckedColors] = useState({
    metalCheckBox: false,
    whiteCheckBox: false,
    beigeCheckBox: false,
    yellowCheckBox: false,
    orangeCheckBox: false,
    redCheckBox: false,
    pinkCheckBox: false,
    purpleCheckBox: false,
    lightBlueCheckBox: false,
    mediumBlueCheckBox: false,
    darkBlueCheckBox: false,
    greenCheckBox: false,
    brownCheckBox: false,
    greyCheckBox: false,
    blackCheckBox: false,
    otherCheckBox: false,
  });

  useEffect(() => {
    const activeColors = Object.keys(checkedColors)
      .filter((key) => checkedColors[key])
      .map((key) => key.replace("CheckBox", ""));

    setFilters((prevFilters) => ({
      ...prevFilters,
      colors: activeColors,
    }));
  }, [checkedColors, setFilters]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setCheckedColors((prevCheckedColors) => ({
      ...prevCheckedColors,
      [name]: checked,
    }));
  };

  return (
    <div className="by-color">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Color
      </button>
      <ul className="dropdown-menu">
        <div className="wrap">
          <div className="one-column">
            {[
              "metal",
              "white",
              "beige",
              "yellow",
              "orange",
              "red",
              "pink",
              "purple",
              "lightBlue",
            ].map((color) => (
              <li key={color}>
                <input
                  type="checkbox"
                  name={`${color}CheckBox`}
                  id={`${color}CheckBox`}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={`${color}CheckBox`}
                  style={{
                    fontWeight: checkedColors[`${color}CheckBox`]
                      ? "bold"
                      : "normal",
                  }}
                >
                  {color.charAt(0).toUpperCase() +
                    color
                      .slice(1)
                      .replace(/([A-Z])/g, " $1")
                      .trim()}
                </label>
              </li>
            ))}
          </div>
          <div className="two-column">
            {[
              "mediumBlue",
              "darkBlue",
              "green",
              "brown",
              "grey",
              "black",
              "other",
            ].map((color) => (
              <li key={color}>
                <input
                  type="checkbox"
                  name={`${color}CheckBox`}
                  id={`${color}CheckBox`}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={`${color}CheckBox`}
                  style={{
                    fontWeight: checkedColors[`${color}CheckBox`]
                      ? "bold"
                      : "normal",
                  }}
                >
                  {color.charAt(0).toUpperCase() +
                    color
                      .slice(1)
                      .replace(/([A-Z])/g, " $1")
                      .trim()}
                </label>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

ColorFilter.propTypes = {
  setFilters: PropTypes.func.isRequired,
};

export default ColorFilter;
