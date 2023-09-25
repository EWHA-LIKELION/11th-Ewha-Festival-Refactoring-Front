import React, { useState } from "react";
import { styled } from "styled-components";

import menu from "../assets/icons/menu.svg";
import search from "../assets/icons/search.svg";
import titleBackground from "../assets/icons/titleBackground.svg";

const TopBar = () => {
  //경로에 따라 타이틀 변경
  const [title, setTitle] = useState("");

  return (
    <Wrapper>
      <Container>
        <img src={menu} />
        <Title>
          <img src={titleBackground} />
          <span>부스 목록</span>
        </Title>
        <img src={search} />
      </Container>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  height: 117px;
  flex-shrink: 0;
  border-bottom: 0.8px solid var(--2023-SWE_gray2, #9b9b9b);
  background: var(--2023-SWE_beige, #fff9f1);
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 322.161px;
  height: 48px;
  flex-shrink: 0;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  span {
    position: absolute;
    top: 34%;
    z-index: 20;
    color: var(--2023-SWE_white, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.867px;
    letter-spacing: -0.424px;
  }
`;
