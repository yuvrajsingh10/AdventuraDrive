import React from "react";
import SubheaderWrapper from "../UI/SubheaderWrapper";
import DashboardImg from "../assets/DashboardImg.jpg"

const MyAccount = () => {
  return (
    <>
      <SubheaderWrapper heading="DashBoard" img={DashboardImg} />;
      <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
        </div>
      </div>

    </>
  );
};

export default MyAccount;
