import styled from "styled-components";

//images
import maingate from "../../assets/images/trashbin/maingate-t.svg"; //임시

const MapBox = () => {
  return (
    <Box>
      <Header>
        <span>정문 쓰레기통 위치</span>
      </Header>
      <img src={maingate} alt="map" />
      <Description>
        <span>잔디광장 24번 부스 옆</span>
      </Description>
    </Box>
  );
};

export default MapBox;

const Box = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: var(--white);

  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
`;

const Header = styled.div`
  width: 348px;
  height: 48px;
  background: var(--green2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  span {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px; /* 100% */
  }
`;

const Description = styled.div`
  width: 348px;
  height: 48px;
  background: var(--white);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  span {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--green1);
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }
`;
