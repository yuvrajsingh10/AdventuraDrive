import React, { useState } from "react";
import classes from "./forgotPassword.module.css";
import SubheaderWrapper from "../../UI/SubheaderWrapper";
import Button from "../button/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import { useLogin } from "../../hooks/useLogin";
const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const initialValues = {
  email: "",
};
const emailSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Required"),
});
const FrogetPassword = (props) => {
  const { forgetPassword } = useLogin();
  const formik = useFormik({
    initialValues,
    validationSchema: emailSchema,
    onSubmit: async(value) => {
      console.log(value)
      await forgetPassword(value)
    },
  });

  return (
    <>
      <SubheaderWrapper heading={"Booking"} img={img}></SubheaderWrapper>
      <div className={classes["forgot-password"]}>
        <p>Enter email Address </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            id="forgetPassword"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <Button type="submit" title="Reset Password" />
        </form>
        <h6>{formik.touched.email && formik.errors.email}</h6>
      </div>
    </>
  );
};

export default FrogetPassword;
