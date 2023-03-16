import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
    tweets: "123K",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center">
        <div className="flex-grow-1">
          <div className="text-secondary">
            <span>{post.topic}</span>
          </div>
          <span className="fw-bold pe-1">{post.userName}</span>
          <i className="fas fa-check-circle"></i>
          <span className="text-secondary fs-6"> - {post.time}</span>
          <div className="fw-bold">{post.title}</div>
          <div className="text-secondary fs-6">
            <span>{post.retuits} Tweets</span>
          </div>
        </div>
        <img
          src={`${post.image}`}
          width="90px"
          height="90px"
          className="rounded"
        />
      </div>
    </li>
  );
};
export default PostSummaryItem;
