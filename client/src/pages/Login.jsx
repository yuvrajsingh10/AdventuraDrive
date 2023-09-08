import React, { useContext, useEffect, useState } from "react";
import CustomInput from "../components/customInput/CustomInput";
import classes from "./Login.module.css";
import Button from "../components/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, redirect,NavLink } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(8, "invalid password")
    .max(16, "invalid password "),
});
const Login = () => {

  const navigate = useNavigate();
  const {authLogin,isLoading,error}=useLogin();
  const user = useAuthContext();
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await authLogin(values);
      setTimeout(()=>{
        navigate('/')
        redirect('/')
      },500)
    },
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      navigate('/');
    }
  }, []);

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
              onChange: formik.handleChange("email"),
              onBlur: formik.handleBlur("email"),
              value: formik.values.email,
            }}
            touched={formik.touched.password}
            error={formik.errors.email}
          />
          <CustomInput
            Attr={{
              label: "Password",
              type: "password",
              id: "password",
              name: "password",
              onChange: formik.handleChange("password"),
              onBlur: formik.handleBlur("password"),
              value: formik.values.password,
            }}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <NavLink className="link mx-2" to={"/my-account"}>
            Forget Password
          </NavLink>
          <Button type="submit" title="Login"  disabled={isLoading}/>
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
