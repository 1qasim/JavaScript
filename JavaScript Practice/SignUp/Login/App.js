let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let homeLoginU = document.querySelector("loggedinuserName")
let arrayOfUser;
let localStorageSignupInfo = JSON.parse(localStorage.getItem("user"))|| []









function loginHandler(){
    localStorageSignupInfo.find(()=>{
        userName.value === localStorageSignupInfo.Name
        if(password.value === localStorageSignupInfo.Password){
            window.location.href = "../Home/home.html"
           
        } else alert("username or password incorrect")
    })
}