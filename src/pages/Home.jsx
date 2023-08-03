import React, { useState } from "react";
import { IoTrophySharp /*, IoCall, IoMailOutline */ } from "react-icons/io5";
import {
  FaRoad,
  FaQuoteRight /* FaRegFilePdf, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest */,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
// import { RiRssLine } from "react-icons/ri"
import Button from "../components/button/Button";
import "./home.css";
import user1 from "../assets/test1.jpg";
import user2 from "../assets/test2.jpg";
import user3 from "../assets/test3.jpg";
import CarouselContainer from "../components/carousel/Carousel";
import InfoCont from "../components/InfoCont/InfoCont";

const Home = () => {
  return (
    <>
      <section className="container-fluid hero_container">
        <div className="">
          <div className="hero_section row">
            <div className="col-md-6 hero_Section_title my-5   ">
              <div className="spacer-double"></div>
              <div className="spacer-10"> </div>
              <h1 className="hero_title">
                Explore the world with comfortable car
              </h1>
              <p className="hero_subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-md-5 my-3 hero_info">
                  <span className="px-3 py-2 me-4 mb-auto mt-2 fs-3">
                    <IoTrophySharp />
                  </span>
                  <div>
                    <p>First class services</p>
                    <span>
                      Est dolore ut laboris eu enim eu veniam nostrud esse
                      laborum duis
                    </span>
                  </div>
                </div>
                <div className="col-md-5 my-3 hero_info">
                  <span className="px-3 py-2 me-4 mb-auto mt-2 fs-3">
                    <FaRoad />
                  </span>
                  <div>
                    <p>First class services</p>
                    <span>
                      Est dolore ut laboris eu enim eu veniam nostrud esse
                      laborum duis
                    </span>
                  </div>
                </div>
                <div className="my-4 d-flex justify-content-start">
                  <Button title="Choose Car" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Info ">
        <div className="container">
          <div className="row text-center my-5 mx-0">
            <div className="col-md-6 mx-auto">
              <h1>Our Vehicle Fleet</h1>
              <p className="light-text">
                Sit labore et officia eiusmod tempor officia eiusmod dolor
                exercitation nulla dolore ut id velit et ut anim.
              </p>
            </div>
            <CarouselContainer />
          </div>
        </div>

        <InfoCont />
        <div className="container explore_container my-5">
          <div className="row explore_info h-100">
            <div className="col-md-3 h-100">
              <h2>Explore the world with comfortable car</h2>
            </div>
            <div className="col-md-3 h-100 p-3 ">
              <h2>
                <span className="svg_icons my-2">
                  <IoTrophySharp />
                </span>
              </h2>
              <h5>First Class Services</h5>
              <p className="light-text">
                Aliquip consequat excepteur non dolor irure ad irure labore ex
                eiusmod est duis culpa ex ut minim ut ea.
              </p>
            </div>
            <div className="col-md-3 h-100 p-3 ">
              <h2>
                <span className="svg_icons my-2">
                  <FaRoad />
                </span>
              </h2>
              <h5>24/7 road assistance</h5>
              <p className="light-text">
                Aliquip consequat excepteur non dolor irure ad irure labore ex
                eiusmod est duis culpa ex ut minim ut ea.
              </p>
            </div>
            <div className="col-md-3 h-100 p-3 ">
              <h2>
                <span className="svg_icons my-2">
                  <MdLocationPin />
                </span>
              </h2>
              <h5>Free Pick-Up & Drop-Off</h5>
              <p className="light-text">
                Aliquip consequat excepteur non dolor irure ad irure labore ex
                eiusmod est duis culpa ex ut minim ut ea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-4 testimonial_card">
              <img src={user1} alt="" srcSet="" className="img h-100 w-100" />
              <div className="testimonial_text">
                <div className="quote fs-1">
                  <FaQuoteRight />
                </div>
                <h5 className="">Excellent Service! Car Rent Service!</h5>
                <p>
                  I have been using Rentaly for my Car Rental needs for over 5
                  years now. I have never had any problems with their service.
                  Their customer support is always responsive and helpful. I
                  would recommend Rentaly to anyone looking for a reliable Car
                  Rental provider.
                </p>
                <p>Stepanie Hutchkiss</p>
              </div>
            </div>
            <div className="col-md-4 testimonial_card">
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
            </div>
            <div className="col-md-4 testimonial_card">
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
            </div>
          </div>
        </div>
      </section>
      <section className="latest_news_container">
        <div className="row text-center my-5 mx-0">
          <div className="col-md-6 mx-auto">
            <h2>Latest News </h2>
            <p className="light-text">
              Breaking news, fresh perspectives, and in-depth coverage - stay
              ahead with our latest news, insights, and analysis.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row my-3">
            <div className="col-md-4">
              <div className="news_card">
                <div className="newImg">
                  <div className=" news_date primary_color d-inline px-2 py-1 text-center">
                    <h3>10</h3>
                    <p>Mar</p>
                  </div>
                  <img
                    src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-1.jpg"
                    className=" newsImg w-100 h-100"
                    alt=""
                  />
                </div>
                <div className="new_img_info">
                  <h5>Enjoy Best Travel Experience</h5>
                  <p className="light-text my-2">
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <Button title="Read More" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news_card">
                <div className="newImg">
                  <div className=" news_date primary_color d-inline px-2 py-1 text-center">
                    <h3>10</h3>
                    <p>Mar</p>
                  </div>
                  <img
                    src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-2.jpg"
                    className=" newsImg w-100 h-100"
                    alt=""
                  />
                </div>
                <div className="new_img_info">
                  <h5>The Future of Car Rent</h5>
                  <p className="light-text my-2">
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <Button title="Read More" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news_card">
                <div className="newImg">
                  <div className=" news_date primary_color d-inline px-2 py-1 text-center">
                    <h3>10</h3>
                    <p>Mar</p>
                  </div>
                  <img
                    src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-3.jpg"
                    className=" newsImg w-100 h-100"
                    alt=""
                  />
                </div>
                <div className="new_img_info">
                  <h5>Holiday Tips For Backpacker</h5>
                  <p className="light-text my-2">
                    Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur.
                  </p>
                  <Button title="Read More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
