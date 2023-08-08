import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import classes from "./Testimonial.module.css";
const Testimonial = (props) => {
  return (
    <>
      <div className={`col-md-4 ${classes["testimonial-card"]}`}>
        <img
          src={props.userImg}
          alt=""
          srcSet=""
          className={`${classes.img} h-100 w-100`}
        />
        <div className={classes["testimonial-text"]}>
          <div className={`${classes.quote} fs-1`}>
            <FaQuoteRight />
          </div>
          <h5>
            {/* Excellent Service! Car Rent Service! */}
            {props.title}
          </h5>
          <p>
            {/* I have been using Rentaly for my Car Rental needs for over 5
                  years now. I have never had any problems with their service.
                  Their customer support is always responsive and helpful. I
                  would recommend Rentaly to anyone looking for a reliable Car
                  Rental provider. */}
            {props.quote}
          </p>
          <p>
            {/* Stepanie Hutchkiss */}
            {props.name}
          </p>
        </div>
      </div>
      {/* <div className="col-md-4 testimonial_card">
              <img src={user2} alt="" srcSet="" className="img" />
              <div className="testimonial_text">
                <div className="quote fs-1">
                  <FaQuoteRight />
                </div>
                <h5 className="">Excellent Service! Car Rent Service!</h5>
                <p>
                  We have been using Rentaly for our trips needs for several
                  years now and have always been happy with their service. Their
                  customer support is Excellent Service! and they are always
                  available to help with any issues we have. Their prices are
                  also very competitive.
                </p>
                <p>Jovan Reels</p>
              </div>
            </div> */}
      {/* <div className="col-md-4 testimonial_card">
              <img src={user3} alt="" srcSet="" className="img  h-100 w-100" />
              <div className="testimonial_text">
                <div className="quote fs-1">
                  <FaQuoteRight />
                </div>
                <h5 className="">Excellent Service! Car Rent Service!</h5>
                <p>
                  Endorsed by industry experts, Rentaly is the Car Rental
                  solution you can trust. With years of experience in the field,
                  we provide fast, reliable and secure Car Rental services.
                </p>
                <p>Kanesha Keyton</p>
              </div>
            </div> */}
    </>
  );
};

export default Testimonial;
