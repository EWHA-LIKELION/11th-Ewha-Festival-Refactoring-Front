import React, { useState } from "react";
import styled from "styled-components";

import menu from ".././assets/icons/menu.svg";
import mypageGreen from "../assets/images/Main/mypage-green.svg";
import bannerMain from "../assets/images/Main/banner-main.svg";
import bannerGreen from "../assets/images/Main/banner-green.svg";
import bannerBlue from "../assets/images/Main/banner-blue.svg";
import arrow from "../assets/images/Main/arrow.svg";
import titleBackground from "../assets/icons/title-background.svg";

import HamMenu from "../components/MainPage/HamMenu";
import EventContent from "../components/MainPage/EventContent";
import PerfPlan from "../components/MainPage/PerfPlan";
import About from "../components/MainPage/About";
import Footer from "../components/_common/Footer";

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Wrapper>
        <TopBar>
          <img src={menu} id="menu" onClick={openMenu} />
          <img src={mypageGreen} id="mypage" />
        </TopBar>
        <Banners>
          <img src={bannerMain} />
          <div className="banner" style={{ marginTop: "44px" }}>
            <img src={bannerGreen} className="banner-img" />
            <span>부스 목록 보러가기</span>
            <img src={arrow} />
          </div>
          <div className="banner">
            <img src={bannerBlue} className="banner-img" />
            <span>공연 목록 보러가기</span>
            <img src={arrow} />
          </div>
        </Banners>
        <EventBox>
          <Title1>
            <img src={titleBackground} />
            <p>행사 일정</p>
          </Title1>
          <EventContent />
        </EventBox>
        <PerfPlanBox>
          <Title2>
            <img src={titleBackground} />
            <p>공연 일정표</p>
          </Title2>
          <PerfPlan />
        </PerfPlanBox>
        <AboutBox>
          <Title3>
            <img src={titleBackground} />
            <p>About</p>
          </Title3>
          <About />
        </AboutBox>
        <HamMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  background-color: var(--beige);
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 32px 26.73px 34px;

  #menu {
    width: 23.851px;
    height: 22.267px;
    flex-shrink: 0;
    margin-top: 36px;
  }
  #mypage {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    margin-top: 36px;
  }
`;

const Banners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }

  .banner-img {
    position: absolute;
  }

  .banner span {
    z-index: 1;
    color: var(--white);
    text-align: center;
    font-size: 18.513px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transform: translateX(-80%) translateY(62px);
  }
`;

const EventBox = styled.div`
  position: relative;
`;

const Title1 = styled.div`
  margin-top: 43.73px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    position: absolute;
  }

  p {
    z-index: 1;
    margin-top: 37px;
    color: var(--white);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 0px;
  }
`;

const PerfPlanBox = styled.div`
  margin-top: 400px;
  position: relative;
`;

const Title2 = styled.div`
  //top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    position: absolute;
  }

  p {
    z-index: 1;
    margin-top: 37px;
    color: var(--white);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 0px;
  }
`;

const AboutBox = styled.div`
  margin-top: 50px;
  position: relative;
`;

const Title3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    position: absolute;
  }

  p {
    z-index: 1;
    margin-top: 37px;
    color: var(--white);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 0px;
  }
`;
