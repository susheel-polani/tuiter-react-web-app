import React from "react";
const PostListItem = ({
  post = {
    image: "/assets/pf.webp",
    name: "Robert Zubrin",
    handle: "robert_zubrin",
    date: "Jul 31",
    summaryContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
    postImage: "/assets/class.jpg",
    postHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    postLink: "rt.com",
    likes: "37.5K",
    retweets: "3.5K",
    comments: "4.2K",
  },
}) => {
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
            <span className="fw-bold pe-1">{post.name}</span>
            <span className="text-secondary fs-6 pe-1">@{post.handle}</span>
            <i className="fas fa-circle wd-dot-icon pe-1"></i>
            <span className="text-secondary fs-6 flex-grow-1">{post.date}</span>
            <a href="#" className="text-secondary">
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </div>
          <div>
            <p>{post.summaryContent}</p>
          </div>
          <div className="card" style={{ width: "fit-content" }}>
            <img
              className="card-img-top"
              src={`${post.postImage}`}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{post.postHeading}</h5>
              <p className="card-text text-secondary">{post.postContent}</p>
              <div>
                <i className="fas fa-link"></i>
                <a
                  href="https://www.${post.postLink}"
                  className="wd-post-link text-secondary"
                >
                  {post.postLink}
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between pt-2">
            <div>
              <a href="#" className="wd-post-link">
                <i className="fas fa-comment text-secondary pe-2 ps-2"></i>
                <span className="text-secondary">{post.comments}</span>
              </a>
            </div>
            <div>
              <a href="#" className="wd-post-link">
                <i className="fas fa-retweet text-secondary pe-2"></i>
                <span className="text-secondary">{post.retweets}</span>
              </a>
            </div>
            <div>
              <a href="#" className="wd-post-link">
                <i className="fas fa-heart text-secondary pe-2"></i>
                <span className="text-secondary">{post.likes}</span>
              </a>
            </div>
            <div>
              <a href="#" className="wd-post-link">
                <i className="fas fa-upload text-secondary pe-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default PostListItem;
