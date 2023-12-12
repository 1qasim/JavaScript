let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let homeLoginU = document.querySelector("loggedinuserName")
let arrayOfUser;
let localStorageSignupInfo = JSON.parse(localStorage.getItem("user"))|| []
console.log(localStorageSignupInfo)
function signUPHandler(){
    if(!userName.value || !email.value || !password.value){
        alert("please fill all fields")
    } else if (password.value.length < 8 ) return alert("Password length must be 8 characters long")
    else{ alert("Signup Successfully diverting you to the login page")

        arrayOfUser = {
            "Name": userName.value,
            "Password": password.value,
            "Email": email.value
        }
        localStorageSignupInfo.push(arrayOfUser)
        console.log(arrayOfUser)
        console.log(localStorageSignupInfo)
       localStorage.setItem("user", JSON.stringify(localStorageSignupInfo)) 
                setTimeout(()=>{
                    window.location.href = "../Login/login.html"
                }, 5000)
                userName.value = ""
                email.value = ""
                password.value = ""
}
} 

