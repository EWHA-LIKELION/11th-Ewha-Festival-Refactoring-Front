import styled from "styled-components";
import { SecTitle, Line } from "./SectionExport";
import { PatchMenuLike } from "../../api/booth";

//images
import fullheart from "../../assets/images/detail/menu-fullheart.svg";
import emptyheart from "../../assets/images/detail/menu-emptyheart.svg";

const BoothMenu = ({ menuData, menuImgData, render, setRender }) => {
  //메뉴 품절 여부에 따른 필터링
  const soldoutMenus = menuData?.filter((menu) => menu.is_soldout);
  const availableMenus = menuData?.filter((menu) => !menu.is_soldout);

  const handleLike = (menuId) => {
    if (localStorage.getItem("token")) {
      PatchMenuLike(menuId)
        .then((res) => {
          console.log(res);
          setRender(render + 1);
        })
        .catch();
    } else alert("로그인이 필요합니다.");
  };

  return (
    <Section>
      <SecTitle sectitle={`메뉴`} />
      <Line />

      {/* 메뉴 이미지 */}
      <MenuImgList>
        <MenuImgBox>
          {menuImgData?.map((menu) => (
            <MenuImg key={menu.id} src={menu.image} />
          ))}
        </MenuImgBox>
      </MenuImgList>

      {/* 메뉴 목록 */}
      <MenuList>
        {/* 판매 중인 메뉴 */}
        {availableMenus?.map((menu) => (
          <Menu key={menu.id}>
            <div>{menu.menu}</div>
            <div>
              <span>{menu.price}원</span>
              {menu.is_liked ? (
                <img
                  src={fullheart}
                  alt="fullheart"
                  onClick={() => handleLike(menu.id)}
                />
              ) : (
                <img
                  src={emptyheart}
                  alt="emptyheart"
                  onClick={() => handleLike(menu.id)}
                />
              )}
            </div>
          </Menu>
        ))}
        {/* 품절된 메뉴 */}
        {soldoutMenus?.map((menu) => (
          <Menu key={menu.id}>
            <div style={{ color: "var(--gray2)", fontWeight: "500" }}>
              {menu.menu}
            </div>
            <div>
              <span style={{ color: "var(--red)", fontWeight: "500" }}>
                sold out
              </span>
              {menu.is_liked ? (
                <img
                  src={fullheart}
                  alt="fullheart"
                  onClick={() => handleLike(menu.id)}
                />
              ) : (
                <img
                  src={emptyheart}
                  alt="emptyheart"
                  onClick={() => handleLike(menu.id)}
                />
              )}
            </div>
          </Menu>
        ))}
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

const MenuImg = styled.img`
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
