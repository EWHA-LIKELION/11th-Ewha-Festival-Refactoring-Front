import React, { useState, useEffect } from "react";
import "../../App.css";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetail } from "../../api/booth";
//슬라이더
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//부스 대표 사진
import boothCover from "../../assets/images/Mypage/boothcover.png";
import concert from "../../assets/images/Mypage/concert.png";
import { ReactComponent as PinkHeart } from "../../assets/icons/heart-empty.svg";
import Degree from "../_common/Degree";

//images
import fullheart from "../../assets/images/detail/menu-fullheart.svg";
import emptyheart from "../../assets/images/detail/menu-emptyheart.svg";

// const Booth = ({ boothData }) => {
//   const navigate = useNavigate();

//   return (
//     <Wrapper
//       onClick={() => {
//         navigate(`/booth/detail/${boothData.id}`);
//       }}
//     >
//       <img src={boothCover} />

//       <InfoWrapper>
//         <Place>
//           {" "}
//           {boothData.number}
//           <span>·</span>
//           <span>{boothData.category.join(", ")}</span>
//         </Place>

//         <Heart>
//           <Degree size="small" degree="light" />
//           <PinkHeart />
//           <div className="like">{boothData.is_like_count}</div>
//         </Heart>
//       </InfoWrapper>

//       <Title>
//         부스이름을뭐로지어야하나요
//         <div className="hashtag"> {boothData.hashtag}</div>
//       </Title>
//     </Wrapper>
//   );
// };
// export default Booth;

const Booth = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src={boothCover} alt="임시이미지1" />
        </div>
        <div>
          <img src={concert} alt="임시이미지2" />
        </div>
      </Slider>

      <InfoWrapper>
        <Place>
          {" "}
          포01
          <span>·</span>
          <span>음식</span>
        </Place>

        <Heart>
          <div className="degree">여유</div>
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
