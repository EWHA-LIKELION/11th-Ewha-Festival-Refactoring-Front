import React from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search.svg";
import titleBackground from "../../assets/icons/title-background.svg";

const TopBar = () => {
  const { pathname } = useLocation();

  let titleText = "";
  if (pathname === "/boothlistpage") titleText = "부스 목록";

  return (
    <Wrapper>
      <Container>
        <img src={menu} />
        <Title>
          <img src={titleBackground} />
          <span>{titleText}</span>
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
  border-bottom: 0.8px solid var(--gray2);
  background: var(--beige);
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
    color: var(--white);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.867px;
    letter-spacing: -0.424px;
  }
`;
