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
    </>
  );
};

export default CustomInput;
