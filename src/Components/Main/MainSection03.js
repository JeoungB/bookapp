import { getRecommendBooks } from "../../api/KakaoBookAxios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function Section03() {
  // kakaoAPI 추천 책 기져오기.
  // useState . react-query 캐싱 및 패칭 차이.
  const { data } = useQuery({
    queryKey: ["recommendBooks"],
    queryFn: getRecommendBooks,
    placeholderData : (previousData) => previousData
  });
  console.log("추천 책", data);

  return (
    // 나중에 section_01, 02 이런 이름 수정해보자.
    <section className="section_recommend-book">
      <div className="deco"></div>
      <article className="h4_container">
        <h4>
          금주의 <span>추천도서</span>를 확인해 보세요
        </h4>
        <h3>추천 책장</h3>
      </article>
      {data ? (
        <article className="recommend-book">
          <div className="book-detail">
            <h3>책의 이름</h3>
            <p>책에대한 내용</p>
          </div>
          <div className="book-img">
            <img src={data[0].thumbnail} alt="금주의 추천 책" />
          </div>
        </article>
      ) : (
        <article className="recommend-book">
          
        </article>
      )}

      <ul className="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}

export default Section03;
