const WhoToFollowListItem = (who) => {
  return `
        <li class="list-group-item">
            <div class="d-flex align-items-center">
                <div class="pe-2">
                    <img
                    src="${who.avatarIcon}"
                    class="rounded-circle"
                    height="50px"
                    width="50px"
                    />
                </div>
                <div class="flex-grow-1">
                    <div>
                        <span class="fw-bold">${who.userName}</span>
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                    <span>@${who.handle}</span>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `;
};
export default WhoToFollowListItem;
