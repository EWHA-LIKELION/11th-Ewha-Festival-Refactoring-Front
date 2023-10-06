import { http } from "./http";

//Get : 부스/공연 상세페이지
export const GetDetail = async (id) => {
  try {
    const response = await http.get(`detail/${id}/`);
    return response.data;
  } catch (error) {
    console.error("부스/공연 상세 조회 실패 ", error);
    throw error;
  }
};
