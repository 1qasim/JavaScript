// Q 1
// let firstName = prompt("Enter your first Name");
// let lastName = prompt("Enter your second Name");
// alert("Hello " + firstName + " " + lastName + " Welcome to our website")

// Q 2
// let favMob = prompt("Enter your favourite mobile phone model");
// alert( "Your fovourite mobile phone is " + favMob + " length "  + favMob.length);

// question 3 
// var text = "Pakistani";
// document.write( "<h1>Index of n: " + text.indexOf("n")+"</h1>");

// Question 4
// var text = "Hello World";
// document.write( "<h1>Last Index of l: " + text.lastIndexOf("l")+"</h1>");


// Question 5

// var text = "Pakistani";
// document.write( "<h1>Character at index 3: " + text.charAt(3)+"</h1>");


// Question 7
// var text = "Hyderabad";
// document.write( "<h1>City Name: Hyderabad </br> After replace: " + text.replace("Hyder","Islam")+"</h1>");

// Question 8
// var text = "Ali and Sami are best friends. They play cricket and football together";
// document.write("<h1> Before:  " + text + "</h1>")
// document.write( "<h1>After: " + text.replace(/and/g,"&") +"</h1>");

// Question 9 
// var strinG = "472";
// document.write(" <h1> Value: "+ strinG + "</br>" + "Type: " +  typeof(strinG) + "</h1>");
// var convertTypestring = parseInt(strinG);
// document.write(" <h1> Value: "+ strinG + "</br>" + "Type: " +  typeof(convertTypestring) + "</h1>");

// Question 10
// var userInput = prompt("Enter Some thing in small letters");
// alert(userInput.toUpperCase());

// Question 11
// var userInput = prompt("Enter Some thing in small letters");
// var string = (userInput.charAt(0).toUpperCase() + userInput.slice(1));    
// alert(string);

// Question 12
// var num = 35.36 * 100;
// var string = parseInt(num);
// console.log(string);

// Question 13
// var userInput = prompt("Enter username");
// var convertInASCII = userInput.charCodeAt();
// console.log(convertInASCII);


// let txt = "I bananas";
// alert(txt.slice(2,9));
var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i,i+2) === "  ") 
 alert("No double spaces!");
 break;}