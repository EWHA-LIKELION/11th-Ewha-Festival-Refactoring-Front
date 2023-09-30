import { useState } from "react";
import styled from "styled-components";

//components
import { SecTitle, SecSub, Line } from "./SectionExport";
import Map from "../_common/Map";

//images
import arrow from "../../assets/icons/arrow-green3.svg";

const DetailInfo = ({ event, thisData }) => {
  //정보 더보기(지도, 소개 전체보기) 토글 관리
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleInfo = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  // 운영 시간 관리
  // 최종 데이터 보고 다시 수정할 예정
  var timesResult = ["", "", ""];

  for (let i = 0; i < thisData.day.length; i++) {
    const day = thisData.day[i];
    const date = thisData.date[i];
    const timeData = thisData.times[i];

    //데이터가 문자열이 아니라 null이면 아래 코드 삭제 후 간결하게 수정
    const startTime = timeData.starttime === "null" ? null : timeData.starttime;
    const finishTime =
      timeData.finishtime === "null" ? null : timeData.finishtime;

    if (startTime !== null || finishTime !== null) {
      const [startHour, startMinute] = startTime.split(":");
      const [finishHour, finishMinute] = finishTime.split(":");
      const formattedStartTime = `${
        parseInt(startHour, 10) < 12 ? "AM" : "PM"
      } ${startHour}:${startMinute}`;
      const formattedFinishTime = `${
        parseInt(finishHour, 10) < 12 ? "AM" : "PM"
      } ${finishHour}:${finishMinute}`;

      const formattedTime = `${date}일 ${day} - ${formattedStartTime} ~ ${formattedFinishTime}`;
      timesResult[i] = formattedTime;
    } else timesResult[i] = null;
  }

  console.log(timesResult);

  return (
    <Section>
      <Header>
        <SecTitle sectitle={`${event} 정보`} />
        <ToggleBtn src={arrow} onClick={toggleInfo} />
      </Header>
      <Line />
      <Content>
        <SecSub subtitle={`${event} 위치`} color="var(--green1)">
          {thisData.college} {thisData.number}
        </SecSub>
        {isToggleOpen && (
          <MapContainer>
            <Map page="detail" place={thisData.college} />
          </MapContainer>
        )}
        <SecSub subtitle={`${event} 운영시간`} color="var(--green1)">
          {timesResult.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </SecSub>
        <SecSub
          subtitle={`${event} 소개`}
          color="var(--black)"
          overflow={isToggleOpen ? "off" : "on"}
        >
          {thisData.description}
        </SecSub>
        <SecSub subtitle={`${event} 운영진 연락처`}>
          <a href={thisData.contact} style={{ color: "var(--green2" }}>
            {thisData.contact}
          </a>
        </SecSub>
      </Content>
    </Section>
  );
};

export default DetailInfo;

const Section = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleBtn = styled.img`
  margin-top: 27.6px;
  margin-right: 16.6px;
  width: 12.48px;
  height: 7.28px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MapContainer = styled.div`
  display: flex;
  margin-top: -12px;
  margin-left: 21.5px;
`;
