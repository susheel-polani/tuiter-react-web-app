import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  var active = paths[2];
  if (!paths[2]) {
    active = "home";
  }
  return (
    <div>
      <div className="list-group" id="nav-list-group">
        <li className="list-group-item">
          <i className="fab fa-twitter fa-2x" style={{ color: "#1d9bf0" }}></i>
        </li>
        <Link
          to="/tuiter/home"
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
        >
          <i className="fas fa-home"></i>
          <span className="navigation-label ps-1">Home</span>
        </Link>
        <Link
          to="/tuiter/explore"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
        >
          <i className="fas fa-hashtag"></i>
          <span className="navigation-label ps-1">Explore</span>
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fas fa-flask"></i>
          <span className="navigation-label ps-1">Labs</span>
        </Link>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "Notifications" ? "active" : ""
          }`}
        >
          <i className="fas fa-bell"></i>
          <span className="navigation-label ps-1">Notifications</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "Messages" ? "active" : ""
          }`}
        >
          <i className="fas fa-envelope"></i>
          <span className="navigation-label ps-1">Messages</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "Bookmarks" ? "active" : ""
          }`}
        >
          <i className="fas fa-bookmark"></i>
          <span className="navigation-label ps-1">Bookmarks</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "Lists" ? "active" : ""
          }`}
        >
          <i className="fas fa-list"></i>
          <span className="navigation-label ps-1">Lists</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "Profile" ? "active" : ""
          }`}
        >
          <i className="fas fa-user"></i>
          <span className="navigation-label ps-1">Profile</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "More" ? "active" : ""
          }`}
        >
          <i className="fas fa-grip-vertical"></i>
          <span className="navigation-label ps-1">More</span>
        </a>
      </div>
      <div className="d-grid pt-2">
        <button className="btn btn-primary rounded-pill">Tweet</button>
      </div>
    </div>
  );
};
export default NavigationSidebar;
