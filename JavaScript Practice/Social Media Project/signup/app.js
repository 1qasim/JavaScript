let userName = document.querySelector("#username");
let userEmail = document.querySelector("#useremail");
let userPassword = document.querySelector("#userpassword");
let cPassword = document.querySelector("#cpassword"); 
let signupButton = document.querySelector("#signup"); 
let localArrayOfUser = JSON.parse(localStorage.getItem("users")) || []
function signupHandler(){
   if (userName.value && userEmail.value && userPassword.value && cPassword.value){ 
    if(userPassword.value.length     >= 8){
        if(userPassword.value === cPassword.value){
           let userInfo =   {
                username: userName.value,
                useremail: userEmail.value,
                userpassword: userPassword.value
            }
              
            
            localArrayOfUser.push(userInfo)
            localStorage.setItem("users", JSON.stringify(localArrayOfUser))
            alert("Signup Successfully")
            console.log(userInfo)
            console.log(localArrayOfUser)
            setTimeout(() => {
                window.location.href = "../login/index.html"
            }, 3000);
        }else alert("Ooops Password not match")
     
        
    }else(alert("Password must be 8 characters long"))
    
   }else alert("Please fill out all fields")
}

