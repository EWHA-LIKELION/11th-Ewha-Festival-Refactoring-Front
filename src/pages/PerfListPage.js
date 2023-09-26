import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import BoothFilter from "../components/ListPage/BoothFilter";

const PerfListPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <BoothFilter />
    </Wrapper>
  );
};

export default PerfListPage;

const Wrapper = styled.div`
  width: 390px;
  background: var(--beige);
`;
