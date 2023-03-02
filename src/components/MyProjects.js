import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./MyProjects.module.css";
const MyProjects = (props) => {
  return (
    <Fragment>
      <div className={classes.aboutSec}>
        <h1>My Projects</h1>
        <span className={`${classes.titleBg} ${classes.on} `}>Works</span>
      </div>
      <section>
        <div className={classes.container}>
          <ul>
            {props.projectdatalist.map((item, index) => {
              return (
                <li>
                  <Link to={item.link}>
                    <div>
                      <div className={classes.projWrap}>
                        <div className={classes.txtWrap}>
                          <div className={classes.name}>{item.name}</div>
                          <span className={classes.time}>{item.date}</span>
                          <p>
                            <span className={classes.label}>Description</span>
                            {item.description}
                          </p>
                        </div>
                        <div className={classes.techWrap}>
                          <span className={classes.label}>Tech Stack</span>
                          <ul>
                           {item.tech}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default MyProjects;
