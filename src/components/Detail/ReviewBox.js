import styled from "styled-components";

//images
import deleteIcon from "../../assets/images/detail/review-delete.svg";

import { useAppSelector } from "../../redux/store";

const ReviewBox = ({ comment, editerId, handleDelete }) => {
  //부스 관리자 여부 관리
  const isEditerId = (userId) => {
    if (editerId === userId) {
      return true;
    } else {
      return false;
    }
  };

  //방명록 id와 사용자 id 비교
  const userId = useAppSelector((state) => state.user.id);
  const isUserId = (commentId) => {
    if (userId === commentId) {
      return true;
    } else {
      return false;
    }
  };

  //방명록 작성 시간 형태 변환
  const date = new Date(comment.created_at);

  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${month}/${day}`;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <Box>
      <div>
        <div>
          {/* 작성자가 부스관리자인지에 따른 글씨색 변화 */}
          <Nickname
            style={{
              color: isEditerId(comment.user.id)
                ? "var(--red)"
                : "var(--green2)",
            }}
          >
            {comment.user.nickname}
          </Nickname>
          <Time>{formattedDate}</Time>
          <Time>{formattedTime}</Time>
        </div>
        {/* 작성자가 본인일 경우 삭제 버튼 활성화 */}
        {isUserId(comment.user.id) && (
          <img
            src={deleteIcon}
            alt="review delete icon"
            onClick={() => handleDelete(comment.id)}
          />
        )}
      </div>
      <Content>{comment.content}</Content>
    </Box>
  );
};

export default ReviewBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15.68px 13.4px 16.16px 19px;
  box-sizing: border-box;
  border-radius: 4px;
  background: var(--white);
  gap: 8.48px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: end;
    }

    img {
      margin-right: 6.36px;
      cursor: pointer;
    }
  }
`;

const Nickname = styled.div`
  margin-right: 5px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Time = styled.div`
  margin-right: 2.96px;
  color: var(--gray2);
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Content = styled.div`
  color: var(--black);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
