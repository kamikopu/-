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
const loginInput = document.querySelectorAll(".login_input");
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
const introduceStrValuePublicBath1 = document.querySelector(
  ".introduce__str__value__public-bath__1"
);
const introduceStrHeadePublicBath1 = document.querySelector(
  ".introduce__str__heade__public-bath__1"
);
const introduceStrValueTobaccoShop1 = document.querySelector(
  ".introduce__str__value__tobacco-shop__1"
);
const introduceStrHeadeTobaccoShop1 = document.querySelector(
  ".introduce__str__heade__tobacco-shop__1"
);
const welcomeStr = document.querySelector(".welcomeStr");

//登入资料和状态
let userData1 = {
  owner: "ケイ カンハク",
  pass: 1111,
};

let userData2 = {
  owner: "パク ヨノ",
  pass: 1111,
};

let userData3 = {
  owner: "オビナタ ハルト",
  pass: 1111,
};

let userData4 = {
  owner: "リンタロウ リンタロウ",
  pass: 1111,
};

const accounts = [userData1, userData2, userData3, userData4];
///////////////////////////////为了测试设定为true
let loginState = false;

//介绍文字变量和数据⬇️
const introduceJazzStr1 = [
  "冬の大宮公園",
  `雪に覆われた桜の木々が立ち並び、静かで幻想的な景色が広がる冬の大宮公園。
  落ち着いた雰囲気の中で、四季の移ろいを感じられる風景です。`,
];
const introduceJazzStr2 = [
  "春の大宮公園と東屋",
  `池の周囲に咲き誇る桜と、水面に映る花びらが春の風情を演出します。
  緑色の東屋（あずまや）は、公園のシンボルとして親しまれ、花見シーズンには特に人気のスポットです。`,
];

const introduceJazzStr3 = [
  "荘厳で美しい桜",
  `明治時代以降、国家のために命を捧げた英霊を祀るために創建されました。境内は四季折々の自然に囲まれており、
特に春には美しい桜が咲き誇り、多くの参拝者や観光客で賑わいます。静かで荘厳な雰囲気の中、日本の歴史や伝統を感じることができる場所です。`,
];

const introduceObj = {
  0: introduceJazzStr1,
  1: introduceJazzStr2,
  2: introduceJazzStr3,
};

const introducePublicBathStr1 = [
  "全年齢が楽しめるアスレチックパーク",
  `地形を活かしたアスレチックコース。子供から大人まで楽しめる遊具が24種類あります。
  `,
];
const introducePublicBathStr2 = [
  "紅葉を楽しめるカエデ園",
  `東京ドーム約65個分の広大な敷地に木々が広がる国営武蔵丘陵森林公園では、各所で紅葉を楽しめる。
なかでも約20種約500本のカエデが集まるカエデ園は、11月中旬から下旬に見頃を迎える人気スポットです。
  `,
];

const introducePublicBathStr3 = [
  "西口ひろばの斜面地に広がる、約4500㎡のネモフィラ花畑。",
  `丘の上から見ると水色のお花たちが正面を向いてくれているので写真スポットとしておすすめです。`,
];

const introducePublicBathObj = {
  0: introducePublicBathStr1,
  1: introducePublicBathStr2,
  2: introducePublicBathStr3,
};

const introduceTobaccoShopStr1 = [
  "所沢航空発祥記念館と輸送機展示",
  `所沢航空発祥記念館」に向かうと、公園のほぼ中心部にあたる場所に「C-46」という航空自衛隊で使用されていた中型輸送機が展示されている。「YS-11」とならび公園のシンボルと言える銀色とオレンジ色の機体の傍らには、航空発祥を記した石碑も見られる。`,
];
const introduceTobaccoShopStr2 = [
  "都市公園内のむさしの川",
  `市街地のまっただ中にある広大な都市公園。その公園の中には、「むさしの川」という小さな川が流れています。
  この川は、市民の憩いの場であるとともに、急激な都市化による洪水から住民の暮らしを守る役割を担っている。`,
];

const introduceTobaccoShopObj = {
  0: introduceTobaccoShopStr1,
  1: introduceTobaccoShopStr2,
};

//介绍文字变量和数据⬆️

//结合
const tupianlunboFun = function (
  slide,
  dos,
  dosNuber,
  btnLeft,
  btnRight,
  introduceStrObj,
  introduceTitleDomLink,
  introduceStoryDomLink
) {
  let curSlide = 0;
  const maxSlide = slide.length;
  let timeIdText, timeIdTitle;
  let dots;
  //文字的动画计时器

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
    switchSlide(
      curSlide,
      introduceStrObj,
      introduceStoryDomLink,
      introduceTitleDomLink
    );
  });

  //左边的按钮

  btnLeft.addEventListener("click", function (e) {
    e.preventDefault();
    leftBtnFun();
    aotoImg();

    dotsActive(curSlide);
    switchSlide(
      curSlide,
      introduceStrObj,
      introduceStoryDomLink,
      introduceTitleDomLink
    );
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
        switchSlide(
          curSlide,
          introduceStrObj,
          introduceStoryDomLink,
          introduceTitleDomLink
        );
      });
    });
  }
  dostEventFun();

  //图片自动轮播
  let IntervalImg;
  function aotoImg() {
    clearInterval(IntervalImg);
    IntervalImg = setInterval(function () {
      //每次点击右边的按键 来实现图片的自动轮播
      rightButFun();
      dotsActive(curSlide);
      switchSlide(
        curSlide,
        introduceStrObj,
        introduceStoryDomLink,
        introduceTitleDomLink
      );
    }, 5000);
  }

  ////打字机效果
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
  function switchSlide(
    Slide,
    introduceObjS,
    introduceStrValue,
    introduceStrHeade
  ) {
    // 先清掉旧的定时器
    clearTimeout(timeIdText);
    clearTimeout(timeIdTitle);

    // 拿到新的标题和内容
    const [newTitle, newText] = introduceObjS[Slide];

    // 清空内容，启动打字机
    introduceStrValue.textContent = "";
    typeWriter(newText, introduceStrValue);

    // 切换标题
    switchTitle(newTitle, introduceStrHeade);
  }

  aotoImg();
};

//轮播函数启用
tupianlunboFun(
  slides1,
  dos1,
  1,
  btnLeft1,
  btnRight1,
  introduceObj,
  introduceStrHeadeJazz1,
  introduceStrValueJazz1
);
tupianlunboFun(
  slides2,
  dos2,
  2,
  btnLeft2,
  btnRight2,
  introducePublicBathObj,
  introduceStrHeadePublicBath1,
  introduceStrValuePublicBath1
);
tupianlunboFun(
  slides3,
  dos3,
  3,
  btnLeft3,
  btnRight3,
  introduceTobaccoShopObj,
  introduceStrHeadeTobaccoShop1,
  introduceStrValueTobaccoShop1
);

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

//下方导航栏动画

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

// 章节解除隐藏时再初始化文字
const sectionHiddenObs = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sec = entry.target; // ← 正确取出目标
        sec.classList.remove("section--hidden");
        observer.unobserve(sec); // ← 正确地取消观测

        // 根据 className 分别初始化各节的文字
        if (sec.classList.contains("section__1")) {
          switchSlide(
            0,
            introduceObj,
            introduceStrValueJazz1,
            introduceStrHeadeJazz1
          );
        } else if (sec.classList.contains("section__2")) {
          switchSlide(
            0,
            introducePublicBathObj,
            introduceStrValuePublicBath1,
            introduceStrHeadePublicBath1
          );
        } else if (sec.classList.contains("section__3")) {
          switchSlide(
            0,
            introduceTobaccoShopObj,
            introduceStrValueTobaccoShop1,
            introduceStrHeadeTobaccoShop1
          );
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);

// 启动观察
document
  .querySelectorAll(".section--hidden")
  .forEach((el) => sectionHiddenObs.observe(el));
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

function findUserName() {
  let userName;
  accounts.forEach(function (obj) {
    if (obj.owner.split(" ")[0] === loginUser.value.trim()) {
      userName = obj.owner;
    }
  });
  return userName;
}

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (passExamine()) {
    // console.log("ログイン成功");

    window.removeEventListener("scroll", loginPageScroll);
    section__1.classList.add("active");
    loginStr.style.display = "none";
    loginButton.classList.add("active");
    loginInput.forEach((el) => el.classList.add("active"));
    welcomeStr.textContent = `お帰り ${findUserName()}様`;
    welcomeStr.classList.add("active");

    //按钮更换颜色

    setTimeout(function () {
      inputForm.classList.add("active");
      // welcomeStr.classList.add("animate-strhighlight");　//想加高亮要再改css
      setTimeout(function () {
        inputForm.style.display = "none";
        nav__links.classList.remove("displayNone");
      }, 600);
    }, 2000);
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
