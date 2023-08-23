import React from "react";
import SubheaderWrapper from "../../UI/SubheaderWrapper";
import OfferValue from "../OfferValue/OfferValue";
import classes from "./About.module.css";
import featureCar from "../../assets/aboutFeatureCar.png";
import KeyFeature from "../KeyFeature/KeyFeature";
import { IoTrophySharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { CiLollipop } from "react-icons/ci";
import InfoCont from "../InfoCont/InfoCont";
const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const About = () => {
  return (
    <>
      <SubheaderWrapper heading={"About Us"} img={img}></SubheaderWrapper>
      <div className={classes["about-Offer_value"]}>
        <OfferValue classes={classes} />
      </div>
      <section className="my-5">
        <div className="container">
          <div
            className={`row ${classes["about_feature-higlight"]} align-item-center`}
          >
            <h2 className="text-center mb-4">Features Hilight</h2>
            <div className="col-md-3 col-sm-3">
              <KeyFeature
                className="my-2"
                icon={<IoTrophySharp />}
                title={"First class services"}
                desc={
                  "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation"
                }
              />
              <KeyFeature
                className="my-2"
                icon={<FaRoad />}
                title={"24/7 road assistance"}
                desc={
                  "Reliable support when you need it most, keeping you on the move with confidence and peace of mind. "
                }
              />
            </div>
            <div className="col-sm-6 d-flex align-items-center">
              <img
                src={featureCar}
                className="w-100"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-md-3 col-sm-3">
              <KeyFeature
                className="my-2"
                icon={<MdLocationPin />}
                title={"Quality at Minimum Expense"}
                desc={
                  "Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value."
                }
              />
              <KeyFeature
                className="my-2"
                icon={<CiLollipop />}
                title={"Free Pick-Up & Drop-Off"}
                desc={
                  "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience. "
                }
              />
            </div>
          </div>
        </div>
      </section>
      <InfoCont />
    </>
  );
};

export default About;
