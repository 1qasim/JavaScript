var colorNames = ["red", "blue", "green"];
document.write(colorNames + "</br></br>");
var userStartingAddition = prompt("what color do yo want to add at the begining of the array?");
colorNames.unshift(userStartingAddition);
document.write(colorNames + "</br></br>");
var userEndingAddition = prompt("what color do yo want to add at the end of the array?");
colorNames.push(userEndingAddition);
document.write(colorNames + "</br></br>");
var userStartingAdditionB = prompt("Which two colors do yo want to add at the begining of the array?");
colorNames.unshift(userStartingAdditionB);
document.write(colorNames + "</br></br>");

// D
colorNames.pop();
document.write(colorNames + "</br></br>");

// E
var userMiddleIndex = prompt("tell index from which you want to add  ");
var userMiddleAddition = prompt("tell color ");
colorNames.splice(userMiddleIndex, 0, userMiddleAddition);

// F
var userMiddleIndexB = prompt("tell index from which you want to Delete  ");
var userMiddleDeletion = prompt("tell how many you want to Delete  ");
var additionDeletion = prompt("tell what you want to add")
colorNames.splice(userMiddleIndex, userMiddleDeletion, userMiddleAddition);
document.write(colorNames + "</br></br>");
