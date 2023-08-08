import React from "react";
import classes from "./bookings.module.css";
import Wrapper from "../../UI/Wrapper";
import CustomInput from "../../components/customInput/CustomInput";
import Button from "../../components/button/Button";
import TimeInput from "./TimeInput";
import FeatureCard from "../../UI/FeatureCard";
import { FiCalendar } from "react-icons/fi";
import { AiFillCar, AiOutlineEdit } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";

import minibus from "../../assets/minibus.png";
import sportscar from "../../assets/sportscar.png";
import van from "../../assets/van.png";
import car from "../../assets/car.png";
import bookingFeatured from "../../assets/bookingFeatured.jpg";
import OfferValue from "../../components/OfferValue/OfferValue";
import SubheaderWrapper from "../../UI/SubheaderWrapper";

const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";
const Bookings = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <SubheaderWrapper heading={"Booking"} img={img}>
        <Wrapper className={`container ${classes["booking-section"]} px-5 py-4`}        >
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <h6>What is your vehicle type?</h6>
                <div className={classes["select-car"]}>
                  <div className={`row ${classes["selectCar-Form"]}`}>
                    <div className=" col-lg-3 col-sm-3 col-6">
                      <input
                        id="radio-1a"
                        name="Car_Type"
                        type="radio"
                        value="Residential"
                        defaultChecked
                      />
                      <label htmlFor="radio-1a">
                        <img src={car} alt="" />
                        Car
                      </label>
                    </div>
                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="radio-1b"
                        name="Car_Type"
                        type="radio"
                        value="Office"
                      />
                      <label htmlFor="radio-1b">
                        <img src={van} alt="" />
                        Van
                      </label>
                    </div>

                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="radio-1c"
                        name="Car_Type"
                        type="radio"
                        value="Commercial"
                      />
                      <label htmlFor="radio-1c">
                        <img src={minibus} alt="" />
                        Mini
                      </label>
                    </div>

                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="radio-1d"
                        name="Car_Type"
                        type="radio"
                        value="Retail"
                      />
                      <label htmlFor="radio-1d">
                        <img src={sportscar} alt="" />
                        Prestige
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row m-0">
                  <div className="col-md-6 mb-2">
                    <CustomInput
                      label={"Pick Up Location"}
                      id="location"
                      name={"pickupLocation"}
                      type={"text"}
                    />
                    <CustomInput
                      label={"Pick Up Date "}
                      id="pickUpDate"
                      name={"pickupLocation"}
                      type={"text"}
                    />
                    <TimeInput
                      className={"input-group-text"}
                      label={"Pick Up Time"}
                      id={"pick-up-time"}
                    />
                  </div>

                  <div className="col-md-6 mb-2">
                    <CustomInput
                      label={"Drop Off Location"}
                      id="dropLocation"
                      name={"pickupLocation"}
                      type={"text"}
                    />
                    <CustomInput
                      label={"Return Date"}
                      id="pickUpdate"
                      name={"pickupLocation"}
                      type={"text"}
                    />
                    <TimeInput
                      className={"input-group-text"}
                      label={"Return Time"}
                      id={"return-time"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button title={"Find a Vehicle"} type={"submit"} />
            </div>
          </form>
        </Wrapper>
      </SubheaderWrapper>
      <div className={classes["space-single"]}></div>
      <section>
        <div className="container">
          <div className="row justify-content-evenly">
            <FeatureCard
              icon={<AiFillCar />}
              title={"Choose a Car"}
              desc={
                "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination. "
              }
            />
            <FeatureCard
              icon={<FiCalendar />}
              title={"Pick location & Date"}
              desc={
                "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences."
              }
            />
            <FeatureCard
              icon={<AiOutlineEdit />}
              title={"Make a booking"}
              desc={
                "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence."
              }
            />
            <FeatureCard
              icon={<FaRegSmile />}
              title={"Sit back & realx"}
              desc={
                "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort. "
              }
            />
          </div>
        </div>
      </section>
      <section>
        <div
          className={`container-fluid  mt-sm-5 p-0 ${classes["offer-container"]}`}
        >
          <img src={bookingFeatured} alt="" />
          <OfferValue classes={classes} />
        </div>
      </section>
    </>
  );
};

export default Bookings;
