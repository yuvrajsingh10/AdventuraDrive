import React from "react";
import classes from "./NewsCard.module.css";
import Button from "../button/Button";

const NewsCard = (props) => {
  return (
    <div className="col-md-4">
      <div className={classes["news-card"]}>
        <div className={classes["newImg"]}>
          <div className={`${classes['news-date']} primary_color d-inline px-2 py-1 text-center`}>
            <h3>10</h3>
            <p>Mar</p>
          </div>
          <img
            src={props.image}
            className={`${classes["newsImg"]}  w-100 h-100`}
            alt=""
          />
        </div>
        <div className={classes["new-img-info"]}>
          <h5>{props.title}</h5>
          <p className="light-text my-2">
            {props.description}
          </p>
          <Button title="Read More" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
