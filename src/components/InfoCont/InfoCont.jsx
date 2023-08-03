import React, { useState } from "react";
import classes from "./InfoCont.module.css"

const InfoCont = () => {
    const [isType, setIstype] = useState({ isLuxury: true, isComfort: false })
    console.log(isType)
  return (
    <div className={`row ${classes['info_image-container']} mx-0`}>
      <div className={`col-md-6 ${classes.img}`}></div>
      <div className="col-md-5 my-auto px-5">
        <h2 className="my-4 ms-5">Only Quality For Clients</h2>
        <div className="d-flex px-5">
          <div className={classes['type_image-btn']}>
            <label htmlFor="luxury">
              LUXURY
            </label>
            <input
              type="radio"
              id="luxury"
              name="type"
              onClick={() => {
                setIstype({ isLuxury: true, isComfort: false });
              }}
              defaultChecked
            />
          </div>
          <div className={classes['type_image-btn']}>
            <label htmlFor="comfort">
              COMFORT
            </label>
            <input
              type="radio"
              id="comfort"
              name="type"
              onClick={() => {
                setIstype({ isLuxury: false, isComfort: true });
              }}
            />
          </div>
        </div>
        {isType.isLuxury && (
          <div className="light-text ps-5">
            <p>
              Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
              incididunt est duis anim sunt officia. Fugiat velit proident
              aliquip nisi incididunt nostrud exercitation proident est nisi.
              Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud
              sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim
              anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu
              exercitation irure Lorem incididunt nostrud.
            </p>
          </div>
        )}
        {isType.isComfort && (
          <div className="light-text ps-5">
            <p>
              Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit
              commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi
              deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation
              cillum id incididunt elit sunt. Qui minim sit magna Lorem id et
              dolore velit Lorem amet exercitation duis deserunt. Anim id labore
              elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor
              duis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCont;
