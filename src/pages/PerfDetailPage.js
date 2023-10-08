import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//components
import DetailCover from "../components/Detail/DetailCover";
import DetailTitle from "../components/Detail/DetailTitle";
import DetailInfo from "../components/Detail/DetailInfo";
import DetailReview from "../components/Detail/DetailReview";
import Footer from "../components/_common/Footer";
import Menu from "../components/MainPage/HamMenu";
import { GetDetail } from "../api/booth";

const PerfDetailPage = () => {
  //렌더링 설정
  const [render, setRender] = useState(1);

  let { id } = useParams();
  const [thisData, setThisData] = useState({});

  useEffect(() => {
    GetDetail(id)
      .then((res) => {
        setThisData(res.data);
        console.log(res.data);
      })
      .catch();
  }, [render]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //사이드 바 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Wrapper>
      <DetailCover thisData={thisData} openMenu={openMenu} />
      <Content>
        <DetailTitle
          event="공연"
          thisData={thisData}
          render={render}
          setRender={setRender}
        />
        <DetailInfo event="공연" thisData={thisData} />
        <DetailReview
          commentsData={thisData.comments}
          editerId={thisData.user}
          boothId={thisData.id}
          render={render}
          setRender={setRender}
        />
      </Content>
      <Footer />
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </Wrapper>
  );
};

export default PerfDetailPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--beige);
`;

const Content = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
