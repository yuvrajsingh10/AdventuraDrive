import React from "react";
import classes from './input.module.css'

const CustomInput = (props) => {
    const { type, className, i_id, name, label ,labelClass} = props
    return (
        <>
            <label htmlFor={i_id} >{label}</label>
            <input type={type} id={i_id} className={`${className} ${classes.input}`} placeholder={label} name={name} />
        </>
    )
}

export default CustomInput

