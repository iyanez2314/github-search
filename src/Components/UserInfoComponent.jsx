import React from "react";
import legoman from "../Assets/lego-3.jpeg";

const UserinfoComponent = () => {
  return (
    <div className="info">
      <div className="users-info">
        <img src={legoman} alt="Searched users avitar" className="users-avi" />
        <div className="user-profile-info">
          <h3>The Octocat</h3>
          <h4 className="github-handle">@octocat</h4>
          <h4 className="github-join">Joined 25 Jan 2011</h4>
        </div>
      </div>
      <div className="user-bio">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odio
        </p>
      </div>

      <div className="user-repo-container">
        <div className="repo-count column">
          <p>Repos</p>
          <h3>8</h3>
        </div>
        <div className="followers column">
          <p>Followers</p>
          <h3>30000</h3>
        </div>

        <div className="Following column">
          <p>Following</p>
          <h3>200</h3>
        </div>
      </div>

      <div className="user-socials"></div>
    </div>
  );
};

export default UserinfoComponent;
