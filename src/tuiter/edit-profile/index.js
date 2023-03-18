import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../profile/profile-reducer";
import "./index.css";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [changedProfile, setProfile] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    bio: profile.bio,
    location: profile.location,
    dateOfBirth: profile.dateOfBirth,
  });
  const firstNameChangeHandler = (event) => {
    const firstNameValue = event.target.value;
    const newProfile = {
      ...changedProfile,
      firstName: firstNameValue,
    };
    setProfile(newProfile);
  };
  const lastNameChangeHandler = (event) => {
    const lastNameValue = event.target.value;
    const newProfile = {
      ...changedProfile,
      lastName: lastNameValue,
    };
    setProfile(newProfile);
  };
  const bioChangeHandler = (event) => {
    const bioValue = event.target.value;
    const newProfile = {
      ...changedProfile,
      bio: bioValue,
    };
    setProfile(newProfile);
  };
  const locationChangeHandler = (event) => {
    const locationValue = event.target.value;
    const newProfile = {
      ...changedProfile,
      location: locationValue,
    };
    setProfile(newProfile);
  };
  const birthDateChangeHandler = (event) => {
    const birthDateValue = event.target.value;
    const newProfile = {
      ...changedProfile,
      dateOfBirth: birthDateValue,
    };
    setProfile(newProfile);
  };
  const updateProfileClickHandler = () => {
    dispatch(updateProfile(changedProfile));
  };
  return (
    <div>
      <div className="d-flex">
        <div className="p-2">
          <Link to="/tuiter/profile">
            <i className="fas fa-times text-black" role="button"></i>
          </Link>
        </div>
        <div className="p-2 wd-bold-only">Edit Profile</div>
        <div className="ms-auto p-2 pe-0">
          <Link to="/tuiter/profile">
            <button
              className="btn btn-primary rounded-pill"
              onClick={updateProfileClickHandler}
            >
              Save
            </button>
          </Link>
        </div>
      </div>
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
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="edit-firstname" className="text-secondary">
            First Name:
          </label>
          <br />
          <textarea
            id="edit-firstname"
            className="wd-text-area-dim"
            onChange={firstNameChangeHandler}
            defaultValue={profile.firstName}
          />
        </div>
        <div>
          <label htmlFor="edit-lastname" className="text-secondary">
            Last Name:
          </label>
          <br />
          <textarea
            id="edit-lastname"
            className="wd-text-area-dim"
            onChange={lastNameChangeHandler}
            defaultValue={profile.lastName}
          />
        </div>
        <div>
          <label htmlFor="edit-bio" className="text-secondary">
            Bio:
          </label>
          <br />
          <textarea
            id="edit-bio"
            className="wd-text-area-dim"
            onChange={bioChangeHandler}
            defaultValue={profile.bio}
          />
        </div>
        <div>
          <label htmlFor="edit-firstname" className="text-secondary">
            Location:
          </label>
          <br />
          <textarea
            id="edit-firstname"
            className="wd-text-area-dim"
            onChange={locationChangeHandler}
            defaultValue={profile.location}
          />
        </div>
        <div>
          <label htmlFor="edit-birthdate" className="text-secondary">
            Birth Date:
          </label>
          <br />
          <textarea
            id="edit-birthdate"
            className="wd-text-area-dim"
            onChange={birthDateChangeHandler}
            defaultValue={profile.dateOfBirth}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
