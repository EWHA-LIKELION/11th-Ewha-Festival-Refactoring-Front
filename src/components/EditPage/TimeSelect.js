import React from "react";
import styled from "styled-components";

const TimeSelect = () => {
  return (
    <>
      <Container>
        <InputContainer>
          <input type="time" id="startTime" />
        </InputContainer>
        <FromTo>부터</FromTo>
        <InputContainer>
          <input type="time" id="endTime" />
        </InputContainer>
        <FromTo>까지</FromTo>
      </Container>
    </>
  );
};

export default TimeSelect;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const InputContainer = styled.div`
  margin: 0 8px;
  input[type="time"] {
    width: 78.5px;
    height: 45px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }
`;

const FromTo = styled.div`
  color: var(--gray1);
  font-size: 15px;
  font-weight: 300;
  line-height: 160%;
`;
