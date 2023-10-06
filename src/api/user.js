import React from "react";
import { Navigate } from "react-router-dom";

import { http } from "../http";
import { persistor } from "../../index";

// 로그아웃
export const Logout = () => {
  alert("세션 만료, 다시 로그인해주세요.");
  persistor.purge();
  window.localStorage.removeItem("token");
  window.location.href = <Navigate to="/" />;
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
export const GetDuplicate = async (id) => {
  try {
    const response = await http.get("/accounts/duplicate/");
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

const isLogin = () => !!localStorage.getItem("token");

export default function AuthRoute({ component: Component }) {
  return isLogin() ? Component : <Navigate to="/login" />;
}
