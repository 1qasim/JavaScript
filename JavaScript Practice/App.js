// var cleanestCities = ["karachi", "islamabad", "lahore", "sukkhur", "peshawar"];
// var userCity = prompt("Enter Your City");
// matchFound = false;
// for(i=0; i < cleanestCities.length; i++) {
//     if (userCity === cleanestCities[i]) {
//         matchFound = true;
//         alert ("It is one of the Cleanest City");
//         break;
//     } else if (matchFound === false){
//         alert("This city is not in list");
//     }
// }

// var counterNumber2 = 3;

var counterNumber = 0;

function incrementHandler() {
    document.getElementById("value").innerHTML = ++counterNumber;
    if (counterNumber >= 1 ) {
        document.getElementById("value").style.color = "black"
    }
  
}
function decrementHandler() {
    // document.getElementById("value").innerHTML = --counterNumber;
    if (counterNumber === 0 ) {
        document.getElementById("value").style.color = "red"
        document.getElementById("value").innerHTML = counterNumber*0;
    }
    else {
        document.getElementById("value").innerHTML = --counterNumber;
    }
}

function resetHandler() {
    document.getElementById("value").innerHTML = counterNumber*0;
    
  
}
