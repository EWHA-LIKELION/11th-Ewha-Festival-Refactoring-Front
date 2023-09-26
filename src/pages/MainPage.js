import React from "react";
import styled from "styled-components";

import menu from "../assets/icons/menu.svg";
import mypageGreen from "../assets/images/Main/mypage-green.svg";
import bannerMain from "../assets/images/Main/banner-main.svg";
import bannerGreen from "../assets/images/Main/banner-green.svg";
import bannerBlue from "../assets/images/Main/banner-blue.svg";
import titleBackground from "../assets/icons/title-background.svg";
import schedule_1 from "../assets/images/Main/schedule-1.svg";
import schedule_2 from "../assets/images/Main/schedule-2.svg";
import schedule_3 from "../assets/images/Main/schedule-3.svg";
import highlightYellow from "../assets/icons/highlight-yellow.svg";
import logoFestival from "../assets/images/Main/logo-festival.svg";
import logoLikelion from "../assets/images/Main/logo-likelion.svg";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar>
        <img src={menu} />
        <img src={mypageGreen} />
      </TopBar>
      <img src={bannerMain} />
      <img src={bannerGreen} />
      <img src={bannerBlue} />
      <EventPlan>
        <div>
          <img src={titleBackground} />
          <p>행사 일정</p>
        </div>
        <div>
          <img src={schedule_1} />
          <p>05.10</p>
          <p>이화인 한솥밥 배부</p>
          <p>12:00</p>
          <p>영산 줄다리기</p>
          <p>15:30</p>
        </div>
        <div>
          <img src={schedule_2} />
          <p>05.11</p>
          <p>이화의 볼륨을 높여</p>
          <p>17:30 - 18:00</p>
          <p>EWHA'S TURNTABLE</p>
          <p>19:30</p>
        </div>
        <div>
          <img src={schedule_3} />
          <p>05.12</p>
          <p>이화의 목소리가 보여</p>
          <p>17:30 - 18:30</p>
          <p>이화그린 영화제</p>
          <p>19:00 - 21:00</p>
        </div>
      </EventPlan>
      <PerformPlan>
        <div>
          <img src={titleBackground} />
          <p>공연 일정표</p>
        </div>
      </PerformPlan>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  background-color: var(--beige);
`;

const TopBar = styled.div``;

const EventPlan = styled.div``;
const PerformPlan = styled.div``;
