import React from "react";
import "../../App.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

//부스 대표 사진
import boothCover from "../../assets/images/Mypage/boothcover.png";
import { ReactComponent as PinkHeart } from "../../assets/icons/heart-empty.svg";
import Degree from "../_common/Degree";

//images
import fullheart from "../../assets/images/detail/menu-fullheart.svg";
import emptyheart from "../../assets/images/detail/menu-emptyheart.svg";

const Booth = () => {
  const navigate = useNavigate();
  return (
    <Wrapper
      onClick={() => {
        navigate(`/booth/detail/1`);
      }}
    >
      <img src={boothCover} />

      <InfoWrapper>
        <Place>
          {" "}
          포01
          <span>·</span>
          <span>음식</span>
        </Place>

        <Heart>
          <Degree size="small" degree="light" />
          <PinkHeart />
          <div className="like">1000</div>
        </Heart>
      </InfoWrapper>

      <Title>
        부스이름을뭐로지어야하나요
        <div className="hashtag"> #떡꼬치 #떡볶이 #포스코관_부스</div>
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
const Tag = styled.div``;
