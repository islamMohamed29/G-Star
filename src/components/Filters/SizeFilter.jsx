import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
const SizeFilter = ({ setFilters }) => {
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setFilters((prevFilters) => {
      let updatedSizeFilters;

      if (checked) {
        updatedSizeFilters = prevFilters.sizes.includes(name)
          ? prevFilters.sizes
          : [...prevFilters.sizes, name];
      } else {
        updatedSizeFilters = prevFilters.sizes.filter((size) => size !== name);
      }

      return {
        ...prevFilters,
        sizes: updatedSizeFilters,
      };
    });
  };

  return (
    <div className="by-size">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Size
      </button>
      <ul className="dropdown-menu parentFilterPanel">
        <li>
          <input
            type="checkbox"
            name="28"
            id="size28CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size28CheckBox">28</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="29"
            id="size29CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size29CheckBox">29</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="30"
            id="size30CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size30CheckBox">30</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="31"
            id="size31CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size31CheckBox">31</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="32"
            id="size32CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size32CheckBox">32</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="33"
            id="size33CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size33CheckBox">33</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="34"
            id="size34CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size34CheckBox">34</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="36"
            id="size36CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size36CheckBox">36</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="38"
            id="size38CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size38CheckBox">38</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="40"
            id="size40CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size40CheckBox">40</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="41"
            id="size41CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size41CheckBox">41</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="42"
            id="size42CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size42CheckBox">42</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="43"
            id="size43CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size43CheckBox">43</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="44"
            id="size44CheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="size44CheckBox">44</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="xxxSmallCheckBox"
            id="xxxSmallCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="xxxSmallCheckBox">XXXS</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="xxSmallCheckBox"
            id="xxSmallCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="xxSmallCheckBox">XXS</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="xSmallCheckBox"
            id="xSmallCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="xSmallCheckBox">XS</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="smallCheckBox"
            id="smallCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="smallCheckBox">S</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="mediumCheckBox"
            id="mediumCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="mediumCheckBox">M</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="largeCheckBox"
            id="largeCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="largeCheckBox">L</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="xLargeCheckBox"
            id="xLargeCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="xLargeCheckBox">XL</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="xxLargeCheckBox"
            id="xxLargeCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="xxLargeCheckBox">XXL</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="oneSizeCheckBox"
            id="oneSizeCheckBox"
            className="filterCheckBox"
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="oneSizeCheckBox">one size</label>
        </li>
      </ul>
    </div>
  );
};

SizeFilter.propTypes = {
  setFilters: PropTypes.func.isRequired,
};
export default SizeFilter;
