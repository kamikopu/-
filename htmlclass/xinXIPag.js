"use strict";
const usrINput = document.querySelectorAll(".Uer__input");
const KaKuIn = document.querySelector(".kaKuIn");
const outPut = document.querySelectorAll(".out-put");
const fallnoOutput = document.querySelector(".section4");
const reSet = document.querySelector(".re");
const sennt = document.querySelector(".sennt");
const select1 = document.getElementById("select1");
const mainClassData = document.querySelectorAll(".main-input");
//单独的性别的dom链接
const seiOutPut = document.querySelector(".sei-out-put");
//单独的多选链接
const selectAll = document.querySelectorAll(".selectAll");
const dropdown = document.getElementById("dropdown");
const senTaKuOutPut = document.querySelector(".senTaKu-out-put");

let miNyuRyuKu = 0;
let KaKuInKaiSu = 0;

let isNullOr = false;
let kaKuNin = false;
let selectRzot;

// 确认按钮函数　和 确认必要输入字符完整
const bescFun = function () {
  KaKuIn.addEventListener("click", function (e) {
    e.preventDefault();
    //获取单选的值
    selectRzot = document.querySelector('input[name="method"]:checked')?.value;

    for (let i = 0; i < usrINput.length; i++) {
      if ((usrINput[i].value + "").trim() !== "") {
        outPut[i].textContent = `${usrINput[i].value}`;

        ///主要输入信息 如果已输入 还包含失败的设定的话去除
        if (i === 2 || i === 0) {
          switch (i) {
            case 0:
              usrINput[i].style.backgroundColor = "#ffffff";
              usrINput[i].setAttribute("placeholder", "紙　コップ");
              break;
            case 2:
              usrINput[i].style.backgroundColor = "#ffffff";
              usrINput[i].setAttribute("placeholder", "123456@xxx.com");
              break;
          }
        }
      } else {
        outPut[i].textContent = "未入力";

        kaKuNin = false;

        //判定 重要信息没输入是 的style改变 尝试用css文件优化效果 失败 css 能力范围外

        if (i === 2 || i === 0) {
          usrINput[i].style.backgroundColor = "rgb(255, 42, 0)";
          usrINput[i].setAttribute("placeholder", "重要メッセージ未入力");
        }
      }
    }
    ///以上为循环

    kaKuNin = true;

    //性别的单独判定
    if (selectRzot === undefined) {
      seiOutPut.textContent = "未入力";
    } else {
      seiOutPut.textContent = selectRzot;
    }

    //单独的下拉选择判定

    if (dropdown.value === "") {
      senTaKuOutPut.textContent = "未入力";
    } else {
      senTaKuOutPut.textContent = dropdown.value;
    }

    if (usrINput[0].value.trim() !== "" && usrINput[2].value.trim() !== "") {
      isNullOr = true;
    } else {
      isNullOr = false;
    }

    console.log(usrINput);

    fallnoOutput.classList.remove("out");
  });
};
// //尝试改变颜色成功
// usrINput[2].style.backgroundColor = "rgb(255, 42, 0)";

//重置按钮

bescFun();
const resetFun = function () {
  reSet.addEventListener("click", function (e) {
    e.preventDefault();

    miNyuRyuKu = 0;
    KaKuInKaiSu = 0;

    usrINput.forEach((el) => {
      el.value = "";
    });
    fallnoOutput.classList.add("out");

    //重置下拉选择
    dropdown.value = "";

    //设定性别为undefined 新方法 重点学习
    [...select1.children].forEach((element) => {
      const radio = element.querySelector('input[type="radio"]');
      if (radio.checked) {
        radio.checked = false;
      }
    });

    // 与上方不同 利用新设定的main class 来变更主输入信息的失败条件

    for (let i = 0; i < mainClassData.length; i++) {
      mainClassData[i].style.backgroundColor = "#ffffff";

      switch (i) {
        case 0:
          mainClassData[i].setAttribute("placeholder", "紙　コップ");
          break;
        case 1:
          mainClassData[i].setAttribute("placeholder", "123456@xxx.com");
          break;
      }
    }
  });
};

resetFun();

// 送信

const senntFun = function () {
  sennt.addEventListener("click", function (e) {
    e.preventDefault();

    if (!kaKuNin) {
      if (KaKuInKaiSu === 0) {
        alert("確認ボタンを押して");
        return KaKuInKaiSu++;
      } else if (KaKuInKaiSu === 1) {
        alert("だから先に確認ボタンを押してっで(╯°□°）╯︵ ┻━┻");
        return KaKuInKaiSu++;
      } else if (KaKuInKaiSu === 2) {
        alert("あほかお前");
        return KaKuInKaiSu++;
      } else if (KaKuInKaiSu >= 3) {
        alert(".....");
        return KaKuInKaiSu++;
      }
    }

    if (!isNullOr) {
      if (miNyuRyuKu === 0) {
        alert("⁜ データ入力未完成");
        return miNyuRyuKu++;
      } else if (miNyuRyuKu === 1) {
        alert("だから　⁜ データ入力未完成で(╯°□°）╯︵ ┻━┻");
        return miNyuRyuKu++;
      } else if (miNyuRyuKu === 2) {
        alert("あほかお前");
        return miNyuRyuKu++;
      } else if (miNyuRyuKu >= 3) {
        alert(".....");
        return miNyuRyuKu++;
      }
    }

    miNyuRyuKu = 0;
    KaKuInKaiSu = 0;

    //重置下拉选择
    dropdown.value = "";

    alert("完了");

    usrINput.forEach((el) => {
      el.value = "";
    });

    fallnoOutput.classList.add("out");

    isNullOr = false;
  });
};

senntFun();
