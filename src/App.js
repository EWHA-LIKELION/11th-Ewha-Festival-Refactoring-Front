import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MakersPage from "./pages/MakersPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";

import BoothDetailPage from "./pages/BoothDetailPage";
import PerfDetailPage from "./pages/PerfDetailPage";

import PerfListPage from "./pages/PerfListPage";
import BoothEditPage from "./pages/BoothEditPage";
import BoothEditMenuPage from "./pages/BoothEditMenuPage";
import EditMenuDetail from "./components/EditPage/EditMenuDetail";
import PerfEditPage from "./pages/PerfEditPage";
import PerfSearchPage from "./pages/PerfSearchPage";

import BoothListPage from "./pages/BoothListPage";

import NoticePage from "./pages/NoticePage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import NoticeWritePage from "./pages/NoticeWritePage";
import NoticeEditPage from "./pages/NoticeEditPage";

import TrashBinPage from "./pages/TrashBinPage";

import BoothSearchPage from "./pages/BoothSearchPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* 메인페이지 */}
          <Route path={"/"} element={<MainPage />}></Route>

          {/* 로그인/회원가입 */}
          <Route path={"/login"} element={<Loginpage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
          <Route path={"/makers"} element={<MakersPage />}></Route>

          {/* 마이 페이지 */}
          <Route path={"/mypage"} element={<MyPage />}></Route>

          {/* 공지사항 */}
          <Route path={"/notice"} element={<NoticePage />}></Route>
          <Route path={"/notice/detail"} element={<NoticeDetailPage />}></Route>
          <Route path={"/notice/write"} element={<NoticeWritePage />}></Route>
          <Route path={"/notice/edit"} element={<NoticeEditPage />}></Route>

          {/* 부스/공연 목록 페이지 */}
          <Route path={"/booth"} element={<BoothListPage />}></Route>
          <Route path={"/performance"} element={<PerfListPage />}></Route>

          {/* 부스 관련 페이지 */}
          <Route path={"/booth/detail"} element={<BoothDetailPage />}></Route>
          <Route path={"/booth/editbooth"} element={<BoothEditPage />}></Route>
          <Route
            path={"/booth/editmenu"}
            element={<BoothEditMenuPage />}
          ></Route>
          <Route
            path={"/booth/editmenu/:id"}
            element={<EditMenuDetail />}
          ></Route>

          {/* 공연 관련 페이지 */}
          <Route
            path={"/performance/detail"}
            element={<PerfDetailPage />}
          ></Route>
          <Route path={"/performance/edit"} element={<PerfEditPage />}></Route>
          <Route
            path={"/performance/edit/:id"}
            element={<PerfEditPage />}
          ></Route>
          {/* 쓰레기통 페이지 */}
          <Route path={"/trashbin"} element={<TrashBinPage />}></Route>

          {/* 검색 페이지 */}
          <Route
            path={"/performance/search/"}
            element={<PerfSearchPage />}
          ></Route>
          <Route path={"/booth/search/"} element={<BoothSearchPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
