import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { GetNotice } from "../api/tf";
import { useAppSelector } from "../redux/store";

import TopBar from "../components/_common/TopBar";
import write from "../assets/images/notice/write.svg";
import NoticeList from "../components/Notice/NoticeList";
import Footer from "../components/_common/Footer";

const NoticePage = () => {
  const navigate = useNavigate();
  const tfAdmin = useAppSelector((state) => state.user.isTf);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    GetNotice()
      .then((response) => {
        setNotices(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log("tf 공지사항 조회 실패", error);
      });
  }, []);

  const goWrite = () => {
    navigate("/notice/write");
  };

  return (
    <Wrapper>
      <TopBar titleText="공지사항" showSearch={false} />
      {tfAdmin && (
        <WriteBtn onClick={goWrite}>
          <img src={write} />
          <span>공지 작성하기</span>
        </WriteBtn>
      )}
      <List>
        {notices.map((notice) => (
          <NoticeList key={notice.id} notice={notice} />
        ))}
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
  min-height: 600px;
`;
