import React, { useState } from "react";
import styled from "styled-components";

//components
import DetailCover from "../components/Detail/DetailCover";
import DetailTitle from "../components/Detail/DetailTitle";
import DetailInfo from "../components/Detail/DetailInfo";
import DetailReview from "../components/Detail/DetailReview";
import Footer from "../components/_common/Footer";

const PerfDetailPage = () => {
  //임시 데이터 (나중에 삭제)
  const mockData = [
    {
      "id": 1,
      "user": 1,
      "day": ["수요일", "목요일", "금요일"],
      "date": ["10", "11", "12"],
      "times": [
        {
          "id": 1,
          "created_at": "2023-05-02 08:00",
          "updated_at": "2023-05-02 08:00",
          "starttime": "null",
          "finishtime": "null",
        },
        {
          "id": 2,
          "created_at": "2023-05-02 08:02",
          "starttime": "10:00",
          "finishtime": "10:30",
        },
        {
          "id": 3,
          "created_at": "2023-05-02 08:02",
          "updated_at": "2023-05-02 08:02",
          "starttime": "10:00",
          "finishtime": "10:30",
        },
      ],
      "college": "포스코관",
      "category": "굿즈",
      "name": "멋쟁이 사자처럼",
      "number": "포08",
      "thumbnail": "",
      "opened": false,
      "busy": false,
      "began": false,
      "wheelchair": false,
      "is_show": false,
      "contact": "~~kakao link",
      "notices": [
        {
          "id": 1,
          "created_at": "2023-05-02 02:35",
          "updated_at": "2023-05-02 02:35",
          "content": "공지사항",
        },
      ],
      "hashtag": "#떡고치",
      "description": "멋쟁이 사자처럼 부스 소개 어쩌구 저쩌구 안녕하세요 뿡뿡",
      "images": [
        {
          "id": 1,
          "image": "",
        },
      ],
      "menus": [
        {
          "id": 1,
          "menu": "떡꼬치",
          "price": 2000,
          "is_soldout": true,
          "is_liked": true,
        },
        {
          "id": 2,
          "menu": "떡볶이",
          "price": 3000,
          "is_soldout": false,
          "is_liked": false,
        },
      ],
      "is_liked": true,
      "is_liked_count": 1,
      "created_at": "2022-08-12 16:21",
      "updated_at": "2022-08-12 22:34",
      "comments": [
        {
          "id": 6,
          "booth": 1,
          "user": {
            "id": 2,
            "nickname": "test",
          },
          "content": "뿡뿡",
          "created_at": "2022-08-28 19:16",
          "updated_at": "2022-08-28 19:28",
        },
        {
          "id": 9,
          "booth": 1,
          "user": {
            "id": 1,
            "nickname": "나는 관리자",
          },
          "content": "뿡뿡",
          "created_at": "2022-08-28 19:29",
          "updated_at": "2022-08-28 19:29",
        },
      ],
    },
  ];

  const [thisData, setThisData] = useState(mockData[0]); //배열 인덱스 임시로 설정

  //스크롤 맨 위로 설정
  window.scrollTo(0, 0);

  return (
    <Wrapper>
      <DetailCover thisData={thisData} />
      <Content>
        <DetailTitle event="공연" thisData={thisData} />
        <DetailInfo event="공연" thisData={thisData} />
        <DetailReview
          commentsData={thisData.comments}
          editerId={thisData.user}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default PerfDetailPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--beige);
`;

const Content = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
