"use strict";
// CHỨC NĂNG ẨN THÔNG TIN CÁ NHÂN
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Hiển thị lỗi khi nhập sai
  const errorEmail = document.getElementById("error");
  //Kiểm tra xem email nhập vào có đúng với định dạng hay không
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(regex);
  // Thông tin cá nhân
  const myInfo = document.querySelector(".info");
  // Kiểm soát submit
  const submit = document.querySelector(".submit-email");
  if (check) {
    myInfo.style.display = "block";
    submit.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Địa chỉ email không chính xác";
  }
}
// CHỨC NĂNG ẨN THÔNG TIN NGHỀ NGHIỆP
const viewMore = document.querySelector(".view-more");
const viewLess = document.querySelector(".view-less");
const exp = document.querySelector(".exp1");
function onMouseOver() {
  if (viewLess.style.display === "none") {
    viewMore.style.display = "inline-block";
  } else {
    viewMore.style.display = "none";
  }
}
function onMouseOut() {
  viewMore.style.display = "none";
}
function handleViewMore() {
  exp.style.display = "block";
  viewLess.style.display = "block";
}

function handleViewLess() {
  viewLess.style.display = "none";
  exp.style.display = "none";
}
//CHỨC NĂNG ẨN THÔNG TIN HỌC VẤN
const eduViewMore = document.querySelector(".view-more1");
const eduViewLess = document.querySelector(".view-less1");
const edu = document.querySelector(".edu-1");
function eduOnMouseOver() {
  if (eduViewLess.style.display === "none") {
    eduViewMore.style.display = "inline-block";
  } else {
    eduViewMore.style.display = "none";
  }
}
function eduOnMouseOut() {
  eduViewMore.style.display = "none";
}
function eduHandleViewMore() {
  edu.style.display = "block";

  eduViewLess.style.display = "block";
}

function eduHandleViewLess() {
  eduViewLess.style.display = "none";
  edu.style.display = "none";
}
//CHỨC NĂNG ẨN THÔNG TIN HOẠT ĐỘNG
const actViewMore = document.querySelector(".view-more2");
const actViewLess = document.querySelector(".view-less2");
const act = document.querySelector(".act2");
function actOnMouseOver() {
  if (actViewLess.style.display === "none") {
    actViewMore.style.display = "inline-block";
  } else {
    actViewMore.style.display = "none";
  }
}
function actOnMouseOut() {
  actViewMore.style.display = "none";
}
function actHandleViewMore() {
  act.style.display = "block";

  actViewLess.style.display = "block";
}

function actHandleViewLess() {
  actViewLess.style.display = "none";
  act.style.display = "none";
}
//CHỨC NĂNG ẨN THÔNG TIN SỞ THÍCH
const hobViewMore = document.querySelector(".view-more3");
const hobViewLess = document.querySelector(".view-less3");
const hob = document.querySelector(".hob-2");
function hobOnMouseOver() {
  if (hobViewLess.style.display === "none") {
    hobViewMore.style.display = "inline-block";
  } else {
    hobViewMore.style.display = "none";
  }
}
function hobOnMouseOut() {
  hobViewMore.style.display = "none";
}
function hobHandleViewMore() {
  hob.style.display = "block";

  hobViewLess.style.display = "block";
}

function hobHandleViewLess() {
  hobViewLess.style.display = "none";
  hob.style.display = "none";
}
//CHỨC NĂNG ẨN THÔNG TIN NGOẠI NGỮ
const langViewMore = document.querySelector(".view-more4");
const langViewLess = document.querySelector(".view-less4");
const lang = document.querySelector(".lang-1");
function langOnMouseOver() {
  if (langViewLess.style.display === "none") {
    langViewMore.style.display = "inline-block";
  } else {
    langViewMore.style.display = "none";
  }
}
function langOnMouseOut() {
  langViewMore.style.display = "none";
}
function langHandleViewMore() {
  lang.style.display = "block";

  langViewLess.style.display = "block";
}

function langHandleViewLess() {
  langViewLess.style.display = "none";
  lang.style.display = "none";
}
//CHỨC NĂNG ẨN THÔNG TIN KỸ NĂNG
const skillViewMore = document.querySelector(".view-more5");
const skillViewLess = document.querySelector(".view-less5");
const skill = document.querySelector(".skill-2");
function skillOnMouseOver() {
  if (skillViewLess.style.display === "none") {
    skillViewMore.style.display = "inline-block";
  } else {
    skillViewMore.style.display = "none";
  }
}
function skillOnMouseOut() {
  skillViewMore.style.display = "none";
}
function skillHandleViewMore() {
  skill.style.display = "block";

  skillViewLess.style.display = "block";
}

function skillHandleViewLess() {
  skillViewLess.style.display = "none";
  skill.style.display = "none";
}
