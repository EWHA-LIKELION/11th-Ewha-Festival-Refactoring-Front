import { http } from "../http";
import { persistor } from "../../index";

const UserService = {
  // 로그아웃
  logout: () => {
    console.log("로그아웃 되었습니다.");
    persistor.purge();
    window.localStorage.removeItem("token");
    window.location.href = "https://rewha2022.com/";
  },

  //로그인
  login: (id, password) =>
    http.post("/accounts/login/", {
      username: id,
      password: password,
    }),

  //아이디 중복확인 api
  getDuplicate: () => http.get("/accounts/duplicate/"),

  //회원가입 api
  postUser: (id, password, name) =>
    http.post("/accounts/signup/", {
      username: id,
      password: password,
      nickname: name,
    }),
};

export default UserService;
