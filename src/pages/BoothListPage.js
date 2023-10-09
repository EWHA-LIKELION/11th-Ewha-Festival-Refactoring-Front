import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GetBoothList } from "../api/booth";

import TopBar from "../components/_common/TopBar";
import BoothFilter from "../components/ListPage/BoothFilter";
import Map from "../components/_common/Map";
import Booth from "../components/_common/Booth";
import Pagination from "../components/ListPage/Pagination";
import Footer from "../components/_common/Footer";

const BoothListPage = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const totalBooths = list.length; // 전체 부스 개수
  const boothsPerPage = 10; // 페이지당 표시할 부스 개수
  const startIdx = (currentPage - 1) * boothsPerPage; // 시작 인덱스
  const endIdx = Math.min(startIdx + boothsPerPage, totalBooths); // 종료 인덱스

  const [selectDay, setSelectDay] = useState(17);
  const [selectDayId, setSelectDayId] = useState(1);
  const [selectView, setSelectView] = useState("place");
  const [selectPlace, setSelectPlace] = useState("정문");
  const [selectCategory, setSelectCategory] = useState("음식");
  const [selectCategoryId, setSelectCategoryId] = useState("1");

  useEffect(() => {
    GetBoothList(selectDayId, selectPlace, selectCategoryId)
      .then((response) => {
        setList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("부스 목록 조회 실패", error);
      });
  }, [selectDayId, selectPlace, selectCategoryId]);

  return (
    <>
      <TopBar titleText="부스 목록" />
      <Wrapper>
        <BoothFilter
          setSelectDay={setSelectDay}
          setSelectDayId={setSelectDayId}
          setSelectView={setSelectView}
          setSelectPlace={setSelectPlace}
          setSelectCategory={setSelectCategory}
          selectDay={selectDay}
          selectView={selectView}
          selectPlace={selectPlace}
          selectCategory={selectCategory}
          setSelectCategoryId={setSelectCategoryId}
        />
        {selectView === "place" && <Map page="list" place={selectPlace} />}
        <div className="count">총 {totalBooths}개의 부스</div>
        <List>
          {list.slice(startIdx, endIdx).map((booth, index) => (
            <Booth key={index} boothData={booth} />
          ))}
        </List>
        <Pagination
          total={totalBooths}
          limit={boothsPerPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
        <Footer />
      </Wrapper>
    </>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--beige);
  .count {
    color: var(--gray2);
    font-size: 12.48px;
    font-weight: 500;
    margin: 15px 262px 15px 0px;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin-bottom: 40px;
`;
