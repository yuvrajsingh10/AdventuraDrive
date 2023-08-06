import React from "react";
import classes from "./MyAccount.module.css"
import SubheaderWrapper from "../UI/SubheaderWrapper";
import DashboardImg from "../assets/DashboardImg.jpg";
import {BiHomeAlt2,BiCalendar} from 'react-icons/bi'
import {SlCalender} from "react-icons/sl"
import {FaUser,FaSignOutAlt} from 'react-icons/fa'
import {BsFillCarFrontFill,BsCalendarX} from 'react-icons/bs'
import {ImPriceTags} from 'react-icons/im'
import DashboardOrderList from "../components/DashboardOrderList";
import FavoriteCars from "../components/FavoriteCars";
import MyProfile from "../components/MyProfile";

const MyAccount = () => {
  return (
    <>
      <SubheaderWrapper heading="DashBoard" img={DashboardImg} />;
        <div className={`container ${classes.container} mb-2`}>
          <div className={`${classes['dashboard-container']} row`}>
            <div className={classes['dashboard-right-pane']}>
              <div className={` text-center mb-1 mx-auto`}>
                <img src="https://www.madebydesignesia.com/themes/rentaly/images/profile/1.jpg" alt="Profile" />
                <h5>Monica Lucas </h5>
                <p>monica@rentaly.com</p>
              </div>
              <div className={`${classes['dashboard-buttons']}`} >
                <ul>
                  <li className={classes.active}><BiHomeAlt2/> Dashboard</li>
                  <li><FaUser/> My Profile</li>
                  <li><BiCalendar/> My Orders</li>
                  <li><BsFillCarFrontFill/> My Favorite Cars</li>
                  <li><FaSignOutAlt/> Sign Out</li>
                </ul>
              </div>
            </div>
            <div className={`${classes['dashboard-left-pane']} col-md-9 d-flex flex-column `}>
              <div className="row text-center">
                <div className="col-md-3">
                  <BiCalendar/>
                  <h2>03</h2>
                  <p>Upcomming Orders</p>
                </div>
                <div className="col-md-3">
                  <ImPriceTags/>
                  <h2>12</h2>
                  <p>Coupons</p>
                </div>
                <div className="col-md-3">
                  <SlCalender/>
                  <h2>58</h2>
                  <p>Total Orders</p>
                </div>
                <div className="col-md-3">
                  <BsCalendarX/>
                  <h2>24</h2>
                  <p>Cancel Orders</p>
                </div>
              </div>
              <div className="row my-md-4 justify-content-center">
                <DashboardOrderList title={"My Recent Orders"}/>
                {/* <FavoriteCars/>
                <FavoriteCars/>
                <FavoriteCars/> */}
                {/* <MyProfile/> */}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MyAccount;