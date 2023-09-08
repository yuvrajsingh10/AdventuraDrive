import React from "react";
import CustomInput from "../customInput/CustomInput";
import classes from "./MyProfile.module.css";
import Button from "../button/Button";
const MyProfile = () => {
  return (
    <>
      <h5>Profile</h5>
      <form action="" className={classes.form}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column ">
            <CustomInput
              Attr={{
                label: "Username",
                type: "text",
                id: "username",
                name: "username",
              }}
            />
            <CustomInput
              Attr={{
                label: "New Password",
                type: "password",
                id: "Password",
                name: "password",
              }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column ">
            <CustomInput
              Attr={{
                label: "Email",
                type: "email",
                id: "email",
                name: "email",
              }}
            />
            <CustomInput
              Attr={{
                label: "Re-enter Password",
                type: "password",
                id: "confirmPassword",
                name: "confirmPassword",
              }}
            />
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
