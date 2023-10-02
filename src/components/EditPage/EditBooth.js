import React from "react";
import styled from "styled-components";
import TopBar from "../_common/TopBar";
import Footer from "../_common/Footer";

const EditBooth = () => {
  return (
    <>
      <TopBar titleText={`내 부스 정보 수정`} />
      <Wrapper>
        {/* 부스이름 */}
        <div className="title">부스 이름</div>
        <input className="name" value={`덕고지`} type="text"></input>

        {/* 실시간 부스 공지사항 */}
        <div className="title">실시간 부스 공지사항</div>
        <textarea
          className="news"
          type="text"
          value={`저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘`}
        />

        {/* 부스 소개 */}
        <div className="title">부스 소개</div>
        <textarea
          className="about"
          type="text"
          value={`부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글`}
        />

        {/* 부스 운영시간 */}
        <div className="title">부스 운영시간</div>
        <div className="checkContainer">
          <input type="checkbox" id="checkDay1" />
          <label for="checkDay1" style={{ margin: "0 10px" }}>
            10일 수요일
          </label>
          <input type="time" id="startTime" />
          <div className="fromto">부터</div>
          <input type="time" id="endTime" />
          <div className="fromto">까지</div>
        </div>

        {/* 부스 운영진 연락처 */}
        <div className="title">부스 운영진 연락처</div>
        <input
          className="contact"
          type="text"
          value={`카카오톡오픈채팅/떡꼬치/연락하쇼/sgkimfcdjnoesui/kjnzvdcoe/kvfjngipqrdfkjdfsgjhbkuv`}
        />

        {/* 운영 여부 */}
        <div className="title">운영 여부</div>
        <div className="radio-buttons-1">
          <label for="isopened" class="radio-button">
            운영 중
            <input type="radio" id="isopened" name="운영 여부" />
            <span class="custom-radio"></span>
          </label>
          <label
            for="isclosed"
            class="radio-button"
            style={{ marginLeft: "12px" }}
          >
            운영 종료
            <input type="radio" id="isclosed" name="운영 여부" />
            <span class="custom-radio"></span>
          </label>
        </div>
        <div className="explain">
          * 운영 종료를 선택하면 부스 목록에서 썸네일과 텍스트가 흑백처리 됩니다
        </div>

        {/* 부스 혼잡도 */}
        <div className="title">부스 혼잡도</div>
        <div className="radio-buttons-1">
          <label for="iscrowded" class="radio-button">
            혼잡
            <input type="radio" id="iscrowded" name="부스 혼잡도" />
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

        {/* 취소 및 완료 버튼 */}
        <FinishBtn>
          <div className="cancelBtn">취소</div>
          <div className="completeBtn">완료</div>
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
  }
  /*부스운영시간*/
  .checkContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    input[type="time"] {
      width: 78.5px;
      height: 45px;
      box-sizing: border-box;
      padding: 16px;
      border-radius: 4px;
      border: 0.4px solid var(--green1);
      background-color: var(--white);
    }
    .fromto {
      color: var(--gray1);
      font-size: 15px;
      font-weight: 300;
      line-height: 160%;
      margin: 0 8px;
    }
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
