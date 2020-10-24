import React from "react";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search">
      <div className="search__container">
        <input type="text" placeholder="Type to search..." />
        <div className="button--search">
          <i className="fa fa-search"></i>
        </div>
        <div className="button--cancel">
          <i className="fa fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
