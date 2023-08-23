import React from "react";
import "./header.css"
import { IoIosCall, IoMdMail, IoLogoTwitter } from "react-icons/io"
import { IoCarSportSharp } from "react-icons/io5"
import { BsInstagram, BsYoutube } from "react-icons/bs"
import { RiFacebookFill } from "react-icons/ri"
import { FaLinkedinIn, FaCar } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const Header = () => {
    return (
        <>
            <header className="container-fluid  header_section ">
                <div className="container">
                    <div className="sub_header_section d-flex justify-content-between align-items-center w-100 ">
                        <div className="d-flex" >
                            <p className="contact mx-2"><IoIosCall /> +91 6265050142</p>
                            <p className="contact "><IoMdMail />  info@yuvrajsinghchouhan6642gmail.com</p>
                        </div>
                        <div className="right_social_links ">
                            <ul className="sub_menu my-auto">
                                <li className=""> <NavLink className="social_links mx-2" to={"About"}><RiFacebookFill /> </NavLink> </li>
                                <li className=""> <NavLink className="social_links mx-2" to={"About"}><IoLogoTwitter /></NavLink> </li>
                                <li className=""> <NavLink className="social_links mx-2" to={"About"}><BsInstagram /></NavLink> </li>
                                <li className=""> <NavLink className="social_links mx-2" to={"About"}><FaLinkedinIn /></NavLink> </li>
                                <li className=""> <NavLink className="social_links mx-2" to={"About"}><BsYoutube /></NavLink> </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="menu_bar px-5 ">
                        <div className="navbar navbar-expand-lg navbar-dark ">
                            <div className="container-fluid px-5">
                                <h3 className="brand_logo"><IoCarSportSharp /> AdventuraDrive  </h3>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav  ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/"}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/about"}>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/Bookings"}>Bookings</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/cars"}>Cars</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/about"}>Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/my-account"}>My Account</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link mx-2" to={"/login"}>Sign in </NavLink>
                                        </li>
                                    </ul>
                                    <NavLink className="nav-link mx-2" to={"/register"}><Button title="Sign up"/></NavLink>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header