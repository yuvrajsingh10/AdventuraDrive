import React from "react";

const Heading = (props) => {
  return (
    <div className="row text-center mt-5 mb-3 mx-0">
      <div className="col-md-6 mx-auto">
        <h2>{props.heading}</h2>
        <p className="light-text">
          {props.subheading}
        </p>
      </div>
    </div>
  );
};

export default Heading;
