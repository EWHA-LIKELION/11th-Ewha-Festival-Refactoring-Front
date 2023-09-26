import React from 'react';
import {styled} from 'styled-components';

import TopBar from '../components/_common/TopBar';
import BoothFilter from '../components/ListPage/BoothFilter';

const BoothListPage = () => {
  return (
    <Wrapper>
      <TopBar titleText='부스 목록' />
      <BoothFilter />
    </Wrapper>
  );
};

export default BoothListPage;

const Wrapper = styled.div`
  width: 390px;
  background: var(--beige);
`;
