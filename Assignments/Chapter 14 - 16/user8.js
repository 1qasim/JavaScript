var studentNames = [];
var studentMarks =[];

for(var i = 0; i < 3; i++) {
    studentNames.push(prompt("Enter Your Name"));
}

for(var i = 0; i < 3; i++) {
    studentMarks.push(prompt("Enter Your Marks"));
}
document.write("Socre of " + studentNames[0] + " is " + studentMarks[0] + " Percentage "  + (studentMarks[0] / 500)*100  + "</br>")
document.write("Socre of " + studentNames[1] + " is " + studentMarks[2] + " Percentage "  + (studentMarks[1] / 500)*100  + "</br>")
document.write("Socre of " + studentNames[2] + " is " + studentMarks[2] + " Percentage "  + (studentMarks[2] / 500)*100  + "</br>")
