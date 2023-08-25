import React from "react";
import classes from "./input.module.css";

const CustomInput = (props) => {
  const { type, className, name, label } = props;
  return (
    <>
      <label htmlFor={props.Attr.id}>{props.Attr.label} :</label>
      <input
        className={`${className} ${classes.input}`}
        placeholder={props.Attr.label}
        {...props.Attr}
      />
      {props.error && <p className={classes.error}>{props.error}</p>}
    </>
  );
};

export default CustomInput;
