import React, { Fragment } from "react";

import peopleIcon from '../img/projectdetail/icons8-사용자-남성-25.png'
import calender from '../img/projectdetail/icons8-달력-25.png'
import document from '../img/projectdetail/icons8-document-25.png'
import githubIcon from '../img/projectdetail/icons8-github의-25.png'

import classes from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  return (
    <Fragment>
      <div className={classes.aboutSec}>
        <h1>It's Project Name</h1>
        <span className={`${classes.titleBg} ${classes.on} `}>WORKS</span>
      </div>
      <section>
        <div className={classes.container}>
          <article>
            <div className={classes.titleWrap}>
              <ul className={classes.metaWrap}>
                <li>
                    <img src={peopleIcon} alt="" />
                    100%</li>
                <li>
                    <img src={calender} alt="" />
                    20xx.xx ~ 20xx.xx</li>
              </ul>
              <h2>Project Name PROJECT</h2>
              <ul className={classes.tech}>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className={classes.bodyWrap}>
                <p>
                    프로젝트 설명 . 어떤기능인지 . 어떻게 배포를 했는지
                </p>
                <div className={classes.link}>
                    <a href="#none">
                        <img src={document} alt="" />
                        Project:
                        <span>
                            Link
                        </span>
                    </a>
                    <a href="">
                        <img src={githubIcon} alt="" />
                        Github:
                        <span>
                            Link
                        </span>
                    </a>
                </div>
            </div>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default ProjectDetail;
