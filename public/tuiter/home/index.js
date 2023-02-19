import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
  $("#wd-home").append(`
      <div class="pt-2">
          <div class="container">
              <div class="row">
                  <div class="col-2">
                      <!--<h3>Navigation Sidebar</h3>-->
                      ${NavigationSidebar("Home")}
                  </div>
                  <div class="col-6">
                      ${PostList()}
                  </div>
                  <div class="col-4 who-to-follow">
                      ${PostSummaryList()}
                  </div>
              </div>
          </div>
      </div>
      `);
}

$(homeComponent);
