import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import write from "../assets/images/notice/write.svg";
import NoticeList from "../components/Notice/NoticeList";
import Footer from "../components/_common/Footer";

const NoticePage = () => {
  return (
    <Wrapper>
      <TopBar titleText="공지사항" />
      <WriteBtn>
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
  top: 135px;
  right: 20px;
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
