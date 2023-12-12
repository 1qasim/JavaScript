let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let homeLoginU = document.querySelector("loggedinuserName")
let arrayOfUser;
let localStorageSignupInfo = JSON.parse(localStorage.getItem("user"))|| []

homeLoginU.innerHTML = userName.value

