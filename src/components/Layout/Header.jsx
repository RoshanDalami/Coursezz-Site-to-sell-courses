import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <Link to="/" className={classes.logo}>Coursezz</Link>
        <NavLink className={classes.items} to={"/aboutus"}>About us</NavLink>
        <NavLink className={classes.items} to={"/support"}>Support</NavLink>
        <NavLink className={classes.items} to={"/contact"}>Contact</NavLink>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>

    </React.Fragment>
  );
};

export default Header;
