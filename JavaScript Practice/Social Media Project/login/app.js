let userEmail = document.querySelector("#useremail");
let userPassword = document.querySelector("#userpassword");
let loginButton = document.querySelector("#login");
let arrayOfUser = JSON.parse(localStorage.getItem("users"))
let loggedInUser;
console.log(arrayOfUser)
function loginHandler(){
    const userFound = arrayOfUser.find((user)=>{
        if(user.useremail === userEmail.value) return user 
    })
    if(!userFound) alert("No user found with this email address")
    console.log(userFound)
    if(userFound){
        if(userFound.userpassword === userPassword.value){
            alert("login successfully")
            loggedInUser = {
                loggedInuserEmail:userFound.useremail,
                loggedInUserName:userFound.username
            }
            console.log(loggedInUser)
            localStorage.setItem("loggedInUser",JSON.stringify(loggedInUser))
            setTimeout(()=>{
                window.location.href = "../home/index.html"
            
            },2000)
        }else alert("Incorrect Password")
    }
}
  