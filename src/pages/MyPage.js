import React from "react";
import { styled } from "styled-components";
//component
import Booth from "../components/Booth";
import Navigation from "../components/Navigation";
//image
import { ReactComponent as Namecover } from "../images/nickname.svg";

const MyPage = () => {
  return (
    <Wrapper>
      <Namecover width={260} />
      <NameCard>
        <div className="name">닉네임</div>
        <div className="nickname">likelion11TF</div>
        <button>로그아웃</button>
      </NameCard>

      <Navigation />
      <Category>
        <span>전체 · </span>
        <span>날짜 · </span>
        <span>장소 · </span>
        <span>카테고리</span>
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
  color: var(--gray2);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin-right: 179px;
`;
