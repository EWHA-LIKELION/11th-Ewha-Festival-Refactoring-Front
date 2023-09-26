import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/MainPage";

import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";

import BoothListPage from "./pages/BoothListPage";
import BoothDetailPage from "./pages/BoothDetailPage";
import BoothEditPage from "./pages/BoothEditPage";
import PerfDetailPage from "./pages/PerfDetailPage";
import PerfEditPage from "./pages/PerfEditPage";

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

          {/* 마이 페이지 */}
          <Route path={"/mypage"} element={<MyPage />}></Route>

          {/* 부스/공연 목록 페이지 */}
          <Route path={"/booth"} element={<BoothListPage />}></Route>

          {/* 부스 관련 페이지 */}
          <Route
            path={"/booth/detail/:id"}
            element={<BoothDetailPage />}
          ></Route>
          <Route path={"/booth/edit/:id"} element={<BoothEditPage />}></Route>

          {/* 공연 관련 페이지 */}
          <Route
            path={"/performance/detail/:id"}
            element={<PerfDetailPage />}
          ></Route>
          <Route
            path={"/performance/edit/:id"}
            element={<PerfEditPage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
