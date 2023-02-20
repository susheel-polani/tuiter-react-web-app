import React from "react";
import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";
import "./index.css";

const WhoToFollowList = () => {
  return (
    <div>
      <ul className="list-group" id="who-to-follow-list">
        <li className="list-group-item fw-bold">Who to Follow</li>
        {whoArray.map((who) => (
          <WhoToFollowListItem key={who._id} who={who} />
        ))}
        <li className="list-group-item">
          <a id="show-more" href="#">
            Show More
          </a>
        </li>
      </ul>
      <div className="terms-links ps-2">
        <span>Terms of Service &nbsp;</span>
        <span>Privacy Policy &nbsp;</span>
        <span>Cookie Policy &nbsp;</span>
        <br />
        <span>Accessibility &nbsp;</span>
        <span>Ads Info &nbsp;</span>
        <span>More &nbsp;</span>
        <span>---</span>
        <br />
        <span>@ 2023 Twitter, Inc.</span>
      </div>
    </div>
  );
};

export default WhoToFollowList;
