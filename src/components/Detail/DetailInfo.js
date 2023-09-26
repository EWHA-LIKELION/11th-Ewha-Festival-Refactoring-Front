import {useState} from 'react';
import styled from 'styled-components';

//components
import {SecTitle, SecSub, Line} from './SectionExport';
import Map from '../_common/Map';

//images
import arrow from '../../assets/icons/arrow-green3.svg';

const DetailInfo = ({event}) => {
  const [thisPlace, setThisPlace] = useState('포스코관'); //임시

  //정보 더보기(지도, 소개 전체보기) 토글 관리
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleInfo = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <Section>
      <Header>
        <SecTitle sectitle={`${event} 정보`} />
        <ToggleBtn src={arrow} onClick={toggleInfo} />
      </Header>
      <Line />
      <Content>
        <SecSub subtitle={`${event} 위치`} color='var(--green1)'>
          포스코관 01
        </SecSub>
        {isToggleOpen && (
          <MapContainer>
            <Map page='detail' place={thisPlace} />
          </MapContainer>
        )}
        <SecSub subtitle={`${event} 운영시간`} color='var(--green1)'>
          <div>10일 수요일 - AM 10:00 ~ PM 5:00</div>
          <div>11일 목요일 - AM 10:00 ~ PM 5:00</div>
        </SecSub>
        <SecSub
          subtitle={`${event} 소개`}
          color='var(--black)'
          overflow={isToggleOpen ? 'off' : 'on'}
        >
          부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글
        </SecSub>
        <SecSub subtitle={`${event} 운영진 연락처`}>
          <a
            href='https://open.kakao.com/o/gJuiiXIf'
            style={{color: 'var(--green2'}}
          >
            https://open.kakao.com/o/gJuiiXIf
          </a>
        </SecSub>
      </Content>
    </Section>
  );
};

export default DetailInfo;

const Section = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleBtn = styled.img`
  margin-top: 27.6px;
  margin-right: 16.6px;
  width: 12.48px;
  height: 7.28px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MapContainer = styled.div`
  display: flex;
  margin-top: -12px;
  margin-left: 21.5px;
`;
