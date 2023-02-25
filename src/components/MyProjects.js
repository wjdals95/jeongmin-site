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
              <Link to="/projects/projectDetail1">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>Food Order</div>
                      <span className={classes.time}>2023.01 ~ 2023.02</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을
                        클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수
                        있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인
                        useContext, useReducer 사용 및 Http를 Firebase를 통해
                        데이터를 보내고 가져오고 서버 배포 하였습니다.
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
