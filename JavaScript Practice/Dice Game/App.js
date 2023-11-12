let player1NameTag= document.querySelector("#player1");
player1NameTag.innerHTML = prompt("Enter 1st Player Name");
let player1Name = player1NameTag.innerHTML;
let player2NameTag= document.querySelector("#player2");
player2NameTag.innerHTML = prompt("Enter 2nd Player Name");
let player2Name = player2NameTag.innerHTML;
let rollDiceButton = document.querySelector("#roll")
console.log(rollDiceButton)
let rollDiceNumber;
let rollDiceImage = document.querySelector("#diceImage")
let player1CurrentScore = document.querySelector("#csp1")
let player2CurrentScore = document.querySelector("#csp2")
let player1CurrentScoreNumber = 0;
let player2CurrentScoreNumber = 0;
let player1TotalScore = document.querySelector("#totalScorep1");
let player2TotalScore = document.querySelector("#totalScorep2");
let player1TotalScoreNumber = 0;
let player2TotalScoreNumber = 0;
let holdButton = document.querySelector("#holdButton")
let player1Turn = true;
let player2Turn = false;
let newGameButton = document.querySelector("#newGame")
newGameButton.addEventListener("click",()=>{
    location.reload();
})
rollDiceButton.addEventListener("click",()=>{
    
    rollDiceNumber = Math.round(Math.random()*5) +1;
    rollDiceImage.src = `./Assets/${rollDiceNumber}.jpg`
   if(rollDiceNumber === 1){
    if (player1Turn){
        alert(`${player2Name} has to play`)
        player1CurrentScoreNumber = 0;
        player1CurrentScore.innerHTML = 0;
        player1Turn = false;
        player2Turn = true;
        checkForWin();
} else if(player2Turn){
    alert(`${player1Name} has to play`)
    player2CurrentScoreNumber = 0;
    player2CurrentScore.innerHTML = 0;
    player2Turn = false;
    player1Turn = true;
    
}

}else if (player1Turn){
    
    player1CurrentScoreNumber += rollDiceNumber;
    player1CurrentScore.innerHTML = player1CurrentScoreNumber;
    checkForWin();
}else if(player2Turn){
    
    player2CurrentScoreNumber += rollDiceNumber;
    player2CurrentScore.innerHTML = player2CurrentScoreNumber;
    checkForWin();
}
    
   }
   
)
holdButton.addEventListener("click", ()=> {
    if (player1Turn){
        
        
        player1TotalScoreNumber=  player1CurrentScoreNumber+player1TotalScoreNumber
        player1TotalScore.innerHTML = player1TotalScoreNumber;
        checkForWin();
        alert(`${player2Name} has to play`)
        player1CurrentScoreNumber = 0;
        player1Turn = false;
        player2Turn = true;
        
    } else if(player2Turn){
        
        
        player2TotalScoreNumber=  player2CurrentScoreNumber+player2TotalScoreNumber
        player2TotalScore.innerHTML = player2TotalScoreNumber;
        checkForWin();
        alert(`${player1Name} has to play`)
        player2CurrentScoreNumber = 0;
        player2Turn = false;
        player1Turn = true;
        
    }
})
let checkForWin = ()=>{
    if(player1TotalScoreNumber >= 30 || player1CurrentScoreNumber >=30){
        if(player1CurrentScoreNumber >=30){player1TotalScore.innerHTML = player1CurrentScoreNumber+player1TotalScoreNumber}
        player1TotalScore.innerHTML = player1CurrentScoreNumber
        document.getElementById("1").classList.add("winningCelebration");
        let winningAnnouncement = document.createElement("h2")
        let winningAnnouncmentHTML = document.createTextNode(`Congratulations ${player1Name} You Win`)
        winningAnnouncement.appendChild(winningAnnouncmentHTML);
        document.getElementById("player1").nextElementSibling.appendChild(winningAnnouncement)
        let lostAnnouncement = document.createElement("h2")
        lostAnnouncement.classList.add("h2Styling")
        let lostAnnouncmentHTML = document.createTextNode(`Oops ${player2Name} You Lost`)
        lostAnnouncement.appendChild(lostAnnouncmentHTML);
        document.getElementById("player2").nextElementSibling.appendChild(lostAnnouncement)
        rollDiceButton.setAttribute('disabled', true);
        holdButton.setAttribute('disabled', true);
        
       
    }else if (player2TotalScoreNumber >= 30 || player2CurrentScoreNumber >=30){
        if(player2CurrentScoreNumber >= 30){player2TotalScore.innerHTML = player2CurrentScoreNumber+player2TotalScoreNumber}
        document.getElementById("2").classList.add("winningCelebration");
        let winningAnnouncement = document.createElement("h2")
        let winningAnnouncmentHTML = document.createTextNode(`Congratulations ${player2Name} You Win`)
        winningAnnouncement.appendChild(winningAnnouncmentHTML);
        document.getElementById("player2").nextElementSibling.appendChild(winningAnnouncement)
        let lostAnnouncement = document.createElement("h2")
        let lostAnnouncmentHTML = document.createTextNode(`Oops ${player1Name} You Lost`)
        lostAnnouncement.appendChild(lostAnnouncmentHTML);
        document.getElementById("player1").nextElementSibling.appendChild(lostAnnouncement);
        rollDiceButton.setAttribute('disabled', true);
        holdButton.setAttribute('disabled', true);
        
        

    }
}