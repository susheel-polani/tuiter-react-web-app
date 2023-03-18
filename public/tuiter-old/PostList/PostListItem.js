const PostListItem = (post) => {
  return `
          <li class="list-group-item">
            <div class="d-flex">
              <div class="pe-2">
                <img
                  src="${post.image}"
                  class="rounded-circle"
                  height="50px"
                  width="50px"
                />
              </div>
            <div class="flex-grow-1">
              <div class="d-flex align-items-center">
                <span class="fw-bold pe-1">${post.name}</span>
                <span class="text-secondary fs-6 pe-1"
                  >@${post.handle}</span
                >
                <i class="fas fa-circle wd-dot-icon pe-1"></i>
                <span class="text-secondary fs-6 flex-grow-1">${post.date}</span>
                <a href="#" class="text-secondary">
                  <i class="fas fa-ellipsis-h"></i>
                </a>
              </div>
              <div>
                <p>
                  ${post.summaryContent}
                </p>
              </div>
              <div class="card" style="width: fit-content">
                <img
                  class="card-img-top"
                  src="${post.postImage}"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${post.postHeading}
                  </h5>
                  <p class="card-text text-secondary">
                    ${post.postContent}
                  </p>
                  <div>
                    <i class="fas fa-link"></i>
                    <a
                      href="https://www.${post.postLink}"
                      class="wd-post-link text-secondary"
                      >${post.postLink}</a
                    >
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between pt-2">
                <div>
                  <a href="#" class="wd-post-link">
                    <i class="fas fa-comment text-secondary"></i>
                    <span class="text-secondary">${post.comments}</span>
                  </a>
                </div>
                <div>
                  <a href="#" class="wd-post-link">
                    <i class="fas fa-retweet text-secondary"></i>
                    <span class="text-secondary">${post.retweets}</span>
                  </a>
                </div>
                <div>
                  <a href="#" class="wd-post-link">
                    <i class="fas fa-heart text-secondary"></i>
                    <span class="text-secondary">${post.likes}</span>
                  </a>
                </div>
                <div>
                  <a href="#" class="wd-post-link">
                    <i class="fas fa-upload text-secondary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
    `;
};
export default PostListItem;
