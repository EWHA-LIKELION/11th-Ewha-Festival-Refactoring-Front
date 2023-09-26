import React from "react";
import "../../App.css";
import { styled } from "styled-components";
import arrowGreen1 from "../../assets/icons/arrow-green1.svg";
import editIcon from "../../assets/images/editIcon.svg";
import megaphone from "../../assets/images/megaphone.svg";

const TFAdmin = () => {
  return (
    <Wrapper>
      <div className="title">공지 관리</div>
      <hr></hr>

      <BoxWrapper>
        <div className="bar">
          <img id="icon" src={megaphone} />
          TF 공지사항 바로가기
          <img id="arrow" src={arrowGreen1} />
        </div>
        <div className="bar">
          <img id="icon" src={editIcon} />
          TF 공지사항 작성하기
          <img id="arrow" src={arrowGreen1} />
        </div>
      </BoxWrapper>

      <div className="title">좋아요 내역</div>
      <hr></hr>
    </Wrapper>
  );
};
export default TFAdmin;

const Wrapper = styled.div`
  width: 350px;
  .title {
    margin-bottom: 10px;
    color: var(--green1);
    font-size: 16px;
    font-weight: 700;
  }
  hr {
    width: 350px;
    height: 0.5px;
    border: none;
    background: #9b9b9b;
  }
`;
const BoxWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  div {
    width: 350px;
    height: 45px;
    text-align: center;
    border-radius: 4px;
    align-items: center;
  }

  .bar {
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    color: var(--green1);
    font-size: 16px;
    font-weight: 400;
  }
  #arrow {
    margin-right: 16px;
    margin-left: auto;
  }
  #icon {
    margin-left: 16px;
    margin-right: 12px;
  }
`;
