// singup page details

let objArr = JSON.parse(localStorage.getItem("singupData")) || [];
let signin = document.querySelector("#btn");
signin.addEventListener("click", login);
document.querySelector("#btn").addEventListener("click", myfunction);
function myfunction(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let firstname = document.querySelector("#firstname").value;
  let lastname = document.querySelector("#lastname").value;
  let psw = document.querySelector("#psw").value;
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;

  let objdata = {
    email,
    firstname,
    lastname,
    psw,
    day,
    month,
    year,
  };
  objArr.push(objdata);
  localStorage.setItem("singupData", JSON.stringify(objArr));
}
function login(event) {
  event.preventDefault();
  window.location.href = "singin.html";
}
