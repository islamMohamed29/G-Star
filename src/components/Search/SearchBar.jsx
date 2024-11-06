import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../redux/slices/search-slice";
const keywords = ["Nifous", "Nifous 22", "Carg", "Jean"];
export default function SearchBar() {
  const [showResult, setShowResult] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const filteredProducts = useSelector(
    (state) => state.search.filteredProducts || []
  );
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (inputValue) {
      const results = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [inputValue, filteredProducts]);
  const handleFocus = () => {
    if (inputValue) {
      setShowResult(true);
    }
  };

  const handleBlur = () => {
    setShowResult(false);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(setSearchQuery(e.target.value));
    setShowResult(e.target.value.length > 0);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearchQuery(inputValue));
      navigate(`/search`);
      inputRef.current.blur(); // إزالة التركيز بعد البحث
    }
  };
  const handleResultClick = (product) => {
    navigate(`/shop/product/${product.id}`);
    inputRef.current.blur(); // إزالة التركيز بعد البحث
    // setInputValue(productName);
    // dispatch(setSearchQuery(productName));
    // navigate(`/search`);
    setShowResult(false);
  };
  const handleKeywordClick = (keyword) => {
    setInputValue(keyword);
    dispatch(setSearchQuery(keyword));
    navigate(`/search`);
    inputRef.current.blur(); // إزالة التركيز بعد البحث
    setShowResult(false);
  };

  const combinedResults = [
    ...searchResults,
    ...keywords
      .map((keyword) => keyword.toLocaleLowerCase())
      .filter((keyword) => keyword.includes(inputValue.toLocaleLowerCase())),
  ].sort((a, b) => {
    const isAObject = typeof a === "object";
    const isBObject = typeof b === "object";
    if (isAObject && !isBObject) return 1;
    if (!isAObject && isBObject) return -1;
    return 0;
  });
  return (
    <div className="search">
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        id="search"
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        className="search_input"
        ref={inputRef}
      />
      {inputValue && combinedResults.length > 0 && showResult && (
        <ul className="search-results">
          {combinedResults.map((item) => (
            <li
              key={typeof item === "string" ? item : item.id}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() =>
                typeof item === "string"
                  ? handleKeywordClick(item)
                  : handleResultClick(item)
              }
            >
              {/* {console.log(combinedResults, "combinedResults")}
              {typeof item === "string" ? item : item.name}{" "} */}
              {typeof item === "string" && <p className="keyword">{item}</p>}
              {typeof item !== "string" && (
                <div className="search_product">
                  <div className="image">
                    <img src={item.mainImage.image} alt="" />
                  </div>
                  <div className="details">
                    <div className="left">
                      <p className="name">{item.name}</p>
                      <p className="color">{item.mainImage.color}</p>
                    </div>
                    <p className="price">E{item.price}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
