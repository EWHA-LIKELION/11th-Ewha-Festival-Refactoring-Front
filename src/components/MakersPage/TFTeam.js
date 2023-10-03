//loginpage
import React, { useState } from "react";
import styled from "styled-components";

import TFMember from "./TFMember";

//data
import { makersData } from "../../_mock/makersData";

//img
import teamtitle from "../../assets/images/login-signup/teampink.svg";

const TFTeam = ({ teamName, admin }) => {
  const data = makersData;
  const team = data.filter((member) => member.team == teamName);
  const member = team.filter((team, index) => index > 0);
  return (
    <Container>
      <Title>
        <img src={teamtitle} />
        <span>{teamName} 팀</span>
      </Title>
      <Task>{team[0].task}</Task>
      <Tag>{teamName}팀장</Tag>
      <LeaderDiv>
        <TFMember memberName={team[0].name} dept={team[0].dept} />
      </LeaderDiv>
      <Tag>{teamName}팀원</Tag>
      <MemberDiv>
        {member.map((member) => (
          <TFMember
            memberName={member.name}
            dept={member.dept}
            task={member.task}
          />
        ))}
      </MemberDiv>
    </Container>
  );
};

export default TFTeam;

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

const LeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const MemberDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px; // 열 간격

  width: 335px;
  margin: 0 0 40px;
`;

const Tag = styled.p`
  color: var(--red);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;

  margin: 20px 0;
`;

const Task = styled.p`
  color: var(--green1);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 11px 0 0 0;
`;
