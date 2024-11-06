import { useDispatch, useSelector } from "react-redux";
import { setSizes } from "../../redux/slices/filter-slice";

const SizeFilter = () => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.filters.sizes);

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    let updatedSizeFilters;
    if (checked) {
      updatedSizeFilters = selectedSizes.includes(name)
        ? selectedSizes
        : [...selectedSizes, name];
    } else {
      updatedSizeFilters = selectedSizes.filter((size) => size !== name);
    }

    dispatch(setSizes(updatedSizeFilters));
  };
  const sizes = [
    // المقاسات الرقمية
    { name: "28", label: "28" },
    { name: "29", label: "29" },
    { name: "30", label: "30" },
    { name: "31", label: "31" },
    { name: "32", label: "32" },
    { name: "33", label: "33" },
    { name: "34", label: "34" },
    { name: "36", label: "36" },
    { name: "38", label: "38" },
    { name: "40", label: "40" },
    { name: "41", label: "41" },
    { name: "42", label: "42" },
    { name: "43", label: "43" },
    { name: "44", label: "44" },
    // المقاسات النصية
    { name: "xxxSmallCheckBox", label: "XXXS" },
    { name: "xxSmallCheckBox", label: "XXS" },
    { name: "xSmallCheckBox", label: "XS" },
    { name: "smallCheckBox", label: "S" },
    { name: "mediumCheckBox", label: "M" },
    { name: "largeCheckBox", label: "L" },
    { name: "xLargeCheckBox", label: "XL" },
    { name: "xxLargeCheckBox", label: "XXL" },
    { name: "oneSizeCheckBox", label: "one size" },
  ];

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
        {sizes.map(({ name, label }) => {
          return (
            <li key={name}>
              <input
                type="checkbox"
                name={name}
                id={`size${name}CheckBox`}
                className="filterCheckBox"
                onChange={handleCheckBoxChange}
                checked={selectedSizes.includes(name)}
              />
              <label htmlFor={`size${name}CheckBox`}>{label}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SizeFilter;
