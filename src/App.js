import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Loginpage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import BoothDetailPage from "./pages/BoothDetailPage";
import PerfDetailPage from "./pages/PerfDetailPage";
import BoothListPage from "./pages/BoothListPage";
import BoothEditPage from "./pages/BoothEditPage";
import MyPage from "./pages/MyPage";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/login"} element={<Loginpage />}></Route>
          <Route path={"/signup"} element={<SignupPage />}></Route>
          <Route path={"/"} element={<MainPage />}></Route>

          <Route path={"/performance/:id"} element={<PerfDetailPage />}></Route>

          <Route path={"/booth"} element={<BoothListPage />}></Route>
          <Route path={"/booth/detail/:id"} element={<BoothDetailPage />}></Route>
          <Route path={"/booth/edit/:id"} element={<BoothEditPage />}></Route>

          <Route path={"/mypage"} element={<MyPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}


// export default App;
