import React from "react";
import classes from "./HeroInfo.module.css";

const HeroInfo = (props) => {
  return (
    <div className={`col-md-5 my-3 ${classes["hero-info"]}`}>
      <span className="px-3 py-2 me-4 mb-auto mt-2 fs-3">
        {props.icon}
      </span>
      <div>
        <p>{props.title}</p>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
};

export default HeroInfo;
