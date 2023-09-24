import styled from 'styled-components';

//images
import background from '../../images/detail/sec-title-background.svg';
import secliststyle from '../../images/detail/sec-list-style.svg';

const SecTitle = ({sectitle}) => {
  return (
    <SecTitleContainer>
      <img src={background} alt='background' />
      <span>{sectitle}</span>
    </SecTitleContainer>
  );
};

const SecSub = ({subtitle, children, color, overflow}) => {
  return (
    <SecSubContainer>
      <img src={secliststyle} alt='secliststyle' />
      <div>
        <SubTitle>{subtitle}</SubTitle>
        <SubContent color={color} overflow={overflow}>
          {children}
        </SubContent>
      </div>
    </SecSubContainer>
  );
};

const Line = () => {
  return <LineStyle />;
};

export {SecTitle, SecSub, Line};

const SecTitleContainer = styled.div`
  width: 104px;
  height: 41px;

  display: flex;

  img {
    position: absolute;
  }

  span {
    margin: 10px 18px 7px 18px;
    z-index: 1;
    color: var(--white);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 134.895%; /* 24.281px */
  }
`;

const SecSubContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;

  img {
    width: 17.5px;
    height: 15px;
  }
`;

const SubTitle = styled.div`
  color: var(--red);
  text-align: justify;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
`;

const SubContent = styled.div`
  margin-top: 8px;
  width: 310px;
  color: ${({color}) => color};
  text-align: justify;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 107.692% */
  word-break: break-all;

  ${({overflow}) =>
    overflow === 'on' &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

const LineStyle = styled.div`
  margin-top: 13.5px;
  background: var(--gray2);
  width: 100%;
  height: 0.4px;
`;
