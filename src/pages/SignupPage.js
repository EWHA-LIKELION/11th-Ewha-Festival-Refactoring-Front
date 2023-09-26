import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

//images
import logo from "../images/login-signup/logo.svg";
import id from "../images/login-signup/id_icon.svg";
import passwordicon from "../images/login-signup/password-icon.svg";
import infobtn from "../images/login-signup/infobtn.svg";
import check from "../images/login-signup/check.svg";
import checked from "../images/login-signup/checked.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [secret, setSecret] = useState("");

  const [passwordsMatch, setPasswordsMatch] = useState(false); // 비밀번호 일치 여부 추가

  //비밀번호 확인 함수
  const checkPasswordsMatch = () => {
    setPasswordsMatch(password === confirmPassword);
  };

  return (
    <Wrapper>
      <Box />
      <Container>
        <Logo src={logo} />
        <InputWrapper>
          <InputDiv>
            <Icon src={id} />
            <InputS
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <Icon src={passwordicon} />
            <InputB
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={checkPasswordsMatch}
            />
          </InputDiv>
          <InputDiv>
            <Icon src={passwordicon} />
            <InputS
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={checkPasswordsMatch}
            />
            <Info src={passwordsMatch ? checked : check} />
          </InputDiv>
          <InputDiv>
            <Icon src={id} />
            <InputB
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <Icon src={id} />
            <InputS
              type="text"
              placeholder="비밀단어"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <Info src={infobtn} />
          </InputDiv>
        </InputWrapper>
        <Btn>회원가입</Btn>
      </Container>
    </Wrapper>
  );
};

export default SignupPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 390px;
  height: 844px;
  margin: 0px auto;

  background: var(--beige);
`;

const Container = styled.div`
  width: 100%;
  max-width: 390px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

//상단바 부분
const Box = styled.div`
  width: 390px;
  height: 117px;
  border-bottom: 0.8px solid #9b9b9b;
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  margin-top: 28px;
`;

//내용 부분

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  height: 40px;
  align-items: center;

  border-radius: 4px;
  background: var(--white);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  border: none;
  outline: none;

  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  color: var(--black);
  font-weight: 500;

  padding-left: 40.5px;
  margin: 10px 0px;

  ::placeholder {
    color: var(--gray2);
  }
`;

const InputS = styled(Input)`
  width: 164.5px;
`;

const InputB = styled(Input)`
  width: 201.5px;
`;

const Icon = styled.img`
  position: absolute;
  z-index: 10;

  top: 21px;
  left: 9px;

  width: 18px;
  flex-shrink: 0;
  border-radius: 8px;
`;

const Info = styled.img`
  width: 18px;
  flex-shrink: 0;

  margin-left: 10px;
`;

const Btn = styled.button`
  display: flex;
  width: 242px;
  padding: 10px 40px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background-color: var(--green2);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);
  border: none;

  color: var(--white);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;

  cursor: pointer;
`;
