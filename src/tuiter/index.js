import { Link } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import PostList from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
    profile: profileReducer,
  },
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
                <Route path="profile" element={<ProfileComponent />} />
                <Route path="edit-profile" element={<EditProfileComponent />} />
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
