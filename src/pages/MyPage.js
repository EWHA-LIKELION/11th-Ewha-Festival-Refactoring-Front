import React, { useState } from "react";
import { styled } from "styled-components";
//component
import Booth from "../components/Booth";
//부스관리자 전용
import BoothAdmin from "../components/BoothAdmin";
//공연관리자 전용
import ConcertAdmin from "../components/ConcertAdmin";
//TF관리자 전용
import TFAdmin from "../components/TFAdmin";

//image
import { ReactComponent as Namecover } from "../images/nickname.svg";
import redhover from "../images/redhover.svg";
import yellowhover from "../images/yellowhover.svg";
import greenline from "../images/greenline.png";

const MyPage = () => {
  const [isBooth, setIsBooth] = useState("what");
  const [likeBooth, setLikeBooth] = useState("like");
  const [isCategory, setIsCategory] = useState("nav");

  const clickBooth = (what) => {
    setIsBooth(what);
  };

  const clickLikeBooth = (like) => {
    setLikeBooth(like);
  };

  const selectedCategory = (nav) => {
    selectedCategory(nav);
  };

  return (
    <Wrapper>
      <Namecover width={260} />
      <NameCard>
        <div className="name">닉네임</div>
        <div className="nickname">likelion11TF</div>
        <button>로그아웃</button>
      </NameCard>

      <Navigation>
        <Top>
          <div
            className="booth"
            onClick={() => clickBooth("booth")}
            isSelected={isBooth === "booth"}
          >
            부스
          </div>
          <div
            className="concert"
            onClick={() => clickBooth("concert")}
            isSelected={isBooth === "concert"}
          >
            공연
          </div>
        </Top>

        <hr></hr>

        <Bottom>
          <div
            className="booth"
            onClick={() => clickLikeBooth("likeBooth")}
            isSelected={likeBooth === "likeBooth"}
          >
            좋아요한 부스
          </div>
          <div
            className="menu"
            onClick={() => clickLikeBooth("likeMenu")}
            isSelected={likeBooth === "likeMenu"}
          >
            좋아요한 메뉴
          </div>
        </Bottom>
      </Navigation>

      <Category>
        <span
          onClick={() => selectedCategory("all")}
          isSelected={isCategory === "all"}
        >
          {" "}
          전체 ·{" "}
        </span>
        <span
          onClick={() => selectedCategory("day")}
          isSelected={isCategory === "day"}
        >
          날짜 ·{" "}
        </span>
        <span
          onClick={() => selectedCategory("place")}
          isSelected={isCategory === "place"}
        >
          장소 ·{" "}
        </span>
        <span
          onClick={() => selectedCategory("category")}
          isSelected={isCategory === "category"}
        >
          카테고리
        </span>
      </Category>

      <div className="count">총 100개의 부스</div>
      <List>
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
        <Booth />
      </List>
    </Wrapper>
  );
};
export default MyPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .count {
    color: var(--gray2);
    font-size: 12.48px;
    font-weight: 500;
    margin-right: 262px;
  }
`;
const NameCard = styled.div`
  position: absolute;
  top: 82px;
  left: 47.5%;
  text-align: center;
  .name {
    color: var(--green1);
    font-size: 31.2px;
    font-style: normal;
    font-weight: 700;
  }
  .nickname {
    color: var(--green2);
    font-size: 14.56px;
    font-style: normal;
    font-weight: 500;
  }
  button {
    border: 0;
    background-color: transparent;
    color: var(--red);
    text-decoration: underline;
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 64px;
`;
const Category = styled.div`
  color: ${(props) => (props.isSelected ? "#F55B1D" : "#9B9B9B")};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin-right: 179px;
`;

// 네비게이션
const Navigation = styled.div`
  width: 390px;
  height: 85.688px;
  hr {
    width: 390px;
    height: 1.04px;
    border: 0;
    background: #efefef;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  color: var(--gray2);
  font-size: 16.64px;
  line-height: 2.5;
  font-weight: 500;

  .booth {
    text-align: center;
    width: 60px;
    background-image: ${(props) =>
      !props.isSelected ? `url(${yellowhover})` : "none"};
    background-size: 59px 35.7px;
    background-repeat: no-repeat;
    color: ${(props) => (!props.isSelected ? "#029C54" : "#9B9B9B")};
    font-weight: ${(props) => (!props.isSelected ? "700" : "500")};
    margin-right: 25px;
  }
  .concert {
    text-align: center;
    width: 60px;
    margin-left: 25px;
    background-image: ${(props) =>
      props.isSelected ? `url(${yellowhover})` : "none"};
    background-size: 59px 35.7px;
    background-repeat: no-repeat;
    color: ${(props) => (props.isSelected ? "#029C54" : "#9B9B9B")};
    font-weight: ${(props) => (props.isSelected ? "700" : "500")};
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: var(--gray2);
  line-height: 2.5;
  font-size: 13px;
  font-weight: 400;
  .booth {
    text-align: center;
    width: 86.295px;
    height: 31px;
    margin-right: 12px;
    background-image: ${(props) =>
      !props.isSelected ? `url(${redhover})` : "none"};
    color: ${(props) => (!props.isSelected ? "#ffff" : "#9B9B9B")};
    font-weight: ${(props) => (!props.isSelected ? "600" : "500")};
  }
  .menu {
    margin-left: 12px;
  }
`;
