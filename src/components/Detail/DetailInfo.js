import styled from 'styled-components';

import {SecTitle, SecSub, Line} from './SectionExport';

//images
import arrow from '../../assets/icons/arrow-green3.svg';

const DetailInfo = ({event}) => {
  return (
    <Section>
      <Header>
        <SecTitle sectitle={`${event} 정보`} />
        <PopUpBtn src={arrow} />
      </Header>
      <Line />
      <Content>
        <SecSub subtitle={`${event} 위치`} color='var(--green1)'>
          포스코관 01
        </SecSub>
        <SecSub subtitle={`${event} 운영시간`} color='var(--green1)'>
          <div>10일 수요일 - AM 10:00 ~ PM 5:00</div>
          <div>11일 목요일 - AM 10:00 ~ PM 5:00</div>
        </SecSub>
        <SecSub subtitle={`${event} 소개`} color='var(--black)' overflow='on'>
          부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글
        </SecSub>
        <SecSub subtitle={`${event} 운영진 연락처`}>
          <a
            href='https://open.kakao.com/o/gJuiiXIf'
            style={{color: 'var(--green2'}}
          >
            카카오톡오픈채팅/떡꼬치/연락하쇼/sgkimfcdjnoesui/kjnzvdcoe/kvfjngipqrdfkjdfsgjhbkuv
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

const PopUpBtn = styled.img`
  margin-top: 27.6px;
  margin-right: 16.6px;
  width: 12.48px;
  height: 7.28px;
`;

const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
