import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GetPerfList } from "../api/booth";

import TopBar from "../components/_common/TopBar";
import PerfFilter from "../components/ListPage/PerfFilter";
import Map from "../components/_common/Map";
import Booth from "../components/_common/Booth";
import Pagination from "../components/ListPage/Pagination";
import Footer from "../components/_common/Footer";

const PerfListPage = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const totalPerfs = list.length; // 전체 공연 개수
  const perfsPerPage = 10; // 페이지당 표시할 공연 개수
  const startIdx = (currentPage - 1) * perfsPerPage; // 시작 인덱스
  const endIdx = Math.min(startIdx + perfsPerPage, totalPerfs); // 종료 인덱스

  const [selectDay, setSelectDay] = useState(17);
  const [selectDayId, setSelectDayId] = useState(1);
  const [selectView, setSelectView] = useState("place");
  const [selectPlace, setSelectPlace] = useState("잔디광장");
  const [selectCategory, setSelectCategory] = useState("밴드");
  const [selectCategoryId, setSelectCategoryId] = useState("1");

  useEffect(() => {
    GetPerfList(selectDayId, selectPlace, selectCategoryId)
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("공연 목록 조회 실패", error);
      });
  }, [selectDayId, selectPlace, selectCategoryId]);

  return (
    <>
      <TopBar titleText="공연 목록" />
      <Wrapper>
        <PerfFilter
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
        <div className="count">총 {totalPerfs}개의 공연</div>
        <List>
          {list.slice(startIdx, endIdx).map((perf, index) => (
            <Booth key={index} boothData={perf} />
          ))}
        </List>
        <Pagination
          total={totalPerfs}
          limit={perfsPerPage}
          page={currentPage}
          setPage={setCurrentPage}
        />
        <Footer />
      </Wrapper>
    </>
  );
};

export default PerfListPage;

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
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin-bottom: 40px;
`;
