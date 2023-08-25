import React from "react";
import SubheaderWrapper from "../UI/SubheaderWrapper";
import classes from "./Register.module.css";
import CustomInput from "../components/customInput/CustomInput";
import Button from "../components/button/Button";
import { useFormik } from "formik";
import * as Yup from 'yup'

const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  age:'',
  password: "",
  confirmPassword:""
};

const SignupSchema = Yup.object().shape({
  name:Yup.string()
  .min(2,"Too Short")
  .max(50,"Too Long")
  .required('Required'),
  email:Yup.string()
  .email('Invalid Email')
  .required('Required'),
  password:Yup.string()
  .min(8,"Too Short Password")
  .max(16,"Too Long Password "),
  age:Yup.number()
  .required('Required')
  .positive()
  .integer(),
  phone:Yup.number()
  .required('Required')
  .min(10,"Too Short")
  .max(10,"Too Long"),
})
const Register = () => {
  const formik = useFormik({
    initialValues,
    validationSchema:SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
          <form
            className={classes["register-form"]}
            onSubmit={formik.handleSubmit}
          >
            <div className="row my-4">
              <div className="col-md-6 ">
                <CustomInput
                  Attr={{
                    label: "Name",
                    type: "text",
                    id: "name",
                    name: "name",
                    onChange:formik.handleChange ,value:formik.values.name
                  }}
                  error={formik.errors.name}
                />
                <CustomInput
                  Attr={{
                    label: "Email",
                    type: "email",
                    id: "email",
                    name: "email", 
                    onChange:formik.handleChange ,value:formik.values.email
                  }}
                  error={formik.errors.email}
                  />
                <CustomInput
                  Attr={{
                    label: "Password",
                    type: "password",
                    id: "password",
                    name: "password",
                    onChange:formik.handleChange ,value:formik.values.password
                  }}
                  error={formik.errors.password}
                />
              </div>
              <div className="col-md-6 ">
                <CustomInput
                  Attr={{ label: "Age", id: "age", type: "text", name: "age" ,onChange:formik.handleChange ,value:formik.values.age }}
                  error={formik.errors.age}
                />
                <CustomInput
                  Attr={{
                    label: "Phone",
                    id: "phone",
                    type: "text",
                    name: "phone",
                    onChange:formik.handleChange ,
                    value:formik.values.phone
                  }}
                  error={formik.errors.phone}
                />
                <CustomInput
                  Attr={{
                    label: "Confirm Password",
                    name: "confirmPassword",
                    type: "password",
                    id: "confirmPassword", 
                    onChange:formik.handleChange ,value:formik.values.confirmPassword
                  }}
                  error={formik.errors.confirmPassword}
                />
                satya prem ki kahani
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
