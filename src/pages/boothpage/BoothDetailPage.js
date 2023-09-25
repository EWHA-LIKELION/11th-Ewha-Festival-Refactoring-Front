import styled from 'styled-components';

import DetailTitle from '../../components/Detail/DetailTitle';
import DetailInfo from '../../components/Detail/DetailInfo';
import BoothMenu from '../../components/Detail/BoothMenu';
import DetailReview from '../../components/Detail/DetailReview';
import DetailCover from '../../components/Detail/DetailCover';

const BoothDetailPage = () => {
  return (
    <Wrapper>
      <DetailCover />
      <Content>
        <DetailTitle />
        <DetailInfo event='부스' />
        <BoothMenu />
        <DetailReview />
      </Content>
    </Wrapper>
  );
};

export default BoothDetailPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff9f1;
`;

const Content = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
