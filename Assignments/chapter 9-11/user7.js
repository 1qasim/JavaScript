var secretNumber = 9;
var userInput = +prompt("Enter your Number");
if(userInput === secretNumber) {
    alert("Bingo! Correct Answer");
}
else if (++userInput === secretNumber ) {
    alert("OOOh!!!  Close Enough to the correct answer");
}
