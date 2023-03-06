import React from "react";
import locationIcon from "../Assets/icon-location.svg";
import companyIcon from "../Assets/icon-company.svg";
import twitterIcon from "../Assets/icon-twitter.svg";
import websiteIcon from "../Assets/icon-website.svg";

const UserinfoComponent = ({
  name,
  repos,
  followers,
  following,
  username,
  imageUrl,
  createdAt,
  bio,
  userHtml,
}) => {
  return (
    <div className="info">
      <div className="users-info">
        <img src={imageUrl} alt="Searched users avitar" className="users-avi" />
        <div className="user-profile-info">
          <h3>{name}</h3>
          <h4 className="github-handle">
            @<a href={userHtml}>{username}</a>
          </h4>
          <h4 className="github-join">{createdAt}</h4>
        </div>
      </div>
      <div className="user-bio">
        <p>{bio}</p>
      </div>
      <div className="user-repo-container">
        <div className="repo-count column">
          <p>Repos</p>
          <h3>{repos}</h3>
        </div>
        <div className="followers column">
          <p>Followers</p>
          <h3>{followers}</h3>
        </div>

        <div className="Following column">
          <p>Following</p>
          <h3>{following}</h3>
        </div>
      </div>

      <div className="user-socials">
        {/* Users location */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={locationIcon}
            alt="location Icon"
          />
          <p>San Francisco</p>
        </div>
        {/* Users website */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={websiteIcon}
            alt="location Icon"
          />
          <p>San Francisco</p>
        </div>
        {/* Users twitter */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={twitterIcon}
            alt="location Icon"
          />
          <p>San Francisco</p>
        </div>
        {/* Users company */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={companyIcon}
            alt="location Icon"
          />
          <p>San Francisco</p>
        </div>
      </div>
    </div>
  );
};

export default UserinfoComponent;
