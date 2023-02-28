import React from "react";

import MyProjects from "../components/MyProjects";

const Projects = (props) => {
  const projectdatalist = [
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
    {
      name: "Login",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
    {
      name: "Great Quotes",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
    {
      name: "Food Order",
      date: "2023.01 ~ 2023.02",
      description:
        "음식 장바구니 프로젝트입니다. 개수를 정해 Add버튼을\\n클릭하면 장바구니에 담기고 장바구니에서 추가, 제거 할 수\\n있습니다. 리액트 강의를 보며 만들었으며 리액트 훅인\\n useContext, useReducer 사용 및 Http를 Firebase를 통해\\n데이터를 보내고 가져오고 서버 배포 하였습니다.",
    },
  ];
  return <MyProjects projectdatalist={projectdatalist}  />

};

export default Projects;
