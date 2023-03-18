import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div>
      <div className="wd-banner-pic-width">
        <div>
          <img
            src={profile.bannerPicture}
            className="wd-banner"
            width="624px"
          />
        </div>
        <div className="wd-pic-pos">
          <img
            src={profile.profilePicture}
            className="rounded-circle wd-profile-pic"
          />
          <Link to="/tuiter/edit-profile">
            <button className="btn btn-primary rounded-pill wd-edit-button">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div>
        <span className="wd-bold">{profile.firstName}</span>
        <span className="wd-bold"> {profile.lastName}</span>
      </div>
      <div>
        <span className="text-secondary fs-6">{profile.handle}</span>
      </div>
      <div className="mt-2">
        <p>{profile.bio}</p>
      </div>
      <div className="d-flex justify-content-between w-75 text-secondary">
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <span> {profile.location}</span>
        </div>
        <div>
          <i className="fas fa-birthday-cake"></i>
          <span> Born {profile.dateOfBirth}</span>
        </div>
        <div>
          <i className="fas fa-calendar"></i>
          <span> Joined {profile.dateJoined}</span>
        </div>
      </div>
      <div className="pt-2">
        <span className="wd-bold-only">{profile.followingCount}</span>
        <span className="text-secondary"> Following</span>
        <span className="wd-bold-only ps-4">{profile.followersCount}</span>
        <span className="text-secondary"> Followers</span>
      </div>
    </div>
  );
};

export default Profile;
