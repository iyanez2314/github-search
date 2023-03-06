import React, { useState } from "react";
import icon from "../Assets/icon-search.svg";

const SearchbarComponet = ({ fetchUser }) => {
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleBtnClick() {
    fetchUser(userInput);
  }

  return (
    <div className="Input-container">
      <div className="search-icon-container">
        <img className="search-icon" src={icon} alt="search icon" />
      </div>
      <input
        value={userInput}
        onChange={handleChange}
        placeholder="Search GitHub username"
        className="input-field"
      />
      <button onClick={handleBtnClick}>Search</button>
    </div>
  );
};

export default SearchbarComponet;
