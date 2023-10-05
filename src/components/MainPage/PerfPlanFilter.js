import React, { useState, useEffect } from "react";
import styled from "styled-components";

import highlightYellow from "../../assets/icons/highlight-yellow.svg";

const PerfPlanFilter = ({ updateSelectPlace }) => {
  const [selectPlace, setSelectPlace] = useState("잔디광장");
  const [selectDay, setSelectDay] = useState(11);

  useEffect(() => {
    setSelectPlace("잔디광장");
    setSelectDay(11);
  }, []);

  const placeClick = (place) => {
    updateSelectPlace(place);
    setSelectPlace(place);
    if (place === "잔디광장") {
      setSelectDay(11);
    } else if (place === "학문관광장" || place === "스포츠트랙") {
      setSelectDay(10);
    }
  };

  const dayClick = (day) => {
    setSelectDay(day);
  };

  const places = ["잔디광장", "학문관광장", "스포츠트랙"];

  const days = [
    { date: 10, name: "수" },
    { date: 11, name: "목" },
    { date: 12, name: "금" },
  ];

  return (
    <Wrapper>
      <PlaceLine>
        <PlaceFilter>
          {places.map((place) => (
            <Place
              key={place}
              onClick={() => placeClick(place)}
              isSelected={selectPlace === place}
            >
              {place}
            </Place>
          ))}
        </PlaceFilter>
      </PlaceLine>
      <DayLine>
        {selectPlace === "잔디광장" && (
          <DayFilter>
            {days
              .filter((day) => day.date !== 10) // 수요일 제외
              .map((day) => (
                <Day
                  key={day.date}
                  onClick={() => dayClick(day.date)}
                  isSelected={selectDay === day.date}
                >
                  <span>
                    05.{day.date} ({day.name})
                  </span>
                </Day>
              ))}
          </DayFilter>
        )}
        {["학문관광장", "스포츠트랙"].includes(selectPlace) && (
          <DayFilter>
            {days.map((day) => (
              <Day
                key={day.date}
                onClick={() => dayClick(day.date)}
                isSelected={selectDay === day.date}
              >
                <span>
                  05.{day.date} ({day.name})
                </span>
              </Day>
            ))}
          </DayFilter>
        )}
      </DayLine>
    </Wrapper>
  );
};

export default PerfPlanFilter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceLine = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  border-bottom: 1px solid var(--gray3);
`;

const PlaceFilter = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const Place = styled.div`
  background-image: ${(props) =>
    props.isSelected ? `url(${highlightYellow})` : "none"};
  background-size: 75px 110px;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 16px 16px;
  border-bottom: ${(props) =>
    props.isSelected ? "1px solid var(--green2)" : "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "var(--green2)" : "#9B9B9B")};
  text-align: center;
  font-size: 16.64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;

const DayLine = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  border-bottom: 1px solid var(--gray3);
`;

const DayFilter = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const Day = styled.div`
  background-size: 75px 110px;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 16px 16px;
  border-bottom: ${(props) =>
    props.isSelected ? "1px solid var(--black)" : "none"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "var(--black)" : "#9B9B9B")};
  text-align: center;
  font-size: 16.64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;
