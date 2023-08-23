import React from 'react'
import classes from "./wrapper.module.css"
const Wrapper = (props) => {
  const _classes =`${classes.wrapper__section} ${props.className}`
  return (
    <div className={_classes}>{props.children}</div>
  )
}

export default Wrapper