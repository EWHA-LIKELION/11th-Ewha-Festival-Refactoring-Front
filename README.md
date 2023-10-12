# 11th-Ewha-Festival-Refactoring-Front

### 프로젝트 소개🖐️

![image](https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/15d55ec5-3f53-41c5-a508-3ccb391fc274)



이화여대 멋쟁이 사자처럼 11기 운영진이 제작한 '2023 이화여대 대동제 웹사이트'를 <br />
 11기 아기사자🦁가 리팩토링했습니다.

[💚 사이트 바로가기 - 배포용](https://11th-ewha-festival-refactoring-front.vercel.app/)


### 추가 및 수정사항🔧

 <details>
<summary>공연 부스 관련 기능 확대 (부스 목록 기능과 동일)</summary>

1. 공연 일정표 확인시 (외부 링크 >> 내부페이지)
2. 메인화면/글로벌 네비게이션에서 공연 목록 추가
3. 공연 상세페이지에서, 기존의 ‘메뉴’자리에 ‘피드’ 기능으로 대체
4. 피드의 사진을 한번 클릭하면 확대된 이미지와 좋아요 기능이 있는 모달창 추가

</details>

 <details>
<summary>기존 부스 목록 기능에서의 변경</summary>

1. 부스 목록과 상세 페이지에서 ‘혼잡도’를 알 수 있는 기능 추가
   - 부스 관리자 마이페이지에서 부스 혼잡도를 설정 (→ 이에 따른 부스관리자의 마이페이지 ui 수정)
2. 비건/휠체어 접근 가능 여부에 대한 표시 기능 추가
    - 공연 목록도 마찬가지로 적용
3. 기존의 ‘댓글’기능을 ‘부스 운영진 연락처’와 ‘방명록’으로 분리.
    - 부스 상세페이지 >> 부스정보 >> 부스 운영진 연락처
    - 부스 상세페이지 >> 방명록
4. 부스에 대한 좋아요 >> 좋아요+좋아요개수 카운팅
5. 부스에 대한 좋아요뿐 아니라, ‘메뉴’에 대한 좋아요 기능 추가
    - 좋아요한 메뉴는 마이페이지에서 확인 가능.

</details>

 <details>
<summary>기타</summary>

1. 피드 스와이프 기능 추가
2. 쓰레기통 GPS 기능
3. 페이지네이션 숫자를 (1)>>(12345)로 늘릴 것.

</details>


 ### 프론트엔드 개발자 소개
 |김가영|변지혜|유서연|
 |:------:|:------:|:------:|
|<img src="https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/b703bfba-295a-4e1d-b987-41c07512d12b" width="100" height="100"/>|<img src="https://github.com/mod-siw/11th-CloneCoding-Front/assets/127821462/6dc314ca-65ca-48ac-aebe-894e44ffe48c" width="100" height="100"/>|<img src= "https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/1e9ca2bf-46a9-4420-9ffa-e2a4db24399c" width="100" height="100"/>|
|부스 목록 페이지 <br /> 공연 목록 페이지 <br /> 공지사항 페이지|로그인 & 회원가입 <br /> 유저 인증 <br /> 만든이들 페이지|부스 상세 페이지 <br /> 공연 상세 페이지 <br /> 쓰레기통 페이지|

|이다빈|진규빈|최지원|
|:------:|:------:|:------:|
|<img src="https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/62cdedf6-824e-4e93-a969-f5a24728e964" width="100" height="100"/>|<img src="https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/def8f364-ad1a-4071-bb12-a80d7eae74eb" width="100" height="100"/>|<img src="https://github.com/EWHA-LIKELION/11th-Ewha-Festival-Refactoring-Front/assets/127821462/ec624309-b366-4bca-8299-ca6509a71e67" width="100" height="100"/>|
| 관리자 부스/공연 마이페이지 <br /> 일반유저 부스/공연 마이페이지|메인페이지 <br /> 사이드바 |내 부스 정보 수정 <br /> 메뉴 정보 수정 목록 <br /> 메뉴 정보 수정 상세 |


 ### 개발 기간 
 2023.09.22. ~ 2023.10.12. <br />
 API 연결 시작 : 2023.10.05.

### 라이브러리
```
"@react-google-maps/api": "^2.19.2",
    "@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.5.1",
    "dotenv": "^16.3.1",
    "jquery": "^3.7.1",
    "jquery-timepicker": "^1.3.3",
    "react": "^18.2.0",
    "react-datepicker": "^4.18.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.16.0",
    "react-scripts": "5.0.1",
    "react-table": "^7.8.0",
    "react-time-picker": "^6.5.1",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.2",
    "styled-components": "^6.0.8",
    "web-vitals": "^2.1.4"
```


 ### 사용 스택
  ##### Environment
  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
 ##### Development 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/ReduxPersist-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white">


