import React, { useState } from "react";
import styled from "styled-components";

import highlightYellow from "../../assets/icons/highlight-yellow.svg";
import notice from "../../assets/icons/notice.svg";

const PerfPlan = () => {
  const [selectDay, setSelectDay] = useState([]);
  const [selectPlace, setSelectPlace] = useState([]);

  const dayClick = (day) => {
    setSelectDay(day);
  };

  const placeClick = (place) => {
    setSelectPlace(place);
  };

  const days = [
    { date: 10, name: "수" },
    { date: 11, name: "목" },
    { date: 12, name: "금" },
  ];

  const places = ["잔디광장", "학문관광장", "스포츠트랙"];

  return (
    <Wrapper>
      <Category></Category>
      <Notice>
        <div id="notice-title">
          <img src={notice} />
          <span>공연 주의사항</span>
        </div>
        <ul>
          <li>메인 무대 동아리 공연은 리허설 포함 30분 동안 진행합니다.</li>
          <li>동아리 공연을 즐길 때 절대 뛰지 말아주세요.</li>
        </ul>
      </Notice>
      <PlanTable></PlanTable>
    </Wrapper>
  );
};

export default PerfPlan;

const Wrapper = styled.div`
  margin-top: 700px;
  padding: 20.5px;
`;
const Category = styled.div``;
const Notice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 28px 21px 24px;
  gap: 10px;
  box-sizing: border-box;
  background-color: var(--white);
  border: 1px solid var(--green1);
  border-radius: 0.4rem;

  #notice-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 13.52px;
    height: 16.64px;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--green1);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 49.36px;

    li {
      width: 100%;
      font-size: 1rem;
      font-weight: 300;
      color: var(--black);
      word-break: break-all;
    }
  }
`;

const PlanTable = styled.div``;
