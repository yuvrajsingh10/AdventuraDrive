import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import SubheaderWrapper from "../../UI/SubheaderWrapper";
import { BiHomeAlt2, BiCalendar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { BsFillCarFrontFill, BsCalendarX } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import DashboardOrderList from "./DashboardOrderList";
import FavoriteCars from "./FavoriteCars";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import DashboardImg from "../..//assets/DashboardImg.jpg";

const MyAccount = () => {
  const initialSelect = {
    dashboard: true,
    myProfile: false,
    myOrders: false,
    favoriteCar: false,
  };
  const [selectButton, setDashboard] = useState(initialSelect);

  const clickHandler = (event) => {
    let id = event.target.id;
    switch (id) {
      case "dashboard":
        setDashboard({ ...initialSelect, dashboard: true });
        break;
      case "myProfile":
        setDashboard({ ...initialSelect, myProfile: true, dashboard: false });
        break;
      case "myOrders":
        setDashboard({ ...initialSelect, myOrders: true, dashboard: false });
        break;
      case "favoriteCar":
        setDashboard({ ...initialSelect, favoriteCar: true, dashboard: false });
        break;
    }
  };

  return (
    <>
      <SubheaderWrapper heading="DashBoard" img={DashboardImg} />;
      <div className={`container ${classes.container} mb-2`}>
        <div className={`${classes["dashboard-container"]} row`}>
          <div className={classes["dashboard-right-pane"]}>
            <div className={` text-center mb-1 mx-auto`}>
              <img
                src="https://www.madebydesignesia.com/themes/rentaly/images/profile/1.jpg"
                alt="Profile"
              />
              <h5>Monica Lucas </h5>
              <p>monica@rentaly.com</p>
            </div>
            <div className={`${classes["dashboard-buttons"]}`}>
              <ul>
                <li
                  id="dashboard"
                  onClick={clickHandler}
                  className={selectButton.dashboard ? classes.active : ""}
                >
                  <BiHomeAlt2 /> Dashboard
                </li>
                <li
                  className={selectButton.myProfile ? classes.active : ""}
                  id="myProfile"
                  onClick={clickHandler}
                >
                  <FaUser /> My Profile
                </li>
                <li
                  className={selectButton.myOrders ? classes.active : ""}
                  id="myOrders"
                  onClick={clickHandler}
                >
                  <BiCalendar /> My Orders
                </li>
                <li
                  className={selectButton.favoriteCar ? classes.active : ""}
                  id="favoriteCar"
                  onClick={clickHandler}
                >
                  <BsFillCarFrontFill /> My Favorite Cars
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes["dashboard-left-pane"]} col-md-9 d-flex flex-column `}>
            {selectButton.dashboard && (
              <div className="row text-center">
                <div className="col-md-3">
                  <BiCalendar />
                  <h2>03</h2>
                  <p>Upcomming Orders</p>
                </div>
                <div className="col-md-3">
                  <ImPriceTags />
                  <h2>12</h2>
                  <p>Coupons</p>
                </div>
                <div className="col-md-3">
                  <SlCalender />
                  <h2>58</h2>
                  <p>Total Orders</p>
                </div>
                <div className="col-md-3">
                  <BsCalendarX />
                  <h2>24</h2>
                  <p>Cancel Orders</p>
                </div>
              </div>
            )}
            <div className="row my-md-4 justify-content-center">
              {selectButton.dashboard && (
                <DashboardOrderList title={"My Recent Orders"} />
              )}
            </div>
            {selectButton.favoriteCar && (
              <>
                <FavoriteCars />
                <FavoriteCars />
                <FavoriteCars />
              </>
            )}
            {selectButton.myProfile && <MyProfile />}
            {selectButton.myOrders && <MyOrders/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
