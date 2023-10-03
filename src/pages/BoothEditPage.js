import React from "react";
import styled from "styled-components";

import EditBooth from "../components/EditPage/EditBooth";

const BoothEditPage = () => {
  return (
    <>
      <Wrapper>
        <EditBooth event="부스" />
      </Wrapper>
    </>
  );
};
export default BoothEditPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
