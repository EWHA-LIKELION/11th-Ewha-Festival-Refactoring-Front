import styled from 'styled-components';

import Degree from '../Degree';

//images
import noticeicon from '../../images/detail/notice.svg';
// import emptyheart from '../../images/emptyheart.svg';
import fullheart from '../../images/fullheart.svg';

const DetailTitle = () => {
  return (
    <Wrapper>
      {/* 혼잡도 */}
      <div style={{marginTop: '16.68px'}}>
        <Degree size='large' degree='light' />
        <Degree size='large' degree='heavy' />
      </div>

      {/* 타이틀 */}
      <Container>
        <Left>
          <div className='title'>부스 이름입니다</div>
          <div>
            <span className='category'>음식</span>
            <span className='hashtag'>#떡꼬치 #콜라 #떡꼬치 #콜라</span>
          </div>
        </Left>
        <Right>
          <Heart src={fullheart} />
          <span>1000</span>
        </Right>
      </Container>

      {/* 실시간 공지사항 */}
      <Notice>
        <img src={noticeicon} alt='noticeicon' />
        <ul>
          <li className='header'>실시간 부스 공지사항</li>
          <li className='content'>
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이
            정하는 바에 의하여 최저임금제를 시행하여야 한다.
          </li>
          <li className='update'>
            <span>update</span>
            <span>05/10</span>
            <span>16:34</span>
          </li>
        </ul>
      </Notice>
    </Wrapper>
  );
};

export default DetailTitle;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  margin-bottom: 8px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .title {
    color: var(--black);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.88px; /* 91.52% */
    letter-spacing: -0.424px;
  }

  .category {
    color: var(--red);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16.64px; /* 138.667% */

    margin-right: 8px;
  }

  .hashtag {
    color: var(--green2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.64px; /* 138.667% */
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span {
    color: #fa8aa7;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 9.929px; /* 99.292% */
  }
`;

const Heart = styled.img`
  width: 20.769px;
  height: 18px;
`;

const Notice = styled.div`
  display: flex;
  padding: 16px;
  gap: 10px;
  box-sizing: border-box;
  background-color: var(--white);
  border: 1px solid var(--green1);
  border-radius: 0.4rem;

  img {
    width: 13.52px;
    height: 16.64px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      width: 100%;
    }

    .header {
      font-size: 1rem;
      font-weight: 600;
      color: var(--green1);
    }

    .content {
      font-size: 1rem;
      font-weight: 300;
      color: var(--black);
      word-break: break-all;
    }

    .update {
      display: flex;
      gap: 8px;
      color: var(--green2);
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;
