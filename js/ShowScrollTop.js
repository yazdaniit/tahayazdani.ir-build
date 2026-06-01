let customScroll = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight; // کل ارتفاع صفحه سایت
  let windowHeight = window.innerHeight; // اندازه صفحه که شامل اینسپکت نمی شود
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollRounded = Math.round(scrollPercent * 100);

  customScroll.style.width = scrollRounded + "%";
});
