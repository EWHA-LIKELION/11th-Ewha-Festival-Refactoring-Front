import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/store";

import TopBar from "../components/_common/TopBar";
import DeleteModal from "../components/Notice/DeleteModal";
import Footer from "../components/_common/Footer";

const NoticeDetailPage = () => {
  const [modal, setModal] = useState(false);
  const tfAdmin = useAppSelector((state) => state.user.isTf);
  const navigate = useNavigate();
  const location = useLocation();
  const notice = location.state.notice;

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const del = () => {
    setModal(false);
    navigate("/notice");
  };

  const goEdit = () => {
    navigate("/notice/edit");
  };

  return (
    <Wrapper>
      <TopBar titleText="공지사항" showSearch={false} />
      <Title>{notice.title}</Title>
      <Content>
        <Info>
          <span id="writer">TF팀 작성</span>
          <span id="date">{notice.created_at.substring(0, 10)}</span>
        </Info>
        <div id="content">{notice.content}</div>
        {tfAdmin && (
          <Btn>
            <DelBtn onClick={openModal}>삭제</DelBtn>
            <ModifyBtn onClick={goEdit}>수정</ModifyBtn>
          </Btn>
        )}
      </Content>
      <Footer />
      {modal && <DeleteModal closeModal={closeModal} del={del} />}
    </Wrapper>
  );
};

export default NoticeDetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--beige);
`;

const Title = styled.div`
  padding: 30px 33.5px 15px 33.5px;
  width: 323px;
  color: #0e0e0e;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Content = styled.div`
  position: relative;
  width: 310px;
  padding: 20px;
  margin-bottom: 150px;
  border-top: 0.4px solid var(--gray2);
  border-bottom: 0.4px solid var(--gray2);
  #content {
    padding-top: 10px;
    padding-bottom: 80px;
    color: #0e0e0e;
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  #writer {
    color: var(--green2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #date {
    color: #a5a5a5;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const Btn = styled.div`
  position: absolute;
  right: 0px;
  bottom: -200px;
  margin-top: 10px;
  padding-left: 147px;
  display: flex;
  gap: 10px;
  margin-bottom: 150px;
`;

const DelBtn = styled.button`
  padding: 15px 34px;
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

const ModifyBtn = styled.button`
  padding: 15px 34px;
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
