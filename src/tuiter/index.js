import { Link } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import PostList from "./tuits/tuit-list";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});
function Tuiter() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default Tuiter;
