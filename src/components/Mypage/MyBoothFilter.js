import React from "react";
import { styled } from "styled-components";

const MyBoothFilter = ({
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
      <ViewFilter>
        <View
          onClick={() => {
            setSelectView("all");
            setSelectDay();
            setSelectDayId();
            setSelectPlace();
            setSelectCategoryId();
          }}
          isSelected={selectView === "all"}
        >
          <span
            style={{
              color: selectView === "all" ? "#F55B1D" : "var(--gray2)",
              fontWeight: selectView === "all" ? 700 : 400,
            }}
          >
            전체 ·
          </span>
        </View>
        <View
          onClick={() => {
            setSelectView("day");
            setSelectDay(17);
            setSelectDayId(1);
          }}
          isSelected={selectView === "all"}
        >
          <span
            style={{
              color: selectView === "day" ? "#F55B1D" : "var(--gray2)",
              fontWeight: selectView === "day" ? 700 : 400,
            }}
          >
            날짜 ·
          </span>
        </View>
        <View
          onClick={() => {
            setSelectView("place");
            setSelectPlace("정문");
            setSelectDay();
            setSelectDayId();
            setSelectCategory();
            setSelectCategoryId();
          }}
          isSelected={selectView === "place"}
        >
          <span
            style={{
              color: selectView === "place" ? "#F55B1D" : "var(--gray2)",
              fontWeight: selectView === "place" ? 700 : 400,
            }}
          >
            장소 ·
          </span>
        </View>
        <View
          id="long"
          onClick={() => {
            setSelectView("category");
            setSelectDay();
            setSelectDayId();
            setSelectPlace();
            setSelectCategory("음식");
            setSelectCategoryId("1");
          }}
          isSelected={selectView === "category"}
        >
          <span
            style={{
              color: selectView === "category" ? "#F55B1D" : "var(--gray2)",
              fontWeight: selectView === "category" ? 700 : 400,
            }}
          >
            카테고리{" "}
          </span>
        </View>
      </ViewFilter>
      {selectView === "day" && (
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
              <span>{day.date}일</span>
              <span>{day.name}</span>
            </Day>
          ))}
        </DayFilter>
      )}

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

export default MyBoothFilter;

const Wrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayFilter = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const Day = styled.div`
  display: flex;
  width: 98px;
  height: 29.12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  background: ${(props) =>
    props.isSelected ? "var(--green2, #029c54)" : "#fff"};
  border-bottom: ${(props) =>
    props.isSelected ? "1px solid #029C54" : "none"};

  border-radius: 104px;
  border: 1.04px solid var(--green2);
  cursor: pointer;
  span {
    color: ${(props) => (props.isSelected ? "#ffff" : "var(--green2)")};
    text-align: center;
    font-size: 14.56px;
    font-weight: 400;
  }
  #date {
    font-size: 12.48px;
    font-weight: 300;
  }
`;

const ViewFilter = styled.div`
  display: flex;
  margin-bottom: 17px;
  margin-right: 140px;
`;

const View = styled.div`
  margin-right: 5px;
  cursor: pointer;
  span {
    margin-right: 5px;
    color: ${(props) =>
      props.isSelected === "all" ? "va(--red)" : "var(--gray2)"};
    font-weight: ${(props) => (props.isSelected === "all" ? "700" : "400")};
    text-align: center;
    font-size: 15px;
    line-height: 100%;
  }
`;

const PlaceFilter = styled.div`
  width: 340px;
  display: grid;
  align-items: center;
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
  border: 0.5px solid var(--green2);
  background: ${(props) =>
    props.isSelected ? "var(--green2)" : "var(--white)"};
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "var(--white)" : "var(--green2)")};
  text-align: center;
  font-size: 14.56px;
  font-weight: 400;
`;

const CategoryFilter = styled.div`
  width: 347px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  justify-content: center;
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
  background: ${(props) => (props.isSelected ? "var(--green2)" : "#fff")};
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#fff" : "var(--green2)")};
  text-align: center;
  font-size: 14.56px;
  font-weight: 400;
`;
