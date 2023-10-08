import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import { http } from "../api/http";
import { persistor } from "../index";

// 로그아웃
export const Logout = () => {
  // alert("세션 만료, 다시 로그인해주세요.");
  persistor.purge();
  window.localStorage.removeItem("token");
  console.log(window.localStorage.getItem("token"));
  // window.location.href = <Navigate to="/" />;
};

// 로그인
export const PostLogin = async (id, password) => {
  try {
    const response = await http.post("/accounts/login/", {
      username: id,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error("로그인 실패 ", error);
    throw error;
  }
};

//아이디 중복 확인
export const GetDuplicate = async (username) => {
  try {
    const response = await http.post("/accounts/duplicate/", {
      username: username,
    });
    return response.data;
  } catch (error) {
    console.error("아이디 중복 확인 실패 ", error);
    throw error;
  }
};

// 회원가입
export const PostSignup = async (id, password, name) => {
  try {
    const response = await http.post("/accounts/signup/", {
      username: id,
      password: password,
      nickname: name,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("회원가입 실패 ", error);
    throw error;
  }
};

//isLogin + AuthRoute
export const isLogin = () => localStorage.getItem("token");

export default function AuthRoute({ component: Component }) {
  return isLogin() ? Component : <Navigate to="/login" />;
}

//Get : 프로필 조회
export const GetProfile = async (token) => {
  try {
    const response = await axios.get("https://api.yewon.link/mypage", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("프로필 조회 실패 ", error);
    throw error;
  }
};
