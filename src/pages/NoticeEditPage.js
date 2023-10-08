import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { EditNotice } from "../api/tf";

import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";

const NoticeEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const notice = location.state.notice;

  const [title, setTitle] = useState(notice.title);
  const [content, setContent] = useState(notice.content);

  const goList = () => {
    EditNotice(notice.id, title, content)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("tf 공지사항 수정 실패", error);
      });
    navigate("/notice");
  };

  const cancel = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <TopBar titleText="공지 수정하기" showSearch={false} />
      <WriteTitle
        placeholder="제목을 작성하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <WriteContent
        placeholder="내용을 작성하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></WriteContent>
      <Btn>
        <BackBtn onClick={cancel}>취소</BackBtn>
        <DoneBtn onClick={goList}>완료</DoneBtn>
      </Btn>
      <Footer />
    </Wrapper>
  );
};

export default NoticeEditPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--beige);
`;

const WriteTitle = styled.input`
  padding: 30px 20px 15px 20px;
  width: 320px;
  background: var(--beige);
  border: none;
  border-bottom: 0.4px solid var(--gray2);
  outline: none;
  color: #0e0e0e;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ::placeholder {
    color: var(--gray2);
  }
`;

const WriteContent = styled.textarea`
  padding: 20px 20px 15px 20px;
  width: 320px;
  height: 410px;
  background: var(--beige);
  border: none;
  outline: none;
  resize: none;

  border-bottom: 0.4px solid var(--gray2);
  color: #0e0e0e;
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  ::placeholder {
    color: var(--gray2);
  }
`;

const Btn = styled.div`
  margin-top: 10px;
  padding-left: 147px;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const BackBtn = styled.button`
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.4px solid var(--green2);
  background: var(--white);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  cursor: pointer;

  color: var(--green2);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
`;

const DoneBtn = styled.button`
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: var(--2023-SWE_green2, #029c54);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  cursor: pointer;

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
`;
