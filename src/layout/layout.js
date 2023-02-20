import React, { Fragment } from "react";
import classes from "./layout.module.css";
import MainNavigation from "./MainNavigation";

const layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
