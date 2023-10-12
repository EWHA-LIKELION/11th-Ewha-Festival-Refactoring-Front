import React, { useState } from "react";
import styled from "styled-components";

import notice from "../../assets/icons/notice.svg";

import PerfPlanFilter from "./PerfPlanFilter";
import PerfPlanTable from "./PerfPlanTable";

const PerfPlan = () => {
  const [selectPlace, setSelectPlace] = useState("잔디광장");
  const [selectDay, setSelectDay] = useState(11);

  const updateSelectPlace = (place) => {
    setSelectPlace(place);
  };

  const updateSelectDay = (day) => {
    setSelectDay(day);
  };

  const noticeData = {
    잔디광장: {
      items: [
        "메인 무대 동아리 공연은 리허설 포함 30분 동안 진행합니다.",
        "동아리 공연을 즐길 때 절대 뛰지 말아주세요.",
      ],
    },
    학문관광장: {
      items: [
        "서브 무대 동아리 공연은 쉬는 시간 15분 동안 진행합니다.(공연 전 15분 정도 리허설 시간이 있을 수 있습니다. 동아리별 상이함)",
        "학문관광장의 경우 앞쪽이 차도이기 때문에 관람 시 항상 안전에 유의해주시기 바랍니다.",
      ],
    },
    스포츠트랙: {
      items: [
        "공연 시간은 동아리별 상이합니다.",
        "이화여대풍물패연합 공연의 경우 1시간 동안 진행할 예정입니다.",
      ],
    },
  };

  const renderContent = () => {
    const data = noticeData[selectPlace];
    if (data) {
      return (
        <Content>
          <Notice>
            <div className="notice-title">
              <img src={notice} alt="공지 아이콘" />
              <span>공연 주의사항</span>
            </div>
            <ul>
              {data.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Notice>
        </Content>
      );
    } else {
      return null;
    }
  };

  return (
    <Wrapper>
      <PerfPlanFilter
        updateSelectPlace={updateSelectPlace}
        updateSelectDay={updateSelectDay}
      />
      {renderContent()}
      <PerfPlanTable selectPlace={selectPlace} selectDay={selectDay} />
    </Wrapper>
  );
};

export default PerfPlan;

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 20.5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px 28px 21px 24px;
  gap: 10px;
  box-sizing: border-box;
  background-color: var(--white);
  border: 1px solid var(--green1);
  border-radius: 0.4rem;
  white-space: pre-line;

  .notice-title {
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
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.168px;
      color: var(--black);
    }
  }
`;
