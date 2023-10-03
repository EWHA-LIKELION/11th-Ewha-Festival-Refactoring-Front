import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

//images
import logo from "../assets/images/login-signup/logo.svg";
import id from "../assets/images/login-signup/id-icon.svg";
import passwordicon from "../assets/images/login-signup/password-icon.svg";
import infobtn from "../assets/images/login-signup/infobtn.svg";
import check from "../assets/images/login-signup/check.svg";
import checked from "../assets/images/login-signup/checked.svg";

//components
import TopBar from "../components/_common/TopBar";
import CompleteModal from "../components/SignupPage/CompleteModal";
import SecretModal from "../components/SignupPage/SecretModal";
import CommonModal from "../components/SignupPage/CommonModal";

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [secret, setSecret] = useState("");

  const [passwordsMatch, setPasswordsMatch] = useState(false); // 비밀번호 일치 여부

  //비밀번호 확인 함수
  const checkPasswordsMatch = () => {
    setPasswordsMatch(password === confirmPassword);
  };

  //모달 관련 state
  const [completemodal, setCompleteModal] = useState(false);
  const [secretmodal, setSecretModal] = useState(false);
  const [commonmodal, setCommonModal] = useState(false);
  const [modalCase, setModalCase] = useState(null);

  const openCompleteModal = () => {
    let caseNumber = null; // 모든 조건 충족 시 modalCase를 null로 설정

    if (username === "") {
      caseNumber = 2; // 아이디를 입력하지 않았을 때
      // } else if () {
      //   caseNumber = 3; // 아이디 중복확인이 진행되지 않았을 때
    } else if (!passwordsMatch) {
      caseNumber = 4; // 비밀번호 확인란이 일치하지 않을 때
    } else if (nickname === "") {
      caseNumber = 5; // 닉네임을 입력하지 않았을 때
    } else if (nickname.length > 10) {
      caseNumber = 6; // 닉네임이 10자를 초과할 때
    }

    setModalCase(caseNumber);

    if (caseNumber === null) {
      setCompleteModal(true);
    } else {
      openCommonModal(caseNumber);
    }
  };

  const closeCompleteModal = () => {
    setCompleteModal(false);
  };

  const openSecretModal = () => {
    setSecretModal(true);
  };

  const closeSecretModal = () => {
    setSecretModal(false);
  };

  const openCommonModal = (caseNumber) => {
    setCommonModal(true);
    setModalCase(caseNumber);
  };

  const closeCommonModal = () => {
    setCommonModal(false);
  };

  return (
    <>
      <Wrapper>
        <TopBar titleText={"회원가입"} />
        <Container>
          <Logo src={logo} />
          <InputWrapper>
            <InputDiv>
              <Icon src={id} />
              <InputID
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <CheckBtn onClick={() => openCommonModal(0)}>중복확인</CheckBtn>
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
                placeholder="닉네임 (10자 이하)"
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
              <Info src={infobtn} onClick={openSecretModal} />
            </InputDiv>
          </InputWrapper>
          <Btn onClick={openCompleteModal}>회원가입</Btn>
        </Container>
      </Wrapper>
      {secretmodal ? (
        <SecretModal
          secretmodal={secretmodal}
          openSecretModal={openSecretModal}
          closeSecretModal={closeSecretModal}
        />
      ) : null}
      {completemodal ? (
        <CompleteModal
          openCompleteModal={openCompleteModal}
          closeCompleteModal={closeCompleteModal}
        />
      ) : null}
      {commonmodal ? (
        <CommonModal
          openCommonModal={openCommonModal}
          closeCommonModal={closeCommonModal}
          modalCase={modalCase}
        />
      ) : null}
    </>
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

const InputID = styled(Input)`
  width: 125.5px;
`;

const CheckBtn = styled.button`
  display: flex;
  padding: 20px 12px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  border: none;
  background: var(--green2);
  cursor: pointer;

  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

  color: var(--white);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 0px;
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
  cursor: pointer;
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
