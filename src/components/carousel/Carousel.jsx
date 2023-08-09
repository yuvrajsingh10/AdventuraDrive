import React, { useEffect } from "react";
import Card from "../card/Card";
import Carousel from "nuka-carousel";
import "./carousel.css";


const CarouselContainer = (props) => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row text-center my-2 mb-5 mx-0">
          <Carousel className="carousel my-5">
            <div className="d-flex justify-content-evenly">
              <Card i_class="card_home" />
              <Card i_class="card_home" />
              <Card i_class="card_home" />
            </div>
            <div className="d-flex justify-content-evenly">
              <Card i_class="card_home" />
              <Card i_class="card_home" />
              <Card i_class="card_home" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
