import React from "react";

import MyProjects from "../components/MyProjects";

const Projects = (props) => {
  const projectdatalist = [
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을 클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수 있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인 useContext, useReducer 사용 및 Http를 Firebase를 통해 데이터를 보내고 가져오고 서버 배포 하였습니다.",
      link: "/projects/foodorder",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
      ],
    },
    {
      name: "Login",
      date: "2023.01 ~ 2023.02",
      description:
        "리액트 강의를 보며 Firebase를 통해 로그인 API를 만들었다. 이메일로 회원가입 로그인을 할 수 있고, 비밀번호 변경 및 로그아웃 가능하다",
      link: "/projects/login",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
      ],
    },
    {
      name: "Great Quotes",
      date: "2023.01 ~ 2023.02",
      description:
        "리액트 강의를 보며 만든 게시판 개념의 인용글 작성 할 수 있는 프로젝트입니다. React Router@5 로 만들었으며 Firebase를 통해 Http 데이터 요청 및 받기, 서버 배포 완료했습니다",
      link: "/projects/greatQuotes",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
      ],
    },
    {
      name: "Redux Cart",
      date: "2023.01 ~ 2023.01",
      description:
        "리액트 강의를 보며 Redux를 이용하여 장바구니 카트를 만들었습니다. 장바구니에 추가할 수 있으며 장바구니에서 품목의 총량과 총액이 계산되어 출력됩니다.  Firebase를 통해 Http 요청 및 받기, 서버 배포 하였습니다.",
      link: "/projects/reduxCart",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
        <li>Redux</li>
      ],
    },
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
      link: "/projects/",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
      ],
    },
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
      link: "/projects/",
      tech: [
        <li>HTML&CSS</li>,
        <li>Javascript</li>,
        <li>React</li>,
        <li>Firebase</li>,
      ],
    },
  ];
  return <MyProjects projectdatalist={projectdatalist} />;
};

export default Projects;
