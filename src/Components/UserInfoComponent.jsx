import React from "react";
import legoMan from "../Assets/lego-3.jpeg";
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
  userLocation,
  userCompany,
  userTwitter,
}) => {
  return (
    <div className="info">
      <div className="users-info">
        <img
          src={!imageUrl ? legoMan : imageUrl}
          alt="Searched users avitar"
          className="users-avi"
        />
        <div className="user-profile-info">
          {!name ? <h3>Lego Man</h3> : <h3>{name}</h3>}
          {!username ? (
            <h4 className="github-handle">@Lego Man</h4>
          ) : (
            <h4 className="github-handle">
              <a href={userHtml}>@{username}</a>
            </h4>
          )}
          {!createdAt ? (
            <h4 className="github-join">Yesterday</h4>
          ) : (
            <h4 className="github-join">{createdAt}</h4>
          )}
        </div>
      </div>
      <div className="user-bio">
        {!bio ? <p>Just a lego man trying to build a future</p> : <p>{bio}</p>}
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

      {/* Need to make a component for the socials to make this component looka bit cleaner */}

      <div className="user-socials">
        {/* Users location */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={locationIcon}
            alt="location Icon"
          />
          {!userLocation ? (
            <p className="no-info">Not Avaliable</p>
          ) : (
            <p>{userLocation}</p>
          )}
        </div>
        {/* Users website */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={websiteIcon}
            alt="location Icon"
          />
          {!userHtml ? <p>Not Avaliable</p> : <p>{userHtml}</p>}
        </div>
        {/* Users twitter */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={twitterIcon}
            alt="location Icon"
          />
          {!userTwitter ? (
            <p className="no-info">Not Avaliable</p>
          ) : (
            <p>userTwitter</p>
          )}
        </div>
        {/* Users company */}
        <div className="user-information wfc">
          <img
            className="location-icon"
            src={companyIcon}
            alt="location Icon"
          />
          {!userCompany ? (
            <p className="no-info">Not Avaliable</p>
          ) : (
            <p>{userCompany}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserinfoComponent;
