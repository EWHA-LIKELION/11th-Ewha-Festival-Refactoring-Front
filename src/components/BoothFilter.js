import React, { useState } from "react";
import { styled } from "styled-components";

import dayClicked from "../assets/icons/dayClicked.svg";
import categoryClicked from "../assets/icons/categoryClicked.svg";
import categoryClickedLong from "../assets/icons/categoryClickedLong.svg";

const BoothFilter = () => {
  const [selectedDay, setSelectedDay] = useState(17);

  const dayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <Wrapper>
      <DayFilter>
        <Day onClick={() => dayClick(17)} isSelected={selectedDay === 17}>
          <span id="date">17</span>
          <span>수요일</span>
        </Day>
        <Day onClick={() => dayClick(18)} isSelected={selectedDay === 18}>
          <span id="date">18</span>
          <span>목요일</span>
        </Day>
        <Day onClick={() => dayClick(19)} isSelected={selectedDay === 19}>
          <span id="date">19</span>
          <span>금요일</span>
        </Day>
      </DayFilter>
      <ViewFilter></ViewFilter>
    </Wrapper>
  );
};

export default BoothFilter;

const Wrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #efefef;
`;

const Day = styled.div`
  background-image: ${(props) =>
    props.isSelected ? `url(${dayClicked})` : "none"};
  background-repeat: no-repeat;
  background-position: center center;
  padding: 16px 16px;
  border-bottom: ${(props) =>
    props.isSelected ? "1px solid #029C54" : "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    color: ${(props) =>
      props.isSelected ? "var(--2023-SWE_green2, #029c54)" : "#9B9B9B"};
    text-align: center;
    font-family: Pretendard;
    font-size: 16.64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #date {
    font-size: 12.48px;
    font-weight: 300;
  }
`;

const ViewFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
