import React from "react";
import iconImg from "../img/icons8-독서-26.png";
import classes from "./Education.module.css";

const Education = () => {
  return (
    <div className={classes.mainWrap}>
      <section>
        <h2>Education</h2>
        <div className={classes.eduWrap}>
          <ul>
            <li>
              <div className={classes.icon}>
                <img src={iconImg} alt="" />
              </div>
              <span className={classes.time}>2022.09~2023.03</span>
              <h4>
                NCS (스마트웹&콘텐츠개발) UI/UX 반응형 웹
                <span className={classes.place}>그린 컴퓨터 아카데미</span>
              </h4>
              <p>
                GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를
                제작하는 법을 학습하였습니다.
                <br />
                동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행,
                분석, 결과 보고를 수행하는 역량을 길렀습니다.
              </p>
            </li>
            <li>
            <div className={classes.icon}>
                <img src={iconImg} alt="" />
              </div>
              <span className={classes.time}>2022.09~2023.03</span>
              <h4>
                NCS (스마트웹&콘텐츠개발) UI/UX 반응형 웹
                <span className={classes.place}>그린 컴퓨터 아카데미</span>
              </h4>
              <p>
                GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를
                제작하는 법을 학습하였습니다.
                <br />
                동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행,
                분석, 결과 보고를 수행하는 역량을 길렀습니다.
              </p>
            </li>
            <li>
              <div className={classes.icon}>
                <img src={iconImg} alt="" />
              </div>
              <span className={classes.time}>2022.09~2023.03</span>
              <h4>
                NCS (스마트웹&콘텐츠개발) UI/UX 반응형 웹
                <span className={classes.place}>그린 컴퓨터 아카데미</span>
              </h4>
              <p>
                GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를
                제작하는 법을 학습하였습니다.
                <br />
                동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행,
                분석, 결과 보고를 수행하는 역량을 길렀습니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Education;
