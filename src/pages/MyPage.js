import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppSelector } from "../redux/store";
import { GetProfile } from "../api/user";
import { GetLikedBooths, GetLikedMenus, GetLikedShows } from "../api/booth";
// component;
import Booth from "../components/_common/Booth";
import Pagination from "../components/ListPage/Pagination";
import Concert from "../components/_common/Concert";
import Menu from "../components/_common/Menu";
import TopBar from "../components/_common/TopBar";
import Footer from "../components/_common/Footer";
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

  const [selectMenu, setSelectMenu] = useState("all"); //전체,날짜,장소,카테고리
  const [selectDay, setSelectDay] = useState(1); //nav에서 날짜 선택
  const [selectPlace, setSelectPlace] = useState("정문"); //nav에서 장소 선택
  const [selectCategory, setSelectCategory] = useState("음식"); //nav에서 카테고리 선택
  const [selectCategoryId, setSelectCategoryId] = useState(1);

  const selectedDay = selectDay;
  const selectedPlace = selectPlace;
  const selectedCategory = selectCategory;

  useEffect(() => {
    // 좋아요한 부스 목록 가져오기
    GetLikedBooths(selectedDay, selectedPlace, selectedCategory)
      .then((res) => {
        setLikebooths(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("좋아요한 부스 목록 조회 실패", error);
      });

    // 좋아요한 메뉴 목록 가져오기
    GetLikedMenus(selectedDay, selectedPlace, selectedCategory)
      .then((res) => {
        setLikeMenus(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("좋아요한 메뉴 목록 조회 실패", error);
      });

    // 좋아요한 공연 목록 가져오기
    GetLikedShows(selectedDay, selectedPlace, selectedCategory)
      .then((res) => {
        setLikeShows(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("좋아요한 공연 목록 조회 실패", error);
      });
  }, [selectedDay, selectedPlace, selectedCategory]);

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

  const ClickMenu = (menu) => {
    setSelectMenu(menu);
  };

  const placeClick = (place) => {
    setSelectPlace(place);
  };

  const days = [
    { id: 1, date: 17, name: "수요일" },
    { id: 2, date: 18, name: "목요일" },
    { id: 3, date: 19, name: "금요일" },
  ];

  const places = [
    "정문",
    "교육관",
    "대강당",
    "휴웃길",
    "포스코관",
    "학문관",
    "생활관",
    "신세계관",
  ];

  const categories = [
    { id: 1, name: "음식" },
    { id: 2, name: "굿즈" },
    { id: 3, name: "체험" },
    { id: 4, name: "기타" },
  ];

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
                  onClick={() => clickLikeBooth("likeMenu")}
                >
                  좋아요한 메뉴
                </div>
              </>
            ) : (
              <div id="concert">좋아요한 공연</div>
            )}
          </Bottom>
        </Navigation>
        <MenuWrapper isSelected={selectMenu}>
          <span
            id="all"
            onClick={() => ClickMenu("all")}
            isSelected={selectMenu === "all"}
          >
            전체 ·
          </span>
          <span
            id="day"
            onClick={() => ClickMenu("day")}
            isSelected={selectMenu === "day"}
          >
            날짜 ·
          </span>
          <span
            id="place"
            onClick={() => ClickMenu("place")}
            isSelected={selectMenu === "place"}
          >
            장소 ·
          </span>
          <span
            id="category"
            onClick={() => ClickMenu("category")}
            isSelected={selectMenu === "category"}
          >
            카테고리
          </span>
        </MenuWrapper>
        {selectMenu === "day" && (
          <DayFilter>
            {days.map((day) => (
              <Day
                key={day.date}
                onClick={() => {
                  setSelectDay(day.date);
                }}
                isSelected={selectDay === day.date}
              >
                <span>{day.date}일</span>
                <span>{day.name}</span>
              </Day>
            ))}
          </DayFilter>
        )}
        {selectMenu === "place" && (
          <PlaceFilter>
            {places.map((place) => (
              <Place
                key={place}
                onClick={() => placeClick(place)}
                isSelected={selectPlace === place}
              >
                {place}
              </Place>
            ))}
          </PlaceFilter>
        )}
        {selectMenu === "category" && (
          <CategoryFilter>
            {categories.map((category) => (
              <Category
                key={category}
                onClick={() => {
                  setSelectCategory(category.name);
                  setSelectCategoryId(category.id);
                }}
                isSelected={selectCategory === category.name}
              >
                {category.name}
              </Category>
            ))}
          </CategoryFilter>
        )}
        <div className="count">총 {totalBooths}개의 부스</div>

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 64px;
`;

const MenuWrapper = styled.div`
  span {
    margin-right: 5px;
    cursor: pointer;
  }
  #all {
    color: ${(props) =>
      props.isSelected === "all"
        ? "var(--red, #F55B1D)"
        : "var(--gray2, #9b9b9b)"};
    font-weight: ${(props) => (props.isSelected === "all" ? "700" : "400")};
  }
  #day {
    color: ${(props) =>
      props.isSelected === "day"
        ? "var(--red, #F55B1D)"
        : "var(--gray2, #9b9b9b)"};
    font-weight: ${(props) => (props.isSelected === "day" ? "700" : "400")};
  }
  #place {
    color: ${(props) =>
      props.isSelected === "place"
        ? "var(--red, #F55B1D)"
        : "var(--gray2, #9b9b9b)"};
    font-weight: ${(props) => (props.isSelected === "place" ? "700" : "400")};
  }
  #category {
    color: ${(props) =>
      props.isSelected === "category"
        ? "var(--red, #F55B1D)"
        : "var(--gray2, #9b9b9b)"};
    font-weight: ${(props) =>
      props.isSelected === "category" ? "700" : "400"};
  }
  text-align: center;
  font-size: 15px;
  font-style: normal;
  margin-right: 179px;
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

const PlaceFilter = styled.div`
  width: 347px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  justify-content: center;
  padding: 5px 0px 10px 0px;
`;

//

const Place = styled.div`
  display: flex;
  width: 75px;
  height: 29px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 104px;
  border: 0.5px solid var(--green2, #029c54);
  background: ${(props) =>
    props.isSelected ? "var(--green2, #029c54)" : "#fff"};
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#fff" : "var(--green2, #029c54)")};
  text-align: center;
  font-family: Pretendard;
  font-size: 14.56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DayFilter = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const Day = styled.div`
  display: flex;
  width: 98px;
  height: 29.12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  background: ${(props) =>
    props.isSelected ? "var(--green2, #029c54)" : "#fff"};
  border-bottom: ${(props) =>
    props.isSelected ? "1px solid #029C54" : "none"};

  border-radius: 104px;
  border: 1.04px solid var(--2023-SWE_green2, #029c54);
  cursor: pointer;
  span {
    color: ${(props) => (props.isSelected ? "#ffff" : "var(--green2)")};
    text-align: center;
    font-family: Pretendard;
    font-size: 14.56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #date {
    font-size: 12.48px;
    font-weight: 300;
  }
`;
const CategoryFilter = styled.div`
  width: 347px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  justify-content: center;
  padding: 5px 0px 10px 0px;
`;

const Category = styled.div`
  display: flex;
  width: 75px;
  height: 29px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 104px;
  border: 0.5px solid var(--2023-SWE_green2, #029c54);
  background: ${(props) =>
    props.isSelected ? "var(--2023-SWE_green2, #029c54)" : "#fff"};
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? "#fff" : "var(--2023-SWE_green2, #029c54)"};
  text-align: center;
  font-family: Pretendard;
  font-size: 14.56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
