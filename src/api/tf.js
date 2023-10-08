import { http } from "./http";

//공지사항 조회
export const GetNotice = async () => {
  try {
    const response = await http.get("notices/");
    return response;
  } catch (error) {
    console.error("tf 공지사항 조회 실패 ", error);
    throw error;
  }
};

//공지사항 작성
export const WriteNotice = async (title, content) => {
  try {
    const response = await http.post(`notices/`, {
      title: title,
      content: content,
    });
    return response;
  } catch (error) {
    console.error("tf 공지사항 작성 실패", error);
    throw error;
  }
};

//공지사항 삭제
export const DeleteNotice = async () => {
  try {
  } catch (error) {
    console.error("tf 공지사항 삭제 실패", error);
    throw error;
  }
};

//공지사항 수정
export const EditNotice = async () => {
  try {
  } catch (error) {
    console.error("tf 공지사항 수정 실패", error);
    throw error;
  }
};
