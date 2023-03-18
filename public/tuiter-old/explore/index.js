import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(`
    <div class="pt-2">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <!--<h3>Navigation Sidebar</h3>-->
                    ${NavigationSidebar("Explore")}
                </div>
                <div class="col-6">
                    ${ExploreComponent()}
                </div>
                <div class="col-4 who-to-follow">
                    ${WhoToFollowList()}
                </div>
            </div>
        </div>
    </div>
    `);
}

$(exploreComponent);
