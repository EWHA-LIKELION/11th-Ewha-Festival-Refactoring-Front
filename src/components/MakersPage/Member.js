import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Member = (props) => {
  return (
    <MemberWrapper>
      <Dept>{props.dept}</Dept>
      <Name>{props.memberName}</Name>
      <Task>{props.task}</Task>
    </MemberWrapper>
  );
};
export default Member;

const MemberWrapper = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
const Name = styled.div`
  color: var(--green1);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
const Dept = styled.div`
  color: var(--pink);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;
const Task = styled.div`
  color: var(--green2);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`;
