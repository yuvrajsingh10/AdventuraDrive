import React from "react";
import classes from "./subHeaderWrapper.module.css";

const SubheaderWrapper = (props) => {
  return (
    <section className={`${classes.subHeaderWrapper_section_container} mb-5`}>
      <img src={props.img} className={classes.subHeaderWrapper__img} alt="" />
      <div className={`container h-100`}>
        <div className={`row ${classes.subHeaderWrapper_section}`}>
          <h1>{props.heading}</h1>
        </div>
      </div>
      {props.children}
    </section>
  );
};

export default SubheaderWrapper;
