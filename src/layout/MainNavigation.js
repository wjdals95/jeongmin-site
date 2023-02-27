import React from "react";
import { NavLink } from "react-router-dom";
import mylogo from '../img/mylogo.svg'
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        C.J.M
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
            <i class="fa-solid fa-house"></i>
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
          <li>
            <a rel="noopener noreferrer" href="https://github.com/wjdals95" target="_blank"  activeClassName={classes.active}>
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
