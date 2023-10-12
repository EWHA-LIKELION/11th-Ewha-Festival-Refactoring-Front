import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Degree from "../_common/Degree";

//images
import boothCover from "../../assets/images/Mypage/boothcover.png";
import { ReactComponent as PinkHeart } from "../../assets/icons/heart-full.svg";
import { ReactComponent as EmptyHeart } from "../../assets/icons/heart-empty.svg";

const Booth = ({ boothData }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(true);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const baseURL = "https://api.yewon.link/";

  if (!boothData) return null;
  return (
    <Wrapper>
      <img
        src={baseURL + boothData.thumnail}
        alt="Booth Cover"
        onClick={() => {
          navigate(`/booth/detail/${boothData.id}`);
        }}
      />
      <Tag>
        {boothData.began && <div>비건</div>}
        {boothData.wheelchair && <div>휠체어 접근 가능</div>}
      </Tag>

      <InfoWrapper>
        <Place>
          {boothData.college}
          <span>·</span>
          <span>{boothData.category}</span>
        </Place>
        <Heart>
          {boothData.busy ? (
            <Degree size="small" degree="heavy" />
          ) : (
            <Degree size="small" degree="light" />
          )}

          <LikeButton onClick={handleLikeClick}>
            {isLiked ? <PinkHeart /> : <EmptyHeart />}
          </LikeButton>

          <div className="like">{boothData.is_like_count}</div>
        </Heart>
      </InfoWrapper>

      <Title>
        {boothData.name}
        <div className="hashtag"> {boothData.hashtag}</div>
      </Title>
    </Wrapper>
  );
};

export default Booth;

const Wrapper = styled.div`
  img {
    border-radius: 8px;
    width: 161px;
    aspect-ratio: 1 / 1;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
