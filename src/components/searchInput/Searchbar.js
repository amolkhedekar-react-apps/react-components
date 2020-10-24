import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [searchDivClass, setSearchDivClass] = useState("todo__divInput");
  const [searchBtnClass, setSearchBtnClass] = useState("btn--search");
  const [searchCloseClass, setSearchCloseClass] = useState("btn--close hide");
  const [input, setInput] = useState("");
  const searchClickHandler = () => {
    setSearchDivClass("todo__divInput active");
    setSearchBtnClass("btn--search active");
    setSearchCloseClass("btn--close");
  };

  const closeClickHandler = () => {
    setSearchDivClass("todo__divInput");
    setSearchBtnClass("btn--search");
    setSearchCloseClass("btn--close hide");
    setInput("");
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__row">
          <div className={searchDivClass}>
            <input
              type="text"
              className="todo__input"
              placeholder="Type to search..."
              onChange={inputChangeHandler}
            />
            <button className={searchBtnClass} onClick={searchClickHandler}>
              <i className="fa fa-search" />
            </button>
          </div>
          <button className={searchCloseClass} onClick={closeClickHandler}>
            <i className="fa fa-times" />
          </button>
        </div>
        <p>{input}</p>
      </div>
    </div>
  );
};

export default Searchbar;
