var char =prompt("Enter a charachter");
char = char.charCodeAt(0);
if ((char >= 65)&&(char <= 90)) {
   document.write("input is upper case letter");
}
else if ((char >= 97) && (char <= 122)) {
    document.write("Input is lowercase letter");
} 
else {
    document.write("Input is a number");
}