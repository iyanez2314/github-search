import React from "react";
import icon from "../Assets/icon-sun.svg";

const HeaderComponent = () => {
  return (
    <div className="Header-container">
      <h1>devfinder</h1>
      <div className="icon-container">
        <h4>Light</h4>
        <img src={icon} alt="Icon to switch between light mode and dark mode" />
      </div>
    </div>
  );
};

export default HeaderComponent;
