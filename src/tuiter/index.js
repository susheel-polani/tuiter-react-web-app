import { Link } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import PostList from "./home";
import { Routes, Route } from "react-router";
function Tuiter() {
  return (
    <div className="pt-2">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-6">
            <Routes>
              <Route path="" element={<PostList />} />
              <Route path="home" element={<PostList />} />
              <Route path="explore" element={<ExploreComponent />} />
            </Routes>
          </div>
          <div className="col-4 who-to-follow">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
