import styled from "styled-components";

import Degree from "../_common/Degree";
import { PatchBoothLike } from "../../api/booth";

//images
import noticeicon from "../../assets/icons/notice.svg";
import fullheart from "../../assets/icons/heart-full.svg";
import emptyheart from "../../assets/icons/heart-empty.svg";

const DetailTitle = ({ event, thisData, render, setRender }) => {
  //공지사항 업데이트 날짜 변환
  let formattedDate,
    formattedTime = "";

  if (thisData && thisData.notices && thisData.notices.length > 0) {
    const updatedAt = thisData.notices[thisData.notices.length - 1].updated_at;
    const date = new Date(updatedAt);

    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    formattedDate = `${month}/${day}`;

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    formattedTime = `${hours}:${minutes}`;
  }

  const handleLike = () => {
    if (localStorage.getItem("token")) {
      PatchBoothLike(thisData.id)
        .then((res) => {
          console.log(res);
          setRender(render + 1);
        })
        .catch();
    } else alert("로그인이 필요합니다.");
  };

  return (
    <Wrapper>
      {/* 혼잡도 */}
      {event === "부스" && (
        <div>
          {thisData.busy ? (
            <Degree size="large" degree="heavy" />
          ) : (
            <Degree size="large" degree="light" />
          )}
        </div>
      )}

      {/* 타이틀 */}
      <Container>
        <Left>
          <div className="title">{thisData.name}</div>
          <div>
            <span className="category">{thisData.category}</span>
            <span className="hashtag">{thisData.hashtag}</span>
          </div>
        </Left>
        {/* 좋아요 */}
        <Right>
          {thisData.is_liked ? (
            <Heart src={fullheart} onClick={handleLike} />
          ) : (
            <Heart src={emptyheart} onClick={handleLike} />
          )}
          <span>{thisData.is_liked_count}</span>
        </Right>
      </Container>

      {/* 실시간 공지사항 */}
      {thisData && thisData.notices && thisData.notices.length > 0 && (
        <Notice>
          <img src={noticeicon} alt="noticeicon" />
          <ul>
            <li className="header">실시간 {event} 공지사항</li>
            <li className="content">
              {thisData.notices[thisData.notices.length - 1].content}
            </li>
            <li className="update">
              <span>update</span>
              <span>{formattedDate}</span>
              <span>{formattedTime}</span>
            </li>
          </ul>
        </Notice>
      )}
    </Wrapper>
  );
};

export default DetailTitle;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  margin-bottom: 8px;
`;

const Left = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .title {
    color: var(--black);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.88px; /* 91.52% */
    letter-spacing: -0.424px;
  }

  .category {
    color: var(--red);
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16.64px; /* 138.667% */

    margin-right: 8px;
  }

  .hashtag {
    color: var(--green2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.64px; /* 138.667% */
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span {
    color: #fa8aa7;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 9.929px; /* 99.292% */
  }
`;

const Heart = styled.img`
  width: 20.769px;
  height: 18px;
`;

const Notice = styled.div`
  display: flex;
  padding: 16px;
  gap: 10px;
  box-sizing: border-box;
  background-color: var(--white);
  border: 1px solid var(--green1);
  border-radius: 0.4rem;

  img {
    width: 13.52px;
    height: 16.64px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      width: 100%;
    }

    .header {
      font-size: 1rem;
      font-weight: 600;
      color: var(--green1);
    }

    .content {
      font-size: 1rem;
      font-weight: 300;
      color: var(--black);
      word-break: break-all;
    }

    .update {
      display: flex;
      gap: 8px;
      color: var(--green2);
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;
