//loginpage
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//유저 정보 관련
import { PostLogin, GetProfile } from "../api/user";

import { useAppDispatch } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { initPage } from "../redux/pageSlice";

//component
import TopBar from "../components/_common/TopBar";

//img
import logo from "../assets/images/login-signup/logo.svg";
import id from "../assets/images/login-signup/id-icon.svg";
import passwordicon from "../assets/images/login-signup/password-icon.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  // 유저 리덕스
  const dispatch = useAppDispatch();

  // 받을 변수들
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    PostLogin(username, password)
      .then((data) => {
        const token = data.data.access_token;
        window.localStorage.setItem("token", JSON.stringify(token));
        console.log(data);
        GetProfile(token)
          .then((res) => {
            console.log(res);
            dispatch(
              setUser({
                id: res.data.data.id,
                nickname: res.data.data.nickname,
                username: res.data.data.username,
                is_booth: res.data.data.is_booth,
                is_tf: res.data.data.is_tf,
                booth_id: res.data.data.event_id,
              })
            );
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/");
      })
      .catch((error) => {
        // 에러에 따라 다른 경고 문구 출력
        let type = error.data.non_field_errors;
        type
          ? type == "잘못된 비밀번호입니다."
            ? alert("비밀번호를 확인해주세요.")
            : alert(type)
          : alert("아이디와 비밀번호를 모두 입력해주세요.");
      });
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText={"로그인"} />
        <Container>
          <Logo src={logo} />
          <InputWrapper>
            <InputDiv>
              <Icon src={id} />
              <Input
                type="text"
                value={username}
                placeholder="아이디"
                onChange={(e) => setUsername(e.target.value)}
              ></Input>
            </InputDiv>
            <InputDiv>
              <Icon src={passwordicon} />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputDiv>
            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
          </InputWrapper>
          <TextBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </TextBtn>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 390px;
  height: 844px;
  margin: 0px auto;

  background: var(--beige);
  color: #fff;
`;
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  margin-top: 28px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.div`
  position: relative;
`;

const Input = styled.input`
  position: relative;
  width: 201.5px;
  height: 40px;
  flex-shrink: 0;
  margin-bottom: 20px;

  padding-left: 40.5px;
  border-radius: 4px;
  background: var(--white);

  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  outline: none;
  border: none;

  font-family: "Pretendard-Regular";
  color: var(--black);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  font-style: normal;

  ::placeholder {
    color: var(--gray2);
  }
`;

const Icon = styled.img`
  position: absolute;
  z-index: 10;

  top: 11px;
  left: 9px;

  width: 18px;
  flex-shrink: 0;
  border-radius: 8px;
  background: cover no-repeat;
`;

const LoginBtn = styled.button`
  display: flex;
  width: 242px;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 23px;

  border-radius: 4px;
  background: var(--green2);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

  font-family: "Pretendard-Regular";
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TextBtn = styled.span`
  color: #979797;
  text-align: right;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 10px 0 0 195px;
  cursor: pointer;
`;
