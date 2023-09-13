import React, { useEffect } from "react";
import Card from "../card/Card";
import Carousel from "nuka-carousel";
import "./carousel.css";
import { useVehicleContext } from "../../hooks/useVehicleContext";
import { useVehicle } from "../../hooks/useVehicle";

const CarouselContainer = (props) => {
  const { getVehiclesData } = useVehicle();
  const { vehicles } = useVehicleContext();
  useEffect(() => {
    getVehiclesData();
  }, []);
  const vehicleData = vehicles?.filter((vehicle, idx) => idx < 3);
  return (
    <>
      <div className="container ">
        <div className="row text-center my-2 mb-5 mx-0">
          <Carousel className="carousel my-5">
            <div className="d-flex justify-content-evenly">
              {vehicleData?.map((vehicle) => (
                <Card key={vehicle?._id} car={vehicle} />
              ))}
            </div>
            <div className="d-flex justify-content-evenly">
              {vehicleData.map((vehicle) => (
                <Card key={vehicle?._id} car={vehicle} />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
