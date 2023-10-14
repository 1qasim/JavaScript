var userAgeYear = prompt("Enter your birth Year");
var userAgeMonth = prompt("Enter your birth Month");
var userAgeDay = prompt("Enter your birthday");

function ageCalculator(){
    var todaysDate = new Date();
    var todaysDateYear = todaysDate.getFullYear();
    var userCurrentAge =  todaysDateYear - userAgeYear;
    // var userCurrentMonth = Number(userAgeMonth);
    document.write("<h1>" + userCurrentAge + " Years </br></h1>");
    document.write((todaysDate.getMonth() + 1) - userAgeMonth + " Months");
    document.write("<h1>" + todaysDate.getDate()  + " Days </br></h1>");

}

ageCalculator()