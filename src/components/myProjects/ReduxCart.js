import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import mainImg from '../../img/reduxcartImg/reduxcartImg.png'
import subImg from '../../img/reduxcartImg/reduxcartFirebase.png'
import reduxcartAdd from '../../video/reduxcartadd.mp4'
import reduxcartCart from '../../video/reduxcartcart.mp4'
import classes from "./myProjects.module.css";

const ReduxCart = () => {
  return (
    <Fragment>
      <div className={classes.backWrap}>
        <Link to="/projects/">
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className={classes.aboutSec}>
        <h1>
          It's
          <span className={classes.point}> Redux Cart</span>
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
              <h2>Redux Cart PROJECT</h2>
              <ul className={classes.tech}>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className={classes.bodyWrap}>
              <p>
                리덕스를 이용한 쇼핑카트 웹 앱입니다. 페이지에서 상품을 Add 하고
                My Cart 버튼을 누르면 장바구니가 나오게 되고, 각 상품의 총
                개수와 금액이 출력됩니다. 장바구니에서 추가 및 제거 할 수있으며
                상품 개수가 0일경우는 장바구니에서 사라지게 됩니다. 상품이
                정상적으로 장바구니에 들어가게 되면 상단에 Succes가 출력되고
                만약 에러가 <br />
                발생하게 되면 error가 출력됩니다.
              </p>
              <div className={classes.link}>
                <a
                  rel="noopener noreferrer"
                  href="https://reduxcart0210.web.app"
                  target="_blank"
                >
                  <i class="fa-solid fa-link"></i>
                  Project:
                  <span>Link</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/wjdals95/udemyProject_reduxcart"
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
                  <img src={mainImg} alt="" />
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
                    <source src={reduxcartAdd} type="video/mp4" />
                  </video>
                </li>
                <li>
                  <h3>장바구니에서 추가 및 제거</h3>
                  <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <source src={reduxcartCart} type="video/mp4" />
                  </video>
                </li>
                <li>
                  <h3>Firebase Authentication</h3>
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

export default ReduxCart;
