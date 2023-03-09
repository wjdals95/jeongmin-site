import React from 'react';
import Html5 from "../img/html5.svg";
import Javascript from "../img/javascript.svg";
import ReactImg from "../img/react.svg";
import Git from "../img/git.svg";

import MySkillPage from '../components/MySkillPage';
import Education from '../components/Education';

const About = (props) => {
    const skillList = [
        {
            name: "HTML5/CSS3",
            src:  Html5,
            text: [
                <li>HTML5 문법을 알고 있으며 UI를 제작할 수 있습니다.</li>,
                <li>CSS3 문법을 알고 있으며 scss를 사용할 수 있습니다. </li>,
                <li>부트스트랩을 사용하여 반응형 페이지 제작을 할 수 있습니다.</li>
            ]
        },
        {
            name: "Javascript",
            src: Javascript,
            text: [
                <li>Javascript의 기초 문법 ( 변수, 연산자, 조건문, ...)들을 이해하였습니다.</li>,
                <li>ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.</li>,
                <li>다양한 이벤트를 적용하고 선택한 요소의 스타일을 변경 할 수 있습니다.</li>

                
            ]
        },
        {
            name: "React",
            src: ReactImg,
            text: [
                <li>컴포넌트를 이용해서 재사용 가능하고, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다.</li>,
                <li>JSX 문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있습니다.</li>,
                <li>UI 개발에 집중할 수 있습니다.</li>
            ]
        },
        {
            name: "Git",
            src: Git,
            text: [
                <li>git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.</li>,
                <li>깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다.</li>
            ]
        }

    ]
    return (
        <div>
            <MySkillPage skillList={skillList} />
            <Education />
        </div>
    );
};

export default About;