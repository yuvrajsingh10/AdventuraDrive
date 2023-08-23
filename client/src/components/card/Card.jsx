import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineCar, AiFillHeart } from 'react-icons/ai'
import { SlBriefcase } from "react-icons/sl"
import { NavLink } from "react-router-dom";
import "./card.css"
import Button from "../button/Button"
import { FavoriteCarContext } from "../../Context/favoritecar-context";


const Card = (props) => {
    const fav_ctx = useContext(FavoriteCarContext);
    const { title, price ,i_class } = props
    return (
        <>
            <div className={i_class} >
                <div className="card-header p-2">
                    <img src="https://www.madebydesignesia.com/themes/rentaly/images/cars/jeep-renegade.jpg" className="card-img-top rounded" alt="..." />
                </div>
                <div className="card-body px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Jeep Compass</h5>
                        <span><AiFillHeart className={fav_ctx.liked?"text-danger":""} onClick={()=>{fav_ctx.add('wwje')}} />58</span>
                    </div>
                    <div className="d-flex  align-items-center">
                        <AiOutlineUser className="fs-5" /><span className="card-text mx-1 "><strong>5</strong></span>
                        <SlBriefcase className="fs-5" /><span className="card-text mx-1 "><strong>5</strong></span>
                        <AiOutlineCar className="fs-5" /><span className="card-text mx-1 "><strong>Suv</strong></span>
                    </div>
                </div>
                <div className="card-footer px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>Daily rate from</p>
                            <h4><strong>$256</strong></h4>
                        </div>
                        <Button title="Home" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card