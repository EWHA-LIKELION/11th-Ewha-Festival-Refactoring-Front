import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import Map from "../components/TrashBinPage/Map";
import MapBox from "../components/TrashBinPage/MapBox";
import Footer from "../components/_common/Footer";

const TrashBinPage = () => {
  return (
    <Wrapper>
      <TopBar titleText="쓰레기통 위치" />
      <Content>
        <Map />
        <MapBoxContainer>
          <MapBox />
          <MapBox />
        </MapBoxContainer>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default TrashBinPage;

const Wrapper = styled.div`
  width: 390px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--beige);
`;

const Content = styled.div`
  padding: 32px 23px 36.9px 23px;
  display: flex;
  flex-direction: column;
`;

const MapBoxContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
