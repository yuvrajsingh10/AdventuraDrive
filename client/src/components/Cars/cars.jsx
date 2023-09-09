import React, { useEffect } from "react";
import "./cars.css";
import Card from "../card/Card";
import { useVehicle } from "../../hooks/useVehicle";
import { useVehicleContext } from "../../hooks/useVehicleContext";

const Cars = () => {
  const { vehicles } = useVehicleContext();
  const { isLoading, Error, getVehiclesData } = useVehicle();
  useEffect(() => {
    const vehicleData = localStorage.getItem("vehicles");
    if (!vehicleData) getVehiclesData();
  }, [vehicles]);
  return (
    <>
      <section className="car_section-container mb-5">
        <div className="container h-100">
          <div className="row car_section">
            <h1>Cars</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <div className="row my-4">
                {vehicles &&
                  vehicles?.map((data) => {
                    return (
                      <div className="col-md-4 my-3" key={data._id}>
                        <Card i_class="card" car={data} />
                      </div>
                    );
                  })}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_section"></section>
    </>
  );
};

export default Cars;
