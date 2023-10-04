import React, { useEffect } from "react";
import styled from "styled-components";
import TopBar from "../_common/TopBar";
import Footer from "../_common/Footer";
import { useNavigate } from "react-router";

import TimeSelect from "./TimeSelect";
import CheckBox from "./CheckBox";

const EditBooth = ({ event }) => {
  const navigate = useNavigate();
  const complete = () => {
    navigate("/mypage");
  };
  const cancel = () => {
    navigate("/mypage");
  };
  return (
    <>
      <TopBar titleText={`내 ${event} 정보 수정`} />
      <Wrapper>
        {/* 부스이름 */}
        <div className="title">{`${event} 이름`}</div>
        <input className="name" value={`덕고지`} type="text"></input>
        {/* 실시간 부스 공지사항 */}
        <div className="title">{`실시간 ${event} 공지사항`}</div>
        <textarea
          className="news"
          type="text"
          value={`저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘`}
        />

        {/* 부스 소개 */}
        <div className="title">{`${event} 소개`}</div>
        <textarea
          className="about"
          type="text"
          value={`부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글`}
        />

        {/* 부스 운영시간 */}
        <div className="title">{`${event} 운영시간`}</div>
        <div className="checkContainer">
          <input type="checkbox" id="checkDay1" />
          <div id="showCheckDay1"></div>
          <label id="label" for="checkDay1" style={{ margin: "0 5px" }}>
            10일 수요일
          </label>
          {/* <CheckBox /> */}
          <TimeSelect />
        </div>
        <div className="checkContainer">
          <input type="checkbox" id="checkDay1" />
          <div id="showCheckDay1"></div>
          <label id="label" for="checkDay1" style={{ margin: "0 5px" }}>
            11일 목요일
          </label>
          <TimeSelect />
        </div>
        <div className="checkContainer">
          <input type="checkbox" id="checkDay1" />
          <div id="showCheckDay1"></div>
          <label id="label" for="checkDay1" style={{ margin: "0 5px" }}>
            12일 금요일
          </label>
          <TimeSelect />
        </div>

        {/* 부스 운영진 연락처 */}
        <div className="title">{`${event} 운영진 연락처`}</div>
        <textarea
          className="contact"
          type="text"
          value={`카카오톡오픈채팅/떡꼬치/연락하쇼/sgkimfcdjnoesui/kjnzvdcoe/kvfjngipqrdfkjdfsgjhbkuv`}
        />

        {/* 운영 여부 */}
        <div className="title">운영 여부</div>
        <div className="radio-buttons-1">
          <label for="isopened" class="radio-button">
            {event === "부스" ? "운영 중" : "공연 예정"}
            <input
              type="radio"
              id="isopened"
              name="운영 여부"
              checked="checked"
            />
            <span class="custom-radio"></span>
          </label>
          <label
            for="isclosed"
            class="radio-button"
            style={{ marginLeft: "12px" }}
          >
            {event === "부스" ? "운영 종료" : "공연 종료"}
            <input type="radio" id="isclosed" name="운영 여부" />
            <span class="custom-radio"></span>
          </label>
        </div>
        <div className="explain">
          * 운영 종료를 선택하면 부스 목록에서 썸네일과 텍스트가 흑백처리 됩니다
        </div>

        {/* 부스 혼잡도 */}
        {event === "부스" && (
          <>
            <div className="title">부스 혼잡도</div>
            <div className="radio-buttons-1">
              <label for="iscrowded" class="radio-button">
                혼잡
                <input
                  type="radio"
                  id="iscrowded"
                  name="부스 혼잡도"
                  checked="checked"
                />
                <span class="custom-radio"></span>
              </label>
              <label
                for="isfree"
                class="radio-button"
                style={{ marginLeft: "30px" }}
              >
                여유
                <input type="radio" id="isfree" name="부스 혼잡도" />
                <span class="custom-radio"></span>
              </label>
            </div>
            <div className="explain">
              * 부스 혼잡도를 마지막으로 설정한 시간이 함께 표시됩니다
            </div>
          </>
        )}

        {/* 취소 및 완료 버튼 */}
        <FinishBtn>
          <div className="cancelBtn" onClick={cancel}>
            취소
          </div>
          <div className="completeBtn" onClick={complete}>
            완료
          </div>
        </FinishBtn>
      </Wrapper>
      <Footer />
    </>
  );
};
export default EditBooth;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    color: var(--green1);
    font-size: 16px;
    font-weight: 700;
    line-height: 134.895%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  input {
    display: flex;

    align-items: center;
    gap: 12px;
    padding: 20px 16px 20px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }
  input:focus {
    outline: none;
  }
  textarea {
    display: flex;

    align-items: center;
    gap: 12px;
    padding: 20px 16px 20px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.4px solid var(--green1);
    background-color: var(--white);
  }
  textarea:focus {
    outline: none;
  }
  .name {
    height: 45px;
  }
  .news {
    height: 96px;
  }
  .about {
    height: 117px;
  }
  .contact {
    height: 70px;
    color: var(--green2);
    font-size: 13px;
    font-weight: 400;
    text-decoration-line: underline;
  }
  /*부스운영시간*/
  .checkContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    /* #checkDay1:checked + #showCheckDay1 {
      background: url("../../assets/images/edit/checkbox_full.svg") no-repeat 0
        0px / contain;
    }
    #showCheckDay1 {
      display: block;
      width: 24px;
      height: 24px;
      background: url("../../assets/images/edit/checkbox_empty.svg") no-repeat 0
        0px / contain;
    }
    #checkDay1 {
      display: none;
      position: absolute;
    } */
  }
  .explain {
    color: var(--gray2);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px; /* 100% */
    letter-spacing: -0.424px;
    margin-top: 10px;
  }

  /*라디오버튼 커스텀*/
  .radio-buttons-1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .radio-buttons-1 .radio-button {
    cursor: pointer;
    position: relative;
    padding-left: 25px;
  }
  .radio-button input[type="radio"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  .radio-buttons-1 .radio-button .custom-radio {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--gray2);
  }
  .radio-buttons-1 .custom-radio:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1f2225;
  }
  .radio-buttons-1
    .radio-button
    input[type="radio"]:checked
    ~ .custom-radio:after {
    display: block;
  }
`;

const FinishBtn = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 32px 0;
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
