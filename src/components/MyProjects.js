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
              <Link to="/projects/foodOrder">
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
              <Link to="/projects/login">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>Login</div>
                      <span className={classes.time}>2023.01 ~ 2023.01</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        리액트 강의를 보며 Firebase를 통해 로그인 API를
                        만들었다. 이메일로 회원가입 로그인을 할 수 있고,
                        비밀번호 변경 및 로그아웃 가능하다
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
              <Link to="/projects/greatQuotes">
                <div>
                  <div className={classes.projWrap}>
                    <div className={classes.txtWrap}>
                      <div className={classes.name}>Great Quotes</div>
                      <span className={classes.time}>2023.01 ~ 2023.01</span>
                      <p>
                        <span className={classes.label}>Description</span>
                        리액트 강의를 보며 만든 게시판 개념의 인용글 작성 할 수
                        있는 프로젝트입니다. React Router@5 로 만들었으며
                        Firebase를 통해 Http 데이터 요청 및 받기, 서버 배포
                        완료했습니다<div className=""></div>
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
              <Link to="/projects/foodorder">
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
