import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Degree from "../_common/Degree";
//부스 대표 사진
import concert from "../../assets/images/Mypage/concert.png";
import { ReactComponent as PinkHeart } from "../../assets/icons/heart-full.svg";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-empty.svg";

const Concert = ({ showData }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(true);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  if (!showData) return null;

  return (
    <Wrapper>
      <img
        src={concert}
        alt="Concert Cover"
        onClick={() => {
          navigate(`/show/detail/${showData.id}`);
        }}
      />
      <Tag>
        {showData.began && <div>비건</div>}
        {showData.wheelchair && <div>휠체어 접근 가능</div>}
      </Tag>

      <InfoWrapper>
        <Place>
          {showData.college}
          <span>·</span>
          <span>{showData.category}</span>
        </Place>

        <Heart>
          {showData.busy ? (
            <Degree size="small" degree="heavy" />
          ) : (
            <Degree size="small" degree="light" />
          )}
          <LikeButton onClick={handleLikeClick}>
            {isLiked ? <PinkHeart /> : <EmptyHeart />}
          </LikeButton>

          <div className="like">{showData.is_like_count}</div>
        </Heart>
      </InfoWrapper>

      <Title>
        {showData.name}
        <div className="hashtag"> {showData.hashtag}</div>
      </Title>
    </Wrapper>
  );
};
export default Concert;

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
  margin-right: 40px;
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
  .hashtag {
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
