//loginpage
import React, { useState } from "react";
import styled from "styled-components";

//components
import Member from "./Member";

//data
import { makersData } from "../../_mock/makersData";

//img
import teamtitle from "../../assets/images/login-signup/teamred.svg";

const Team = ({ teamName, admin }) => {
  const data = makersData;
  const member = data.filter((member) => {
    return member.team === teamName && member.admin === admin;
  });
  return (
    <Container>
      <Title>
        <img src={teamtitle} />
        <span>{teamName} 팀</span>
      </Title>
      <MemberDiv>
        {member.map((member) => (
          <Member
            memberName={member.name}
            dept={member.dept}
            task={member.task}
          />
        ))}
      </MemberDiv>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 112px;
    height: 50px;
    flex-shrink: 0;
  }

  span {
    position: absolute;
    top: 48%;
    z-index: 20;
    color: var(--white);
    text-align: center;
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }
`;

const MemberDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; // 열 간격

  width: 335px;
  margin-top: 30px;
`;
