const PostSummaryListItem = (post) => {
  return `
        <li class="list-group-item">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="text-secondary">
                      <span>${post.topic}</span>
                    </div>
                    <span class="fw-bold">${post.userName}</span>
                    <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fs-6"> - ${post.time}</span>
                    <div class="fw-bold">
                      ${post.title}
                    </div>
                    <div class="text-secondary fs-6">
                      <span>${post.tweets} Tweets</span>
                    </div>
                </div>
                <img
                    src="${post.image}"
                    width="90px"
                    height="90px"
                    class="rounded"
                />
            </div>
        </li>
  `;
};
export default PostSummaryListItem;
