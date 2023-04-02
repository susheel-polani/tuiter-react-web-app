import React from "react";
import { toggleLike } from "./tuits-reducer";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ post }) => {
  const dispatch = useDispatch();
  const togglePostLike = (tuit) => {
    if (!tuit.liked) {
      dispatch(
        updateTuitThunk({
          ...tuit,
          likes: tuit.likes + 1,
          liked: !tuit.liked,
        })
      );
    } else {
      dispatch(
        updateTuitThunk({
          ...tuit,
          likes: tuit.likes - 1,
          liked: !tuit.liked,
        })
      );
    }
  };
  const togglePostDislike = (tuit) => {
    if (!tuit.disliked) {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1,
          disliked: !tuit.disliked,
        })
      );
    } else {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes - 1,
          disliked: !tuit.disliked,
        })
      );
    }
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
          onClick={() => togglePostLike(post)}
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
        <a
          role="button"
          className="wd-post-link"
          onClick={() => togglePostDislike(post)}
        >
          <i
            className={`fas fa-thumbs-down pe-2 ${
              post.disliked === true ? "wd-liked-heart" : "text-secondary"
            }`}
          ></i>
          <span className="text-secondary">{post.dislikes}</span>
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
