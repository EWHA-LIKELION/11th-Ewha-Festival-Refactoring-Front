import React from "react";
import styled from "styled-components";
import { useState, useNavigate } from "react";

import TopBar from "../_common/TopBar";
import Footer from "../_common/Footer";

const EditMenuDetail = () => {
  const navigate = useNavigate();
  const complete = () => {
    navigate("/mypage");
  };
  const cancel = () => {
    navigate("/mypage");
  };

  const isSoldOut = () => {
    const toggled = document.getElementById("toggle");
    if (toggled && toggled.checked) {
      return true;
    }
    return false;
  };

  return (
    <>
      <TopBar titleText={`메뉴 정보 수정`} />
      <Wrapper>
        <Content>
          {/* 메뉴이름 */}
          <div className="title" style={{ marginTop: "30px" }}>
            메뉴 이름
          </div>
          <input className="inputbox" type="text" value={`덕고지`} />

          {/* 메뉴가격 */}
          <div className="title" style={{ marginTop: "20px" }}>
            가격
          </div>
          <PriceWrapper>
            <input className="inputbox" type="text" value={`2000`} />
            <div className="won">원</div>

            {/* sold out 스위치 */}
            <label className="soldout">Sold Out</label>
            <input type="checkbox" id="toggle" hidden />
            <label for="toggle" className="toggleSwitch">
              <span className="toggleButton"></span>
            </label>
          </PriceWrapper>
          <FinishBtn>
            <div className="cancelBtn" onClick={cancel}>
              취소
            </div>
            <div className="completeBtn" onClick={complete}>
              완료
            </div>
          </FinishBtn>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};
export default EditMenuDetail;

const Wrapper = styled.div`
  background-color: var(--beige);
  width: 390px;
  height: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    color: var(--green1);
    font-size: 16px;
    font-weight: 700;
    line-height: 134.895%;
    margin-bottom: 10px;
  }
  .inputbox {
    display: flex;
    width: 350px;
    height: 45px;
    box-sizing: border-box;
    padding: 20px 40px 20px 16px;
    align-items: center;
    gap: 12px;

    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }
`;

const PriceWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .inputbox {
    display: flex;
    width: 202px;
    height: 45px;
    box-sizing: border-box;
    padding: 20px 40px 20px 16px;
    align-items: center;
    gap: 12px;

    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }

  .won {
    color: var(--black);
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
    margin-left: 6px;
    margin-right: 32px;
  }
  .soldout {
    color: var(--red);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.5px;
    margin-right: 6px;
  }

  .toggleSwitch {
    width: 29px;
    height: 16px;
    display: block;
    position: relative;
    border-radius: 13px;
    background-color: var(--gray2);
    cursor: pointer;
  }
  .toggleSwitch .toggleButton {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: var(--white);
  }
  #toggle:checked ~ .toggleSwitch {
    background-color: var(--green2);
  }
  #toggle:checked ~ .toggleSwitch .toggleButton {
    left: 14px;
    background-color: var(--white);
  }
  .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
`;

const FinishBtn = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 80px 0;
  .cancelBtn {
    display: flex;
    box-sizing: border-box;
    padding: 8px 35px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 0.4px solid var(--green2);
    background: var(--white);
    /* Drop Shadow */
    box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

    color: var(--green2);
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;

    margin-right: 10px;
  }
  .completeBtn {
    display: flex;
    box-sizing: border-box;
    padding: 8px 35px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: var(--green2);
    /* Drop Shadow */
    box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

    color: var(--white);
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
  }
`;
