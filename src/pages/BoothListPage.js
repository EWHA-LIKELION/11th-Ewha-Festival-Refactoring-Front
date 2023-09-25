import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import BoothFilter from "../components/BoothFilter";

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
