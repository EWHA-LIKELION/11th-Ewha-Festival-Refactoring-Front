import React from "react";
import styled from "styled-components";
import EditBooth from "../components/EditPage/EditBooth";

const PerfEditPage = () => {
  return (
    <>
      <Wrapper>
        <EditBooth event="공연" />
      </Wrapper>
    </>
  );
};
export default PerfEditPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
