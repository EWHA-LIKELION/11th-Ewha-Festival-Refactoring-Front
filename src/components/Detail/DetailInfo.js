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
  const [rotation, setRotation] = useState(0); //아이콘 회전

  const toggleInfo = () => {
    setIsToggleOpen(!isToggleOpen);
    setRotation(rotation + 180);
  };

  // 운영 시간 관리
  var timesResult = ["", "", ""];

  if (thisData.day) {
    for (let i = 0; i < thisData.day.length; i++) {
      const day = thisData.day[i].day;
      const date = thisData.day[i].date;
      const timeData = thisData.times[i];

      var formattedTime = `${date}일 ${day}`;

      if (thisData.times.length > 0) {
        const starthours = timeData.starttime.split(":")[0];
        const startampm = starthours >= 12 ? "PM" : "AM";
        const finishhours = timeData.finishtime.split(":")[0];
        const finishampm = finishhours >= 12 ? "PM" : "AM";

        formattedTime += ` - ${startampm} ${timeData.starttime} ~ ${finishampm} ${timeData.finishtime}`;
      }

      timesResult[i] = formattedTime;
    }
  }

  return (
    <Section>
      <Header>
        <SecTitle sectitle={`${event} 정보`} />
        <ToggleBtn
          src={arrow}
          onClick={toggleInfo}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
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
          {timesResult?.map((item, index) => (
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

  transition: transform 0.3s ease;
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
