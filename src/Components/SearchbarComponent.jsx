import React from "react";
import icon from "../Assets/icon-search.svg";

const SearchbarComponet = () => {
  return (
    <div className="Input-container">
      <div className="search-icon-container">
        <img className="search-icon" src={icon} alt="search icon" />
      </div>
      <input placeholder="Search GitHub username" className="input-field" />
      <button>Search</button>
    </div>
  );
};

export default SearchbarComponet;
