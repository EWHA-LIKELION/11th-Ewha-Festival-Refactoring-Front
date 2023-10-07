import React, { useState, useRef } from "react";
import styled from "styled-components";

//components
import { SecTitle, Line } from "./SectionExport";
import ReviewBox from "./ReviewBox";
import { DeleteComment, PostComment } from "../../api/booth";

//images
import summitIcon from "../../assets/images/detail/review-summit.svg";

const DetailReview = ({
  commentsData,
  editerId,
  boothId,
  render,
  setRender,
}) => {
  //입력창 높이 조절
  const textareaRef = useRef(null);
  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "18px";
      const scrollHeight = textarea.scrollHeight;
      if (scrollHeight > textarea.clientHeight) {
        textarea.style.height = "36px";
      }
    }
  };

  //방명록 작성
  const [comment, setComment] = useState("");
  const handleSubmit = () => {
    if (comment.trim() === "") return null;
    PostComment(boothId, comment)
      .then((res) => {
        console.log(res);
        setRender(render + 1);
      })
      .catch();
    setComment("");
  };

  //방명록 삭제
  const handleDelete = (commentId) => {
    DeleteComment(boothId, commentId)
      .then((res) => {
        console.log(res);
        setRender(render + 1);
      })
      .catch();
  };

  return (
    <Section>
      <SecTitle sectitle={`방명록`} />
      <Line />
      <ReviewList>
        {commentsData?.map((comment) => (
          <ReviewBox
            key={comment.id}
            comment={comment}
            editerId={editerId}
            handleDelete={handleDelete}
          />
        ))}
      </ReviewList>
      <Line2 />
      <ReviewInput>
        <textarea
          ref={textareaRef}
          onChange={(e) => {
            setComment(e.target.value);
            handleTextareaChange();
          }}
          value={comment}
          placeholder="댓글을 입력하세요"
        />
        <img src={summitIcon} alt="review summit icon" onClick={handleSubmit} />
      </ReviewInput>
    </Section>
  );
};

export default DetailReview;

const Section = styled.div`
  width: 100%;
`;

const ReviewList = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Line2 = styled.div`
  margin-left: -20px;
  background: #dadada;
  width: 390px;
  height: 0.4px;
`;

const ReviewInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
  width: 350px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

  textarea {
    width: 277px;
    background: none;
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;
    height: 18px;

    color: var(--black);
    font-size: 15px;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: var(--green2);
      font-size: 14px;
      font-weight: 300;
      line-height: normal;
    }
  }
`;
