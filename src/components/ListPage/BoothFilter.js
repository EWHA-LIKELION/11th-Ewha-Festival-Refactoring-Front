import React from "react";
import { styled } from "styled-components";

import dayClicked from "../../assets/icons/highlight-yellow.svg";
import categoryClicked from "../../assets/icons/highlight-red.svg";

const BoothFilter = ({
  setSelectDay,
  setSelectDayId,
  setSelectPlace,
  setSelectView,
  setSelectCategory,
  selectDay,
  selectView,
  selectPlace,
  selectCategory,
  setSelectCategoryId,
}) => {
  const days = [
    { id: 1, date: 17, name: "수요일" },
    { id: 2, date: 18, name: "목요일" },
    { id: 3, date: 19, name: "금요일" },
  ];

  const places = [
    "정문",
    "교육관",
    "대강당",
    "휴웃길",
    "포스코관",
    "학문관",
    "생활관",
    "신세계관",
  ];

  const categories = [
    { id: 1, name: "음식" },
    { id: 2, name: "굿즈" },
    { id: 3, name: "체험" },
    { id: 4, name: "기타" },
  ];

  return (
    <Wrapper>
      <Line>
        <DayFilter>
          {days.map((day) => (
            <Day
              key={day.date}
              onClick={() => {
                setSelectDay(day.date);
                setSelectDayId(day.id);
              }}
              isSelected={selectDay === day.date}
            >
              <span id="date">{day.date}</span>
              <span>{day.name}</span>
            </Day>
          ))}
        </DayFilter>
      </Line>
      <ViewFilter>
        <View
          onClick={() => setSelectView("place")}
          isSelected={selectView === "place"}
        >
          <span>장소별 보기</span>
        </View>
        <View
          id="long"
          onClick={() => setSelectView("category")}
          isSelected={selectView === "category"}
        >
          <span>카테고리별 보기</span>
        </View>
        <View
          onClick={() => {
            setSelectView("all");
            setSelectCategoryId("5");
          }}
          isSelected={selectView === "all"}
        >
          <span>전체 보기</span>
        </View>
      </ViewFilter>
      {selectView === "place" && (
        <PlaceFilter>
          {places.map((place) => (
            <Place
              key={place}
              onClick={() => setSelectPlace(place)}
              isSelected={selectPlace === place}
            >
              {place}
            </Place>
          ))}
        </PlaceFilter>
      )}
      {selectView === "category" && (
        <CategoryFilter>
          {categories.map((category) => (
            <Category
              key={category.id}
              onClick={() => {
                setSelectCategory(category.name);
                setSelectCategoryId(category.id);
              }}
              isSelected={selectCategory === category.name}
            >
              {category.name}
            </Category>
          ))}
        </CategoryFilter>
      )}
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

const Line = styled.div`
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
  background-image: ${(props) =>
    props.isSelected ? `url(${dayClicked})` : "none"};
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
  span {
    color: ${(props) => (props.isSelected ? "var(--green2)" : "#9B9B9B")};
    text-align: center;
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
  padding: 18px 30px;
`;

const View = styled.div`
  cursor: pointer;
  span {
    background-image: ${(props) =>
      props.isSelected ? `url(${categoryClicked})` : "none"};
    background-repeat: no-repeat;
    background-position: center center;
    padding: 16px 20px;
    color: ${(props) => (props.isSelected ? "var(--white)" : "var(--gray2)")};
    text-align: center;

    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

const PlaceFilter = styled.div`
  width: 340px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 10px;
  padding: 5px 0px 10px 0px;
`;

const Place = styled.div`
  display: flex;
  width: 75px;
  height: 29px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 104px;
  border: 0.5px solid var(--2023-SWE_green2, #029c54);
  background: ${(props) =>
    props.isSelected ? "var(--green2)" : "var(--white)"};
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "var(--white)" : "var(--green2)")};
  text-align: center;
  font-size: 14.56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CategoryFilter = styled.div`
  width: 340px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  padding: 5px 0px 10px 0px;
`;

const Category = styled.div`
  display: flex;
  width: 75px;
  height: 29px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 104px;
  border: 0.5px solid var(--green2);
  background: ${(props) =>
    props.isSelected ? "var(--green2)" : "var(--white)"};
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "var(--white)" : "var(--green2)")};
  text-align: center;
  font-size: 14.56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
