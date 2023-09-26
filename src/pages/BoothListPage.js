import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import BoothFilter from "../components/ListPage/BoothFilter";

const BoothListPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <BoothFilter />
    </Wrapper>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  width: 390px;
  background: var(--2023-SWE_beige, #fff9f1);
`;
