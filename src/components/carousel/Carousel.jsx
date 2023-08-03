import React from "react";
import Card from "../card/Card";
import Carousel from "nuka-carousel"
import "./carousel.css"


const CarouselContainer = () => {
    return (
        <>
            <div className="container">
                <div className="row text-center my-5 mx-0">
                    {/* <div className="col-md-6 mx-auto">
                    <h1>Our Vehicle Fleet</h1>
                    <p className="light-text">Sit labore et officia eiusmod tempor officia eiusmod dolor exercitation nulla dolore ut id velit et ut anim.</p>
                    </div> */}
                    <Carousel className=" carousel my-5">
                        <div className="d-flex justify-content-evenly">
                            <Card i_class="card_home"/>
                            <Card i_class="card_home"/>
                            <Card i_class="card_home"/>
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <Card i_class="card_home"/>
                            <Card i_class="card_home"/>
                            <Card i_class="card_home"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default CarouselContainer;