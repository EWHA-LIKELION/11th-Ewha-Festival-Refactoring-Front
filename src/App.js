import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MakersPage from "./pages/MakersPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";

import BoothListPage from "./pages/BoothListPage";
import BoothDetailPage from "./pages/BoothDetailPage";
import PerfDetailPage from "./pages/PerfDetailPage";

import PerfListPage from "./pages/PerfListPage";
import BoothEditPage from "./pages/BoothEditPage";
import BoothEditMenuPage from "./pages/BoothEditMenuPage";
import EditMenuDetail from "./components/EditPage/EditMenuDetail";
import PerfEditPage from "./pages/PerfEditPage";
import PerfSearchPage from "./pages/PerfSearchPage";

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
            path={"/performance/search"}
            element={<PerfSearchPage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
