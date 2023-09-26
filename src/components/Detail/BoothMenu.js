import styled from 'styled-components';

import {SecTitle, Line} from './SectionExport';

//images
import fullheart from '../../assets/images/detail/menu-fullheart.svg';
import emptyheart from '../../assets/images/detail/menu-emptyheart.svg';

const BoothMenu = () => {
  return (
    <Section>
      <SecTitle sectitle={`메뉴`} />
      <Line />

      {/* 메뉴 이미지 */}
      <MenuImgList>
        <MenuImgBox>
          <MenuImg />
          <MenuImg />
          <MenuImg />
        </MenuImgBox>
      </MenuImgList>

      {/* 메뉴 목록 */}
      <MenuList>
        {/* 나중에 필터링해서 띄우기 */}
        {/* 판매 중인 메뉴 */}
        <Menu>
          <div>이것은 메뉴이름입니다</div>
          <div>
            <span>2,000원</span>
            <img src={fullheart} alt='fullheart' />
          </div>
        </Menu>
        {/* 품절된 메뉴 */}
        <Menu>
          <div style={{color: 'var(--gray2)', fontWeight: '500'}}>
            이것은 메뉴이름입니다
          </div>
          <div>
            <span style={{color: 'var(--red)', fontWeight: '500'}}>
              sold out
            </span>
            <img src={emptyheart} alt='emptyheart' />
          </div>
        </Menu>
      </MenuList>
    </Section>
  );
};

export default BoothMenu;

const Section = styled.div`
  width: 100%;
`;

const MenuImgList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuImgBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0 22px 0;
  white-space: nowrap;
  gap: 15px;
`;

const MenuImg = styled.div`
  position: relative;
  width: 126.88px;
  height: 123.76px;
  overflow: hidden;
  background: var(--white);
  border-radius: 10px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Menu = styled.div`
  display: flex;
  width: 348px;
  justify-content: space-between;
  align-items: center;

  color: var(--green1);
  font-size: 14.56px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  span {
    text-align: right;
    font-size: 13.52px;
    font-weight: 300;
  }
`;
