import ".../css/MainPage.css";
import mainImg from "../imgs/main.jpg";

function MainPage() {
  return (
    <main className="MainPage">
      <section className="section_01">
        <div className="h2_container">
          <h2>
            <span>함께</span> 읽고 나누는 <span>독후 활동</span>
          </h2>
          <p>
            독서 커뮤니티 <span>책꽃이</span>에서 다양한 책에 관해 이야기하며
            독후 활동을 해보세요
          </p>
        </div>
        <img src={mainImg} alt="배경 이미지" />
      </section>

      <section className="section_02"></section>
    </main>
  );
}

export default MainPage;
