import React from "react";
import styled from "styled-components";
import TopBar from "../_common/TopBar";
import Footer from "../_common/Footer";
import EditMenuCard from "./EditMenuCard";
import { MenuDetailData } from "../../_mock/MenuDetailData";

const EditMenu = () => {
  return (
    <>
      <TopBar titleText={`메뉴 정보 수정`} />
      <Wrapper>
        <div className="order">수정할 메뉴를 선택하세요</div>
        {MenuDetailData.map((menuItem) => (
          <EditMenuCard key={menuItem.id} menuItem={menuItem} />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};
export default EditMenu;

const Wrapper = styled.div`
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  .order {
    color: var(--green1);
    font-size: 14px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;
