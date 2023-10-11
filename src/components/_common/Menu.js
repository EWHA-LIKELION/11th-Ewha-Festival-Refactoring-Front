import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Degree from "../_common/Degree";

//부스 대표 사진
import boothCover from "../../assets/images/Mypage/boothcover.png";
import { ReactComponent as PinkHeart } from "../../assets/icons/heart-full.svg";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-empty.svg";
const Menu = ({ menuData }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(true);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  if (!menuData) return null;
  return (
    <Wrapper
      onClick={() => {
        navigate(`/booth/detail/${menuData.id}`);
      }}
    >
      <img
        src={boothCover}
        alt="Booth Cover"
        onClick={() => {
          navigate(`/booth/detail/${menuData.id}`);
        }}
      />
      {/* 메뉴사진 대신에 부스 대표 사진을 보여주기로함 */}
      <Tag>
        {menuData.began && <div>비건</div>}
        {menuData.wheelchair && <div>휠체어 접근 가능</div>}
      </Tag>

      <InfoWrapper>
        <Place>
          {menuData.number}
          <span>·</span>
          <span>{menuData.category}</span>
        </Place>

        <Heart>
          {menuData.busy ? (
            <Degree size="small" degree="heavy" />
          ) : (
            <Degree size="small" degree="light" />
          )}

          <LikeButton onClick={handleLikeClick}>
            {isLiked ? <PinkHeart /> : <EmptyHeart />}
          </LikeButton>

          <div className="like">{menuData.is_like_count}</div>
        </Heart>
      </InfoWrapper>

      <Title>
        {menuData.name}
        <div className="price"> {menuData.price}원</div>
      </Title>
    </Wrapper>
  );
};
export default Menu;

const Wrapper = styled.div`
  img {
    border-radius: 8px;
    width: 161px;
    aspect-ratio: 1 / 1;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Place = styled.div`
  margin-right: 33px;
  font-weight: 500;
  font-size: 12px;
  color: var(--red);
  span {
    color: var(--red);
  }
`;

const Heart = styled.div`
  margin-top: 1px;
  display: flex;
  gap: 4px;
  .degree {
    margin-right: 4px;
    width: 28.6px;
    height: 13px;
    border-radius: 25.814px;
    background-color: #4c68fa;
    color: #fff;
    text-align: center;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
  }
  .like {
    color: var(--pink);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
  }
`;
const LikeButton = styled.div``;

const Title = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  color: var(--green1);
  .price {
    font-weight: 400;
    font-size: 10px;
    color: var(--green2);
    margin-top: 7px;
  }
`;
const Tag = styled.div`
  position: absolute;
  top: 515px;
  left: 760px;
  display: flex;
  gap: 4px;

  div {
    padding: 4px 8px 3px 8px;
    border-radius: 20px;
    background: rgba(67, 63, 63, 0.55);

    color: var(--white);
    font-size: 11px;
    font-weight: 400;
    line-height: 11.611px;
  }
`;
