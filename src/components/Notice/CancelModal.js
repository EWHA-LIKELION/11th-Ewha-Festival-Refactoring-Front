import React from "react";
import { styled } from "styled-components";

const CancelModal = ({ closeModal, cancel }) => {
  return (
    <Wrapper>
      <Container>
        <TopDiv>공지 작성 취소</TopDiv>
        <Explanation>작성 취소된 글은 저장되지 않습니다.</Explanation>
        <Notice>공지 작성을 취소하시겠습니까?</Notice>
        <Btn>
          <NoBtn onClick={closeModal}>아니오</NoBtn>
          <YesBtn onClick={cancel}>예</YesBtn>
        </Btn>
      </Container>
    </Wrapper>
  );
};

export default CancelModal;

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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Explanation = styled.div`
  margin-top: 21px;
  color: var(--red);
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const Notice = styled.div`
  margin-top: 12px;
  color: var(--green1);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const Btn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  margin-bottom: 150px;
`;

const NoBtn = styled.button`
  width: 96px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.4px solid var(--green2);
  background: var(--white);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  cursor: pointer;

  color: var(--green2);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
`;

const YesBtn = styled.button`
  width: 96px;
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: var(--2023-SWE_green2, #029c54);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  cursor: pointer;

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
`;
