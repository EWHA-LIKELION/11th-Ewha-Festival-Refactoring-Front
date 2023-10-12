import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CommonModal = ({ openCommonModal, closeCommonModal, modalCase }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const textCategory = [
    <>
      이미 사용중인 아이디입니다.
      <br />
      다른 아이디로 가입해주세요!
    </>,
    "사용 가능한 아이디입니다.",
    "모든 칸에 정보를 입력해 주세요!",
    "아이디 중복확인을 진행해 주세요!",
    "비밀번호 확인을 다시 진행해 주세요!",
    "닉네임을 10자 이하로 입력해 주세요!",
    "비밀단어를 다시 확인해 주세요!",
  ];

  const modalText = textCategory[modalCase];
  const textStyles = {
    color: modalCase === 1 ? "var(--green1)" : "var(--red)",
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      // 클릭 이벤트가 Container 영역 밖인 경우에만 모달 닫기
      closeCommonModal();
    }
  };
  if (!openCommonModal) return null;
  return (
    <>
      <Wrapper>
        <Container ref={containerRef} onClick={handleClickOutside}>
          <Explanation2 style={textStyles}>{modalText}</Explanation2>
          <BtnBox>
            <OKBtn onClick={closeCommonModal}>확인</OKBtn>
          </BtnBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default CommonModal;

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
  padding: 32px 0px 24px 0px;
  gap: 16px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background: #fff;
  box-sizing: border-box;
`;

const Explanation = styled.span`
  margin-top: 9px;

  color: var(--green1);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.628px;
`;

const Explanation2 = styled.span`
  margin-top: 9px;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.628px;
`;

const BtnBox = styled.div`
  display: flex;

  margin-top: 17px;
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
  margin-left: 10px;

  color: var(--white, #fff);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px; /* 0% */
`;
