import React from "react";
import styled from "styled-components";

const EditBooth = () => {
  return (
    <>
      <Wrapper>
        <div className="title">부스 이름</div>
        <input className="name" value={`덕고지`} type="text"></input>
        <div className="title">실시간 부스 공지사항</div>
        <textarea
          className="news"
          type="text"
          value={`저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치 재료소진 됐습니다~저희 부스 오늘`}
        />
        <div className="title">부스 소개</div>
        <textarea
          className="about"
          type="text"
          value={`부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글부스소개글`}
        />
        <div className="title">부스 운영시간</div>
        <textarea
          className="time"
          type="text"
          value={`10일 수요일 - AM 10:00 ~ PM 5:00 11일
                    목요일 - AM 10:00 ~ PM 5:00`}
        />
        <div className="title">부스 운영진 연락처</div>
        <input
          className="contact"
          type="text"
          value={`카카오톡오픈채팅/떡꼬치/연락하쇼/sgkimfcdjnoesui/kjnzvdcoe/kvfjngipqrdfkjdfsgjhbkuv`}
        />
        <div className="title">운영 여부</div>
        <div className="radio-group">
          <label>
            <input type="radio" name="isopened" value="운영 중" />
            운영 중
          </label>
          <label>
            <input type="radio" name="isopened" value="운영 종료" />
            운영 종료
          </label>
        </div>
        <div className="explain">
          * 운영 종료를 선택하면 부스 목록에서 썸네일과 텍스트가 흑백처리 됩니다
        </div>

        <div className="radio-group">
          <label>
            <input type="radio" name="iscrowded" value="혼잡" />
            혼잡
          </label>
          <label>
            <input type="radio" name="iscrowded" value="여유" />
            여유
          </label>
        </div>
        <div className="explain">
          * 부스 혼잡도를 마지막으로 설정한 시간이 함께 표시됩니다
        </div>
      </Wrapper>
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
    padding: 20px 40px 20px 16px;
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
    padding: 20px 40px 20px 16px;
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
  .time {
    height: 70px;
  }
  .contact {
    height: 70px;
  }

  .explain {
    color: var(--gray2);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px; /* 100% */
    letter-spacing: -0.424px;
  }

  .radio-group {
    display: flex;
  }
  .radio-group label {
    display: flex;
    margin-right: 20px;
  }
  input[type="radio"] {
    display: none;
  }
`;
