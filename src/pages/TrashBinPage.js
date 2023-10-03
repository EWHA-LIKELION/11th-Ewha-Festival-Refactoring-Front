import { useState } from "react";
import { styled } from "styled-components";

//components
import TopBar from "../components/_common/TopBar";
import Map from "../components/TrashBinPage/Map";
import MapBox from "../components/TrashBinPage/MapBox";
import Footer from "../components/_common/Footer";

//images (나중에 옮기기)
import auditorium from "../assets/images/trashbin/auditorium-t.svg";
import education from "../assets/images/trashbin/education-t.svg";
import humanecology from "../assets/images/trashbin/humanecology-t.svg";
import maingate from "../assets/images/trashbin/maingate-t.svg";
import posco from "../assets/images/trashbin/posco-t.svg";
import studentunion from "../assets/images/trashbin/studentunion-t.svg";

const TrashBinPage = () => {
  //임시 데이터 (나중에 옮기기)
  const trashData = [
    {
      id: 1,
      header: "정문 쓰레기통 위치",
      mapimg: maingate,
      description: ["잔디광장 24번 부스 옆"],
    },
    {
      id: 2,
      header: "학생문화관 쓰레기통 위치",
      mapimg: studentunion,
      description: [
        "학생문화관 1층 출입구 우측",
        "학생문화관 숲 중간 통로 옆",
        "학생문화관 - ECC 연결 보도 안쪽",
      ],
    },
    {
      id: 3,
      header: "생활환경관 쓰레기통 위치",
      mapimg: humanecology,
      description: ["생활환경관 부스 끝 모서리"],
    },
    {
      id: 4,
      header: "포스코관 쓰레기통 위치",
      mapimg: posco,
      description: ["포스코관 - 진선미관 사이"],
    },
    {
      id: 5,
      header: "대강당 쓰레기통 위치",
      mapimg: auditorium,
      description: ["대강당 19번 부스 옆"],
    },
    {
      id: 6,
      header: "교육관 쓰레기통 위치",
      mapimg: education,
      description: ["교육관 2번 부스 옆"],
    },
  ];

  const [trashs, setTrashs] = useState(trashData);

  return (
    <Wrapper>
      <TopBar titleText="쓰레기통 위치" />
      <Content>
        <Map />
        <MapBoxContainer>
          {trashs.map((item) => (
            <MapBox key={item.id} {...item} />
          ))}
        </MapBoxContainer>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default TrashBinPage;

const Wrapper = styled.div`
  width: 390px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--beige);
`;

const Content = styled.div`
  padding: 32px 23px 36.9px 23px;
  display: flex;
  flex-direction: column;
`;

const MapBoxContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
