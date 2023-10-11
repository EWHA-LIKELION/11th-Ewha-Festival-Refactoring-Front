import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import { http } from "../api/http";
import { persistor } from "../index";

// 로그아웃
export const Logout = () => {
  persistor.purge();
  window.localStorage.removeItem("token");
};

// 로그인
export const PostLogin = async (username, password) => {
  try {
    const response = await http.post("/accounts/login/", {
      username: username,
      password: password,
    });

    const tokenData = response.data;
    const expiration = Date.now() + tokenData.expires_in * 36000; // 토큰 만료 시간 계산
    tokenData.expiration = expiration;

    // 토큰 정보를 저장
    window.localStorage.setItem("token", JSON.stringify(tokenData));

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // 토큰이 만료된 경우, 로그아웃 처리
      Logout();
    }
    console.error("로그인 실패 ", error.response.data);
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
export const isLogin = () => {
  const tokenData = localStorage.getItem("token");
  return tokenData && tokenData.expiration > Math.floor(Date.now() / 36000);
};

export default function AuthRoute({ component: Component }) {
  if (isLogin()) {
    return <Component />;
  } else {
    // 토큰이 없거나 만료된 경우, 로그아웃 처리
    Logout();
    return <Navigate to="/login" />;
  }
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
