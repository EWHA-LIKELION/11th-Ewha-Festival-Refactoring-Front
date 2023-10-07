import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logoFestival from "../../assets/images/Main/logo-festival.svg";
import logoLikelion from "../../assets/images/Main/logo-likelion.svg";

const About = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Box1>
        <img src={logoFestival} />
        <div id="bar" />
        <div id="text">
          <p>
            이화여자대학교는 국가와 인류사회 발전에 공헌하는 <br /> 여성 리더
            양성을 목적으로 건립된 한국 최초의 여학교이자 <br />
            한국 최초의 종합대학입니다.
          </p>
          <p>
            2023년, 이화여자대학교 개교 137주년을 맞아 <br />
            <span>대동제 '이웃: 이화와 함께 웃다'</span>를 개최합니다.
          </p>
          <p>
            이웃제는 이화인 간의 화합과 연대, 학생활동의 활성화, <br />
            사회적 가치를 추구하는 대학 축제 문화 선도의 <br /> 세 가지 목표를
            가지고 진행됩니다.
          </p>
          <p>
            이화인 한솥밥, 영산 줄다리기, 'EWHA'S TURNTABLE',
            <br /> 학생 부스 및 동아리 공연 등 <br /> 다채로운 프로그램이
            기획되어 있습니다.
          </p>
          <p>
            이웃제에서 벗들과 함께 이화의 웃음을 <br /> 만들고, 나누고, 지키며
            행복한 시간 보내시길 바랍니다.
          </p>
        </div>
        <div
          className="button"
          onClick={() => {
            navigate(`/notice`);
          }}
        >
          TF팀 공지 보러가기
        </div>
      </Box1>
      <Box2>
        <img src={logoLikelion} />
        <p>
          이화여자대학교 웹 개발 동아리 <br />{" "}
          <span>&lt;멋쟁이사자처럼&gt;</span>에서 제공하는 <br /> 2023년 대동제
          홈페이지입니다!
        </p>
        <a
          href="https://www.instagram.com/likelion_ewha/"
          style={{ textDecoration: "none" }}
        >
          <div className="button">이대 멋사 구경가기</div>
        </a>
      </Box2>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    display: flex;
    width: 140px;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    background-color: var(--green2);
    border-radius: 4px;
    box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
    color: var(--white);
    font-family: "Pretendard-regular";
    font-size: 15px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 0px;
    cursor: pointer;
  }

  span {
    color: var(--green2);
  }
`;
const Box1 = styled.div`
  margin: 80px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  #bar {
    width: 120px;
    height: 5px;
    background-color: var(--black);
    border-radius: 20px;
  }

  #text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 5px 0px 8px 0px;
  }

  p {
    color: var(--green1);
    text-align: center;
    font-family: "Pretendard-regular";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
`;
const Box2 = styled.div`
  margin: 0px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    color: var(--green1);
    text-align: center;
    font-family: "Pretendard-regular";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
`;
