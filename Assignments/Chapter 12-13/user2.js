// Question 2
var userInput1 = +prompt("Enter first Integer");
var userInput2 = +prompt("Enter second Integer");
if (userInput1 === userInput2) {
    alert("Both are equal");
}
else if (userInput1 > userInput2) {
    alert(userInput1 + " is greater")
} else {
    alert(userInput2 + " is greater")
}