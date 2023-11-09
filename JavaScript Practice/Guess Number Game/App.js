let mainContainer = document.querySelector("#mainContainer")
let againButton = document.querySelector("#again")
let numberGuessed = document.querySelector("#number");
let checkButton = document.querySelector("#check");
let remarks = document.querySelector("#remarks")
let randomNumber = Math.round(Math.random() * 19) + 1;
let answer = document.querySelector("#qmark");
let score = document.querySelector("#score");
let highScore = document.querySelector("#highScore");
let scoreValue = 20;
score.innerHTML += `: ${scoreValue}`
console.log(randomNumber);
checkButton.addEventListener("click", () => {
    if(numberGuessed.value == randomNumber) {
        remarks.textContent = "Congratulations You Won"
        highScore.innerHTML = `High Score: ${scoreValue}`
        answer.innerHTML = randomNumber
        console.log(answer.innerHTML)
        mainContainer.style.backgroundColor = "green"
       }
    else if(numberGuessed.value > randomNumber){
        remarks.textContent = "Too High"
        --scoreValue
        score.innerHTML = `Score: ${scoreValue}`
    }
    else if(numberGuessed.value < randomNumber ) {
        remarks.textContent = "Too Low"
        scoreValue--
        score.innerHTML = `Score: ${scoreValue}`
    }
}
)
againButton.addEventListener("click",() => {
    window.location.reload();   
})
