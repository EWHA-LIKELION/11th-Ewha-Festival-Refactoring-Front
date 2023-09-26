import React from "react";
import styled from "styled-components";

import MenuIcon from "../assets/MenuIcon.svg";
import MainBanner from "../assets/MainBanner.svg";
import BannerGreen from "../assets/BannerGreen.svg";
import BannerBlue from "../assets/BannerGreen.svg";
import TitleIcon from "../assets/TitleIcon.svg";
import Schedule_1 from "../assets/Schedule_1.svg";
import Schedule_2 from "../assets/Schedule_2.svg";
import Schedule_3 from "../assets/Schedule_3.svg";
import HighlightYellow from "../assets/HighlightYellow.svg";
import FestivalLogo from "../assets/FestivalLogo.svg";
import LikelionLogo from "../assets/LikelionLogo.svg";

const MainPage = () => {
  return (
    <Wrapper>
      <TopBar>
        <img src={MenuIcon} />
      </TopBar>
      <img src={MainBanner} />
      <img src={BannerGreen} />
      <img src={BannerBlue} />
      <EventPlan>
        <div>
          <img src={TitleIcon} />
          <p>행사 일정</p>
        </div>
        <div>
          <img src={Schedule_1} />
          <p>05.10</p>
          <p>이화인 한솥밥 배부</p>
          <p>12:00</p>
          <p>영산 줄다리기</p>
          <p>15:30</p>
        </div>
        <div>
          <img src={Schedule_2} />
          <p>05.11</p>
          <p>이화의 볼륨을 높여</p>
          <p>17:30 - 18:00</p>
          <p>EWHA'S TURNTABLE</p>
          <p>19:30</p>
        </div>
        <div>
          <img src={Schedule_3} />
          <p>05.12</p>
          <p>이화의 목소리가 보여</p>
          <p>17:30 - 18:30</p>
          <p>이화그린 영화제</p>
          <p>19:00 - 21:00</p>
        </div>
      </EventPlan>
      <PerformPlan>
        <div>
          <img src={TitleIcon} />
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
