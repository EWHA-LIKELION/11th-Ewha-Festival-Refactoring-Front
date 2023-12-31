import styled from "styled-components";

const MapBox = ({ id, header, description, mapimg }) => {
  return (
    <Box key={id}>
      <Header>
        <span>{header}</span>
      </Header>
      <img src={mapimg} alt={header} />
      <Description>
        {description.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
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
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 348px;
  padding: 16px 0px;
  background: var(--white);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--green1);
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }
`;
