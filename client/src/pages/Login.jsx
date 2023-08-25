import React from "react";
import CustomInput from "../components/customInput/CustomInput";
import classes from "./Login.module.css";
import Button from "../components/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email:Yup.string()
  .email('Invalid Email')
  .required('Required'),
  password:Yup.string()
  .min(8,"invalid password")
  .max(16,"invalid password ")
});
const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema:LoginSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className={classes["container-fluid"]}>
      <div className={classes["login-container"]}>
        <h5 className="mb-4 mt-3 text-center">Login</h5>
        <form className={classes["login-form"]} onSubmit={formik.handleSubmit}>
          <CustomInput
            Attr={{
              label: "Email",
              type: "email",
              id: "email",
              name: "email",
              onChange: formik.handleChange,
              value: formik.values.email,
            }}
            error={formik.errors.email}
          />
          <CustomInput
            Attr={{
              label: "Password",
              type: "password",
              id: "password",
              name: "password",
              onChange: formik.handleChange,
              value: formik.values.password,
            }}
            error={formik.errors.password}
          />
          <Button type="submit" title="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
