import styled from "styled-components";

//components
import DetailCover from "../components/Detail/DetailCover";
import DetailTitle from "../components/Detail/DetailTitle";
import DetailInfo from "../components/Detail/DetailInfo";
import DetailReview from "../components/Detail/DetailReview";
import Footer from "../components/_common/Footer";

const PerfDetailPage = () => {
  return (
    <Wrapper>
      <DetailCover />
      <Content>
        <DetailTitle event="공연" />
        <DetailInfo event="공연" />
        <DetailReview />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default PerfDetailPage;

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
