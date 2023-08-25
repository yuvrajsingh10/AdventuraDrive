import React from "react";
import classes from './SubHeader.module.css'
import { IoIosCall, IoMdMail, IoLogoTwitter } from "react-icons/io";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn, FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <div
      className={`${classes["sub-header_section"]} d-flex justify-content-between align-items-center w-100 `}
    >
      <div className="d-flex">
        <p className="contact mx-2">
          <IoIosCall /> +91 6265050142
        </p>
        <p className="contact ">
          <IoMdMail /> info@yuvrajsinghchouhan6642gmail.com
        </p>
      </div>
      <div className="right_social_links ">
        <ul className={`${classes["sub-menu"]} my-auto`}>
          <li className="">
            <NavLink className={`${classes["social-links"]} mx-2`} to={"About"}>
              <RiFacebookFill />
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`${classes["social-links"]} mx-2`} to={"About"}>
              <IoLogoTwitter />
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`${classes["social-links"]} mx-2`} to={"About"}>
              <BsInstagram />
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`${classes["social-links"]} mx-2`} to={"About"}>
              <FaLinkedinIn />
            </NavLink>
          </li>
          <li className="">
            <NavLink className={`${classes["social-links"]} mx-2`} to={"About"}>
              <BsYoutube />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
