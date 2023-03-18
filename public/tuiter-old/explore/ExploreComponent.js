import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="d-flex align-items-center">
                <div class="border border-1 rounded-pill flex-grow-1">
                    <label for="search" class="ps-2"
                        ><i class="fas fa-search"></i
                    ></label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Twitter"
                        class="border-0 ps-2"
                    />
                </div>
                <a href="./explore-settings.html">
                    <i class="fas fa-cog ps-2 fa-2x" style="color: #0d6efd"></i>
                </a>
            </div>
            <ul class="nav nav-tabs pt-2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                    >For You</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link entertainment-tab" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="image-container pt-2">
                <img src="./assets/spacex-starship.webp" class="img-fluid" />
                <div class="text-bottom-left">
                    <span>SpaceX's Starship</span>
                </div>
            </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
