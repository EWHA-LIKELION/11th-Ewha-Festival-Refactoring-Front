import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import HamMenu from "../MainPage/HamMenu";

import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search.svg";
import titleBackground from "../../assets/icons/title-background.svg";

const TopBar = ({ titleText, showSearch = false }) => {
  const navigate = useNavigate();
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
        <Container>
          <img src={menu} onClick={openMenu} />
          <Title>
            <img src={titleBackground} />
            <span>{titleText}</span>
          </Title>
          {showSearch ? (
            <img
              src={search}
              onClick={() => navigate("/performance/search/")}
            />
          ) : (
            <div style={{ width: "25px", height: "25px" }}></div>
          )}
        </Container>
      </Wrapper>
      {isMenuOpen && <HamMenu isOpen={isMenuOpen} closeMenu={closeMenu} />}
    </>
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
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.867px;
    letter-spacing: -0.424px;
  }
  img {
    width: 165px;
    height: 52px;
  }
`;
