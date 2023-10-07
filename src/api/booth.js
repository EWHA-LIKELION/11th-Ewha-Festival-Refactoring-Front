import { http } from "./http";

//Get : 부스/공연 상세페이지
export const GetDetail = async (boothId) => {
  try {
    const response = await http.get(`detail/${boothId}/`);
    return response.data;
  } catch (error) {
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
