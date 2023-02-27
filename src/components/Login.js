import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css'

const Login = () => {
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
                    href="https://practice-0127-2.web.app"
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
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </Fragment>
    );
};

export default Login;