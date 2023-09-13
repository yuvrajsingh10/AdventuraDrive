import React, { useEffect } from "react";
import "./cars.css";
import Card from "../card/Card";
import { useVehicle } from "../../hooks/useVehicle";
import { useVehicleContext } from "../../hooks/useVehicleContext";
import Loader from "../loader";
import SubheaderWrapper from "../../UI/SubheaderWrapper";

const Cars = () => {
  const { vehicles } = useVehicleContext();
  const { isLoading, Error, getVehiclesData } = useVehicle();
  useEffect(() => {
    getVehiclesData();
  }, []);
  const img='https://www.madebydesignesia.com/themes/rentaly/images/background/2.jpg'
  return (
    <>
      <SubheaderWrapper heading={"Cars"} img={img}></SubheaderWrapper>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              
            </div>
            <div className="col-md-9">
              <div className="row my-4">
                {isLoading && <Loader />}
                {vehicles &&
                  !isLoading &&
                  vehicles?.map((data) => {
                    return (
                      <div className="col-md-4 my-2" key={data?._id}>
                        <Card i_class="card" car={data} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
