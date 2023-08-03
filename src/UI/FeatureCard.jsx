import React from "react";
import classes from "./FeatureCard.module.css";


const FeatureCard = (props) => {
  return (
    <div
      className={`${classes['feature-container']} col-md-3 col-lg-3 col-sm-6`}
    >
      <div className={`${classes["feature-box"]} text-center`}>
      <div className={`${classes['feature-icons']}`}>
        {props.icon}
        </div>

        <div className={`${classes.text} `}>
          {/* <a href="#"> */}
          <h4>{props.title}</h4>
          {/* </a> */}
          <p className="light-text">{props.desc}</p>
        </div>
        {/* <span className="wm">1</span> */}
      </div>
    </div>
  );
};

export default FeatureCard;
