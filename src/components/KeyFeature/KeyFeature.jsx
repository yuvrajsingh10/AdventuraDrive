import React from "react";

const KeyFeature = (props) => {
  const classes =props.className
  return (
    <>
      <div className={`${classes}`}>
          <h2 className="mb-4">
            <span className="svg_icons my-4">{props.icon}</span>
          </h2>
        <h5 className="my-2">{props.title}</h5>
        <p className="light-text">{props.desc}</p>
      </div>
    </>
  );
};

export default KeyFeature;
