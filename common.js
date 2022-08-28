let facebook = document.querySelector("#fb");
facebook.addEventListener("click", funs);
let instagram = document.querySelector("#insta");
instagram.addEventListener("click", funs2);
let sharechat = document.querySelector("#schat");
sharechat.addEventListener("click", funs3);

function funs() {
  window.location.href = "https://www.facebook.com/ASOS/";
}

function funs2() {
  window.location.href = "https://www.instagram.com/asos/";
}

function funs3() {
  window.location.href = "https://www.snapchat.com/add/asosfashion";
}
