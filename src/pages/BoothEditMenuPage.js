import React from "react";
import styled from "styled-components";

import EditMenu from "../components/EditPage/EditMenu";
import EditMenuDetail from "../components/EditPage/EditMenuDetail";

const BoothEditMenuPage = () => {
  return (
    <>
      <Wrapper>
        <EditMenu />
      </Wrapper>
    </>
  );
};
export default BoothEditMenuPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
