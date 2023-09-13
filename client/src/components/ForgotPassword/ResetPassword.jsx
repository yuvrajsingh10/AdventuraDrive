import React from "react";
import CustomInput from "../customInput/CustomInput";
import classes from "./ResetPassword.module.css";
import SubheaderWrapper from "../../UI/SubheaderWrapper";
import Button from "../button/Button";
import * as Yup from "yup";
import { useFormik } from "formik";

const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const passwordSchema = Yup.object().shape({
  password: Yup.string().required("Required").min(8).max(16),
  confirmPassword: Yup.string().required("Required").min(8).max(16),
});
const ResetPassword = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
        if(values.password !== values.confirmPassword) return
      console.log(values);
    },
  });
  return (
    <>
      <SubheaderWrapper heading={"Reset Password"} img={img}></SubheaderWrapper>
      <div className={classes["reset-password"]}>
        <p>Enter Password </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            Attr={{
              label: "Password",
              type: "password",
              id: "password",
              name: "password",
              value: formik.values.password,
              onChange: formik.handleChange("password"),
              onBlur: formik.handleBlur("password"),
            }}
          />
          <CustomInput
            Attr={{
              label: "Confirm Password",
              type: "password",
              id: "confirmPassword",
              name: "confirmPassword",
              value: formik.values.confirmPassword,
              onChange: formik.handleChange("confirmPassword"),
              onBlur: formik.handleBlur("confirmPassword"),
            }}
          />
          <Button type="submit" title="Reset Password" />
        </form>
        <h6>{formik.touched.email && formik.errors.email}</h6>
      </div>
    </>
  );
};

export default ResetPassword;
