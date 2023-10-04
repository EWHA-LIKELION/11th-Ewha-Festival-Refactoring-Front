//메뉴정보수정 내에서 수정할 메뉴 선택시->id 받아서 상세수정으로 페이지이동
import React from "react";
import styled from "styled-components";
import TopBar from "../_common/TopBar";
import Footer from "../_common/Footer";
import EditMenuCard from "./EditMenuCard";
import { useParams } from "react-router";

const EditMenu = () => {
  const params = useParams();
  const itemId = parseInt(params.id, 10);

  return (
    <>
      <TopBar titleText={`메뉴 정보 수정`} />
      <Wrapper>
        <div className="order">수정할 메뉴를 선택하세요</div>
        <EditMenuCard />
      </Wrapper>
      <Footer />
    </>
  );
};
export default EditMenu;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
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
