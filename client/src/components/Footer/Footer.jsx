import React from "react";
import "./footer.css"
import { IoCall, IoMailOutline } from "react-icons/io5"
import { FaRegFilePdf, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa'
import { MdLocationPin } from "react-icons/md"
import { RiRssLine } from "react-icons/ri"

const Footer = () => {
    return (
        <>
            <section className="footer ">
                <div className="container footer_container">
                    <div className="row">
                        <div className="col-md-3 footer_about">
                            <h5>About Rentaly</h5>
                            <p>
                                Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.
                            </p>
                        </div>
                        <div className="col-md-3 footer_contact">
                            <h5>Contact Info</h5>
                            <p><MdLocationPin className="primary_color" /> 08 W 36th St, New York, NY 10001</p>
                            <p><IoCall className="primary_color" /> +1 333 9296</p>
                            <p><IoMailOutline className="primary_color" /> contact@example.com</p>
                            <p><FaRegFilePdf className="primary_color" /> Download Brochure</p>
                        </div>
                        <div className="col-md-2 footer_quick_link">
                            <h5>Quick Links</h5>
                            <ul className="footer_link">
                                <li className="link">About</li>
                                <li className="link">Blog</li>
                                <li className="link">Careers</li>
                                <li className="link">News</li>
                                <li className="link">Partners</li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer_social_networks">
                            <h5 className="text-center">Social Network</h5>
                            <ul className="footer_social_links">
                                <li className="social_link"><FaFacebookF /></li>
                                <li className="social_link"><FaTwitter /></li>
                                <li className="social_link"><FaLinkedinIn /></li>
                                <li className="social_link"><FaPinterest /></li>
                                <li className="social_link"><RiRssLine /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section className="sub__footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Copyright 2023 - Rentaly by Designesia</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;