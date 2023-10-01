import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import PerfFilter from "../components/ListPage/PerfFilter";
import Map from "../components/_common/Map";
import Booth from "../components/_common/Booth";
import Footer from "../components/_common/Footer";

const PerfListPage = () => {
  const [page, setPage] = useState(1); //현재 페이지
  const limit = 10; //페이지 당 표시할 개수
  const offset = (page - 1) * limit; //시작점과 끝점 계산

  const [selectedView, setSelectedView] = useState("place");
  const [selectedPlace, setSelectedPlace] = useState("잔디광장");
  const placeSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <Wrapper>
      <TopBar titleText="공연 목록" />
      <PerfFilter placeSelect={placeSelect} setSelectedView={setSelectedView} />
      {selectedView === "place" && <Map page="list" place={selectedPlace} />}
      <div className="count">총 100개의 부스</div>
      <List>
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
      </List>
      <Footer />
    </Wrapper>
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
  margin-bottom: 64px;
`;
