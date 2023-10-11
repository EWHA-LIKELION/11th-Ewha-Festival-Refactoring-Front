import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import flower from "../../assets/images/Main/flower.svg";
import close from "../../assets/images/Main/close.svg";
import title from "../../assets/images/Main/title.svg";
import mypageWhite from "../../assets/images/Main/mypage-white.svg";
import home from "../../assets/images/Main/home.svg";
import megaphone from "../../assets/images/Main/megaphone.svg";
import booth from "../../assets/images/Main/booth.svg";
import perform from "../../assets/images/Main/perform.svg";
import trashcan from "../../assets/images/Main/trashcan.svg";
import creators from "../../assets/images/Main/creators.svg";

const HamMenu = ({ isOpen, closeMenu }) => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    if (window.localStorage.getItem("token")) {
      navigate("/mypage");
    } else {
      navigate("/login");
    }
  };

  return (
    <Wrapper1>
      <Wrapper2 isOpen={isOpen}>
        {isOpen && (
          <Wrapper3>
            <img src={close} onClick={closeMenu} id="close" />
            <img src={title} id="title" />
            <img src={flower} id="flower" />
            <Buttons>
              <But onClick={goToMyPage}>
                <img src={mypageWhite} />
                <p>마이페이지</p>
              </But>
              <But onClick={() => navigate("/")}>
                <img src={home} />
                <p>메인 페이지</p>
              </But>
              <But onClick={() => navigate("/notice")}>
                <img src={megaphone} />
                <p>공지사항</p>
              </But>
              <But onClick={() => navigate("/booth")}>
                <img src={booth} />
                <p>부스 목록</p>
              </But>
              <But onClick={() => navigate("/performance")}>
                <img src={perform} />
                <p>공연 목록</p>
              </But>
              <But onClick={() => navigate("/trashbin")}>
                <img src={trashcan} />
                <p>쓰레기통</p>
              </But>
            </Buttons>
            <Creators>
              <Button
                onClick={() => navigate("/makers")}
                style={{
                  textDecoration: "none",
                }}
              >
                <img src={creators} />
                <p>이웃제를 만들이들</p>
              </Button>
            </Creators>
          </Wrapper3>
        )}
      </Wrapper2>
    </Wrapper1>
  );
};

export default HamMenu;

const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Wrapper1 = styled.div`
  overflow: hidden;
`;

const Wrapper2 = styled.div`
  width: 352.41px;
  position: fixed;
  top: 33px;
  bottom: 12.12px;
  background-color: var(--beige);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 90;
  border-radius: 0px 50px 50px 0px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  animation: ${animation} 1s normal none;
`;

const Wrapper3 = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #close {
    width: 24.079px;
    margin: 56.51px 0px 0px 33.01px;
    cursor: pointer;
  }

  #title {
    margin: 20px 0px -40px 33.01px;
  }

  #flower {
    width: 352.41px;
    height: 614.263px;
  }
`;

const Buttons = styled.div`
  z-index: 99;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px;
  position: fixed;
  margin-top: 297px;
  margin-left: 60px;

  p {
    color: var(--white);
    text-align: center;
    text-shadow: 0px 1.926342248916626px 5.779026985168457px
      rgba(165, 165, 165, 0.2);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const But = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const Creators = styled.div`
  z-index: 99;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 500px;
  margin-left: 5px;

  p {
    color: var(--white);
    text-align: center;
    text-shadow: 0px 1.926342248916626px 5.779026985168457px
      rgba(165, 165, 165, 0.2);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: -80px;
  }
`;

const Button = styled.div`
  cursor: pointer;
`;
