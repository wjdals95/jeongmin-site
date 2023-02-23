import React from "react";
import { Link } from "react-router-dom";
import classes from "./Homepage.module.css";

const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
      <main className={classes.mains}>
        <div className={classes.left}>
          <div></div>

          <div className={classes.imgBox2}>
            <div className={classes.imgBox}></div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.textWrap}>
            <h2>Hi!, I'm Jeongmin</h2>
            <h1> Frontend Developer</h1>
            <p>
              안녕하세요. 저는 최정민입니다.
              <br />
              꼼꼼하고 성실함이 저의 장점이며, 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 
              현재 프론트엔드 개발자로 구직중입니다. 
            </p>
          </div>
          <section>
            <h2>PERSONAL INFOS</h2>
            <ul>
              <li>
                <span>Name:</span> 최정민
              </li>
              <li>
                <span>Age:</span> 95.06.02
              </li>
              <li>
                <span>Phone:</span> 010.5529.9562
              </li>
              <li>
                <span>Addres:</span> 경기도 광주시
              </li>
              <li>
                <span>Email:</span> wjdals992@naver.com
              </li>
            </ul>
          </section>
          <Link to="/about" className={classes.moreBtn}>
            more about me
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
