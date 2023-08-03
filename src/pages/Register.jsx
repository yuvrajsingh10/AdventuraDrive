import React from "react";
import SubheaderWrapper from "../UI/SubheaderWrapper";
import classes from "./Register.module.css";
import CustomInput from "../components/customInput/CustomInput";
import Button from "../components/button/Button";

const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const Register = () => {
  return (
    <>
      <SubheaderWrapper heading="Register" img={img}></SubheaderWrapper>
      <section className={classes["register-section"]}>
        <div className="row w-50 mx-auto">
          <h3>Don't have an account? Register now.</h3>
          <p className="mt-4">
            Welcome to Rentaly. We're excited to have you on board. By creating
            an account with us, you'll gain access to a range of benefits and
            convenient features that will enhance your car rental experience.
          </p>
          <form className={classes['register-form']}>
            <div className="row my-4">
              <div className="col-md-6 ">
                <CustomInput label="Name" type="text" id="name" name="name" />
                <CustomInput label="Email" type="email" id="email" name="email" />
                <CustomInput label="Password" type="password" id="password" name="password" />
              </div>
              <div className="col-md-6 ">
                <CustomInput label="Age" id="age" type="text" name="age"/>
                <CustomInput label="Phone" id="phone" type="text" name="phone"/>
                <CustomInput label="Confirm Password" name="confirmPassword" type="password" id="confirmPassword" />
              </div>
            </div>
            <div className="d-inline">
                <Button title="Register" className="float-right" type="Submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
