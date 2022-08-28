// signin get data

let user_acces = JSON.parse(localStorage.getItem("singupData")) || [];
let signin = document.querySelector("#btn");
signin.addEventListener("click", login);

let email = document.querySelector("#email");
let psw = document.querySelector("#psw");
user_acces.map(function (e) {
  email.value = e.email;
  psw.value = e.psw;
});

function login(event) {
  event.preventDefault();
  window.location.href = "index.html";
}
