import React from 'react';
import Wrapper from '../../UI/Wrapper';
import Button from "../button/Button";
import classes from "./FavoriteCar.module.css";
const FavoriteCars = () => {
  return (
    <Wrapper className={`${classes['favorite-car']} row my-3 `} >
        <div className="col-md-4">
            <img src="https://www.madebydesignesia.com/themes/rentaly/images/cars/jeep-renegade.jpg" alt="" />
        </div>
        <div className="col-md-2">
            <h5>Jeep Renegade</h5>
            <span>Seats: 4</span>
            <span>Luggage: 2</span>
            <span>Doors: 4</span>
            <span>Fuel: Petrol</span>
        </div>
        <div className="col-md-2">
            <h5>Jeep Renegade</h5>
            <span>Seats: 4</span>
            <span>Luggage: 2</span>
            <span>Doors: 4</span>
            <span>Fuel: Petrol</span>
        </div>
        <div className="col-md-3 text-center">
            <p>Daily rate From</p>
            <h4>$265</h4>
            <Button title="Rent Now"/>
        </div>
    </Wrapper>
  )
}

export default FavoriteCars