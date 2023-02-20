import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="border border-1 rounded-pill flex-grow-1 wd-search-container">
          <label htmlFor="search" className="ps-2">
            <i className="fas fa-search" style={{ color: "#536471" }}></i>
          </label>
          <input
            type="text"
            name="search"
            placeholder="Search Twitter"
            className="border-0 ps-2 wd-search-bar"
          />
        </div>
        <a href="./explore-settings.html">
          <i className="fas fa-cog ps-2 fa-2x" style={{ color: "#8a8f93" }}></i>
        </a>
      </div>

      <ul className="nav nav-pills nav-fill pt-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            For You
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link entertainment-tab" href="#">
            Entertainment
          </a>
        </li>
      </ul>

      <div className="image-container pt-2">
        <img src="/assets/spacex-starship.webp" className="img-fluid" />
        <div className="text-bottom-left">
          <span>SpaceX's Starship</span>
        </div>
      </div>
      <PostSummaryList />
    </div>
  );
};
export default ExploreComponent;
