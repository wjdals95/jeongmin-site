import React, { Fragment } from "react";

import peopleIcon from "../img/projectdetail/icons8-사용자-남성-25.png";
import calender from "../img/projectdetail/icons8-달력-25.png";
import document from "../img/projectdetail/icons8-document-25.png";
import githubIcon from "../img/projectdetail/icons8-github의-25.png";
import foodfullpage from "../img/projectdetail/foodorderapp.png";
import foodorder from "../video/foodorder1.mp4";
import foodorder2 from "../video/foodorder2.mp4";
import classes from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  return (
    <Fragment>
      <div className={classes.aboutSec}>
        <h1>
          It's 
          <span className={classes.point}> Food Order</span>
        </h1>
        <span className={`${classes.titleBg} ${classes.on} `}>WORKS</span>
      </div>
      <section>
        <div className={classes.container}>
          <article>
            <div className={classes.titleWrap}>
              <ul className={classes.metaWrap}>
                <li>
                  <img src={peopleIcon} alt="" />
                  100%
                </li>
                <li>
                  <img src={calender} alt="" />
                  2023.01 ~ 2023.02
                </li>
              </ul>
              <h2>Food Order PROJECT</h2>
              <ul className={classes.tech}>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className={classes.bodyWrap}>
              <p>
                음식 장바구니 웹앱입니다. 음식의 개수를 지정하고 add버튼을
                클릭하면 상단 장바구니에 추가되며 <br />
                장바구니에서 추가 및 제거 할 수 있습니다. Firebase를 통해
                배포완료하였습니다.
              </p>
              <div className={classes.link}>
                <a
                  rel="noopener noreferrer"
                  href="https://react-foodorderapp-17c64.web.app/"
                  target="_blank"
                >
                  <img src={document} alt="" />
                  Project:
                  <span>Link</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/wjdals95/udemyProject_foodorder"
                  target="_blank"
                >
                  <img src={githubIcon} alt="" />
                  Github:
                  <span>Link</span>
                </a>
              </div>
              <ul>
                <li>
                  <h3>메인페이지</h3>
                  <img src={foodfullpage} alt="" />
                </li>
                <li>
                  <h3>장바구니 추가</h3>
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={foodorder} type="video/mp4" />
                  </video>
                </li>
                <li>
                  <h3> 장바구니에서 추가 & 제거</h3>
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={foodorder2} type="video/mp4" />
                  </video>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default ProjectDetail;
