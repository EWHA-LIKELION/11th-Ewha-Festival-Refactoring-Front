import styled from "styled-components";

//images
import cover from "../../assets/images/detail/sample/cover.png"; //임시
import hamBackground from "../../assets/images/detail/ham-background.svg";
import menu from "../../assets/icons/menu.svg";

const DetailCover = ({ thisData, openMenu }) => {
  return (
    <Wrapper>
      <Cover>
        <img src={cover} alt="cover" />
      </Cover>
      <Ham onClick={openMenu}>
        <img src={hamBackground} alt="menu background" />
        <img src={menu} alt="menu" />
      </Ham>
      <Tag>
        {thisData.wheelchair && <div>휠체어 접근 가능</div>}
        {thisData.began && <div>비건 부스</div>}
      </Tag>
    </Wrapper>
  );
};

export default DetailCover;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
`;

const Cover = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Ham = styled.div`
  position: relative;
  left: 20px;
  top: 15.32px;
  cursor: pointer;

  img:nth-child(1) {
    position: absolute;
  }

  img:nth-child(2) {
    position: absolute;
    top: 8.64px;
    left: 6.5px;
  }
`;

const Tag = styled.div`
  position: absolute;
  left: 20px;
  bottom: 15.32px;
  display: flex;
  gap: 8px;

  div {
    padding: 4px 8px 3px 8px;
    border-radius: 26.389px;
    background: #6e41e2;

    color: var(--white);
    font-size: 11px;
    font-weight: 700;
    line-height: 11.611px; /* 105.556% */
  }
`;
