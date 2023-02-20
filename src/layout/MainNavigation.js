import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>C.J.M</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
