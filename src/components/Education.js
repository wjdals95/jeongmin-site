import React from "react";

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
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <span className={classes.time}>2023.01~2023.03</span>
              <h4>
                React 완벽 가이드
                <span className={classes.place}>
                  udemy(Academind by Maximilian Schwarzmüller)
                </span>
              </h4>
              <p>
                리액티브 웹 앱의 성능을 향상시키는 법과, React hooks, 상태
                관리(Redux, Context API), React 심화 개념(useCallback, useMemo,
                useReducer..), <br />
                프론트엔드 웹 개발 실무를 경험하기 위한 프로젝트
                학습을 했습니다.
              </p>
            </li>
            <li>
              <div className={classes.icon}>
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <span className={classes.time}>2022.09~2023.03</span>
              <h4>
                NCS (스마트웹&콘텐츠개발) UI/UX 반응형 웹
                <span className={classes.place}>그린 컴퓨터 아카데미</span>
              </h4>
              <p>
                다양한 스마트기기 플렛폼에 적용 가능한 웹기반의 콘텐츠서비스를
                기획, 분석, 설계, 구현 테스트, 배포 및 유지 보수하는 능력을
                길렀습니다. <br />
                반응형 웹 제작을 위한 마크업 및 스타일링(HTML5 & CSS3),
                프론트엔드 스크립트 언어(ECMAScript & jQuery)의 동작 패턴 및
                원리를 이해하고
                <br />
                콘텐츠 제작 및 서비스에 적용하는 능력을 길렀습니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Education;
