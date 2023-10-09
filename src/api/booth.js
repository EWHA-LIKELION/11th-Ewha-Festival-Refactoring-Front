import { http } from "./http";
import { Logout } from "./user";

//Get : 부스/공연 상세페이지
export const GetDetail = async (boothId) => {
  try {
    const response = await http.get(`detail/${boothId}/`);
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("부스/공연 상세 조회 실패", error);
    throw error;
  }
};

//Post : 방명록 작성
export const PostComment = async (boothId, comment) => {
  try {
    const response = await http.post(`comments/${boothId}/`, {
      content: comment,
    });
    return response;
  } catch (error) {
    console.error("방명록 작성 실패", error);
    throw error;
  }
};

//Delete : 방명록 삭제
export const DeleteComment = async (boothId, commentId) => {
  try {
    const response = await http.delete(`comments/${boothId}/del/${commentId}/`);
    return response;
  } catch (error) {
    console.error("방명록 삭제 실패", error);
  }
};

//Patch : 부스/공연 좋아요 여부 변경
export const PatchBoothLike = async (boothId) => {
  try {
    const response = await http.patch(`detail/${boothId}/likes/`);
    return response;
  } catch (error) {
    console.error("부스/공연 좋아요 여부 변경 실패", error);
    throw error;
  }
};

//Patch : 부스 메뉴 좋아요 여부 변경
export const PatchMenuLike = async (menuId) => {
  try {
    const response = await http.patch(`detail/menu/${menuId}/likes/`);
    return response;
  } catch (error) {
    console.error("메뉴 좋아요 여부 변경 실패", error);
    throw error;
  }
};

// Get: 좋아요한 부스 목록 조회
export const GetLikedBooths = async (day, college, category) => {
  try {
    const response = await http.get(
      `/mypage/booth/likes/?day=${day}&college=${college}&category=${category}`
    );
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("좋아요한 부스 목록 조회 실패", error);
    throw error;
  }
};

// Get: 좋아요한 메뉴 목록 조회
export const GetLikedMenus = async (day, college, category) => {
  try {
    const response = await http.get(
      `/mypage/menu/likes/?day=${day}&college=${college}&category=${category}`
    );
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("좋아요한 메뉴 목록 조회 실패", error);
    throw error;
  }
};

// Get: 좋아요한 공연 목록 조회
export const GetLikedShows = async (day, college, category) => {
  try {
    const response = await http.get(
      `/mypage/show/likes/?day=${day}&college=${college}&category=${category}`
    );
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("좋아요한 공연 목록 조회 실패", error);
    throw error;
  }
};

//Get: 부스 목록 조회(필터링)
export const GetBoothList = async (day, college, category) => {
  try {
    let queryString = `event/?type=1&day=${day}`;
    if (college) {
      queryString += `&college=${college}`;
    } else if (category) {
      queryString += `&category=${category}`;
    }
    console.log(queryString);
    const response = await http.get(queryString);
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("부스 목록 조회 실패", error);
    throw error;
  }
};

//Get: 공연 목록 조회(필터링)
export const GetPerfList = async (day, college, category) => {
  try {
    let queryString = `event/?type=2&day=${day}`;
    if (college) {
      queryString += `&college=${college}`;
    } else if (category) {
      queryString += `&category=${category}`;
    }
    console.log(queryString);
    const response = await http.get(queryString);
    return response.data;
  } catch (error) {
    if (
      error.response.data.detail ===
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    console.error("공연 목록 조회 실패", error);
    throw error;
  }
};
