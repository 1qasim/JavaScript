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


// Question 14
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties" ]
// let userItem = prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am?");
// let matchFound = false;
// console.log(userItem);
// console.log(bakeryItems[0])
// console.log(matchFound)

// for(var i=0; i <=bakeryItems.length; i++)
//     if(userItem.toLocaleLowerCase() === bakeryItems[i] ){
//         matchFound = true;
//         alert(`${userItem} is available`);
//         break;
//     }
//  if(matchFound === false){
//     alert(`${userItem} is not available`);
//  }   

// Question 16
// let university = "University of Karachi"
// let universityArray = university.split("");
// console.log(universityArray);
// for (var i=0; i<= universityArray.length - 1; i++)
// document.write(`${universityArray[i]} </br>`);

// Question 17
// let userInput = prompt("enter your input");
// let splittedUserInput = userInput.split("");
// let indexNumber = splittedUserInput.length - 1;
// console.log(splittedUserInput[indexNumber]);

// Question 18
// let text = "the quick brown fox jumps over the lazy dog";
// let myArray = text.split(" ");
// let num = 0;
// for(var i = 0; i<= myArray.length; i++ ){
//     if(myArray[i]=== "the"){
//         num++
//     }
    
// }
// console.log(num);