import React from "react";
import styled from "styled-components";

import schedule1 from "../../assets/images/Main/schedule1.svg";
import schedule2 from "../../assets/images/Main/schedule2.svg";
import schedule3 from "../../assets/images/Main/schedule3.svg";
import date1 from "../../assets/images/Main/date1.svg";
import date2 from "../../assets/images/Main/date2.svg";
import date3 from "../../assets/images/Main/date3.svg";

const EventContent = () => {
  return (
    <Wrapper>
      <Event style={{ marginTop: "38px" }}>
        <img src={schedule1} className="schedule" />
        <div id="event1">
          <img src={date1} />
          <p className="title">이화인 한솥밥 배부</p>
          <p className="time">12:00</p>
          <p className="title">영산 줄다리기</p>
          <p className="time">15:30</p>
        </div>
      </Event>
      <Event style={{ marginTop: "380px" }}>
        <img src={schedule2} className="schedule" />
        <div id="event2">
          <img src={date2} />
          <p className="title">이화의 볼륨을 높여</p>
          <p className="time">17:30 - 18:00</p>
          <p className="title">EWHA'S TURNTABLE</p>
          <p className="time">19:30</p>
        </div>
      </Event>
      <Event style={{ marginTop: "400px" }}>
        <img src={schedule3} className="schedule" />
        <div id="event3">
          <img src={date3} />
          <p className="title">이화의 목소리가 보여</p>
          <p className="time">17:30 - 18:30</p>
          <p className="title">이화그린 영화제</p>
          <p className="time">19:00 - 21:00</p>
        </div>
      </Event>
    </Wrapper>
  );
};

export default EventContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .schedule {
    position: absolute;
  }

  #event1 {
    margin-top: 188px;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  #event2 {
    margin-top: 205px;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #event3 {
    margin-top: 182px;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .title {
    color: var(--black);
    font-family: Pretendard-regular;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    white-space: nowrap;
  }

  .time {
    color: var(--black);
    font-family: Pretendard-regular;
    font-size: 10px;
    font-weight: 500;
    margin-top: 10px;
  }
`;
