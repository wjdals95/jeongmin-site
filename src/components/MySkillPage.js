import React from "react";
import Html5 from "../img/html5.svg";
import Javascript from "../img/javascript.svg";
import ReactImg from "../img/react.svg";
import Git from "../img/git.svg";
import classes from "./MySkillPage.module.css";

const MySkillPage = () => {
  return (
    <div className={classes.mainWrap}>
      <div className={classes.aboutSec}>
        <h1>ABOUT ME</h1>
        <span className={`${classes.titleBg} ${classes.on} `}>SKILLS</span>
      </div>
      <section>
        <h2>MY SKILLS</h2>
        <div className={classes.flexBox}>
          <div className={classes.skillList}>
            <h3 className={classes.skillLabel}>
              <img src={Html5} alt="HTML/CSS" />
              HTML/CSS
            </h3>
            <ul className={classes.skillDetail}>
              <li>HTML5 문법을 알고 있으며 UI를 제작할 수 있습니다.</li>
              <li>CSS3 문법을 알고 있으며 scss를 사용할 수 있습니다.</li>
              <li>3</li>
            </ul>
          </div>
          <div className={classes.skillList}>
            <h3 className={classes.skillLabel}>
              <img src={Javascript} alt="HTML/CSS" />
              JavaScript
            </h3>
            <ul className={classes.skillDetail}>
              <li>HTML5 문법을 알고 있으며 UI를 제작할 수 있습니다.</li>
              <li>CSS3 문법을 알고 있으며 scss를 사용할 수 있습니다.</li>
              <li>3</li>
            </ul>
          </div>
          <div className={classes.skillList}>
            <h3 className={classes.skillLabel}>
              <img src={ReactImg} alt="HTML/CSS" />
              React
            </h3>
            <ul className={classes.skillDetail}>
              <li>HTML5 문법을 알고 있으며 UI를 제작할 수 있습니다.</li>
              <li>CSS3 문법을 알고 있으며 scss를 사용할 수 있습니다.</li>
              <li>3</li>
            </ul>
          </div>
          <div className={classes.skillList}>
            <h3 className={classes.skillLabel}>
              <img src={Git} alt="HTML/CSS" />
              Git
            </h3>
            <ul className={classes.skillDetail}>
              <li>HTML5 문법을 알고 있으며 UI를 제작할 수 있습니다.</li>
              <li>CSS3 문법을 알고 있으며 scss를 사용할 수 있습니다.</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkillPage;
