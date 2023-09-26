import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import PerfFilter from "../components/ListPage/PerfFilter";

const PerfListPage = () => {
  return (
    <Wrapper>
      <TopBar titleText="공연 목록" />
      <PerfFilter />
    </Wrapper>
  );
};

export default PerfListPage;

const Wrapper = styled.div`
  width: 390px;
  background: var(--beige);
`;
