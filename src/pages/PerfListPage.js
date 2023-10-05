import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import PerfFilter from "../components/ListPage/PerfFilter";
import Map from "../components/_common/Map";
import Booth from "../components/_common/Booth";
import Pagination from "../components/ListPage/Pagination";
import Footer from "../components/_common/Footer";

const PerfListPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const totalPerfs = 13; // 전체 공연 개수
  const perfsPerPage = 10; // 페이지당 표시할 공연 개수
  const startIdx = (currentPage - 1) * perfsPerPage; // 시작 인덱스
  const endIdx = Math.min(startIdx + perfsPerPage, totalPerfs); // 종료 인덱스

  const [selectedView, setSelectedView] = useState("place");
  const [selectedPlace, setSelectedPlace] = useState("잔디광장");
  const placeSelect = (place) => {
    setSelectedPlace(place);
  };

  // 공연 목록 렌더링
  const perfsToDisplay = [...Array(endIdx - startIdx)].map((_, index) => (
    <Booth key={startIdx + index} />
  ));

  return (
    <>
      <TopBar titleText="공연 목록" />
      <Wrapper>
        <PerfFilter
          placeSelect={placeSelect}
          setSelectedView={setSelectedView}
        />
        {selectedView === "place" && <Map page="list" place={selectedPlace} />}
        <div className="count">총 {totalPerfs}개의 공연</div>
        <List>{perfsToDisplay}</List>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin-bottom: 40px;
`;
