import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import arrowGreen1 from "../../assets/icons/arrow-green1.svg";
import editIcon from "../../assets/images/Mypage/editIcon.svg";
import boothimg from "../../assets/images/Mypage/boothimg.svg";
const ConcertAdmin = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="title">공연 관리</div>
      <hr></hr>

      <BoxWrapper>
        <div className="concertname">뉴진스~뉴티~</div>
        <div
          className="bar"
          onClick={() => {
            navigate(`/performance/detail/`);
          }}
        >
          <img id="icon" src={boothimg} />
          내 공연 페이지 바로가기
          <img id="arrow" src={arrowGreen1} />
        </div>
        <div
          className="bar"
          onClick={() => {
            navigate(`/performance/edit/`);
          }}
        >
          <img id="icon" src={editIcon} />
          내 공연 정보 수정하기
          <img id="arrow" src={arrowGreen1} />
        </div>
      </BoxWrapper>

      <div className="title">좋아요 내역</div>
      <hr></hr>
    </Wrapper>
  );
};
export default ConcertAdmin;

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
  .concertname {
    display: flex;
    margin: auto;
    background-color: var(--green1);
    color: white;
    justify-content: center;

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
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
