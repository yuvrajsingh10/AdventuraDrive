import React from "react";
import "./cars.css"
import Card from "../card/Card"
// import Footer from "../components/"

const Cars = () => {
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
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                                <div className="col-md-4">
                                    <Card i_class="card" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer_section">
                
            </section>
        </>
    )
}

export default Cars