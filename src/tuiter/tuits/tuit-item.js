import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
      <div className="d-flex">
        <div className="pe-2">
          <img
            src={`${post.image}`}
            className="rounded-circle"
            height="50px"
            width="50px"
          />
        </div>
        <div className="flex-grow-1">
          <div className="d-flex align-items-center">
            <span className="fw-bold pe-1">{post.userName}</span>
            <span className="text-secondary fs-6 pe-1">{post.handle}</span>
            <i className="fas fa-circle wd-dot-icon pe-1"></i>
            <span className="text-secondary fs-6 flex-grow-1">{post.time}</span>
            <a
              role="button"
              className="text-secondary"
              onClick={() => deleteTuitHandler(post._id)}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div>
            <p>{post.tuit}</p>
          </div>
          <TuitStats post={post} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
