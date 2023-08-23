import React from "react";
import CustomInput from "../components/customInput/CustomInput";
import classes from "./Login.module.css";
import Button from "../components/button/Button";

const Login = () => {
  return (
    <div className={classes["container-fluid"]}>
      <div className={classes["login-container"]}>
        <h5 className="mb-4 mt-3 text-center">Login</h5>
        <form className={classes["login-form"]}>
          <CustomInput
            Attr={{ label: "Email", type: "email", id: "email", name: "email" }}
          />
          <CustomInput
            Attr={{
              label: "Password",
              type: "password",
              id: "password",
              name: "Password",
            }}
          />
          <Button type="submit" title="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
