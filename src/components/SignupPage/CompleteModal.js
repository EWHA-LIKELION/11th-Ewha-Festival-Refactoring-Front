import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//img
import warning from "../../assets/images/login-signup/warning.svg";

const CompleteModal = ({
  openCompleteModal,
  closeCompleteModal,
  userChecked,
  handleComplete,
}) => {
  const navigate = useNavigate();

  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      // 클릭 이벤트가 Container 영역 밖인 경우에만 모달 닫기
      closeCompleteModal();
    }
  };
  if (!openCompleteModal) return null;
  return (
    <>
      <Wrapper>
        <Container ref={containerRef} onClick={handleClickOutside}>
          <Title src={warning} />
          <Explanation>
            잃어버린 계정 정보는 다시 찾을 수 있는 방법이 없으니 <br /> 회원가입
            시 아이디와 비밀번호를 잘 기억해두세요!
          </Explanation>
          <Explanation2>회원가입을 완료하시겠습니까?</Explanation2>
          <BtnBox>
            <GuideBtn onClick={closeCompleteModal}>취소</GuideBtn>
            <OKBtn onClick={() => handleComplete()}>확인</OKBtn>
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

const Title = styled.img`
  margin-top: 22px;
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

  color: var(--red);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.628px;
`;

const BtnBox = styled.div`
  display: flex;

  margin-top: 17px;
`;

const GuideBtn = styled.button`
  display: flex;
  width: 96px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  border: 0.4px solid var(--green2);
  background: var(--white, #fff);

  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  cursor: pointer;

  color: var(--green2, #029c54);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
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
