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
            <li>
              <Link to='/projects/projectDetail1'>
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={`/projects/${props.id}`}>
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects/project-detail">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects/project-detail">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={`/projects/${props.id}`}>
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects/project-detail">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>ProjectName</div>
                      <span className={classes.time}>0000.00 ~ 0000.00</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        프로젝트설명
                      </p>
                    </div>
                    <div className={classes.techWrap}>
                      <span className={classes.label}>Tech Stack</span>
                      <ul>
                        <li>HTML&CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default MyProjects;
