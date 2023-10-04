import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";

const NoticeDetailPage = () => {
  return (
    <Wrapper>
      <TopBar titleText="공지사항" />
      <Title>[공지] 이것은 제목입니다</Title>
      <Content>
        <Info>
          <span id="writer">TF팀 작성</span>
          <span id="date">2022-09-14 13:12</span>
        </Info>
        <div id="content">
          국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로
          하며, 그 정치적 중립성은 준수된다. 공무원의 직무상 불법행위로 손해를
          받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한
          배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.
        </div>
        <div id="content">
          대통령의 선거에 관한 사항은 법률로 정한다. 공무원인 근로자는 법률이
          정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 대통령이
          궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이
          정한 국무위원의 순서로 그 권한을 대행한다.
        </div>
      </Content>
      <Btn>
        <DelBtn>삭제</DelBtn>
        <ModifyBtn>수정</ModifyBtn>
      </Btn>
      <Footer />
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
  width: 310px;
  padding: 20px;
  //margin-bottom: 150px;
  border-top: 0.4px solid var(--gray2);
  border-bottom: 0.4px solid var(--gray2);
  #content {
    padding-top: 10px;
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
  margin-top: 10px;
  padding-left: 147px;
  display: flex;
  gap: 10px;
  margin-bottom: 150px;
`;

const DelBtn = styled.button`
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

const ModifyBtn = styled.button`
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
