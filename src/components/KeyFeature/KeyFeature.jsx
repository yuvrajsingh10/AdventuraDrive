import React from "react";

const KeyFeature = (props) => {
  return (
    <>
      <div className="my-3">
        <div>
          <h2>
            <span className="svg_icons my-2">{props.icon}</span>
          </h2>
        </div>
        <h5 className="my-2">{props.title}</h5>
        <p className="light-text">
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default KeyFeature;
