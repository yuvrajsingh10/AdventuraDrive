import React, { useContext, useState } from "react";
import { AiOutlineUser, AiOutlineCar, AiFillHeart } from 'react-icons/ai'
import { SlBriefcase } from "react-icons/sl"
import { NavLink } from "react-router-dom";
import "./card.css"
import Button from "../button/Button"
import { FavoriteCarContext } from "../../Context/favoritecar-context";


const Card = (props) => {
    const [favCar,setfavCar]=useState(false);
    const fav_ctx = useContext(FavoriteCarContext);
    const { i_class,car } = props
    return (
        <>
            <div className={i_class} >
                <div className="card-header p-2">
                    <img src={car?.images[0].url} className="card-img-top rounded" alt={car?.name} /> 
                </div>
                <div className="card-body px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{car?.name}</h5>
                        <span><AiFillHeart className={favCar?"text-danger":""} onClick={()=>{setfavCar(!favCar)}} /></span>
                    </div>
                    <div className="d-flex  align-items-center">
                        <AiOutlineUser className="fs-5" /><span className="card-text mx-1 "><strong>{car?.seatingCapacity}</strong></span>
                        <SlBriefcase className="fs-5" /><span className="card-text mx-1 "><strong>{car?.luggageCapacity}</strong></span>
                        <AiOutlineCar className="fs-5" /><span className="card-text mx-1 "><strong>{car?.Type}</strong></span>
                    </div>
                </div>
                <div className="card-footer px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>Daily rate from</p>
                            <h5><strong>{car?.price}</strong></h5>
                        </div>
                        <Button title="Home" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card