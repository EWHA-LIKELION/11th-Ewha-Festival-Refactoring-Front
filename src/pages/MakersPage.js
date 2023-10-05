//loginpage
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//component
import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";

import Team from "../components/MakersPage/Team";
import TFTeam from "../components/MakersPage/TFTeam";

//img
import title from "../assets/images/login-signup/title.svg";
import listicon from "../assets/images/login-signup/listicon.svg";

const MakersPage = () => {
  return (
    <>
      <Wrapper>
        <TopBar titleText={"만든이들"} showSearch={false} />
        <Container>
          <Title src={title} />
          <div>
            <div>
              <ListTitle>
                <img src={listicon} />
                <span>이화여대 멋쟁이사자처럼 11기 운영진</span>
              </ListTitle>
              <Team teamName={"기획·디자인"} admin={true} />
              <Team teamName={"프론트엔드"} admin={true} />
              <Team teamName={"백엔드"} admin={true} />
            </div>
            <div style={{ margin: "70px 0 30px" }}>
              <ListTitle>
                <img src={listicon} />
                <span>이화여대 멋쟁이사자처럼 11기 아기사자</span>
              </ListTitle>
              <Team teamName={"기획·디자인"} admin={false} />
              <Team teamName={"프론트엔드"} admin={false} />
              <Team teamName={"백엔드"} admin={false} />
            </div>
            <div style={{ margin: "40px 0 70px" }}>
              <ListTitle style={{ marginTop: "70px" }}>
                <img src={listicon} />
                <span>대동제 TF</span>
              </ListTitle>
              <TFTeam teamName={"기획"} />
              <TFTeam teamName={"사무"} />
              <TFTeam teamName={"홍보"} />
              <TFTeam teamName={"연대"} />
              <TFTeam teamName={"부스"} />
              <TFTeam teamName={"꼬우미"} />
            </div>
          </div>
          <Footer />
        </Container>
      </Wrapper>
    </>
  );
};

export default MakersPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 335px;
  height: auto;
  margin: 0px auto;

  background: var(--beige);
  color: #fff;
`;
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0px 27.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.img`
  width: 323.387px;
  height: 116.94px;
  flex-shrink: 0;
  margin-top: 28px;
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;

  width: 335px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #9b9b9b;
  margin-top: 30px;

  img {
    width: 17.5px;
    height: 15px;
    margin: 0 3.5px 7px 0;
  }

  span {
    color: var(--red);
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    margin-bottom: 7px;
  }
`;
