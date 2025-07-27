// 图片与文字数据
const slides = [
  { img: "", text: "这是第一张图片的说明文字。" },
  { img: "", text: "这里是第二张图片，展示了美丽的风景。" },
  { img: "", text: "最后一张图片，夜晚的城市灯火。" },
];

let current = 0;
const imgEl = document.getElementById("slider-image");
const textEl = document.getElementById("slider-text");

function typeWriter(str, i = 0) {
  if (i <= str.length) {
    textEl.textContent = str.slice(0, i);
    setTimeout(() => typeWriter(str, i + 1), 100); // 每 100ms 打一个字
  }
}

// 切换到下一张
function nextSlide() {
  current = (current + 1) % slides.length;
  // 切换图片
  imgEl.src = slides[current].img;
  // 清空文字并触发打字机效果
  textEl.textContent = "";
  typeWriter(slides[current].text);
}

// 页面加载完成后，显示第一张文字
window.addEventListener("DOMContentLoaded", () => {
  typeWriter(slides[0].text);
  // 每 5 秒切换一次
  setInterval(nextSlide, 5000);
});
