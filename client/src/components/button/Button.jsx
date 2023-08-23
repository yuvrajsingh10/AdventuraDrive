import React from "react";
import "./button.css"
const Button =(props)=>{
    const {title,type} =props

    return (
        <button type={type}>{title}</button>
    )
}

export default Button