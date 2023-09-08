import React, { useEffect, useState } from "react";
import classes from "./bookings.module.css";
import Wrapper from "../../UI/Wrapper";
import CustomInput from "../customInput/CustomInput";
import Button from "../button/Button";
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
import OfferValue from "../OfferValue/OfferValue";
import SubheaderWrapper from "../../UI/SubheaderWrapper";
const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";
const Bookings = () => {
  const [isCheckBookingVehicleArea, setIsCheckBookingVehicleArea] =
    useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    vehicleType: "Car",
    pickUpLocation: "",
    dropLocation: "",
    pickUpDate: "",
    returnDate: "",
    pickUpTime: "",
    returnTime: "",
  });

  const changeHandler = (event) => {
    setBookingDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const pickUpHandler = (event) => {
    setBookingDetails((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(bookingDetails)
  };

  useEffect(() => {
    const timeout = setTimeout(() => {}, 500);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <>
      <SubheaderWrapper heading={"Booking"} img={img}>
        {/* From for check the availability of the  vehicle */}
        <Wrapper
          className={`container ${classes["booking-section"]} px-5 py-4`}
        >
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <h6>What is your vehicle type?</h6>
                <div className={classes["select-car"]}>
                  <div className={`row ${classes["selectCar-Form"]}`}>
                    <div className=" col-lg-3 col-sm-3 col-6">
                      <input
                        id="Car"
                        name="vehicleType"
                        type="radio"
                        value="car"
                        defaultChecked
                        onChange={changeHandler}
                      />
                      <label htmlFor="Car">
                        <img src={car} alt="" />
                        Car
                      </label>
                    </div>
                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="Van"
                        name="vehicleType"
                        type="radio"
                        value="van"
                        onChange={changeHandler}
                      />
                      <label htmlFor="Van">
                        <img src={van} alt="" />
                        Van
                      </label>
                    </div>

                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="minibus"
                        name="vehicleType"
                        type="radio"
                        value="minibus"
                        onChange={changeHandler}
                      />
                      <label htmlFor="minibus">
                        <img src={minibus} alt="" />
                        Mini
                      </label>
                    </div>

                    <div className={`col-lg-3 col-sm-3 col-6`}>
                      <input
                        id="prestige"
                        name="vehicleType"
                        type="radio"
                        value="prestige"
                        onChange={changeHandler}
                      />
                      <label htmlFor="prestige">
                        <img src={sportscar} alt="" />
                        Prestige
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="row m-0 ">
                  <div className="col-md-6 mb-2">
                    <CustomInput
                      Attr={{
                        label: "Pick Up Location",
                        id: "pickUpLocation",
                        name: "pickUpLocation",
                        type: "text",
                        onChange: pickUpHandler,
                      }}
                    />
                    <CustomInput
                      Attr={{
                        label: "Pick Up Date ",
                        id: "pickUpDate",
                        name: "pickUpDate",
                        type: "Date",
                        onChange: pickUpHandler,
                      }}
                    />
                    <TimeInput
                      className={"input-group-text"}
                      label={"Pick Up Time"}
                      id={"pickUpTime"}
                      onChange={pickUpHandler}
                    />
                  </div>

                  <div className="col-md-6 mb-2">
                    <CustomInput
                      Attr={{
                        label: "Drop Off Location",
                        id: "dropLocation",
                        name: "dropLocation",
                        type: "text",
                        onChange: pickUpHandler,
                      }}
                    />
                    <CustomInput
                      Attr={{
                        label: "Return Date",
                        id: "returnDate",
                        name: "returnDate",
                        type: "Date",
                        onChange: pickUpHandler,
                      }}
                    />
                    <TimeInput
                      className={"input-group-text"}
                      label={"Return Time"}
                      id={"returnTime"}
                      onChange={pickUpHandler}
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

      {isCheckBookingVehicleArea && (
        <div className="container">
          
        </div>
      )}

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
