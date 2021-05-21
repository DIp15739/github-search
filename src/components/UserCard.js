import React from "react";
// import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <div id="profile">
      <div>
        <div
          id="profile_img"
          style={{ background: `url(${user.avatar_url}) center` }}
        />
        <div id="username">
          <span style={{ display: "block" }}>{user.name}</span>
          <a href={user.html_url}>@{user.login}</a>
        </div>
        {user.bio === null ? (
          ""
        ) : (
          <div id="userbio" style={{ display: "block" }}>
            {user.bio}
          </div>
        )}
        {user.blog === "" ? (
          ""
        ) : (
          <div id="about">
            <span style={{ display: "block" }}>
              <i className="fas fa-link" /> &nbsp;
              <a href={user.blog}>{user.blog}</a>
            </span>
          </div>
        )}

        {user.location === null ? (
          ""
        ) : (
          <div id="about">
            <span style={{ display: "block" }}>
              <i className="fas fa-map-marker-alt" /> &nbsp;&nbsp;{" "}
              {user.location}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
