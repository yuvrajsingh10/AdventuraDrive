import React, { useEffect, useState } from "react";
import { IoTrophySharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Button from "../button/Button";
import "./home.css";
import CarouselContainer from "../carousel/Carousel";
import InfoCont from "../InfoCont/InfoCont";
import Testimonial from "./Testimonial";
import KeyFeature from "../KeyFeature/KeyFeature";
import NewsCard from "./NewsCard";

import user1 from "../../assets/test1.jpg";
import user2 from "../../assets/test2.jpg";
import user3 from "../../assets/test3.jpg";
import picBlog1 from "../../assets/pic-blog-1.jpg";
import picBlog2 from "../../assets/pic-blog-2.jpg";
import picBlog3 from "../../assets/pic-blog-3.jpg";
import HeroInfo from "./HeroInfo";
import Heading from "../Heading/Heading";


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
                <HeroInfo
                  icon={<IoTrophySharp />}
                  title="First class services"
                  description="Est dolore ut laboris eu enim eu veniam nostrud esse laborum duis"
                />
                <HeroInfo
                  icon={<FaRoad />}
                  title="First class services"
                  description="Est dolore ut laboris eu enim eu veniam nostrud esse laborum duis"
                />
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
          <Heading
            heading="Our Vehicle Fleet"
            subheading="Sit labore et officia eiusmod tempor officia eiusmod dolor
                exercitation nulla dolore ut id velit et ut anim."
          />
          <CarouselContainer />
        </div>
        <InfoCont />
        <div className="container explore_container my-5">
          <div className="row explore_info h-100">
            <div className="col-md-3 h-100">
              <h2>Explore the world with comfortable car</h2>
            </div>
            <KeyFeature
              className="col-md-3 h-100 p-3"
              icon={<IoTrophySharp />}
              title="First Class Services"
              desc="Aliquip consequat excepteur non dolor irure ad irure labore ex
                eiusmod est duis culpa ex ut minim ut ea."
            />
            <KeyFeature
              className="col-md-3 h-100 p-3"
              icon={<FaRoad />}
              title="24/7 road assistance"
              desc="Aliquip consequat excepteur non dolor irure ad irure labore ex
              eiusmod est duis culpa ex ut minim ut ea."
            />
            <KeyFeature
              className="col-md-3 h-100 p-3"
              icon={<MdLocationPin />}
              title="Free Pick-Up & Drop-Off"
              desc="Aliquip consequat excepteur non dolor irure ad irure labore ex
              eiusmod est duis culpa ex ut minim ut ea."
            />
          </div>
        </div>
      </section>
      <section className={`testimonial`}>
        <div className="container h-100">
          <div className="row h-100">
            <Testimonial
              userImg={user1}
              title="Excellent Service! Car Rent Service!"
              quote="I have been using Rentaly for my Car Rental needs for over 5
                  years now. I have never had any problems with their service.
                  Their customer support is always responsive and helpful. I
                  would recommend Rentaly to anyone looking for a reliable Car
                  Rental provider."
              name="Stepanie Hutchkiss"
            />
            <Testimonial
              userImg={user3}
              title="Excellent Service! Car Rent Service!"
              quote="Endorsed by industry experts, Rentaly is the Car Rental
              solution you can trust. With years of experience in the field,
              we provide fast, reliable and secure Car Rental services."
              name="Kanesha Keyton"
            />
            <Testimonial
              userImg={user2}
              title="Excellent Service! Car Rent Service!"
              quote=" We have been using Rentaly for our trips needs for several
              years now and have always been happy with their service. Their
              customer support is Excellent Service! and they are always
              available to help with any issues we have. Their prices are
              also very competitive."
              name="Jovan Reels"
            />
          </div>
        </div>
      </section>

      <section className="latest_news_container">
        <Heading
          heading="Latest News "
          subheading="Breaking news, fresh perspectives, and in-depth coverage - stay ahead
          with our latest news, insights, and analysis."
        />
        <div className="container">
          <div className="row my-3">
            <NewsCard
              image={picBlog1}
              title="Enjoy Best Travel Experience"
              description="Dolore officia sint incididunt non excepteur ea mollit
                    commodo ut enim reprehenderit cupidatat labore ad laborum
                    consectetur."
            />
            <NewsCard
              image={picBlog2}
              title="The Future of Car Rent"
              description="Dolore officia sint incididunt non excepteur ea mollit
              commodo ut enim reprehenderit cupidatat labore ad laborum
              consectetur."
            />
            <NewsCard
              image={picBlog3}
              title="Holiday Tips For Backpacker"
              description="Dolore officia sint incididunt non excepteur ea mollit
              commodo ut enim reprehenderit cupidatat labore ad laborum
              consectetur."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
