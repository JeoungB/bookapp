import axios from "axios";

const kakaoBookApi = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

const kakaoBookSearch = (params) => {
  return kakaoBookApi.get("/v3/search/book", { params });
};

// Main페이지에 보일 추천 책 가져오기.
export const getRecommendBooks = async () => {
  console.log('추천 책 가져오기 실행!');
  try {
    const params = {
        query: "자바스크립트",
        size: 5,
        target: "title",
      };
    const result = await kakaoBookSearch(params);
    const recommendBooks = result.data.documents.filter((datas) => {
      return datas.thumbnail !== "";
    });
    return recommendBooks;
  } catch (error) {
    console.log(`${error} : 책 정보가져오기 실패`);
  }
};
