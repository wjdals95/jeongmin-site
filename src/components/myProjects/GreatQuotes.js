import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import mainPage from "../../img/greatQuotesImg/greatQuotesapp.png";
import subImg from "../../img/greatQuotesImg/quotesFirebase.png"
import quotes1 from "../../video/quotesAdd.mp4";
import quotes2 from "../../video/quotesSort.mp4";

import classes from "./myProjects.module.css";

const GreatQuotes = () => {
  return (
    <Fragment>
      <div className={classes.backWrap}>
        <Link to="/projects">
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className={classes.aboutSec}>
        <h1>
          It's
          <span className={classes.point}> Login</span>
        </h1>
        <span className={`${classes.titleBg} ${classes.on} `}>WORKS</span>
      </div>

      <section>
        <div className={classes.container}>
          <article>
            <div className={classes.titleWrap}>
              <ul className={classes.metaWrap}>
                <li>
                  <i class="fa-solid fa-user"></i>
                  100%
                </li>
                <li>
                  <i class="fa-solid fa-calendar-days"></i>
                  2023.01 ~ 2023.01
                </li>
              </ul>
              <h2>Login PROJECT</h2>
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
                  href="https://reactrouter-quotes.web.app"
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>
                  Project:
                  <span>Link</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/wjdals95/udemyProject_reactLogin"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                  Github:
                  <span>Link</span>
                </a>
              </div>
              <ul>
                <li>
                  <h3>메인페이지</h3>
                  <img src={mainPage} alt="" />
                </li>
                <li>
                  <h3>오름차순 & 내림차순 클릭</h3>
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={quotes2} type="video/mp4" />
                  </video>
                </li>
                <li>
                  <h3> 인용문 추가 </h3>
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={quotes1} type="video/mp4" />
                  </video>
                </li>
                <li>
                  <h3>Firebase Realtime Database</h3>
                  <img src={subImg} alt="" />
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default GreatQuotes;
