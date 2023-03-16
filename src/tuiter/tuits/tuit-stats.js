import React from "react";
import { toggleLike } from "./tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const togglePostLike = (id) => {
    dispatch(toggleLike(id));
  };

  return (
    <div className="d-flex justify-content-between w-75">
      <div>
        <a href="#" className="wd-post-link">
          <i className="fas fa-comment text-secondary pe-2 ps-2"></i>
          <span className="text-secondary">{post.replies}</span>
        </a>
      </div>
      <div>
        <a href="#" className="wd-post-link">
          <i className="fas fa-retweet text-secondary pe-2"></i>
          <span className="text-secondary">{post.retuits}</span>
        </a>
      </div>
      <div>
        <a
          role="button"
          className="wd-post-link"
          onClick={() => togglePostLike(post._id)}
        >
          <i
            className={`fas fa-heart pe-2 ${
              post.liked === true ? "wd-liked-heart" : "text-secondary"
            }`}
          ></i>
          <span className="text-secondary">{post.likes}</span>
        </a>
      </div>
      <div>
        <a href="#" className="wd-post-link">
          <i className="fas fa-share-alt text-secondary pe-2"></i>
        </a>
      </div>
    </div>
  );
};

export default TuitStats;
