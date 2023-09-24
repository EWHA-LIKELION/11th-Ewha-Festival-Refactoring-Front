import React from "react";
import { styled } from "styled-components";
//component
import Booth from "../components/Booth";

const MyPage = () => {
  return (
    <Wrapper>
      <List>
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
      </List>
    </Wrapper>
  );
};
export default MyPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  display: flex;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`;
