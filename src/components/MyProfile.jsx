import React from "react";
import CustomInput from "./customInput/CustomInput";
import classes from "./MyProfile.module.css";
import Button from "./button/Button";
const MyProfile = () => {
  return (
    <>
      <h5>Profile</h5>
      <form action="" className={classes.form}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column ">
            <CustomInput
              label="Username"
              type="text"
              id="username"
              name="username"
            />
            <CustomInput
              label="New Password"
              type="password"
              id="Password"
              name="password"
            />
            <h6>Language</h6>
            <p>select your prefered language</p>
            <select name="language" className={classes.language} id="Language">
              <option value="">English</option>
              <option value="">German</option>
            </select>
          </div>
          <div className="col-md-6 d-flex flex-column ">
            <CustomInput label="Email" type="email" id="email" name="email" />
            <CustomInput
              label="Re-enter Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <h6>Hour Format</h6>
            <p>select your prefered language</p>
            <select name="language" className={classes.language} id="Language">
              <option value="24">24-Hour</option>
              <option value="12">12-Hour</option>
            </select>
          </div>
          <div>
            <Button type="submit" title="Update Profile" />
          </div>
        </div>
      </form>
    </>
  );
};

export default MyProfile;
