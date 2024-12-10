function Scroll() {
  window.addEventListener("scroll", function () {
    // 스크롤 시 헤더 css 변경.
    const header = document.querySelector(".Header");
    let scrollHeight = window.scrollY;

    if (scrollHeight < 70) {
      header.style.setProperty("--headerBackColor", "transparent");
      header.style.setProperty("--fontColor", "white");
    }

    if (scrollHeight >= 70) {
      header.style.setProperty("--headerBackColor", "rgb(250, 243, 235)");
      header.style.setProperty("--fontColor", "rgb(247, 120, 47)");
    }
  });
}

export default Scroll;
