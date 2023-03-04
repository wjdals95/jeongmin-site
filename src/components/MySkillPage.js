import React from "react";

import classes from "./MySkillPage.module.css";

const MySkillPage = (props) => {
  return (
    <div className={classes.mainWrap}>
      <div className={classes.aboutSec}>
        <h1>ABOUT ME</h1>
        <span className={`${classes.titleBg} ${classes.on} `}>SKILLS</span>
      </div>
      <section>
        <h2>MY SKILLS</h2>
        <div className={classes.flexBox}>
          {props.skillList.map((item) => {
            return(
              <div className={classes.skillList}>
              <h3 className={classes.skillLabel}>
                <img src={item.src} alt="" />
                {item.name}
              </h3>
              <ul className={classes.skillDetail}>
               {item.text}
              </ul>
            </div>
            )
          }) }
        </div>
      </section>
    </div>
  );
};

export default MySkillPage;
