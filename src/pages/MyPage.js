import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { GetLikedBooths, GetLikedMenus, GetLikedShows } from "../api/booth";

// component
import Booth from "../components/_common/Booth";
import Pagination from "../components/ListPage/Pagination";
import Concert from "../components/_common/Concert";
import Menu from "../components/_common/Menu";
import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";
import MyBoothFilter from "../components/Mypage/MyBoothFilter";
// 부스관리자 전용
import BoothAdmin from "../components/Mypage/BoothAdmin";
// 공연관리자 전용
import ConcertAdmin from "../components/Mypage/ConcertAdmin";
// TF관리자 전용
import IsTfAdmin from "../components/Mypage/IsTfAdmin";
//image
import { ReactComponent as Namecover } from "../assets/images/Mypage/nickname.svg";
import redhover from "../assets/images/Mypage/redhover.svg";
import yellowhover from "../assets/images/Mypage/yellowhover.svg";

import { Logout } from "../api/user";

const MyPage = () => {
  const navigate = useNavigate();
  const boothAdmin = useAppSelector((state) => state.user.isBooth);
  const tfAdmin = useAppSelector((state) => state.user.isTf);
  const userId = useAppSelector((state) => state.user.id);
  const nickname = useAppSelector((state) => state.user.nickname);

  const [likebooths, setLikebooths] = useState([]);
  const [likemenus, setLikeMenus] = useState([]);
  const [likeshows, setLikeShows] = useState([]);

  const [selectBooth, setSelectBooth] = useState("booth"); //부스 vs 공연
  const [likeBooth, setLikeBooth] = useState("likeBooth"); //좋아요부스 vs 좋아요메뉴

  const [selectView, setSelectView] = useState("all");
  const [selectDay, setSelectDay] = useState(); //nav에서 날짜 선택
  const [selectDayId, setSelectDayId] = useState();
  const [selectPlace, setSelectPlace] = useState(); //nav에서 장소 선택
  const [selectCategory, setSelectCategory] = useState(); //nav에서 카테고리 선택
  const [selectCategoryId, setSelectCategoryId] = useState();

  useEffect(() => {
    // 좋아요한 부스 목록 가져오기
    GetLikedBooths(selectDayId, selectPlace, selectCategoryId)
      .then((res) => {
        setLikebooths(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("좋아요한 부스 목록 조회 실패", error);
      });
    // 좋아요한 메뉴 목록 가져오기
    GetLikedMenus(selectDayId, selectPlace, selectCategoryId)
      .then((res) => {
        setLikeMenus(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("좋아요한 메뉴 목록 조회 실패", error);
      });
    // 좋아요한 공연 목록 가져오기
    GetLikedShows(selectDayId, selectPlace, selectCategoryId)
      .then((res) => {
        setLikeShows(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("좋아요한 공연 목록 조회 실패", error);
      });
  }, [selectDayId, selectPlace, selectCategoryId]);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const totalBooths = 40; // 전체 부스 개수
  const boothsPerPage = 10; // 페이지당 표시할 부스 개수
  const startIdx = (currentPage - 1) * boothsPerPage; // 시작 인덱스
  const endIdx = Math.min(startIdx + boothsPerPage, totalBooths); // 종료 인덱스

  const clickBooth = (what) => {
    setSelectBooth(what);
  };

  const clickLikeBooth = (like) => {
    setLikeBooth(like);
  };

  const goToLogIn = () => {
    Logout();
    navigate("/login");
  };

  return (
    <>
      <TopBar titleText="마이페이지" />
      <Wrapper>
        <Nick>
          <Namecover width={260} />
          <NameCard>
            <div className="name">{nickname}</div>
            <div className="nickname">{userId}</div>
            <button onClick={goToLogIn}>로그아웃</button>
          </NameCard>
        </Nick>

        {boothAdmin && <BoothAdmin />}
        {tfAdmin && <IsTfAdmin />}

        <Navigation>
          <Top isSelected={selectBooth}>
            <div className="booth" onClick={() => clickBooth("booth")}>
              부스
            </div>
            <div className="concert" onClick={() => clickBooth("concert")}>
              공연
            </div>
          </Top>

          <hr></hr>

          <Bottom isSelected={likeBooth}>
            {selectBooth === "booth" ? (
              <>
                <div
                  className="booth"
                  onClick={() => clickLikeBooth("likeBooth")}
                >
                  좋아요한 부스
                </div>

                <div
                  className="menu"
                  onClick={() => {
                    clickLikeBooth("likeMenu");
                    setSelectView("all");
                    setSelectDay();
                    setSelectDayId();
                    setSelectPlace();
                    setSelectCategory();
                    setSelectCategoryId();
                  }}
                >
                  좋아요한 메뉴
                </div>
              </>
            ) : (
              <div id="concert">좋아요한 공연</div>
            )}
          </Bottom>
        </Navigation>

        <MyBoothFilter
          setSelectDay={setSelectDay}
          setSelectDayId={setSelectDayId}
          setSelectView={setSelectView}
          setSelectPlace={setSelectPlace}
          setSelectCategory={setSelectCategory}
          selectDay={selectDay}
          selectView={selectView}
          selectPlace={selectPlace}
          selectCategory={selectCategory}
          setSelectCategoryId={setSelectCategoryId}
        />

        {/* 부스/메뉴/공연에 따라 아래 div 태그 바뀌어야 함 */}
        <div className="count">총 {likebooths.length}개의 부스</div>
        <Booth />

        {selectBooth === "booth" ? (
          likeBooth === "likeBooth" ? (
            <>
              <List>
                {" "}
                {likebooths.map((booth) => (
                  <Booth key={booth.id} boothData={booth} />
                ))}
              </List>
              <Pagination
                total={likebooths.length}
                limit={boothsPerPage}
                page={currentPage}
                setPage={setCurrentPage}
              />
            </>
          ) : (
            <>
              <List>
                {" "}
                {likemenus.map((menu) => (
                  <Menu key={menu.id} menuData={menu} />
                ))}
              </List>
              <Pagination
                total={likemenus.length}
                limit={boothsPerPage}
                page={currentPage}
                setPage={setCurrentPage}
              />
            </>
          )
        ) : (
          <>
            <List>
              {" "}
              {likeshows.map((show) => (
                <Concert key={show.id} showData={show} />
              ))}
            </List>
            <Pagination
              total={likeshows.length}
              limit={boothsPerPage}
              page={currentPage}
              setPage={setCurrentPage}
            />
          </>
        )}
        <Footer />
      </Wrapper>
    </>
  );
};
export default MyPage;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .count {
    color: var(--gray2);
    font-size: 12.48px;
    font-weight: 500;
    margin-right: 262px;
  }
`;
const Nick = styled.div`
  position: relative;
`;
const NameCard = styled.div`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 36%;
  .name {
    color: var(--green1);
    font-size: 31.2px;
    font-style: normal;
    font-weight: 700;
  }
  .nickname {
    color: var(--green2);
    font-size: 14.56px;
    font-style: normal;
    font-weight: 500;
  }
  button {
    border: 0;
    background-color: transparent;
    color: var(--red);
    text-decoration: underline;
  }
`;
const List = styled.div`
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 64px;
`;

// 네비게이션
const Navigation = styled.div`
  width: 390px;
  height: 85.688px;
  hr {
    width: 390px;
    height: 1.04px;
    border: 0;
    background: #efefef;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  color: var(--gray2);
  font-size: 16.64px;
  line-height: 2.5;
  font-weight: 500;
  cursor: pointer;
  .booth {
    text-align: center;
    width: 60px;
    background-image: ${(props) =>
      props.isSelected === "booth" ? `url(${yellowhover})` : "none"};
    background-size: 59px 35.7px;
    background-repeat: no-repeat;
    color: ${(props) => (props.isSelected === "booth" ? "#029C54" : "#9B9B9B")};
    font-weight: ${(props) => (props.isSelected === "booth" ? "700" : "500")};
    margin-right: 25px;
  }

  .concert {
    text-align: center;
    width: 60px;
    margin-left: 10px;
    background-image: ${(props) =>
      props.isSelected === "concert" ? `url(${yellowhover})` : "none"};
    background-size: 59px 35.7px;
    background-repeat: no-repeat;
    color: ${(props) =>
      props.isSelected === "concert" ? "#029C54" : "#9B9B9B"};
    font-weight: ${(props) => (props.isSelected === "concert" ? "700" : "500")};
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  line-height: 2.5;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  .booth {
    text-align: center;
    width: 86.295px;
    height: 31px;
    margin-right: 40px;
    background-image: ${(props) =>
      props.isSelected === "likeBooth" ? `url(${redhover})` : "none"};
    color: ${(props) =>
      props.isSelected === "likeBooth" ? "#ffff" : "#9B9B9B"};
    font-weight: ${(props) =>
      props.isSelected === "likeBooth" ? "600" : "500"};
  }
  .menu {
    text-align: center;
    margin-left: 12px;
    width: 86.295px;
    height: 31px;
    background-image: ${(props) =>
      props.isSelected === "likeMenu" ? `url(${redhover})` : "none"};
    color: ${(props) =>
      props.isSelected === "likeMenu" ? "#ffff" : "#9B9B9B"};
    font-weight: ${(props) =>
      props.isSelected === "likeMenu" ? "600" : "500"};
  }
  #concert {
    text-align: center;
    width: 86.295px;
    height: 31px;
    background-image: ${(props) =>
      props.isSelected === "concert" ? `url(${redhover})` : `url(${redhover})`};
    background-repeat: no-repeat;
    color: white;
    font-weight: ${(props) => (props.isSelected === "concert" ? "700" : "500")};
  }
`;
