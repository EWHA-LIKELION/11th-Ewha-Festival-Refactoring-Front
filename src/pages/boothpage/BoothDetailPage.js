import styled from 'styled-components';

import DetailTitle from '../../components/Detail/DetailTitle';

const BoothDetailPage = () => {
  return (
    <Wrapper>
      <Content>
        <DetailTitle />
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
