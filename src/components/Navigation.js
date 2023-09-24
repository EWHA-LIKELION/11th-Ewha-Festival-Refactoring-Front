import React from "react";
import "../App.css";
import { styled } from "styled-components";

const Navigation = () => {
  return (
    <Wrapper>
      <Top>
        <div className="booth">부스</div>
        <div className="concert">공연</div>
      </Top>
      <hr></hr>
      <Bottom>
        <div className="booth">좋아요한 부스</div>
        <div className="menu">좋아요한 메뉴</div>
      </Bottom>
    </Wrapper>
  );
};
export default Navigation;
const Wrapper = styled.div`
  width: 390px;
  height: 85.688px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  color: var(--gray2);
  font-size: 16.64px;
  line-height: 2.5;
  font-weight: 500;
  .booth {
    margin-right: 25px;
  }
  .concert {
    margin-left: 25px;
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
    margin-right: 12px;
  }
  .menu {
    margin-left: 12px;
  }
`;
