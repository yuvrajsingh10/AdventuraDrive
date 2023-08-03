import React from "react";
import SubheaderWrapper from "../UI/SubheaderWrapper";
import OfferValue from "../components/OfferValue/OfferValue";
import classes from "./About.module.css";
import featureCar from "../assets/aboutFeatureCar.png";
import KeyFeature from "../components/KeyFeature/KeyFeature";
import { IoTrophySharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { CiLollipop } from "react-icons/ci";
import InfoCont from "../components/InfoCont/InfoCont";
const img =
  "https://www.madebydesignesia.com/themes/rentaly/images/background/subheader.jpg";

const About = () => {
  return (
    <>
      <SubheaderWrapper heading={"About Us"} img={img}></SubheaderWrapper>
      <div className={classes["about-Offer_value"]}>
        <OfferValue />
      </div>
      <section className="my-5">
        <div className="container">
          <div className={`row ${classes["about_feature-hilight"]} align-item-center`}>
            <h2 className="text-center mb-4">Features Hilight</h2>
            <div className="col-md-3 col-sm-3">
              <KeyFeature
                icon={<IoTrophySharp />}
                title={"First class services"}
                desc={
                  "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation"
                }
              />
              <KeyFeature
                icon={<FaRoad />}
                title={"24/7 road assistance"}
                desc={
                  "Reliable support when you need it most, keeping you on the move with confidence and peace of mind. "
                }
              />
            </div>
            <div className="col-sm-6">
              <img
                src={featureCar}
                className="w-100 my-auto"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-md-3 col-sm-3">
              <KeyFeature
                icon={<MdLocationPin />}
                title={"Quality at Minimum Expense"}
                desc={
                  "Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value."
                }
              />
              <KeyFeature
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
