import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <div className="pe-2">
          <img
            src={`${who.avatarIcon}`}
            className="rounded-circle"
            height="50px"
            width="50px"
          />
        </div>
        <div className="flex-grow-1">
          <div>
            <span className="fw-bold">{who.userName}</span>
            <i className="fas fa-check-circle"></i>
          </div>
          <div>
            <span>@{who.handle}</span>
          </div>
        </div>
        <div>
          <button className="btn btn-dark rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
