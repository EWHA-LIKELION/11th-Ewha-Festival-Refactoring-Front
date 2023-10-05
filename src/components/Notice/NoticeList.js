import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/notice/detail");
  };

  return (
    <Wrapper onClick={goDetail}>
      <span id="title">[공지] 이것은 제목입니다</span>
      <Info>
        <span id="writer">TF 팀</span>
        <span id="date">2023-05-17</span>
      </Info>
    </Wrapper>
  );
};

export default NoticeList;

const Wrapper = styled.div`
  width: 300px;
  border-bottom: 0.4px solid var(--gray2);
  padding: 20px 25px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;

  #title {
    color: var(--black);
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  #writer {
    color: var(--green2);
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #date {
    color: var(--gray2);
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
