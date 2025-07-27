"use strict";
const slider = document.querySelector(".slider");

const slides1 = document.querySelectorAll(".slide__1");
const slides2 = document.querySelectorAll(".slide__2");
const slides3 = document.querySelectorAll(".slide__3");

const btnLeft1 = document.querySelector(".slider__btn--left1");
const btnRight1 = document.querySelector(".slider__btn--right1");
const btnLeft2 = document.querySelector(".slider__btn--left2");
const btnRight2 = document.querySelector(".slider__btn--right2");
const btnLeft3 = document.querySelector(".slider__btn--left3");
const btnRight3 = document.querySelector(".slider__btn--right3");
// const dos = document.querySelector(".dots");
const dos1 = document.querySelector(".dots_1");
const dos2 = document.querySelector(".dots_2");
const dos3 = document.querySelector(".dots_3");
//登录document
const inputForm = document.querySelector(".input_form");
const loginInput = document.querySelector(".login_input");
const loginUser = document.querySelector(".login_user");
const loginPsswd = document.querySelector(".login_passwd");
const loginButton = document.querySelector(".login_button");

const section__1 = document.querySelector(".section__1");
const nav__links = document.querySelector(".nav__links");

const loginStr = document.querySelector(".login_str");
const introduceStrValueJazz1 = document.querySelector(
  ".introduce__str__value__jazz__1"
);
const introduceStrHeadeJazz1 = document.querySelector(
  ".introduce__str__heade__jazz__1"
);

//登入资料和状态
let userData1 = {
  owner: "ケイ カンハク",
  pass: 1111,
};

let userData2 = {
  owner: "増川 もえビアンカ",
  pass: 1919,
};

const accounts = [userData1, userData2];
///////////////////////////////为了测试设定为true
let loginState = true;

const tupianlunboFun = function (slide, dos, dosNuber, btnLeft, btnRight) {
  let curSlide = 0;
  const maxSlide = slide.length;
  let dots;

  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // 创造滑动图片下方的导航点

  //对照片进行初期位置设定

  slide.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * i}%)`;
  });

  //右面的按钮

  btnRight.addEventListener("click", function (e) {
    e.preventDefault();
    rightButFun();
    aotoImg();
    dotsActive(curSlide);
  });

  //左边的按钮

  btnLeft.addEventListener("click", function (e) {
    e.preventDefault();
    leftBtnFun();
    aotoImg();
    dotsActive(curSlide);
  });

  //左边按钮的函数

  function leftBtnFun() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    slide.forEach(function (el, i) {
      el.style.transform = `translateX(${(i - curSlide) * 100}%)`;
    });
  }

  //右边按钮的函数

  function rightButFun() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slide.forEach(function (el, i) {
      el.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  }

  /////////////////////////////轮播图片的处理代码 课堂练习2

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      leftBtnFun();
      dotsActive(curSlide);
    }
    if (e.key === "ArrowRight") {
      rightButFun();
      dotsActive(curSlide);
    }
  });
  //添加下方的豆豆
  function createDots() {
    slide.forEach(function (_, i) {
      ///////////////////////////////问题
      const moBanStr = `<button class="dots__dot dots__dot_${dosNuber} " data-slide="${i}"></button>`;
      dos.insertAdjacentHTML("beforeend", moBanStr);
    });
    dots = document.querySelectorAll(`.dots__dot_${dosNuber}`);
  }
  createDots(curSlide);

  //更新下方豆豆的活动状态

  function dotsActive(number) {
    dots.forEach(function (el, i) {
      if (i === number) {
        el.classList.add("dots__dot--active");
        el.style.backgroundColor = "#333";
      } else {
        el.classList.remove("dots__dot--active");
        el.style.backgroundColor = "#b9b9b9";
      }
    });
  }
  dotsActive(curSlide);

  //使用豆豆切换图片函数
  function dostEventFun() {
    dots.forEach(function (el, i) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        curSlide = i;
        dotsActive(curSlide);
        slide.forEach(function (elm, index) {
          elm.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        });
        aotoImg();
      });
    });
  }
  dostEventFun();

  //图片自动轮播
  let IntervalImg;
  function aotoImg() {
    clearInterval(IntervalImg);
    IntervalImg = setInterval(function () {
      rightButFun();
      dotsActive(curSlide);
    }, 5000);
  }

  aotoImg();
};

//轮播函数启用
tupianlunboFun(slides1, dos1, 1, btnLeft1, btnRight1);
tupianlunboFun(slides2, dos2, 2, btnLeft2, btnRight2);
tupianlunboFun(slides3, dos3, 3, btnLeft3, btnRight3);

//当当前窗口到图片位置时 去除模糊 主要是美观和模拟优化加载

const allImg = document.querySelectorAll("img[src]");

const londImgFun = function (entries, observer) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.remove("lazy-img");
    observer.unobserve(entries[0].target);
  }
};

const imgObserver = new IntersectionObserver(londImgFun, {
  root: null,
  threshold: 0.5,
  // rootMargin:
});

allImg.forEach(function (el) {
  imgObserver.observe(el);
});

// //网页的平滑滚动函数
const navItems = document.querySelectorAll(".nav__item");

navItems.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(`.section__${i + 1}`);
    if (targetSection) {
      // 计算目标位置
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // 动画持续时间，毫秒
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        console.log(run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // 缓动函数（easeInOutCubic）
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});
//////////////////////////关掉 因为缓动算法更好
// const navItem = document.querySelectorAll(".nav__item");
// const section = document.querySelectorAll(".section");

// navItem.forEach(function (el, i) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     section.forEach(function (elm) {
//       let sectionStr = `section__${i + 1}`;
//       if (elm.classList.contains(sectionStr)) {
//         const rectSection = elm.getBoundingClientRect();
//         const rectSectionHeight = rectSection.height;
//         let topPeghi = window.pageYOffset;
//         const CunrentTop = window.pageYOffset;
//         const rectSectionTop = rectSection.top;

//         console.log(rectSection);

//         const timeInterval = setInterval(function () {
//           window.scrollTo({
//             top:
//               CunrentTop > rectSectionTop ? (topPeghi -= 40) : (topPeghi += 40),
//             behavior: "smooth",
//           });
//           if (CunrentTop > rectSectionTop) {
//             if (topPeghi <= CunrentTop + rectSection.top) {
//               clearInterval(timeInterval);
//             }
//           } else {
//             if (topPeghi >= CunrentTop + rectSection.top + rectSectionHeight) {
//               clearInterval(timeInterval);
//             }
//           }
//         }, 10);
//       }
//     });
//   });
// });

/////////////////// 导航栏动画
const nav = document.querySelector(".nav");

nav.addEventListener("mouseover", navDry);

nav.addEventListener("mouseout", navDry);

function navDry(e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach(function (el) {
      if (el !== link) {
        if (el.classList.contains("selfColor")) {
          el.classList.remove("selfColor");
        } else {
          el.classList.add("selfColor");
        }
      }
    });
    // logo.classList.contains("selfColor")
    //   ? logo.classList.remove("selfColor")
    //   : logo.classList.add("selfColor");
  }
}

//导航栏跟踪

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//退出网页的提醒

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "";
// });

//尝试下方导航栏动画

const footerLink = document.querySelectorAll(".footer_link");
const footerNav = document.querySelector(".footer_nav");

const footerFun = function (e) {
  const link = e.target;
  const siblings = link.closest(".footer_nav").querySelectorAll(".footer_link");
  siblings.forEach(function (el) {
    if (el === link) {
      if (!el.classList.contains("animate-text"))
        el.classList.add("animate-text");
      console.log(1);
    } else {
      el.classList.remove("animate-text");
      console.log(0);
    }
  });
};
footerNav.addEventListener("mouseover", footerFun);
footerNav.addEventListener("mouseout", footerFun);

//重要文字 的背景高亮动画

const ImportantStr = document.querySelectorAll(".Important_str");

const observerImportantFun = function (entries, observer) {
  entries.forEach((entry) => {
    // 修正条件判断，使用 entry.isIntersecting
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-strhighlight");
      observer.unobserve(entry.target);
    }
  });
};

const observerImportantStr = new IntersectionObserver(observerImportantFun, {
  root: null,
  threshold: 0,
  rootMargin: "-250px", // 调整 rootMargin
});

ImportantStr.forEach(function (el) {
  observerImportantStr.observe(el);
});

//如果html加载完毕就高亮标题

const ZongJieShaoPNG = document.querySelector(".ZongJieShaoPNG");
const highlightS = document.querySelectorAll(".highlight");
window.addEventListener("load", function () {
  setTimeout(function () {
    highlightS.forEach(function (e) {
      e.classList.add("animate-strhighlight");
    });
    ZongJieShaoPNG.classList.remove("lazy-img");
  }, 500);
});

// 章节平滑出现

const sectionHiddenAll = document.querySelectorAll(".section--hidden");

const sectionHiddenFun = function (e, observe) {
  if (e[0].isIntersecting) {
    e[0].target.classList.remove("section--hidden");
    observe.unobserve(e[0].target);
  }
};

const sectionHiddenObs = new IntersectionObserver(sectionHiddenFun, {
  root: null,
  threshold: 0.2,
});

sectionHiddenAll.forEach(function (el) {
  sectionHiddenObs.observe(el);
});

//一下为新添加功能的代码
//处理登录功能的代码

const passExamine = function () {
  accounts.forEach(function (obj) {
    if (obj.owner.split(" ")[0] === loginUser.value.trim()) {
      if (obj.pass === +loginPsswd.value) {
        loginState = true;
      }
    }
  });
  return loginState;
};

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (passExamine()) {
    // console.log("ログイン成功");

    window.removeEventListener("scroll", loginPageScroll);
    section__1.classList.add("active");
    loginStr.style.display = "none";
    loginButton.classList.add("active");

    //按钮更换颜色

    setTimeout(function () {
      inputForm.classList.add("active");
      setTimeout(function () {
        inputForm.style.display = "none";
        nav__links.classList.remove("displayNone");
      }, 600);
    }, 1500);
  } else {
    alert("パスワード或いはユーザー名が間違えた");
  }
});

//未登录以前800以下锁定

window.addEventListener("scroll", loginPageScroll);

function loginPageScroll(e) {
  e.preventDefault();
  if (this.pageYOffset >= 800) {
    this.window.scrollTo(0, 800);
  }
}

////打字机效果
const introduceJazzStr1 = [
  "生で聞けるJazz",
  `毎週 水曜日・木曜日・土曜日生演奏●18:30開場 1st ステージ
            19:00〜19:40 2ndステージ 20:10〜20:50 21:00閉店
            ・水曜日・木曜日・土曜日投げ銭システムでの公演とさせて頂いております。`,
];
const introduceJazzStr2 = [
  "Night Jazz Live",
  `金・日 19:00開場
  Opening Set 19:30〜20:30
  Main Set    21:00〜22:00
  23:00閉店 チャージ制`,
];
const introduceObj = {
  0: introduceJazzStr1,
  1: introduceJazzStr2,
};

let timeIdText, timeIdTitle;
let idx = 0;

// 打字机效果
function typeWriter(str, el, i = 0) {
  if (i <= str.length) {
    el.textContent = str.slice(0, i++);
    timeIdText = setTimeout(() => typeWriter(str, el, i), 15);
  }
}

// 切换标题
function switchTitle(str, el) {
  el.classList.add("cl");
  clearTimeout(timeIdTitle);
  timeIdTitle = setTimeout(() => {
    el.textContent = str;
    el.classList.remove("cl");
  }, 400);
}

// 主切换函数
function switchSlide() {
  // 先清掉旧的定时器
  clearTimeout(timeIdText);
  clearTimeout(timeIdTitle);

  // 拿到新的标题和内容
  idx = (idx + 1) % 2;
  const [newTitle, newText] = introduceObj[idx];

  // 清空内容，启动打字机
  introduceStrValueJazz1.textContent = "";
  typeWriter(newText, introduceStrValueJazz1);

  // 切换标题
  switchTitle(newTitle, introduceStrHeadeJazz1);
}

// 监听按键
window.addEventListener("keydown", (e) => {
  if (e.key === "h") {
    e.preventDefault();
    switchSlide();
  }
});
