import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//img

const CompleteModal = ({ openSecretModal, closeSecretModal }) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      // 클릭 이벤트가 Container 영역 밖인 경우에만 모달 닫기
      closeSecretModal();
    }
  };

  if (!openSecretModal) return null;
  return (
    <>
      <Wrapper>
        <Container ref={containerRef} onClick={handleClickOutside}>
          <TopDiv>비밀단어 안내</TopDiv>
          <Explanation2>
            회원가입을 위해서 비밀단어를 입력해주세요.
          </Explanation2>
          <Explanation>
            이화여자대학교 유레카 포털 <br /> 자유게시판에서 '이웃제' 검색하여
            확인
          </Explanation>
          <BtnBox>
            <OKBtn onClick={closeSecretModal}>닫기</OKBtn>
          </BtnBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default CompleteModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

const Container = styled.div`
  position: absolute;
  top: 329px;
  width: 294px;
  height: 204px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  border-radius: 5px;
  background: #fff;
  box-sizing: border-box;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 294px;
  height: 49px;
  flex-shrink: 0;
  background-color: var(--green2, #029c54);

  color: var(--white, #fff);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Explanation = styled.span`
  margin-top: 12px;

  color: var(--green1);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const Explanation2 = styled.span`
  margin-top: 21px;

  color: var(--red);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const BtnBox = styled.div`
  display: flex;

  margin-top: 23px;
`;

const OKBtn = styled.button`
  display: flex;
  width: 96px;
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  border: none;
  background: var(--green2, #029c54);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

  cursor: pointer;

  color: var(--white, #fff);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px; /* 0% */
`;
