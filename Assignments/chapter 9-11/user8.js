var userInput = +prompt("Enter your Number");
var division = userInput % 3;
if (division === 0) {
    alert("Yes it is divisible by 3");
}
else {
    alert("No it is not divisible by 3");
}