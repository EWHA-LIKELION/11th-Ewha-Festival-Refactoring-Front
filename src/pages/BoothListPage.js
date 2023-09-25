import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";

const BoothListPage = () => {
  return (
    <Wrapper>
      <TopBar />
    </Wrapper>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  width: 390px;
  background: var(--2023-SWE_beige, #fff9f1);
`;
