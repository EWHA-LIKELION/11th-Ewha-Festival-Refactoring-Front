import React from "react";
import styled from "styled-components";
import EditBooth from "../components/EditPage/EditBooth";

const BoothEditPage = () => {
  return (
    <>
      <Wrapper>
        <div>부스 수정페이지</div>
        <EditBooth />
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
