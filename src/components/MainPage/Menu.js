import React from "react";
import styled from "styled-components";

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

const Menu = ({ isOpen, closeMenu }) => {
  return (
    <Wrapper1 isOpen={isOpen}>
      {isOpen && (
        <Wrapper2>
          <img src={close} onClick={closeMenu} id="close" />
          <img src={title} id="title" />
          <img src={flower} id="flower" />
          <Buttons>
            <div style={{ gap: "7px" }}>
              <img src={mypageWhite} />
              <p>마이페이지</p>
            </div>
            <div>
              <img src={home} />
              <p>메인 페이지</p>
            </div>
            <div>
              <img src={megaphone} />
              <p>공지사항</p>
            </div>
            <div>
              <img src={booth} />
              <p>부스 목록</p>
            </div>
            <div style={{ gap: "7px" }}>
              <img src={perform} style={{ width: "38px" }} />
              <p>공연 목록</p>
            </div>
            <div>
              <img src={trashcan} />
              <p>쓰레기통</p>
            </div>
          </Buttons>
          <Creators>
            <img src={creators} />
            <p>이웃제를 만들이들</p>
          </Creators>
        </Wrapper2>
      )}
    </Wrapper1>
  );
};

export default Menu;

const Wrapper1 = styled.div`
  width: 352.41px;
  position: fixed;
  top: 33px;
  bottom: 12.12px;
  background-color: var(--beige);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 3;
  border-radius: 0px 50px 50px 0px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  //animation: 0.8s ease 0s 1 normal none running;
`;

const Wrapper2 = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #close {
    width: 24.079px;
    margin: 56.51px 0px 0px 33.01px;
  }

  #title {
    margin: 20px 0px -40px 33.01px;
  }

  #flower {
    width: 352.41px;
  }
`;

const Buttons = styled.div`
  z-index: 99;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  position: fixed;
  margin-top: 300px;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  p {
    color: var(--white);
    text-align: center;
    text-shadow: 0px 1.926342248916626px 5.779026985168457px
      rgba(165, 165, 165, 0.2);
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: -70px;
  }
`;
