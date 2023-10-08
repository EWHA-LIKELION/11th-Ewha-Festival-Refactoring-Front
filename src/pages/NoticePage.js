import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/_common/TopBar";
import write from "../assets/images/notice/write.svg";
import NoticeList from "../components/Notice/NoticeList";
import Footer from "../components/_common/Footer";

const NoticePage = () => {
  const navigate = useNavigate();

  const goWrite = () => {
    navigate("/notice/write");
  };

  return (
    <Wrapper>
      <TopBar titleText="공지사항" showSearch={false} />
      <WriteBtn onClick={goWrite}>
        <img src={write} />
        <span>공지 작성하기</span>
      </WriteBtn>
      <List>
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
        <NoticeList />
      </List>
      <Footer />
    </Wrapper>
  );
};

export default NoticePage;

const Wrapper = styled.div`
  position: relative;
  background: var(--beige);
`;

const WriteBtn = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 135px;
  right: 20px;
  cursor: pointer;
  span {
    color: var(--green2);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
`;

const List = styled.div`
  padding-top: 30px;
  padding-bottom: 130px;
`;
