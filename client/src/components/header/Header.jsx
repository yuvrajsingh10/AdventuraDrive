import React, { useContext } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { AuthContext } from "../../Context/auth-context";
import classes from "./header.module.css";
import AccountMenu from "./AccountMenu";
import SubHeader from "./SubHeader";
import { useAuthContext } from "../../hooks/useAuthContext";

const Header = (props) => {
  const { user } = useAuthContext();
  
  return (
    <>
      <header className={`container-fluid ${classes["header-section"]} px-0`}>
        <div className="container">
          <SubHeader />
          <nav className={`${classes["menu-bar"]} px-5 `}>
            <div className="navbar navbar-expand-lg navbar-dark ">
              <div className="container-fluid px-5">
                <h3 className={classes["brand-logo"]}>
                  <IoCarSportSharp /> AdventuraDrive
                </h3>
                <button className="navbar-toggler" type="button">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav  ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link mx-2" to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={`nav-link mx-2`} to={"/about"}>
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-2" to={"/Bookings"}>
                        Bookings
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-2" to={"/cars"}>
                        Cars
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-2" to={"/about"}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  {console.log(user)}
                  {!user && (
                    <NavLink className="nav-link mx-2" to={"/login"}>
                      Sign In
                    </NavLink>
                  )}
                  {!user && (
                    <NavLink className="nav-link mx-2" to={"/register"}>
                      <Button title="Sign up" />
                    </NavLink>
                  )}
                  {user && (
                    <AccountMenu
                      username="Yuvraj singh chouhan" //username={user_ctx.user.name}
                    />
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
